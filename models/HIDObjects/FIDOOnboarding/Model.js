/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "FIDOOnboarding", "objectService" : "HIDObjects"};

    var setterFunctions = {
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        credential: function(val, state) {
            context["field"] = "credential";
            context["metadata"] = (objectMetadata ? objectMetadata["credential"] : null);
            state['credential'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        request_uri: function(val, state) {
            context["field"] = "request_uri";
            context["metadata"] = (objectMetadata ? objectMetadata["request_uri"] : null);
            state['request_uri'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        rawId: function(val, state) {
            context["field"] = "rawId";
            context["metadata"] = (objectMetadata ? objectMetadata["rawId"] : null);
            state['rawId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        clientDataJSON: function(val, state) {
            context["field"] = "clientDataJSON";
            context["metadata"] = (objectMetadata ? objectMetadata["clientDataJSON"] : null);
            state['clientDataJSON'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        attestationObject: function(val, state) {
            context["field"] = "attestationObject";
            context["metadata"] = (objectMetadata ? objectMetadata["attestationObject"] : null);
            state['attestationObject'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        csrf: function(val, state) {
            context["field"] = "csrf";
            context["metadata"] = (objectMetadata ? objectMetadata["csrf"] : null);
            state['csrf'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function FIDOOnboarding(defaultValues) {
        var privateState = {};
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "credential";
        context["metadata"] = (objectMetadata ? objectMetadata["credential"] : null);
        privateState.credential = defaultValues ?
            (defaultValues["credential"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["credential"], context) :
                null) :
            null;

        context["field"] = "request_uri";
        context["metadata"] = (objectMetadata ? objectMetadata["request_uri"] : null);
        privateState.request_uri = defaultValues ?
            (defaultValues["request_uri"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["request_uri"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "rawId";
        context["metadata"] = (objectMetadata ? objectMetadata["rawId"] : null);
        privateState.rawId = defaultValues ?
            (defaultValues["rawId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["rawId"], context) :
                null) :
            null;

        context["field"] = "clientDataJSON";
        context["metadata"] = (objectMetadata ? objectMetadata["clientDataJSON"] : null);
        privateState.clientDataJSON = defaultValues ?
            (defaultValues["clientDataJSON"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["clientDataJSON"], context) :
                null) :
            null;

        context["field"] = "attestationObject";
        context["metadata"] = (objectMetadata ? objectMetadata["attestationObject"] : null);
        privateState.attestationObject = defaultValues ?
            (defaultValues["attestationObject"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["attestationObject"], context) :
                null) :
            null;

        context["field"] = "csrf";
        context["metadata"] = (objectMetadata ? objectMetadata["csrf"] : null);
        privateState.csrf = defaultValues ?
            (defaultValues["csrf"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["csrf"], context) :
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
            "credential": {
                get: function() {
                    context["field"] = "credential";
                    context["metadata"] = (objectMetadata ? objectMetadata["credential"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.credential, context);
                },
                set: function(val) {
                    setterFunctions['credential'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "request_uri": {
                get: function() {
                    context["field"] = "request_uri";
                    context["metadata"] = (objectMetadata ? objectMetadata["request_uri"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.request_uri, context);
                },
                set: function(val) {
                    setterFunctions['request_uri'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "rawId": {
                get: function() {
                    context["field"] = "rawId";
                    context["metadata"] = (objectMetadata ? objectMetadata["rawId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.rawId, context);
                },
                set: function(val) {
                    setterFunctions['rawId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "clientDataJSON": {
                get: function() {
                    context["field"] = "clientDataJSON";
                    context["metadata"] = (objectMetadata ? objectMetadata["clientDataJSON"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.clientDataJSON, context);
                },
                set: function(val) {
                    setterFunctions['clientDataJSON'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "attestationObject": {
                get: function() {
                    context["field"] = "attestationObject";
                    context["metadata"] = (objectMetadata ? objectMetadata["attestationObject"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.attestationObject, context);
                },
                set: function(val) {
                    setterFunctions['attestationObject'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "csrf": {
                get: function() {
                    context["field"] = "csrf";
                    context["metadata"] = (objectMetadata ? objectMetadata["csrf"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.csrf, context);
                },
                set: function(val) {
                    setterFunctions['csrf'].call(this, val, privateState);
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
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.credential = value ? (value["credential"] ? value["credential"] : null) : null;
            privateState.request_uri = value ? (value["request_uri"] ? value["request_uri"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.rawId = value ? (value["rawId"] ? value["rawId"] : null) : null;
            privateState.clientDataJSON = value ? (value["clientDataJSON"] ? value["clientDataJSON"] : null) : null;
            privateState.attestationObject = value ? (value["attestationObject"] ? value["attestationObject"] : null) : null;
            privateState.csrf = value ? (value["csrf"] ? value["csrf"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(FIDOOnboarding);

    //Create new class level validator object
    BaseModel.Validator.call(FIDOOnboarding);

    var registerValidatorBackup = FIDOOnboarding.registerValidator;

    FIDOOnboarding.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(FIDOOnboarding.isValid(this, propName, val)) {
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
    //For Operation 'getCredentialOptions' with service id 'getCredentialOptions5444'
     FIDOOnboarding.getCredentialOptions = function(params, onCompletion){
        return FIDOOnboarding.customVerb('getCredentialOptions', params, onCompletion);
     };

    //For Operation 'registerCredential' with service id 'registerCredential1401'
     FIDOOnboarding.registerCredential = function(params, onCompletion){
        return FIDOOnboarding.customVerb('registerCredential', params, onCompletion);
     };

    var relations = [];

    FIDOOnboarding.relations = relations;

    FIDOOnboarding.prototype.isValid = function() {
        return FIDOOnboarding.isValid(this);
    };

    FIDOOnboarding.prototype.objModelName = "FIDOOnboarding";
    FIDOOnboarding.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    FIDOOnboarding.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "FIDOOnboarding", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    FIDOOnboarding.clone = function(objectToClone) {
        var clonedObj = new FIDOOnboarding();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return FIDOOnboarding;
});