/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "RegisterDevice", "objectService" : "HIDUserManagement"};

    var setterFunctions = {
        detail_CreateDevice: function(val, state) {
            context["field"] = "detail_CreateDevice";
            context["metadata"] = (objectMetadata ? objectMetadata["detail_CreateDevice"] : null);
            state['detail_CreateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        detail_updateDevice: function(val, state) {
            context["field"] = "detail_updateDevice";
            context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
            state['detail_updateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DeviceId: function(val, state) {
            context["field"] = "DeviceId";
            context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
            state['DeviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorCode: function(val, state) {
            context["field"] = "errorCode";
            context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
            state['errorCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorCode_updateDevice: function(val, state) {
            context["field"] = "errorCode_updateDevice";
            context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
            state['errorCode_updateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        provisionMsg: function(val, state) {
            context["field"] = "provisionMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["provisionMsg"] : null);
            state['provisionMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        UserId: function(val, state) {
            context["field"] = "UserId";
            context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
            state['UserId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        usernameWithRandomNo: function(val, state) {
            context["field"] = "usernameWithRandomNo";
            context["metadata"] = (objectMetadata ? objectMetadata["usernameWithRandomNo"] : null);
            state['usernameWithRandomNo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function RegisterDevice(defaultValues) {
        var privateState = {};
        context["field"] = "detail_CreateDevice";
        context["metadata"] = (objectMetadata ? objectMetadata["detail_CreateDevice"] : null);
        privateState.detail_CreateDevice = defaultValues ?
            (defaultValues["detail_CreateDevice"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["detail_CreateDevice"], context) :
                null) :
            null;

        context["field"] = "detail_updateDevice";
        context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
        privateState.detail_updateDevice = defaultValues ?
            (defaultValues["detail_updateDevice"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["detail_updateDevice"], context) :
                null) :
            null;

        context["field"] = "DeviceId";
        context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
        privateState.DeviceId = defaultValues ?
            (defaultValues["DeviceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DeviceId"], context) :
                null) :
            null;

        context["field"] = "errorCode";
        context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
        privateState.errorCode = defaultValues ?
            (defaultValues["errorCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode"], context) :
                null) :
            null;

        context["field"] = "errorCode_updateDevice";
        context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
        privateState.errorCode_updateDevice = defaultValues ?
            (defaultValues["errorCode_updateDevice"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode_updateDevice"], context) :
                null) :
            null;

        context["field"] = "provisionMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["provisionMsg"] : null);
        privateState.provisionMsg = defaultValues ?
            (defaultValues["provisionMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["provisionMsg"], context) :
                null) :
            null;

        context["field"] = "UserId";
        context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
        privateState.UserId = defaultValues ?
            (defaultValues["UserId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserId"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "usernameWithRandomNo";
        context["metadata"] = (objectMetadata ? objectMetadata["usernameWithRandomNo"] : null);
        privateState.usernameWithRandomNo = defaultValues ?
            (defaultValues["usernameWithRandomNo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["usernameWithRandomNo"], context) :
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
            "detail_CreateDevice": {
                get: function() {
                    context["field"] = "detail_CreateDevice";
                    context["metadata"] = (objectMetadata ? objectMetadata["detail_CreateDevice"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.detail_CreateDevice, context);
                },
                set: function(val) {
                    setterFunctions['detail_CreateDevice'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "detail_updateDevice": {
                get: function() {
                    context["field"] = "detail_updateDevice";
                    context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.detail_updateDevice, context);
                },
                set: function(val) {
                    setterFunctions['detail_updateDevice'].call(this, val, privateState);
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
            "errorCode": {
                get: function() {
                    context["field"] = "errorCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorCode, context);
                },
                set: function(val) {
                    setterFunctions['errorCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errorCode_updateDevice": {
                get: function() {
                    context["field"] = "errorCode_updateDevice";
                    context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorCode_updateDevice, context);
                },
                set: function(val) {
                    setterFunctions['errorCode_updateDevice'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "provisionMsg": {
                get: function() {
                    context["field"] = "provisionMsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["provisionMsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.provisionMsg, context);
                },
                set: function(val) {
                    setterFunctions['provisionMsg'].call(this, val, privateState);
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
            "usernameWithRandomNo": {
                get: function() {
                    context["field"] = "usernameWithRandomNo";
                    context["metadata"] = (objectMetadata ? objectMetadata["usernameWithRandomNo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.usernameWithRandomNo, context);
                },
                set: function(val) {
                    setterFunctions['usernameWithRandomNo'].call(this, val, privateState);
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
            privateState.detail_CreateDevice = value ? (value["detail_CreateDevice"] ? value["detail_CreateDevice"] : null) : null;
            privateState.detail_updateDevice = value ? (value["detail_updateDevice"] ? value["detail_updateDevice"] : null) : null;
            privateState.DeviceId = value ? (value["DeviceId"] ? value["DeviceId"] : null) : null;
            privateState.errorCode = value ? (value["errorCode"] ? value["errorCode"] : null) : null;
            privateState.errorCode_updateDevice = value ? (value["errorCode_updateDevice"] ? value["errorCode_updateDevice"] : null) : null;
            privateState.provisionMsg = value ? (value["provisionMsg"] ? value["provisionMsg"] : null) : null;
            privateState.UserId = value ? (value["UserId"] ? value["UserId"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.usernameWithRandomNo = value ? (value["usernameWithRandomNo"] ? value["usernameWithRandomNo"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(RegisterDevice);

    //Create new class level validator object
    BaseModel.Validator.call(RegisterDevice);

    var registerValidatorBackup = RegisterDevice.registerValidator;

    RegisterDevice.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(RegisterDevice.isValid(this, propName, val)) {
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
    //For Operation 'getProvisioningMsg' with service id 'getInviteCode8954'
     RegisterDevice.getProvisioningMsg = function(params, onCompletion){
        return RegisterDevice.customVerb('getProvisioningMsg', params, onCompletion);
     };

    var relations = [];

    RegisterDevice.relations = relations;

    RegisterDevice.prototype.isValid = function() {
        return RegisterDevice.isValid(this);
    };

    RegisterDevice.prototype.objModelName = "RegisterDevice";
    RegisterDevice.prototype.objServiceName = "HIDUserManagement";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    RegisterDevice.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDUserManagement", "RegisterDevice", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    RegisterDevice.clone = function(objectToClone) {
        var clonedObj = new RegisterDevice();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return RegisterDevice;
});