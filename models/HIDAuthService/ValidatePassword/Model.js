/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ValidatePassword", "objectService" : "HIDAuthService"};

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
        error: function(val, state) {
            context["field"] = "error";
            context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
            state['error'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errormsg: function(val, state) {
            context["field"] = "errormsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errormsg"] : null);
            state['errormsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ValidatePassword(defaultValues) {
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

        context["field"] = "error";
        context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
        privateState.error = defaultValues ?
            (defaultValues["error"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error"], context) :
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
            "error": {
                get: function() {
                    context["field"] = "error";
                    context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error, context);
                },
                set: function(val) {
                    setterFunctions['error'].call(this, val, privateState);
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
            privateState.error = value ? (value["error"] ? value["error"] : null) : null;
            privateState.errormsg = value ? (value["errormsg"] ? value["errormsg"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ValidatePassword);

    //Create new class level validator object
    BaseModel.Validator.call(ValidatePassword);

    var registerValidatorBackup = ValidatePassword.registerValidator;

    ValidatePassword.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ValidatePassword.isValid(this, propName, val)) {
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
    //For Operation 'validatePassword' with service id 'passwordValidation3492'
     ValidatePassword.validatePassword = function(params, onCompletion){
        return ValidatePassword.customVerb('validatePassword', params, onCompletion);
     };

    var relations = [];

    ValidatePassword.relations = relations;

    ValidatePassword.prototype.isValid = function() {
        return ValidatePassword.isValid(this);
    };

    ValidatePassword.prototype.objModelName = "ValidatePassword";
    ValidatePassword.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ValidatePassword.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "ValidatePassword", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ValidatePassword.clone = function(objectToClone) {
        var clonedObj = new ValidatePassword();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ValidatePassword;
});