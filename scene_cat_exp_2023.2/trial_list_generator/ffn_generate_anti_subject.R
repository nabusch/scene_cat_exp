ffn_generate_anti_subject <- function(catlist, memlist){
  
  
  # catlist <- input_list_cat_task[[iblock]]
  # memlist <- input_list_mem_task[[iblock]]
  
  
  # Define columns to swap
  cols_to_swap <- c("stimulus", "conceptual", "perceptual", "typicality", "n", 
                    "p_typicality", "p_conceptual", "p_perceptual", 
                    "r_typicality", "r_conceptual", "r_perceptual")
  
  # Create catlist_new and memlist_new as copies of catlist and memlist
  # catlist_new <- catlist
  # memlist_new <- memlist
  
  info_cols <- c("stimulus", "conceptual", "perceptual", "typicality", "n", 
                 "p_typicality", "p_conceptual", "p_perceptual", 
                 "r_typicality", "r_conceptual", "r_perceptual")
  
  #select(all_of(info_cols))
  
  # Create a copy of memlist to create memlist2
  memlist_anti <- memlist
  
  # version 1: cat-targets 
  catlist_target <- catlist %>%
    filter(cond_cat == "target") %>%
    select(stimulus, conceptual, perceptual, typicality, n, p_typicality, p_conceptual, p_perceptual, r_typicality, r_conceptual, r_perceptual)
  
  # version 1: mem-new
  memlist_new <- memlist %>%
    filter(cond_mem == "new") %>%
    select(stimulus, conceptual, perceptual, typicality, n, p_typicality, p_conceptual, p_perceptual, r_typicality, r_conceptual, r_perceptual)
  
  # Update memlist2 where cond_mem == "old" with data from catlist_target
  for (col in names(catlist_target)) {
    memlist_anti[memlist_anti$cond_mem == "old", col] <- memlist_new[[col]]
  }
  
  # Update memlist2 where cond_mem == "new" with catlist_target
  for (col in names(catlist_target)) {
    memlist_anti[memlist_anti$cond_mem == "new", col] <- catlist_target[[col]]
  }
  
  # Create a copy of catlist to create catlist2 and update it using tmp_new where cond_cat == "target"
  catlist_anti <- catlist
  for (col in names(memlist_new)) {
    catlist_anti[catlist_anti$cond_cat == "target", col] <- memlist_new[[col]]
  }
  
  
  
  # catlist_new <- catlist_new %>%
  #   mutate(across(cols_to_swap, ~ifelse(cond_cat == "target",
  #                                       memlist[memlist$stimulus == stimulus & memlist$cond_mem == "new", .],
  #                                       .)))
  # 
  # memlist_new <- memlist_new %>%
  #   mutate(across(cols_to_swap, ~ifelse(cond_cat == "target",
  #                                       memlist[memlist$stimulus == stimulus & memlist$cond_mem == "old", .],
  #                                       .)))
  # 
  #   # Modify memlist_new: Fill in information for 'new' rows with data from 'target' rows in catlist
  # memlist_new <- memlist_new %>%
  #   mutate(across(cols_to_swap, ~ifelse(cond_mem == "new",
  #                                       catlist[catlist$stimulus == stimulus & catlist$cond_cat == "target", .],
  #                                       .)))
  
  
  return(list(catlist_anti = catlist_anti, memlist_anti = memlist_anti))
  
  
}