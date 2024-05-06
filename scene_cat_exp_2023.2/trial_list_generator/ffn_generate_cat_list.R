ffn_generate_cat_list <- function(available_images, current_category, vars){
  
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
  input_list_cat_task$cond_mem <- ""
  
  # Randomize the order of lines in selected_images
  input_list_cat_task <- input_list_cat_task[sample(.N), ]
  
  print("Categorization list generated")
  return(input_list_cat_task)
}