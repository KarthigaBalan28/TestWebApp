/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddOOBAuthenticator", "objectService" : "HIDObjects"};

    var setterFunctions = {
        active: function(val, state) {
            context["field"] = "active";
            context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
            state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticatorType: function(val, state) {
            context["field"] = "AuthenticatorType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
            state['AuthenticatorType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticatorValue: function(val, state) {
            context["field"] = "AuthenticatorValue";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
            state['AuthenticatorValue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scimType_OTP: function(val, state) {
            context["field"] = "scimType_OTP";
            context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
            state['scimType_OTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPasswordRequired: function(val, state) {
            context["field"] = "isPasswordRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
            state['isPasswordRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OOB_PIN: function(val, state) {
            context["field"] = "OOB_PIN";
            context["metadata"] = (objectMetadata ? objectMetadata["OOB_PIN"] : null);
            state['OOB_PIN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
    function AddOOBAuthenticator(defaultValues) {
        var privateState = {};
        context["field"] = "active";
        context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
        privateState.active = defaultValues ?
            (defaultValues["active"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context) :
                null) :
            null;

        context["field"] = "AuthenticatorType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
        privateState.AuthenticatorType = defaultValues ?
            (defaultValues["AuthenticatorType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorType"], context) :
                null) :
            null;

        context["field"] = "AuthenticatorValue";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
        privateState.AuthenticatorValue = defaultValues ?
            (defaultValues["AuthenticatorValue"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorValue"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "scimType_OTP";
        context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
        privateState.scimType_OTP = defaultValues ?
            (defaultValues["scimType_OTP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_OTP"], context) :
                null) :
            null;

        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ?
            (defaultValues["userId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) :
                null) :
            null;

        context["field"] = "isPasswordRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isPasswordRequired"] : null);
        privateState.isPasswordRequired = defaultValues ?
            (defaultValues["isPasswordRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPasswordRequired"], context) :
                null) :
            null;

        context["field"] = "OOB_PIN";
        context["metadata"] = (objectMetadata ? objectMetadata["OOB_PIN"] : null);
        privateState.OOB_PIN = defaultValues ?
            (defaultValues["OOB_PIN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OOB_PIN"], context) :
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
            "active": {
                get: function() {
                    context["field"] = "active";
                    context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.active, context);
                },
                set: function(val) {
                    setterFunctions['active'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthenticatorType": {
                get: function() {
                    context["field"] = "AuthenticatorType";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticatorType, context);
                },
                set: function(val) {
                    setterFunctions['AuthenticatorType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthenticatorValue": {
                get: function() {
                    context["field"] = "AuthenticatorValue";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticatorValue, context);
                },
                set: function(val) {
                    setterFunctions['AuthenticatorValue'].call(this, val, privateState);
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
            "scimType_OTP": {
                get: function() {
                    context["field"] = "scimType_OTP";
                    context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scimType_OTP, context);
                },
                set: function(val) {
                    setterFunctions['scimType_OTP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userId": {
                get: function() {
                    context["field"] = "userId";
                    context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);
                },
                set: function(val) {
                    setterFunctions['userId'].call(this, val, privateState);
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
            "OOB_PIN": {
                get: function() {
                    context["field"] = "OOB_PIN";
                    context["metadata"] = (objectMetadata ? objectMetadata["OOB_PIN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OOB_PIN, context);
                },
                set: function(val) {
                    setterFunctions['OOB_PIN'].call(this, val, privateState);
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
            privateState.active = value ? (value["active"] ? value["active"] : null) : null;
            privateState.AuthenticatorType = value ? (value["AuthenticatorType"] ? value["AuthenticatorType"] : null) : null;
            privateState.AuthenticatorValue = value ? (value["AuthenticatorValue"] ? value["AuthenticatorValue"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.scimType_OTP = value ? (value["scimType_OTP"] ? value["scimType_OTP"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.isPasswordRequired = value ? (value["isPasswordRequired"] ? value["isPasswordRequired"] : null) : null;
            privateState.OOB_PIN = value ? (value["OOB_PIN"] ? value["OOB_PIN"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AddOOBAuthenticator);

    //Create new class level validator object
    BaseModel.Validator.call(AddOOBAuthenticator);

    var registerValidatorBackup = AddOOBAuthenticator.registerValidator;

    AddOOBAuthenticator.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AddOOBAuthenticator.isValid(this, propName, val)) {
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
    //For Operation 'addOOBAuthenticator' with service id 'addOOBAuthenticator5338'
     AddOOBAuthenticator.addOOBAuthenticator = function(params, onCompletion){
        return AddOOBAuthenticator.customVerb('addOOBAuthenticator', params, onCompletion);
     };

    var relations = [];

    AddOOBAuthenticator.relations = relations;

    AddOOBAuthenticator.prototype.isValid = function() {
        return AddOOBAuthenticator.isValid(this);
    };

    AddOOBAuthenticator.prototype.objModelName = "AddOOBAuthenticator";
    AddOOBAuthenticator.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AddOOBAuthenticator.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddOOBAuthenticator", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AddOOBAuthenticator.clone = function(objectToClone) {
        var clonedObj = new AddOOBAuthenticator();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AddOOBAuthenticator;
});