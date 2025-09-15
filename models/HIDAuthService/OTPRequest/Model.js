/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "OTPRequest", "objectService" : "HIDAuthService"};

    var setterFunctions = {
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticationType: function(val, state) {
            context["field"] = "AuthenticationType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
            state['AuthenticationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OTP_SENT: function(val, state) {
            context["field"] = "OTP_SENT";
            context["metadata"] = (objectMetadata ? objectMetadata["OTP_SENT"] : null);
            state['OTP_SENT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPasswordRequired: function(val, state) {
            context["field"] = "isPasswordRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
            state['isPasswordRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        msgId: function(val, state) {
            context["field"] = "msgId";
            context["metadata"] = (objectMetadata ? objectMetadata["msgId"] : null);
            state['msgId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sendOOBServiceError: function(val, state) {
            context["field"] = "sendOOBServiceError";
            context["metadata"] = (objectMetadata ? objectMetadata["sendOOBServiceError"] : null);
            state['sendOOBServiceError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error_description: function(val, state) {
            context["field"] = "error_description";
            context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
            state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorMsg: function(val, state) {
            context["field"] = "errorMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
            state['errorMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        reason: function(val, state) {
            context["field"] = "reason";
            context["metadata"] = (objectMetadata ? objectMetadata["reason"] : null);
            state['reason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Auth_Key: function(val, state) {
            context["field"] = "Auth_Key";
            context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
            state['Auth_Key'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AddAllOOBServiceError: function(val, state) {
            context["field"] = "AddAllOOBServiceError";
            context["metadata"] = (objectMetadata ? objectMetadata["AddAllOOBServiceError"] : null);
            state['AddAllOOBServiceError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function OTPRequest(defaultValues) {
        var privateState = {};
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "AuthenticationType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
        privateState.AuthenticationType = defaultValues ?
            (defaultValues["AuthenticationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context) :
                null) :
            null;

        context["field"] = "OTP_SENT";
        context["metadata"] = (objectMetadata ? objectMetadata["OTP_SENT"] : null);
        privateState.OTP_SENT = defaultValues ?
            (defaultValues["OTP_SENT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OTP_SENT"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "isPasswordRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
        privateState.isPasswordRequired = defaultValues ?
            (defaultValues["isPasswordRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPasswordRequired"], context) :
                null) :
            null;

        context["field"] = "msgId";
        context["metadata"] = (objectMetadata ? objectMetadata["msgId"] : null);
        privateState.msgId = defaultValues ?
            (defaultValues["msgId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["msgId"], context) :
                null) :
            null;

        context["field"] = "sendOOBServiceError";
        context["metadata"] = (objectMetadata ? objectMetadata["sendOOBServiceError"] : null);
        privateState.sendOOBServiceError = defaultValues ?
            (defaultValues["sendOOBServiceError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sendOOBServiceError"], context) :
                null) :
            null;

        context["field"] = "correlationId";
        context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
        privateState.correlationId = defaultValues ?
            (defaultValues["correlationId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["correlationId"], context) :
                null) :
            null;

        context["field"] = "error_description";
        context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
        privateState.error_description = defaultValues ?
            (defaultValues["error_description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_description"], context) :
                null) :
            null;

        context["field"] = "errorMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
        privateState.errorMsg = defaultValues ?
            (defaultValues["errorMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorMsg"], context) :
                null) :
            null;

        context["field"] = "reason";
        context["metadata"] = (objectMetadata ? objectMetadata["reason"] : null);
        privateState.reason = defaultValues ?
            (defaultValues["reason"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["reason"], context) :
                null) :
            null;

        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ?
            (defaultValues["userId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) :
                null) :
            null;

        context["field"] = "Auth_Key";
        context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
        privateState.Auth_Key = defaultValues ?
            (defaultValues["Auth_Key"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Auth_Key"], context) :
                null) :
            null;

        context["field"] = "AddAllOOBServiceError";
        context["metadata"] = (objectMetadata ? objectMetadata["AddAllOOBServiceError"] : null);
        privateState.AddAllOOBServiceError = defaultValues ?
            (defaultValues["AddAllOOBServiceError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AddAllOOBServiceError"], context) :
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
            "OTP_SENT": {
                get: function() {
                    context["field"] = "OTP_SENT";
                    context["metadata"] = (objectMetadata ? objectMetadata["OTP_SENT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OTP_SENT, context);
                },
                set: function(val) {
                    setterFunctions['OTP_SENT'].call(this, val, privateState);
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
            "msgId": {
                get: function() {
                    context["field"] = "msgId";
                    context["metadata"] = (objectMetadata ? objectMetadata["msgId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.msgId, context);
                },
                set: function(val) {
                    setterFunctions['msgId'].call(this, val, privateState);
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
            "AddAllOOBServiceError": {
                get: function() {
                    context["field"] = "AddAllOOBServiceError";
                    context["metadata"] = (objectMetadata ? objectMetadata["AddAllOOBServiceError"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AddAllOOBServiceError, context);
                },
                set: function(val) {
                    setterFunctions['AddAllOOBServiceError'].call(this, val, privateState);
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
            privateState.AuthenticationType = value ? (value["AuthenticationType"] ? value["AuthenticationType"] : null) : null;
            privateState.OTP_SENT = value ? (value["OTP_SENT"] ? value["OTP_SENT"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.isPasswordRequired = value ? (value["isPasswordRequired"] ? value["isPasswordRequired"] : null) : null;
            privateState.msgId = value ? (value["msgId"] ? value["msgId"] : null) : null;
            privateState.sendOOBServiceError = value ? (value["sendOOBServiceError"] ? value["sendOOBServiceError"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
            privateState.error_description = value ? (value["error_description"] ? value["error_description"] : null) : null;
            privateState.errorMsg = value ? (value["errorMsg"] ? value["errorMsg"] : null) : null;
            privateState.reason = value ? (value["reason"] ? value["reason"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.Auth_Key = value ? (value["Auth_Key"] ? value["Auth_Key"] : null) : null;
            privateState.AddAllOOBServiceError = value ? (value["AddAllOOBServiceError"] ? value["AddAllOOBServiceError"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(OTPRequest);

    //Create new class level validator object
    BaseModel.Validator.call(OTPRequest);

    var registerValidatorBackup = OTPRequest.registerValidator;

    OTPRequest.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(OTPRequest.isValid(this, propName, val)) {
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
    //For Operation 'sendOTP' with service id 'sendOTP1496'
     OTPRequest.sendOTP = function(params, onCompletion){
        return OTPRequest.customVerb('sendOTP', params, onCompletion);
     };

    //For Operation 'sendOTPLogin' with service id 'sendOOBLogin3739'
     OTPRequest.sendOTPLogin = function(params, onCompletion){
        return OTPRequest.customVerb('sendOTPLogin', params, onCompletion);
     };

    var relations = [];

    OTPRequest.relations = relations;

    OTPRequest.prototype.isValid = function() {
        return OTPRequest.isValid(this);
    };

    OTPRequest.prototype.objModelName = "OTPRequest";
    OTPRequest.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    OTPRequest.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "OTPRequest", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    OTPRequest.clone = function(objectToClone) {
        var clonedObj = new OTPRequest();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return OTPRequest;
});