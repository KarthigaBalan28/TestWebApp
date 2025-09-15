/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SearchHardwareDevice", "objectService" : "HIDObjects"};

    var setterFunctions = {
        filterItem: function(val, state) {
            context["field"] = "filterItem";
            context["metadata"] = (objectMetadata ? objectMetadata["filterItem"] : null);
            state['filterItem'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        deviceId: function(val, state) {
            context["field"] = "deviceId";
            context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
            state['deviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SearchHardwareDevice(defaultValues) {
        var privateState = {};
        context["field"] = "filterItem";
        context["metadata"] = (objectMetadata ? objectMetadata["filterItem"] : null);
        privateState.filterItem = defaultValues ?
            (defaultValues["filterItem"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["filterItem"], context) :
                null) :
            null;

        context["field"] = "deviceId";
        context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
        privateState.deviceId = defaultValues ?
            (defaultValues["deviceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceId"], context) :
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
            "filterItem": {
                get: function() {
                    context["field"] = "filterItem";
                    context["metadata"] = (objectMetadata ? objectMetadata["filterItem"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.filterItem, context);
                },
                set: function(val) {
                    setterFunctions['filterItem'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "deviceId": {
                get: function() {
                    context["field"] = "deviceId";
                    context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceId, context);
                },
                set: function(val) {
                    setterFunctions['deviceId'].call(this, val, privateState);
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
            privateState.filterItem = value ? (value["filterItem"] ? value["filterItem"] : null) : null;
            privateState.deviceId = value ? (value["deviceId"] ? value["deviceId"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SearchHardwareDevice);

    //Create new class level validator object
    BaseModel.Validator.call(SearchHardwareDevice);

    var registerValidatorBackup = SearchHardwareDevice.registerValidator;

    SearchHardwareDevice.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SearchHardwareDevice.isValid(this, propName, val)) {
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
    //For Operation 'searchHardwareDevice' with service id 'searchHardwareDevice4903'
     SearchHardwareDevice.searchHardwareDevice = function(params, onCompletion){
        return SearchHardwareDevice.customVerb('searchHardwareDevice', params, onCompletion);
     };

    //For Operation 'searchDevice' with service id 'SearchDevice5669'
     SearchHardwareDevice.searchDevice = function(params, onCompletion){
        return SearchHardwareDevice.customVerb('searchDevice', params, onCompletion);
     };

    var relations = [];

    SearchHardwareDevice.relations = relations;

    SearchHardwareDevice.prototype.isValid = function() {
        return SearchHardwareDevice.isValid(this);
    };

    SearchHardwareDevice.prototype.objModelName = "SearchHardwareDevice";
    SearchHardwareDevice.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SearchHardwareDevice.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "SearchHardwareDevice", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SearchHardwareDevice.clone = function(objectToClone) {
        var clonedObj = new SearchHardwareDevice();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SearchHardwareDevice;
});