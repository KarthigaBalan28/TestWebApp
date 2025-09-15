/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddPasswordAuthenticator", "objectService" : "HIDObjects"};

    var setterFunctions = {
        active: function(val, state) {
            context["field"] = "active";
            context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
            state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authType: function(val, state) {
            context["field"] = "authType";
            context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
            state['authType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        detail: function(val, state) {
            context["field"] = "detail";
            context["metadata"] = (objectMetadata ? objectMetadata["detail"] : null);
            state['detail'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorCode: function(val, state) {
            context["field"] = "errorCode";
            context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
            state['errorCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        expDate: function(val, state) {
            context["field"] = "expDate";
            context["metadata"] = (objectMetadata ? objectMetadata["expDate"] : null);
            state['expDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scimType_Pwd: function(val, state) {
            context["field"] = "scimType_Pwd";
            context["metadata"] = (objectMetadata ? objectMetadata["scimType_Pwd"] : null);
            state['scimType_Pwd'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        startDate: function(val, state) {
            context["field"] = "startDate";
            context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
            state['startDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AddPasswordServiceError: function(val, state) {
            context["field"] = "AddPasswordServiceError";
            context["metadata"] = (objectMetadata ? objectMetadata["AddPasswordServiceError"] : null);
            state['AddPasswordServiceError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Auth_Key: function(val, state) {
            context["field"] = "Auth_Key";
            context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
            state['Auth_Key'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        factor: function(val, state) {
            context["field"] = "factor";
            context["metadata"] = (objectMetadata ? objectMetadata["factor"] : null);
            state['factor'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AddPasswordAuthenticator(defaultValues) {
        var privateState = {};
        context["field"] = "active";
        context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
        privateState.active = defaultValues ?
            (defaultValues["active"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context) :
                null) :
            null;

        context["field"] = "authType";
        context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
        privateState.authType = defaultValues ?
            (defaultValues["authType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authType"], context) :
                null) :
            null;

        context["field"] = "detail";
        context["metadata"] = (objectMetadata ? objectMetadata["detail"] : null);
        privateState.detail = defaultValues ?
            (defaultValues["detail"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["detail"], context) :
                null) :
            null;

        context["field"] = "errorCode";
        context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
        privateState.errorCode = defaultValues ?
            (defaultValues["errorCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode"], context) :
                null) :
            null;

        context["field"] = "expDate";
        context["metadata"] = (objectMetadata ? objectMetadata["expDate"] : null);
        privateState.expDate = defaultValues ?
            (defaultValues["expDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expDate"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "scimType_Pwd";
        context["metadata"] = (objectMetadata ? objectMetadata["scimType_Pwd"] : null);
        privateState.scimType_Pwd = defaultValues ?
            (defaultValues["scimType_Pwd"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_Pwd"], context) :
                null) :
            null;

        context["field"] = "startDate";
        context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
        privateState.startDate = defaultValues ?
            (defaultValues["startDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["startDate"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;

        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ?
            (defaultValues["userId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "AddPasswordServiceError";
        context["metadata"] = (objectMetadata ? objectMetadata["AddPasswordServiceError"] : null);
        privateState.AddPasswordServiceError = defaultValues ?
            (defaultValues["AddPasswordServiceError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AddPasswordServiceError"], context) :
                null) :
            null;

        context["field"] = "Auth_Key";
        context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
        privateState.Auth_Key = defaultValues ?
            (defaultValues["Auth_Key"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Auth_Key"], context) :
                null) :
            null;

        context["field"] = "correlationId";
        context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
        privateState.correlationId = defaultValues ?
            (defaultValues["correlationId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["correlationId"], context) :
                null) :
            null;

        context["field"] = "factor";
        context["metadata"] = (objectMetadata ? objectMetadata["factor"] : null);
        privateState.factor = defaultValues ?
            (defaultValues["factor"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["factor"], context) :
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
            "expDate": {
                get: function() {
                    context["field"] = "expDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["expDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.expDate, context);
                },
                set: function(val) {
                    setterFunctions['expDate'].call(this, val, privateState);
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
            "scimType_Pwd": {
                get: function() {
                    context["field"] = "scimType_Pwd";
                    context["metadata"] = (objectMetadata ? objectMetadata["scimType_Pwd"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scimType_Pwd, context);
                },
                set: function(val) {
                    setterFunctions['scimType_Pwd'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "startDate": {
                get: function() {
                    context["field"] = "startDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.startDate, context);
                },
                set: function(val) {
                    setterFunctions['startDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "status": {
                get: function() {
                    context["field"] = "status";
                    context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);
                },
                set: function(val) {
                    setterFunctions['status'].call(this, val, privateState);
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
            "AddPasswordServiceError": {
                get: function() {
                    context["field"] = "AddPasswordServiceError";
                    context["metadata"] = (objectMetadata ? objectMetadata["AddPasswordServiceError"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AddPasswordServiceError, context);
                },
                set: function(val) {
                    setterFunctions['AddPasswordServiceError'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Auth_Key": {
                get: function() {
                    context["field"] = "Auth_Key";
                    context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Auth_Key, context);
                },
                set: function(val) {
                    setterFunctions['Auth_Key'].call(this, val, privateState);
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
            "factor": {
                get: function() {
                    context["field"] = "factor";
                    context["metadata"] = (objectMetadata ? objectMetadata["factor"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.factor, context);
                },
                set: function(val) {
                    setterFunctions['factor'].call(this, val, privateState);
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
            privateState.authType = value ? (value["authType"] ? value["authType"] : null) : null;
            privateState.detail = value ? (value["detail"] ? value["detail"] : null) : null;
            privateState.errorCode = value ? (value["errorCode"] ? value["errorCode"] : null) : null;
            privateState.expDate = value ? (value["expDate"] ? value["expDate"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.scimType_Pwd = value ? (value["scimType_Pwd"] ? value["scimType_Pwd"] : null) : null;
            privateState.startDate = value ? (value["startDate"] ? value["startDate"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.AddPasswordServiceError = value ? (value["AddPasswordServiceError"] ? value["AddPasswordServiceError"] : null) : null;
            privateState.Auth_Key = value ? (value["Auth_Key"] ? value["Auth_Key"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
            privateState.factor = value ? (value["factor"] ? value["factor"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AddPasswordAuthenticator);

    //Create new class level validator object
    BaseModel.Validator.call(AddPasswordAuthenticator);

    var registerValidatorBackup = AddPasswordAuthenticator.registerValidator;

    AddPasswordAuthenticator.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AddPasswordAuthenticator.isValid(this, propName, val)) {
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
    //For Operation 'addPasswordAuthenticator' with service id 'addPasswordAuthenticatorInt2341'
     AddPasswordAuthenticator.addPasswordAuthenticator = function(params, onCompletion){
        return AddPasswordAuthenticator.customVerb('addPasswordAuthenticator', params, onCompletion);
     };

    var relations = [];

    AddPasswordAuthenticator.relations = relations;

    AddPasswordAuthenticator.prototype.isValid = function() {
        return AddPasswordAuthenticator.isValid(this);
    };

    AddPasswordAuthenticator.prototype.objModelName = "AddPasswordAuthenticator";
    AddPasswordAuthenticator.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AddPasswordAuthenticator.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddPasswordAuthenticator", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AddPasswordAuthenticator.clone = function(objectToClone) {
        var clonedObj = new AddPasswordAuthenticator();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AddPasswordAuthenticator;
});