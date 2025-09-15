/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddOOBAuthAndSendSMS", "objectService" : "HIDObjects"};

    var setterFunctions = {
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticatorType: function(val, state) {
            context["field"] = "AuthenticatorType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
            state['AuthenticatorType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticatorValue: function(val, state) {
            context["field"] = "AuthenticatorValue";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
            state['AuthenticatorValue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Auth_Key: function(val, state) {
            context["field"] = "Auth_Key";
            context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
            state['Auth_Key'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OOB_PIN: function(val, state) {
            context["field"] = "OOB_PIN";
            context["metadata"] = (objectMetadata ? objectMetadata["OOB_PIN"] : null);
            state['OOB_PIN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        active: function(val, state) {
            context["field"] = "active";
            context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
            state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scimType_OTP: function(val, state) {
            context["field"] = "scimType_OTP";
            context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
            state['scimType_OTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticationType: function(val, state) {
            context["field"] = "AuthenticationType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
            state['AuthenticationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        channelId: function(val, state) {
            context["field"] = "channelId";
            context["metadata"] = (objectMetadata ? objectMetadata["channelId"] : null);
            state['channelId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPasswordRequired: function(val, state) {
            context["field"] = "isPasswordRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
            state['isPasswordRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OOB_SENT: function(val, state) {
            context["field"] = "OOB_SENT";
            context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
            state['OOB_SENT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AddOOBServiceError: function(val, state) {
            context["field"] = "AddOOBServiceError";
            context["metadata"] = (objectMetadata ? objectMetadata["AddOOBServiceError"] : null);
            state['AddOOBServiceError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorMsg: function(val, state) {
            context["field"] = "errorMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
            state['errorMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error_description: function(val, state) {
            context["field"] = "error_description";
            context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
            state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        reason: function(val, state) {
            context["field"] = "reason";
            context["metadata"] = (objectMetadata ? objectMetadata["reason"] : null);
            state['reason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sendOOBServiceError: function(val, state) {
            context["field"] = "sendOOBServiceError";
            context["metadata"] = (objectMetadata ? objectMetadata["sendOOBServiceError"] : null);
            state['sendOOBServiceError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        factor: function(val, state) {
            context["field"] = "factor";
            context["metadata"] = (objectMetadata ? objectMetadata["factor"] : null);
            state['factor'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AddOOBAuthAndSendSMS(defaultValues) {
        var privateState = {};
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ?
            (defaultValues["userId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) :
                null) :
            null;

        context["field"] = "AuthenticatorType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
        privateState.AuthenticatorType = defaultValues ?
            (defaultValues["AuthenticatorType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorType"], context) :
                null) :
            null;

        context["field"] = "AuthenticatorValue";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
        privateState.AuthenticatorValue = defaultValues ?
            (defaultValues["AuthenticatorValue"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorValue"], context) :
                null) :
            null;

        context["field"] = "Auth_Key";
        context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
        privateState.Auth_Key = defaultValues ?
            (defaultValues["Auth_Key"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Auth_Key"], context) :
                null) :
            null;

        context["field"] = "OOB_PIN";
        context["metadata"] = (objectMetadata ? objectMetadata["OOB_PIN"] : null);
        privateState.OOB_PIN = defaultValues ?
            (defaultValues["OOB_PIN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OOB_PIN"], context) :
                null) :
            null;

        context["field"] = "active";
        context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
        privateState.active = defaultValues ?
            (defaultValues["active"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "scimType_OTP";
        context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
        privateState.scimType_OTP = defaultValues ?
            (defaultValues["scimType_OTP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_OTP"], context) :
                null) :
            null;

        context["field"] = "AuthenticationType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
        privateState.AuthenticationType = defaultValues ?
            (defaultValues["AuthenticationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "channelId";
        context["metadata"] = (objectMetadata ? objectMetadata["channelId"] : null);
        privateState.channelId = defaultValues ?
            (defaultValues["channelId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["channelId"], context) :
                null) :
            null;

        context["field"] = "isPasswordRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
        privateState.isPasswordRequired = defaultValues ?
            (defaultValues["isPasswordRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPasswordRequired"], context) :
                null) :
            null;

        context["field"] = "OOB_SENT";
        context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
        privateState.OOB_SENT = defaultValues ?
            (defaultValues["OOB_SENT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OOB_SENT"], context) :
                null) :
            null;

        context["field"] = "AddOOBServiceError";
        context["metadata"] = (objectMetadata ? objectMetadata["AddOOBServiceError"] : null);
        privateState.AddOOBServiceError = defaultValues ?
            (defaultValues["AddOOBServiceError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AddOOBServiceError"], context) :
                null) :
            null;

        context["field"] = "correlationId";
        context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
        privateState.correlationId = defaultValues ?
            (defaultValues["correlationId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["correlationId"], context) :
                null) :
            null;

        context["field"] = "errorMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
        privateState.errorMsg = defaultValues ?
            (defaultValues["errorMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorMsg"], context) :
                null) :
            null;

        context["field"] = "error_description";
        context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
        privateState.error_description = defaultValues ?
            (defaultValues["error_description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_description"], context) :
                null) :
            null;

        context["field"] = "reason";
        context["metadata"] = (objectMetadata ? objectMetadata["reason"] : null);
        privateState.reason = defaultValues ?
            (defaultValues["reason"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["reason"], context) :
                null) :
            null;

        context["field"] = "sendOOBServiceError";
        context["metadata"] = (objectMetadata ? objectMetadata["sendOOBServiceError"] : null);
        privateState.sendOOBServiceError = defaultValues ?
            (defaultValues["sendOOBServiceError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sendOOBServiceError"], context) :
                null) :
            null;

        context["field"] = "factor";
        context["metadata"] = (objectMetadata ? objectMetadata["factor"] : null);
        privateState.factor = defaultValues ?
            (defaultValues["factor"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["factor"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "username": {
                get: function() {
                    context["field"] = "username";
                    context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.username, context);
                },
                set: function(val) {
                    setterFunctions['username'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userId": {
                get: function() {
                    context["field"] = "userId";
                    context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);
                },
                set: function(val) {
                    setterFunctions['userId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthenticatorType": {
                get: function() {
                    context["field"] = "AuthenticatorType";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticatorType, context);
                },
                set: function(val) {
                    setterFunctions['AuthenticatorType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthenticatorValue": {
                get: function() {
                    context["field"] = "AuthenticatorValue";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticatorValue, context);
                },
                set: function(val) {
                    setterFunctions['AuthenticatorValue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Auth_Key": {
                get: function() {
                    context["field"] = "Auth_Key";
                    context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Auth_Key, context);
                },
                set: function(val) {
                    setterFunctions['Auth_Key'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OOB_PIN": {
                get: function() {
                    context["field"] = "OOB_PIN";
                    context["metadata"] = (objectMetadata ? objectMetadata["OOB_PIN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OOB_PIN, context);
                },
                set: function(val) {
                    setterFunctions['OOB_PIN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "active": {
                get: function() {
                    context["field"] = "active";
                    context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.active, context);
                },
                set: function(val) {
                    setterFunctions['active'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "scimType_OTP": {
                get: function() {
                    context["field"] = "scimType_OTP";
                    context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scimType_OTP, context);
                },
                set: function(val) {
                    setterFunctions['scimType_OTP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthenticationType": {
                get: function() {
                    context["field"] = "AuthenticationType";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticationType, context);
                },
                set: function(val) {
                    setterFunctions['AuthenticationType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "password": {
                get: function() {
                    context["field"] = "password";
                    context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.password, context);
                },
                set: function(val) {
                    setterFunctions['password'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "channelId": {
                get: function() {
                    context["field"] = "channelId";
                    context["metadata"] = (objectMetadata ? objectMetadata["channelId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.channelId, context);
                },
                set: function(val) {
                    setterFunctions['channelId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPasswordRequired": {
                get: function() {
                    context["field"] = "isPasswordRequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPasswordRequired, context);
                },
                set: function(val) {
                    setterFunctions['isPasswordRequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OOB_SENT": {
                get: function() {
                    context["field"] = "OOB_SENT";
                    context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OOB_SENT, context);
                },
                set: function(val) {
                    setterFunctions['OOB_SENT'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AddOOBServiceError": {
                get: function() {
                    context["field"] = "AddOOBServiceError";
                    context["metadata"] = (objectMetadata ? objectMetadata["AddOOBServiceError"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AddOOBServiceError, context);
                },
                set: function(val) {
                    setterFunctions['AddOOBServiceError'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "correlationId": {
                get: function() {
                    context["field"] = "correlationId";
                    context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.correlationId, context);
                },
                set: function(val) {
                    setterFunctions['correlationId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errorMsg": {
                get: function() {
                    context["field"] = "errorMsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorMsg, context);
                },
                set: function(val) {
                    setterFunctions['errorMsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "error_description": {
                get: function() {
                    context["field"] = "error_description";
                    context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error_description, context);
                },
                set: function(val) {
                    setterFunctions['error_description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "reason": {
                get: function() {
                    context["field"] = "reason";
                    context["metadata"] = (objectMetadata ? objectMetadata["reason"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.reason, context);
                },
                set: function(val) {
                    setterFunctions['reason'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sendOOBServiceError": {
                get: function() {
                    context["field"] = "sendOOBServiceError";
                    context["metadata"] = (objectMetadata ? objectMetadata["sendOOBServiceError"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sendOOBServiceError, context);
                },
                set: function(val) {
                    setterFunctions['sendOOBServiceError'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "factor": {
                get: function() {
                    context["field"] = "factor";
                    context["metadata"] = (objectMetadata ? objectMetadata["factor"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.factor, context);
                },
                set: function(val) {
                    setterFunctions['factor'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.AuthenticatorType = value ? (value["AuthenticatorType"] ? value["AuthenticatorType"] : null) : null;
            privateState.AuthenticatorValue = value ? (value["AuthenticatorValue"] ? value["AuthenticatorValue"] : null) : null;
            privateState.Auth_Key = value ? (value["Auth_Key"] ? value["Auth_Key"] : null) : null;
            privateState.OOB_PIN = value ? (value["OOB_PIN"] ? value["OOB_PIN"] : null) : null;
            privateState.active = value ? (value["active"] ? value["active"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.scimType_OTP = value ? (value["scimType_OTP"] ? value["scimType_OTP"] : null) : null;
            privateState.AuthenticationType = value ? (value["AuthenticationType"] ? value["AuthenticationType"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.channelId = value ? (value["channelId"] ? value["channelId"] : null) : null;
            privateState.isPasswordRequired = value ? (value["isPasswordRequired"] ? value["isPasswordRequired"] : null) : null;
            privateState.OOB_SENT = value ? (value["OOB_SENT"] ? value["OOB_SENT"] : null) : null;
            privateState.AddOOBServiceError = value ? (value["AddOOBServiceError"] ? value["AddOOBServiceError"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
            privateState.errorMsg = value ? (value["errorMsg"] ? value["errorMsg"] : null) : null;
            privateState.error_description = value ? (value["error_description"] ? value["error_description"] : null) : null;
            privateState.reason = value ? (value["reason"] ? value["reason"] : null) : null;
            privateState.sendOOBServiceError = value ? (value["sendOOBServiceError"] ? value["sendOOBServiceError"] : null) : null;
            privateState.factor = value ? (value["factor"] ? value["factor"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AddOOBAuthAndSendSMS);

    //Create new class level validator object
    BaseModel.Validator.call(AddOOBAuthAndSendSMS);

    var registerValidatorBackup = AddOOBAuthAndSendSMS.registerValidator;

    AddOOBAuthAndSendSMS.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AddOOBAuthAndSendSMS.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'addOOBAuthAndSendSMS' with service id 'AddOOBAuthAndSendSMS5025'
     AddOOBAuthAndSendSMS.addOOBAuthAndSendSMS = function(params, onCompletion){
        return AddOOBAuthAndSendSMS.customVerb('addOOBAuthAndSendSMS', params, onCompletion);
     };

    var relations = [];

    AddOOBAuthAndSendSMS.relations = relations;

    AddOOBAuthAndSendSMS.prototype.isValid = function() {
        return AddOOBAuthAndSendSMS.isValid(this);
    };

    AddOOBAuthAndSendSMS.prototype.objModelName = "AddOOBAuthAndSendSMS";
    AddOOBAuthAndSendSMS.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AddOOBAuthAndSendSMS.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddOOBAuthAndSendSMS", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AddOOBAuthAndSendSMS.clone = function(objectToClone) {
        var clonedObj = new AddOOBAuthAndSendSMS();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AddOOBAuthAndSendSMS;
});