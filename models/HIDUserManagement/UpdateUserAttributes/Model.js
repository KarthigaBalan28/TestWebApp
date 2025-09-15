/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "UpdateUserAttributes", "objectService" : "HIDUserManagement"};

    var setterFunctions = {
        externalId: function(val, state) {
            context["field"] = "externalId";
            context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
            state['externalId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        mobile: function(val, state) {
            context["field"] = "mobile";
            context["metadata"] = (objectMetadata ? objectMetadata["mobile"] : null);
            state['mobile'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        firstname: function(val, state) {
            context["field"] = "firstname";
            context["metadata"] = (objectMetadata ? objectMetadata["firstname"] : null);
            state['firstname'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastname: function(val, state) {
            context["field"] = "lastname";
            context["metadata"] = (objectMetadata ? objectMetadata["lastname"] : null);
            state['lastname'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        correlationId: function(val, state) {
            context["field"] = "correlationId";
            context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
            state['correlationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errMsg: function(val, state) {
            context["field"] = "errMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errMsg"] : null);
            state['errMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errorCode: function(val, state) {
            context["field"] = "errorCode";
            context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
            state['errorCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function UpdateUserAttributes(defaultValues) {
        var privateState = {};
        context["field"] = "externalId";
        context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
        privateState.externalId = defaultValues ?
            (defaultValues["externalId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["externalId"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "mobile";
        context["metadata"] = (objectMetadata ? objectMetadata["mobile"] : null);
        privateState.mobile = defaultValues ?
            (defaultValues["mobile"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["mobile"], context) :
                null) :
            null;

        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ?
            (defaultValues["email"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) :
                null) :
            null;

        context["field"] = "firstname";
        context["metadata"] = (objectMetadata ? objectMetadata["firstname"] : null);
        privateState.firstname = defaultValues ?
            (defaultValues["firstname"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["firstname"], context) :
                null) :
            null;

        context["field"] = "lastname";
        context["metadata"] = (objectMetadata ? objectMetadata["lastname"] : null);
        privateState.lastname = defaultValues ?
            (defaultValues["lastname"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastname"], context) :
                null) :
            null;

        context["field"] = "correlationId";
        context["metadata"] = (objectMetadata ? objectMetadata["correlationId"] : null);
        privateState.correlationId = defaultValues ?
            (defaultValues["correlationId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["correlationId"], context) :
                null) :
            null;

        context["field"] = "errMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errMsg"] : null);
        privateState.errMsg = defaultValues ?
            (defaultValues["errMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errMsg"], context) :
                null) :
            null;

        context["field"] = "errorCode";
        context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
        privateState.errorCode = defaultValues ?
            (defaultValues["errorCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "mobile": {
                get: function() {
                    context["field"] = "mobile";
                    context["metadata"] = (objectMetadata ? objectMetadata["mobile"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.mobile, context);
                },
                set: function(val) {
                    setterFunctions['mobile'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "email": {
                get: function() {
                    context["field"] = "email";
                    context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.email, context);
                },
                set: function(val) {
                    setterFunctions['email'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "firstname": {
                get: function() {
                    context["field"] = "firstname";
                    context["metadata"] = (objectMetadata ? objectMetadata["firstname"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.firstname, context);
                },
                set: function(val) {
                    setterFunctions['firstname'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastname": {
                get: function() {
                    context["field"] = "lastname";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastname"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastname, context);
                },
                set: function(val) {
                    setterFunctions['lastname'].call(this, val, privateState);
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
            "errMsg": {
                get: function() {
                    context["field"] = "errMsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errMsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errMsg, context);
                },
                set: function(val) {
                    setterFunctions['errMsg'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.externalId = value ? (value["externalId"] ? value["externalId"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.mobile = value ? (value["mobile"] ? value["mobile"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.firstname = value ? (value["firstname"] ? value["firstname"] : null) : null;
            privateState.lastname = value ? (value["lastname"] ? value["lastname"] : null) : null;
            privateState.correlationId = value ? (value["correlationId"] ? value["correlationId"] : null) : null;
            privateState.errMsg = value ? (value["errMsg"] ? value["errMsg"] : null) : null;
            privateState.errorCode = value ? (value["errorCode"] ? value["errorCode"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(UpdateUserAttributes);

    //Create new class level validator object
    BaseModel.Validator.call(UpdateUserAttributes);

    var registerValidatorBackup = UpdateUserAttributes.registerValidator;

    UpdateUserAttributes.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(UpdateUserAttributes.isValid(this, propName, val)) {
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
    //For Operation 'updateUserAttributes' with service id 'updateUserAttributes1662'
     UpdateUserAttributes.updateUserAttributes = function(params, onCompletion){
        return UpdateUserAttributes.customVerb('updateUserAttributes', params, onCompletion);
     };

    var relations = [];

    UpdateUserAttributes.relations = relations;

    UpdateUserAttributes.prototype.isValid = function() {
        return UpdateUserAttributes.isValid(this);
    };

    UpdateUserAttributes.prototype.objModelName = "UpdateUserAttributes";
    UpdateUserAttributes.prototype.objServiceName = "HIDUserManagement";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    UpdateUserAttributes.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDUserManagement", "UpdateUserAttributes", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    UpdateUserAttributes.clone = function(objectToClone) {
        var clonedObj = new UpdateUserAttributes();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return UpdateUserAttributes;
});