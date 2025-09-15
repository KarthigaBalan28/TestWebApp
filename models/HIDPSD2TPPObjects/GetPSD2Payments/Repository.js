define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetPSD2PaymentsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetPSD2PaymentsRepository.prototype = Object.create(BaseRepository.prototype);
	GetPSD2PaymentsRepository.prototype.constructor = GetPSD2PaymentsRepository;

	//For Operation 'getPSD2Payments' with service id 'getPSD2Payments6044'
	GetPSD2PaymentsRepository.prototype.getPSD2Payments = function(params, onCompletion){
		return GetPSD2PaymentsRepository.prototype.customVerb('getPSD2Payments', params, onCompletion);
	};

	return GetPSD2PaymentsRepository;
})