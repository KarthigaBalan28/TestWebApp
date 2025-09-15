/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"password": "password",
		"authType": "authType",
		"error": "error",
		"errormsg": "errormsg",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"password": "string",
		"authType": "string",
		"error": "string",
		"errormsg": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"username",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDAuthService",
		tableName: "ValidatePassword"
	};

	Object.freeze(config);

	return config;
})