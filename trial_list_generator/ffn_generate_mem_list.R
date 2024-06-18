ffn_generate_mem_list <- function(available_images, current_category, vars, input_list_cat_task, available_catch_files){
  
  # Select only TARGET trials from this block.
  cat_targets <- subset(input_list_cat_task, cond_cat == "target")
  cat_targets <- cat_targets %>% mutate(cond_mem = "old")
  
  # Select a random set of new images.
  n_new <- vars$n_novel 
    
  
 # new_images <- available_images %>%
#    filter(category == cat_targets$category[1]) %>%
#    sample_n(size = n_new, replace = FALSE) %>% mutate(cond_mem = "new")
  
  
  
  new_images <- available_images %>%
  # Filter rows where category matches current_category
    filter(category == cat_targets$category[1]) %>%
    # Split the data into groups
    group_by(!!sym(vars$binning_variable)) %>%
    # Calculate the absolute difference from the mean typicality within each group
    mutate(diff = abs(typicality - mean(typicality))) %>%
    # Sort by the absolute difference
    # Select the first N rows with the smallest difference (closest to the mean)
    slice_min(diff, n = n_new/vars$n_typi_bins, with_ties = FALSE) %>%
    ungroup() 
  new_images <- new_images %>% mutate(cond_mem = "new")
  
  
  
  # Add the new images to the old images of this block.
  input_list_mem_task <- data.frame()
  input_list_mem_task <- rbindlist(list(cat_targets, new_images), fill=TRUE)
  
  # Randomize the order of lines in this block.
  input_list_mem_task <- input_list_mem_task[sample(.N), ]
  
  
  # -------------------------------------------------------------------------
  # Now add the catch trials.
  # -------------------------------------------------------------------------
  selected_catch_files <- available_catch_files[sample(.N, vars$n_catch_trials), ]
  catch <- data.frame(stimulus = basename(selected_catch_files$filename), cond_mem = "catch")
  catch <- catch %>% mutate(stimulus = paste("stimuli", stimulus, sep = "/"))
  catch <- catch %>% mutate(cond_mem = "catch")
  
  # Determine when the catch trial should appear. This should happen somewhere
  # within the middle 50% of trials.
  N            <- nrow(input_list_mem_task)
  start_index  <- ceiling(N * 0.25) + 1 # Start at 25% of N
  end_index    <- floor(N * 0.75)         # End at 75% of N
  random_index <- sample(start_index:end_index, size = 1)
  
  # Insert the rows from 'catch' into 'input_list_mem_task'.
  input_list_mem_task <- input_list_mem_task %>%
    slice(1:(random_index-1)) %>%  # Take the part before the random index
    bind_rows(catch) %>%           # Bind the rows from 'catch'
    bind_rows(slice(input_list_mem_task, random_index:N))  # Bind the part after the random index
  
   
  #print("Memory list generated")
  return(input_list_mem_task)
}
