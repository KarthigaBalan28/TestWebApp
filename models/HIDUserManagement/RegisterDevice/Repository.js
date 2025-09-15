define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function RegisterDeviceRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	RegisterDeviceRepository.prototype = Object.create(BaseRepository.prototype);
	RegisterDeviceRepository.prototype.constructor = RegisterDeviceRepository;

	//For Operation 'getProvisioningMsg' with service id 'getInviteCode8954'
	RegisterDeviceRepository.prototype.getProvisioningMsg = function(params, onCompletion){
		return RegisterDeviceRepository.prototype.customVerb('getProvisioningMsg', params, onCompletion);
	};

	return RegisterDeviceRepository;
})