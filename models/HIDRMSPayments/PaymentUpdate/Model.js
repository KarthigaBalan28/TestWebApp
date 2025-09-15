/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "PaymentUpdate", "objectService" : "HIDRMSPayments"};

    var setterFunctions = {
        application_id: function(val, state) {
            context["field"] = "application_id";
            context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
            state['application_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_payment_id: function(val, state) {
            context["field"] = "app_payment_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
            state['app_payment_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        channel_id: function(val, state) {
            context["field"] = "channel_id";
            context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
            state['channel_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        payment_state: function(val, state) {
            context["field"] = "payment_state";
            context["metadata"] = (objectMetadata ? objectMetadata["payment_state"] : null);
            state['payment_state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        request_id: function(val, state) {
            context["field"] = "request_id";
            context["metadata"] = (objectMetadata ? objectMetadata["request_id"] : null);
            state['request_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        platform: function(val, state) {
            context["field"] = "platform";
            context["metadata"] = (objectMetadata ? objectMetadata["platform"] : null);
            state['platform'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function PaymentUpdate(defaultValues) {
        var privateState = {};
        context["field"] = "application_id";
        context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
        privateState.application_id = defaultValues ?
            (defaultValues["application_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["application_id"], context) :
                null) :
            null;

        context["field"] = "app_payment_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
        privateState.app_payment_id = defaultValues ?
            (defaultValues["app_payment_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_payment_id"], context) :
                null) :
            null;

        context["field"] = "channel_id";
        context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
        privateState.channel_id = defaultValues ?
            (defaultValues["channel_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["channel_id"], context) :
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

        context["field"] = "payment_state";
        context["metadata"] = (objectMetadata ? objectMetadata["payment_state"] : null);
        privateState.payment_state = defaultValues ?
            (defaultValues["payment_state"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payment_state"], context) :
                null) :
            null;

        context["field"] = "request_id";
        context["metadata"] = (objectMetadata ? objectMetadata["request_id"] : null);
        privateState.request_id = defaultValues ?
            (defaultValues["request_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["request_id"], context) :
                null) :
            null;

        context["field"] = "platform";
        context["metadata"] = (objectMetadata ? objectMetadata["platform"] : null);
        privateState.platform = defaultValues ?
            (defaultValues["platform"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["platform"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "app_payment_id": {
                get: function() {
                    context["field"] = "app_payment_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_payment_id, context);
                },
                set: function(val) {
                    setterFunctions['app_payment_id'].call(this, val, privateState);
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
            "payment_state": {
                get: function() {
                    context["field"] = "payment_state";
                    context["metadata"] = (objectMetadata ? objectMetadata["payment_state"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payment_state, context);
                },
                set: function(val) {
                    setterFunctions['payment_state'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "request_id": {
                get: function() {
                    context["field"] = "request_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["request_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.request_id, context);
                },
                set: function(val) {
                    setterFunctions['request_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "platform": {
                get: function() {
                    context["field"] = "platform";
                    context["metadata"] = (objectMetadata ? objectMetadata["platform"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.platform, context);
                },
                set: function(val) {
                    setterFunctions['platform'].call(this, val, privateState);
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
            privateState.application_id = value ? (value["application_id"] ? value["application_id"] : null) : null;
            privateState.app_payment_id = value ? (value["app_payment_id"] ? value["app_payment_id"] : null) : null;
            privateState.channel_id = value ? (value["channel_id"] ? value["channel_id"] : null) : null;
            privateState.error_code = value ? (value["error_code"] ? value["error_code"] : null) : null;
            privateState.message = value ? (value["message"] ? value["message"] : null) : null;
            privateState.payment_state = value ? (value["payment_state"] ? value["payment_state"] : null) : null;
            privateState.request_id = value ? (value["request_id"] ? value["request_id"] : null) : null;
            privateState.platform = value ? (value["platform"] ? value["platform"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(PaymentUpdate);

    //Create new class level validator object
    BaseModel.Validator.call(PaymentUpdate);

    var registerValidatorBackup = PaymentUpdate.registerValidator;

    PaymentUpdate.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(PaymentUpdate.isValid(this, propName, val)) {
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
    //For Operation 'paymentUpdate' with service id 'paymentUpdate9554'
     PaymentUpdate.paymentUpdate = function(params, onCompletion){
        return PaymentUpdate.customVerb('paymentUpdate', params, onCompletion);
     };

    var relations = [];

    PaymentUpdate.relations = relations;

    PaymentUpdate.prototype.isValid = function() {
        return PaymentUpdate.isValid(this);
    };

    PaymentUpdate.prototype.objModelName = "PaymentUpdate";
    PaymentUpdate.prototype.objServiceName = "HIDRMSPayments";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    PaymentUpdate.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDRMSPayments", "PaymentUpdate", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    PaymentUpdate.clone = function(objectToClone) {
        var clonedObj = new PaymentUpdate();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return PaymentUpdate;
});