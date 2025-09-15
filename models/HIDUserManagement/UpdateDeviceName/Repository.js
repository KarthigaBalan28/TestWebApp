define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UpdateDeviceNameRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UpdateDeviceNameRepository.prototype = Object.create(BaseRepository.prototype);
	UpdateDeviceNameRepository.prototype.constructor = UpdateDeviceNameRepository;

	//For Operation 'updateFriendlyName' with service id 'updateDeviceFriendlyName1734'
	UpdateDeviceNameRepository.prototype.updateFriendlyName = function(params, onCompletion){
		return UpdateDeviceNameRepository.prototype.customVerb('updateFriendlyName', params, onCompletion);
	};

	return UpdateDeviceNameRepository;
})