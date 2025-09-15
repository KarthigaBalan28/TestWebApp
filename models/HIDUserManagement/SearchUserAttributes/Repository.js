define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function SearchUserAttributesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	SearchUserAttributesRepository.prototype = Object.create(BaseRepository.prototype);
	SearchUserAttributesRepository.prototype.constructor = SearchUserAttributesRepository;

	//For Operation 'searchUserAttributes' with service id 'SearchUserAttributes8215'
	SearchUserAttributesRepository.prototype.searchUserAttributes = function(params, onCompletion){
		return SearchUserAttributesRepository.prototype.customVerb('searchUserAttributes', params, onCompletion);
	};

	return SearchUserAttributesRepository;
})