/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddAuthenticatorTXOOB", "objectService" : "HIDObjects"};

    var setterFunctions = {
        ExternalUserId: function(val, state) {
            context["field"] = "ExternalUserId";
            context["metadata"] = (objectMetadata ? objectMetadata["ExternalUserId"] : null);
            state['ExternalUserId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Authid: function(val, state) {
            context["field"] = "Authid";
            context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
            state['Authid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        active_status: function(val, state) {
            context["field"] = "active_status";
            context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
            state['active_status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scimType_TXOTP: function(val, state) {
            context["field"] = "scimType_TXOTP";
            context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
            state['scimType_TXOTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AddAuthenticatorTXOOB(defaultValues) {
        var privateState = {};
        context["field"] = "ExternalUserId";
        context["metadata"] = (objectMetadata ? objectMetadata["ExternalUserId"] : null);
        privateState.ExternalUserId = defaultValues ?
            (defaultValues["ExternalUserId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ExternalUserId"], context) :
                null) :
            null;

        context["field"] = "Authid";
        context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
        privateState.Authid = defaultValues ?
            (defaultValues["Authid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Authid"], context) :
                null) :
            null;

        context["field"] = "active_status";
        context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
        privateState.active_status = defaultValues ?
            (defaultValues["active_status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active_status"], context) :
                null) :
            null;

        context["field"] = "scimType_TXOTP";
        context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
        privateState.scimType_TXOTP = defaultValues ?
            (defaultValues["scimType_TXOTP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_TXOTP"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "Authid": {
                get: function() {
                    context["field"] = "Authid";
                    context["metadata"] = (objectMetadata ? objectMetadata["Authid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Authid, context);
                },
                set: function(val) {
                    setterFunctions['Authid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "active_status": {
                get: function() {
                    context["field"] = "active_status";
                    context["metadata"] = (objectMetadata ? objectMetadata["active_status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.active_status, context);
                },
                set: function(val) {
                    setterFunctions['active_status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "scimType_TXOTP": {
                get: function() {
                    context["field"] = "scimType_TXOTP";
                    context["metadata"] = (objectMetadata ? objectMetadata["scimType_TXOTP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scimType_TXOTP, context);
                },
                set: function(val) {
                    setterFunctions['scimType_TXOTP'].call(this, val, privateState);
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
            privateState.ExternalUserId = value ? (value["ExternalUserId"] ? value["ExternalUserId"] : null) : null;
            privateState.Authid = value ? (value["Authid"] ? value["Authid"] : null) : null;
            privateState.active_status = value ? (value["active_status"] ? value["active_status"] : null) : null;
            privateState.scimType_TXOTP = value ? (value["scimType_TXOTP"] ? value["scimType_TXOTP"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AddAuthenticatorTXOOB);

    //Create new class level validator object
    BaseModel.Validator.call(AddAuthenticatorTXOOB);

    var registerValidatorBackup = AddAuthenticatorTXOOB.registerValidator;

    AddAuthenticatorTXOOB.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AddAuthenticatorTXOOB.isValid(this, propName, val)) {
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
    //For Operation 'AddAuthenticatorTXOOB' with service id 'TXOOBAuth4246'
     AddAuthenticatorTXOOB.AddAuthenticatorTXOOB = function(params, onCompletion){
        return AddAuthenticatorTXOOB.customVerb('AddAuthenticatorTXOOB', params, onCompletion);
     };

    var relations = [];

    AddAuthenticatorTXOOB.relations = relations;

    AddAuthenticatorTXOOB.prototype.isValid = function() {
        return AddAuthenticatorTXOOB.isValid(this);
    };

    AddAuthenticatorTXOOB.prototype.objModelName = "AddAuthenticatorTXOOB";
    AddAuthenticatorTXOOB.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AddAuthenticatorTXOOB.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddAuthenticatorTXOOB", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AddAuthenticatorTXOOB.clone = function(objectToClone) {
        var clonedObj = new AddAuthenticatorTXOOB();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AddAuthenticatorTXOOB;
});