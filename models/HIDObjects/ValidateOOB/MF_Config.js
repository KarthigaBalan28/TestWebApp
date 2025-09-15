/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"access_token": "access_token",
		"AuthenticationType": "AuthenticationType",
		"errorMsg": "errorMsg",
		"error_description": "error_description",
		"OTP": "OTP",
		"username": "username",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"access_token": "string",
		"AuthenticationType": "string",
		"errorMsg": "string",
		"error_description": "string",
		"OTP": "string",
		"username": "string",
		"correlationId": "string",
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
		tableName: "ValidateOOB"
	};

	Object.freeze(config);

	return config;
})