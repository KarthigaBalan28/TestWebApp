define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PaymentUpdateRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PaymentUpdateRepository.prototype = Object.create(BaseRepository.prototype);
	PaymentUpdateRepository.prototype.constructor = PaymentUpdateRepository;

	//For Operation 'paymentUpdate' with service id 'paymentUpdate9554'
	PaymentUpdateRepository.prototype.paymentUpdate = function(params, onCompletion){
		return PaymentUpdateRepository.prototype.customVerb('paymentUpdate', params, onCompletion);
	};

	return PaymentUpdateRepository;
})