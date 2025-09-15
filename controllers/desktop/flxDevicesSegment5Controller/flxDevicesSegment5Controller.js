define({ 
  onEditTouchEnd : function(context){
    var secIndex = context.sectionIndex;
    var rowIndex = context.rowIndex;
    this.executeOnParent("editTouchEnd", {row : rowIndex, section : secIndex});
  },
  
  onCancelTouchEnd : function(context){
    var secIndex = context.sectionIndex;
    var rowIndex =context.rowIndex;
    this.executeOnParent("cancelEdit", {row : rowIndex, section : secIndex});
  },
  
  onEditOkTouchEnd : function(context){
    var secIndex = context.sectionIndex;
    var rowIndex = context.rowIndex;
    this.executeOnParent("editFriendlyName", {row : rowIndex, section : secIndex});
  }

 });