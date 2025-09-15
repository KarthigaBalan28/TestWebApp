define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetPSD2AccountListForPaymentsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetPSD2AccountListForPaymentsRepository.prototype = Object.create(BaseRepository.prototype);
	GetPSD2AccountListForPaymentsRepository.prototype.constructor = GetPSD2AccountListForPaymentsRepository;

	//For Operation 'getPSD2AccountListForPayments' with service id 'getPSD2AccountsList6244'
	GetPSD2AccountListForPaymentsRepository.prototype.getPSD2AccountListForPayments = function(params, onCompletion){
		return GetPSD2AccountListForPaymentsRepository.prototype.customVerb('getPSD2AccountListForPayments', params, onCompletion);
	};

	return GetPSD2AccountListForPaymentsRepository;
})