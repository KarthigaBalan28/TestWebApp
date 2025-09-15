define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetHostAndTenantRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetHostAndTenantRepository.prototype = Object.create(BaseRepository.prototype);
	GetHostAndTenantRepository.prototype.constructor = GetHostAndTenantRepository;

	//For Operation 'getServiceURL' with service id 'getServiceURLAndDomain9571'
	GetHostAndTenantRepository.prototype.getServiceURL = function(params, onCompletion){
		return GetHostAndTenantRepository.prototype.customVerb('getServiceURL', params, onCompletion);
	};

	return GetHostAndTenantRepository;
})