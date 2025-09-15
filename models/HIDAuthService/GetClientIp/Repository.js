define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetClientIpRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetClientIpRepository.prototype = Object.create(BaseRepository.prototype);
	GetClientIpRepository.prototype.constructor = GetClientIpRepository;

	//For Operation 'getClientIp' with service id 'getClientIp2649'
	GetClientIpRepository.prototype.getClientIp = function(params, onCompletion){
		return GetClientIpRepository.prototype.customVerb('getClientIp', params, onCompletion);
	};

	return GetClientIpRepository;
})