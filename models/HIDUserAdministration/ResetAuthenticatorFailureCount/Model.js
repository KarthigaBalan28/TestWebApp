/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ResetAuthenticatorFailureCount", "objectService" : "HIDUserAdministration"};

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
        consecutiveFailed: function(val, state) {
            context["field"] = "consecutiveFailed";
            context["metadata"] = (objectMetadata ? objectMetadata["consecutiveFailed"] : null);
            state['consecutiveFailed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        consecutiveSuccess: function(val, state) {
            context["field"] = "consecutiveSuccess";
            context["metadata"] = (objectMetadata ? objectMetadata["consecutiveSuccess"] : null);
            state['consecutiveSuccess'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        created: function(val, state) {
            context["field"] = "created";
            context["metadata"] = (objectMetadata ? objectMetadata["created"] : null);
            state['created'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disableThreshold: function(val, state) {
            context["field"] = "disableThreshold";
            context["metadata"] = (objectMetadata ? objectMetadata["disableThreshold"] : null);
            state['disableThreshold'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        expiryDate: function(val, state) {
            context["field"] = "expiryDate";
            context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
            state['expiryDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        filter: function(val, state) {
            context["field"] = "filter";
            context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
            state['filter'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastSuccessfulDate: function(val, state) {
            context["field"] = "lastSuccessfulDate";
            context["metadata"] = (objectMetadata ? objectMetadata["lastSuccessfulDate"] : null);
            state['lastSuccessfulDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PasswordResetError: function(val, state) {
            context["field"] = "PasswordResetError";
            context["metadata"] = (objectMetadata ? objectMetadata["PasswordResetError"] : null);
            state['PasswordResetError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ServErrMsg: function(val, state) {
            context["field"] = "ServErrMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["ServErrMsg"] : null);
            state['ServErrMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalFailed: function(val, state) {
            context["field"] = "totalFailed";
            context["metadata"] = (objectMetadata ? objectMetadata["totalFailed"] : null);
            state['totalFailed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalResults: function(val, state) {
            context["field"] = "totalResults";
            context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
            state['totalResults'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalSuccess: function(val, state) {
            context["field"] = "totalSuccess";
            context["metadata"] = (objectMetadata ? objectMetadata["totalSuccess"] : null);
            state['totalSuccess'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userid: function(val, state) {
            context["field"] = "userid";
            context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
            state['userid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ResetAuthenticatorFailureCount(defaultValues) {
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

        context["field"] = "consecutiveFailed";
        context["metadata"] = (objectMetadata ? objectMetadata["consecutiveFailed"] : null);
        privateState.consecutiveFailed = defaultValues ?
            (defaultValues["consecutiveFailed"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consecutiveFailed"], context) :
                null) :
            null;

        context["field"] = "consecutiveSuccess";
        context["metadata"] = (objectMetadata ? objectMetadata["consecutiveSuccess"] : null);
        privateState.consecutiveSuccess = defaultValues ?
            (defaultValues["consecutiveSuccess"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consecutiveSuccess"], context) :
                null) :
            null;

        context["field"] = "created";
        context["metadata"] = (objectMetadata ? objectMetadata["created"] : null);
        privateState.created = defaultValues ?
            (defaultValues["created"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["created"], context) :
                null) :
            null;

        context["field"] = "disableThreshold";
        context["metadata"] = (objectMetadata ? objectMetadata["disableThreshold"] : null);
        privateState.disableThreshold = defaultValues ?
            (defaultValues["disableThreshold"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disableThreshold"], context) :
                null) :
            null;

        context["field"] = "expiryDate";
        context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
        privateState.expiryDate = defaultValues ?
            (defaultValues["expiryDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expiryDate"], context) :
                null) :
            null;

        context["field"] = "filter";
        context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
        privateState.filter = defaultValues ?
            (defaultValues["filter"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["filter"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "lastSuccessfulDate";
        context["metadata"] = (objectMetadata ? objectMetadata["lastSuccessfulDate"] : null);
        privateState.lastSuccessfulDate = defaultValues ?
            (defaultValues["lastSuccessfulDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastSuccessfulDate"], context) :
                null) :
            null;

        context["field"] = "PasswordResetError";
        context["metadata"] = (objectMetadata ? objectMetadata["PasswordResetError"] : null);
        privateState.PasswordResetError = defaultValues ?
            (defaultValues["PasswordResetError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PasswordResetError"], context) :
                null) :
            null;

        context["field"] = "ServErrMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["ServErrMsg"] : null);
        privateState.ServErrMsg = defaultValues ?
            (defaultValues["ServErrMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ServErrMsg"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;

        context["field"] = "totalFailed";
        context["metadata"] = (objectMetadata ? objectMetadata["totalFailed"] : null);
        privateState.totalFailed = defaultValues ?
            (defaultValues["totalFailed"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalFailed"], context) :
                null) :
            null;

        context["field"] = "totalResults";
        context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
        privateState.totalResults = defaultValues ?
            (defaultValues["totalResults"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalResults"], context) :
                null) :
            null;

        context["field"] = "totalSuccess";
        context["metadata"] = (objectMetadata ? objectMetadata["totalSuccess"] : null);
        privateState.totalSuccess = defaultValues ?
            (defaultValues["totalSuccess"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalSuccess"], context) :
                null) :
            null;

        context["field"] = "userid";
        context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
        privateState.userid = defaultValues ?
            (defaultValues["userid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userid"], context) :
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
            "consecutiveFailed": {
                get: function() {
                    context["field"] = "consecutiveFailed";
                    context["metadata"] = (objectMetadata ? objectMetadata["consecutiveFailed"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consecutiveFailed, context);
                },
                set: function(val) {
                    setterFunctions['consecutiveFailed'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "consecutiveSuccess": {
                get: function() {
                    context["field"] = "consecutiveSuccess";
                    context["metadata"] = (objectMetadata ? objectMetadata["consecutiveSuccess"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consecutiveSuccess, context);
                },
                set: function(val) {
                    setterFunctions['consecutiveSuccess'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "created": {
                get: function() {
                    context["field"] = "created";
                    context["metadata"] = (objectMetadata ? objectMetadata["created"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.created, context);
                },
                set: function(val) {
                    setterFunctions['created'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disableThreshold": {
                get: function() {
                    context["field"] = "disableThreshold";
                    context["metadata"] = (objectMetadata ? objectMetadata["disableThreshold"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.disableThreshold, context);
                },
                set: function(val) {
                    setterFunctions['disableThreshold'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "expiryDate": {
                get: function() {
                    context["field"] = "expiryDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.expiryDate, context);
                },
                set: function(val) {
                    setterFunctions['expiryDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "filter": {
                get: function() {
                    context["field"] = "filter";
                    context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.filter, context);
                },
                set: function(val) {
                    setterFunctions['filter'].call(this, val, privateState);
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
            "lastSuccessfulDate": {
                get: function() {
                    context["field"] = "lastSuccessfulDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastSuccessfulDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastSuccessfulDate, context);
                },
                set: function(val) {
                    setterFunctions['lastSuccessfulDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PasswordResetError": {
                get: function() {
                    context["field"] = "PasswordResetError";
                    context["metadata"] = (objectMetadata ? objectMetadata["PasswordResetError"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PasswordResetError, context);
                },
                set: function(val) {
                    setterFunctions['PasswordResetError'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ServErrMsg": {
                get: function() {
                    context["field"] = "ServErrMsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["ServErrMsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ServErrMsg, context);
                },
                set: function(val) {
                    setterFunctions['ServErrMsg'].call(this, val, privateState);
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
            "totalFailed": {
                get: function() {
                    context["field"] = "totalFailed";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalFailed"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalFailed, context);
                },
                set: function(val) {
                    setterFunctions['totalFailed'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalResults": {
                get: function() {
                    context["field"] = "totalResults";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalResults, context);
                },
                set: function(val) {
                    setterFunctions['totalResults'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalSuccess": {
                get: function() {
                    context["field"] = "totalSuccess";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalSuccess"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalSuccess, context);
                },
                set: function(val) {
                    setterFunctions['totalSuccess'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userid": {
                get: function() {
                    context["field"] = "userid";
                    context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userid, context);
                },
                set: function(val) {
                    setterFunctions['userid'].call(this, val, privateState);
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
            privateState.consecutiveFailed = value ? (value["consecutiveFailed"] ? value["consecutiveFailed"] : null) : null;
            privateState.consecutiveSuccess = value ? (value["consecutiveSuccess"] ? value["consecutiveSuccess"] : null) : null;
            privateState.created = value ? (value["created"] ? value["created"] : null) : null;
            privateState.disableThreshold = value ? (value["disableThreshold"] ? value["disableThreshold"] : null) : null;
            privateState.expiryDate = value ? (value["expiryDate"] ? value["expiryDate"] : null) : null;
            privateState.filter = value ? (value["filter"] ? value["filter"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.lastSuccessfulDate = value ? (value["lastSuccessfulDate"] ? value["lastSuccessfulDate"] : null) : null;
            privateState.PasswordResetError = value ? (value["PasswordResetError"] ? value["PasswordResetError"] : null) : null;
            privateState.ServErrMsg = value ? (value["ServErrMsg"] ? value["ServErrMsg"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.totalFailed = value ? (value["totalFailed"] ? value["totalFailed"] : null) : null;
            privateState.totalResults = value ? (value["totalResults"] ? value["totalResults"] : null) : null;
            privateState.totalSuccess = value ? (value["totalSuccess"] ? value["totalSuccess"] : null) : null;
            privateState.userid = value ? (value["userid"] ? value["userid"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ResetAuthenticatorFailureCount);

    //Create new class level validator object
    BaseModel.Validator.call(ResetAuthenticatorFailureCount);

    var registerValidatorBackup = ResetAuthenticatorFailureCount.registerValidator;

    ResetAuthenticatorFailureCount.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ResetAuthenticatorFailureCount.isValid(this, propName, val)) {
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
    //For Operation 'resetFailureCount' with service id 'resetFailureCount5724'
     ResetAuthenticatorFailureCount.resetFailureCount = function(params, onCompletion){
        return ResetAuthenticatorFailureCount.customVerb('resetFailureCount', params, onCompletion);
     };

    var relations = [];

    ResetAuthenticatorFailureCount.relations = relations;

    ResetAuthenticatorFailureCount.prototype.isValid = function() {
        return ResetAuthenticatorFailureCount.isValid(this);
    };

    ResetAuthenticatorFailureCount.prototype.objModelName = "ResetAuthenticatorFailureCount";
    ResetAuthenticatorFailureCount.prototype.objServiceName = "HIDUserAdministration";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ResetAuthenticatorFailureCount.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDUserAdministration", "ResetAuthenticatorFailureCount", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ResetAuthenticatorFailureCount.clone = function(objectToClone) {
        var clonedObj = new ResetAuthenticatorFailureCount();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ResetAuthenticatorFailureCount;
});