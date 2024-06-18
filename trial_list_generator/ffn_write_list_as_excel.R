ffn_write_list_as_excel <- function(input_list, dirs, isubject, task_label, current_category, category_occurrences){
  
  
  # Save the input file for this block.
  filename = sprintf("%s/%d_scenecat_%s_%s_%d.xlsx", 
                     dirs$input_files, isubject, task_label, current_category, category_occurrences)
  print(paste("saving: ", filename))
  
  write_xlsx(input_list, filename, col_names =TRUE)
}
                                    
                                    
                                    