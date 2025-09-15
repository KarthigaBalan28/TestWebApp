/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "MovePaymentToINAU", "objectService" : "HIDPSD2TPPObjects"};

    var setterFunctions = {
        paymentId: function(val, state) {
            context["field"] = "paymentId";
            context["metadata"] = (objectMetadata ? objectMetadata["paymentId"] : null);
            state['paymentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function MovePaymentToINAU(defaultValues) {
        var privateState = {};
        context["field"] = "paymentId";
        context["metadata"] = (objectMetadata ? objectMetadata["paymentId"] : null);
        privateState.paymentId = defaultValues ?
            (defaultValues["paymentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paymentId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "paymentId": {
                get: function() {
                    context["field"] = "paymentId";
                    context["metadata"] = (objectMetadata ? objectMetadata["paymentId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paymentId, context);
                },
                set: function(val) {
                    setterFunctions['paymentId'].call(this, val, privateState);
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
            privateState.paymentId = value ? (value["paymentId"] ? value["paymentId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(MovePaymentToINAU);

    //Create new class level validator object
    BaseModel.Validator.call(MovePaymentToINAU);

    var registerValidatorBackup = MovePaymentToINAU.registerValidator;

    MovePaymentToINAU.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(MovePaymentToINAU.isValid(this, propName, val)) {
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
    //For Operation 'movePaymentToINAU' with service id 'movePaymentToINAU2538'
     MovePaymentToINAU.movePaymentToINAU = function(params, onCompletion){
        return MovePaymentToINAU.customVerb('movePaymentToINAU', params, onCompletion);
     };

    var relations = [];

    MovePaymentToINAU.relations = relations;

    MovePaymentToINAU.prototype.isValid = function() {
        return MovePaymentToINAU.isValid(this);
    };

    MovePaymentToINAU.prototype.objModelName = "MovePaymentToINAU";
    MovePaymentToINAU.prototype.objServiceName = "HIDPSD2TPPObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    MovePaymentToINAU.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDPSD2TPPObjects", "MovePaymentToINAU", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    MovePaymentToINAU.clone = function(objectToClone) {
        var clonedObj = new MovePaymentToINAU();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return MovePaymentToINAU;
});