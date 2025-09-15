define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ApproveRequestRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ApproveRequestRepository.prototype = Object.create(BaseRepository.prototype);
	ApproveRequestRepository.prototype.constructor = ApproveRequestRepository;

	//For Operation 'initiate' with service id 'initiate7986'
	ApproveRequestRepository.prototype.initiate = function(params, onCompletion){
		return ApproveRequestRepository.prototype.customVerb('initiate', params, onCompletion);
	};

	return ApproveRequestRepository;
})