define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UpdateFriendlyNameRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UpdateFriendlyNameRepository.prototype = Object.create(BaseRepository.prototype);
	UpdateFriendlyNameRepository.prototype.constructor = UpdateFriendlyNameRepository;

	//For Operation 'updateFriendlyName' with service id 'updateFriendlyNamesOnboarding1804'
	UpdateFriendlyNameRepository.prototype.updateFriendlyName = function(params, onCompletion){
		return UpdateFriendlyNameRepository.prototype.customVerb('updateFriendlyName', params, onCompletion);
	};

	return UpdateFriendlyNameRepository;
})