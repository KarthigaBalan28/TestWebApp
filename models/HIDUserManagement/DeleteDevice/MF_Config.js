/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"errMsg": "errMsg",
		"status": "status",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"errMsg": "string",
		"status": "string",
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
		tableName: "DeleteDevice"
	};

	Object.freeze(config);

	return config;
})