define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AddAuthenticatorTXOOBRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AddAuthenticatorTXOOBRepository.prototype = Object.create(BaseRepository.prototype);
	AddAuthenticatorTXOOBRepository.prototype.constructor = AddAuthenticatorTXOOBRepository;

	//For Operation 'AddAuthenticatorTXOOB' with service id 'TXOOBAuth4246'
	AddAuthenticatorTXOOBRepository.prototype.AddAuthenticatorTXOOB = function(params, onCompletion){
		return AddAuthenticatorTXOOBRepository.prototype.customVerb('AddAuthenticatorTXOOB', params, onCompletion);
	};

	return AddAuthenticatorTXOOBRepository;
})