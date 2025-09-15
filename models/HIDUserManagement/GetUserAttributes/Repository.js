define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetUserAttributesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetUserAttributesRepository.prototype = Object.create(BaseRepository.prototype);
	GetUserAttributesRepository.prototype.constructor = GetUserAttributesRepository;

	//For Operation 'getUserAttributes' with service id 'getUserAttributes2283'
	GetUserAttributesRepository.prototype.getUserAttributes = function(params, onCompletion){
		return GetUserAttributesRepository.prototype.customVerb('getUserAttributes', params, onCompletion);
	};

	return GetUserAttributesRepository;
})