ffn_do_binning <- function(data, nbins){
  # Use the range of typicality to determine the breaks
  data_range <- range(data, na.rm = TRUE)
  bin_width  <- (data_range[2] - data_range[1]) / nbins
  bin_breaks <- seq(data_range[1], data_range[2], by = bin_width)
  bin_values <- cut(data, breaks = bin_breaks, include.lowest = TRUE, labels = FALSE)

  return(bin_values)
}
