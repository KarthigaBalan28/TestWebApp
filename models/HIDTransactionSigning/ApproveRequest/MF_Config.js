/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"auth_req_id": "auth_req_id",
		"expires_in": "expires_in",
		"interval": "interval",
		"error": "error",
		"error_description": "error_description",
		"deviceId": "deviceId",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"auth_req_id": "string",
		"expires_in": "number",
		"interval": "number",
		"error": "string",
		"error_description": "string",
		"deviceId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"auth_req_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDTransactionSigning",
		tableName: "ApproveRequest"
	};

	Object.freeze(config);

	return config;
})