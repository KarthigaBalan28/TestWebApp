define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function DevicesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	DevicesRepository.prototype = Object.create(BaseRepository.prototype);
	DevicesRepository.prototype.constructor = DevicesRepository;

	//For Operation 'searchDevices' with service id 'getDevices4298'
	DevicesRepository.prototype.searchDevices = function(params, onCompletion){
		return DevicesRepository.prototype.customVerb('searchDevices', params, onCompletion);
	};

	return DevicesRepository;
})