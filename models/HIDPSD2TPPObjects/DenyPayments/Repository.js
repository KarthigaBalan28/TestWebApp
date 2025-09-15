define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function DenyPaymentsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	DenyPaymentsRepository.prototype = Object.create(BaseRepository.prototype);
	DenyPaymentsRepository.prototype.constructor = DenyPaymentsRepository;

	//For Operation 'denyPayments' with service id 'denyPsd2Payments5246'
	DenyPaymentsRepository.prototype.denyPayments = function(params, onCompletion){
		return DenyPaymentsRepository.prototype.customVerb('denyPayments', params, onCompletion);
	};

	return DenyPaymentsRepository;
})