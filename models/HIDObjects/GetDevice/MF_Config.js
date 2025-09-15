/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"auth_key": "auth_key",
		"active": "active",
		"status": "status",
		"friendlyName": "friendlyName",
		"errorCode": "errorCode",
		"GetDeviceServiceError": "GetDeviceServiceError",
		"detail": "detail",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"auth_key": "string",
		"active": "string",
		"status": "string",
		"friendlyName": "string",
		"errorCode": "string",
		"GetDeviceServiceError": "string",
		"detail": "string",
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
		tableName: "GetDevice"
	};

	Object.freeze(config);

	return config;
})