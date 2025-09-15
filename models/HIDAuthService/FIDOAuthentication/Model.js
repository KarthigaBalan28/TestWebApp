/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "FIDOAuthentication", "objectService" : "HIDAuthService"};

    var setterFunctions = {
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        csrf: function(val, state) {
            context["field"] = "csrf";
            context["metadata"] = (objectMetadata ? objectMetadata["csrf"] : null);
            state['csrf'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        clientDataJSON: function(val, state) {
            context["field"] = "clientDataJSON";
            context["metadata"] = (objectMetadata ? objectMetadata["clientDataJSON"] : null);
            state['clientDataJSON'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authenticatorData: function(val, state) {
            context["field"] = "authenticatorData";
            context["metadata"] = (objectMetadata ? objectMetadata["authenticatorData"] : null);
            state['authenticatorData'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        signature: function(val, state) {
            context["field"] = "signature";
            context["metadata"] = (objectMetadata ? objectMetadata["signature"] : null);
            state['signature'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userHandle: function(val, state) {
            context["field"] = "userHandle";
            context["metadata"] = (objectMetadata ? objectMetadata["userHandle"] : null);
            state['userHandle'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        csrfx: function(val, state) {
            context["field"] = "csrfx";
            context["metadata"] = (objectMetadata ? objectMetadata["csrfx"] : null);
            state['csrfx'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        code: function(val, state) {
            context["field"] = "code";
            context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
            state['code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        context: function(val, state) {
            context["field"] = "context";
            context["metadata"] = (objectMetadata ? objectMetadata["context"] : null);
            state['context'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        id_token: function(val, state) {
            context["field"] = "id_token";
            context["metadata"] = (objectMetadata ? objectMetadata["id_token"] : null);
            state['id_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function FIDOAuthentication(defaultValues) {
        var privateState = {};
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
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

        context["field"] = "csrf";
        context["metadata"] = (objectMetadata ? objectMetadata["csrf"] : null);
        privateState.csrf = defaultValues ?
            (defaultValues["csrf"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["csrf"], context) :
                null) :
            null;

        context["field"] = "clientDataJSON";
        context["metadata"] = (objectMetadata ? objectMetadata["clientDataJSON"] : null);
        privateState.clientDataJSON = defaultValues ?
            (defaultValues["clientDataJSON"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["clientDataJSON"], context) :
                null) :
            null;

        context["field"] = "authenticatorData";
        context["metadata"] = (objectMetadata ? objectMetadata["authenticatorData"] : null);
        privateState.authenticatorData = defaultValues ?
            (defaultValues["authenticatorData"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authenticatorData"], context) :
                null) :
            null;

        context["field"] = "signature";
        context["metadata"] = (objectMetadata ? objectMetadata["signature"] : null);
        privateState.signature = defaultValues ?
            (defaultValues["signature"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["signature"], context) :
                null) :
            null;

        context["field"] = "userHandle";
        context["metadata"] = (objectMetadata ? objectMetadata["userHandle"] : null);
        privateState.userHandle = defaultValues ?
            (defaultValues["userHandle"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userHandle"], context) :
                null) :
            null;

        context["field"] = "csrfx";
        context["metadata"] = (objectMetadata ? objectMetadata["csrfx"] : null);
        privateState.csrfx = defaultValues ?
            (defaultValues["csrfx"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["csrfx"], context) :
                null) :
            null;

        context["field"] = "code";
        context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
        privateState.code = defaultValues ?
            (defaultValues["code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["code"], context) :
                null) :
            null;

        context["field"] = "context";
        context["metadata"] = (objectMetadata ? objectMetadata["context"] : null);
        privateState.context = defaultValues ?
            (defaultValues["context"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["context"], context) :
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

        context["field"] = "id_token";
        context["metadata"] = (objectMetadata ? objectMetadata["id_token"] : null);
        privateState.id_token = defaultValues ?
            (defaultValues["id_token"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id_token"], context) :
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
            "authenticatorData": {
                get: function() {
                    context["field"] = "authenticatorData";
                    context["metadata"] = (objectMetadata ? objectMetadata["authenticatorData"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.authenticatorData, context);
                },
                set: function(val) {
                    setterFunctions['authenticatorData'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "signature": {
                get: function() {
                    context["field"] = "signature";
                    context["metadata"] = (objectMetadata ? objectMetadata["signature"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.signature, context);
                },
                set: function(val) {
                    setterFunctions['signature'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userHandle": {
                get: function() {
                    context["field"] = "userHandle";
                    context["metadata"] = (objectMetadata ? objectMetadata["userHandle"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userHandle, context);
                },
                set: function(val) {
                    setterFunctions['userHandle'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "csrfx": {
                get: function() {
                    context["field"] = "csrfx";
                    context["metadata"] = (objectMetadata ? objectMetadata["csrfx"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.csrfx, context);
                },
                set: function(val) {
                    setterFunctions['csrfx'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "code": {
                get: function() {
                    context["field"] = "code";
                    context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.code, context);
                },
                set: function(val) {
                    setterFunctions['code'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "context": {
                get: function() {
                    context["field"] = "context";
                    context["metadata"] = (objectMetadata ? objectMetadata["context"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.context, context);
                },
                set: function(val) {
                    setterFunctions['context'].call(this, val, privateState);
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
            "id_token": {
                get: function() {
                    context["field"] = "id_token";
                    context["metadata"] = (objectMetadata ? objectMetadata["id_token"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id_token, context);
                },
                set: function(val) {
                    setterFunctions['id_token'].call(this, val, privateState);
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
            privateState.request_uri = value ? (value["request_uri"] ? value["request_uri"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.csrf = value ? (value["csrf"] ? value["csrf"] : null) : null;
            privateState.clientDataJSON = value ? (value["clientDataJSON"] ? value["clientDataJSON"] : null) : null;
            privateState.authenticatorData = value ? (value["authenticatorData"] ? value["authenticatorData"] : null) : null;
            privateState.signature = value ? (value["signature"] ? value["signature"] : null) : null;
            privateState.userHandle = value ? (value["userHandle"] ? value["userHandle"] : null) : null;
            privateState.csrfx = value ? (value["csrfx"] ? value["csrfx"] : null) : null;
            privateState.code = value ? (value["code"] ? value["code"] : null) : null;
            privateState.context = value ? (value["context"] ? value["context"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.authType = value ? (value["authType"] ? value["authType"] : null) : null;
            privateState.id_token = value ? (value["id_token"] ? value["id_token"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(FIDOAuthentication);

    //Create new class level validator object
    BaseModel.Validator.call(FIDOAuthentication);

    var registerValidatorBackup = FIDOAuthentication.registerValidator;

    FIDOAuthentication.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(FIDOAuthentication.isValid(this, propName, val)) {
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
    //For Operation 'authenticate' with service id 'authenticate5101'
     FIDOAuthentication.authenticate = function(params, onCompletion){
        return FIDOAuthentication.customVerb('authenticate', params, onCompletion);
     };

    //For Operation 'getAuthenticationOptions' with service id 'getAuthenticationOptions9559'
     FIDOAuthentication.getAuthenticationOptions = function(params, onCompletion){
        return FIDOAuthentication.customVerb('getAuthenticationOptions', params, onCompletion);
     };

    var relations = [];

    FIDOAuthentication.relations = relations;

    FIDOAuthentication.prototype.isValid = function() {
        return FIDOAuthentication.isValid(this);
    };

    FIDOAuthentication.prototype.objModelName = "FIDOAuthentication";
    FIDOAuthentication.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    FIDOAuthentication.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "FIDOAuthentication", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    FIDOAuthentication.clone = function(objectToClone) {
        var clonedObj = new FIDOAuthentication();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return FIDOAuthentication;
});