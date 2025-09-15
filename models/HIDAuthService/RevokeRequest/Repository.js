define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function RevokeRequestRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	RevokeRequestRepository.prototype = Object.create(BaseRepository.prototype);
	RevokeRequestRepository.prototype.constructor = RevokeRequestRepository;

	//For Operation 'RevokeToken' with service id 'RevokeToken7669'
	RevokeRequestRepository.prototype.RevokeToken = function(params, onCompletion){
		return RevokeRequestRepository.prototype.customVerb('RevokeToken', params, onCompletion);
	};

	return RevokeRequestRepository;
})