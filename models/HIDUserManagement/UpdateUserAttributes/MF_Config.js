/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"externalId": "externalId",
		"username": "username",
		"mobile": "mobile",
		"email": "email",
		"firstname": "firstname",
		"lastname": "lastname",
		"correlationId": "correlationId",
		"errMsg": "errMsg",
		"errorCode": "errorCode",
	};

	Object.freeze(mappings);

	var typings = {
		"externalId": "string",
		"username": "string",
		"mobile": "string",
		"email": "string",
		"firstname": "string",
		"lastname": "string",
		"correlationId": "string",
		"errMsg": "string",
		"errorCode": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"externalId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDUserManagement",
		tableName: "UpdateUserAttributes"
	};

	Object.freeze(config);

	return config;
})