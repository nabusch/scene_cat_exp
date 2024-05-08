ffn_add_metadata_to_list <- function(the_list, the_task, current_category, category_occurrences, iblock, desired_order, ntrials_total){
  
  the_list$subject_id  <- isubject
  the_list$task        <- the_task
  the_list$target_cat  <- current_category
  the_list$block_total <- iblock
  the_list$block_scene <- category_occurrences[iblock]
  the_list             <- the_list %>% mutate(trial_block = row_number())
  
  # Create a new column 'correct_answer' based on the task
  if (the_task == "categorization") {
    the_list <- the_list %>%
      mutate(correct_answer = ifelse(cond_cat == "target", "j", 
                                     ifelse(cond_cat == "distractor", "f", NA)))
    # print("Adding meta-data to categorization list.")
    
  } else if (the_task == "memory") {
    the_list <- the_list %>%
      mutate(correct_answer = ifelse(cond_mem == "old", "j",
                                     ifelse(cond_mem == "new" | cond_mem == "catch", "f", NA)))
    # print("Adding meta-data to memory list.")
  } 
  
  # Make a new column showing the trial number.
  the_list <- the_list %>% mutate(trial_total = row_number()+ntrials_total) 
  
  # Bring the columns into the desired order.
  the_list <- the_list %>% select(all_of(desired_order))
  
  return(the_list)
}