define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function SearchAndAddHWDeviceRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	SearchAndAddHWDeviceRepository.prototype = Object.create(BaseRepository.prototype);
	SearchAndAddHWDeviceRepository.prototype.constructor = SearchAndAddHWDeviceRepository;

	//For Operation 'searchAndAddHWDevice' with service id 'searchHardwareTokenDevice7553'
	SearchAndAddHWDeviceRepository.prototype.searchAndAddHWDevice = function(params, onCompletion){
		return SearchAndAddHWDeviceRepository.prototype.customVerb('searchAndAddHWDevice', params, onCompletion);
	};

	return SearchAndAddHWDeviceRepository;
})