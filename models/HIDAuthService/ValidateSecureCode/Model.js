/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ValidateSecureCode", "objectService" : "HIDAuthService"};

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
        access_token: function(val, state) {
            context["field"] = "access_token";
            context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
            state['access_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errormsg: function(val, state) {
            context["field"] = "errormsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errormsg"] : null);
            state['errormsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ValidateSecureCode(defaultValues) {
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

        context["field"] = "access_token";
        context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
        privateState.access_token = defaultValues ?
            (defaultValues["access_token"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["access_token"], context) :
                null) :
            null;

        context["field"] = "errormsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errormsg"] : null);
        privateState.errormsg = defaultValues ?
            (defaultValues["errormsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errormsg"], context) :
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
            "access_token": {
                get: function() {
                    context["field"] = "access_token";
                    context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.access_token, context);
                },
                set: function(val) {
                    setterFunctions['access_token'].call(this, val, privateState);
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
            privateState.access_token = value ? (value["access_token"] ? value["access_token"] : null) : null;
            privateState.errormsg = value ? (value["errormsg"] ? value["errormsg"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ValidateSecureCode);

    //Create new class level validator object
    BaseModel.Validator.call(ValidateSecureCode);

    var registerValidatorBackup = ValidateSecureCode.registerValidator;

    ValidateSecureCode.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ValidateSecureCode.isValid(this, propName, val)) {
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
    //For Operation 'validateOTPAuth' with service id 'validateOTPAuth3629'
     ValidateSecureCode.validateOTPAuth = function(params, onCompletion){
        return ValidateSecureCode.customVerb('validateOTPAuth', params, onCompletion);
     };

    var relations = [];

    ValidateSecureCode.relations = relations;

    ValidateSecureCode.prototype.isValid = function() {
        return ValidateSecureCode.isValid(this);
    };

    ValidateSecureCode.prototype.objModelName = "ValidateSecureCode";
    ValidateSecureCode.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ValidateSecureCode.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "ValidateSecureCode", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ValidateSecureCode.clone = function(objectToClone) {
        var clonedObj = new ValidateSecureCode();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ValidateSecureCode;
});