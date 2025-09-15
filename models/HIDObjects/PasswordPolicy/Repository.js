define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PasswordPolicyRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PasswordPolicyRepository.prototype = Object.create(BaseRepository.prototype);
	PasswordPolicyRepository.prototype.constructor = PasswordPolicyRepository;

	//For Operation 'getPasswordPolicy' with service id 'getPasswordPolicy9554'
	PasswordPolicyRepository.prototype.getPasswordPolicy = function(params, onCompletion){
		return PasswordPolicyRepository.prototype.customVerb('getPasswordPolicy', params, onCompletion);
	};

	return PasswordPolicyRepository;
})