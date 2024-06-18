
rm(list = ls(all.names = TRUE))

dirs <- list()
# dirs$main <- ("C:/Users/nbusch/Desktop/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$main <- ("C:/Users/nbusch/sciebo/Research Projects/2023_SceneCat/experiment_code_repo/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$img_in  <-paste(dirs$main, "/140_stimuli", sep="")
dirs$img_out <-paste(dirs$main, "/selected_stimuli", sep="")

summary_data <- read_xlsx("scenecat_stimulus_selection_summary.xlsx")


# Ensure the target directory exists
if (!dir.exists(dirs$img_out)) {
  dir.create(dirs$img_out)
}

# Remove the "stimulus/" prefix from the file names
file_names <- sub("^stimuli/", "", summary_data$stimulus)



# Create full paths to the source and target files
file_paths <- file.path(dirs$img_in, file_names)
target_paths <- file.path(dirs$img_out, file_names)

# Copy each file to the new directory
file.copy(file_paths, target_paths, overwrite = TRUE)

