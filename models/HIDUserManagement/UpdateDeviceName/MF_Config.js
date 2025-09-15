/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"friendlyName": "friendlyName",
		"type": "type",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"friendlyName": "string",
		"type": "string",
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
		serviceName: "HIDUserManagement",
		tableName: "UpdateDeviceName"
	};

	Object.freeze(config);

	return config;
})