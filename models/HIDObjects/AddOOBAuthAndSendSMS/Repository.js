define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AddOOBAuthAndSendSMSRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AddOOBAuthAndSendSMSRepository.prototype = Object.create(BaseRepository.prototype);
	AddOOBAuthAndSendSMSRepository.prototype.constructor = AddOOBAuthAndSendSMSRepository;

	//For Operation 'addOOBAuthAndSendSMS' with service id 'AddOOBAuthAndSendSMS5025'
	AddOOBAuthAndSendSMSRepository.prototype.addOOBAuthAndSendSMS = function(params, onCompletion){
		return AddOOBAuthAndSendSMSRepository.prototype.customVerb('addOOBAuthAndSendSMS', params, onCompletion);
	};

	return AddOOBAuthAndSendSMSRepository;
})