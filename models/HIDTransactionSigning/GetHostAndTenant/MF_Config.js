/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"success": "success",
		"host": "host",
		"tenant": "tenant",
		"errorMessage": "errorMessage",
	};

	Object.freeze(mappings);

	var typings = {
		"success": "string",
		"host": "string",
		"tenant": "string",
		"errorMessage": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"tenant",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDTransactionSigning",
		tableName: "GetHostAndTenant"
	};

	Object.freeze(config);

	return config;
})