/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"authType": "authType",
		"errorCode": "errorCode",
		"filter": "filter",
		"status": "status",
		"totalResults": "totalResults",
		"UserAccountResetError": "UserAccountResetError",
		"userId": "userId",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "string",
		"authType": "string",
		"errorCode": "string",
		"filter": "string",
		"status": "boolean",
		"totalResults": "string",
		"UserAccountResetError": "string",
		"userId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDUserAdministration",
		tableName: "UserAccountReset"
	};

	Object.freeze(config);

	return config;
})