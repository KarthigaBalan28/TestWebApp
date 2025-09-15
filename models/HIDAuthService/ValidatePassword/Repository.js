define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ValidatePasswordRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ValidatePasswordRepository.prototype = Object.create(BaseRepository.prototype);
	ValidatePasswordRepository.prototype.constructor = ValidatePasswordRepository;

	//For Operation 'validatePassword' with service id 'passwordValidation3492'
	ValidatePasswordRepository.prototype.validatePassword = function(params, onCompletion){
		return ValidatePasswordRepository.prototype.customVerb('validatePassword', params, onCompletion);
	};

	return ValidatePasswordRepository;
})