/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"access_token": "access_token",
		"authType": "authType",
		"client_id": "client_id",
		"content": "content",
		"error_description": "error_description",
		"password": "password",
		"username": "username",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"access_token": "string",
		"authType": "string",
		"client_id": "string",
		"content": "string",
		"error_description": "string",
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
		tableName: "SignatureValidation"
	};

	Object.freeze(config);

	return config;
})