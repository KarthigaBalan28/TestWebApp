define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AprroveTransactInitiateRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AprroveTransactInitiateRepository.prototype = Object.create(BaseRepository.prototype);
	AprroveTransactInitiateRepository.prototype.constructor = AprroveTransactInitiateRepository;

	//For Operation 'aprroveTransactInitiate' with service id 'initiate7850'
	AprroveTransactInitiateRepository.prototype.aprroveTransactInitiate = function(params, onCompletion){
		return AprroveTransactInitiateRepository.prototype.customVerb('aprroveTransactInitiate', params, onCompletion);
	};

	return AprroveTransactInitiateRepository;
})