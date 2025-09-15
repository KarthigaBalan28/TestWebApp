/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "authenticatorSelection", "objectService" : "HIDUserManagement"};

    var setterFunctions = {
        residentKey: function(val, state) {
            context["field"] = "residentKey";
            context["metadata"] = (objectMetadata ? objectMetadata["residentKey"] : null);
            state['residentKey'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userVerification: function(val, state) {
            context["field"] = "userVerification";
            context["metadata"] = (objectMetadata ? objectMetadata["userVerification"] : null);
            state['userVerification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function authenticatorSelection(defaultValues) {
        var privateState = {};
        context["field"] = "residentKey";
        context["metadata"] = (objectMetadata ? objectMetadata["residentKey"] : null);
        privateState.residentKey = defaultValues ?
            (defaultValues["residentKey"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["residentKey"], context) :
                null) :
            null;

        context["field"] = "userVerification";
        context["metadata"] = (objectMetadata ? objectMetadata["userVerification"] : null);
        privateState.userVerification = defaultValues ?
            (defaultValues["userVerification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userVerification"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "residentKey": {
                get: function() {
                    context["field"] = "residentKey";
                    context["metadata"] = (objectMetadata ? objectMetadata["residentKey"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.residentKey, context);
                },
                set: function(val) {
                    setterFunctions['residentKey'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userVerification": {
                get: function() {
                    context["field"] = "userVerification";
                    context["metadata"] = (objectMetadata ? objectMetadata["userVerification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userVerification, context);
                },
                set: function(val) {
                    setterFunctions['userVerification'].call(this, val, privateState);
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
            privateState.residentKey = value ? (value["residentKey"] ? value["residentKey"] : null) : null;
            privateState.userVerification = value ? (value["userVerification"] ? value["userVerification"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(authenticatorSelection);

    //Create new class level validator object
    BaseModel.Validator.call(authenticatorSelection);

    var registerValidatorBackup = authenticatorSelection.registerValidator;

    authenticatorSelection.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(authenticatorSelection.isValid(this, propName, val)) {
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
    var relations = [];

    authenticatorSelection.relations = relations;

    authenticatorSelection.prototype.isValid = function() {
        return authenticatorSelection.isValid(this);
    };

    authenticatorSelection.prototype.objModelName = "authenticatorSelection";
    authenticatorSelection.prototype.objServiceName = "HIDUserManagement";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    authenticatorSelection.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDUserManagement", "authenticatorSelection", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    authenticatorSelection.clone = function(objectToClone) {
        var clonedObj = new authenticatorSelection();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return authenticatorSelection;
});