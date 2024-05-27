ffn_generate_cat_distractors <- function(available_images, cat_targets, current_category, vars){
  
  cat_targets_mean_typ <- cat_targets %>%
    filter(category == current_category) %>%  # Filter rows where category matches
    summarise(mean_typicality = mean(typicality, na.rm = TRUE)) %>%  # Compute the mean, removing NA values
    pull(mean_typicality)  # Extract the mean value from the dataframe
  
  
  # Select a random set of images for other categories (DISTRACTOR).
  distractors_all <- available_images %>%
    # Filter rows where category does not match current_category
    filter(category != current_category) %>%
    # Split the data into groups
    # group_by(!!sym(vars$binning_variable)) %>%
    group_by(category) %>%
    # Calculate the absolute difference from the mean typicality within each group
    mutate(diff = abs(typicality - cat_targets_mean_typ)) %>%
    # Sort by the absolute difference
    # Ungroup because we want N distractors altogether, not N per group
    # ungroup() %>%
    # Select the first N rows with the smallest difference (closest to the mean/median)
    slice_min(diff, n = vars$n_distractors_per_block/2, with_ties = FALSE) %>%
    ungroup()
  
  distractors_all$diff     <- NULL
  distractors_all$cond_cat <- "distractor"
  distractors_all$cond_mem <- ""
  
  return(distractors_all)
}
