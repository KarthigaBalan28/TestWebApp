define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function OTPRequestRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	OTPRequestRepository.prototype = Object.create(BaseRepository.prototype);
	OTPRequestRepository.prototype.constructor = OTPRequestRepository;

	//For Operation 'sendOTP' with service id 'sendOTP1496'
	OTPRequestRepository.prototype.sendOTP = function(params, onCompletion){
		return OTPRequestRepository.prototype.customVerb('sendOTP', params, onCompletion);
	};

	return OTPRequestRepository;
})