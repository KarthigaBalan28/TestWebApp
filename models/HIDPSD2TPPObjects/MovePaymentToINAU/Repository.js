define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function MovePaymentToINAURepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	MovePaymentToINAURepository.prototype = Object.create(BaseRepository.prototype);
	MovePaymentToINAURepository.prototype.constructor = MovePaymentToINAURepository;

	//For Operation 'movePaymentToINAU' with service id 'movePaymentToINAU2538'
	MovePaymentToINAURepository.prototype.movePaymentToINAU = function(params, onCompletion){
		return MovePaymentToINAURepository.prototype.customVerb('movePaymentToINAU', params, onCompletion);
	};

	return MovePaymentToINAURepository;
})