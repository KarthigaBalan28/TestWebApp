/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SearchUser", "objectService" : "HIDAuthService"};

    var setterFunctions = {
        filter: function(val, state) {
            context["field"] = "filter";
            context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
            state['filter'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalResults: function(val, state) {
            context["field"] = "totalResults";
            context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
            state['totalResults'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SearchUser(defaultValues) {
        var privateState = {};
        context["field"] = "filter";
        context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
        privateState.filter = defaultValues ?
            (defaultValues["filter"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["filter"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "totalResults";
        context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
        privateState.totalResults = defaultValues ?
            (defaultValues["totalResults"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalResults"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "filter": {
                get: function() {
                    context["field"] = "filter";
                    context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.filter, context);
                },
                set: function(val) {
                    setterFunctions['filter'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalResults": {
                get: function() {
                    context["field"] = "totalResults";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalResults, context);
                },
                set: function(val) {
                    setterFunctions['totalResults'].call(this, val, privateState);
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
            privateState.filter = value ? (value["filter"] ? value["filter"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.totalResults = value ? (value["totalResults"] ? value["totalResults"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SearchUser);

    //Create new class level validator object
    BaseModel.Validator.call(SearchUser);

    var registerValidatorBackup = SearchUser.registerValidator;

    SearchUser.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SearchUser.isValid(this, propName, val)) {
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
    //For Operation 'searchUser' with service id 'SearchUserAuth4505'
     SearchUser.searchUser = function(params, onCompletion){
        return SearchUser.customVerb('searchUser', params, onCompletion);
     };

    var relations = [];

    SearchUser.relations = relations;

    SearchUser.prototype.isValid = function() {
        return SearchUser.isValid(this);
    };

    SearchUser.prototype.objModelName = "SearchUser";
    SearchUser.prototype.objServiceName = "HIDAuthService";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SearchUser.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDAuthService", "SearchUser", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SearchUser.clone = function(objectToClone) {
        var clonedObj = new SearchUser();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SearchUser;
});