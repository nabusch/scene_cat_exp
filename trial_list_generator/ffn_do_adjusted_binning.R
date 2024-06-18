ffn_do_adjusted_binning <- function(df, column_name, nbins, min_size) {
  # Create initial bins for each group based on quantiles
  df <- df %>%
    group_by(category) %>%
    mutate(bin = cut(!!sym(column_name),
                     breaks = quantile(!!sym(column_name), probs = seq(0, 1, length.out = nbins + 1), na.rm = TRUE),
                     include.lowest = TRUE, labels = FALSE)) %>%
    ungroup()
  
  # Function to adjust bins within a group
  adjust_bins <- function(data) {
    need_adjustment <- TRUE
    while (need_adjustment) {
      tab <- table(data$bin)
      small_bins <- as.numeric(names(tab[tab < min_size]))
      
      if (length(small_bins) == 0) {
        need_adjustment <- FALSE
      } else {
        for (bin in small_bins) {
          # Merge small bin with the next or previous bin
          if (bin == length(tab) || (bin > 1 && tab[bin - 1] < tab[bin + 1])) {
            data$bin[data$bin == bin] <- bin - 1  # Merge with previous
          } else {
            data$bin[data$bin == bin] <- bin + 1  # Merge with next
          }
        }
      }
    }
    data
  }
  
  # Apply the adjustment function to each category group
  df <- df %>%
    group_by(category) %>%
    group_modify(~adjust_bins(.x)) %>%
    ungroup()  %>% 
    rename(!!paste0("r_", column_name) := bin)
  
  df
}

# 
# ffn_do_adjusted_binning <- function(df, min_size) {
#   need_adjustment <- TRUE
#   while (need_adjustment) {
#     tab <- table(df$bin)
#     small_bins <- as.numeric(names(tab[tab < min_size]))
#     
#     if (length(small_bins) == 0) {
#       need_adjustment <- FALSE
#     } else {
#       for (bin in small_bins) {
#         # Merge small bin with the next or previous bin
#         if (bin == length(tab) || (bin > 1 && tab[bin - 1] < tab[bin + 1])) {
#           df$bin[df$bin == bin] <- bin - 1  # Merge with previous
#         } else {
#           df$bin[df$bin == bin] <- bin + 1  # Merge with next
#         }
#       }
#     }
#   }
#   df
# }
