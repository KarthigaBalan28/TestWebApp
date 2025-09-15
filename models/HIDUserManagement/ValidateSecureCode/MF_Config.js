/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"password": "password",
		"authType": "authType",
		"channelId": "channelId",
		"access_token": "access_token",
		"errormsg": "errormsg",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"password": "string",
		"authType": "string",
		"channelId": "string",
		"access_token": "string",
		"errormsg": "string",
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
		serviceName: "HIDUserManagement",
		tableName: "ValidateSecureCode"
	};

	Object.freeze(config);

	return config;
})