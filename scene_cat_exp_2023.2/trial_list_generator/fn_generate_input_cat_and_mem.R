fn_generate_input_cat_and_mem <- function(vars, dirs, isubject){
  
  source("ffn_generate_cat_list.R")
  source("ffn_add_metadata_to_list.R")
  source("ffn_generate_mem_list.R")
  source("ffn_write_list_as_excel.R")
  
  
  
  # -------------------------------------------------------------------------
  # Initialize variables and load image information.
  # -------------------------------------------------------------------------
  
  # Specify the desired order of columns for the output files.
  desired_order <- c("subject_id",
                     "task",
                     "block_total",
                     "block_scene",
                     "trial_block",
                     "trial_total", 
                     "target_cat",
                     "category", 
                     "cond_cat",
                     "cond_mem",
                     "correct_answer",
                     "stimulus",
                     "conceptual",
                     "perceptual",
                     "typicality", 
                     "n",
                     "p_typicality", "p_conceptual", "p_perceptual")
 
  # Get a list of all available images from the target scene categories.
  available_images          <- read_xlsx(sprintf("%s/stimuli_info_140.xlsx", dirs$images))
  available_images$stimulus <- gsub("^.*/", "", as.character(available_images$stimulus))
  setDT(available_images)
  available_images <- available_images %>% mutate(stimulus = paste("stimuli", stimulus, sep = "/"))
  
  # Get a list of available catch trial images.  
  available_catch_files <- list.files(path = sprintf("%s/", dirs$images), pattern = "catch*", full.names = FALSE)
  available_catch_files <- data.table(filename = available_catch_files)
  
  # Generate the order of category blocks.
  all_category_blocks <- rep(vars$categories, vars$n_blocks_per_category)
  nblocks             <- length(all_category_blocks)
  
  
  
  # -------------------------------------------------------------------------
  # Generate the input list for both task by iterating through all category
  # blocks.
  # -------------------------------------------------------------------------
  input_list_cat_task <- list()
  input_list_mem_task <- list()
  
  for (iblock in seq_along(all_category_blocks)) {
    print(sprintf("Selecting stimuli for block %d.", iblock))
    
    current_category <- all_category_blocks[iblock]
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Process CATEGORIZATION task, 
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    
    # Generate a new list of images for this block from the current scene
    # category from the available images. Then remove the selected images from
    # 'available_images'.
    input_list_cat_task[[iblock]] <- ffn_generate_cat_list(available_images, current_category, vars)
    available_images <- available_images[!stimulus %in% unique(input_list_cat_task[[iblock]]$stimulus)]

    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Process MEMORY task.
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    input_list_mem_task[[iblock]] <- ffn_generate_mem_list(available_images, current_category, vars, input_list_cat_task[[iblock]], available_catch_files)
    available_images      <- available_images[!stimulus %in% unique(input_list_mem_task[[iblock]]$stimulus)]
    available_catch_files <- available_catch_files[!filename %in% unique(input_list_mem_task[[iblock]]$stimulus)]
  }
  

  
  # -------------------------------------------------------------------------
  # So far, the order of blocks is identical for all subjects. Now that we have
  # selected the images to show, we randomize the block order, which also allows
  # us to assign a trial number for each trial.
  # -------------------------------------------------------------------------
  random_block_order <- sample(all_category_blocks, nblocks)
  
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
  
  ntrials_total  <- 0
  
  for (iblock in seq_along(random_block_order)) {
        
    current_category <- random_block_order[iblock]
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Update the block order table for this iteration.  
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    category_counts[[current_category]] <- category_counts[[current_category]] + 1
    category_occurrences[iblock]        <- category_counts[[current_category]]
    
    column_name <- paste(current_category, category_occurrences[iblock], sep = "_")
    block_order_table[[column_name]] <- ifelse(1:nblocks == iblock, 1, 0)
    

    # Add meta-data for CATEGORIZATION task, update trial count, and save.
    input_list_cat_task[[iblock]] <- ffn_add_metadata_to_list(input_list_cat_task[[iblock]], "categorization", current_category, category_occurrences, iblock, desired_order, ntrials_total)
    ntrials_total <- ntrials_total + nrow(input_list_cat_task[[iblock]])

    ffn_write_list_as_excel(input_list_cat_task[[iblock]], dirs, isubject, "categorization", current_category, category_occurrences[iblock])
    
    
    # Add meta-data for MEMORY task, update trial count, and save.
    input_list_mem_task[[iblock]] <- ffn_add_metadata_to_list(input_list_mem_task[[iblock]], "memory", current_category, category_occurrences, iblock, desired_order, ntrials_total)
    ntrials_total <- ntrials_total + nrow(input_list_mem_task[[iblock]])
    
    ffn_write_list_as_excel(input_list_mem_task[[iblock]], dirs, isubject, "memory", current_category, category_occurrences[iblock])

  }
  
  
  # -------------------------------------------------------------------------
  # Save the block order table.
  # -------------------------------------------------------------------------
  block_order_table$row_index <- NULL
  filename = sprintf("%s/%d_scenecat_block_order.xlsx", dirs$input_files, isubject)
  write_xlsx(block_order_table, filename, col_names =TRUE)
}

