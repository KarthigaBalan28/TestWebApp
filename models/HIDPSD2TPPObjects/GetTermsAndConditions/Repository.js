define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetTermsAndConditionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetTermsAndConditionsRepository.prototype = Object.create(BaseRepository.prototype);
	GetTermsAndConditionsRepository.prototype.constructor = GetTermsAndConditionsRepository;

	//For Operation 'getTermsAndConditions' with service id 'getPostLogin9923'
	GetTermsAndConditionsRepository.prototype.getTermsAndConditions = function(params, onCompletion){
		return GetTermsAndConditionsRepository.prototype.customVerb('getTermsAndConditions', params, onCompletion);
	};

	return GetTermsAndConditionsRepository;
})