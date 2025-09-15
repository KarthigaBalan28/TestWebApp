define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GenerateChallengeRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GenerateChallengeRepository.prototype = Object.create(BaseRepository.prototype);
	GenerateChallengeRepository.prototype.constructor = GenerateChallengeRepository;

	//For Operation 'generateChallenge' with service id 'generateChallenge2229'
	GenerateChallengeRepository.prototype.generateChallenge = function(params, onCompletion){
		return GenerateChallengeRepository.prototype.customVerb('generateChallenge', params, onCompletion);
	};

	return GenerateChallengeRepository;
})