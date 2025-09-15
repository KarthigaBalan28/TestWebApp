/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"filterItem": "filterItem",
		"deviceId": "deviceId",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"filterItem": "string",
		"deviceId": "string",
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
		tableName: "SearchHardwareDevice"
	};

	Object.freeze(config);

	return config;
})