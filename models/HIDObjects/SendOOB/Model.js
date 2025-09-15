/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SendOOB", "objectService" : "HIDObjects"};

    var setterFunctions = {
        AuthenticationType: function(val, state) {
            context["field"] = "AuthenticationType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
            state['AuthenticationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OOB_SENT: function(val, state) {
            context["field"] = "OOB_SENT";
            context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
            state['OOB_SENT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPasswordRequired: function(val, state) {
            context["field"] = "isPasswordRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
            state['isPasswordRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        error_description: function(val, state) {
            context["field"] = "error_description";
            context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
            state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SendOOB(defaultValues) {
        var privateState = {};
        context["field"] = "AuthenticationType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
        privateState.AuthenticationType = defaultValues ?
            (defaultValues["AuthenticationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context) :
                null) :
            null;

        context["field"] = "OOB_SENT";
        context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
        privateState.OOB_SENT = defaultValues ?
            (defaultValues["OOB_SENT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OOB_SENT"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "isPasswordRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
        privateState.isPasswordRequired = defaultValues ?
            (defaultValues["isPasswordRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPasswordRequired"], context) :
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
            privateState.AuthenticationType = value ? (value["AuthenticationType"] ? value["AuthenticationType"] : null) : null;
            privateState.OOB_SENT = value ? (value["OOB_SENT"] ? value["OOB_SENT"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.isPasswordRequired = value ? (value["isPasswordRequired"] ? value["isPasswordRequired"] : null) : null;
            privateState.errorMsg = value ? (value["errorMsg"] ? value["errorMsg"] : null) : null;
            privateState.reason = value ? (value["reason"] ? value["reason"] : null) : null;
            privateState.error_description = value ? (value["error_description"] ? value["error_description"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SendOOB);

    //Create new class level validator object
    BaseModel.Validator.call(SendOOB);

    var registerValidatorBackup = SendOOB.registerValidator;

    SendOOB.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SendOOB.isValid(this, propName, val)) {
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
    //For Operation 'sendOOB' with service id 'sendOOB4943'
     SendOOB.sendOOB = function(params, onCompletion){
        return SendOOB.customVerb('sendOOB', params, onCompletion);
     };

    var relations = [];

    SendOOB.relations = relations;

    SendOOB.prototype.isValid = function() {
        return SendOOB.isValid(this);
    };

    SendOOB.prototype.objModelName = "SendOOB";
    SendOOB.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SendOOB.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "SendOOB", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SendOOB.clone = function(objectToClone) {
        var clonedObj = new SendOOB();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SendOOB;
});