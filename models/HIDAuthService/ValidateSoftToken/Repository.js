define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ValidateSoftTokenRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ValidateSoftTokenRepository.prototype = Object.create(BaseRepository.prototype);
	ValidateSoftTokenRepository.prototype.constructor = ValidateSoftTokenRepository;

	//For Operation 'validateSoftToken' with service id 'softTokenValidation3969'
	ValidateSoftTokenRepository.prototype.validateSoftToken = function(params, onCompletion){
		return ValidateSoftTokenRepository.prototype.customVerb('validateSoftToken', params, onCompletion);
	};

	return ValidateSoftTokenRepository;
})