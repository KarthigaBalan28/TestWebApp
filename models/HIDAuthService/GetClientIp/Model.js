/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "GetClientIp", "objectService" : "HIDAuthService"};

    var setterFunctions = {
        clientIp: function(val, state) {
            context["field"] = "clientIp";
            context["metadata"] = (objectMetadata ? objectMetadata["clientIp"] : null);
            state['clientIp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errMsg: function(val, state) {
            context["field"] = "errMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errMsg"] : null);
            state['errMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function GetClientIp(defaultValues) {
        var privateState = {};
        context["field"] = "clientIp";
        context["metadata"] = (objectMetadata ? objectMetadata["clientIp"] : null);
        privateState.clientIp = defaultValues ?
            (defaultValues["clientIp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["clientIp"], context) :
                null) :
            null;

        context["field"] = "errMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errMsg"] : null);
        privateState.errMsg = defaultValues ?
            (defaultValues["errMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errMsg"], context) :
                null) :
            null;

        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ?
            (defaultValues["success"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "clientIp": {
                get: function() {
                    context["field"] = "clientIp";
                    context["metadata"] = (objectMetadata ? objectMetadata["clientIp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.clientIp, context);
                },
                set: function(val) {
                    setterFunctions['clientIp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errMsg": {
                get: function() {
                    context["field"] = "errMsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errMsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errMsg, context);
                },
                set: function(val) {
                    setterFunctions['errMsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "success": {
                get: function() {
                    context["field"] = "success";
                    context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.success, context);
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
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
            privateState.clientIp = value ? (value["clientIp"] ? value["clientIp"] : null) : null;
            privateState.errMsg = value ? (value["errMsg"] ? value["errMsg"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(GetClientIp);

    //Create new class level validator object
    BaseModel.Validator.call(GetClientIp);

    var registerValidatorBackup = GetClientIp.registerValidator;

    GetClientIp.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(GetClientIp.isValid(this, propName, val)) {
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
    //For Operation 'getClientIp' with service id 'getClientIp2649'
     GetClientIp.getClientIp = function(params, onCompletion){
        return GetClientIp.customVerb('getClientIp', params, onCompletion);
     };

    var relations = [];

    GetClientIp.relations = relations;

    GetClientIp.prototype.isValid = function() {
        return GetClientIp.isValid(this);
    };

    GetClientIp.prototype.objModelName = "GetClientIp";
    GetClientIp.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    GetClientIp.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "GetClientIp", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    GetClientIp.clone = function(objectToClone) {
        var clonedObj = new GetClientIp();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return GetClientIp;
});