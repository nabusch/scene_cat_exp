split_and_save_list_by_block <- function(input_list_cat_task, dirs, isubject){
  
  block_tables <- split(input_list_cat_task, by = "block")
  
  for (iblock in 1:length(block_tables)) {
    this_block <- block_tables[[iblock]]
    block_name <- sprintf("%s/scenecat_%03d_block%02d_%s.xlsx", dirs$input_files, isubject, iblock, this_block$target_cat[1])
    write.xlsx(this_block, block_name, colNames=TRUE, rowNames = FALSE)
  }
  
}
