/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "RMScall", "objectService" : "HIDAuthService"};

    var setterFunctions = {
        tm_sid: function(val, state) {
            context["field"] = "tm_sid";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_sid"] : null);
            state['tm_sid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tm_tag: function(val, state) {
            context["field"] = "tm_tag";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_tag"] : null);
            state['tm_tag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        application_id: function(val, state) {
            context["field"] = "application_id";
            context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
            state['application_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        channel_id: function(val, state) {
            context["field"] = "channel_id";
            context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
            state['channel_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_action_id: function(val, state) {
            context["field"] = "app_action_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
            state['app_action_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tm_action_id: function(val, state) {
            context["field"] = "tm_action_id";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_action_id"] : null);
            state['tm_action_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error_code: function(val, state) {
            context["field"] = "error_code";
            context["metadata"] = (objectMetadata ? objectMetadata["error_code"] : null);
            state['error_code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        message: function(val, state) {
            context["field"] = "message";
            context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
            state['message'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_user_id: function(val, state) {
            context["field"] = "app_user_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
            state['app_user_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        risk_score: function(val, state) {
            context["field"] = "risk_score";
            context["metadata"] = (objectMetadata ? objectMetadata["risk_score"] : null);
            state['risk_score'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function RMScall(defaultValues) {
        var privateState = {};
        context["field"] = "tm_sid";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_sid"] : null);
        privateState.tm_sid = defaultValues ?
            (defaultValues["tm_sid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_sid"], context) :
                null) :
            null;

        context["field"] = "tm_tag";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_tag"] : null);
        privateState.tm_tag = defaultValues ?
            (defaultValues["tm_tag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_tag"], context) :
                null) :
            null;

        context["field"] = "application_id";
        context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
        privateState.application_id = defaultValues ?
            (defaultValues["application_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["application_id"], context) :
                null) :
            null;

        context["field"] = "channel_id";
        context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
        privateState.channel_id = defaultValues ?
            (defaultValues["channel_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["channel_id"], context) :
                null) :
            null;

        context["field"] = "app_action_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
        privateState.app_action_id = defaultValues ?
            (defaultValues["app_action_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_action_id"], context) :
                null) :
            null;

        context["field"] = "tm_action_id";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_action_id"] : null);
        privateState.tm_action_id = defaultValues ?
            (defaultValues["tm_action_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_action_id"], context) :
                null) :
            null;

        context["field"] = "error_code";
        context["metadata"] = (objectMetadata ? objectMetadata["error_code"] : null);
        privateState.error_code = defaultValues ?
            (defaultValues["error_code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_code"], context) :
                null) :
            null;

        context["field"] = "message";
        context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
        privateState.message = defaultValues ?
            (defaultValues["message"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["message"], context) :
                null) :
            null;

        context["field"] = "app_user_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
        privateState.app_user_id = defaultValues ?
            (defaultValues["app_user_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_user_id"], context) :
                null) :
            null;

        context["field"] = "risk_score";
        context["metadata"] = (objectMetadata ? objectMetadata["risk_score"] : null);
        privateState.risk_score = defaultValues ?
            (defaultValues["risk_score"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["risk_score"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "tm_sid": {
                get: function() {
                    context["field"] = "tm_sid";
                    context["metadata"] = (objectMetadata ? objectMetadata["tm_sid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tm_sid, context);
                },
                set: function(val) {
                    setterFunctions['tm_sid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tm_tag": {
                get: function() {
                    context["field"] = "tm_tag";
                    context["metadata"] = (objectMetadata ? objectMetadata["tm_tag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tm_tag, context);
                },
                set: function(val) {
                    setterFunctions['tm_tag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "application_id": {
                get: function() {
                    context["field"] = "application_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.application_id, context);
                },
                set: function(val) {
                    setterFunctions['application_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "channel_id": {
                get: function() {
                    context["field"] = "channel_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.channel_id, context);
                },
                set: function(val) {
                    setterFunctions['channel_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "app_action_id": {
                get: function() {
                    context["field"] = "app_action_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_action_id, context);
                },
                set: function(val) {
                    setterFunctions['app_action_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tm_action_id": {
                get: function() {
                    context["field"] = "tm_action_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["tm_action_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tm_action_id, context);
                },
                set: function(val) {
                    setterFunctions['tm_action_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "error_code": {
                get: function() {
                    context["field"] = "error_code";
                    context["metadata"] = (objectMetadata ? objectMetadata["error_code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error_code, context);
                },
                set: function(val) {
                    setterFunctions['error_code'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "message": {
                get: function() {
                    context["field"] = "message";
                    context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.message, context);
                },
                set: function(val) {
                    setterFunctions['message'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "app_user_id": {
                get: function() {
                    context["field"] = "app_user_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_user_id, context);
                },
                set: function(val) {
                    setterFunctions['app_user_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "risk_score": {
                get: function() {
                    context["field"] = "risk_score";
                    context["metadata"] = (objectMetadata ? objectMetadata["risk_score"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.risk_score, context);
                },
                set: function(val) {
                    setterFunctions['risk_score'].call(this, val, privateState);
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
            privateState.tm_sid = value ? (value["tm_sid"] ? value["tm_sid"] : null) : null;
            privateState.tm_tag = value ? (value["tm_tag"] ? value["tm_tag"] : null) : null;
            privateState.application_id = value ? (value["application_id"] ? value["application_id"] : null) : null;
            privateState.channel_id = value ? (value["channel_id"] ? value["channel_id"] : null) : null;
            privateState.app_action_id = value ? (value["app_action_id"] ? value["app_action_id"] : null) : null;
            privateState.tm_action_id = value ? (value["tm_action_id"] ? value["tm_action_id"] : null) : null;
            privateState.error_code = value ? (value["error_code"] ? value["error_code"] : null) : null;
            privateState.message = value ? (value["message"] ? value["message"] : null) : null;
            privateState.app_user_id = value ? (value["app_user_id"] ? value["app_user_id"] : null) : null;
            privateState.risk_score = value ? (value["risk_score"] ? value["risk_score"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(RMScall);

    //Create new class level validator object
    BaseModel.Validator.call(RMScall);

    var registerValidatorBackup = RMScall.registerValidator;

    RMScall.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(RMScall.isValid(this, propName, val)) {
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
    //For Operation 'visitScore' with service id 'visitScore1942'
     RMScall.visitScore = function(params, onCompletion){
        return RMScall.customVerb('visitScore', params, onCompletion);
     };

    //For Operation 'sessionLoginCreate' with service id 'SessionLoginCreate7181'
     RMScall.sessionLoginCreate = function(params, onCompletion){
        return RMScall.customVerb('sessionLoginCreate', params, onCompletion);
     };

    //For Operation 'sessionCreate' with service id 'SessionCreate9716'
     RMScall.sessionCreate = function(params, onCompletion){
        return RMScall.customVerb('sessionCreate', params, onCompletion);
     };

    var relations = [];

    RMScall.relations = relations;

    RMScall.prototype.isValid = function() {
        return RMScall.isValid(this);
    };

    RMScall.prototype.objModelName = "RMScall";
    RMScall.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    RMScall.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "RMScall", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    RMScall.clone = function(objectToClone) {
        var clonedObj = new RMScall();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return RMScall;
});