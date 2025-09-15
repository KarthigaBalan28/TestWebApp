/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"deviceStatus": "deviceStatus",
		"errmsg": "errmsg",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"deviceStatus": "string",
		"errmsg": "string",
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
		tableName: "DeviceRegistrationPolling"
	};

	Object.freeze(config);

	return config;
})