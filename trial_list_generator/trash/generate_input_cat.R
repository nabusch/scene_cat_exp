generate_input_cat <- function(vars, dirs, isubject){
  
  # Shuffle the order of category blocks.
  all_category_blocks <- rep(vars$categories, vars$n_blocks_per_category)
  all_category_blocks <- sample(all_category_blocks, length(all_category_blocks))
  
  available_images <- read.xlsx(sprintf("%s/images_typicality_ranks.xlsx", dirs$images))
  setDT(available_images)
  
  
  
  # -------------------------------------------------------------------------
  # Generate the input list for the CATEGORIZATION task.
  # -------------------------------------------------------------------------
  
  # Initialize an empty input_list_cat_task to store the final results
  input_list_cat_task <-  data.frame()
  iblock <- 0
  
  # Iterate through each category
  for (current_category in all_category_blocks) {
    
    iblock <- iblock + 1
    
    # Select a random set of lines (i.e. images) for the current category (targets) from the available images.
    target_low  <- available_images[category == current_category & typi_bin == 'low',  ][sample(.N, vars$n_low_typicality_targets), ]
    target_high <- available_images[category == current_category & typi_bin == 'high', ][sample(.N, vars$n_high_typicality_targets), ]
    
    target_all <- rbindlist(list(target_low, target_high))
    target_all$condition <- "target"
    
    # Select a random set of lines for other categories (distractors).
    distractors_all <- available_images[!category %in% c(current_category), ][sample(.N, vars$n_distractors_per_block), ]
    distractors_all$condition <- "distractor"
    
    # Combine target and distractor available_images.
    selected_images <- rbindlist(list(target_all, distractors_all))
    
    # Randomize the order of lines in selected_images
    selected_images <- selected_images[sample(.N), ]
    
    # Add meta-data.
    selected_images$task = "categorize"
    selected_images$target_cat = current_category
    selected_images$block <- iblock
    selected_images <- selected_images %>% 
      mutate(trial_block = row_number())
    
    # Remove the selected images from 'available_images'.
    available_images <- available_images[!stimulus %in% unique(selected_images$stimulus)]
    
    # Append the results to the list of all trials.
    input_list_cat_task <- rbindlist(list(input_list_cat_task, selected_images))
  }
  
  # Make a new column showing the trial number = row number.
  input_list_cat_task <- input_list_cat_task %>%
    mutate(trial_all = row_number()) 
  
  # Specify the desired order of columns and rearrange the order of columns
  desired_order <- c("trial_all", "trial_block", "block", "task", "target_cat",
                     "condition", "stimulus", "category", "typi_bin", 
                     "typicality", "ranked", "conceptual", "perceptual", "n")
  
  input_list_cat_task <- input_list_cat_task %>%
    select(all_of(desired_order))
  
  # Prepend the subject ID to the input table.
  input_list_cat_task <- input_list_cat_task %>%
    mutate(subject_id = isubject) %>%
    select(subject_id, everything())
  
  
  # -------------------------------------------------------------------------
  # Quit.
  # -------------------------------------------------------------------------
  return(input_list_cat_task)
}
