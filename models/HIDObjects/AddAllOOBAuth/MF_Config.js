/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"active_status": "active_status",
		"AuthenticatorType": "AuthenticatorType",
		"AuthenticatorValue": "AuthenticatorValue",
		"Authid": "Authid",
		"ExternalUserId": "ExternalUserId",
		"id": "id",
		"scimType_OTP": "scimType_OTP",
		"scimType_TXOTP": "scimType_TXOTP",
		"userId": "userId",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "string",
		"active_status": "string",
		"AuthenticatorType": "string",
		"AuthenticatorValue": "string",
		"Authid": "string",
		"ExternalUserId": "string",
		"id": "string",
		"scimType_OTP": "string",
		"scimType_TXOTP": "string",
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
		serviceName: "HIDObjects",
		tableName: "AddAllOOBAuth"
	};

	Object.freeze(config);

	return config;
})