# Use this code to generate a list for each subject that defines what image is
# to be presented on each trial. The list includes a lot of meta data that we
# may need to use in our data analysis later.

# New in scenecat2.0: we have a new procedure for selecting target images.
# Rather than drawing a new random sample of images for each subject, we want to
# use the same images for everyone. We have computed percentiles across the
# typicality ratings.



# -----------------------------------------------------------------------------
# Set the directories.
# -----------------------------------------------------------------------------
dirs <- list()

# ADJUST THIS DIRECTORY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
dirs$main <- ("C:/Users/nbusch/sciebo/Research Projects/2023_SceneCat/experiment_code_repo/scene_cat_exp/scene_cat_exp_2023.2/")

# Directory where to find the image files and the table with image info.
dirs$images <- paste(dirs$main, "/140_stimuli", sep="")

# Output directory for storing the Excel files.
dirs$input_files <-paste(dirs$main, "/input_files", sep="")

# Directory where the R code is located.
dirs$rcode <-paste(dirs$main, "/trial_list_generator/", sep="")
setwd(dirs$rcode)



# -----------------------------------------------------------------------------
# Load packages and subfunctions.
# -----------------------------------------------------------------------------
library(dplyr)
library(writexl)
library(data.table)



# -----------------------------------------------------------------------------
# Define variables
# -----------------------------------------------------------------------------
vars <- list()

# Get input files for so many subjects.
vars$n_subjects <- 1

# Use these scene categories.
vars$categories <- c('bedroom', 'kitchen', 'living_room')

# Do we use images with .png or .jpg extension? The jpg files are much smaller.
vars$img_extension <- 'png' #'jpg' or 'png', no dot required.

# Use multiple blocks for each category.
vars$n_blocks_per_category <- 2

# How many low/high typicality scenes of the target category in each block? I
# suggest we use roughly 1/3 of low typicality images. 
vars$typi_percentiles <- 1:10 # We have grouped our images into 10 bins of typicality.
vars$n_targets_percentile <- 2 # We want to show so many target images for each typicality bin.

#vars$n_low_typicality_targets <- 7
#vars$n_high_typicality_targets <- 14
vars$n_targets_per_block <- vars$n_targets_percentile * length(vars$typi_percentiles)

# Proportion of distractors from non-target scenes. Distractors can be from
# either non-target category and we do not care about their typicality.
vars$p_distractors_per_block <- 0.3
#vars$n_distractors_per_block <- ceiling(vars$p_distractors_per_block * vars$n_targets_per_block)
vars$n_distractors_per_block <- 2 * ceiling((vars$p_distractors_per_block * vars$n_targets_per_block)/2)

# Proportion of new images in the memory block.
vars$p_new <- 0.33

# Number of catch trials in memory block
vars$n_catch_trials <- 5

# Set a seed for reproducibility. 
# IMPORTANT: 
# If you run this script multiple times, make sure to always execute this line
# so that the seed in re-initialized. This makes sure that everyone who every
# executes this script will always get the same random selection of images and
# the same order of trials.
set.seed(48149) # ZIP code of our institute ;-) 



# -----------------------------------------------------------------------------
# Generate input files for each subject.
# -----------------------------------------------------------------------------
for (isubject in 1:vars$n_subjects) {
 
 print(sprintf("Generating files for subject %d.", isubject))
 
 # Generate the input lists for the categorization task.
 source("fn_generate_input_cat_separateblocks.R")
 fn_generate_input_cat_separateblocks(vars, dirs, isubject)
 
 # Generate the input lists for the memory task.
 source("fn_generate_input_mem_separateblocks.R")
 fn_generate_input_mem_separateblocks(vars, dirs, isubject)
 
}

print("Done!")


