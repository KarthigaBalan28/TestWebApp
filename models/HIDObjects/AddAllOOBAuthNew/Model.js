/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddAllOOBAuthNew", "objectService" : "HIDObjects"};

    var setterFunctions = {
        AuthenticatorType: function(val, state) {
            context["field"] = "AuthenticatorType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
            state['AuthenticatorType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        active: function(val, state) {
            context["field"] = "active";
            context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
            state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scimType_OTP: function(val, state) {
            context["field"] = "scimType_OTP";
            context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
            state['scimType_OTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Authid: function(val, state) {
            context["field"] = "Authid";
            context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
            state['Authid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        active_status: function(val, state) {
            context["field"] = "active_status";
            context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
            state['active_status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scimType_TXOTP: function(val, state) {
            context["field"] = "scimType_TXOTP";
            context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
            state['scimType_TXOTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Auth_Key: function(val, state) {
            context["field"] = "Auth_Key";
            context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
            state['Auth_Key'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AddAllOOBServiceError: function(val, state) {
            context["field"] = "AddAllOOBServiceError";
            context["metadata"] = (objectMetadata ? objectMetadata["AddAllOOBServiceError"] : null);
            state['AddAllOOBServiceError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticationType: function(val, state) {
            context["field"] = "AuthenticationType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
            state['AuthenticationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OOB_SENT: function(val, state) {
            context["field"] = "OOB_SENT";
            context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
            state['OOB_SENT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AddAllOOBAuthNew(defaultValues) {
        var privateState = {};
        context["field"] = "AuthenticatorType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
        privateState.AuthenticatorType = defaultValues ?
            (defaultValues["AuthenticatorType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorType"], context) :
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

        context["field"] = "active";
        context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
        privateState.active = defaultValues ?
            (defaultValues["active"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context) :
                null) :
            null;

        context["field"] = "scimType_OTP";
        context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
        privateState.scimType_OTP = defaultValues ?
            (defaultValues["scimType_OTP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_OTP"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "Authid";
        context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
        privateState.Authid = defaultValues ?
            (defaultValues["Authid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Authid"], context) :
                null) :
            null;

        context["field"] = "active_status";
        context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
        privateState.active_status = defaultValues ?
            (defaultValues["active_status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active_status"], context) :
                null) :
            null;

        context["field"] = "scimType_TXOTP";
        context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
        privateState.scimType_TXOTP = defaultValues ?
            (defaultValues["scimType_TXOTP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_TXOTP"], context) :
                null) :
            null;

        context["field"] = "Auth_Key";
        context["metadata"] = (objectMetadata ? objectMetadata["Auth_Key"] : null);
        privateState.Auth_Key = defaultValues ?
            (defaultValues["Auth_Key"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Auth_Key"], context) :
                null) :
            null;

        context["field"] = "AddAllOOBServiceError";
        context["metadata"] = (objectMetadata ? objectMetadata["AddAllOOBServiceError"] : null);
        privateState.AddAllOOBServiceError = defaultValues ?
            (defaultValues["AddAllOOBServiceError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AddAllOOBServiceError"], context) :
                null) :
            null;

        context["field"] = "AuthenticationType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
        privateState.AuthenticationType = defaultValues ?
            (defaultValues["AuthenticationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context) :
                null) :
            null;

        context["field"] = "OOB_SENT";
        context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
        privateState.OOB_SENT = defaultValues ?
            (defaultValues["OOB_SENT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OOB_SENT"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "Authid": {
                get: function() {
                    context["field"] = "Authid";
                    context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Authid, context);
                },
                set: function(val) {
                    setterFunctions['Authid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "active_status": {
                get: function() {
                    context["field"] = "active_status";
                    context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.active_status, context);
                },
                set: function(val) {
                    setterFunctions['active_status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "scimType_TXOTP": {
                get: function() {
                    context["field"] = "scimType_TXOTP";
                    context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scimType_TXOTP, context);
                },
                set: function(val) {
                    setterFunctions['scimType_TXOTP'].call(this, val, privateState);
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
            "AddAllOOBServiceError": {
                get: function() {
                    context["field"] = "AddAllOOBServiceError";
                    context["metadata"] = (objectMetadata ? objectMetadata["AddAllOOBServiceError"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AddAllOOBServiceError, context);
                },
                set: function(val) {
                    setterFunctions['AddAllOOBServiceError'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AuthenticationType": {
                get: function() {
                    context["field"] = "AuthenticationType";
                    context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticationType, context);
                },
                set: function(val) {
                    setterFunctions['AuthenticationType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OOB_SENT": {
                get: function() {
                    context["field"] = "OOB_SENT";
                    context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OOB_SENT, context);
                },
                set: function(val) {
                    setterFunctions['OOB_SENT'].call(this, val, privateState);
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
            privateState.AuthenticatorType = value ? (value["AuthenticatorType"] ? value["AuthenticatorType"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.isPasswordRequired = value ? (value["isPasswordRequired"] ? value["isPasswordRequired"] : null) : null;
            privateState.AuthenticatorValue = value ? (value["AuthenticatorValue"] ? value["AuthenticatorValue"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.active = value ? (value["active"] ? value["active"] : null) : null;
            privateState.scimType_OTP = value ? (value["scimType_OTP"] ? value["scimType_OTP"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.Authid = value ? (value["Authid"] ? value["Authid"] : null) : null;
            privateState.active_status = value ? (value["active_status"] ? value["active_status"] : null) : null;
            privateState.scimType_TXOTP = value ? (value["scimType_TXOTP"] ? value["scimType_TXOTP"] : null) : null;
            privateState.Auth_Key = value ? (value["Auth_Key"] ? value["Auth_Key"] : null) : null;
            privateState.AddAllOOBServiceError = value ? (value["AddAllOOBServiceError"] ? value["AddAllOOBServiceError"] : null) : null;
            privateState.AuthenticationType = value ? (value["AuthenticationType"] ? value["AuthenticationType"] : null) : null;
            privateState.OOB_SENT = value ? (value["OOB_SENT"] ? value["OOB_SENT"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AddAllOOBAuthNew);

    //Create new class level validator object
    BaseModel.Validator.call(AddAllOOBAuthNew);

    var registerValidatorBackup = AddAllOOBAuthNew.registerValidator;

    AddAllOOBAuthNew.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AddAllOOBAuthNew.isValid(this, propName, val)) {
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
    //For Operation 'addAllOOBAuthenticators' with service id 'AddAllOOBAuthenticators1986'
     AddAllOOBAuthNew.addAllOOBAuthenticators = function(params, onCompletion){
        return AddAllOOBAuthNew.customVerb('addAllOOBAuthenticators', params, onCompletion);
     };

    var relations = [];

    AddAllOOBAuthNew.relations = relations;

    AddAllOOBAuthNew.prototype.isValid = function() {
        return AddAllOOBAuthNew.isValid(this);
    };

    AddAllOOBAuthNew.prototype.objModelName = "AddAllOOBAuthNew";
    AddAllOOBAuthNew.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AddAllOOBAuthNew.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddAllOOBAuthNew", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AddAllOOBAuthNew.clone = function(objectToClone) {
        var clonedObj = new AddAllOOBAuthNew();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AddAllOOBAuthNew;
});