/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddAllOOBAuth", "objectService" : "HIDObjects"};

    var setterFunctions = {
        active: function(val, state) {
            context["field"] = "active";
            context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
            state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        active_status: function(val, state) {
            context["field"] = "active_status";
            context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
            state['active_status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        Authid: function(val, state) {
            context["field"] = "Authid";
            context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
            state['Authid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ExternalUserId: function(val, state) {
            context["field"] = "ExternalUserId";
            context["metadata"] = (objectMetadata ? objectMetadata["ExternalUserId"] : null);
            state['ExternalUserId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        scimType_TXOTP: function(val, state) {
            context["field"] = "scimType_TXOTP";
            context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
            state['scimType_TXOTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AddAllOOBAuth(defaultValues) {
        var privateState = {};
        context["field"] = "active";
        context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
        privateState.active = defaultValues ?
            (defaultValues["active"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context) :
                null) :
            null;

        context["field"] = "active_status";
        context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
        privateState.active_status = defaultValues ?
            (defaultValues["active_status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active_status"], context) :
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

        context["field"] = "Authid";
        context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
        privateState.Authid = defaultValues ?
            (defaultValues["Authid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Authid"], context) :
                null) :
            null;

        context["field"] = "ExternalUserId";
        context["metadata"] = (objectMetadata ? objectMetadata["ExternalUserId"] : null);
        privateState.ExternalUserId = defaultValues ?
            (defaultValues["ExternalUserId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ExternalUserId"], context) :
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

        context["field"] = "scimType_TXOTP";
        context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
        privateState.scimType_TXOTP = defaultValues ?
            (defaultValues["scimType_TXOTP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_TXOTP"], context) :
                null) :
            null;

        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ?
            (defaultValues["userId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) :
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
            "ExternalUserId": {
                get: function() {
                    context["field"] = "ExternalUserId";
                    context["metadata"] = (objectMetadata ? objectMetadata["ExternalUserId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ExternalUserId, context);
                },
                set: function(val) {
                    setterFunctions['ExternalUserId'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.active = value ? (value["active"] ? value["active"] : null) : null;
            privateState.active_status = value ? (value["active_status"] ? value["active_status"] : null) : null;
            privateState.AuthenticatorType = value ? (value["AuthenticatorType"] ? value["AuthenticatorType"] : null) : null;
            privateState.AuthenticatorValue = value ? (value["AuthenticatorValue"] ? value["AuthenticatorValue"] : null) : null;
            privateState.Authid = value ? (value["Authid"] ? value["Authid"] : null) : null;
            privateState.ExternalUserId = value ? (value["ExternalUserId"] ? value["ExternalUserId"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.scimType_OTP = value ? (value["scimType_OTP"] ? value["scimType_OTP"] : null) : null;
            privateState.scimType_TXOTP = value ? (value["scimType_TXOTP"] ? value["scimType_TXOTP"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AddAllOOBAuth);

    //Create new class level validator object
    BaseModel.Validator.call(AddAllOOBAuth);

    var registerValidatorBackup = AddAllOOBAuth.registerValidator;

    AddAllOOBAuth.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AddAllOOBAuth.isValid(this, propName, val)) {
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
    //For Operation 'addAllOOBAuth' with service id 'addAllOOBAuth8251'
     AddAllOOBAuth.addAllOOBAuth = function(params, onCompletion){
        return AddAllOOBAuth.customVerb('addAllOOBAuth', params, onCompletion);
     };

    var relations = [];

    AddAllOOBAuth.relations = relations;

    AddAllOOBAuth.prototype.isValid = function() {
        return AddAllOOBAuth.isValid(this);
    };

    AddAllOOBAuth.prototype.objModelName = "AddAllOOBAuth";
    AddAllOOBAuth.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AddAllOOBAuth.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddAllOOBAuth", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AddAllOOBAuth.clone = function(objectToClone) {
        var clonedObj = new AddAllOOBAuth();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AddAllOOBAuth;
});