define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ValidatePsd2TppTokenRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ValidatePsd2TppTokenRepository.prototype = Object.create(BaseRepository.prototype);
	ValidatePsd2TppTokenRepository.prototype.constructor = ValidatePsd2TppTokenRepository;

	//For Operation 'validatePsd2TppToken' with service id 'ValidatePsd2TppToken9193'
	ValidatePsd2TppTokenRepository.prototype.validatePsd2TppToken = function(params, onCompletion){
		return ValidatePsd2TppTokenRepository.prototype.customVerb('validatePsd2TppToken', params, onCompletion);
	};

	return ValidatePsd2TppTokenRepository;
})