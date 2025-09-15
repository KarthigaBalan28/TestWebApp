define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ApproveStatusRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ApproveStatusRepository.prototype = Object.create(BaseRepository.prototype);
	ApproveStatusRepository.prototype.constructor = ApproveStatusRepository;

	//For Operation 'poll' with service id 'getHIDApprovalStatus6934'
	ApproveStatusRepository.prototype.poll = function(params, onCompletion){
		return ApproveStatusRepository.prototype.customVerb('poll', params, onCompletion);
	};

	return ApproveStatusRepository;
})