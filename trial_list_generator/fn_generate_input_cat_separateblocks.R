fn_generate_input_cat_separateblocks <- function(vars, dirs, isubject){
  
  # -------------------------------------------------------------------------
  # Initialize variables and load image information.
  # -------------------------------------------------------------------------
  
  # Create a randomized order of category blocks for this subject.
  all_category_blocks <- rep(vars$categories, vars$n_blocks_per_category)
  nblocks             <- length(all_category_blocks)
  all_category_blocks <- sample(all_category_blocks, nblocks)
  
  
  # Get a list of all available images.
  available_images          <- read_xlsx(sprintf("%s/stimuli_info_140.xlsx", dirs$images))
  available_images$stimulus <- as.character(available_images$stimulus)
  available_images$stimulus <- gsub("^.*/", "", available_images$stimulus)
  setDT(available_images)
  
  # Specify the desired order of columns for the output files.
  desired_order <- c("subject_id",
                     "task",
                     "block_total_cat",
                     "block_scene_cat",
                     "trial_block_cat",
                     "trial_total_cat", 
                     "target_cat",
                     "category", 
                     "cond_cat",
                     "correct_answer",
                     "stimulus",
                     "conceptual",
                     "perceptual",
                     "typicality", 
                     "n",
                     "p_typicality", "p_conceptual", "p_perceptual"
  )
  
  
  # We need to keep track of how many category blocks we are generating.
  # Initialize a named list to store counts for each category. We will use this
  # table to create an additional Excel file to tell PsychoPy which conditions to
  # present in which order.
  block_order_table <- data.frame(row_index = 1:nblocks)
  
  category_counts <- list()
  for (category in vars$categories) {
    category_counts[[category]] <- 0
  }
  category_occurrences <- numeric(nblocks)
  
  
  
  # -------------------------------------------------------------------------
  # Generate the input list for the CATEGORIZATION task by iterating through all
  # category blocks.
  # -------------------------------------------------------------------------
  iblock         <- 0
  ntrials_total  <- 0
  
  for (current_category in all_category_blocks) {
    iblock <- iblock + 1
    
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Update the block order table for this iteration.  
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    category_counts[[current_category]] <- category_counts[[current_category]] + 1
    category_occurrences[iblock]        <- category_counts[[current_category]]
    
    column_name <- paste(current_category, category_occurrences[iblock], sep = "_")
    block_order_table[[column_name]] <- ifelse(1:nblocks == iblock, 1, 0)
    
    
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Generate a new list of images for this block.
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    
    # Select a random set of lines (i.e. images) for the current scene category
    # (TARGET) from the available images.
    #target_low  <- available_images[category == current_category & typi_bin == 'low',  ][sample(.N, vars$n_low_typicality_targets), ]
    #target_high <- available_images[category == current_category & typi_bin == 'high', ][sample(.N, vars$n_high_typicality_targets), ]
    #target_all <- rbindlist(list(target_low, target_high))
    
    # For the high typicality bins (>5) use the most typical images, but for the
    # lower bins, use the least typical images.
    target_all <- available_images %>%
      # Filter rows where category matches current_category
      filter(category == current_category) %>%
      # Split the data into groups
      group_by(p_typicality) %>%
      # Select a random sample of 2 rows from each group
      sample_n(size = vars$n_targets_percentile) %>%
      # Ungroup to avoid grouping affecting other operations later
      ungroup()
    
    target_all$cond_cat <- "target"
    
    # Select a random set of images for other categories (DISTRACTOR).
    distractors_all <- available_images[!category %in% c(current_category), ][sample(.N, vars$n_distractors_per_block), ]
    distractors_all$cond_cat <- "distractor"
    
    # Combine target and distractor available_images.
    input_list_cat_task <- rbindlist(list(target_all, distractors_all))
    
    # Remove the selected images from 'available_images'.
    available_images <- available_images[!stimulus %in% unique(input_list_cat_task$stimulus)]
    
    # Randomize the order of lines in selected_images
    input_list_cat_task <- input_list_cat_task[sample(.N), ]
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Add meta-data.
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    input_list_cat_task$subject_id      <- isubject
    input_list_cat_task$task            <- "categorization"
    input_list_cat_task$target_cat      <- current_category
    input_list_cat_task$block_total_cat <- iblock
    input_list_cat_task$block_scene_cat <- category_occurrences[iblock]
    input_list_cat_task                 <- input_list_cat_task %>% 
      mutate(trial_block_cat = row_number())
    
    # Create a new column 'correct_answer' based on the conditions.
    input_list_cat_task <- input_list_cat_task %>%
      mutate(correct_answer = ifelse(cond_cat == "target", "f", 
                                     ifelse(cond_cat == "distractor", "j", NA)))
    
    # Make a new column showing the trial number.
    input_list_cat_task <- input_list_cat_task %>%
      mutate(trial_total_cat = row_number()+ntrials_total) 
    
    ntrials_total <- ntrials_total + nrow(input_list_cat_task)
    
    # Bring the columns into the desired order.
    input_list_cat_task <- input_list_cat_task %>%
      select(all_of(desired_order))
    
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Save the input file for this block.
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    filename = sprintf("%s/%d_scenecat_categorize_%s_%d.xlsx", dirs$input_files, isubject, current_category, category_occurrences[iblock])
    write_xlsx(input_list_cat_task, filename, col_names =TRUE)
    #print(filename)
    
  }
  
  
  
  # -------------------------------------------------------------------------
  # Save the block order table.
  # -------------------------------------------------------------------------
  block_order_table$row_index <- NULL
  filename = sprintf("%s/%d_scenecat_block_order.xlsx", dirs$input_files, isubject)
  write_xlsx(block_order_table, filename, col_names =TRUE)
  
  
  
  # -------------------------------------------------------------------------
  # Quit.
  # -------------------------------------------------------------------------
}

