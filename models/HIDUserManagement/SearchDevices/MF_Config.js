/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"deviceId": "deviceId",
		"friendlyName": "friendlyName",
		"type": "type",
		"status": "status",
		"owner": "owner",
		"username": "username",
		"userId": "userId",
		"startDate": "startDate",
		"expiryDate": "expiryDate",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "boolean",
		"deviceId": "string",
		"friendlyName": "string",
		"type": "string",
		"status": "string",
		"owner": "string",
		"username": "string",
		"userId": "string",
		"startDate": "string",
		"expiryDate": "string",
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
		tableName: "SearchDevices"
	};

	Object.freeze(config);

	return config;
})