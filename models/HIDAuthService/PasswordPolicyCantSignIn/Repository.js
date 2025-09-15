define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PasswordPolicyCantSignInRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PasswordPolicyCantSignInRepository.prototype = Object.create(BaseRepository.prototype);
	PasswordPolicyCantSignInRepository.prototype.constructor = PasswordPolicyCantSignInRepository;

	//For Operation 'getPasswordPolicy' with service id 'getPasswordPolicy6237'
	PasswordPolicyCantSignInRepository.prototype.getPasswordPolicy = function(params, onCompletion){
		return PasswordPolicyCantSignInRepository.prototype.customVerb('getPasswordPolicy', params, onCompletion);
	};

	return PasswordPolicyCantSignInRepository;
})