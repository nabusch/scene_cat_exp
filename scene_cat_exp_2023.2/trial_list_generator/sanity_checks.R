library(readxl)
library(dplyr)

dirs$main <- ("C:/Users/nbusch/Desktop/scene_cat_exp/scene_cat_exp_2023.2/")

# Output directory for storing the Excel files.
dirs$input_files <-paste(dirs$main, "/input_files", sep="")

# Directory where the R code is located.
dirs$rcode <-paste(dirs$main, "/trial_list_generator/", sep="")
setwd(dirs$rcode)

# –––––-------------------------------------------------------------------------

# List all Excel files in the folder that start with a number and follow the specified pattern
file_list <- list.files(path = dirs$input_files, pattern = "^\\d+_(scenecat_memory|scenecat_categorization).*\\.xlsx$", full.names = TRUE)

# Read each file and concatenate into a single data frame
data1 <- lapply(file_list, read_excel) %>% bind_rows()

# ------------------------------------------------------------------------------

# Create data2 with one row for each unique stimulus
data2 <- data1 %>%
  filter(cond_mem != "catch") %>%
  distinct(stimulus) %>%
  rowwise() %>%
  mutate(
    ntarget     = sum(data1$stimulus == stimulus & data1$task == "categorization" & data1$cond_cat == "target"),
    ndistractor = sum(data1$stimulus == stimulus & data1$task == "categorization" & data1$cond_cat == "distractor"),
    nold        = sum(data1$stimulus == stimulus & data1$task == "memory"         & data1$cond_mem == "old"),
    nnew        = sum(data1$stimulus == stimulus & data1$task == "memory"         & data1$cond_mem == "new")
  )

# View the resulting data frame
print(data2)
