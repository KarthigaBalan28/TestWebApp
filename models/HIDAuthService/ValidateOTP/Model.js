/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ValidateOTP", "objectService" : "HIDAuthService"};

    var setterFunctions = {
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authType: function(val, state) {
            context["field"] = "authType";
            context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
            state['authType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        channelId: function(val, state) {
            context["field"] = "channelId";
            context["metadata"] = (objectMetadata ? objectMetadata["channelId"] : null);
            state['channelId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errormsg: function(val, state) {
            context["field"] = "errormsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errormsg"] : null);
            state['errormsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        auth_key: function(val, state) {
            context["field"] = "auth_key";
            context["metadata"] = (objectMetadata ? objectMetadata["auth_key"] : null);
            state['auth_key'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error_description: function(val, state) {
            context["field"] = "error_description";
            context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
            state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ValidateOTP(defaultValues) {
        var privateState = {};
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "authType";
        context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
        privateState.authType = defaultValues ?
            (defaultValues["authType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authType"], context) :
                null) :
            null;

        context["field"] = "channelId";
        context["metadata"] = (objectMetadata ? objectMetadata["channelId"] : null);
        privateState.channelId = defaultValues ?
            (defaultValues["channelId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["channelId"], context) :
                null) :
            null;

        context["field"] = "errormsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errormsg"] : null);
        privateState.errormsg = defaultValues ?
            (defaultValues["errormsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errormsg"], context) :
                null) :
            null;

        context["field"] = "auth_key";
        context["metadata"] = (objectMetadata ? objectMetadata["auth_key"] : null);
        privateState.auth_key = defaultValues ?
            (defaultValues["auth_key"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["auth_key"], context) :
                null) :
            null;

        context["field"] = "error_description";
        context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
        privateState.error_description = defaultValues ?
            (defaultValues["error_description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_description"], context) :
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
            "authType": {
                get: function() {
                    context["field"] = "authType";
                    context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.authType, context);
                },
                set: function(val) {
                    setterFunctions['authType'].call(this, val, privateState);
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
            "errormsg": {
                get: function() {
                    context["field"] = "errormsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errormsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errormsg, context);
                },
                set: function(val) {
                    setterFunctions['errormsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "auth_key": {
                get: function() {
                    context["field"] = "auth_key";
                    context["metadata"] = (objectMetadata ? objectMetadata["auth_key"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.auth_key, context);
                },
                set: function(val) {
                    setterFunctions['auth_key'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.authType = value ? (value["authType"] ? value["authType"] : null) : null;
            privateState.channelId = value ? (value["channelId"] ? value["channelId"] : null) : null;
            privateState.errormsg = value ? (value["errormsg"] ? value["errormsg"] : null) : null;
            privateState.auth_key = value ? (value["auth_key"] ? value["auth_key"] : null) : null;
            privateState.error_description = value ? (value["error_description"] ? value["error_description"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ValidateOTP);

    //Create new class level validator object
    BaseModel.Validator.call(ValidateOTP);

    var registerValidatorBackup = ValidateOTP.registerValidator;

    ValidateOTP.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ValidateOTP.isValid(this, propName, val)) {
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
    //For Operation 'validateOTPCantSignIn' with service id 'ValidateOtpCantSignIn5196'
     ValidateOTP.validateOTPCantSignIn = function(params, onCompletion){
        return ValidateOTP.customVerb('validateOTPCantSignIn', params, onCompletion);
     };

    //For Operation 'validateOtp' with service id 'validateOTPAuth4867'
     ValidateOTP.validateOtp = function(params, onCompletion){
        return ValidateOTP.customVerb('validateOtp', params, onCompletion);
     };

    var relations = [];

    ValidateOTP.relations = relations;

    ValidateOTP.prototype.isValid = function() {
        return ValidateOTP.isValid(this);
    };

    ValidateOTP.prototype.objModelName = "ValidateOTP";
    ValidateOTP.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ValidateOTP.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "ValidateOTP", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ValidateOTP.clone = function(objectToClone) {
        var clonedObj = new ValidateOTP();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ValidateOTP;
});