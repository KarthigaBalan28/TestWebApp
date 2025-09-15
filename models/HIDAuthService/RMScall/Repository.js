define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function RMScallRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	RMScallRepository.prototype = Object.create(BaseRepository.prototype);
	RMScallRepository.prototype.constructor = RMScallRepository;

	//For Operation 'visitScore' with service id 'visitScore1942'
	RMScallRepository.prototype.visitScore = function(params, onCompletion){
		return RMScallRepository.prototype.customVerb('visitScore', params, onCompletion);
	};

	//For Operation 'sessionLoginCreate' with service id 'SessionLoginCreate7181'
	RMScallRepository.prototype.sessionLoginCreate = function(params, onCompletion){
		return RMScallRepository.prototype.customVerb('sessionLoginCreate', params, onCompletion);
	};

	//For Operation 'sessionCreate' with service id 'SessionCreate9716'
	RMScallRepository.prototype.sessionCreate = function(params, onCompletion){
		return RMScallRepository.prototype.customVerb('sessionCreate', params, onCompletion);
	};

	return RMScallRepository;
})