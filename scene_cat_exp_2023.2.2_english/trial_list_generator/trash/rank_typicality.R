# The scene categorization experiment will show images that are more or less
# typical exemplars of their scene category. We have collected separate ratings
# for the *perceptual typicaliaty* (maybe some images are taken from an unusual
# vantage point) and their *conceptual typicality* (where the category label
# somehow does not fit very well). 
# In the experiment, we want to show a specific proportion of untypical images.
# To do that, we need a single metric that combines both types of typicality.


# Settings.
setwd("C:/Users/nbusch/sciebo/Research Projects/2023_SceneCat/experiment_code_repo/scene_cat_exp/scene_cat_exp_2023.2/trial_list_generator/")

library(dplyr)
library(openxlsx)
library(ggplot2)

# Read the data from Excel.
data <- read.xlsx("../140_stimuli/stimuli_info_140.xlsx")

# Create a new column "typicality".
data <- data %>%  mutate(typicality = (conceptual + perceptual) / 2)

# Create a new column "ranked" with rank sorted values within each category.
data <- data %>%
 group_by(category) %>% 
 mutate(ranked = rank(typicality))

# Do a median split of typicality.
data <- data %>%
 group_by(category) %>%
 mutate(typi_bin = ifelse(typicality < median(typicality), "low", "high"))

# Save the new table to Excel format
write.xlsx(data, "images_typicality_ranks.xlsx", rowNames = FALSE)

# Show the distribution of our new typicality variable.
ggplot(data, aes(x = typicality, fill = category)) +
 geom_density(alpha = 0.7) +
 labs(title = "Kernel Density Plot of Typicality Values by Category",
      x = "Typicality",
      y = "Density") +
 theme_minimal()
