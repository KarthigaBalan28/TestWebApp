define([`com/hid/userManagement/UserManagementPresentationController`], function(UserManagementPresentationController) {
    const userManagementConstants = {};
    userManagementConstants.ERROR_EML_NOT_MATCH = kony.i18n.getLocalizedString("i18n.hid.usermanagement.emailMismatch");
    userManagementConstants.ERROR_NEW_EML_NOT_ENTERED = kony.i18n.getLocalizedString("i18n.hid.usermanagement.enterNewEmail");
    userManagementConstants.ERROR_INVALID_EML = kony.i18n.getLocalizedString("i18n.hid.usermanagement.invalidEmail");
    userManagementConstants.ERROR_CNF_EML = kony.i18n.getLocalizedString("i18n.hid.usermanagement.confirmNewEmail");
    userManagementConstants.ERROR_MBL_NOT_MATCH = kony.i18n.getLocalizedString("i18n.hid.usermanagement.mobileMismatch");
    userManagementConstants.ERROR_NEW_MBL_NOT_ENTERED = kony.i18n.getLocalizedString("i18n.hid.usermanagement.enterNewMobile");
    userManagementConstants.ERROR_CNF_MBL = kony.i18n.getLocalizedString("i18n.hid.usermanagement.confirmNewMobile");
    userManagementConstants.ERROR_MBL_WITHOUT_COUNTRYCODE = kony.i18n.getLocalizedString("i18n.hid.usermanagement.enterMobileWithCountryCode");
    userManagementConstants.ERROR_INVALID_MBL = kony.i18n.getLocalizedString("i18n.hid.usermanagement.invalidMobile");
  const EventEmitter = {
      mandatoryEvent : {
        emit : function(event, eventName, args){
            if(!event){
              throwCustomException(`Configuration Error, ${eventName} is not subscribed`);
              return;
            }
            event.apply(this, args);
        }
      },
      optionalEvent : {
        emit : function(event, eventName,args){
           if(event){
             event.apply(this,args);
           }
        }
      }
  };
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {        
      this.view.segmentDevices.data = [];
      this.view.tabSelfService.txtUserIdValue.setEnabled(false);
      this.view.tabSelfService.txtInviteCodeValue.setEnabled(false);
      this.view.tabSelfService.txtServiceUrlValue.setEnabled(false);
      this.view.tabSelfService.rdBtnGroupUpdateAttribute.onSelection = this.showUpdateAttributeScreen;
      this.view.tabSelfService.txtNewEmail.onTouchStart = source => this.showUpdateEmailError(false);
      this.view.tabSelfService.txtConfirmEmail.onTouchStart = source => this.showUpdateEmailError(false);
      this.view.tabSelfService.txtNewMobile.onTouchStart = source => this.showUpdateMobileError(false);
      this.view.tabSelfService.txtConfirmMobile.onTouchStart = source => this.showUpdateMobileError(false);
       
    },

    initGettersSetters: function() {
      defineGetter(this, "Username", function() {
        return this._username;
      });
      defineSetter(this, "Username", function(val) {
        if(val === undefined || null){
          throw {
            "type": "CUSTOM",
            "message": kony.i18n.getLocalizedString("i18n.hid.usermanagement.username_required")
          };
        }
        this._username = val;
      });
      //isRMSEnabled true or false
      defineGetter(this, "isRMSEnabled", function() {
        kony.print('isRMSEnabled:'+this._isRMSEnabled);
        return this._isRMSEnabled;
      });
      defineSetter(this, "isRMSEnabled", function(val){
        if(!(val) || val == undefined){
          this._isRMSEnabled = false;
        }else {
          this._isRMSEnabled = val;
        }
      });
    },
    policy : "",
    sessionId : "",
	actionType :"",
    email:"",
    mobile:"",
    firstname:"",
    lastname:"",
    externalId:"",
    UserManagementCorrelationIdPrefix: "MGMT-",
    correlationId : "",
    loadUserManagement : function(sessionId){
      this.sessionId = sessionId;
      this.commonEventHandler(this.showLoading, "");
      this.getPasswordPolicy(this.getUserDevices);
      this.resetChangePasswordUI(); 
      this.view.nonFinancialComponent.resetUIFields();
      this.view.flxNonFinancialComponent.setVisibility(false);
      this.resetUpdateEmailUI();
      this.resetUpdateMobileUI();
      this.searchUserAttributes();
    },

    getUserDevices : function(){     
      UserManagementPresentationController.getDevicesForUser(this._username, this.getDevicesSuccess, this.getDevicesFailure);
    },

    getDevicesSuccess : function(response){      
      if(response.SearchDevices.length>0){
        let dataSet = response.SearchDevices;
        let deviceData = [];       
        for(var i=0; i<dataSet.length; i++){
          if(dataSet[i].friendlyName && dataSet[i].friendlyName !== null) {
           let devices = {
              "friendlyName" : { "text" : dataSet[i].friendlyName, "enable" : false},
          deviceId : (dataSet[i].deviceId && dataSet[i].deviceId !== null && dataSet[i].deviceId !== "") ? dataSet[i].deviceId : "",
           "status1" :  {"isVisible" : dataSet[i].active},
           "status2" : {"isVisible" : !dataSet[i].active},
           validFrom : (dataSet[i].startDate && dataSet[i].startDate !== null && dataSet[i].startDate !== "") ? dataSet[i].startDate.slice(0,10): "",
           validTo : (dataSet[i].expiryDate && dataSet[i].expiryDate !== null && dataSet[i].expiryDate !== "") ? dataSet[i].expiryDate.slice(0,10) : "",
           changeStatus : {
           "text" : dataSet[i].active ? "SUSPEND" : "ACTIVE",
            "skin" : dataSet[i].active ? "sknSuspend" : "sknActive"},
           edit : {"isVisible" : true},
           imgOk : {"isVisible" : false},
           imgCancel : {"isVisible" : false},
           imgDeleteDevice : {"isVisible": true},
            }
           deviceData.push(devices);
        }
        }
        //V9 Changes
//         let deviceData = dataSet.map((data,index)=>({
//           "friendlyName" : {"text" : data.friendlyName, "enable" : false},
//           "deviceId" : (data.deviceId && data.deviceId !== null && data.deviceId !== "") ? data.deviceId : "",
//           "status1" :  {"isVisible" : data.active},
//           "status2" : {"isVisible" : !data.active},
//           "validFrom" : (data.startDate && data.startDate !== null && data.startDate !== "") ? data.startDate.slice(0,10): "",
//           "validTo" : (data.expiryDate && data.expiryDate !== null && data.expiryDate !== "") ? data.expiryDate.slice(0,10) : "",
//           "changeStatus" : {
//             "text" : data.active ? "SUSPEND" : "ACTIVE",
//             "skin" : data.active ? "sknSuspend" : "sknActive"},
//           "edit" : {"isVisible" : true},
//           "imgOk" : {"isVisible" : false},
//           "imgCancel" : {"isVisible" : false},
//           "imgDeleteDevice" : {"isVisible": true}
//         }));       

        let widgetDataMap = {
          "txtDeviceName" : "friendlyName",
          "lblDeviceId" : "deviceId",
          "imgActive" : "status1",
          "imgSuspend" : "status2",
          "lblValidFromValue" : "validFrom",
          "lblValidToValue" : "validTo",
          "btnChangeStatus" : "changeStatus",
          "Edit" : "edit",
          "imgOk" : "imgOk",
          "imgCancel" : "imgCancel",
          "imgDeleteDevice": "imgDeleteDevice"
        };
        this.view.segmentDevices.widgetDataMap = widgetDataMap;         
        this.view.segmentDevices.data = deviceData;        
      }      
       this.commonEventHandler(this.dismissLoading, "");
    },

    getDevicesFailure : function(error){
      alert("Failed to get the list of devices");
       this.commonEventHandler(this.dismissLoading, "");
    },

    editTouchEnd : function(context){
      var rowData = this.view.segmentDevices.data[context.row];
      this.friendlyName = rowData.friendlyName.text;
      rowData.friendlyName = {"text" : this.friendlyName, "enable" : true};
      rowData.edit = {"isVisible" : false};
      rowData.imgOk = {"isVisible" : true};
      rowData.imgCancel = {"isVisible" : true};
      this.view.segmentDevices.setDataAt(rowData, context.row, context.section);      
    },

    cancelEdit:  function(context){
      var rowData = this.view.segmentDevices.data[context.row];      
      rowData.friendlyName = {"text" : this.friendlyName, "enable" : false};
      rowData.edit = {"isVisible" : true};
      rowData.imgOk = {"isVisible" : false};
      rowData.imgCancel = {"isVisible" : false};
      this.view.segmentDevices.setDataAt(rowData, context.row, context.section);
    },
    
    deletedeviceButtonClick: function(context){
      	this.correlationId = this.UserManagementCorrelationIdPrefix + this.generateUUID();
		this.view.nonFinancialComponent.stepUpRequired = status => { this.view.flxNonFinancialComponent.setVisibility(true);
                                                                  this.commonEventHandler(this.dismissLoading, "");};
        if (this.view.segmentDevices.data.length === 1){
          EventEmitter.mandatoryEvent.emit(this.deleteFailure, "deleteFailure", [kony.i18n.getLocalizedString("i18n.hid.usermanagement.deleteDeviceFailedSingleLeft")]);

        }
		else{
          var rowData = this.view.segmentDevices.data[context.row];
          this.commonEventHandler(this.showLoading, "");
          this.actionType = "Delete_Device";
          if(this._isRMSEnabled){
         /*   this.view.nonFinancialComponent.rmsDeleteStatus = status => {
              this.commonEventHandler(this.dismissLoading, "");
              if (status.status === "USER-BLOCK"){
                alert("Cannot delete device User Blocked");
              }
              else if (status.status === "STEP-DOWN"){
                this.unassignDevice(rowData.deviceId);
              }
              else{
                var mapData = this.view.segmentDevices.data;
                var listData = [];
                for (let data = 0; data < mapData.length ; data++){
                  if (mapData[data].deviceId !== rowData.deviceId){
                    if (mapData[data].status1.isVisible === true){
                      listData.push(mapData[data]);
                    }
                  }
                }
                if (listData.length === 0){
                  EventEmitter.mandatoryEvent.emit(this.deleteFailure, "deleteFailure", ["No Active Device To Send Approve Notification"]);
                }
                else{
                  var rowDataObject = {deviceId : rowData.deviceId};
                  listData.unshift(rowDataObject);
                  EventEmitter.mandatoryEvent.emit(this.setDevice, "setDevice", [listData]);
                }
              }
            };*/
            this.view.nonFinancialComponent.analyzeActionSuccess = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                             this.unassignDevice(rowData.deviceId); 
            };
            this.view.nonFinancialComponent.analyzeActionFailure = status =>{this.view.flxNonFinancialComponent.setVisibility(false);
                                                                             this.commonEventHandler(this.dismissLoading, "");
                                                                             alert(status);
            };
            this.view.nonFinancialComponent.analyzeAction(this._username,this.actionType,this.sessionId, this._isRMSEnabled,this.correlationId);
          } else{
            /*
            Karthiga-BNF changes for Push and Secure code when RMS is disabled
            */
            this.view.flxNonFinancialComponent.setVisibility(true);
            this.commonEventHandler(this.dismissLoading, "");        
            this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
                                                                              this.unassignDevice(rowData.deviceId);};
            this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                             this.commonEventHandler(this.dismissLoading, "");
                                                                             alert(status);};
      
            this.view.nonFinancialComponent.stepUpAuthentication(this._username, this.actionType,this.correlationId);            
            this.view.flxNonFinancialComponent.forceLayout();
          }
        }
    },
    
    //Public Method
    unassignDevice: function(deviceId){
      this.commonEventHandler(this.showLoading, "");
      UserManagementPresentationController.unassignDevice(deviceId,"SUSPENDED","",
                                                         success => this.unassignDeviceSuccess(deviceId,success),
                                                         error => this.unassignDeviceError(error),this.correlationId
                                                         );
      
    },
    
    unassignDeviceSuccess: function(deviceId,response){
      this.deleteDevice(deviceId,this.correlationId);
    },
    
    unassignDeviceError: function(error){
      this.commonEventHandler(this.dismissLoading, "");
      EventEmitter.mandatoryEvent.emit(this.deleteFailure, "deleteFailure", [kony.i18n.getLocalizedString("i18n.hid.usermanagement.deleteDeviceFailedGeneric")]);

    },
    
    assignDevice: function(deviceId){
      UserManagementPresentationController.assignDevice(deviceId,"ACTIVE",this._username,
                                                        success => {this.commonEventHandler(this.dismissLoading, "");
                                                                    },
                                                        error => {this.commonEventHandler(this.dismissLoading, "");
                                                                   alert(JSON.stringify(error));
                                                                 },this.correlationId
                                                         );
      
    },
    
    
    deleteDevice : function(deviceId){
      UserManagementPresentationController.deleteDevice(deviceId,
                                                        success => this.deleteDeviceSuccess(success), 
                                                        error =>  this.deleteDeviceError(deviceId,error),
                                                        this.correlationId
                                                        );
      
    },
    
    deleteDeviceSuccess : function(response){
      this.getUserDevices();
      if(this._isRMSEnabled){
        this.view.nonFinancialComponent.updateActionInRMS();
      }
      EventEmitter.mandatoryEvent.emit(this.deleteSuccess, "deleteSuccess", []);
    },
    
    deleteDeviceError : function(deviceId,response){
      this.assignDevice(deviceId);
      EventEmitter.mandatoryEvent.emit(this.deleteFailure, "deleteFailure", [kony.i18n.getLocalizedString("i18n.hid.usermanagement.deleteDeviceFailedGeneric")]);
    },

    editFriendlyName : function(context){
      this.correlationId = this.UserManagementCorrelationIdPrefix + this.generateUUID();
      this.commonEventHandler(this.showLoading, "");
      let rowData = this.view.segmentDevices.data[context.row];
      let newfriendlyName = rowData.friendlyName.text;
      this.actionType = "device_rename";
      if(this._isRMSEnabled){
      this.view.nonFinancialComponent.stepUpRequired = status => { this.view.flxNonFinancialComponent.setVisibility(true);
                                                                  this.commonEventHandler(this.dismissLoading, "");};
      this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
      UserManagementPresentationController.updateFriendlyName(rowData.deviceId, newfriendlyName, 
                                                              success =>this.editFriendlyNameSuccess(context, success), 
                                                              error => { alert("Failed to update device friendly name");
                                                                        this.commonEventHandler(this.dismissLoading, "");},
                                                              			this.correlationId
                                                             );};
      this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
      rowData = this.view.segmentDevices.data[context.row];      
      rowData.friendlyName = {"text" : this.friendlyName, "enable" : false};
      rowData.edit = {"isVisible" : true};
      rowData.imgOk = {"isVisible" : false};
      rowData.imgCancel = {"isVisible" : false};
      this.view.segmentDevices.setDataAt(rowData, context.row, context.section);
      this.commonEventHandler(this.dismissLoading, "");
      alert(status);};
      this.view.nonFinancialComponent.analyzeAction(this._username,this.actionType,this.sessionId, this._isRMSEnabled,this.correlationId);
      } else{
        this.view.flxNonFinancialComponent.setVisibility(true);
        this.commonEventHandler(this.dismissLoading, "");
        this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
                                                                          UserManagementPresentationController.updateFriendlyName(rowData.deviceId, newfriendlyName, 
                                                                                                                                  success =>this.editFriendlyNameSuccess(context, success), 
                                                                                                                                  error => { alert("Failed to update device friendly name");
                                                                                                                                            this.commonEventHandler(this.dismissLoading, "");},this.correlationId
                                                                                                                                 );};
        this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                         rowData = this.view.segmentDevices.data[context.row];      
                                                                         rowData.friendlyName = {"text" : this.friendlyName, "enable" : false};
                                                                         rowData.edit = {"isVisible" : true};
                                                                         rowData.imgOk = {"isVisible" : false};
                                                                         rowData.imgCancel = {"isVisible" : false};
                                                                         this.view.segmentDevices.setDataAt(rowData, context.row, context.section);
                                                                         this.commonEventHandler(this.dismissLoading, "");
                                                                         alert(status);}; 
        this.view.nonFinancialComponent.stepUpAuthentication(this._username, this.actionType,this.correlationId);
        this.view.flxNonFinancialComponent.forceLayout();
      }
    },

    editFriendlyNameSuccess : function(context, response){
      let rowData = this.view.segmentDevices.data[context.row];
      rowData.friendlyName = {"text" : response.UpdateDeviceName[0].friendlyName, "enable" : false};
      rowData.edit = {"isVisible" : true};
      rowData.imgOk = {"isVisible" : false};
      rowData.imgCancel = {"isVisible" : false};
      this.view.segmentDevices.setDataAt(rowData, context.row, context.section); 
      if(this._isRMSEnabled){
        this.view.nonFinancialComponent.updateActionInRMS();
      }
      this.commonEventHandler(this.dismissLoading, "");
    },

    changeDeviceStatusOnClick : function(context){
      this.correlationId = this.UserManagementCorrelationIdPrefix + this.generateUUID();
      this.commonEventHandler(this.showLoading, "");
      var rowData = this.view.segmentDevices.data[context.row];
      let newStatus = rowData.changeStatus.text;
      if (newStatus === "SUSPEND"){
        const deviceList = this.view.segmentDevices.data;
        let l = 0;
        for(let a=0;a < deviceList.length;a++){
          if (deviceList[a].changeStatus.text !== "SUSPEND"){
            l++;
          }
        }
        if (l === deviceList.length-1){
          this.commonEventHandler(this.dismissLoading, "");
          EventEmitter.mandatoryEvent.emit(this.suspendFailure, "suspendFailure", []);
          return;
        }
      }
      this.actionType = "device_active";
      if (newStatus === "SUSPEND"){
        newStatus = "SUSPENDED";
        this.actionType = "device_suspend";
      }
      if(this._isRMSEnabled){
        this.view.flxNonFinancialComponent.setVisibility(true);
        this.commonEventHandler(this.dismissLoading, "");
        this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
                                                                          UserManagementPresentationController.updateDeviceStatus(rowData.deviceId, newStatus, success => this.onUpdateDeviceStatusSuccess(context, success),
                                                                                                                                  this.onUpdateDeviceStatusFailure , this.correlationId);};
        this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                         this.commonEventHandler(this.dismissLoading, "");alert(status);};
        this.view.nonFinancialComponent.analyzeAction(this._username,this.actionType,this.sessionId, this._isRMSEnabled,this.correlationId);
      } else{       
        this.view.flxNonFinancialComponent.setVisibility(true);
        this.commonEventHandler(this.dismissLoading, "");        
        this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
                                                                          UserManagementPresentationController.updateDeviceStatus(rowData.deviceId, newStatus, success => this.onUpdateDeviceStatusSuccess(context, success),
                                                                                                                                  this.onUpdateDeviceStatusFailure, this.correlationId);};
        this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                         this.commonEventHandler(this.dismissLoading, "");alert(status);};
        this.view.nonFinancialComponent.stepUpAuthentication(this._username, this.actionType,this.correlationId);
        this.view.flxNonFinancialComponent.forceLayout();
      }
    },

    onUpdateDeviceStatusSuccess : function(context, response){
      var rowData = this.view.segmentDevices.data[context.row];
      var deviceStatusResponse = response.UpdateDeviceStatus[0];
      rowData.status1 = {"isVisible" : deviceStatusResponse.active };
      rowData.status2 = {"isVisible" : !deviceStatusResponse.active };
      rowData.changeStatus = {
        "text" : deviceStatusResponse.active  ? "SUSPEND" : "ACTIVE",
        "skin" : deviceStatusResponse.active  ? "sknSuspend" : "sknActive"};      
      this.view.segmentDevices.setDataAt(rowData, context.row, context.section);
      if(this._isRMSEnabled){
        this.view.nonFinancialComponent.updateActionInRMS();
      }
       this.commonEventHandler(this.dismissLoading, "");
    },

    onUpdateDeviceStatusFailure : function (error) {   
      alert("Failed to update device status");
       this.commonEventHandler(this.dismissLoading, "");
    },

    changePasswordOnClick : function(){
      this.correlationId = this.UserManagementCorrelationIdPrefix + this.generateUUID();
      if (this.view.tabSelfService.txtOldPassword.text === "") {
        this.view.tabSelfService.lblChangePwdNotification.text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.enter_current_password");        
        return;
      }
      if (this.view.tabSelfService.txtNewPassword.text === "") {
        this.view.tabSelfService.lblChangePwdNotification.text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.enter_new_password");        
        return;
      }
      if (this.view.tabSelfService.txtConfirmPassword.text === "") {
        this.view.tabSelfService.lblChangePwdNotification.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.confirm_password");       
        return;
      }
      if (this.view.tabSelfService.txtNewPassword.text !== this.view.tabSelfService.txtConfirmPassword.text) {
        this.view.tabSelfService.lblChangePwdNotification.text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.passwords_mismatch");       
        return;
      }
      var newPassword = this.view.tabSelfService.txtNewPassword.text;
      if (newPassword.length < this.policy.minLength || newPassword.length > this.policy.maxLength) {
        let txt = kony.i18n.getLocalizedString("i18n.hid.usermanagement.passwordMinMaxLength");
        txt = txt.replace("minLength", this.policy.minLength).replace("maxLength", this.policy.maxLength);
        this.view.tabSelfService.lblChangePwdNotification.text = txt;
        return;
      }
      if (this.policy.notSequence && !this.seqCheck(newPassword)) {
        this.view.tabSelfService.lblChangePwdNotification.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_no_sequence");        
        return;
      }
      if (!this.UniqueCount(newPassword)) {
        let str = kony.i18n.getLocalizedString("i18n.hid.usermanagement.passwordMinDiffChars");
        str = str.replace("minDiffChars", this.policy.minDiffChars);
        this.view.tabSelfService.lblChangePwdNotification.text = str;
        return;
      }
      if(this.policy.notUserAttribute && newPassword.toLowerCase().includes(this._username.toLowerCase())){
        this.view.tabSelfService.lblChangePwdNotification.text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.password_contains_username");
        return;
      }
      this.commonEventHandler(this.showLoading, "");
      /* Implementation for Change customer password with MFAs
      Note: Step 1: Below Block can be uncommented if any MFA is required for change password flow. 
     step 2: comment below line (which is direct call without MFA)
      */
     /* UserManagementPresentationController.changeUserPassword(this._username, this.view.tabSelfService.txtOldPassword.text, newPassword,
                                                              this.onPasswordChangeSuccess, this.onPasswordChangeFailure);
      */   
      this.actionType = "Change_Password";
      this.view.flxNonFinancialComponent.setVisibility(true);
      this.commonEventHandler(this.dismissLoading, "");        
      this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
                                                                        UserManagementPresentationController.changeUserPassword(this._username, this.view.tabSelfService.txtOldPassword.text, newPassword,
                                                               this.onPasswordChangeSuccess, this.onPasswordChangeFailure , this.correlationId);};
      this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                       this.commonEventHandler(this.dismissLoading, "");
                                                                       alert(status)};

      this.view.nonFinancialComponent.stepUpAuthentication(this._username, this.actionType,this.correaltionId);
      //this.view.nonFinancialComponent.MFA = "STD_PWD"; 
      this.view.flxNonFinancialComponent.forceLayout();
    },

    cancelChangePasswordOnClick : function(){
      this.resetChangePasswordUI();      
    },

    onPasswordChangeSuccess : function(response){
      if(response.ChangePassword[0].status){
        this.resetChangePasswordUI();
        this.view.tabSelfService.lblChangePwdNotification.text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.password_changed_success");
        this.view.tabSelfService.lblChangePwdNotification.skin = "sknHIDNotification";
      } else {this.onPasswordChangeFailure("error");}
       this.commonEventHandler(this.dismissLoading, "");
       
    },

    onPasswordChangeFailure : function(error){
      var strError = JSON.stringify(error);
      var changePwdError = "";
      if(strError.includes("Password does not match")){
        changePwdError = "Invalid Old Password";
      } else {changePwdError = "Password is not Valid";}
      this.view.tabSelfService.lblChangePwdNotification.text = changePwdError;
      this.view.tabSelfService.lblChangePwdNotification.skin = "sknHIDError";
       this.commonEventHandler(this.dismissLoading, "");
    },

    registerApproveOnClick : function(){
      this.correlationId = this.UserManagementCorrelationIdPrefix + this.generateUUID();
      this.commonEventHandler(this.showLoading, "");
      UserManagementPresentationController.registerApproveDevice(this._username, this.onDeviceRegSuccess,
                                                                 this.onDeviceRegFailure,this.correlationId);
    },

    onDeviceRegSuccess : function(response) {
      this.view.tabSelfService.flxRegisterDevice0.setVisibility(false);
      this.view.tabSelfService.flxRegisterDevice1.setVisibility(true);
      var encodedData = btoa(response.provisioningMsg);
      this.view.tabSelfService.QRCodeGenerator.generateQRCode(encodedData);
      this.view.tabSelfService.txtUserIdValue.text = response.username;
      this.view.tabSelfService.txtInviteCodeValue.text = response.inviteCode;
      this.view.tabSelfService.txtServiceUrlValue.text = response.url;
      this.view.forceLayout();
       this.commonEventHandler(this.dismissLoading, "");
      UserManagementPresentationController.initiateDeviceRegistrationPolling(response.deviceId, this.onPollingSuccess,
                                                                             this.onPollingFailure);     
    },

    onDeviceRegFailure : function(error) {
      alert("Failed to register new Approve device : " + JSON.stringify(error));
       this.commonEventHandler(this.dismissLoading, "");
    },

    onPollingSuccess : function(response){
      this.view.tabSelfService.flxRegisterDevice0.setVisibility(true);
      this.view.tabSelfService.flxRegisterDevice1.setVisibility(false);
      this.getUserDevices();
    },

    onPollingFailure : function(error){
      //alert("Failed to get Device Registration Status, if registered successfully, click on Done Button");
    },

    getPasswordPolicy : function(callback){      
      UserManagementPresentationController.getPasswordPolicy(response => this.onPasswordPolicySuccess(response, callback), 
                                                             error => this.onPasswordPolicyFailure(callback));
    },

    onPasswordPolicySuccess : function(response, callback){      
      this.policy = response.PasswordPolicy[0];
      let i = 1;
      let txt = kony.i18n.getLocalizedString("i18n.hid.usermanagement.passwordMinMaxLength");
      txt = txt.replace("minLength", this.policy.minLength).replace("maxLength", this.policy.maxLength);
      this.view.tabSelfService[`lblPolicy${i}`].text = txt;
      i++;
      if(this.policy.notOldPassword){
        this.view.tabSelfService[`lblPolicy${i}`].text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.passwordNotOld");
        i++;
      }
      let str = kony.i18n.getLocalizedString("i18n.hid.usermanagement.passwordMinDiffChars");
      str = str.replace("minDiffChars", this.policy.minDiffChars);
      this.view.tabSelfService[`lblPolicy${i}`].text = str;
      i++;
      if(this.policy.notSequence){
        this.view.tabSelfService[`lblPolicy${i}`].text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.password_no_sequence");
        i++;
      }
      if(this.policy.notUserAttribute){
        this.view.tabSelfService[`lblPolicy${i}`].text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.passwordNoUsernameOrAttribute");
      }
      this.view.forceLayout();
      callback();
    },

    onPasswordPolicyFailure : function(callback){
      this.policy = {"minLength" : 5, "maxLength" : 100, "notSequence" : true, "minDiffChars" : 5, "notUserAttribute" : false};
      this.view.tabSelfService.lblPolicy1.text = kony.i18n.getLocalizedString("i18n.hid.onboarding.password_length_invalid");
      this.view.tabSelfService.lblPolicy2.text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.password_min_different_chars");
      this.view.tabSelfService.lblPolicy3.text = kony.i18n.getLocalizedString("i18n.hid.usermanagement.password_no_sequence");
      this.view.forceLayout();
      callback();
    },

    resetChangePasswordUI : function(){
      this.view.tabSelfService.txtOldPassword.text = "";
      this.view.tabSelfService.txtNewPassword.text = "";
      this.view.tabSelfService.txtConfirmPassword.text = "";
      this.view.tabSelfService.lblChangePwdNotification.text = "";
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
      return unique.length > this.policy.minDiffChars;
    },
    commonEventHandler(event,intent){
      if(event){
        event(intent);
      }
    },
    
    onRegisterFIDOSuccess: function(s) {
      this.commonEventHandler(this.dismissLoading, "");
      this.view.tabSelfService.flxRegisterDevice0.setVisibility(true);
      this.view.tabSelfService.flxRegisterDevice1.setVisibility(false);
      this.getUserDevices();
    },
    
    onRegisterFIDOFailure: function(e) {
      alert("Registration failed. Please try again. " + e);
      this.commonEventHandler(this.dismissLoading, "");
    },
    
    registerFIDOOnClick: function() {
      this.correlationId = this.UserManagementCorrelationIdPrefix + this.generateUUID();
      UserManagementPresentationController.registerFIDODevice(
        this._username, this.onRegisterFIDOSuccess, this.onRegisterFIDOFailure,this.correlationId);
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
    searchUserAttributes : function(){
    UserManagementPresentationController.searchUserAttributes(this._username,this.searchAttributesSuccess,this.searchAttributesFailure);
    },

    searchAttributesSuccess : function(response){
        if(response.email){
            var email = response.email;
            this.view.tabSelfService.lblCurrentEmailValue.text = email;
        }
        if(response.phoneNumber){
            var mobile = response.phoneNumber;
            this.view.tabSelfService.lblCurrentMobileValue.text = mobile;
        }
    },

    searchAttributesFailure : function(error){
        alert("Error occured: "+JSON.stringify(error));
    },

    getUserAttributes : function(){
    this.correlationId = this.correlationIdUserManagementPrefix + this.generateUUID();
    UserManagementPresentationController.getUserAttributes(this._username,this.correlationId,this.getAttributesSuccess,this.getAttributesFailure);
    },

    updateEmail_onClick : function(){
        let newEmail = this.view.tabSelfService.txtNewEmail.text.trim();
        let confirmEmail = this.view.tabSelfService.txtConfirmEmail.text.trim();

        if(newEmail == ""){
            this.showUpdateEmailError(true, userManagementConstants.ERROR_NEW_EML_NOT_ENTERED);
            return;
        }if(confirmEmail == ""){
            this.showUpdateEmailError(true, userManagementConstants.ERROR_CNF_EML);
            return;
        }

        let emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validate email format
        if (!emailRegex.test(newEmail)) {
            this.showUpdateEmailError(true, userManagementConstants.ERROR_INVALID_EML);
            return;
        }
        if(newEmail !== confirmEmail){
            this.showUpdateEmailError(true, userManagementConstants.ERROR_EML_NOT_MATCH);
            return;
        }
        this.actionType = "update_email";
        this.email = newEmail;
        this.commonEventHandler(this.showLoading, "");
        this.getUserAttributes();  
    },

    updateMobile_onClick : function(){
        let newMobile = this.view.tabSelfService.txtNewMobile.text.trim();
        let confirmMobile = this.view.tabSelfService.txtConfirmMobile.text.trim();

        if(newMobile == ""){
            this.showUpdateMobileError(true,userManagementConstants.ERROR_NEW_MBL_NOT_ENTERED);
            return;
        }if(confirmMobile == ""){
            this.showUpdateMobileError(true,userManagementConstants.ERROR_CNF_MBL);
            return;
        }

        let mobileRegex = /^[1-9]\d{6,14}$/;

        // Validate mobile format
        if (!mobileRegex.test(newMobile)) {
            this.showUpdateMobileError(true,userManagementConstants.ERROR_INVALID_MBL);
            return;
        }
        if(newMobile !== confirmMobile){
            this.showUpdateMobileError(true,userManagementConstants.ERROR_MBL_NOT_MATCH);
            return;
        }
        if(!this.hasCountryCode(newMobile)){
            this.showUpdateMobileError(true,userManagementConstants.ERROR_MBL_WITHOUT_COUNTRYCODE);
            return;
        }
        this.actionType = "update_mobile";
        this.mobile = newMobile.replace(/[+\s-]/g, '');
        this.commonEventHandler(this.showLoading, "");
        this.getUserAttributes();  
    },
    getAttributesSuccess : function(response){
        // alert("Success: "+JSON.stringify(response));
        if(this.actionType === "update_email"){
            this.mobile = response.mobile;
            this.firstname = response.firstname;
            this.lastname = response.lastname;
            this.externalId = response.externalId;        
        } else if(this.actionType === "update_mobile"){
            this.email = response.email;
            this.firstname = response.firstname;
            this.lastname = response.lastname;
            this.externalId = response.externalId;
        } 
        this.updateAttributes();
    },
    getAttributesFailure : function(error){
        alert("Error occured: "+JSON.stringify(error));
        this.resetUpdateEmailUI();
        this.resetUpdateMobileUI();
        this.commonEventHandler(this.dismissLoading, "");
        kony.print("Error in getAttributesFailure: "+JSON.stringify(error));
    },

    hasCountryCode : function(input) {
        const cleaned = input.replace(/[\s-]/g, '');
        return cleaned;
    },

    showUpdateEmailError : function(visible,msg = ""){
        this.view.tabSelfService.lblChangeEmailNotification.text = msg;
        this.view.tabSelfService.lblChangeEmailNotification.skin = "sknHIDError4";
        this.view.tabSelfService.lblChangeEmailNotification.setVisibility(visible);
    },
    showUpdateMobileError : function(visible,msg = ""){
        this.view.tabSelfService.lblChangeMobileNotification.text = msg;
        this.view.tabSelfService.lblChangeMobileNotification.skin = "sknHIDError4";
        this.view.tabSelfService.lblChangeMobileNotification.setVisibility(visible);
    },

    updateAttributes : function(){
        this.showLoading();
        if(this._isRMSEnabled){
        this.view.flxNonFinancialComponent.setVisibility(true);
        this.commonEventHandler(this.dismissLoading, "");
        this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
                                                                          UserManagementPresentationController.updateAttributes(this._username,this.email,this.mobile,this.firstname,this.lastname,this.externalId,this.correlationId, 
                                                                                                                                success => this.updateAttributesSuccess(success),
                                                                                                                                error => this.updateAttributesFailure(error));};
        this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                        if(this.actionType = "update_email"){
                                                                            this.resetUpdateEmailUI();
                                                                         }else{
                                                                            this.resetUpdateMobileUI();
                                                                         }
                                                                         this.commonEventHandler(this.dismissLoading, "");
                                                                         };
        this.view.nonFinancialComponent.analyzeAction(this._username,this.actionType,this.sessionId, this._isRMSEnabled,this.correlationId);
      } else { 
        this.view.flxNonFinancialComponent.setVisibility(true);      
        this.commonEventHandler(this.dismissLoading, "");        
        this.view.nonFinancialComponent.analyzeActionSuccess = status => {this.view.flxNonFinancialComponent.setVisibility(false);
                                                                          UserManagementPresentationController.updateAttributes(this._username,this.email,this.mobile,this.firstname,this.lastname,this.externalId,this.correlationId, 
                                                                                                                                success => this.updateAttributesSuccess(success),
                                                                                                                                error => this.updateAttributesFailure(error));};
        this.view.nonFinancialComponent.analyzeActionFailure = status =>{ this.view.flxNonFinancialComponent.setVisibility(false);
                                                                        if(this.actionType = "update_email"){
                                                                            this.resetUpdateEmailUI();
                                                                         }else{
                                                                            this.resetUpdateMobileUI();
                                                                         }
                                                                         this.commonEventHandler(this.dismissLoading, "");};
        this.view.nonFinancialComponent.stepUpAuthentication(this._username, this.actionType,this.correlationId);
      }
    },

    updateAttributesSuccess : function(response){
        if(this.actionType === "update_email"){
            this.resetUpdateEmailUI();
            this.showUpdateEmailError(true, kony.i81n.getLocalizedString("i18n.hid.profile.emailChangeSuccess"));
            this.view.tabSelfService.lblChangeEmailNotification.skin = "sknHIDSuccess";

        } else if(this.actionType === "update_mobile"){       
            this.resetUpdateMobileUI();
            this.showUpdateMobileError(true, kony.i81n.getLocalizedString("i18n.hid.profile.mobileChangeSuccess"));
            this.view.tabSelfService.lblChangeMobileNotification.skin = "sknHIDSuccess";       
        }
        this.searchUserAttributes();
    },
    updateAttributesFailure : function(error){
        this.resetUpdateEmailUI();
        this.resetUpdateMobileUI();
        this.commonEventHandler(this.dismissLoading, "");
        kony.print("Error in updateAttributesFailure: "+JSON.stringify(error));
    },
    showUpdateEmailScreen : function(visible){
        this.resetUpdateEmailUI();
        this.view.tabSelfService.lblCurrentEmail.setVisibility(visible);
        this.view.tabSelfService.lblCurrentEmailValue.setVisibility(visible);
        this.view.tabSelfService.lblNewEmail.setVisibility(visible);
        this.view.tabSelfService.txtNewEmail.setVisibility(visible);
        this.view.tabSelfService.lblConfirmEmail.setVisibility(visible);
        this.view.tabSelfService.txtConfirmEmail.setVisibility(visible);
        this.view.tabSelfService.btnUpdateEmail.setVisibility(visible);
        this.view.tabSelfService.btnCancelUpdateEmail.setVisibility(visible);
    },
    showUpdateMobileScreen : function(visible){
        this.resetUpdateMobileUI();
        this.view.tabSelfService.lblCurrentMobile.setVisibility(visible);
        this.view.tabSelfService.lblCurrentMobileValue.setVisibility(visible);
        this.view.tabSelfService.lblNewMobile.setVisibility(visible);
        this.view.tabSelfService.txtNewMobile.setVisibility(visible);
        this.view.tabSelfService.lblConfirmMobile.setVisibility(visible);
        this.view.tabSelfService.txtConfirmMobile.setVisibility(visible);
        this.view.tabSelfService.btnUpdateMobile.setVisibility(visible);
        this.view.tabSelfService.btnCancelUpdateMobile.setVisibility(visible);
    },
    showUpdateAttributeScreen : function(){
        var selected = this.view.tabSelfService.rdBtnGroupUpdateAttribute.selectedKey;
        if(selected === "email"){
        this.showUpdateEmailScreen(true);
        this.showUpdateMobileScreen(false);
      } else {
        this.showUpdateEmailScreen(false);
        this.showUpdateMobileScreen(true);
      }   
    },
    cancelUpdateEmailOnClick : function(){
      this.resetUpdateEmailUI();      
    },
    resetUpdateEmailUI : function(){
        this.view.tabSelfService.txtNewEmail.text = "";
        this.view.tabSelfService.txtConfirmEmail.text = "";
        this.showUpdateEmailError(false);
    },
    cancelUpdateMobileOnClick : function(){
      this.resetUpdateMobileUI();      
    },
    resetUpdateMobileUI : function(){
        this.view.tabSelfService.txtNewMobile.text = "";
        this.view.tabSelfService.txtConfirmMobile.text = "";
        this.showUpdateMobileError(false)
    }    
  };
});
