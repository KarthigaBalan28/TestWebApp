define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ValidateSMSOTPRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ValidateSMSOTPRepository.prototype = Object.create(BaseRepository.prototype);
	ValidateSMSOTPRepository.prototype.constructor = ValidateSMSOTPRepository;

	//For Operation 'validateSMSOTP' with service id 'validateSMSOTP1865'
	ValidateSMSOTPRepository.prototype.validateSMSOTP = function(params, onCompletion){
		return ValidateSMSOTPRepository.prototype.customVerb('validateSMSOTP', params, onCompletion);
	};

	return ValidateSMSOTPRepository;
})