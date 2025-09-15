/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ValidatePsd2TppToken", "objectService" : "HIDPSD2TPPObjects"};

    var setterFunctions = {
        backend_error_code: function(val, state) {
            context["field"] = "backend_error_code";
            context["metadata"] = (objectMetadata ? objectMetadata["backend_error_code"] : null);
            state['backend_error_code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        backend_error_message: function(val, state) {
            context["field"] = "backend_error_message";
            context["metadata"] = (objectMetadata ? objectMetadata["backend_error_message"] : null);
            state['backend_error_message'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        httpStatusCode: function(val, state) {
            context["field"] = "httpStatusCode";
            context["metadata"] = (objectMetadata ? objectMetadata["httpStatusCode"] : null);
            state['httpStatusCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tppToken: function(val, state) {
            context["field"] = "tppToken";
            context["metadata"] = (objectMetadata ? objectMetadata["tppToken"] : null);
            state['tppToken'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Message: function(val, state) {
            context["field"] = "Message";
            context["metadata"] = (objectMetadata ? objectMetadata["Message"] : null);
            state['Message'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ValidatePsd2TppToken(defaultValues) {
        var privateState = {};
        context["field"] = "backend_error_code";
        context["metadata"] = (objectMetadata ? objectMetadata["backend_error_code"] : null);
        privateState.backend_error_code = defaultValues ?
            (defaultValues["backend_error_code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["backend_error_code"], context) :
                null) :
            null;

        context["field"] = "backend_error_message";
        context["metadata"] = (objectMetadata ? objectMetadata["backend_error_message"] : null);
        privateState.backend_error_message = defaultValues ?
            (defaultValues["backend_error_message"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["backend_error_message"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;

        context["field"] = "httpStatusCode";
        context["metadata"] = (objectMetadata ? objectMetadata["httpStatusCode"] : null);
        privateState.httpStatusCode = defaultValues ?
            (defaultValues["httpStatusCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["httpStatusCode"], context) :
                null) :
            null;

        context["field"] = "tppToken";
        context["metadata"] = (objectMetadata ? objectMetadata["tppToken"] : null);
        privateState.tppToken = defaultValues ?
            (defaultValues["tppToken"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tppToken"], context) :
                null) :
            null;

        context["field"] = "Message";
        context["metadata"] = (objectMetadata ? objectMetadata["Message"] : null);
        privateState.Message = defaultValues ?
            (defaultValues["Message"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Message"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "backend_error_code": {
                get: function() {
                    context["field"] = "backend_error_code";
                    context["metadata"] = (objectMetadata ? objectMetadata["backend_error_code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.backend_error_code, context);
                },
                set: function(val) {
                    setterFunctions['backend_error_code'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "backend_error_message": {
                get: function() {
                    context["field"] = "backend_error_message";
                    context["metadata"] = (objectMetadata ? objectMetadata["backend_error_message"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.backend_error_message, context);
                },
                set: function(val) {
                    setterFunctions['backend_error_message'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errmsg": {
                get: function() {
                    context["field"] = "errmsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errmsg, context);
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "httpStatusCode": {
                get: function() {
                    context["field"] = "httpStatusCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["httpStatusCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.httpStatusCode, context);
                },
                set: function(val) {
                    setterFunctions['httpStatusCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tppToken": {
                get: function() {
                    context["field"] = "tppToken";
                    context["metadata"] = (objectMetadata ? objectMetadata["tppToken"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tppToken, context);
                },
                set: function(val) {
                    setterFunctions['tppToken'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Message": {
                get: function() {
                    context["field"] = "Message";
                    context["metadata"] = (objectMetadata ? objectMetadata["Message"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Message, context);
                },
                set: function(val) {
                    setterFunctions['Message'].call(this, val, privateState);
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
            privateState.backend_error_code = value ? (value["backend_error_code"] ? value["backend_error_code"] : null) : null;
            privateState.backend_error_message = value ? (value["backend_error_message"] ? value["backend_error_message"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.httpStatusCode = value ? (value["httpStatusCode"] ? value["httpStatusCode"] : null) : null;
            privateState.tppToken = value ? (value["tppToken"] ? value["tppToken"] : null) : null;
            privateState.Message = value ? (value["Message"] ? value["Message"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ValidatePsd2TppToken);

    //Create new class level validator object
    BaseModel.Validator.call(ValidatePsd2TppToken);

    var registerValidatorBackup = ValidatePsd2TppToken.registerValidator;

    ValidatePsd2TppToken.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ValidatePsd2TppToken.isValid(this, propName, val)) {
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
    //For Operation 'validatePsd2TppToken' with service id 'ValidatePsd2TppToken9193'
     ValidatePsd2TppToken.validatePsd2TppToken = function(params, onCompletion){
        return ValidatePsd2TppToken.customVerb('validatePsd2TppToken', params, onCompletion);
     };

    var relations = [];

    ValidatePsd2TppToken.relations = relations;

    ValidatePsd2TppToken.prototype.isValid = function() {
        return ValidatePsd2TppToken.isValid(this);
    };

    ValidatePsd2TppToken.prototype.objModelName = "ValidatePsd2TppToken";
    ValidatePsd2TppToken.prototype.objServiceName = "HIDPSD2TPPObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ValidatePsd2TppToken.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDPSD2TPPObjects", "ValidatePsd2TppToken", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ValidatePsd2TppToken.clone = function(objectToClone) {
        var clonedObj = new ValidatePsd2TppToken();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ValidatePsd2TppToken;
});