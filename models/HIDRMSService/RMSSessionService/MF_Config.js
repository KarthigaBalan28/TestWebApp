/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"session": "session",
		"platform": "platform",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"session": "string",
		"platform": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"username",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDRMSService",
		tableName: "RMSSessionService"
	};

	Object.freeze(config);

	return config;
})