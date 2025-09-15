/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"password": "password",
		"authType": "authType",
		"success": "success",
		"errMsg": "errMsg",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"password": "string",
		"authType": "string",
		"success": "string",
		"errMsg": "string",
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
		tableName: "ValidateSoftToken"
	};

	Object.freeze(config);

	return config;
})