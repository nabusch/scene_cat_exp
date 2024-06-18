fn_range_bins_typicality <- function(vars, dirs){
  
  available_images <- read_xlsx(sprintf("%s/stimuli_info_140.xlsx", dirs$images))

  #available_images <- available_images %>% filter(typicality > 10)
  
  source("ffn_do_adjusted_binning.R")
  source("ffn_do_binning_by_group.R")
  source("ffn_do_binning.R")

  
  # Apply adjustment
  # available_images$r_typicality <- cut(available_images$typicality,
  #                                      breaks = quantile(available_images$typicality, probs = seq(0, 1, length.out = nbins + 1), na.rm = TRUE),
  #                                      include.lowest = TRUE, labels = FALSE)
  # available_images$r_perceptual <- cut(available_images$perceptual,
  #                                      breaks = quantile(available_images$typicality, probs = seq(0, 1, length.out = nbins + 1), na.rm = TRUE),
  #                                      include.lowest = TRUE, labels = FALSE)
  # available_images$r_conceptual <- cut(available_images$conceptual,
  #                                      breaks = quantile(available_images$typicality, probs = seq(0, 1, length.out = nbins + 1), na.rm = TRUE),
  #                                      include.lowest = TRUE, labels = FALSE)
  # 
  # 
  # available_images <- ffn_do_adjusted_binning(available_images, min_obs_per_bin)
  available_images <- ffn_do_adjusted_binning(available_images, "typicality", vars$n_typi_bins, vars$min_obs_per_bin)
  available_images <- ffn_do_adjusted_binning(available_images, "perceptual", vars$n_typi_bins, vars$min_obs_per_bin)
  available_images <- ffn_do_adjusted_binning(available_images, "conceptual", vars$n_typi_bins, vars$min_obs_per_bin)
  
  
  
  # Apply the adjusted function
  # available_images <- ffn_do_binning_by_group(available_images, "typicality", vars$n_typi_bins)
  # available_images <- ffn_do_binning_by_group(available_images, "conceptual", vars$n_typi_bins)
  # available_images <- ffn_do_binning_by_group(available_images, "perceptual", vars$n_typi_bins)
  
  
  

  # available_images$r_typicality <- ffn_do_binning(available_images$typicality, vars$n_typi_bins)
  # available_images$r_conceptual <- ffn_do_binning(available_images$conceptual, vars$n_typi_bins)
  # available_images$r_perceptual <- ffn_do_binning(available_images$perceptual, vars$n_typi_bins)
  
  # Write the new bins to a new Excel file.
  filename = sprintf("%s/stimuli_info_140_equi_range_bins.xlsx", dirs$images)
  print(paste("Writing", filename))
  write_xlsx(available_images, filename, col_names =TRUE)
}


# scatter_plot <- ggplot(available_images, aes(x = r_typicality, y = p_typicality, color = category)) +
#   geom_point(alpha = 0.6) +  # Set transparency
#   labs(x = "R Typicality", y = "P Typicality", title = "Scatter Plot of R vs. P Typicality") +
#   theme_minimal()  # Use a minimal theme
# print(scatter_plot)
  
# ------------------------------------------------------------------------------
# count_data <- available_images %>%
#   group_by(category, bin) %>%
#   summarise(count = n(), .groups = 'drop')  # n() counts the number of rows in each group
# 
# # View the resulting data frame
# print(count_data)
