
rm(list = ls(all.names = TRUE))
library(readxl)
library(writexl)
library(dplyr)
library(ggplot2)
library(forcats)

dirs <- list()
# dirs$main <- ("C:/Users/nbusch/Desktop/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$main <- ("C:/Users/nbusch/sciebo/Research Projects/2023_SceneCat/experiment_code_repo/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$input_files <-paste(dirs$main, "/input_files", sep="")

vars <- list()
vars$binning_variable        <- "r_typicality"    

# –––––-------------------------------------------------------------------------
# List all Excel files in the folder that start with a number and follow the
# specified pattern, then read each file and concatenate into a single data
# frame.
# –––––-------------------------------------------------------------------------
file_list <- list.files(path = dirs$input_files, pattern = "^\\d+.*(scenecat_memory|scenecat_categorization).*\\.xlsx$", full.names = TRUE)
#file_list <- list.files(path = dirs$input_files, pattern = "^\\d+_groupA_(scenecat_memory|scenecat_categorization).*\\.xlsx$", full.names = TRUE)
raw_data <- lapply(file_list, read_excel) %>% bind_rows() %>% 
  filter(cond_mem != "catch" | is.na(cond_mem)) 


# –––––-------------------------------------------------------------------------
# Create a summary with one row for each unique stimulus.
# –––––-------------------------------------------------------------------------
summary_data <- raw_data %>%
  distinct(stimulus, category, typicality, !!sym(vars$binning_variable)) %>%
  rowwise() %>%
  mutate(
    ntarget     = sum(raw_data$stimulus == stimulus & raw_data$task == "categorization" & raw_data$cond_cat == "target"),
    ndistractor = sum(raw_data$stimulus == stimulus & raw_data$task == "categorization" & raw_data$cond_cat == "distractor"),
    nold        = sum(raw_data$stimulus == stimulus & raw_data$task == "memory"         & raw_data$cond_mem == "old"),
    nnew        = sum(raw_data$stimulus == stimulus & raw_data$task == "memory"         & raw_data$cond_mem == "new")
  )

summary_data$r_typicality <- factor(summary_data$r_typicality)

summary_data <- summary_data %>%
  mutate(
    condition = case_when(
      ntarget     != 0 ~ "target",     # Assign "target" if ntarget is nonzero
      ndistractor != 0 ~ "distractor", # Assign "distractor" if ndistractor is nonzero
      nnew        != 0 ~ "new",        # Assign "new" if nnew is nonzero
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


bar_plot <- ggplot(summary_data, aes(x = !!sym(vars$binning_variable), fill = condition)) +
  geom_bar(position = "dodge") +  # position "dodge" to separate bars side by side within groups
  labs(x = "R Typicality", y = "Count", title = "Occurrences by R Typicality and Condition") +
  theme_minimal() +
  scale_fill_brewer(palette = "Set1")  # Optional: use a color palette that is distinct
  # scale_y_continuous(breaks = seq(1, 15, by = 2), limits = c(1, 15)) +  # Set breaks from 0 to 90, at intervals of 10
  # scale_x_continuous(breaks = seq(1, 10, by = 1), limits = c(1, 10))  # Set breaks from 0 to 90, at intervals of 10
print(bar_plot)

bar_plot <- ggplot(summary_data, aes(x = !!rlang::sym(vars$binning_variable), fill = condition)) +
  geom_bar(position = "dodge", stat = "count") +  # Ensure that geom_bar counts occurrences
  labs(x = "R Typicality", y = "Count", title = "Occurrences by R Typicality and Condition") +
  theme_minimal() +
  scale_fill_brewer(palette = "Set1") +  # Use a distinct color palette
  facet_wrap(~ category, scales = "free_x")  # Create panels separated by category, allow different x scales

# Print the plot
print(bar_plot)

# –––––-------------------------------------------------------------------------
# Alternative visualization with line plots of images sorted by typicality.
# –––––-------------------------------------------------------------------------
sorted_data <- summary_data %>% arrange(typicality) # Sort data by typicality
sorted_data$Index <- seq_len(nrow(sorted_data)) # Manually add a sequence as a new column

# Create the line plot using the sorted Index
typicality_plot <- ggplot(sorted_data, aes(x = Index, y = typicality, group = r_typicality, color = r_typicality)) +
  #geom_line(size = 0.75) +  # Increase line thickness
  geom_point(size = 1) +  # Plot only the data points and increase point size for better visibility
  ylim(0, 100) +
  labs(title = "Line Plot of Typicality Sorted by Value",
       x = "Sorted Index",
       y = "Typicality",
       color = "r_typicality") +
  #theme_minimal() +
  scale_color_manual(values = c("1" = "#1f77b4", "2" = "#ff7f0e", "3" = "#2ca02c", 
                                "4" = "#d62728", "5" = "#9467bd", "6" = "#8c564b", 
                                "7" = "#e377c2", "8" = "#7f7f7f", "9" = "#bcbd22", 
                                "10" = "#17becf")) +  # Custom colors for each bin
  guides(color = guide_legend(override.aes = list(size = 4))) +  # Increase point size in the legend
  facet_grid(category ~ condition)  # Separate panels for each category and condition

# ––––
count_data <- raw_data %>%
  filter(cond_mem == "new") %>%
  group_by(category,  !!sym(vars$binning_variable)) %>%
  summarise(count = n(), .groups = 'drop')  # n() counts the number of rows in each group

# View the resulting data frame
print(count_data)

