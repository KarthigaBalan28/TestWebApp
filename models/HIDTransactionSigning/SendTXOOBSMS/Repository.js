define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function SendTXOOBSMSRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	SendTXOOBSMSRepository.prototype = Object.create(BaseRepository.prototype);
	SendTXOOBSMSRepository.prototype.constructor = SendTXOOBSMSRepository;

	//For Operation 'sendTXOOBSMS' with service id 'SendTXOOBSMS1311'
	SendTXOOBSMSRepository.prototype.sendTXOOBSMS = function(params, onCompletion){
		return SendTXOOBSMSRepository.prototype.customVerb('sendTXOOBSMS', params, onCompletion);
	};

	return SendTXOOBSMSRepository;
})