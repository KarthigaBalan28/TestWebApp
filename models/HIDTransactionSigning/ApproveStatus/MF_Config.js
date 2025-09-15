/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"access_token": "access_token",
		"auth_status": "auth_status",
		"mfa_key": "mfa_key",
	};

	Object.freeze(mappings);

	var typings = {
		"access_token": "string",
		"auth_status": "string",
		"mfa_key": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"mfa_key",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDTransactionSigning",
		tableName: "ApproveStatus"
	};

	Object.freeze(config);

	return config;
})