/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"friendlyName": "friendlyName",
		"auth_key": "auth_key",
		"errorCode": "errorCode",
		"detail": "detail",
		"UpdateFriendlyNameServiceError": "UpdateFriendlyNameServiceError",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"friendlyName": "string",
		"auth_key": "string",
		"errorCode": "string",
		"detail": "string",
		"UpdateFriendlyNameServiceError": "string",
		"correlationId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"deviceId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDObjects",
		tableName: "UpdateFriendlyName"
	};

	Object.freeze(config);

	return config;
})