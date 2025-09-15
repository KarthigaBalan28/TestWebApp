define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function UpdateResourceTableRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	UpdateResourceTableRepository.prototype = Object.create(BaseRepository.prototype);
	UpdateResourceTableRepository.prototype.constructor = UpdateResourceTableRepository;

	//For Operation 'updateResourceTable' with service id 'updateResourceTable3472'
	UpdateResourceTableRepository.prototype.updateResourceTable = function(params, onCompletion){
		return UpdateResourceTableRepository.prototype.customVerb('updateResourceTable', params, onCompletion);
	};

	return UpdateResourceTableRepository;
})