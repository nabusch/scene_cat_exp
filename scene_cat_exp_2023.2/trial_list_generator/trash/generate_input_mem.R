generate_input_mem <- function(vars, dirs, isubject, input_list_cat_task){
  
# Generate the input list for the MEMORY task.


  # -------------------------------------------------------------------------
  # Get a list of available images that were not already used in the
  # categorization task.
  # -------------------------------------------------------------------------
  #available_images <- read.xlsx(sprintf("%s/images_typicality_ranks.xlsx", dirs$images))
  #setDT(available_images)
  #available_images <- anti_join(available_images, input_list_cat_task, by = "stimulus")
  
  
  available_images <- read.xlsx(sprintf("%s/images_typicality_ranks.xlsx", dirs$images)) %>%
   setDT %>% anti_join(., input_list_cat_task, by = "stimulus")
  
  
  
  
  # -------------------------------------------------------------------------
  # Copy data from the categorization task, but use only stimuli that were
  # targets in the categorization task. We will not test memory for distractors.
  # -------------------------------------------------------------------------
  
  # Randomize the order of images from the category task, but keep the order of
  # blocks the same.
  input_list_mem_task <- input_list_cat_task %>%
   group_by(block) %>%
   arrange(block, sample(n()))
  
  #input_list_mem_task <- input_list_cat_task %>%
   
   
   
   input_list_mem_task <- ungroup(input_list_mem_task) %>% 
    select(, subject_id, task, condition, stimulus, category, typi_bin, 
           typicality, ranked, conceptual, perceptual, n) %>%  
    filter(condition == "target")  # Filter rows with 'condition' equal to "target"
  
  input_list_mem_task <- input_list_mem_task %>% mutate(condition = "old")
  
  
  
  # -------------------------------------------------------------------------
  # Select appropriate number of previously unused stimuli as new images.
  # -------------------------------------------------------------------------
  n_new_per_category <- ceiling(vars$p_new * nrow(input_list_mem_task) / length(vars$categories))
  
  all_new <-  data.frame()
  
  for (current_category in vars$categories) {
    new_sample <- available_images %>%
      filter(category == current_category) %>%
      sample_n(size = n_new_per_category, replace = FALSE)
    all_new <- rbindlist(list(all_new, new_sample))
  }
  
  all_new <- all_new %>% mutate(condition = "new")
  
  
  
  # -------------------------------------------------------------------------
  # Select catch trials
  # -------------------------------------------------------------------------
  all_catch_files <- list.files(sprintf("%scatch_trials/", dirs$images), pattern = "\\.jpg$", full.names = TRUE)
  
  selected_catch_files <- sample(all_catch_files, vars$n_catch_trials)
  catch <- data.frame(stimulus = basename(selected_catch_files), condition = "catch")
  
  
  
  # -------------------------------------------------------------------------
  # Put is all together
  # -------------------------------------------------------------------------
  # Combine data frames for old, new, and catch trials.
  input_list_mem_task <- rbindlist(list(input_list_mem_task, all_new, catch), fill=TRUE)
  input_list_mem_task <- input_list_mem_task[sample(.N), ] # Shuffle order of trials.
  
  # Define new column coding the correct button to press.
  input_list_mem_task <- input_list_mem_task %>%
    mutate(button = ifelse(condition == "old", "f",
                           ifelse(condition == "new" | condition == "catch", "j", NA)))
  
  # Input the relevant meta-data.
  input_list_mem_task <- input_list_mem_task %>% mutate(task = "memory")
  
  # Make a new column showing the trial number = row number.
  input_list_mem_task <- input_list_mem_task %>% 
    mutate(trial_all = row_number()) 
  
  # Prepend the subject ID to the input table.
  input_list_mem_task <- input_list_mem_task %>% mutate(subject_id = isubject)
  
  
  # Specify the desired order of columns and rearrange the order of columns
  desired_order <- c("subject_id", "trial_all", "task",
                     "condition", "button", "stimulus", "category", "typi_bin", 
                     "typicality", "ranked", "conceptual", "perceptual", "n")
  
  input_list_mem_task <- input_list_mem_task %>%
    select(all_of(desired_order))
  
  
  
  
  # -------------------------------------------------------------------------
  # Quit.
  # -------------------------------------------------------------------------
  return(input_list_mem_task) 
  
}
