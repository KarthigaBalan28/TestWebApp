/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "OTPRequest", "objectService" : "HIDTransactionSigning"};

    var setterFunctions = {
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticationType: function(val, state) {
            context["field"] = "AuthenticationType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
            state['AuthenticationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        OTP_SENT: function(val, state) {
            context["field"] = "OTP_SENT";
            context["metadata"] = (objectMetadata ? objectMetadata["OTP_SENT"] : null);
            state['OTP_SENT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function OTPRequest(defaultValues) {
        var privateState = {};
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "AuthenticationType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
        privateState.AuthenticationType = defaultValues ?
            (defaultValues["AuthenticationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context) :
                null) :
            null;

        context["field"] = "OTP_SENT";
        context["metadata"] = (objectMetadata ? objectMetadata["OTP_SENT"] : null);
        privateState.OTP_SENT = defaultValues ?
            (defaultValues["OTP_SENT"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OTP_SENT"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "OTP_SENT": {
                get: function() {
                    context["field"] = "OTP_SENT";
                    context["metadata"] = (objectMetadata ? objectMetadata["OTP_SENT"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OTP_SENT, context);
                },
                set: function(val) {
                    setterFunctions['OTP_SENT'].call(this, val, privateState);
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
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.AuthenticationType = value ? (value["AuthenticationType"] ? value["AuthenticationType"] : null) : null;
            privateState.OTP_SENT = value ? (value["OTP_SENT"] ? value["OTP_SENT"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(OTPRequest);

    //Create new class level validator object
    BaseModel.Validator.call(OTPRequest);

    var registerValidatorBackup = OTPRequest.registerValidator;

    OTPRequest.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(OTPRequest.isValid(this, propName, val)) {
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
    //For Operation 'sendOTP' with service id 'sendOTP1496'
     OTPRequest.sendOTP = function(params, onCompletion){
        return OTPRequest.customVerb('sendOTP', params, onCompletion);
     };

    var relations = [];

    OTPRequest.relations = relations;

    OTPRequest.prototype.isValid = function() {
        return OTPRequest.isValid(this);
    };

    OTPRequest.prototype.objModelName = "OTPRequest";
    OTPRequest.prototype.objServiceName = "HIDTransactionSigning";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    OTPRequest.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDTransactionSigning", "OTPRequest", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    OTPRequest.clone = function(objectToClone) {
        var clonedObj = new OTPRequest();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return OTPRequest;
});