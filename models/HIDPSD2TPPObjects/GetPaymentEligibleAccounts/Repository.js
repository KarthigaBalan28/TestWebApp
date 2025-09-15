define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetPaymentEligibleAccountsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetPaymentEligibleAccountsRepository.prototype = Object.create(BaseRepository.prototype);
	GetPaymentEligibleAccountsRepository.prototype.constructor = GetPaymentEligibleAccountsRepository;

	//For Operation 'getPaymentEligibleAccounts' with service id 'getPaymentEligibleAccounts7964'
	GetPaymentEligibleAccountsRepository.prototype.getPaymentEligibleAccounts = function(params, onCompletion){
		return GetPaymentEligibleAccountsRepository.prototype.customVerb('getPaymentEligibleAccounts', params, onCompletion);
	};

	return GetPaymentEligibleAccountsRepository;
})