/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "getScanToApproveQrData", "objectService" : "HIDAuthService"};

    var setterFunctions = {
        auth_req_id: function(val, state) {
            context["field"] = "auth_req_id";
            context["metadata"] = (objectMetadata ? objectMetadata["auth_req_id"] : null);
            state['auth_req_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        interval: function(val, state) {
            context["field"] = "interval";
            context["metadata"] = (objectMetadata ? objectMetadata["interval"] : null);
            state['interval'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        txid: function(val, state) {
            context["field"] = "txid";
            context["metadata"] = (objectMetadata ? objectMetadata["txid"] : null);
            state['txid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        expires_in: function(val, state) {
            context["field"] = "expires_in";
            context["metadata"] = (objectMetadata ? objectMetadata["expires_in"] : null);
            state['expires_in'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error: function(val, state) {
            context["field"] = "error";
            context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
            state['error'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error_description: function(val, state) {
            context["field"] = "error_description";
            context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
            state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function getScanToApproveQrData(defaultValues) {
        var privateState = {};
        context["field"] = "auth_req_id";
        context["metadata"] = (objectMetadata ? objectMetadata["auth_req_id"] : null);
        privateState.auth_req_id = defaultValues ?
            (defaultValues["auth_req_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["auth_req_id"], context) :
                null) :
            null;

        context["field"] = "interval";
        context["metadata"] = (objectMetadata ? objectMetadata["interval"] : null);
        privateState.interval = defaultValues ?
            (defaultValues["interval"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["interval"], context) :
                null) :
            null;

        context["field"] = "txid";
        context["metadata"] = (objectMetadata ? objectMetadata["txid"] : null);
        privateState.txid = defaultValues ?
            (defaultValues["txid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["txid"], context) :
                null) :
            null;

        context["field"] = "expires_in";
        context["metadata"] = (objectMetadata ? objectMetadata["expires_in"] : null);
        privateState.expires_in = defaultValues ?
            (defaultValues["expires_in"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expires_in"], context) :
                null) :
            null;

        context["field"] = "error";
        context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
        privateState.error = defaultValues ?
            (defaultValues["error"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error"], context) :
                null) :
            null;

        context["field"] = "error_description";
        context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
        privateState.error_description = defaultValues ?
            (defaultValues["error_description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_description"], context) :
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
            "auth_req_id": {
                get: function() {
                    context["field"] = "auth_req_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["auth_req_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.auth_req_id, context);
                },
                set: function(val) {
                    setterFunctions['auth_req_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "interval": {
                get: function() {
                    context["field"] = "interval";
                    context["metadata"] = (objectMetadata ? objectMetadata["interval"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.interval, context);
                },
                set: function(val) {
                    setterFunctions['interval'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "txid": {
                get: function() {
                    context["field"] = "txid";
                    context["metadata"] = (objectMetadata ? objectMetadata["txid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.txid, context);
                },
                set: function(val) {
                    setterFunctions['txid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "expires_in": {
                get: function() {
                    context["field"] = "expires_in";
                    context["metadata"] = (objectMetadata ? objectMetadata["expires_in"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.expires_in, context);
                },
                set: function(val) {
                    setterFunctions['expires_in'].call(this, val, privateState);
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
            privateState.auth_req_id = value ? (value["auth_req_id"] ? value["auth_req_id"] : null) : null;
            privateState.interval = value ? (value["interval"] ? value["interval"] : null) : null;
            privateState.txid = value ? (value["txid"] ? value["txid"] : null) : null;
            privateState.expires_in = value ? (value["expires_in"] ? value["expires_in"] : null) : null;
            privateState.error = value ? (value["error"] ? value["error"] : null) : null;
            privateState.error_description = value ? (value["error_description"] ? value["error_description"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(getScanToApproveQrData);

    //Create new class level validator object
    BaseModel.Validator.call(getScanToApproveQrData);

    var registerValidatorBackup = getScanToApproveQrData.registerValidator;

    getScanToApproveQrData.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(getScanToApproveQrData.isValid(this, propName, val)) {
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
    //For Operation 'getScanToApproveQrData' with service id 'getScanToApproveQrData3940'
     getScanToApproveQrData.getScanToApproveQrData = function(params, onCompletion){
        return getScanToApproveQrData.customVerb('getScanToApproveQrData', params, onCompletion);
     };

    var relations = [];

    getScanToApproveQrData.relations = relations;

    getScanToApproveQrData.prototype.isValid = function() {
        return getScanToApproveQrData.isValid(this);
    };

    getScanToApproveQrData.prototype.objModelName = "getScanToApproveQrData";
    getScanToApproveQrData.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    getScanToApproveQrData.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "getScanToApproveQrData", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    getScanToApproveQrData.clone = function(objectToClone) {
        var clonedObj = new getScanToApproveQrData();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return getScanToApproveQrData;
});