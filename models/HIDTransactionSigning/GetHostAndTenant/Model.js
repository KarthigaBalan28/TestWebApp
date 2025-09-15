/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "GetHostAndTenant", "objectService" : "HIDTransactionSigning"};

    var setterFunctions = {
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        host: function(val, state) {
            context["field"] = "host";
            context["metadata"] = (objectMetadata ? objectMetadata["host"] : null);
            state['host'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tenant: function(val, state) {
            context["field"] = "tenant";
            context["metadata"] = (objectMetadata ? objectMetadata["tenant"] : null);
            state['tenant'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorMessage: function(val, state) {
            context["field"] = "errorMessage";
            context["metadata"] = (objectMetadata ? objectMetadata["errorMessage"] : null);
            state['errorMessage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function GetHostAndTenant(defaultValues) {
        var privateState = {};
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ?
            (defaultValues["success"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) :
                null) :
            null;

        context["field"] = "host";
        context["metadata"] = (objectMetadata ? objectMetadata["host"] : null);
        privateState.host = defaultValues ?
            (defaultValues["host"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["host"], context) :
                null) :
            null;

        context["field"] = "tenant";
        context["metadata"] = (objectMetadata ? objectMetadata["tenant"] : null);
        privateState.tenant = defaultValues ?
            (defaultValues["tenant"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tenant"], context) :
                null) :
            null;

        context["field"] = "errorMessage";
        context["metadata"] = (objectMetadata ? objectMetadata["errorMessage"] : null);
        privateState.errorMessage = defaultValues ?
            (defaultValues["errorMessage"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorMessage"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "success": {
                get: function() {
                    context["field"] = "success";
                    context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.success, context);
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "host": {
                get: function() {
                    context["field"] = "host";
                    context["metadata"] = (objectMetadata ? objectMetadata["host"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.host, context);
                },
                set: function(val) {
                    setterFunctions['host'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tenant": {
                get: function() {
                    context["field"] = "tenant";
                    context["metadata"] = (objectMetadata ? objectMetadata["tenant"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tenant, context);
                },
                set: function(val) {
                    setterFunctions['tenant'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errorMessage": {
                get: function() {
                    context["field"] = "errorMessage";
                    context["metadata"] = (objectMetadata ? objectMetadata["errorMessage"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorMessage, context);
                },
                set: function(val) {
                    setterFunctions['errorMessage'].call(this, val, privateState);
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
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.host = value ? (value["host"] ? value["host"] : null) : null;
            privateState.tenant = value ? (value["tenant"] ? value["tenant"] : null) : null;
            privateState.errorMessage = value ? (value["errorMessage"] ? value["errorMessage"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(GetHostAndTenant);

    //Create new class level validator object
    BaseModel.Validator.call(GetHostAndTenant);

    var registerValidatorBackup = GetHostAndTenant.registerValidator;

    GetHostAndTenant.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(GetHostAndTenant.isValid(this, propName, val)) {
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
    //For Operation 'getServiceURL' with service id 'getServiceURLAndDomain9571'
     GetHostAndTenant.getServiceURL = function(params, onCompletion){
        return GetHostAndTenant.customVerb('getServiceURL', params, onCompletion);
     };

    var relations = [];

    GetHostAndTenant.relations = relations;

    GetHostAndTenant.prototype.isValid = function() {
        return GetHostAndTenant.isValid(this);
    };

    GetHostAndTenant.prototype.objModelName = "GetHostAndTenant";
    GetHostAndTenant.prototype.objServiceName = "HIDTransactionSigning";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    GetHostAndTenant.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDTransactionSigning", "GetHostAndTenant", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    GetHostAndTenant.clone = function(objectToClone) {
        var clonedObj = new GetHostAndTenant();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return GetHostAndTenant;
});