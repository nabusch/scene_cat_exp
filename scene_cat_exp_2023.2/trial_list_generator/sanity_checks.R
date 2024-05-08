library(readxl)
library(dplyr)
library(ggplot2)

dirs <- list()
# dirs$main <- ("C:/Users/nbusch/Desktop/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$main <- ("C:/Users/nbusch/sciebo/Research Projects/2023_SceneCat/experiment_code_repo/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$input_files <-paste(dirs$main, "/input_files", sep="")

# –––––-------------------------------------------------------------------------

# List all Excel files in the folder that start with a number and follow the specified pattern
file_list <- list.files(path = dirs$input_files, pattern = "^\\d+_(scenecat_memory|scenecat_categorization).*\\.xlsx$", full.names = TRUE)

# Read each file and concatenate into a single data frame
raw_data <- lapply(file_list, read_excel) %>% bind_rows()

# ------------------------------------------------------------------------------
d <- raw_data %>%
  filter(cond_cat == "target") 
  
  
  
  filter(cond_mem != "catch"| is.na(cond_mem)) %>%
  filter(cond_mem != "old"| is.na(cond_mem))

unique_stimuli_count  <- n_distinct(d$stimulus)
unique_stimuli_values <- list(unique(d$stimulus))



# Create data2 with one row for each unique stimulus
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
    label = case_when(
      ntarget != 0 ~ "target",         # Assign "target" if ntarget is nonzero
      ndistractor != 0 ~ "distractor", # Assign "distractor" if ndistractor is nonzero
      nnew != 0 ~ "new",               # Assign "new" if nnew is nonzero
      TRUE ~ NA_character_             # Assign NA for rows where all values are zero
    )
  )

density_plot <- ggplot(summary_data, aes(x = p_typicality)) +
  geom_density(aes(color = factor(ntarget > 0), linetype = factor(label))) +
  labs(title = "Density of p_typicality",
       x = "p_typicality",
       color = "Non-zero ntarget",
       linetype = "Non-zero ndistractor") +
  theme_minimal()

# Display the plot
print(density_plot)



# Sort data by typicality
sorted_data <- summary_data %>%
  arrange(typicality)

# Manually add a sequence as a new column
sorted_data$Index <- seq_len(nrow(sorted_data))

# Create the line plot using the sorted Index
typicality_plot <- ggplot(sorted_data, aes(x = Index, y = typicality, group = label, color = label)) +
  geom_line() +
  labs(title = "Line Plot of Typicality Sorted by Value",
       x = "Sorted Index",
       y = "Typicality",
       color = "Label") +
  theme_minimal()


# Display the plot
print(typicality_plot)
