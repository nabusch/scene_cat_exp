fn_generate_input_cat_and_mem <- function(vars, dirs, isubject){
  
  
  source("ffn_generate_cat_list.R")
  source("ffn_add_metadata_to_list.R")
  source("ffn_generate_mem_list.R")
  
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
  available_images <- available_images %>% mutate(stimulus = paste("stimuli", stimulus, sep = "/"))
  
  
  available_catch_files <- list.files(path = sprintf("%s/", dirs$images), pattern = "catch*", full.names = FALSE)
  #available_catch_files$stimulus <- as.character(available_images$stimulus)
  available_catch_files <- data.table(filename = available_catch_files)
  
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
    
    print(sprintf("Processing block %d.", iblock))
    
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Update the block order table for this iteration.  
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    category_counts[[current_category]] <- category_counts[[current_category]] + 1
    category_occurrences[iblock]        <- category_counts[[current_category]]
    
    column_name <- paste(current_category, category_occurrences[iblock], sep = "_")
    block_order_table[[column_name]] <- ifelse(1:nblocks == iblock, 1, 0)
    
    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Process CATEGORIZATION task, 
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    
    # Generate a new list of images for this block from the current scene
    # category from the available images.
    input_list_cat_task <- ffn_generate_cat_list(available_images, current_category, vars)
    
    # Remove the selected images from 'available_images'.
    available_images <- available_images[!stimulus %in% unique(input_list_cat_task$stimulus)]
    ntrials_total <- ntrials_total + nrow(input_list_cat_task)
    
    # Add meta-data for CATEGORIZATION task.
    input_list_cat_task <- ffn_add_metadata_to_list(input_list_cat_task, "categorization", current_category, category_occurrences, iblock, desired_order, ntrials_total)
    
    # Save the input file for this block.
    filename = sprintf("%s/%d_scenecat_categorization_%s_%d.xlsx", dirs$input_files, isubject, current_category, category_occurrences[iblock])
    write_xlsx(input_list_cat_task, filename, col_names =TRUE)
    print(filename)

    
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    ### Process MEMORY task.
    ### –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    input_list_mem_task <- ffn_generate_mem_list(available_images, current_category, vars, input_list_cat_task, available_catch_files)
    
    # Remove the selected images from 'available_images'.
    available_images      <- available_images[!stimulus %in% unique(input_list_mem_task$stimulus)]
    available_catch_files <- available_catch_files[!filename %in% unique(input_list_mem_task$stimulus)]
    ntrials_total <- ntrials_total + nrow(input_list_mem_task)
    
    # Add meta-data for MEMORY task.
    input_list_mem_task <- ffn_add_metadata_to_list(input_list_mem_task, "memory", current_category, category_occurrences, iblock, desired_order, ntrials_total)
      
    # Prepend the subject ID to the input table.
    #mem_trials <- mem_trials %>% mutate(subject_id = isubject)
    
    # Save the input file.
    filename = sprintf("%s/%d_scenecat_memory_%s_%d.xlsx", dirs$input_files, isubject, current_category, category_occurrences[iblock])
    write_xlsx(input_list_mem_task, filename, col_names =TRUE)
    print(filename)
  }
  
  
  # -------------------------------------------------------------------------
  # Save the block order table.
  # -------------------------------------------------------------------------
  block_order_table$row_index <- NULL
  filename = sprintf("%s/%d_scenecat_block_order.xlsx", dirs$input_files, isubject)
  write_xlsx(block_order_table, filename, col_names =TRUE)
}

