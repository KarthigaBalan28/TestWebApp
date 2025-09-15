define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function FIDOAuthenticationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	FIDOAuthenticationRepository.prototype = Object.create(BaseRepository.prototype);
	FIDOAuthenticationRepository.prototype.constructor = FIDOAuthenticationRepository;

	//For Operation 'authenticate' with service id 'authenticate5101'
	FIDOAuthenticationRepository.prototype.authenticate = function(params, onCompletion){
		return FIDOAuthenticationRepository.prototype.customVerb('authenticate', params, onCompletion);
	};

	//For Operation 'getAuthenticationOptions' with service id 'getAuthenticationOptions9559'
	FIDOAuthenticationRepository.prototype.getAuthenticationOptions = function(params, onCompletion){
		return FIDOAuthenticationRepository.prototype.customVerb('getAuthenticationOptions', params, onCompletion);
	};

	return FIDOAuthenticationRepository;
})