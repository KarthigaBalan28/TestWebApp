define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function SearchDevicesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	SearchDevicesRepository.prototype = Object.create(BaseRepository.prototype);
	SearchDevicesRepository.prototype.constructor = SearchDevicesRepository;

	//For Operation 'SearchDevices' with service id 'searchDevices1490'
	SearchDevicesRepository.prototype.SearchDevices = function(params, onCompletion){
		return SearchDevicesRepository.prototype.customVerb('SearchDevices', params, onCompletion);
	};

	return SearchDevicesRepository;
})