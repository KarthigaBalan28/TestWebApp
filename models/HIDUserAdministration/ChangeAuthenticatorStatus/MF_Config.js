/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"authType": "authType",
		"errorDetail": "errorDetail",
		"status": "status",
		"userId": "userId",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "string",
		"authType": "string",
		"errorDetail": "string",
		"status": "string",
		"userId": "string",
		"correlationId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"userId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDUserAdministration",
		tableName: "ChangeAuthenticatorStatus"
	};

	Object.freeze(config);

	return config;
})