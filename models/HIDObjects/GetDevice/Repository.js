define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetDeviceRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetDeviceRepository.prototype = Object.create(BaseRepository.prototype);
	GetDeviceRepository.prototype.constructor = GetDeviceRepository;

	//For Operation 'getDevice' with service id 'getDeviceOnboarding2932'
	GetDeviceRepository.prototype.getDevice = function(params, onCompletion){
		return GetDeviceRepository.prototype.customVerb('getDevice', params, onCompletion);
	};

	return GetDeviceRepository;
})