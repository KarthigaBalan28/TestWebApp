define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetTPPConsentDetailsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetTPPConsentDetailsRepository.prototype = Object.create(BaseRepository.prototype);
	GetTPPConsentDetailsRepository.prototype.constructor = GetTPPConsentDetailsRepository;

	//For Operation 'getTPPConsentDetails' with service id 'getTPPConsent1284'
	GetTPPConsentDetailsRepository.prototype.getTPPConsentDetails = function(params, onCompletion){
		return GetTPPConsentDetailsRepository.prototype.customVerb('getTPPConsentDetails', params, onCompletion);
	};

	return GetTPPConsentDetailsRepository;
})