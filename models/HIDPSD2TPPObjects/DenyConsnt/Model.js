/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "DenyConsnt", "objectService" : "HIDPSD2TPPObjects"};

    var setterFunctions = {
        consentId: function(val, state) {
            context["field"] = "consentId";
            context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
            state['consentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function DenyConsnt(defaultValues) {
        var privateState = {};
        context["field"] = "consentId";
        context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
        privateState.consentId = defaultValues ?
            (defaultValues["consentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consentId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "consentId": {
                get: function() {
                    context["field"] = "consentId";
                    context["metadata"] = (objectMetadata ? objectMetadata["consentId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consentId, context);
                },
                set: function(val) {
                    setterFunctions['consentId'].call(this, val, privateState);
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
            privateState.consentId = value ? (value["consentId"] ? value["consentId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(DenyConsnt);

    //Create new class level validator object
    BaseModel.Validator.call(DenyConsnt);

    var registerValidatorBackup = DenyConsnt.registerValidator;

    DenyConsnt.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(DenyConsnt.isValid(this, propName, val)) {
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
    //For Operation 'denyConsnt' with service id 'deleteTPPConsent1691'
     DenyConsnt.denyConsnt = function(params, onCompletion){
        return DenyConsnt.customVerb('denyConsnt', params, onCompletion);
     };

    var relations = [];

    DenyConsnt.relations = relations;

    DenyConsnt.prototype.isValid = function() {
        return DenyConsnt.isValid(this);
    };

    DenyConsnt.prototype.objModelName = "DenyConsnt";
    DenyConsnt.prototype.objServiceName = "HIDPSD2TPPObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    DenyConsnt.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDPSD2TPPObjects", "DenyConsnt", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    DenyConsnt.clone = function(objectToClone) {
        var clonedObj = new DenyConsnt();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return DenyConsnt;
});