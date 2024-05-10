
rm(list = ls(all.names = TRUE))
library(readxl)
library(writexl)
library(dplyr)
library(ggplot2)

dirs <- list()
dirs$main <- ("C:/Users/nbusch/Desktop/scene_cat_exp/scene_cat_exp_2023.2/")
# dirs$main <- ("C:/Users/nbusch/sciebo/Research Projects/2023_SceneCat/experiment_code_repo/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$input_files <-paste(dirs$main, "/input_files", sep="")

# –––––-------------------------------------------------------------------------
# List all Excel files in the folder that start with a number and follow the
# specified pattern, then read each file and concatenate into a single data
# frame.
# –––––-------------------------------------------------------------------------
file_list <- list.files(path = dirs$input_files, pattern = "^\\d+_(scenecat_memory|scenecat_categorization).*\\.xlsx$", full.names = TRUE)
raw_data <- lapply(file_list, read_excel) %>% bind_rows()

# –––––-------------------------------------------------------------------------
# Create a summary with one row for each unique stimulus.
# –––––-------------------------------------------------------------------------
summary_data <- raw_data %>%
  filter(cond_mem != "catch" | is.na(cond_mem)) %>%
  distinct(stimulus, category, typicality, p_typicality) %>%
  rowwise() %>%
  mutate(
    ntarget     = sum(raw_data$stimulus == stimulus & raw_data$task == "categorization" & raw_data$cond_cat == "target"),
    ndistractor = sum(raw_data$stimulus == stimulus & raw_data$task == "categorization" & raw_data$cond_cat == "distractor"),
    nold        = sum(raw_data$stimulus == stimulus & raw_data$task == "memory"         & raw_data$cond_mem == "old"),
    nnew        = sum(raw_data$stimulus == stimulus & raw_data$task == "memory"         & raw_data$cond_mem == "new")
  )

summary_data <- summary_data %>%
  mutate(
    condition = case_when(
      ntarget != 0 ~ "target",         # Assign "target" if ntarget is nonzero
      ndistractor != 0 ~ "distractor", # Assign "distractor" if ndistractor is nonzero
      nnew != 0 ~ "new",               # Assign "new" if nnew is nonzero
      TRUE ~ NA_character_             # Assign NA for rows where all values are zero
    )
  )


# Write the summary to an Excel file.
write_xlsx(summary_data, "scenecat_stimulus_selection_summary.xlsx", col_names =TRUE)


# –––––-------------------------------------------------------------------------
# Show a density plot of the distribution of typicality for the three conditions.
# –––––-------------------------------------------------------------------------
density_plot <- ggplot(summary_data, aes(x = typicality)) +
  geom_density(aes(group = condition, color = condition)) +
  labs(title = "Density of typicality",
       x = "Typicality",
       color = "Condition") +
  theme_minimal()
print(density_plot)


histogram_plot <- ggplot(summary_data, aes(x = p_typicality, fill = condition)) +
  geom_histogram(bins = 10, position = "dodge", alpha = 0.6) +
  labs(title = "Histogram of Typicality",
       x = "Typicality",
       y = "Frequency",
       fill = "Condition") +
  theme_minimal()

print(histogram_plot)


# –––––-------------------------------------------------------------------------
# Alternative visualization with line plots of images sorted by typicality.
# –––––-------------------------------------------------------------------------
sorted_data <- summary_data %>% arrange(typicality) # Sort data by typicality
sorted_data$Index <- seq_len(nrow(sorted_data)) # Manually add a sequence as a new column

# Create the line plot using the sorted Index
typicality_plot <- ggplot(sorted_data, aes(x = Index, y = typicality, group = condition, color = condition)) +
  geom_line(size = 0.75) +  # Increase line thickness
  labs(title = "Line Plot of Typicality Sorted by Value",
       x = "Sorted Index",
       y = "Typicality",
       color = "condition") +
  theme_minimal()+
  scale_color_manual(values = c("target" = "#E41A1C", "distractor" = "#377EB8", "new" = "#4DAF4A"))  # Custom colors
print(typicality_plot)
