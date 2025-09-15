/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"authType": "authType",
		"challenge": "challenge",
		"detail": "detail",
		"deviceId": "deviceId",
		"errorCode": "errorCode",
		"username": "username",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"authType": "string",
		"challenge": "string",
		"detail": "string",
		"deviceId": "string",
		"errorCode": "number",
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
		serviceName: "HIDTransactionSigning",
		tableName: "GenerateChallenge"
	};

	Object.freeze(config);

	return config;
})