define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for Form1 **/
    AS_Form_b6f2ee6a9f6c4f51918eb5daaef45862: function AS_Form_b6f2ee6a9f6c4f51918eb5daaef45862(eventobject) {
        var self = this;
        this.view.nonFinancialComponent.analyzeAction("savanthuser1", "random");
    },
    /** analyzeActionFailure defined for nonFinancialComponent **/
    AS_UWI_abd375c2c47445b68efd76590a275a68: function AS_UWI_abd375c2c47445b68efd76590a275a68() {
        var self = this;
        alert("analyzeActionFailure");
    },
    /** updateActionInRMSSuccess defined for nonFinancialComponent **/
    AS_UWI_b207de8427c64415a5a578df687267f1: function AS_UWI_b207de8427c64415a5a578df687267f1() {
        var self = this;
        alert("Update Success");
    },
    /** analyzeActionSuccess defined for nonFinancialComponent **/
    AS_UWI_e88005613f014284a0f874aa6e426384: function AS_UWI_e88005613f014284a0f874aa6e426384() {
        var self = this;
        alert("AnalyzeActionSuccess");
        this.view.nonFinancialComponent.updateActionInRMS();
    },
    /** updateActionInRMSFailure defined for nonFinancialComponent **/
    AS_UWI_i77f701a8a08495bbc3446289cfb06dd: function AS_UWI_i77f701a8a08495bbc3446289cfb06dd() {
        var self = this;
        alert("Failure")
    }
});