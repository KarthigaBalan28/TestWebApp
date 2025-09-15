define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UserRepository.prototype = Object.create(BaseRepository.prototype);
	UserRepository.prototype.constructor = UserRepository;

	//For Operation 'searchUser' with service id 'SearchUserAuth2828'
	UserRepository.prototype.searchUser = function(params, onCompletion){
		return UserRepository.prototype.customVerb('searchUser', params, onCompletion);
	};

	return UserRepository;
})