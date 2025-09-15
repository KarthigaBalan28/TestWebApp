/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "GetPSD2AccountListForPayments", "objectService" : "HIDPSD2TPPObjects"};

    var setterFunctions = {
    };

    //Create the Model Class
    function GetPSD2AccountListForPayments(defaultValues) {
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
    BaseModel.isParentOf(GetPSD2AccountListForPayments);

    //Create new class level validator object
    BaseModel.Validator.call(GetPSD2AccountListForPayments);

    var registerValidatorBackup = GetPSD2AccountListForPayments.registerValidator;

    GetPSD2AccountListForPayments.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(GetPSD2AccountListForPayments.isValid(this, propName, val)) {
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
    //For Operation 'getPSD2AccountListForPayments' with service id 'getPSD2AccountsList6244'
     GetPSD2AccountListForPayments.getPSD2AccountListForPayments = function(params, onCompletion){
        return GetPSD2AccountListForPayments.customVerb('getPSD2AccountListForPayments', params, onCompletion);
     };

    var relations = [];

    GetPSD2AccountListForPayments.relations = relations;

    GetPSD2AccountListForPayments.prototype.isValid = function() {
        return GetPSD2AccountListForPayments.isValid(this);
    };

    GetPSD2AccountListForPayments.prototype.objModelName = "GetPSD2AccountListForPayments";
    GetPSD2AccountListForPayments.prototype.objServiceName = "HIDPSD2TPPObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    GetPSD2AccountListForPayments.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDPSD2TPPObjects", "GetPSD2AccountListForPayments", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    GetPSD2AccountListForPayments.clone = function(objectToClone) {
        var clonedObj = new GetPSD2AccountListForPayments();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return GetPSD2AccountListForPayments;
});