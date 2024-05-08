ffn_generate_cat_list <- function(available_images, current_category, vars){
  

  target_all <- available_images %>%
    # Filter rows where category matches current_category
    filter(category == current_category) %>%
    # Split the data into groups
    group_by(p_typicality) %>%
    # Select a random sample of 2 rows from each group
    #sample_n(size = vars$n_targets_percentile) %>%
    # Select N rows with the highest values of typicality
    slice_max(typicality, n = vars$n_targets_percentile/2, with_ties = FALSE) %>%
    # Bind with N rows with the lowest values of typicality
    bind_rows(slice_min(available_images %>% filter(category == current_category) %>% 
                          group_by(p_typicality), typicality, n = vars$n_targets_percentile/2, with_ties = FALSE)) %>%    # Ungroup to avoid grouping affecting other operations later
    ungroup()
  
  target_all$cond_cat <- "target"
  
  
  # Select a random set of images for other categories (DISTRACTOR).
  #distractors_all <- available_images[!category %in% c(current_category), ][sample(.N, vars$n_distractors_per_block), ]
  
  distractors_all <- available_images %>%
    # Filter rows where category matches current_category
    filter(category != current_category) %>%
    # Split the data into groups
    group_by(p_typicality) %>%
    # Calculate the absolute difference from the median typicality within each group
    mutate(diff = abs(typicality - median(typicality))) %>%
    # Sort by the absolute difference
    arrange(diff) %>%
    # Ungroup because we want N distractors altogethre, not N per group
    ungroup() %>%
    # Select the first N rows with the smallest difference (closest to the median)
    slice_head(n = vars$n_distractors_per_block)
  
  distractors_all$diff     <- NULL
  distractors_all$cond_cat <- "distractor"
  
  
  # Combine target and distractor available_images.
  input_list_cat_task <- rbindlist(list(target_all, distractors_all))
  input_list_cat_task$cond_mem <- ""
  
  # Randomize the order of lines in selected_images
  input_list_cat_task <- input_list_cat_task[sample(.N), ]
  
  #print("Categorization list generated")
  return(input_list_cat_task)
}