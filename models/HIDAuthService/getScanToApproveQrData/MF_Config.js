/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"auth_req_id": "auth_req_id",
		"interval": "interval",
		"txid": "txid",
		"expires_in": "expires_in",
		"error": "error",
		"error_description": "error_description",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"auth_req_id": "string",
		"interval": "string",
		"txid": "string",
		"expires_in": "string",
		"error": "string",
		"error_description": "string",
		"correlationId": "string",
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
		serviceName: "HIDAuthService",
		tableName: "getScanToApproveQrData"
	};

	Object.freeze(config);

	return config;
})