define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetInfinityUserDetailsForConsentRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetInfinityUserDetailsForConsentRepository.prototype = Object.create(BaseRepository.prototype);
	GetInfinityUserDetailsForConsentRepository.prototype.constructor = GetInfinityUserDetailsForConsentRepository;

	//For Operation 'getInfinityUserDetailsForConsent' with service id 'getInfinityUserDetailsForTPP9630'
	GetInfinityUserDetailsForConsentRepository.prototype.getInfinityUserDetailsForConsent = function(params, onCompletion){
		return GetInfinityUserDetailsForConsentRepository.prototype.customVerb('getInfinityUserDetailsForConsent', params, onCompletion);
	};

	return GetInfinityUserDetailsForConsentRepository;
})