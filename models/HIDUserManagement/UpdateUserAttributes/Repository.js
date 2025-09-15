define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UpdateUserAttributesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UpdateUserAttributesRepository.prototype = Object.create(BaseRepository.prototype);
	UpdateUserAttributesRepository.prototype.constructor = UpdateUserAttributesRepository;

	//For Operation 'updateUserAttributes' with service id 'updateUserAttributes1662'
	UpdateUserAttributesRepository.prototype.updateUserAttributes = function(params, onCompletion){
		return UpdateUserAttributesRepository.prototype.customVerb('updateUserAttributes', params, onCompletion);
	};

	return UpdateUserAttributesRepository;
})