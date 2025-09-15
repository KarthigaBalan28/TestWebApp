define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function MoveConsentToINAURepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	MoveConsentToINAURepository.prototype = Object.create(BaseRepository.prototype);
	MoveConsentToINAURepository.prototype.constructor = MoveConsentToINAURepository;

	//For Operation 'moveConsentToINAU' with service id 'moveConsentToINAU4916'
	MoveConsentToINAURepository.prototype.moveConsentToINAU = function(params, onCompletion){
		return MoveConsentToINAURepository.prototype.customVerb('moveConsentToINAU', params, onCompletion);
	};

	return MoveConsentToINAURepository;
})