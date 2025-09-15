/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "UpdateFriendlyName", "objectService" : "HIDObjects"};

    var setterFunctions = {
        deviceId: function(val, state) {
            context["field"] = "deviceId";
            context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
            state['deviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        friendlyName: function(val, state) {
            context["field"] = "friendlyName";
            context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
            state['friendlyName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        auth_key: function(val, state) {
            context["field"] = "auth_key";
            context["metadata"] = (objectMetadata ? objectMetadata["auth_key"] : null);
            state['auth_key'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorCode: function(val, state) {
            context["field"] = "errorCode";
            context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
            state['errorCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        detail: function(val, state) {
            context["field"] = "detail";
            context["metadata"] = (objectMetadata ? objectMetadata["detail"] : null);
            state['detail'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        UpdateFriendlyNameServiceError: function(val, state) {
            context["field"] = "UpdateFriendlyNameServiceError";
            context["metadata"] = (objectMetadata ? objectMetadata["UpdateFriendlyNameServiceError"] : null);
            state['UpdateFriendlyNameServiceError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function UpdateFriendlyName(defaultValues) {
        var privateState = {};
        context["field"] = "deviceId";
        context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
        privateState.deviceId = defaultValues ?
            (defaultValues["deviceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceId"], context) :
                null) :
            null;

        context["field"] = "friendlyName";
        context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
        privateState.friendlyName = defaultValues ?
            (defaultValues["friendlyName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["friendlyName"], context) :
                null) :
            null;

        context["field"] = "auth_key";
        context["metadata"] = (objectMetadata ? objectMetadata["auth_key"] : null);
        privateState.auth_key = defaultValues ?
            (defaultValues["auth_key"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["auth_key"], context) :
                null) :
            null;

        context["field"] = "errorCode";
        context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
        privateState.errorCode = defaultValues ?
            (defaultValues["errorCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode"], context) :
                null) :
            null;

        context["field"] = "detail";
        context["metadata"] = (objectMetadata ? objectMetadata["detail"] : null);
        privateState.detail = defaultValues ?
            (defaultValues["detail"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["detail"], context) :
                null) :
            null;

        context["field"] = "UpdateFriendlyNameServiceError";
        context["metadata"] = (objectMetadata ? objectMetadata["UpdateFriendlyNameServiceError"] : null);
        privateState.UpdateFriendlyNameServiceError = defaultValues ?
            (defaultValues["UpdateFriendlyNameServiceError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UpdateFriendlyNameServiceError"], context) :
                null) :
            null;

        context["field"] = "correlationId";
        context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
        privateState.correlationId = defaultValues ?
            (defaultValues["correlationId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["correlationId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "deviceId": {
                get: function() {
                    context["field"] = "deviceId";
                    context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceId, context);
                },
                set: function(val) {
                    setterFunctions['deviceId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "friendlyName": {
                get: function() {
                    context["field"] = "friendlyName";
                    context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.friendlyName, context);
                },
                set: function(val) {
                    setterFunctions['friendlyName'].call(this, val, privateState);
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
            "errorCode": {
                get: function() {
                    context["field"] = "errorCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorCode, context);
                },
                set: function(val) {
                    setterFunctions['errorCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "detail": {
                get: function() {
                    context["field"] = "detail";
                    context["metadata"] = (objectMetadata ? objectMetadata["detail"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.detail, context);
                },
                set: function(val) {
                    setterFunctions['detail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "UpdateFriendlyNameServiceError": {
                get: function() {
                    context["field"] = "UpdateFriendlyNameServiceError";
                    context["metadata"] = (objectMetadata ? objectMetadata["UpdateFriendlyNameServiceError"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UpdateFriendlyNameServiceError, context);
                },
                set: function(val) {
                    setterFunctions['UpdateFriendlyNameServiceError'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.deviceId = value ? (value["deviceId"] ? value["deviceId"] : null) : null;
            privateState.friendlyName = value ? (value["friendlyName"] ? value["friendlyName"] : null) : null;
            privateState.auth_key = value ? (value["auth_key"] ? value["auth_key"] : null) : null;
            privateState.errorCode = value ? (value["errorCode"] ? value["errorCode"] : null) : null;
            privateState.detail = value ? (value["detail"] ? value["detail"] : null) : null;
            privateState.UpdateFriendlyNameServiceError = value ? (value["UpdateFriendlyNameServiceError"] ? value["UpdateFriendlyNameServiceError"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(UpdateFriendlyName);

    //Create new class level validator object
    BaseModel.Validator.call(UpdateFriendlyName);

    var registerValidatorBackup = UpdateFriendlyName.registerValidator;

    UpdateFriendlyName.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(UpdateFriendlyName.isValid(this, propName, val)) {
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
    //For Operation 'updateFriendlyName' with service id 'updateFriendlyNamesOnboarding1804'
     UpdateFriendlyName.updateFriendlyName = function(params, onCompletion){
        return UpdateFriendlyName.customVerb('updateFriendlyName', params, onCompletion);
     };

    var relations = [];

    UpdateFriendlyName.relations = relations;

    UpdateFriendlyName.prototype.isValid = function() {
        return UpdateFriendlyName.isValid(this);
    };

    UpdateFriendlyName.prototype.objModelName = "UpdateFriendlyName";
    UpdateFriendlyName.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    UpdateFriendlyName.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "UpdateFriendlyName", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    UpdateFriendlyName.clone = function(objectToClone) {
        var clonedObj = new UpdateFriendlyName();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return UpdateFriendlyName;
});