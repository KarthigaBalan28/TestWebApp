define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AddAllOOBAuthRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AddAllOOBAuthRepository.prototype = Object.create(BaseRepository.prototype);
	AddAllOOBAuthRepository.prototype.constructor = AddAllOOBAuthRepository;

	//For Operation 'addAllOOBAuth' with service id 'addAllOOBAuth8251'
	AddAllOOBAuthRepository.prototype.addAllOOBAuth = function(params, onCompletion){
		return AddAllOOBAuthRepository.prototype.customVerb('addAllOOBAuth', params, onCompletion);
	};

	return AddAllOOBAuthRepository;
})