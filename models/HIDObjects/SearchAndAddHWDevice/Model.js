/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SearchAndAddHWDevice", "objectService" : "HIDObjects"};

    var setterFunctions = {
        active: function(val, state) {
            context["field"] = "active";
            context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
            state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AuthenticatorType: function(val, state) {
            context["field"] = "AuthenticatorType";
            context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
            state['AuthenticatorType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DeviceId: function(val, state) {
            context["field"] = "DeviceId";
            context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
            state['DeviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        externalId: function(val, state) {
            context["field"] = "externalId";
            context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
            state['externalId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        filterItem: function(val, state) {
            context["field"] = "filterItem";
            context["metadata"] = (objectMetadata ? objectMetadata["filterItem"] : null);
            state['filterItem'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        UserId: function(val, state) {
            context["field"] = "UserId";
            context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
            state['UserId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Username: function(val, state) {
            context["field"] = "Username";
            context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
            state['Username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SearchAndAddHWDevice(defaultValues) {
        var privateState = {};
        context["field"] = "active";
        context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
        privateState.active = defaultValues ?
            (defaultValues["active"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context) :
                null) :
            null;

        context["field"] = "AuthenticatorType";
        context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
        privateState.AuthenticatorType = defaultValues ?
            (defaultValues["AuthenticatorType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorType"], context) :
                null) :
            null;

        context["field"] = "DeviceId";
        context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
        privateState.DeviceId = defaultValues ?
            (defaultValues["DeviceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DeviceId"], context) :
                null) :
            null;

        context["field"] = "externalId";
        context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
        privateState.externalId = defaultValues ?
            (defaultValues["externalId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["externalId"], context) :
                null) :
            null;

        context["field"] = "filterItem";
        context["metadata"] = (objectMetadata ? objectMetadata["filterItem"] : null);
        privateState.filterItem = defaultValues ?
            (defaultValues["filterItem"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["filterItem"], context) :
                null) :
            null;

        context["field"] = "UserId";
        context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
        privateState.UserId = defaultValues ?
            (defaultValues["UserId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserId"], context) :
                null) :
            null;

        context["field"] = "Username";
        context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
        privateState.Username = defaultValues ?
            (defaultValues["Username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Username"], context) :
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
            "DeviceId": {
                get: function() {
                    context["field"] = "DeviceId";
                    context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DeviceId, context);
                },
                set: function(val) {
                    setterFunctions['DeviceId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "externalId": {
                get: function() {
                    context["field"] = "externalId";
                    context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.externalId, context);
                },
                set: function(val) {
                    setterFunctions['externalId'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "UserId": {
                get: function() {
                    context["field"] = "UserId";
                    context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserId, context);
                },
                set: function(val) {
                    setterFunctions['UserId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Username": {
                get: function() {
                    context["field"] = "Username";
                    context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Username, context);
                },
                set: function(val) {
                    setterFunctions['Username'].call(this, val, privateState);
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
            privateState.AuthenticatorType = value ? (value["AuthenticatorType"] ? value["AuthenticatorType"] : null) : null;
            privateState.DeviceId = value ? (value["DeviceId"] ? value["DeviceId"] : null) : null;
            privateState.externalId = value ? (value["externalId"] ? value["externalId"] : null) : null;
            privateState.filterItem = value ? (value["filterItem"] ? value["filterItem"] : null) : null;
            privateState.UserId = value ? (value["UserId"] ? value["UserId"] : null) : null;
            privateState.Username = value ? (value["Username"] ? value["Username"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SearchAndAddHWDevice);

    //Create new class level validator object
    BaseModel.Validator.call(SearchAndAddHWDevice);

    var registerValidatorBackup = SearchAndAddHWDevice.registerValidator;

    SearchAndAddHWDevice.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SearchAndAddHWDevice.isValid(this, propName, val)) {
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
    //For Operation 'searchAndAddHWDevice' with service id 'searchHardwareTokenDevice7553'
     SearchAndAddHWDevice.searchAndAddHWDevice = function(params, onCompletion){
        return SearchAndAddHWDevice.customVerb('searchAndAddHWDevice', params, onCompletion);
     };

    var relations = [];

    SearchAndAddHWDevice.relations = relations;

    SearchAndAddHWDevice.prototype.isValid = function() {
        return SearchAndAddHWDevice.isValid(this);
    };

    SearchAndAddHWDevice.prototype.objModelName = "SearchAndAddHWDevice";
    SearchAndAddHWDevice.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SearchAndAddHWDevice.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "SearchAndAddHWDevice", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SearchAndAddHWDevice.clone = function(objectToClone) {
        var clonedObj = new SearchAndAddHWDevice();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SearchAndAddHWDevice;
});