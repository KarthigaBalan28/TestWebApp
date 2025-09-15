define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ApprovePaymentsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ApprovePaymentsRepository.prototype = Object.create(BaseRepository.prototype);
	ApprovePaymentsRepository.prototype.constructor = ApprovePaymentsRepository;

	//For Operation 'approvePayments' with service id 'approvePsd2Payments8174'
	ApprovePaymentsRepository.prototype.approvePayments = function(params, onCompletion){
		return ApprovePaymentsRepository.prototype.customVerb('approvePayments', params, onCompletion);
	};

	return ApprovePaymentsRepository;
})