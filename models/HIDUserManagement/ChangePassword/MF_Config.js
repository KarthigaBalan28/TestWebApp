/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"ChangePasswordError": "ChangePasswordError",
		"password": "password",
		"status": "status",
		"userId": "userId",
		"userName": "userName",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"ChangePasswordError": "string",
		"password": "string",
		"status": "boolean",
		"userId": "string",
		"userName": "string",
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
		serviceName: "HIDUserManagement",
		tableName: "ChangePassword"
	};

	Object.freeze(config);

	return config;
})