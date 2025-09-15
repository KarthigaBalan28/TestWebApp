/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"deviceId": "deviceId",
		"status": "status",
		"owner": "owner",
		"errorMsg": "errorMsg",
		"errorCode": "errorCode",
		"active": "active",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"deviceId": "string",
		"status": "string",
		"owner": "string",
		"errorMsg": "string",
		"errorCode": "string",
		"active": "string",
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
		tableName: "AssignUnassignDevice"
	};

	Object.freeze(config);

	return config;
})