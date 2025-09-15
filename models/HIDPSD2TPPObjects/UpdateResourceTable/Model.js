/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "UpdateResourceTable", "objectService" : "HIDPSD2TPPObjects"};

    var setterFunctions = {
        paymentID: function(val, state) {
            context["field"] = "paymentID";
            context["metadata"] = (objectMetadata ? objectMetadata["paymentID"] : null);
            state['paymentID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        submitOrder: function(val, state) {
            context["field"] = "submitOrder";
            context["metadata"] = (objectMetadata ? objectMetadata["submitOrder"] : null);
            state['submitOrder'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function UpdateResourceTable(defaultValues) {
        var privateState = {};
        context["field"] = "paymentID";
        context["metadata"] = (objectMetadata ? objectMetadata["paymentID"] : null);
        privateState.paymentID = defaultValues ?
            (defaultValues["paymentID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paymentID"], context) :
                null) :
            null;

        context["field"] = "submitOrder";
        context["metadata"] = (objectMetadata ? objectMetadata["submitOrder"] : null);
        privateState.submitOrder = defaultValues ?
            (defaultValues["submitOrder"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["submitOrder"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "paymentID": {
                get: function() {
                    context["field"] = "paymentID";
                    context["metadata"] = (objectMetadata ? objectMetadata["paymentID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paymentID, context);
                },
                set: function(val) {
                    setterFunctions['paymentID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "submitOrder": {
                get: function() {
                    context["field"] = "submitOrder";
                    context["metadata"] = (objectMetadata ? objectMetadata["submitOrder"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.submitOrder, context);
                },
                set: function(val) {
                    setterFunctions['submitOrder'].call(this, val, privateState);
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
            privateState.paymentID = value ? (value["paymentID"] ? value["paymentID"] : null) : null;
            privateState.submitOrder = value ? (value["submitOrder"] ? value["submitOrder"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(UpdateResourceTable);

    //Create new class level validator object
    BaseModel.Validator.call(UpdateResourceTable);

    var registerValidatorBackup = UpdateResourceTable.registerValidator;

    UpdateResourceTable.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(UpdateResourceTable.isValid(this, propName, val)) {
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
    //For Operation 'updateResourceTable' with service id 'updateResourceTable3472'
     UpdateResourceTable.updateResourceTable = function(params, onCompletion){
        return UpdateResourceTable.customVerb('updateResourceTable', params, onCompletion);
     };

    var relations = [];

    UpdateResourceTable.relations = relations;

    UpdateResourceTable.prototype.isValid = function() {
        return UpdateResourceTable.isValid(this);
    };

    UpdateResourceTable.prototype.objModelName = "UpdateResourceTable";
    UpdateResourceTable.prototype.objServiceName = "HIDPSD2TPPObjects";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    UpdateResourceTable.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDPSD2TPPObjects", "UpdateResourceTable", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    UpdateResourceTable.clone = function(objectToClone) {
        var clonedObj = new UpdateResourceTable();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return UpdateResourceTable;
});