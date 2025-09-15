define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function FIDORegistrationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	FIDORegistrationRepository.prototype = Object.create(BaseRepository.prototype);
	FIDORegistrationRepository.prototype.constructor = FIDORegistrationRepository;

	//For Operation 'getRegistrationOptions' with service id 'getCredentialOptions6386'
	FIDORegistrationRepository.prototype.getRegistrationOptions = function(params, onCompletion){
		return FIDORegistrationRepository.prototype.customVerb('getRegistrationOptions', params, onCompletion);
	};

	//For Operation 'registerCredential' with service id 'registerCredential8408'
	FIDORegistrationRepository.prototype.registerCredential = function(params, onCompletion){
		return FIDORegistrationRepository.prototype.customVerb('registerCredential', params, onCompletion);
	};

	return FIDORegistrationRepository;
})