define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function SignatureValidationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	SignatureValidationRepository.prototype = Object.create(BaseRepository.prototype);
	SignatureValidationRepository.prototype.constructor = SignatureValidationRepository;

	//For Operation 'validateSignature' with service id 'signatureValiation1651'
	SignatureValidationRepository.prototype.validateSignature = function(params, onCompletion){
		return SignatureValidationRepository.prototype.customVerb('validateSignature', params, onCompletion);
	};

	return SignatureValidationRepository;
})