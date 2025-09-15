/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"AuthenticatorType": "AuthenticatorType",
		"UserId": "UserId",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "boolean",
		"AuthenticatorType": "string",
		"UserId": "string",
		"correlationId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"UserId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDObjects",
		tableName: "AddHardwareAuthenticator"
	};

	Object.freeze(config);

	return config;
})