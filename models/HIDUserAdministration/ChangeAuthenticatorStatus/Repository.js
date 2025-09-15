define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ChangeAuthenticatorStatusRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ChangeAuthenticatorStatusRepository.prototype = Object.create(BaseRepository.prototype);
	ChangeAuthenticatorStatusRepository.prototype.constructor = ChangeAuthenticatorStatusRepository;

	//For Operation 'changeAuthStatus' with service id 'changeAuthenticatorStatus9716'
	ChangeAuthenticatorStatusRepository.prototype.changeAuthStatus = function(params, onCompletion){
		return ChangeAuthenticatorStatusRepository.prototype.customVerb('changeAuthStatus', params, onCompletion);
	};

	return ChangeAuthenticatorStatusRepository;
})