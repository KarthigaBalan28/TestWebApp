define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ScimSampleRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ScimSampleRepository.prototype = Object.create(BaseRepository.prototype);
	ScimSampleRepository.prototype.constructor = ScimSampleRepository;

	//For Operation 'searchUserCopy' with service id 'SearchUser9134'
	ScimSampleRepository.prototype.searchUserCopy = function(params, onCompletion){
		return ScimSampleRepository.prototype.customVerb('searchUserCopy', params, onCompletion);
	};

	return ScimSampleRepository;
})