define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ValidateOTPRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ValidateOTPRepository.prototype = Object.create(BaseRepository.prototype);
	ValidateOTPRepository.prototype.constructor = ValidateOTPRepository;

	//For Operation 'validateOTPCantSignIn' with service id 'ValidateOtpCantSignIn5196'
	ValidateOTPRepository.prototype.validateOTPCantSignIn = function(params, onCompletion){
		return ValidateOTPRepository.prototype.customVerb('validateOTPCantSignIn', params, onCompletion);
	};

	//For Operation 'validateOtp' with service id 'validateOTPAuth4867'
	ValidateOTPRepository.prototype.validateOtp = function(params, onCompletion){
		return ValidateOTPRepository.prototype.customVerb('validateOtp', params, onCompletion);
	};

	return ValidateOTPRepository;
})