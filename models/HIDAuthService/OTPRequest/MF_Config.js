/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"AuthenticationType": "AuthenticationType",
		"OTP_SENT": "OTP_SENT",
		"password": "password",
		"isPasswordRequired": "isPasswordRequired",
		"msgId": "msgId",
		"sendOOBServiceError": "sendOOBServiceError",
		"correlationId": "correlationId",
		"error_description": "error_description",
		"errorMsg": "errorMsg",
		"reason": "reason",
		"userId": "userId",
		"Auth_Key": "Auth_Key",
		"AddAllOOBServiceError": "AddAllOOBServiceError",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"AuthenticationType": "string",
		"OTP_SENT": "boolean",
		"password": "string",
		"isPasswordRequired": "boolean",
		"msgId": "string",
		"sendOOBServiceError": "string",
		"correlationId": "string",
		"error_description": "string",
		"errorMsg": "string",
		"reason": "string",
		"userId": "string",
		"Auth_Key": "string",
		"AddAllOOBServiceError": "string",
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
		serviceName: "HIDAuthService",
		tableName: "OTPRequest"
	};

	Object.freeze(config);

	return config;
})