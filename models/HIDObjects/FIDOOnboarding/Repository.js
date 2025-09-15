define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function FIDOOnboardingRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	FIDOOnboardingRepository.prototype = Object.create(BaseRepository.prototype);
	FIDOOnboardingRepository.prototype.constructor = FIDOOnboardingRepository;

	//For Operation 'getCredentialOptions' with service id 'getCredentialOptions5444'
	FIDOOnboardingRepository.prototype.getCredentialOptions = function(params, onCompletion){
		return FIDOOnboardingRepository.prototype.customVerb('getCredentialOptions', params, onCompletion);
	};

	//For Operation 'registerCredential' with service id 'registerCredential1401'
	FIDOOnboardingRepository.prototype.registerCredential = function(params, onCompletion){
		return FIDOOnboardingRepository.prototype.customVerb('registerCredential', params, onCompletion);
	};

	return FIDOOnboardingRepository;
})