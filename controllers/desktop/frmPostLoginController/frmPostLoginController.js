define({ 
  contexts : ["DashBoard","Transfer","Settings", "TransferRMS"],
  paymentContexts : ["Selection","Confirmation","Approve","Success","Failure","SecureCode","PushDevices"],
  init : function(){
    this.view.preShow = this.preShow;
    this.view.btnNavDashBoard.onClick = this.btnNavDashBoard_onClick;
    this.view.btnNavTransfer.onClick = this.btnNavTransfer_onClick;
    this.view.btnNavSettings.onClick = this.btnNavSettings_onClick;
    this.view.transactionSigning.showLoading = this.showLoading;
    this.view.transactionSigning.dismissLoading = this.dismissLoading;
    this.view.userManagement.showLoading = this.showLoading;
    this.view.userManagement.dismissLoading = this.dismissLoading;
    this.view.transactionSigning.onTSSuccess = this.onTSSuccess;
    this.view.btnReset.onClick = this.resetUser;
    this.view.btnModeApprove.onClick = source => this.changeTSMode("Approve");
    this.view.btnModeChallenge.onClick = source => this.changeTSMode("Challenge");
    this.view.btnModeOffline.onClick = source => this.changeTSMode("Offline");
    this.view.PowerOff.onTouchStart = this.logoutOnClick;
    this.view.btnSrcCB.onClick = source => this.switchPaymentMode(source);
    this.view.btnSrcSwift.onClick = source => this.switchPaymentMode(source);
    this.view.btnSrcIban.onClick = source => this.switchPaymentMode(source);
    this.view.btnPatCB.onClick= source => this.switchPaymentMode(source);
    this.view.btnPatIban.onClick = source => this.switchPaymentMode(source);
    this.view.btnPatSwift.onClick = source => this.switchPaymentMode(source);
    this.view.btnPaymentSelectionSubmit.onClick = this.btnPaymentSelectionSubmit_onClick;
    this.view.btnPaymentSecureCodeSubmit.onClick = this.btnPaymentSecureCodeSubmit_onClick;
    this.view.payments.onRMSPaymentAccept = this.onRMSPaymentAccept;
    this.view.payments.onRMSPaymentDecline = this.onRMSPaymentDecline;
    this.view.payments.onRMSFailure = this.onRMSFailure;
    this.view.btnCnfBack.onClick = source => this.showPaymentScreen("Selection");
    this.view.btnCnfNext.onClick = this.btnCnfNext_onClick;
    this.view.btnSecureCodeSubmit.onClick = this.btnSecureCodeSubmit_onClick;
    this.view.btnSecureCodeCancel.onClick = this.btnSecureCodeCancel_onClick;
    this.view.btnPaymentSuccessOk.onClick = source => {this.resetUI(); this.showPaymentScreen("Selection");};
    this.view.btnPaymentFailure.onClick = source => {this.resetUI(); this.showPaymentScreen("Selection");};
    this.view.TransactionSigningWithoutUI.approveInitiateFailure = source => {this.dismissLoading(); this.showPaymentScreen("Failure", "Something went wrong please try again later");};
    this.view.TransactionSigningWithoutUI.approveInitiateSuccess = source => {this.dismissLoading(); this.showPaymentScreen("Approve");};
    this.view.TransactionSigningWithoutUI.getDeviceSuccess = this.getDeviceSuccess;
    this.view.TransactionSigningWithoutUI.getDeviceFailure = this.getDeviceFailure;
    this.view.TransactionSigningWithoutUI.approveDeleteInitiateFailure = this.approveDeleteInitiateFailure;
    this.view.TransactionSigningWithoutUI.approveDeleteInitiateSuccess = this.approveDeleteInitiateSuccess;
    this.view.TransactionSigningWithoutUI.approveDeleteStatusReject = this.approveDeleteStatusReject;
    this.view.TransactionSigningWithoutUI.approveDeleteStatusAccept = this.approveDeleteStatusAccept;
    this.view.TransactionSigningWithoutUI.approveStatusAccept = this.approveStatusAccept;
    this.view.TransactionSigningWithoutUI.approveStatusReject = this.approveStatusReject;
    this.view.TransactionSigningWithoutUI.approveStatusFailure =  this.approveStatusFailure;
    this.view.payments.onRMSSignSuccess = this.onRMSSignSuccess;
    this.view.payments.onRMSSignFailure = this.onRMSSignFailure;
    this.view.TransactionSigningWithoutUI.offlineTSSuccess = this.offlineTSSuccess;
    this.view.TransactionSigningWithoutUI.offlineTSFailure = this.offlineTSFailure;
    this.view.TransactionSigningWithoutUI.getServiceURL();
    this.view.TransactionSigningWithoutUI.getServiceURLSuccess = this.getServiceURLSuccess;
    this.view.TransactionSigningWithoutUI.getServiceURLFailure = this.getServiceURLFailure;
    this.view.userManagement.setDevice = this.setDevice;
    this.view.userManagement.deleteSuccess = this.deleteSuccess;
    this.view.userManagement.deleteFailure = this.deleteFailure;
    this.view.btnSegmentPushCancel.onClick = this.btnSegmentPushCancel_onClick;
    this.view.btnDeleteSuccessOk.onClick = this.btnDeleteSuccessOk_onClick;
    this.view.btnDeleteFailure.onClick = this.btnDeleteFailure_onClick;
    this.view.userManagement.suspendFailure = this.suspendFailure;
    this.view.btnSuspendFailure.onClick = this.btnSuspendFailure_onClick;
    this.view.tbxCurrency.setEnabled(false);
    this.view.btnCancelPush.onClick = this.cancelApprove;
    
  },
  isRMSEnabled : true,
  username : "someBody",
  sessionId: "",
  userId : "",
  gblTimer : null,
  delTimer : null,
  timer :null,
  srcPaymentMode : "Iban",
  patPaymentMode : "Iban",
  account : "",
  amount : "",
  deleteDeviceId: "",
  remarks : "",
  otp : "",
  authType : "",
  serviceURL : "",
  deviceId : "",
  reqBaseTemplate : {
    app_user_id : function(){
      return this.username;
    },
    amount : function(){
      return this.view.tbxAmount.text;
    },
    app_payment_id : function(){
      return Math.floor(Math.random()*10000000000)+1;
    },
    currency :  function(){
      return "USD";
    },
    payment_type : function(str){
      return "domestic";
    }
  },
  sourceAccountTemplate : {
    iban :{
      source_iban : function(){
        return this.view.tbxSrcIban.text;
      }
    },
    country_bank : {
      source_account_number : function(){
        return  this.view.tbxSrcAccNo.text;
      },
      source_bank_code : function(){
        return this.view.tbxSrcCountryCode.text;
      },
      source_country : function(){
        return this.view.tbxSrcCountry.text;
      }
    },
    swift: {
      source_swift_account_number : function(){
        return this.view.tbxSrcSwiftAccNo.text;
      },
      source_swift : function(){
        return this.view.tbxSrcSwiftNo.text;
      }
    }
  },
  paymentMessages : {
     Confirmation : "lblPaymentCnf",
     Failure : "lblPaymentFailure"
  },
  patnerAccountTemplate : {
    iban :{
      patner_iban : function(){
        return this.view.tbxPatIban.text;
      }
    },
    country_bank : {
      partner_account_number : function(){
        return  this.view.tbxPatAccNo.text;
      },
      patner_country : function(){
        return this.view.tbxPatCountry.text;
      },
      patner_bank_code : function(){
        return this.view.tbxPatCountryCode.text;
      }
    },
    swift: {
      patner_swift_account_number : function(){
        return this.view.tbxPatSwiftAccNo.text;
      },
      patner_swift : function(){
        return this.view.tbxPatSwiftNo.text;
      }
    }
  },
  validationMeta : {
    Src : {
      Iban : [
        {
          id : "tbxSrcIban",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_iban")
        }
      ],
      CB : [
        {
          id : "tbxSrcAccNo",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_account_number")
        },
        {
          id : "tbxSrcCountry",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_country")
        },
        {
          id : "tbxSrcCountryCode",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_bank_code")
        }
      ],
      Swift : [
        {
          id : "tbxSrcSwiftAccNo",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_swift_account")
        },
        {
          id : "tbxSrcSwiftNo",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_swift")
        }
      ]
    },
    Pat : {
      Iban : [
        {
          id : "tbxPatIban",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_iban")
        }
      ],
      CB : [
        {
          id : "tbxPatAccNo",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_account_number")
        },
        {
          id : "tbxPatCountry",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_country")
        },
        {
          id : "tbxPatCountryCode",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_bank_code")
        }
      ],
      Swift : [
        {
          id : "tbxPatSwiftAccNo",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_swift_account")
        },
        {
          id : "tbxPatSwiftNo",
          validation : function(str){
            if(!str) return false;
            return true;
          },
          errMsg : kony.i18n.getLocalizedString("i18n.hid.txn.invalid_swift")
        }
      ]
    }
  },
  onNavigate : function(intent){
    this.view.transactionSigning.username = intent.username;
    this.username = intent.username;
    this.sessionId = intent.sessionId;
    this.view.lblName.text = this.username;
  },
  startTimer:function(){
    let timer = setTimeout(this.sessionExpired,300000);
    this.gblTimer = timer;
  },
  resetTimer : function(){
    if(this.gblTimer){
      clearTimeout(this.gblTimer);
    }
    this.startTimer();
  },
  cancelTimer : function(){
    if(this.gblTimer){
      clearTimeout(this.gblTimer);
      this.gblTimer = null;
    }
  },
  sessionExpired : function(){
    alert("Session Expired! Please Login again");
    this.view.flxPushDevices.setVisibility(false);
    this.view.loginComponent.logoutOnClick(this.username,this.sessionId);
    var ntf = new kony.mvc.Navigation("frmOnBoarding");
    ntf.navigate();
  }, 
  preShow : function(){
    this.contextSwitch("DashBoard");
    this.view.flxTSSuccess.setVisibility(false);
    this.resetTimer();
    this.resetUI();
    this.view.transactionSigning.changeTSMode("Approve");
    this.switchButtons("Approve");
    this.view.flxPaymentSecureCode.setVisibility(false);
    this.view.flxPushDevices.setVisibility(false);
    this.view.flxDeleteSuccess.setVisibility(false);
    this.view.flxDeleteFailure.setVisibility(false);
    this.searchUser();
  }, 

  btnNavDashBoard_onClick : function(){
    this.resetTimer();
    this.searchUser();
    this.contextSwitch("DashBoard");
  },  
  btnNavTransfer_onClick : function(){
    this.resetTimer();
    //this.view.transactionSigning.resetUIFieldsPublic();
    let nav = this.isRMSEnabled ? "TransferRMS" : "Transfer";
    this.contextSwitch(nav);
    this.view.transactionSigning.changeTSMode("Approve");
    this.switchButtons("Approve");
  },  
  btnNavSettings_onClick : function(){
    //this.resetTimer();
    this.view.userManagement.Username = this.username;
    this.view.userManagement.loadUserManagement(this.sessionId);
    this.contextSwitch("Settings");
  },  
  showLoading : function(){
    this.resetTimer();
    this.view.flxLoading.setVisibility(true);
    this.view.forceLayout();
  },   
  dismissLoading : function(){
    this.resetTimer();
    this.view.flxLoading.setVisibility(false);
    this.view.forceLayout();
  },  
  onTSSuccess : function(){
    //       this.view.flxTSSuccess.setVisibility(true);
    //       this.view.imgSuccess.setVisibility(true);
    //       setTimeout(()=>{
    //          this.view.flxTSSuccess.setVisibility(false);
    //          this.view.imgSuccess.setVisibility(false);
    //          this.contextSwitch("DashBoard");
    //       },3000);
  },  
  resetUser: function(){
    alert("Account is being reset, Onbaord the user again");
    if(this.username === ""){
      alert("failure");
      return;
    }
    var serviceName = "ResetUserOrch";
    var operationName = "reset";
    var client = kony.sdk.getCurrentInstance();
    var integrationSvc = KNYMobileFabric.getIntegrationService(serviceName);
    var params = {
      "username": this.username,
      "userId" : this.userId
    };
    integrationSvc.invokeOperation(operationName, {}, params, success => {
      var frmAccounts = new kony.mvc.Navigation("frmOnBoarding");
      frmAccounts.navigate();
    }, error => {
      alert("failure");
      if(error.opstatus_CreateUser == 0 && error.opstatus_AddActivationCodeAuthenticator == 0){

      }
    });
  },  
  contextSwitch: function(context) {
    this.view.flxPushDevices.setVisibility(false);
    this.view.flxDeleteSuccess.setVisibility(false);
    this.view.flxDeleteFailure.setVisibility(false);
    for (let i of this.contexts) {
      this.view[`flx${i}`].setVisibility(i === context);
      if(i== "TransferRMS") continue;
      this.view[`btnNav${i}`].setEnabled(i !== context);
    }
    this.view.forceLayout();
  },  
  switchButtons : function(button){
    let buttons = ["Approve","Offline","Challenge"];
    for(let i of buttons){
      this.view[`btnMode${i}`].setVisibility(i!==button);
    }
  },  
  logoutOnClick: function(){
    this.cancelTimer();
    this.view.flxPushDevices.setVisibility(false);
    this.view.flxDeleteSuccess.setVisibility(false);
    this.view.flxDeleteFailure.setVisibility(false);
    this.view.flxDeleteDeviceApproved.setVisibility(false);
    this.view.loginComponent.logoutOnClick(this.username,this.sessionId);
    var ntf = new kony.mvc.Navigation("frmOnBoarding");
    ntf.navigate();
  },  
  changeTSMode : function(mode){
    this.resetTimer();
    this.switchButtons(mode);
    this.view.transactionSigning.changeTSMode(mode);
  },  
  switchPaymentMode : function(focusWidget){
     let modes = ["Iban", "CB", "Swift"];
     let widgetName = focusWidget.id;
     let user = widgetName.substring(3,6);
     let widget = widgetName.substring(6);
     if(user == "Src"){
       this.srcPaymentMode = widget;
       this.resetSrcUI();
     }else{
       this.patPaymentMode = widget;
       this.resetPatUI();
     }
     for(let mode of modes){
        this.view[`flx${user}${mode}`].setVisibility(mode == widget);
        this.view[`btn${user}${mode}`].skin = mode == widget ? "sknBtnPaymentsFocus":"sknBtnPaymentsNonFocus";
     }
  },  
  validateSourceDetails : function(){
     let srcMode = this.srcPaymentMode;
     let validationArr = this.validationMeta.Src[srcMode];
     for(let obj of validationArr){
       let text = this.view[obj.id].text;
       if(!obj.validation(text)) {
         this.view.lblSrcError.text = obj.errMsg;
         this.view.lblSrcError.setVisibility(true);
         return false;
       }
     }
     return true;
  },    
  validatePatnerDetails : function(){
     let srcMode = this.patPaymentMode;
     let validationArr = this.validationMeta.Pat[srcMode];
     for(let obj of validationArr){
       let text = this.view[obj.id].text;
       if(!obj.validation(text)) {
         this.view.lblPatError.text = obj.errMsg;
         this.view.lblPatError.setVisibility(true);
         return false;
       }
     }
     return true;
  },  
  validateTransferDetails : function(){
     let amount = this.view.tbxAmount.text;
     if(!amount || amount<=0){
       this.view.lblTransferError.text = "Invalid Amount";
       this.view.lblTransferError.setVisibility(true);
       return false;
     }
    let remarks = this.view.tbxRemarks.text;
    if(!remarks){
      this.view.lblTransferError.text = kony.i18n.getLocalizedString("i18n.hid.txn.remarks_empty");
      this.view.lblTransferError.setVisibility(true);
      return false;
    }
    return true;
  }, 
  searchUser: function(){
    this.view.flxLoading.setVisibility(true);
    var serviceName = "HIDUserAttributes";
    var operationName = "SearchUserAttributes";
    var client = kony.sdk.getCurrentInstance();
    var integrationSvc = client.getIntegrationService(serviceName);
    var params = {
      "username": this.username
    };
    integrationSvc.invokeOperation(operationName, {}, params, success => {
        this.view.flxLoading.setVisibility(false);
        this.email = success.email;
        this.mobile = "+"+success.phoneNumber;
        this.updateUserInfo(this.email,this.mobile);
    }, error => {
        this.view.flxLoading.setVisibility(false);
        alert("Error occured: "+JSON.stringify(error));
    });
  },
  updateUserInfo: function(email="",mobile=""){
    if(email!="" || email!=undefined){
        this.view.lblEmail.text = email;
    } 
    if(mobile!="" || mobile!=undefined){
        this.view.lblCall.text = mobile;
    }
  }, 
  resetUI(){
    this.switchPaymentMode(this.view.btnSrcIban);
    this.switchPaymentMode(this.view.btnPatIban);
    this.srcPaymentMode = "Iban";
    this.patPaymentMode = "Iban";
    this.resetSrcUI();
    this.resetPatUI();
    this.resetTransferDetailsUI();
    this.resetSecureCodeUI();
  },  
  resetSrcUI(){
    this.view.tbxSrcIban.text = "";
    this.view.tbxSrcAccNo.text = "";
    this.view.tbxSrcCountry.text = "";
    this.view.tbxSrcCountryCode.text = "";
    this.view.tbxSrcSwiftAccNo.text = "";
    this.view.tbxSrcSwiftNo.text = "";
    this.view.lblSrcError.setVisibility(false);
  },  
  resetPatUI(){
    this.view.tbxPatIban.text = "";
    this.view.tbxPatAccNo.text = "";
    this.view.tbxPatCountry.text = "";
    this.view.tbxPatCountryCode.text = "";
    this.view.tbxPatSwiftAccNo.text = "";
    this.view.tbxPatSwiftNo.text = "";
    this.view.lblPatError.setVisibility(false);
  },  
  resetTransferDetailsUI : function(){
    this.view.tbxAmount.text = "";
    this.view.tbxRemarks.text = "";
    this.view.lblTransferError.setVisibility(false);
  },
  resetSecureCodeUI : function(){
    this.view.lblSecureCodeError.text ="";
    this.view.tbxSecureCode.text = "";
  },
  confirmationAlert: function(tag){ 
    var basicConf = {
      message: kony.i18n.getLocalizedString("i18n.hid.login.mark_browser_trusted"),
      alertType: constants.ALERT_TYPE_CONFIRMATION,
      alertTitle: kony.i18n.getLocalizedString("i18n.hid.login.trusted_device_confirmation"),
      alertHandler : isTrustedDevice
    };
    var pspConfig = {
      "contentAlignment": constants.ALERT_CONTENT_ALIGN_CENTER
    };
    function isTrustedDevice(res){
      if(res === true){
        localStorage.setItem("deviceTag",tag);         
      }    
    }
    kony.ui.Alert(basicConf, pspConfig);
  },
  
  validateDetails : function(){
    this.view.lblTransferError.setVisibility(false);
     this.view.lblSrcError.setVisibility(false);
     this.view.lblPatError.setVisibility(false);
     if(!this.validateSourceDetails()) return;
     if(!this.validatePatnerDetails()) return;
     if(!this.validateTransferDetails()) return;
     let fromAccTxtWidget = this.validationMeta.Src[this.srcPaymentMode][0].id;
     let toAccTxtWidget = this.validationMeta.Pat[this.patPaymentMode][0].id;
     let fromAccTxt = this.view[fromAccTxtWidget].text;
     let toAccTxt = this.view[toAccTxtWidget].text;
     this.account = toAccTxt;
     this.view.lblAccountValue.text = toAccTxt;
     let amountTxt = this.view.tbxAmount.text;
     this.amount = amountTxt;
     this.view.lblAmountValue.text = amountTxt;
     let remarksTxt = this.view.tbxRemarks.text;
     this.remarks = remarksTxt;
     this.view.lblRemarksValue.text = remarksTxt;
     let msg = kony.i18n.getLocalizedString("i18n.hid.txn.transferConfirmation");
     msg = msg.replace("amountTxt", amountTxt)
     .replace("toAccTxt", toAccTxt)
     .replace("fromAccTxt", fromAccTxt)
     .replace("remarksTxt", remarksTxt);
     this.tdsRMS = msg;
     this.showPaymentScreen("Confirmation", msg);
  }, 
  
  btnPaymentSelectionSubmit_onClick : function(){
     this.authType = "Approve";
     this.validateDetails();
  },
  btnPaymentSecureCodeSubmit_onClick : function(){
    this.authType = "SecureCode";
    this.validateDetails();    
  },
  
  btnSecureCodeSubmit_onClick : function(){
    let OTP = this.view.tbxSecureCode.text;
    if(OTP === "" || isNaN(OTP)){
        this.view.lblSecureCodeError.text = kony.i18n.getLocalizedString("i18n.hid.txn.enter_valid_secure_code");
        return;
      }
      this.showLoading();
      let signContent =[this.account,this.amount,this.remarks];
      this.view.TransactionSigningWithoutUI.validateOfflineOTP(this.username,signContent,OTP);
  },
  
  btnSecureCodeCancel_onClick : function(){
    this.view.payments.paymentSign("otp", "rejected");
    this.paymentStatus = "closed_rejected";
    this.showPaymentScreen("Failure", kony.i18n.getLocalizedString("i18n.hid.txn.payment_declined_by_user"));
  },
  offlineTSSuccess : function(response){
    this.view.payments.paymentSign("otp", "accepted");
    this.paymentStatus = "closed_accepted";
    this.showPaymentScreen("Success");
    this.resetSecureCodeUI();
  },
  offlineTSFailure : function(error){
    this.resetSecureCodeUI();
    //In this flow RMS dashboard will not have reocrd for Invalid credentials
    if(error.SignatureValidation[0].error_description.includes("Resource owner username or password is invalid")){
      this.view.lblSecureCodeError.text = kony.i18n.getLocalizedString("i18n.hid.txn.invalidSecureCode");
      let account = this.account;
      let amount = this.amount; 
      let remarks = this.remarks;
      let serviceURL = this.getServiceURL();
      // To generate qr code for HID Approve app
      let qrData = this.view.TransactionSigningWithoutUI.generateQRDataForHIDApprove(serviceURL,account,amount,remarks,this.username); 
      
      // To generate qr code for MajorBank Demo app
     //  let qrData = this.view.TransactionSigningWithoutUI.generateQRDataForSDK(account,amount,remarks,this.username);
      let encodedData = btoa(qrData);
      this.view.QRCodeGenerator.generateQRCode(encodedData);
      this.showPaymentScreen("SecureCode");
      this.dismissLoading();
    } else {
      this.showPaymentScreen("Failure");
      this.view.payments.paymentSign("otp", "rejected");
      this.paymentStatus = "closed_rejected";
    }    
  },
  
  showPaymentScreen : function(screen, msg=""){
     for(let i of this.paymentContexts){
        this.view[`flxPayment${i}`].setVisibility(i==screen);
         if(i in this.paymentMessages && msg){
            let widget = this.paymentMessages[i];
            this.view[widget].text = msg;
         }
     }
     this.view.forceLayout();
  },
  
  getPaymentRequest : function(srcMode, patMode){
    let req = {};
    let temp = this.reqBaseTemplate
    let keys = Object.keys(temp);
    for(let key of keys){
       req[key] = temp[key].call(this);
    }
    let srcTemp = this.sourceAccountTemplate[srcMode];
    keys = Object.keys(srcTemp);
    for(let key of keys){
       req[key] = srcTemp[key].call(this);
    }
    let patTemp = this.patnerAccountTemplate[patMode];
    keys = Object.keys(patTemp);
    for(let key of keys){
      req[key] = patTemp[key].call(this);
    }
    return req;
  },
  
  btnCnfNext_onClick : function(){
    const getReqModes = source=>{
      switch(source){
        case "Iban" : return "iban";
        case "CB" : return "country_bank";
        case "Swift" : return "swift";
      }
    }
     let sourceMode = getReqModes(this.srcPaymentMode);
     let patnerMode = getReqModes(this.patPaymentMode);
     let request  = this.getPaymentRequest(sourceMode, patnerMode);
     this.showLoading();
     this.view.payments.paymentCreate(request,sourceMode, patnerMode, this.sessionId);
  },
  
  approveStatusAccept : function(){
    this.view.payments.paymentSign("pki", "accepted");
    this.paymentStatus = "closed_accepted";
    this.showPaymentScreen("Success");
  },
  
  approveStatusReject : function(){
    this.view.payments.paymentSign("pki", "rejected");
    this.paymentStatus = "closed_rejected";
    this.showPaymentScreen("Failure", kony.i18n.getLocalizedString("i18n.hid.txn.payment_declined_by_user"));
  },
  
  approveStatusFailure : function(){
    this.showPaymentScreen("Failure", "Approval Time out");
    this.view.payments.paymentSign("pki", "rejected");
    this.paymentStatus = "closed_rejected";
  },
  
  onRMSPaymentAccept : function(success){
    if(this.authType === "Approve"){
      this.view.TransactionSigningWithoutUI.getApproveDevices(this.username); 
     // this.view.TransactionSigningWithoutUI.approveInitiate(this.username,this.tdsRMS);
    } else {        
       let account = this.account;
       let amount = this.amount; 
       let remarks = this.remarks;
       let serviceURL = this.getServiceURL();
       // To generate qr code for HID Approve app
       let qrData = this.view.TransactionSigningWithoutUI.generateQRDataForHIDApprove(serviceURL,account,amount,remarks,this.username); 
      
      // To generate qr code for MajorBank Demo app
      // let qrData = this.view.TransactionSigningWithoutUI.generateQRDataForSDK(account,amount,remarks,this.username);
       let encodedData = btoa(qrData);
       this.view.QRCodeGenerator.generateQRCode(encodedData);
       this.showPaymentScreen("SecureCode");
       this.dismissLoading();
    }
  },
  onRMSPaymentDecline : function(){
    this.showPaymentScreen("Failure", kony.i18n.getLocalizedString("i18n.hid.txn.paymentDeclinedByRMS"));
    this.view.payments.paymentUpdate("closed_rejected");
    this.dismissLoading();
  },
  onRMSFailure : function(error){
    if(this.authType === "Approve"){
        this.view.TransactionSigningWithoutUI.getApproveDevices(this.username); 
     // this.view.TransactionSigningWithoutUI.approveInitiate(this.username,this.tdsRMS);
    } else {
       let account = this.account;
       let amount = this.amount; 
       let remarks = this.remarks;
       let serviceURL = this.getServiceURL();
      // To generate qr code for HID Approve app
       let qrData = this.view.TransactionSigningWithoutUI.generateQRDataForHIDApprove(serviceURL,account,amount,remarks,this.username); 
      
      // To generate qr code for MajorBank Demo app
    //   let qrData = this.view.TransactionSigningWithoutUI.generateQRDataForSDK(account,amount,remarks,this.username);
      let encodedData = btoa(qrData);
      this.view.QRCodeGenerator.generateQRCode(encodedData);
      this.showPaymentScreen("SecureCode");
      this.dismissLoading();
    }          
  },
  onRMSSignSuccess : function(success){
     this.view.payments.paymentUpdate(this.paymentStatus);
    if(this.authType === "SecureCode"){
      this.dismissLoading();
    }
  },
  onRMSSignFailure : function(error){
    alert(JSON.stringify(error));
  },
  getServiceURL : function(){
    return this.serviceURL;
  },
  getServiceURLSuccess : function(response){
    let host = response.host;
    let domain = response.tenant;
    this.serviceURL = `${host}\\\\${domain}`;
  },
  getServiceURLFailure : function(error){
    kony.print("HID: GetHostAndDomain error: "+JSON.stringify(error));
  },
  
  setDevice: function(response){
    this.showLoading();
    this.deleteDeviceId = response[0].deviceId;
    response.shift();
    if(response.length === 0){
        alert("Get Device Error")
      } else if(response.length > 0){
//         this.view.flxTSApprove.setVisibility(false);
        
  //      this.contextSwitch("PushDevices");
        let deviceData = response.map((device) => ({
          "deviceName" : device.friendlyName,
          "deviceId" : device.deviceId})); 
        let widetDataMap = {
          "lblDeviceName" : "deviceName",
          "lblDeviceId" : "deviceId"
        };
        this.view.segmentPushDevices.widgetDataMap = widetDataMap;
        this.view.segmentPushDevices.data = deviceData;
        this.view.flxPushDevices.setVisibility(true);
        this.dismissLoading();
      }
  },
  
//   getApproveDeviceSuccess : function(response){
//     if(response.length === 0){
//         this.getDeviceFailure("");
//       } else if(response.length > 0){
// //         this.view.flxTSApprove.setVisibility(false);
        
//   //      this.contextSwitch("PushDevices");
//         let deviceData = response.map((device) => ({
//           "deviceName" : device.friendlyName,
//           "deviceId" : device.deviceId})); 
//         let widetDataMap = {
//           "lblDeviceName" : "deviceName",
//           "lblDeviceId" : "deviceId"
//         };
//         this.view.segmentPushDevices.widgetDataMap = widetDataMap;
//         this.view.segmentPushDevices.data = deviceData;
//         this.view.flxPushDevices.setVisibility(true);
//         this.dismissLoading(); 
//       }
//   },
//   getApproveDeviceFailure : function(error){
//     kony.print("HID: getDeviceFailure error: "+JSON.stringify(error));
//   },
  
  callDeleteFunction: function(rowNumber){
    let rowData = this.view.segmentPushDevices.data[rowNumber];
    let tds = kony.i18n.getLocalizedString("i18n.hid.txn.delete_device_warning") + this.deleteDeviceId;
    this.view.flxPushDevices.setVisibility(false);
    this.showLoading();
    this.view.TransactionSigningWithoutUI.approveDeleteInitiate(this.username,tds, rowData.deviceId);
  },
  
  approveDeleteInitiateSuccess: function(){
    this.dismissLoading();
    this.view.flxDeleteDeviceApproved.setVisibility(true);
    this.view.forceLayout();
    this.showtimer();
  },
  
  showtimer: function(){
    var a = 115;
    var self = this;
    self.delTimer = self.timer = setInterval(timerFun,1000);
      function timerFun(){
        if(a === 0){
          clearInterval(self.timer);
          self.view.lblDeleteTimer.text = "";
        }
        let min = Math.floor(a/60);
        let sec = a%60;
        var text = sec < 10 ? `0${min}:0${sec}`:`0${min}:${sec}`;
        self.view.lblDeleteTimer.text = text;
        self.view.forceLayout();
        a--;
      }
  },

  
  approveDeleteInitiateFailure: function(){
    this.dismissLoading();
    this.deleteFailure(kony.i18n.getLocalizedString("i18n.hid.txn.delete_device_failed_error"));
  },
  
  approveDeleteStatusAccept: function(){
    this.dismissLoading();
    if (this.timer !== null){
      clearInterval(this.timer);
    }
    this.view.flxDeleteDeviceApproved.setVisibility(false);
    this.view.userManagement.unassignDevice(this.deleteDeviceId);
  },
  approveDeleteStatusReject: function(response){
    this.dismissLoading();
    if (this.timer !== null){
      clearInterval(this.timer);
    }
    if (response.status === "Timer-reject"){
      this.deleteFailure(kony.i18n.getLocalizedString("i18n.hid.txn.delete_device_failed_timeou"));
    }
    else if (response.status === "reject"){
      this.deleteFailure(kony.i18n.getLocalizedString("i18n.hid.txn.delete_device_failed_denied"));
    }
    else{
      this.deleteFailure(kony.i18n.getLocalizedString("i18n.hid.txn.delete_device_failed_error"));
    }
    this.view.flxDeleteDeviceApproved.setVisibility(false);
    
  },
  
  btnSegmentPushCancel_onClick: function(){
    this.view.flxPushDevices.setVisibility(false);
  },
  
  
  btnDeleteSuccessOk_onClick: function(){
    this.view.flxDeleteSuccess.setVisibility(false);
  },
  btnDeleteFailure_onClick: function(){
    this.view.flxDeleteFailure.setVisibility(false);
  },
  
  deleteSuccess: function(){
    this.view.flxDeleteSuccess.setVisibility(true);
    this.view.forceLayout();
  },
  deleteFailure: function(response){
    this.view.lblDeleteFailure.text = response;
    this.view.forceLayout();
    this.view.flxDeleteFailure.setVisibility(true);
    this.view.forceLayout();
  },
  
    btnSuspendFailure_onClick: function(){
    this.view.flxSuspendFailure.setVisibility(false);
  },
  
  suspendFailure: function(){
    this.view.flxSuspendFailure.setVisibility(true);
    this.view.forceLayout();
  },

  getDeviceSuccess: function(response){
   if(response.length === 0){
        this.getDeviceFailure("");  
      } else if(response.length > 1){
        let deviceData = response.map((device) => ({
          "deviceName" : device.friendlyName,
          "deviceId" : device.deviceId})); 
        let widetDataMap = {
          "lblDeviceName" : "deviceName",
          "lblDeviceId" : "deviceId"
        };
        this.view.segPushDevices.widgetDataMap = widetDataMap;
        this.view.segPushDevices.data = deviceData;
        this.view.segPushDevices.setVisibility(true);
        this.dismissLoading();
        } 
       else {
        this.deviceId = "";
        this.view.TransactionSigningWithoutUI.approveInitiate(this.username,this.tdsRMS,this.deviceId);
        }
     this.showPaymentScreen("PushDevices");
  },

  initiateApprove: function(rowNumber){
    let totalData = this.view.segPushDevices.data.slice();
    let data = totalData[rowNumber];
    this.deviceId = data.deviceId;
    this.view.TransactionSigningWithoutUI.approveInitiate(this.username,this.tdsRMS,this.deviceId);
  },

  getDeviceFailure : function(error){
     kony.print("HID: getDeviceFailure error: "+JSON.stringify(error));
     this.view.segPushDevices.setVisibility(false);
     this.view.lblSelectPushDevices.text = kony.i18n.getLocalizedString("i18n.hid.login.no_push_device");
   },

   cancelApprove : function(){
    kony.print("HID: cancelApprove for Transaction"); 
    this.showPaymentScreen("Selection")
   }
  

});