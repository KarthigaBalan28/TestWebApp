/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"access_token": "access_token",
		"authType": "authType",
		"error": "error",
		"error_description": "error_description",
		"expires_in": "expires_in",
		"id_token": "id_token",
		"password": "password",
		"username": "username",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"access_token": "string",
		"authType": "string",
		"error": "string",
		"error_description": "string",
		"expires_in": "number",
		"id_token": "string",
		"password": "string",
		"username": "string",
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
		serviceName: "HIDTransactionSigning",
		tableName: "ChallengeValidation"
	};

	Object.freeze(config);

	return config;
})