/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "PaymentSign", "objectService" : "HIDRMSPayments"};

    var setterFunctions = {
        application_id: function(val, state) {
            context["field"] = "application_id";
            context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
            state['application_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_action_id: function(val, state) {
            context["field"] = "app_action_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
            state['app_action_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_payment_id: function(val, state) {
            context["field"] = "app_payment_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
            state['app_payment_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_session_id: function(val, state) {
            context["field"] = "app_session_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_session_id"] : null);
            state['app_session_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_user_id: function(val, state) {
            context["field"] = "app_user_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
            state['app_user_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        channel_id: function(val, state) {
            context["field"] = "channel_id";
            context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
            state['channel_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        client_ip: function(val, state) {
            context["field"] = "client_ip";
            context["metadata"] = (objectMetadata ? objectMetadata["client_ip"] : null);
            state['client_ip'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        security_item_type: function(val, state) {
            context["field"] = "security_item_type";
            context["metadata"] = (objectMetadata ? objectMetadata["security_item_type"] : null);
            state['security_item_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        signature_state: function(val, state) {
            context["field"] = "signature_state";
            context["metadata"] = (objectMetadata ? objectMetadata["signature_state"] : null);
            state['signature_state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tm_action_id: function(val, state) {
            context["field"] = "tm_action_id";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_action_id"] : null);
            state['tm_action_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tm_device_tag: function(val, state) {
            context["field"] = "tm_device_tag";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_device_tag"] : null);
            state['tm_device_tag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tm_session_sid: function(val, state) {
            context["field"] = "tm_session_sid";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_session_sid"] : null);
            state['tm_session_sid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        platform: function(val, state) {
            context["field"] = "platform";
            context["metadata"] = (objectMetadata ? objectMetadata["platform"] : null);
            state['platform'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function PaymentSign(defaultValues) {
        var privateState = {};
        context["field"] = "application_id";
        context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
        privateState.application_id = defaultValues ?
            (defaultValues["application_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["application_id"], context) :
                null) :
            null;

        context["field"] = "app_action_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
        privateState.app_action_id = defaultValues ?
            (defaultValues["app_action_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_action_id"], context) :
                null) :
            null;

        context["field"] = "app_payment_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
        privateState.app_payment_id = defaultValues ?
            (defaultValues["app_payment_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_payment_id"], context) :
                null) :
            null;

        context["field"] = "app_session_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_session_id"] : null);
        privateState.app_session_id = defaultValues ?
            (defaultValues["app_session_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_session_id"], context) :
                null) :
            null;

        context["field"] = "app_user_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
        privateState.app_user_id = defaultValues ?
            (defaultValues["app_user_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_user_id"], context) :
                null) :
            null;

        context["field"] = "channel_id";
        context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
        privateState.channel_id = defaultValues ?
            (defaultValues["channel_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["channel_id"], context) :
                null) :
            null;

        context["field"] = "client_ip";
        context["metadata"] = (objectMetadata ? objectMetadata["client_ip"] : null);
        privateState.client_ip = defaultValues ?
            (defaultValues["client_ip"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["client_ip"], context) :
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

        context["field"] = "security_item_type";
        context["metadata"] = (objectMetadata ? objectMetadata["security_item_type"] : null);
        privateState.security_item_type = defaultValues ?
            (defaultValues["security_item_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["security_item_type"], context) :
                null) :
            null;

        context["field"] = "signature_state";
        context["metadata"] = (objectMetadata ? objectMetadata["signature_state"] : null);
        privateState.signature_state = defaultValues ?
            (defaultValues["signature_state"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["signature_state"], context) :
                null) :
            null;

        context["field"] = "tm_action_id";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_action_id"] : null);
        privateState.tm_action_id = defaultValues ?
            (defaultValues["tm_action_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_action_id"], context) :
                null) :
            null;

        context["field"] = "tm_device_tag";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_device_tag"] : null);
        privateState.tm_device_tag = defaultValues ?
            (defaultValues["tm_device_tag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_device_tag"], context) :
                null) :
            null;

        context["field"] = "tm_session_sid";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_session_sid"] : null);
        privateState.tm_session_sid = defaultValues ?
            (defaultValues["tm_session_sid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_session_sid"], context) :
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
            "app_session_id": {
                get: function() {
                    context["field"] = "app_session_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_session_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_session_id, context);
                },
                set: function(val) {
                    setterFunctions['app_session_id'].call(this, val, privateState);
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
            "client_ip": {
                get: function() {
                    context["field"] = "client_ip";
                    context["metadata"] = (objectMetadata ? objectMetadata["client_ip"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.client_ip, context);
                },
                set: function(val) {
                    setterFunctions['client_ip'].call(this, val, privateState);
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
            "security_item_type": {
                get: function() {
                    context["field"] = "security_item_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["security_item_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.security_item_type, context);
                },
                set: function(val) {
                    setterFunctions['security_item_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "signature_state": {
                get: function() {
                    context["field"] = "signature_state";
                    context["metadata"] = (objectMetadata ? objectMetadata["signature_state"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.signature_state, context);
                },
                set: function(val) {
                    setterFunctions['signature_state'].call(this, val, privateState);
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
            "tm_device_tag": {
                get: function() {
                    context["field"] = "tm_device_tag";
                    context["metadata"] = (objectMetadata ? objectMetadata["tm_device_tag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tm_device_tag, context);
                },
                set: function(val) {
                    setterFunctions['tm_device_tag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tm_session_sid": {
                get: function() {
                    context["field"] = "tm_session_sid";
                    context["metadata"] = (objectMetadata ? objectMetadata["tm_session_sid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tm_session_sid, context);
                },
                set: function(val) {
                    setterFunctions['tm_session_sid'].call(this, val, privateState);
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
            privateState.app_action_id = value ? (value["app_action_id"] ? value["app_action_id"] : null) : null;
            privateState.app_payment_id = value ? (value["app_payment_id"] ? value["app_payment_id"] : null) : null;
            privateState.app_session_id = value ? (value["app_session_id"] ? value["app_session_id"] : null) : null;
            privateState.app_user_id = value ? (value["app_user_id"] ? value["app_user_id"] : null) : null;
            privateState.channel_id = value ? (value["channel_id"] ? value["channel_id"] : null) : null;
            privateState.client_ip = value ? (value["client_ip"] ? value["client_ip"] : null) : null;
            privateState.error_code = value ? (value["error_code"] ? value["error_code"] : null) : null;
            privateState.message = value ? (value["message"] ? value["message"] : null) : null;
            privateState.payment_state = value ? (value["payment_state"] ? value["payment_state"] : null) : null;
            privateState.request_id = value ? (value["request_id"] ? value["request_id"] : null) : null;
            privateState.security_item_type = value ? (value["security_item_type"] ? value["security_item_type"] : null) : null;
            privateState.signature_state = value ? (value["signature_state"] ? value["signature_state"] : null) : null;
            privateState.tm_action_id = value ? (value["tm_action_id"] ? value["tm_action_id"] : null) : null;
            privateState.tm_device_tag = value ? (value["tm_device_tag"] ? value["tm_device_tag"] : null) : null;
            privateState.tm_session_sid = value ? (value["tm_session_sid"] ? value["tm_session_sid"] : null) : null;
            privateState.platform = value ? (value["platform"] ? value["platform"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(PaymentSign);

    //Create new class level validator object
    BaseModel.Validator.call(PaymentSign);

    var registerValidatorBackup = PaymentSign.registerValidator;

    PaymentSign.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(PaymentSign.isValid(this, propName, val)) {
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
    //For Operation 'paymentSign' with service id 'paymentSign6562'
     PaymentSign.paymentSign = function(params, onCompletion){
        return PaymentSign.customVerb('paymentSign', params, onCompletion);
     };

    var relations = [];

    PaymentSign.relations = relations;

    PaymentSign.prototype.isValid = function() {
        return PaymentSign.isValid(this);
    };

    PaymentSign.prototype.objModelName = "PaymentSign";
    PaymentSign.prototype.objServiceName = "HIDRMSPayments";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    PaymentSign.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDRMSPayments", "PaymentSign", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    PaymentSign.clone = function(objectToClone) {
        var clonedObj = new PaymentSign();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return PaymentSign;
});