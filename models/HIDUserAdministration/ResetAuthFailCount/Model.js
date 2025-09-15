/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ResetAuthFailCount", "objectService" : "HIDUserAdministration"};

    var setterFunctions = {
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
        disableThreshold: function(val, state) {
            context["field"] = "disableThreshold";
            context["metadata"] = (objectMetadata ? objectMetadata["disableThreshold"] : null);
            state['disableThreshold'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PasswordResetError: function(val, state) {
            context["field"] = "PasswordResetError";
            context["metadata"] = (objectMetadata ? objectMetadata["PasswordResetError"] : null);
            state['PasswordResetError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        status: function(val, state) {
            context["field"] = "status";
            context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
            state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userid: function(val, state) {
            context["field"] = "userid";
            context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
            state['userid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ResetAuthFailCount(defaultValues) {
        var privateState = {};
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

        context["field"] = "disableThreshold";
        context["metadata"] = (objectMetadata ? objectMetadata["disableThreshold"] : null);
        privateState.disableThreshold = defaultValues ?
            (defaultValues["disableThreshold"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disableThreshold"], context) :
                null) :
            null;

        context["field"] = "PasswordResetError";
        context["metadata"] = (objectMetadata ? objectMetadata["PasswordResetError"] : null);
        privateState.PasswordResetError = defaultValues ?
            (defaultValues["PasswordResetError"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PasswordResetError"], context) :
                null) :
            null;

        context["field"] = "status";
        context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
        privateState.status = defaultValues ?
            (defaultValues["status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context) :
                null) :
            null;

        context["field"] = "userid";
        context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
        privateState.userid = defaultValues ?
            (defaultValues["userid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userid"], context) :
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
            privateState.authType = value ? (value["authType"] ? value["authType"] : null) : null;
            privateState.consecutiveFailed = value ? (value["consecutiveFailed"] ? value["consecutiveFailed"] : null) : null;
            privateState.disableThreshold = value ? (value["disableThreshold"] ? value["disableThreshold"] : null) : null;
            privateState.PasswordResetError = value ? (value["PasswordResetError"] ? value["PasswordResetError"] : null) : null;
            privateState.status = value ? (value["status"] ? value["status"] : null) : null;
            privateState.userid = value ? (value["userid"] ? value["userid"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ResetAuthFailCount);

    //Create new class level validator object
    BaseModel.Validator.call(ResetAuthFailCount);

    var registerValidatorBackup = ResetAuthFailCount.registerValidator;

    ResetAuthFailCount.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ResetAuthFailCount.isValid(this, propName, val)) {
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
    //For Operation 'resetFailCount' with service id 'resetFailureCount6002'
     ResetAuthFailCount.resetFailCount = function(params, onCompletion){
        return ResetAuthFailCount.customVerb('resetFailCount', params, onCompletion);
     };

    var relations = [];

    ResetAuthFailCount.relations = relations;

    ResetAuthFailCount.prototype.isValid = function() {
        return ResetAuthFailCount.isValid(this);
    };

    ResetAuthFailCount.prototype.objModelName = "ResetAuthFailCount";
    ResetAuthFailCount.prototype.objServiceName = "HIDUserAdministration";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ResetAuthFailCount.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDUserAdministration", "ResetAuthFailCount", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ResetAuthFailCount.clone = function(objectToClone) {
        var clonedObj = new ResetAuthFailCount();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ResetAuthFailCount;
});