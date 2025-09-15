define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PasswordPolicyRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PasswordPolicyRepository.prototype = Object.create(BaseRepository.prototype);
	PasswordPolicyRepository.prototype.constructor = PasswordPolicyRepository;

	//For Operation 'getPolicy' with service id 'getPasswordPolicy8892'
	PasswordPolicyRepository.prototype.getPolicy = function(params, onCompletion){
		return PasswordPolicyRepository.prototype.customVerb('getPolicy', params, onCompletion);
	};

	return PasswordPolicyRepository;
})