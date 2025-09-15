/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "GetInfinityUserDetailsForConsent", "objectService" : "HIDPSD2TPPObjects"};

    var setterFunctions = {
    };

    //Create the Model Class
    function GetInfinityUserDetailsForConsent(defaultValues) {
        var privateState = {};

        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(GetInfinityUserDetailsForConsent);

    //Create new class level validator object
    BaseModel.Validator.call(GetInfinityUserDetailsForConsent);

    var registerValidatorBackup = GetInfinityUserDetailsForConsent.registerValidator;

    GetInfinityUserDetailsForConsent.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(GetInfinityUserDetailsForConsent.isValid(this, propName, val)) {
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
    //For Operation 'getInfinityUserDetailsForConsent' with service id 'getInfinityUserDetailsForTPP9630'
     GetInfinityUserDetailsForConsent.getInfinityUserDetailsForConsent = function(params, onCompletion){
        return GetInfinityUserDetailsForConsent.customVerb('getInfinityUserDetailsForConsent', params, onCompletion);
     };

    var relations = [];

    GetInfinityUserDetailsForConsent.relations = relations;

    GetInfinityUserDetailsForConsent.prototype.isValid = function() {
        return GetInfinityUserDetailsForConsent.isValid(this);
    };

    GetInfinityUserDetailsForConsent.prototype.objModelName = "GetInfinityUserDetailsForConsent";
    GetInfinityUserDetailsForConsent.prototype.objServiceName = "HIDPSD2TPPObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    GetInfinityUserDetailsForConsent.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDPSD2TPPObjects", "GetInfinityUserDetailsForConsent", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    GetInfinityUserDetailsForConsent.clone = function(objectToClone) {
        var clonedObj = new GetInfinityUserDetailsForConsent();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return GetInfinityUserDetailsForConsent;
});