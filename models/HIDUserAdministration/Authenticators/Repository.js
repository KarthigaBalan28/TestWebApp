define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AuthenticatorsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AuthenticatorsRepository.prototype = Object.create(BaseRepository.prototype);
	AuthenticatorsRepository.prototype.constructor = AuthenticatorsRepository;

	//For Operation 'listAuthenticators' with service id 'listAuthenticators9905'
	AuthenticatorsRepository.prototype.listAuthenticators = function(params, onCompletion){
		return AuthenticatorsRepository.prototype.customVerb('listAuthenticators', params, onCompletion);
	};

	return AuthenticatorsRepository;
})