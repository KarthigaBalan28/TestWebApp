/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"authType": "authType",
		"consecutiveFailed": "consecutiveFailed",
		"disableThreshold": "disableThreshold",
		"PasswordResetError": "PasswordResetError",
		"status": "status",
		"userid": "userid",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"authType": "string",
		"consecutiveFailed": "string",
		"disableThreshold": "string",
		"PasswordResetError": "string",
		"status": "boolean",
		"userid": "string",
		"correlationId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"userid",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDUserAdministration",
		tableName: "ResetAuthFailCount"
	};

	Object.freeze(config);

	return config;
})