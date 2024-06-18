# Load the necessary libraries
library(openxlsx)
library(data.table)

# Directory where Excel files are located
dirs$main <- ("D:/Sciebo/Research Projects/2023_SceneCat/Experiment")

# Output directory for storing the Excel files.
dirs$input_files <-paste(dirs$main, "/input_files", sep="")



# Get a list of all Excel files starting with "1_scenecat_categorize"
excel_files <- list.files(dirs$input_files, pattern = "^1_scenecat_categorize.*\\.xlsx$", full.names = TRUE)

# Initialize an empty list to store data frames
data_frames <- list()

# Read and concatenate all Excel files
for (file in excel_files) {
 data <- read.xlsx(file)
 data_frames <- c(data_frames, list(data))
}

# Concatenate all data frames into a big data frame
big_data_frame <- rbindlist(data_frames)

# Count the number of duplicates in the "stimulus" column
num_duplicates <- sum(duplicated(big_data_frame$stimulus))

# Print the result
cat("Number of duplicates in 'stimulus' column:", num_duplicates, "\n")
