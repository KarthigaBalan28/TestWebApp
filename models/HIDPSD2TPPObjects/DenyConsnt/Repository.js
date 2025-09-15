define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function DenyConsntRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	DenyConsntRepository.prototype = Object.create(BaseRepository.prototype);
	DenyConsntRepository.prototype.constructor = DenyConsntRepository;

	//For Operation 'denyConsnt' with service id 'deleteTPPConsent1691'
	DenyConsntRepository.prototype.denyConsnt = function(params, onCompletion){
		return DenyConsntRepository.prototype.customVerb('denyConsnt', params, onCompletion);
	};

	return DenyConsntRepository;
})