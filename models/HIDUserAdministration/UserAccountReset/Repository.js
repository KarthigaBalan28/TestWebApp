define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UserAccountResetRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UserAccountResetRepository.prototype = Object.create(BaseRepository.prototype);
	UserAccountResetRepository.prototype.constructor = UserAccountResetRepository;

	//For Operation 'UserAccountReset' with service id 'UserAccountReset5316'
	UserAccountResetRepository.prototype.UserAccountReset = function(params, onCompletion){
		return UserAccountResetRepository.prototype.customVerb('UserAccountReset', params, onCompletion);
	};

	return UserAccountResetRepository;
})