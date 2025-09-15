/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "PasswordPolicy", "objectService" : "HIDObjects"};

    var setterFunctions = {
        maxLength: function(val, state) {
            context["field"] = "maxLength";
            context["metadata"] = (objectMetadata ? objectMetadata["maxLength"] : null);
            state['maxLength'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        minDiffChars: function(val, state) {
            context["field"] = "minDiffChars";
            context["metadata"] = (objectMetadata ? objectMetadata["minDiffChars"] : null);
            state['minDiffChars'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        minLength: function(val, state) {
            context["field"] = "minLength";
            context["metadata"] = (objectMetadata ? objectMetadata["minLength"] : null);
            state['minLength'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        notEnglish: function(val, state) {
            context["field"] = "notEnglish";
            context["metadata"] = (objectMetadata ? objectMetadata["notEnglish"] : null);
            state['notEnglish'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        notSequence: function(val, state) {
            context["field"] = "notSequence";
            context["metadata"] = (objectMetadata ? objectMetadata["notSequence"] : null);
            state['notSequence'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        notUserAttribute: function(val, state) {
            context["field"] = "notUserAttribute";
            context["metadata"] = (objectMetadata ? objectMetadata["notUserAttribute"] : null);
            state['notUserAttribute'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        numOrAlpha: function(val, state) {
            context["field"] = "numOrAlpha";
            context["metadata"] = (objectMetadata ? objectMetadata["numOrAlpha"] : null);
            state['numOrAlpha'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function PasswordPolicy(defaultValues) {
        var privateState = {};
        context["field"] = "maxLength";
        context["metadata"] = (objectMetadata ? objectMetadata["maxLength"] : null);
        privateState.maxLength = defaultValues ?
            (defaultValues["maxLength"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["maxLength"], context) :
                null) :
            null;

        context["field"] = "minDiffChars";
        context["metadata"] = (objectMetadata ? objectMetadata["minDiffChars"] : null);
        privateState.minDiffChars = defaultValues ?
            (defaultValues["minDiffChars"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["minDiffChars"], context) :
                null) :
            null;

        context["field"] = "minLength";
        context["metadata"] = (objectMetadata ? objectMetadata["minLength"] : null);
        privateState.minLength = defaultValues ?
            (defaultValues["minLength"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["minLength"], context) :
                null) :
            null;

        context["field"] = "notEnglish";
        context["metadata"] = (objectMetadata ? objectMetadata["notEnglish"] : null);
        privateState.notEnglish = defaultValues ?
            (defaultValues["notEnglish"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["notEnglish"], context) :
                null) :
            null;

        context["field"] = "notSequence";
        context["metadata"] = (objectMetadata ? objectMetadata["notSequence"] : null);
        privateState.notSequence = defaultValues ?
            (defaultValues["notSequence"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["notSequence"], context) :
                null) :
            null;

        context["field"] = "notUserAttribute";
        context["metadata"] = (objectMetadata ? objectMetadata["notUserAttribute"] : null);
        privateState.notUserAttribute = defaultValues ?
            (defaultValues["notUserAttribute"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["notUserAttribute"], context) :
                null) :
            null;

        context["field"] = "numOrAlpha";
        context["metadata"] = (objectMetadata ? objectMetadata["numOrAlpha"] : null);
        privateState.numOrAlpha = defaultValues ?
            (defaultValues["numOrAlpha"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["numOrAlpha"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "maxLength": {
                get: function() {
                    context["field"] = "maxLength";
                    context["metadata"] = (objectMetadata ? objectMetadata["maxLength"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.maxLength, context);
                },
                set: function(val) {
                    setterFunctions['maxLength'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "minDiffChars": {
                get: function() {
                    context["field"] = "minDiffChars";
                    context["metadata"] = (objectMetadata ? objectMetadata["minDiffChars"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.minDiffChars, context);
                },
                set: function(val) {
                    setterFunctions['minDiffChars'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "minLength": {
                get: function() {
                    context["field"] = "minLength";
                    context["metadata"] = (objectMetadata ? objectMetadata["minLength"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.minLength, context);
                },
                set: function(val) {
                    setterFunctions['minLength'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "notEnglish": {
                get: function() {
                    context["field"] = "notEnglish";
                    context["metadata"] = (objectMetadata ? objectMetadata["notEnglish"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.notEnglish, context);
                },
                set: function(val) {
                    setterFunctions['notEnglish'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "notSequence": {
                get: function() {
                    context["field"] = "notSequence";
                    context["metadata"] = (objectMetadata ? objectMetadata["notSequence"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.notSequence, context);
                },
                set: function(val) {
                    setterFunctions['notSequence'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "notUserAttribute": {
                get: function() {
                    context["field"] = "notUserAttribute";
                    context["metadata"] = (objectMetadata ? objectMetadata["notUserAttribute"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.notUserAttribute, context);
                },
                set: function(val) {
                    setterFunctions['notUserAttribute'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "numOrAlpha": {
                get: function() {
                    context["field"] = "numOrAlpha";
                    context["metadata"] = (objectMetadata ? objectMetadata["numOrAlpha"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.numOrAlpha, context);
                },
                set: function(val) {
                    setterFunctions['numOrAlpha'].call(this, val, privateState);
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
            privateState.maxLength = value ? (value["maxLength"] ? value["maxLength"] : null) : null;
            privateState.minDiffChars = value ? (value["minDiffChars"] ? value["minDiffChars"] : null) : null;
            privateState.minLength = value ? (value["minLength"] ? value["minLength"] : null) : null;
            privateState.notEnglish = value ? (value["notEnglish"] ? value["notEnglish"] : null) : null;
            privateState.notSequence = value ? (value["notSequence"] ? value["notSequence"] : null) : null;
            privateState.notUserAttribute = value ? (value["notUserAttribute"] ? value["notUserAttribute"] : null) : null;
            privateState.numOrAlpha = value ? (value["numOrAlpha"] ? value["numOrAlpha"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(PasswordPolicy);

    //Create new class level validator object
    BaseModel.Validator.call(PasswordPolicy);

    var registerValidatorBackup = PasswordPolicy.registerValidator;

    PasswordPolicy.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(PasswordPolicy.isValid(this, propName, val)) {
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
    //For Operation 'getPasswordPolicy' with service id 'getPasswordPolicy9554'
     PasswordPolicy.getPasswordPolicy = function(params, onCompletion){
        return PasswordPolicy.customVerb('getPasswordPolicy', params, onCompletion);
     };

    var relations = [];

    PasswordPolicy.relations = relations;

    PasswordPolicy.prototype.isValid = function() {
        return PasswordPolicy.isValid(this);
    };

    PasswordPolicy.prototype.objModelName = "PasswordPolicy";
    PasswordPolicy.prototype.objServiceName = "HIDObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    PasswordPolicy.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "PasswordPolicy", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    PasswordPolicy.clone = function(objectToClone) {
        var clonedObj = new PasswordPolicy();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return PasswordPolicy;
});