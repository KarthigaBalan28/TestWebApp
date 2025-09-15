define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function getScanToApproveQrDataRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	getScanToApproveQrDataRepository.prototype = Object.create(BaseRepository.prototype);
	getScanToApproveQrDataRepository.prototype.constructor = getScanToApproveQrDataRepository;

	//For Operation 'getScanToApproveQrData' with service id 'getScanToApproveQrData3940'
	getScanToApproveQrDataRepository.prototype.getScanToApproveQrData = function(params, onCompletion){
		return getScanToApproveQrDataRepository.prototype.customVerb('getScanToApproveQrData', params, onCompletion);
	};

	return getScanToApproveQrDataRepository;
})