define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PaymentSignRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PaymentSignRepository.prototype = Object.create(BaseRepository.prototype);
	PaymentSignRepository.prototype.constructor = PaymentSignRepository;

	//For Operation 'paymentSign' with service id 'paymentSign6562'
	PaymentSignRepository.prototype.paymentSign = function(params, onCompletion){
		return PaymentSignRepository.prototype.customVerb('paymentSign', params, onCompletion);
	};

	return PaymentSignRepository;
})