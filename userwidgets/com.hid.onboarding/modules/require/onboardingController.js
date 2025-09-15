define([`com/hid/onboarding/OnboardingPresentationController`], function(OnboardingPresentationController) {
  var contexts = ["Login", "ConfirmPassword","OTP","DeviceRegistration","HW","HWOTP","Approve","RegistrationSuccess","Error","LoginFIDO","UpdateDeviceFriendlyName","UpdateFriendlyNameError"];
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      //this.resetUIFields();
      this.view.btnSignUp.onClick = this.btnLogin_onClick;
      //this.view.tbxPassword2.onDone = this.btnLogin_onClick;
      this.view.btnPwdSubmit.onClick = this.btnPwdSubmit_onClick;
      this.view.btnConfirmOTP.onClick = this.btnConfirmOTP_onClick;
      this.view.btnResendApprove.onClick = this.btnResendApproveNotification;
      this.view.btnPushDone.onClick = this.btnPushDone_onClick;
      this.view.btnPwdCancel.onClick = this.btnCancelMain_onClick;
      this.view.btnCancelScanQR.onClick = this.btnCancelMain_onClick;
      this.view.btnRegSuccess.onClick = this.swithcLoginWrapper;
      this.view.btnRegCancel.onClick = this.btnCancelMain_onClick;
      this.view.btnCancelScanQR.onClick = this.btnCancelMain_onClick;
      this.view.btnCancelOTP.onClick = this.btnCancelMain_onClick;
      this.view.btnGoHome.onClick = this.btnCancelMain_onClick;
//       this.view.btnCancleHW.onClick=this.btnCancelMain_onClick;
      this.view.btnSubmitHW.onClick=this.btnSubmitHW_onClick;
      this.view.btnConfirmHWOTP.onClick = this.btnConfirmHWOTP_onClick;
      this.view.btnCancleHWOTP.onClick = this.btnCancelMain_onClick;
      this.view.btnUpdateDeviceFriendlyName.onClick = this.btnUpdateDeviceFriendlyName_onClick;
      this.view.btnUpdateFriendlyNameError.onClick = this.btnUpdateDeviceFriendlyNameError_onClick;
      this.contextSwitch("Login");
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, "FirstFactor", function() {
        return this._firstFactor;
      });
      defineSetter(this, "FirstFactor", function(val) {
        if(!["STATIC_PWD","OTP_SMS_PIN","SECURE_CODE", "FIDO","OTP_SMS","OTP_EML"].some(v=>v===val)){
          throw {
            "type": "CUSTOM",
            "message": kony.i18n.getLocalizedString("i18n.hid.onboarding.firstfactor_invalid")
          };
        }
        this._firstFactor = val;
      });
      defineGetter(this, "MFA", function() {
        return this._MFA;
      });
      defineSetter(this, "MFA", function(val) {
        if(!["OTP_SMS","OTP_EML","APPROVE","OTP_HWT","NO_MFA","STATIC_PWD","SECURE_CODE"].some(v=>v===val)){
          throw {
            "type": "CUSTOM",
            "message": kony.i18n.getLocalizedString("i18n.hid.onboarding.mfa_invalid")
          };
        }
//         if((val !=="NO_MFA" && this._firstFactor === "OTP_SMS_PIN") || ((val =="NO_MFA" && this._firstFactor != "OTP_SMS_PIN"))){
//           throw {
//             "type": "CUSTOM",
//             "message": "MFA property is Invalid.Please select MFA = NO_MFA for the selected FirstFactor"
//           };
//         }
        if((this._firstFactor === "SECURE_CODE" && val != "APPROVE") ){
          throw {
            "type": "CUSTOM",
            "message":  kony.i18n.getLocalizedString("i18n.hid.onboarding.mfa_invalid_approve_for_secure_code")
          };
        }
        this._MFA = val;
      });
    },
    username : "",
    userId : "",
    pwdMinLength : 5,
    pwdMinDiffChar : 5,
    pwdNotSequence : "true",
    pwdMaxLength : 100,
    pwdNotUserAttribute : "true",
    deviceSerial : "",
    pinMinLength : 4,
    pinMaxLength : 100,
    onboardingCorrelationIdPrefix: "ONBD-",
    correlationId : "",
    updateOnboardingUI: function(UIObject) {
      switch (UIObject.state) {
        case "activationCodeSuccess":
          this.activationCodeSuccess(UIObject.response);
          return;
        case "activationCodeFailure":
          this.activationCodeFailure(UIObject.response);
          break;
        case "addPasswordandMFAtoUserFailure":
          this.addPasswordandMFAtoUserFailure(UIObject.response);
          break;
        case "addAndSendOOBSuccess" : 
          this.addAndSendOOBSuccess();
          break;
        case "addAndSendOOBFailure" : 
          this.addAndSendOOBFailure();
          break;
        case "addOOBToUserSuccess" : 
          this.addOOBToUserSuccess();
          break;
        case "addOOBToUserFailure" : 
          this.addOOBToUserFailure();
          break;
        case "addPasswordToUserSuccess" : 
          this.addPasswordToUserSuccess();
          break;
        case "addPasswordToUserFailed" : 
          this.addPasswordToUserFailed(UIObject.response);
          break;
        case "approveDeviceRegistrationSuccess" :
          this.approveDeviceRegistrationSuccess(UIObject.response);
          return;
        case "approveDeviceRegistrationFailure" :
          this.approveDeviceRegistrationFailure(UIObject.response);
          break;
        case "deviceRegistrationPollingSuccess" :
          this.deviceRegistrationPollingSuccess(UIObject.response);
          break;
        case "deviceRegistrationPollingFailure" :
          this.deviceRegistrationPollingFailure(UIObject.response);
          break;  
        case "RegistrationSuccess" :
          this.RegistrationSuccess(UIObject.response);
          break;
        case "approveNotificationSuccess" :
          this.approveNotificationSuccess(UIObject.response);
          break;
        case "approveNotificationFailure" :
          this.approveNotificationFailure(UIObject.response);
          break;
        case "approveStatusPollingSuccess" :
          this.approveStatusPollingSuccess(UIObject.response);
          break;
        case "approveStatusPollingFailure" :
          this.approveStatusPollingFailure(UIObject.response);
          break;
        case "validateOOBSuccess" :
          this.validateOOBSuccess(UIObject.response);
          break;
        case "activationCodeSuccessWithPasswordPolicy":
          this.updatePwdPolicy(UIObject.response);
          break;
        case "validateOOBFailure" :
          this.validateOOBFailure(UIObject.response);
          break;
        case "searchHWTSuccess" :
          this.searchHWTSuccess(UIObject.response);
          break;
        case "searchHWTFailure" :
          this.searchHWTFailure(UIObject.response);
          break;
        case "addHWAuthenticatorSuccess":
          this.addHWAuthenticatorSuccess();
          break;
        case "addHWAuthenticatorFailure":
          this.validateOOBFailure(UIObject.response);
          break
        case "searchHardwareDeviceFailure" :
          this.searchHardwareDeviceFailure(UIObject.response);
          break;
        case "addHardwareDeviceToUserSuccess" :
          this.addHardwareDeviceToUserSuccess(UIObject.response);
          break;
        case "addHardwareDeviceToUserFailure" :
          this.addHardwareDeviceToUserFailure(UIObject.response);
          break;
        case "fidoDeviceRegistrationSuccess":
          this.fidoRegistrationSuccess(UIObject.response);
          break;
        case "fidoDeviceRegistrationFailure":
          this.fidoRegistrationFailure(UIObject.response);
          break;
        case "getDeviceOnboardingSuccess":
          this.getDeviceOnboardingSuccess(UIObject.response);
          break;
        case "getDeviceOnboardingFailure":
          this.getDeviceOnboardingFailure(UIObject.response);
          break;
        case "updateDeviceFriendlyNameOnboardingSuccess":
          this.updateDeviceFriendlyNameOnboardingSuccess(UIObject.response);
          break
        case "updateDeviceFriendlyNameOnboardingFailure":
          this.updateDeviceFriendlyNameOnboardingFailure(UIObject.response);
          break
        default:
          alert("Object state unavailable: "+UIObject.state);
      }
      this.commonEventHandler(this.dismissLoading, "");
    },
    resetUIFields: function() {
      this.view.tbxActivationCode.text = "";
      this.view.tbxPassword1.text = "";
      this.view.tbxPassword2.text = "";
      this.view.lblErrorLogin.text = "";
      this.view.lblErrorPassword.text = "";
      this.view.lblErrorApprove.text = "";
      this.view.lblErrorOTP.text = "";
      this.view.lblErrorUpdateDeviceFriendlyName.text = "";
      this.view.lblErrorUpdateDeviceFriendlyName.setVisibility(false);
    },
    btnLogin_onClick: function() {
      if (this.view.tbxUser.text === "") {
        this.view.lblErrorLogin.text = kony.i18n.getLocalizedString("i18n.hid.login.enter_userid");
        return;
      }
      if (this.view.tbxActivationCode.text === "") {
        this.view.lblErrorLogin.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.enter_activation_code");
        return;
      }
      var username = this.view.tbxUser.text;
      var activationCode = this.view.tbxActivationCode.text;
      this.commonEventHandler(this.showLoading, "");
      this.username = username;
      var UUID = this.generateUUID();
      this.correlationId = (this.onboardingCorrelationIdPrefix + UUID);
      kony.print(this.correlationId);
      OnboardingPresentationController.validateActivationCode(this.updateOnboardingUI,username, activationCode, this.correlationId);
    },
    btnSubmitHW_onClick: function() {      
      if (this.view.tbxDeviceSerial.text === "") {
        this.view.lblErrorHW.setVisibility(true);
        this.view.lblErrorHW.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.enter_device_serial");
        return;
      }
      this.view.lblErrorHW.text ="";
      var deviceSerial = this.view.tbxDeviceSerial.text;
      this.commonEventHandler(this.showLoading, "");
      this.deviceSerial = deviceSerial;
      OnboardingPresentationController.searchHardwareDevice(this.updateOnboardingUI,deviceSerial);
    },

    btnConfirmHWOTP_onClick : function(){
      this.correlationId = this.onboardingCorrelationIdPrefix + this.generateUUID();
      var OTP = this.view.tbxHWOTP.text;
      if (this.view.tbxHWOTP.text === "") {
        this.view.lblErrorHWOTP.setVisibility(true);
        this.view.lblErrorHWOTP.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.enter_otp");
        return;
      }
      var authType = "AT_EMPOTP";
      this.view.lblErrorHWOTP.text = "";
      this.commonEventHandler(this.showLoading, "");
      OnboardingPresentationController.validateOOB(this.updateOnboardingUI,OTP,this.correlationId,authType);	
    },
    btnPwdSubmit_onClick: function() {
      if (this.view.tbxPassword1.text === "") {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.enter_password");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (this.view.tbxPassword2.text === "") {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.confirm_password");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (this.view.tbxPassword2.text !== this.view.tbxPassword1.text) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.passwords_mismatch");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      var s = this.view.tbxPassword1.text;
      if (s.length < this.pwdMinLength || s.length > this.pwdMaxLength) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_length_invalid");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (s.search(/[a-z]/i) < 0) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_must_contain_letter");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (s.search(/[0-9]/) < 0) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_must_contain_digit");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (this.pwdNotSequence === "true" && !this.seqCheck(s)) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_no_sequence");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if(this.pwdNotUserAttribute === "true" && this.checkUsernameInPassword(s)){
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_contains_username");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (!this.UniqueCount(s)) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_min_different_chars");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      var password = this.view.tbxPassword1.text;
      this.commonEventHandler(this.showLoading, "");
      if (this._MFA !== "STATIC_PWD"){
        OnboardingPresentationController.addPasswordandMFAtoUser(this.updateOnboardingUI,password,this._MFA,this.correlationId);
      }
      else{
        OnboardingPresentationController.addPasswordToUser(this.updateOnboardingUI,password,this.correlationId,"2")
      }
    },
    updatePwdPolicy : function(response){
       //alert(JSON.stringify(response));
       this.pwdMinDiffChar = +response.minDiffChars || 5;
       this.pwdMinLength = +response.minLength || 5;
       this.pwdMaxLength = +response.maxLength || 100;
       this.pwdNotSequence = response.notSequence || "true";
       this.pwdNotUserAttribute = response.notUserAttribute || "true";
       this.commonEventHandler(this.passwordPolicy,response);
       this.activationCodeSuccess(response);
    },
    btnConfirmOTP_onClick : function(){
      var OTP = this.view.tbxOTP.text;
      if (this.view.tbxOTP.text === "") {
        this.view.lblErrorOTP.setVisibility(true);
        this.view.lblErrorOTP.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.enter_otp");
        return;
      }
      this.view.lblErrorOTP.text = "";
      this.commonEventHandler(this.showLoading, "");
      OnboardingPresentationController.validateOOB(this.updateOnboardingUI,OTP,this.correlationId);
    },
    activationCodeSuccess: function(response) {
      this.userId = response.userid;
      this.Auth_Key = response.Auth_Key;
      //this.correlationId = response.correlationId;
      this.navigateToFirstFactor();
    },
    navigateToFirstFactor : function(){
       let firstFactor = this._firstFactor;
       switch(firstFactor){
         case "SECURE_CODE": 
           this.navigateToProvisionMode();
           break;
         case "STATIC_PWD" :
           this.navigateToPassword();
           break;
         case "OTP_SMS_PIN" :
           this.navigateToSMSPIN();
           break
         case "FIDO":
           this.navigateToFIDO();
           break;
         case "OTP_SMS":
           this.navigateToSMS();
           break
         case "OTP_EML":
           this.navigateToSMS();
           break
         default :
           this.navigateToPassword();
           break;
       }
    },
    
    navigateToProvisionMode : function(){
        this.commonEventHandler(this.showLoading, "");
        OnboardingPresentationController.approveDeviceRegistration(this.updateOnboardingUI,this.correlationId);
    },
    navigateToPassword : function(){
       this.configureSumbitPINButton("Password");
       this.view.btnPwdSubmit.onClick = this.btnPwdSubmit_onClick;
       this.contextSwitch("ConfirmPassword");
       this.commonEventHandler(this.dismissLoading, "");
    },
    navigateToSMSPIN : function(){
       this.configureSumbitPINButton("PIN");
       this.view.btnPwdSubmit.onClick = this.btnSMSPIN_Onclick;
       this.contextSwitch("ConfirmPassword");
       this.commonEventHandler(this.dismissLoading, "");
    },

    navigateToSMS: function(){
       OnboardingPresentationController.addOOBToUser(this.updateOnboardingUI,this._firstFactor,this.correlationId,"1");
    },

    
    navigateToFIDO() {
      OnboardingPresentationController.fidoDeviceRegistration(this.updateOnboardingUI,this.correlationId);
    },
    
    activationCodeFailure: function({ActivationCodeError}) {
      this.resetUIFields();
      this.view.lblErrorLogin.text = ActivationCodeError;
    },
    addAndSendOOBSuccess : function(){
      this.contextSwitch("OTP");
    },
    addAndSendOOBFailure : function(){
      this.contextSwitch("Error");
    },
    configureSumbitPINButton : function(mode){
       this.view.tbxPassword1.placeholder = mode;
       this.view.tbxPassword2.placeholder = `Confirm ${mode}`;
       this.view.btnPwdSubmit.onClick = mode == "Password" ? this.btnPwdSubmit_onClick : this.btnSMSPIN_Onclick;
    },
    btnSMSPIN_Onclick : function(){
        if (this.view.tbxPassword1.text === "") {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.enter_pin");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (this.view.tbxPassword2.text === "") {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.confirm_pin");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if (this.view.tbxPassword2.text !== this.view.tbxPassword1.text) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.pins_mismatch");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      var s = this.view.tbxPassword1.text;
      if (s.length < this.pinMinLength || s.length > this.pinMaxLength) {
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.pin_length_invalid");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      if(isNaN(s)){
        this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.pin_digits_only");
        this.view.lblErrorPassword.setVisibility(true);
        return;
      }
      var password = this.view.tbxPassword1.text;
      this.commonEventHandler(this.showLoading, "");
       OnboardingPresentationController.addOOBToUserWithPin(this.updateOnboardingUI, "OTP_SMS", password,this.correlationId);
    },
    approveDeviceRegistrationSuccess : function(response){
      var encodedData = btoa(response.inviteCodeString);
      this.view.QRCodeGenerator.generateQRCode(encodedData);
      let uidText = kony.i18n.getLocalizedString("i18n.hid.onboarding.usernameLabel");
      uidText = uidText.replace("{response.username}", response.username);
      let invCode = kony.i18n.getLocalizedString("i18n.hid.onboarding.inviteCodeLabel");
      invCode = invCode.replace("{response.decodedInvCode}", response.decodedInvCode);
      let hostUrl = kony.i18n.getLocalizedString("i18n.hid.onboarding.serviceUrlLabel");
      hostUrl = hostUrl.replace("{response.url}", response.url);
      this.view.lblUid.text = uidText;
      this.view.lblInvCode.text = invCode;
      this.view.lblRegURL.text = hostUrl;
      this.view.flxQRMain.setVisibility(true);
      this.view.flxManualMain.setVisibility(false);
      this.view.lblActivatemanually.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.activate_manually");
      var hyperLink = `hidglobal-approve://activate?name=ActivID%20Self%20Service%20Portal&qrcode=${btoa(response.inviteCodeString)}`;
      const template = kony.i18n.getLocalizedString("i18n.hid.onboarding.activateApproveMsg");
      var manualText = template.replace("${hyperLink}", hyperLink);
      var QRtext = kony.i18n.getLocalizedString("i18n.hid.onboarding.scanQRCode");
      this.view.lblActivatemanually.onTouchEnd = source => {
        let manual = kony.i18n.getLocalizedString("i18n.hid.onboarding.manual");
        let qr = kony.i18n.getLocalizedString("i18n.hid.onboarding.qr");
        let state = source.text === kony.i18n.getLocalizedString("i18n.hid.onboarding.activate_manually") ? manual : qr;
        source.text = state === manual ? kony.i18n.getLocalizedString("i18n.hid.onboarding.viewQr") : kony.i18n.getLocalizedString("i18n.hid.onboarding.activate_manually");
        this.view.lblScanQR.text  = state === manual ? manualText : QRtext;
        this.view.flxQRMain.setVisibility(state === qr);
        this.view.flxManualMain.setVisibility(state === manual);
        this.view.forceLayout();
      };
      this.contextSwitch("DeviceRegistration");
      this.commonEventHandler(this.dismissLoading, "");
    },
    approveDeviceRegistrationFailure: function(response){
      //to show error message in case of failure of device registration.
      this.contextSwitch("Error");
    },
    approveNotificationSuccess : function(){
      //Can initiate timer if necessary
    },

    approveNotificationFailure : function(){
      this.view.lblErrorApprove.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.approve_declined");
    },
    approveStatusPollingSuccess: function({message}){
      this.contextSwitch("RegistrationSuccess");
    },
    approveStatusPollingFailure: function({message}){
      this.view.lblErrorApprove.text = message;
    },

    deviceRegistrationPollingSuccess: function(response){
      this.getDeviceOnboarding(response);
      //this.contextSwitch("RegistrationSuccess");
  //    this.contextSwitch("Approve");
 //     OnboardingPresentationController.initiateApproveNotification(this.updateOnboardingUI);
    },
    deviceRegistrationPollingFailure: function(response){
      //Can update any text field
      kony.print("Device registration polling timed out");
    },

    getDeviceOnboarding : function(response){
        this.commonEventHandler(this.showLoading, "");
        OnboardingPresentationController.getDeviceOnboarding(this.updateOnboardingUI,this.correlationId);
    },

    getDeviceOnboardingSuccess : function(response){
        //console.log("Get Device Success --> " + JSON.stringify(response));
        this.commonEventHandler(this.dismissLoading, "");
        let resp = response.response;
        if (resp.status === "ACTIVE"){
            this.view.tbxUpdateDeviceFriendlyName.text = resp.friendlyName;
            this.contextSwitch("UpdateDeviceFriendlyName");
        }
        else{
            this.contextSwitch("RegistrationSuccess");
        }
    },

    getDeviceOnboardingFailure : function(response){
        console.log("Get Device failure --> " + response);
        this.commonEventHandler(this.dismissLoading, "");
        this.resetUIFields();
        this.contextSwitch("RegistrationSuccess")
    },

    updateDeviceFriendlyNameOnboardingSuccess : function(response){
        this.commonEventHandler(this.dismissLoading, "");
        this.resetUIFields();
        this.resetUpdateFriendlyNameText();
        this.contextSwitch("RegistrationSuccess");
    },

    updateDeviceFriendlyNameOnboardingFailure : function(response){
        this.resetUIFields();
        this.resetUpdateFriendlyNameText();
        this.commonEventHandler(this.dismissLoading, "");
        this.contextSwitch("UpdateFriendlyNameError");
        
    },

    btnUpdateDeviceFriendlyName_onClick : function(){
        this.view.lblErrorUpdateDeviceFriendlyName.text = "";
        this.view.lblErrorUpdateDeviceFriendlyName.setVisibility(false);
        let newFriendlyName = this.view.tbxUpdateDeviceFriendlyName.text;
        if (newFriendlyName === ""){
            this.view.lblErrorUpdateDeviceFriendlyName.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.updateDeviceFriendlyNameError");
            this.view.lblErrorUpdateDeviceFriendlyName.setVisibility(true);
            return;
        }
        this.commonEventHandler(this.showLoading, "");
        OnboardingPresentationController.updateDeviceFriendlyNameOnboarding(this.updateOnboardingUI,this.correlationId,newFriendlyName)
    },

    btnUpdateDeviceFriendlyNameError_onClick : function(){
        this.resetUpdateFriendlyNameText();
        this.contextSwitch("RegistrationSuccess");
    },

    resetUpdateFriendlyNameText : function(){
        this.view.tbxUpdateDeviceFriendlyName.text = "";
    },

    btnResendApproveNotification: function(){
      this.resetUIFields();
      OnboardingPresentationController.initiateApproveNotification(this.updateOnboardingUI);
    },

    btnPushDone_onClick: function(){
      this.contextSwitch("RegistrationSuccess");
    },
    btnCancelMain_onClick: function(){
      this.resetUIFields();
      this.contextSwitch("Login");
    },

    validateOOBSuccess: function(){
      if ((this._firstFactor == "OTP_SMS" || this._firstFactor == "OTP_EML") && this._MFA == "STATIC_PWD"){
        this.navigateToPassword();
      }
      else{
        this.contextSwitch("RegistrationSuccess");
      }
    },
    validateOOBFailure: function(){
      this.view.lblErrorOTP.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.otp_validation_failed");
      this.view.lblErrorOTP.setVisibility(true);
      this.view.lblErrorHWOTP.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.otp_validation_failed");
      this.view.lblErrorHWOTP.setVisibility(true);
    },
    addOOBToUserSuccess: function(){
      //A success event can be handled if necessary
    },
    addOOBToUserFailure: function(){
      this.contextSwitch("Error");
    },
    addPasswordandMFAtoUserFailure: function(){
      //this.contextSwitch("Error");
      this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.invalid_password");
    },

    addPasswordToUserSuccess: function(){
        this.resetUIFields();
        this.contextSwitch("RegistrationSuccess");
    },

    addPasswordToUserFailed: function(response){
        if (response.response.AddPasswordAuthenticator !== undefined && response.response.AddPasswordAuthenticator !== null){
            if (response.response.AddPasswordAuthenticator[0].AddPasswordServiceError === "Invalid request or cache value missing/removed."){
                this.resetUIFields();
                this.contextSwitch("Error");
        }

            else{
                this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.invalid_password");
            }
        }
        else{
            this.view.lblErrorPassword.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.invalid_password");
        }

    },
    addHardwareDeviceToUserSuccess: function(){
      this.contextSwitch("HWOTP");
    },
    addHardwareDeviceToUserFailure: function(){
      this.view.lblErrorHW.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.hardware_token_add_failed");
      this.view.lblErrorHW.setVisibility(true);
    },
    addHWAuthenticatorSuccess : function(){
      this.contextSwitch("HW");
    },
    searchHardwareDeviceFailure: function(){
      this.view.lblErrorHW.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.hardware_devices_not_found");
      this.view.lblErrorHW.setVisibility(true);
    },
    
    generateUUID: function() {
      const crypto = window.crypto || window.msCrypto;
      const buffer = new Uint16Array(8);
      crypto.getRandomValues(buffer);
 
      buffer[3] &= 0x0fff;
      buffer[3] |= 0x4000;
      buffer[4] &= 0x3fff;
      buffer[4] |= 0x8000;
 
      return buffer.reduce((str, byte, i) => {
        const hex = byte.toString(16).padStart(4, '0');
        return str + (i === 2 || i === 4 || i === 6 ? '-' : '') + hex;
      }, '');
    },
    
    seqCheck: function(s) {
      // Check for sequential numerical characters
      for (let i in s)
        if (+s[+i + 1] == +s[i] + 1 && +s[+i + 2] == +s[i] + 2) return false;
      // Check for sequential alphabetical characters
      for (let i in s)
        if (String.fromCharCode(s.charCodeAt(i) + 1) == s[+i + 1] && String.fromCharCode(s.charCodeAt(i) + 2) == s[+i + 2]) return false;
      return true;
    },
    UniqueCount: function(nonUnique) {
      var unique = nonUnique.split('').filter(function(item, i, ar) {
        return ar.indexOf(item) === i;
      }).join('');
      return unique.length >= this.pwdMinDiffChar;
    },
    checkUsernameInPassword(pwd){
        var username = this.username.toLowerCase();
        var pwdLower =  pwd.toLowerCase();
        return pwdLower.includes(username);
    },
    contextSwitch: function(context) {
      if (context !== "UpdateDeviceFriendlyName" && context !== "UpdateFriendlyNameError"){
        this.commonEventHandler(this.changeContext,context);
      }
      this.resetUIFields();
      for (let i of contexts) {
        this.view[`flx${i}`].setVisibility(i === context);
      }
      this.view.forceLayout();
    },
    swithcLoginWrapper : function(){
       this.commonEventHandler(this.switchLogin,"");
    },
    getUserId : function(){
       return this.userId;
    },
    getUsername : function(){
      return this.username;
    },
    commonEventHandler(event,intent){
       if(event){
          event(intent);
       }
    },
    resetUI : function(){
       this.contextSwitch("Login");
    },
    
    fidoRegistrationSuccess(response) {
      // this.contextSwitch("Login");
      // alert(JSON.stringify(response));
      this.contextSwitch("RegistrationSuccess");
      this.commonEventHandler(this.dismissLoading, "");
    },
     
    fidoRegistrationFailure(response) {
      this.resetUIFields();
      this.contextSwitch("Error");
      this.commonEventHandler(this.dismissLoading, "");
    }
  };

});
