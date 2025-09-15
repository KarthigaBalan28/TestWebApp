define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ApproveConsentRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ApproveConsentRepository.prototype = Object.create(BaseRepository.prototype);
	ApproveConsentRepository.prototype.constructor = ApproveConsentRepository;

	//For Operation 'approveConsent' with service id 'approveTPPConsent3709'
	ApproveConsentRepository.prototype.approveConsent = function(params, onCompletion){
		return ApproveConsentRepository.prototype.customVerb('approveConsent', params, onCompletion);
	};

	return ApproveConsentRepository;
})