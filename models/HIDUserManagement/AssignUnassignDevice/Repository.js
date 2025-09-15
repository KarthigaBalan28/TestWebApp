define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AssignUnassignDeviceRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AssignUnassignDeviceRepository.prototype = Object.create(BaseRepository.prototype);
	AssignUnassignDeviceRepository.prototype.constructor = AssignUnassignDeviceRepository;

	//For Operation 'assignUnassignDevice' with service id 'assignUnassignDevice3818'
	AssignUnassignDeviceRepository.prototype.assignUnassignDevice = function(params, onCompletion){
		return AssignUnassignDeviceRepository.prototype.customVerb('assignUnassignDevice', params, onCompletion);
	};

	return AssignUnassignDeviceRepository;
})