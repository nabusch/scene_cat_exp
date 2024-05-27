ffn_do_binning_by_group <- function(df, column_name, nbins){
  
  # Define binning process as a function to apply on each group
  binning <- function(data) {
    data_range <- range(data[[column_name]], na.rm = TRUE)
    bin_width  <- (data_range[2] - data_range[1]) / nbins
    bin_breaks <- seq(data_range[1], data_range[2], by = bin_width)
    cut(data[[column_name]], breaks = bin_breaks, include.lowest = TRUE, labels = FALSE)
  }
  
  # Apply binning to each category group
  df %>%
    group_by(category) %>%
    mutate(!!paste0("r_", column_name) := binning(cur_data())) %>%
    ungroup()
}