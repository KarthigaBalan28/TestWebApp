/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SignatureValidation", "objectService" : "HIDTransactionSigning"};

    var setterFunctions = {
        access_token: function(val, state) {
            context["field"] = "access_token";
            context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
            state['access_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authType: function(val, state) {
            context["field"] = "authType";
            context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
            state['authType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        client_id: function(val, state) {
            context["field"] = "client_id";
            context["metadata"] = (objectMetadata ? objectMetadata["client_id"] : null);
            state['client_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        content: function(val, state) {
            context["field"] = "content";
            context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
            state['content'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error_description: function(val, state) {
            context["field"] = "error_description";
            context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
            state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SignatureValidation(defaultValues) {
        var privateState = {};
        context["field"] = "access_token";
        context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
        privateState.access_token = defaultValues ?
            (defaultValues["access_token"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["access_token"], context) :
                null) :
            null;

        context["field"] = "authType";
        context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
        privateState.authType = defaultValues ?
            (defaultValues["authType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authType"], context) :
                null) :
            null;

        context["field"] = "client_id";
        context["metadata"] = (objectMetadata ? objectMetadata["client_id"] : null);
        privateState.client_id = defaultValues ?
            (defaultValues["client_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["client_id"], context) :
                null) :
            null;

        context["field"] = "content";
        context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
        privateState.content = defaultValues ?
            (defaultValues["content"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["content"], context) :
                null) :
            null;

        context["field"] = "error_description";
        context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
        privateState.error_description = defaultValues ?
            (defaultValues["error_description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_description"], context) :
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
            "client_id": {
                get: function() {
                    context["field"] = "client_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["client_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.client_id, context);
                },
                set: function(val) {
                    setterFunctions['client_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "content": {
                get: function() {
                    context["field"] = "content";
                    context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.content, context);
                },
                set: function(val) {
                    setterFunctions['content'].call(this, val, privateState);
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
            privateState.access_token = value ? (value["access_token"] ? value["access_token"] : null) : null;
            privateState.authType = value ? (value["authType"] ? value["authType"] : null) : null;
            privateState.client_id = value ? (value["client_id"] ? value["client_id"] : null) : null;
            privateState.content = value ? (value["content"] ? value["content"] : null) : null;
            privateState.error_description = value ? (value["error_description"] ? value["error_description"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SignatureValidation);

    //Create new class level validator object
    BaseModel.Validator.call(SignatureValidation);

    var registerValidatorBackup = SignatureValidation.registerValidator;

    SignatureValidation.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SignatureValidation.isValid(this, propName, val)) {
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
    //For Operation 'validateSignature' with service id 'signatureValiation1651'
     SignatureValidation.validateSignature = function(params, onCompletion){
        return SignatureValidation.customVerb('validateSignature', params, onCompletion);
     };

    var relations = [];

    SignatureValidation.relations = relations;

    SignatureValidation.prototype.isValid = function() {
        return SignatureValidation.isValid(this);
    };

    SignatureValidation.prototype.objModelName = "SignatureValidation";
    SignatureValidation.prototype.objServiceName = "HIDTransactionSigning";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SignatureValidation.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDTransactionSigning", "SignatureValidation", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SignatureValidation.clone = function(objectToClone) {
        var clonedObj = new SignatureValidation();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SignatureValidation;
});