/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"AuthenticatorType": "AuthenticatorType",
		"userId": "userId",
		"isPasswordRequired": "isPasswordRequired",
		"AuthenticatorValue": "AuthenticatorValue",
		"id": "id",
		"active": "active",
		"scimType_OTP": "scimType_OTP",
		"username": "username",
		"Authid": "Authid",
		"active_status": "active_status",
		"scimType_TXOTP": "scimType_TXOTP",
		"Auth_Key": "Auth_Key",
		"AddAllOOBServiceError": "AddAllOOBServiceError",
		"AuthenticationType": "AuthenticationType",
		"OOB_SENT": "OOB_SENT",
	};

	Object.freeze(mappings);

	var typings = {
		"AuthenticatorType": "string",
		"userId": "string",
		"isPasswordRequired": "string",
		"AuthenticatorValue": "string",
		"id": "string",
		"active": "string",
		"scimType_OTP": "string",
		"username": "string",
		"Authid": "string",
		"active_status": "string",
		"scimType_TXOTP": "string",
		"Auth_Key": "string",
		"AddAllOOBServiceError": "string",
		"AuthenticationType": "string",
		"OOB_SENT": "string",
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
		tableName: "AddAllOOBAuthNew"
	};

	Object.freeze(config);

	return config;
})