/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SendTXOOBSMS", "objectService" : "HIDTransactionSigning"};

    var setterFunctions = {
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DEVICETYPE: function(val, state) {
            context["field"] = "DEVICETYPE";
            context["metadata"] = (objectMetadata ? objectMetadata["DEVICETYPE"] : null);
            state['DEVICETYPE'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ExternalUserId: function(val, state) {
            context["field"] = "ExternalUserId";
            context["metadata"] = (objectMetadata ? objectMetadata["ExternalUserId"] : null);
            state['ExternalUserId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Message: function(val, state) {
            context["field"] = "Message";
            context["metadata"] = (objectMetadata ? objectMetadata["Message"] : null);
            state['Message'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SendTXOOBSMS(defaultValues) {
        var privateState = {};
        context["field"] = "correlationId";
        context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
        privateState.correlationId = defaultValues ?
            (defaultValues["correlationId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["correlationId"], context) :
                null) :
            null;

        context["field"] = "DEVICETYPE";
        context["metadata"] = (objectMetadata ? objectMetadata["DEVICETYPE"] : null);
        privateState.DEVICETYPE = defaultValues ?
            (defaultValues["DEVICETYPE"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DEVICETYPE"], context) :
                null) :
            null;

        context["field"] = "ExternalUserId";
        context["metadata"] = (objectMetadata ? objectMetadata["ExternalUserId"] : null);
        privateState.ExternalUserId = defaultValues ?
            (defaultValues["ExternalUserId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ExternalUserId"], context) :
                null) :
            null;

        context["field"] = "Message";
        context["metadata"] = (objectMetadata ? objectMetadata["Message"] : null);
        privateState.Message = defaultValues ?
            (defaultValues["Message"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Message"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "DEVICETYPE": {
                get: function() {
                    context["field"] = "DEVICETYPE";
                    context["metadata"] = (objectMetadata ? objectMetadata["DEVICETYPE"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DEVICETYPE, context);
                },
                set: function(val) {
                    setterFunctions['DEVICETYPE'].call(this, val, privateState);
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
            "Message": {
                get: function() {
                    context["field"] = "Message";
                    context["metadata"] = (objectMetadata ? objectMetadata["Message"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Message, context);
                },
                set: function(val) {
                    setterFunctions['Message'].call(this, val, privateState);
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
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
            privateState.DEVICETYPE = value ? (value["DEVICETYPE"] ? value["DEVICETYPE"] : null) : null;
            privateState.ExternalUserId = value ? (value["ExternalUserId"] ? value["ExternalUserId"] : null) : null;
            privateState.Message = value ? (value["Message"] ? value["Message"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SendTXOOBSMS);

    //Create new class level validator object
    BaseModel.Validator.call(SendTXOOBSMS);

    var registerValidatorBackup = SendTXOOBSMS.registerValidator;

    SendTXOOBSMS.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SendTXOOBSMS.isValid(this, propName, val)) {
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
    //For Operation 'sendTXOOBSMS' with service id 'SendTXOOBSMS1311'
     SendTXOOBSMS.sendTXOOBSMS = function(params, onCompletion){
        return SendTXOOBSMS.customVerb('sendTXOOBSMS', params, onCompletion);
     };

    var relations = [];

    SendTXOOBSMS.relations = relations;

    SendTXOOBSMS.prototype.isValid = function() {
        return SendTXOOBSMS.isValid(this);
    };

    SendTXOOBSMS.prototype.objModelName = "SendTXOOBSMS";
    SendTXOOBSMS.prototype.objServiceName = "HIDTransactionSigning";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SendTXOOBSMS.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDTransactionSigning", "SendTXOOBSMS", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SendTXOOBSMS.clone = function(objectToClone) {
        var clonedObj = new SendTXOOBSMS();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SendTXOOBSMS;
});