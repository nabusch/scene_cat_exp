generate_input_mem_separateblocks <- function(vars, dirs, isubject){
 
 # Generate the input list for the MEMORY task.
 
  # -------------------------------------------------------------------------
 # Read this subject's list of trials in the CATEGORIZATION task based on the
 # subject's block order table.
 # -------------------------------------------------------------------------
 filename = sprintf("%s/%d_scenecat_block_order.xlsx", dirs$input_files, isubject)
 block_order_table  <- read_xlsx(filename)
 
 cat_trials <- data.frame()
 
 for (block in colnames(block_order_table)) {
  
  # Copy data from the categorization task.
  filename = sprintf("%s/%d_scenecat_categorize_%s.xlsx", dirs$input_files, isubject, block)
  block_trials <- read.xlsx(filename)
  
  # Combine blocks.
  cat_trials <- rbindlist(list(cat_trials, block_trials))
 }

 
 
 # -------------------------------------------------------------------------
 # Get a list of available images that were not already used in the
 # categorization task.
 # -------------------------------------------------------------------------
 available_images <- read.xlsx(sprintf("%s/images_typicality_ranks.xlsx", dirs$images)) %>%
  setDT %>% anti_join(., cat_trials, by = "stimulus") %>%
  mutate(stimulus = paste0("stimuli/", gsub("png", vars$img_extension, stimulus, fixed = TRUE)))
# mutate(stimulus = paste("stimuli", stimulus, sep = "/"))
 
 
 # -------------------------------------------------------------------------
 # Loop over blocks again and add the new images.
 # -------------------------------------------------------------------------
 mem_trials <- data.frame()
 
 for (iblock in seq_along(block_order_table)) {
  
  # Select only TARGET trials from this block.
  block_trials <- subset(cat_trials, block_total_cat == iblock & cond_cat == "target")
  block_trials <- block_trials %>% mutate(cond_mem = "old")

  # Select a random set of new images.
  n_new <- ceiling(vars$p_new * nrow(block_trials) )
  new_images <- available_images %>%
   filter(category == block_trials$category[1]) %>%
   sample_n(size = n_new, replace = FALSE) %>% mutate(cond_mem = "new")

  # Remove the selected images from available_images
  available_images <- available_images %>%
   anti_join(new_images, by = "stimulus")

  # Add the new images to the old images of this block.
  block_trials <- rbindlist(list(block_trials, new_images), fill=TRUE)

  # Randomize the order of lines in this block.
  block_trials <- block_trials[sample(.N), ]

  # Add this block to the big list.
  mem_trials <- rbindlist(list(mem_trials, block_trials), fill=TRUE)
 }
 
 
 
 # -------------------------------------------------------------------------
 # Now add the catch trials.
 # -------------------------------------------------------------------------
 all_catch_files <- list.files(sprintf("%s/catch_trials/", dirs$images), pattern = "\\.jpg$", full.names = TRUE)
 
 selected_catch_files <- sample(all_catch_files, vars$n_catch_trials)
 catch <- data.frame(stimulus = basename(selected_catch_files), cond_mem = "catch")
 
 catch <- catch %>% mutate(stimulus = paste("stimuli", stimulus, sep = "/"))
 catch <- catch %>% mutate(cond_mem = "catch")

  # Create a vector of random indices to determine the insertion points
 n_rows_mem <- nrow(mem_trials)
 n_rows_catch <- nrow(catch)
 
 # Create a vector of random indices to determine the insertion points
 random_indices <- sample(n_rows_mem, n_rows_catch)
 
 # Bind 'catch' to 'available_images' at the random indices.
 for (i in 1:n_rows_catch) {
  mem_trials <- rbind(mem_trials[1:(random_indices[i] - 1), ],
                         catch[i, ],
                      mem_trials[random_indices[i]:n_rows_mem, ], fill=TRUE)
 }
 
 
 
 # -------------------------------------------------------------------------
 # Adjust meta data.
 # -------------------------------------------------------------------------

 # Define new column coding the correct button to press.
 mem_trials <- mem_trials %>%
  mutate(correct_answer = ifelse(cond_mem == "old", "f",
                         ifelse(cond_mem == "new" | cond_mem == "catch", "j", NA)))
 
 mem_trials$task <- "memory"
 
 # Make a new column showing the trial number = row number.
 mem_trials <- mem_trials %>% 
  mutate(trial_total_mem = row_number()) 
 
 # Prepend the subject ID to the input table.
 mem_trials <- mem_trials %>% mutate(subject_id = isubject)
 
 
 
 # -------------------------------------------------------------------------
 # Save the input file.
 # -------------------------------------------------------------------------
 filename = sprintf("%s/%d_scenecat_memory.xlsx", dirs$input_files, isubject)
 write_xlsx(mem_trials, filename, colNames=TRUE, rowNames = FALSE)
 
 
 
 # -------------------------------------------------------------------------
 # Quit.
 # -------------------------------------------------------------------------
 return(mem_trials) 
 
}
