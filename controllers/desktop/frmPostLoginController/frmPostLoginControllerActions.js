define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCancelPush **/
    AS_Button_d951dfa6686d41a7b4e47b85f8a0ef02: function AS_Button_d951dfa6686d41a7b4e47b85f8a0ef02(eventobject) {
        var self = this;
        this.cancelApprove();
    },
    /** init defined for frmPostLogin **/
    AS_Form_ab2c9e7a4d704430a591d691e7df5934: function AS_Form_ab2c9e7a4d704430a591d691e7df5934(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** onRowClick defined for segmentPushDevices **/
    AS_Segment_b96993121a464f5bb18ecd36cb7f1a98: function AS_Segment_b96993121a464f5bb18ecd36cb7f1a98(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.callDeleteFunction.call(this, rowNumber);
    },
    /** onRowClick defined for segPushDevices **/
    AS_Segment_i427ad587fe147ae8eec9c1093fda442: function AS_Segment_i427ad587fe147ae8eec9c1093fda442(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.initiateApprove.call(this, rowNumber);
    }
});