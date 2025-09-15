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
		"access_token": "access_token",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"password": "string",
		"authType": "string",
		"error": "string",
		"errormsg": "string",
		"access_token": "string",
		"correlationId": "string",
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
		serviceName: "HIDUserManagement",
		tableName: "ValidatePassword"
	};

	Object.freeze(config);

	return config;
})