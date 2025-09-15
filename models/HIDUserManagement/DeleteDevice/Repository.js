define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function DeleteDeviceRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	DeleteDeviceRepository.prototype = Object.create(BaseRepository.prototype);
	DeleteDeviceRepository.prototype.constructor = DeleteDeviceRepository;

	//For Operation 'deleteDevice' with service id 'deleteDevice7134'
	DeleteDeviceRepository.prototype.deleteDevice = function(params, onCompletion){
		return DeleteDeviceRepository.prototype.customVerb('deleteDevice', params, onCompletion);
	};

	return DeleteDeviceRepository;
})