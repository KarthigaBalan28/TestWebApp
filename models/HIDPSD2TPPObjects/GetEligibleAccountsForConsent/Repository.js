define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetEligibleAccountsForConsentRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetEligibleAccountsForConsentRepository.prototype = Object.create(BaseRepository.prototype);
	GetEligibleAccountsForConsentRepository.prototype.constructor = GetEligibleAccountsForConsentRepository;

	//For Operation 'getEligibleAccountsForConsent' with service id 'getEligibleAccountsForConsent7458'
	GetEligibleAccountsForConsentRepository.prototype.getEligibleAccountsForConsent = function(params, onCompletion){
		return GetEligibleAccountsForConsentRepository.prototype.customVerb('getEligibleAccountsForConsent', params, onCompletion);
	};

	return GetEligibleAccountsForConsentRepository;
})