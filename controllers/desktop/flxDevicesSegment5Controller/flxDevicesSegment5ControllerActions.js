define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnChangeStatus **/
    AS_Button_iae8093e920343f989c712b44c1c92fd: function AS_Button_iae8093e920343f989c712b44c1c92fd(eventobject, context) {
        var self = this;
        this.executeOnParent("changeDeviceStatusOnClick", {
            row: context.rowIndex,
            section: context.sectionIndex
        });
    },
    /** onTouchEnd defined for imgOk **/
    AS_Image_ab1944156d8a4a3fa51e95325e9bb4c8: function AS_Image_ab1944156d8a4a3fa51e95325e9bb4c8(eventobject, x, y, context) {
        var self = this;
        return self.onEditOkTouchEnd.call(this, context);
    },
    /** onTouchEnd defined for imgCancel **/
    AS_Image_bcfb4b90db234fcc94c20a11beab5e99: function AS_Image_bcfb4b90db234fcc94c20a11beab5e99(eventobject, x, y, context) {
        var self = this;
        return self.onCancelTouchEnd.call(this, context);
    },
    /** onTouchEnd defined for Edit **/
    AS_Label_ff6527f580e04479a99d0a3c5198e85f: function AS_Label_ff6527f580e04479a99d0a3c5198e85f(eventobject, x, y, context) {
        var self = this;
        return self.onEditTouchEnd.call(this, context);
    }
});