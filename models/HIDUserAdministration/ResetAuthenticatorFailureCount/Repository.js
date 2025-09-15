define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ResetAuthenticatorFailureCountRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ResetAuthenticatorFailureCountRepository.prototype = Object.create(BaseRepository.prototype);
	ResetAuthenticatorFailureCountRepository.prototype.constructor = ResetAuthenticatorFailureCountRepository;

	//For Operation 'resetFailureCount' with service id 'resetFailureCount5724'
	ResetAuthenticatorFailureCountRepository.prototype.resetFailureCount = function(params, onCompletion){
		return ResetAuthenticatorFailureCountRepository.prototype.customVerb('resetFailureCount', params, onCompletion);
	};

	return ResetAuthenticatorFailureCountRepository;
})