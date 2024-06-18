ffn_generate_cat_targets <- function(available_images, current_category, vars){

  target_all <- available_images %>%
    # Filter rows where category matches current_category
    filter(category == current_category) %>%
    # Split the data into groups
    group_by(!!sym(vars$binning_variable)) %>%
    # Select a random sample of 2 rows from each group
    #sample_n(size = vars$n_targets_percentile) %>%
    # Select N rows with the highest values of typicality
    slice_max(typicality, n = vars$n_targets_percentile/2, with_ties = FALSE) %>%
    # Bind with N rows with the lowest values of typicality
    bind_rows(slice_min(available_images %>% filter(category == current_category) %>% 
                          group_by(!!sym(vars$binning_variable)), typicality, n = vars$n_targets_percentile/2, with_ties = FALSE)) %>%    # Ungroup to avoid grouping affecting other operations later
    ungroup()
  
  target_all$cond_cat <- "target"
  target_all$cond_mem <- ""
  
  return(target_all)
}