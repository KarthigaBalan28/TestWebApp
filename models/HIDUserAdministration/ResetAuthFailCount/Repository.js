define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ResetAuthFailCountRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ResetAuthFailCountRepository.prototype = Object.create(BaseRepository.prototype);
	ResetAuthFailCountRepository.prototype.constructor = ResetAuthFailCountRepository;

	//For Operation 'resetFailCount' with service id 'resetFailureCount6002'
	ResetAuthFailCountRepository.prototype.resetFailCount = function(params, onCompletion){
		return ResetAuthFailCountRepository.prototype.customVerb('resetFailCount', params, onCompletion);
	};

	return ResetAuthFailCountRepository;
})