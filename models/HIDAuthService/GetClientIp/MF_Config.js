/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"clientIp": "clientIp",
		"errMsg": "errMsg",
		"success": "success",
	};

	Object.freeze(mappings);

	var typings = {
		"clientIp": "string",
		"errMsg": "string",
		"success": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"clientIp",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDAuthService",
		tableName: "GetClientIp"
	};

	Object.freeze(config);

	return config;
})