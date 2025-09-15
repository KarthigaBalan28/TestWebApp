define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PaymentCreateRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PaymentCreateRepository.prototype = Object.create(BaseRepository.prototype);
	PaymentCreateRepository.prototype.constructor = PaymentCreateRepository;

	//For Operation 'paymentCreate' with service id 'paymentCreate5176'
	PaymentCreateRepository.prototype.paymentCreate = function(params, onCompletion){
		return PaymentCreateRepository.prototype.customVerb('paymentCreate', params, onCompletion);
	};

	return PaymentCreateRepository;
})