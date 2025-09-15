/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"userId": "userId",
		"AuthenticatorType": "AuthenticatorType",
		"AuthenticatorValue": "AuthenticatorValue",
		"Auth_Key": "Auth_Key",
		"OOB_PIN": "OOB_PIN",
		"active": "active",
		"id": "id",
		"scimType_OTP": "scimType_OTP",
		"AuthenticationType": "AuthenticationType",
		"password": "password",
		"channelId": "channelId",
		"isPasswordRequired": "isPasswordRequired",
		"OOB_SENT": "OOB_SENT",
		"AddOOBServiceError": "AddOOBServiceError",
		"correlationId": "correlationId",
		"errorMsg": "errorMsg",
		"error_description": "error_description",
		"reason": "reason",
		"sendOOBServiceError": "sendOOBServiceError",
		"factor": "factor",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"userId": "string",
		"AuthenticatorType": "string",
		"AuthenticatorValue": "string",
		"Auth_Key": "string",
		"OOB_PIN": "string",
		"active": "string",
		"id": "string",
		"scimType_OTP": "string",
		"AuthenticationType": "string",
		"password": "string",
		"channelId": "string",
		"isPasswordRequired": "string",
		"OOB_SENT": "string",
		"AddOOBServiceError": "string",
		"correlationId": "string",
		"errorMsg": "string",
		"error_description": "string",
		"reason": "string",
		"sendOOBServiceError": "string",
		"factor": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"username",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDObjects",
		tableName: "AddOOBAuthAndSendSMS"
	};

	Object.freeze(config);

	return config;
})