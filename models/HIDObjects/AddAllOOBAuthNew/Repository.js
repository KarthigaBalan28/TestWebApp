define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AddAllOOBAuthNewRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AddAllOOBAuthNewRepository.prototype = Object.create(BaseRepository.prototype);
	AddAllOOBAuthNewRepository.prototype.constructor = AddAllOOBAuthNewRepository;

	//For Operation 'addAllOOBAuthenticators' with service id 'AddAllOOBAuthenticators1986'
	AddAllOOBAuthNewRepository.prototype.addAllOOBAuthenticators = function(params, onCompletion){
		return AddAllOOBAuthNewRepository.prototype.customVerb('addAllOOBAuthenticators', params, onCompletion);
	};

	return AddAllOOBAuthNewRepository;
})