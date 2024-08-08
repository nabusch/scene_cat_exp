# Use this code to generate a list for each subject that defines what image is
# to be presented on each trial. The list includes a lot of meta data that we
# may need to use in our data analysis later.

# New in scenecat2.0: we have a new procedure for selecting target images.
# Rather than drawing a new random sample of images for each subject, we want to
# use the same images for everyone. We have computed percentiles across the
# typicality ratings.


rm(list = ls(all.names = TRUE))

# -----------------------------------------------------------------------------
# Load packages and subfunctions.
# -----------------------------------------------------------------------------
library(dplyr)
library(readxl)
library(writexl) # We use this package for writing for compatibility w. PsychoPy
# The correct write functions should use an underscore in write_xlsx.
library(data.table)



# -----------------------------------------------------------------------------
# Set the directories.
# -----------------------------------------------------------------------------
dirs <- list()

# ADJUST THIS DIRECTORY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# dirs$main <- ("C:/Users/nbusch/Desktop/scene_cat_exp/scene_cat_exp_2023.2/")
dirs$main <- ("C:/Users/nbusch/sciebo/Research Projects/2023_SceneCat/experiment_code_repo/scene_cat_exp")

# Directory where to find the image files and the table with image info.
dirs$images <- paste(dirs$main, "/scene_cat_exp_2023.2/140_stimuli/", sep="")

# Output directory for storing the Excel files.
dirs$input_files <-paste(dirs$main, "/scene_cat_exp_2023.2.2/input_files", sep="")

# Directory where the R code is located.
dirs$rcode <-paste(dirs$main, "/scene_cat_exp_2023.2.2/trial_list_generator/", sep="")
setwd(dirs$rcode)



# -----------------------------------------------------------------------------
# Define variables
# -----------------------------------------------------------------------------
vars <- list()
vars$n_subjects              <- 100 # Get input files for so many subjects.
vars$categories              <- c('bedrooms', 'kitchens', 'living_rooms') # Use these scene categories.
vars$img_extension           <- 'png' #'jpg' or 'png', no dot required. The jpg files are much smaller.

vars$n_typi_bins             <- 10
vars$typi_percentiles        <- 1:vars$n_typi_bins # We have grouped our images into 10 bins of typicality.
vars$n_targets_percentile    <- 2 # We want to show so many target images for each typicality bin per block. This should be an EVEN number!
vars$n_targets_per_block     <- vars$n_targets_percentile * length(vars$typi_percentiles)
vars$min_obs_per_bin         <- vars$n_targets_percentile * vars$n_blocks_per_category * 2 # We need to adjust the binning so that we get at least so many images per bin.

vars$n_blocks_per_category   <- 2 # Use multiple blocks for each category.
vars$binning_variable        <- "r_typicality"    
vars$p_distractors_per_block <- 1 # Proportion of distractors from non-target scenes. Distractors can be from either non-target category and we do not care about their typicality.
vars$n_distractors_per_block <- 2 * ceiling((vars$p_distractors_per_block * vars$n_targets_per_block)/2)
#vars$p_novel                 <- 0.33 # Proportion of new images in the memory block.
vars$p_novel                 <- 1 # Proportion of new images in the memory block.
vars$n_novel                 <- ceiling(vars$p_novel * vars$n_targets_per_block)
vars$n_catch_trials          <- 1 # Number of catch trials in each memory block





# -----------------------------------------------------------------------------
# Generate input files for each subject.
# -----------------------------------------------------------------------------

# Set a seed for reproducibility. 
# IMPORTANT: 
# If you run this script multiple times, make sure to always execute this line
# so that the seed in re-initialized. This makes sure that everyone who every
# executes this script will always get the same random selection of images and
# the same order of trials.

set.seed(48149) # ZIP code of our institute ;-) 

source("fn_range_bins_typicality.R")
fn_range_bins_typicality(vars, dirs)

source("fn_generate_input_cat_and_mem.R")

for (isubject in seq(1, vars$n_subjects, by=2)) {
 print(sprintf("Generating files for subject %d.", isubject))
 
 fn_generate_input_cat_and_mem(vars, dirs, isubject)
}

print("Done!")


