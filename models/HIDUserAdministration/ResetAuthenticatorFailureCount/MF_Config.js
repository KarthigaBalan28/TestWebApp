/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"authType": "authType",
		"consecutiveFailed": "consecutiveFailed",
		"consecutiveSuccess": "consecutiveSuccess",
		"created": "created",
		"disableThreshold": "disableThreshold",
		"expiryDate": "expiryDate",
		"filter": "filter",
		"id": "id",
		"lastSuccessfulDate": "lastSuccessfulDate",
		"PasswordResetError": "PasswordResetError",
		"ServErrMsg": "ServErrMsg",
		"status": "status",
		"totalFailed": "totalFailed",
		"totalResults": "totalResults",
		"totalSuccess": "totalSuccess",
		"userid": "userid",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "string",
		"authType": "string",
		"consecutiveFailed": "string",
		"consecutiveSuccess": "string",
		"created": "string",
		"disableThreshold": "string",
		"expiryDate": "string",
		"filter": "string",
		"id": "string",
		"lastSuccessfulDate": "string",
		"PasswordResetError": "string",
		"ServErrMsg": "string",
		"status": "boolean",
		"totalFailed": "string",
		"totalResults": "string",
		"totalSuccess": "string",
		"userid": "string",
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
		tableName: "ResetAuthenticatorFailureCount"
	};

	Object.freeze(config);

	return config;
})