/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AprroveTransactInitiate", "objectService" : "HIDTransactionSigning"};

    var setterFunctions = {
        acr_values: function(val, state) {
            context["field"] = "acr_values";
            context["metadata"] = (objectMetadata ? objectMetadata["acr_values"] : null);
            state['acr_values'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        auth_req_id: function(val, state) {
            context["field"] = "auth_req_id";
            context["metadata"] = (objectMetadata ? objectMetadata["auth_req_id"] : null);
            state['auth_req_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        client_notification_token: function(val, state) {
            context["field"] = "client_notification_token";
            context["metadata"] = (objectMetadata ? objectMetadata["client_notification_token"] : null);
            state['client_notification_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        deviceId: function(val, state) {
            context["field"] = "deviceId";
            context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
            state['deviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        expires_in: function(val, state) {
            context["field"] = "expires_in";
            context["metadata"] = (objectMetadata ? objectMetadata["expires_in"] : null);
            state['expires_in'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        interval: function(val, state) {
            context["field"] = "interval";
            context["metadata"] = (objectMetadata ? objectMetadata["interval"] : null);
            state['interval'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        login_hint_token: function(val, state) {
            context["field"] = "login_hint_token";
            context["metadata"] = (objectMetadata ? objectMetadata["login_hint_token"] : null);
            state['login_hint_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scope: function(val, state) {
            context["field"] = "scope";
            context["metadata"] = (objectMetadata ? objectMetadata["scope"] : null);
            state['scope'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tds: function(val, state) {
            context["field"] = "tds";
            context["metadata"] = (objectMetadata ? objectMetadata["tds"] : null);
            state['tds'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AprroveTransactInitiate(defaultValues) {
        var privateState = {};
        context["field"] = "acr_values";
        context["metadata"] = (objectMetadata ? objectMetadata["acr_values"] : null);
        privateState.acr_values = defaultValues ?
            (defaultValues["acr_values"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["acr_values"], context) :
                null) :
            null;

        context["field"] = "auth_req_id";
        context["metadata"] = (objectMetadata ? objectMetadata["auth_req_id"] : null);
        privateState.auth_req_id = defaultValues ?
            (defaultValues["auth_req_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["auth_req_id"], context) :
                null) :
            null;

        context["field"] = "client_notification_token";
        context["metadata"] = (objectMetadata ? objectMetadata["client_notification_token"] : null);
        privateState.client_notification_token = defaultValues ?
            (defaultValues["client_notification_token"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["client_notification_token"], context) :
                null) :
            null;

        context["field"] = "deviceId";
        context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
        privateState.deviceId = defaultValues ?
            (defaultValues["deviceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceId"], context) :
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

        context["field"] = "expires_in";
        context["metadata"] = (objectMetadata ? objectMetadata["expires_in"] : null);
        privateState.expires_in = defaultValues ?
            (defaultValues["expires_in"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expires_in"], context) :
                null) :
            null;

        context["field"] = "interval";
        context["metadata"] = (objectMetadata ? objectMetadata["interval"] : null);
        privateState.interval = defaultValues ?
            (defaultValues["interval"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["interval"], context) :
                null) :
            null;

        context["field"] = "login_hint_token";
        context["metadata"] = (objectMetadata ? objectMetadata["login_hint_token"] : null);
        privateState.login_hint_token = defaultValues ?
            (defaultValues["login_hint_token"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["login_hint_token"], context) :
                null) :
            null;

        context["field"] = "scope";
        context["metadata"] = (objectMetadata ? objectMetadata["scope"] : null);
        privateState.scope = defaultValues ?
            (defaultValues["scope"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scope"], context) :
                null) :
            null;

        context["field"] = "tds";
        context["metadata"] = (objectMetadata ? objectMetadata["tds"] : null);
        privateState.tds = defaultValues ?
            (defaultValues["tds"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tds"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
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
            "acr_values": {
                get: function() {
                    context["field"] = "acr_values";
                    context["metadata"] = (objectMetadata ? objectMetadata["acr_values"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.acr_values, context);
                },
                set: function(val) {
                    setterFunctions['acr_values'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "client_notification_token": {
                get: function() {
                    context["field"] = "client_notification_token";
                    context["metadata"] = (objectMetadata ? objectMetadata["client_notification_token"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.client_notification_token, context);
                },
                set: function(val) {
                    setterFunctions['client_notification_token'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "login_hint_token": {
                get: function() {
                    context["field"] = "login_hint_token";
                    context["metadata"] = (objectMetadata ? objectMetadata["login_hint_token"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.login_hint_token, context);
                },
                set: function(val) {
                    setterFunctions['login_hint_token'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "scope": {
                get: function() {
                    context["field"] = "scope";
                    context["metadata"] = (objectMetadata ? objectMetadata["scope"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scope, context);
                },
                set: function(val) {
                    setterFunctions['scope'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tds": {
                get: function() {
                    context["field"] = "tds";
                    context["metadata"] = (objectMetadata ? objectMetadata["tds"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tds, context);
                },
                set: function(val) {
                    setterFunctions['tds'].call(this, val, privateState);
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
            privateState.acr_values = value ? (value["acr_values"] ? value["acr_values"] : null) : null;
            privateState.auth_req_id = value ? (value["auth_req_id"] ? value["auth_req_id"] : null) : null;
            privateState.client_notification_token = value ? (value["client_notification_token"] ? value["client_notification_token"] : null) : null;
            privateState.deviceId = value ? (value["deviceId"] ? value["deviceId"] : null) : null;
            privateState.error = value ? (value["error"] ? value["error"] : null) : null;
            privateState.error_description = value ? (value["error_description"] ? value["error_description"] : null) : null;
            privateState.expires_in = value ? (value["expires_in"] ? value["expires_in"] : null) : null;
            privateState.interval = value ? (value["interval"] ? value["interval"] : null) : null;
            privateState.login_hint_token = value ? (value["login_hint_token"] ? value["login_hint_token"] : null) : null;
            privateState.scope = value ? (value["scope"] ? value["scope"] : null) : null;
            privateState.tds = value ? (value["tds"] ? value["tds"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AprroveTransactInitiate);

    //Create new class level validator object
    BaseModel.Validator.call(AprroveTransactInitiate);

    var registerValidatorBackup = AprroveTransactInitiate.registerValidator;

    AprroveTransactInitiate.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AprroveTransactInitiate.isValid(this, propName, val)) {
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
    //For Operation 'aprroveTransactInitiate' with service id 'initiate7850'
     AprroveTransactInitiate.aprroveTransactInitiate = function(params, onCompletion){
        return AprroveTransactInitiate.customVerb('aprroveTransactInitiate', params, onCompletion);
     };

    var relations = [];

    AprroveTransactInitiate.relations = relations;

    AprroveTransactInitiate.prototype.isValid = function() {
        return AprroveTransactInitiate.isValid(this);
    };

    AprroveTransactInitiate.prototype.objModelName = "AprroveTransactInitiate";
    AprroveTransactInitiate.prototype.objServiceName = "HIDTransactionSigning";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AprroveTransactInitiate.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDTransactionSigning", "AprroveTransactInitiate", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AprroveTransactInitiate.clone = function(objectToClone) {
        var clonedObj = new AprroveTransactInitiate();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AprroveTransactInitiate;
});