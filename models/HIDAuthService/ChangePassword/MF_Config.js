/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"password": "password",
		"auth_key": "auth_key",
		"correlationId": "correlationId",
		"error": "error",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"password": "string",
		"auth_key": "string",
		"correlationId": "string",
		"error": "string",
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
		tableName: "ChangePassword"
	};

	Object.freeze(config);

	return config;
})