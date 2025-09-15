/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"AuthenticatorType": "AuthenticatorType",
		"AuthenticatorValue": "AuthenticatorValue",
		"id": "id",
		"scimType_OTP": "scimType_OTP",
		"userId": "userId",
		"isPasswordRequired": "isPasswordRequired",
		"OOB_PIN": "OOB_PIN",
		"username": "username",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "string",
		"AuthenticatorType": "string",
		"AuthenticatorValue": "string",
		"id": "string",
		"scimType_OTP": "string",
		"userId": "string",
		"isPasswordRequired": "boolean",
		"OOB_PIN": "string",
		"username": "string",
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
		serviceName: "HIDObjects",
		tableName: "AddOOBAuthenticator"
	};

	Object.freeze(config);

	return config;
})