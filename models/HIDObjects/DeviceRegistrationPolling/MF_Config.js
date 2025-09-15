/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"deviceStatus": "deviceStatus",
		"errmsg": "errmsg",
		"auth_key": "auth_key",
		"isOnboarding": "isOnboarding",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"deviceStatus": "string",
		"errmsg": "string",
		"auth_key": "string",
		"isOnboarding": "string",
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
		tableName: "DeviceRegistrationPolling"
	};

	Object.freeze(config);

	return config;
})