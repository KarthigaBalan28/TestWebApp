define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ChallengeValidationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ChallengeValidationRepository.prototype = Object.create(BaseRepository.prototype);
	ChallengeValidationRepository.prototype.constructor = ChallengeValidationRepository;

	//For Operation 'validateChallenge' with service id 'validate1526'
	ChallengeValidationRepository.prototype.validateChallenge = function(params, onCompletion){
		return ChallengeValidationRepository.prototype.customVerb('validateChallenge', params, onCompletion);
	};

	return ChallengeValidationRepository;
})