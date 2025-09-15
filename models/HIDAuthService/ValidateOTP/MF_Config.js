/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"password": "password",
		"authType": "authType",
		"channelId": "channelId",
		"errormsg": "errormsg",
		"auth_key": "auth_key",
		"error_description": "error_description",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"password": "string",
		"authType": "string",
		"channelId": "string",
		"errormsg": "string",
		"auth_key": "string",
		"error_description": "string",
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
		tableName: "ValidateOTP"
	};

	Object.freeze(config);

	return config;
})