define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ValidateSecureCodeRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ValidateSecureCodeRepository.prototype = Object.create(BaseRepository.prototype);
	ValidateSecureCodeRepository.prototype.constructor = ValidateSecureCodeRepository;

	//For Operation 'validateOTPAuth' with service id 'validateOTPAuth8261'
	ValidateSecureCodeRepository.prototype.validateOTPAuth = function(params, onCompletion){
		return ValidateSecureCodeRepository.prototype.customVerb('validateOTPAuth', params, onCompletion);
	};

	return ValidateSecureCodeRepository;
})