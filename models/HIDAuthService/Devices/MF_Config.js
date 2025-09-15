/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"friendlyName": "friendlyName",
		"type": "type",
		"status": "status",
		"active": "active",
		"owner": "owner",
		"userId": "userId",
		"username": "username",
		"startDate": "startDate",
		"expiryDate": "expiryDate",
		"msgId": "msgId",
		"searchDevicesServiceError": "searchDevicesServiceError",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"friendlyName": "string",
		"type": "string",
		"status": "string",
		"active": "boolean",
		"owner": "string",
		"userId": "string",
		"username": "string",
		"startDate": "string",
		"expiryDate": "string",
		"msgId": "string",
		"searchDevicesServiceError": "string",
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
		serviceName: "HIDAuthService",
		tableName: "Devices"
	};

	Object.freeze(config);

	return config;
})