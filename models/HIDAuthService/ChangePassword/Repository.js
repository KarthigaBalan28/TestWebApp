define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ChangePasswordRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ChangePasswordRepository.prototype = Object.create(BaseRepository.prototype);
	ChangePasswordRepository.prototype.constructor = ChangePasswordRepository;

	//For Operation 'cantSignInChangePassword' with service id 'CantSignInChangePassword7381'
	ChangePasswordRepository.prototype.cantSignInChangePassword = function(params, onCompletion){
		return ChangePasswordRepository.prototype.customVerb('cantSignInChangePassword', params, onCompletion);
	};

	return ChangePasswordRepository;
})