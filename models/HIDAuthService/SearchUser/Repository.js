define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function SearchUserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	SearchUserRepository.prototype = Object.create(BaseRepository.prototype);
	SearchUserRepository.prototype.constructor = SearchUserRepository;

	//For Operation 'searchUser' with service id 'SearchUserAuth4505'
	SearchUserRepository.prototype.searchUser = function(params, onCompletion){
		return SearchUserRepository.prototype.customVerb('searchUser', params, onCompletion);
	};

	return SearchUserRepository;
})