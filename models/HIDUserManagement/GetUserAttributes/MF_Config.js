/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"correlationId": "correlationId",
		"externalId": "externalId",
		"email": "email",
		"mobile": "mobile",
		"firstname": "firstname",
		"lastname": "lastname",
		"errMsg": "errMsg",
		"errorCode": "errorCode",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"correlationId": "string",
		"externalId": "string",
		"email": "string",
		"mobile": "string",
		"firstname": "string",
		"lastname": "string",
		"errMsg": "string",
		"errorCode": "string",
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
		tableName: "GetUserAttributes"
	};

	Object.freeze(config);

	return config;
})