/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"correlationId": "correlationId",
		"password": "password",
		"txId": "txId",
		"username": "username",
	};

	Object.freeze(mappings);

	var typings = {
		"correlationId": "string",
		"password": "string",
		"txId": "string",
		"username": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDTransactionSigning",
		tableName: "ValidateSMSOTP"
	};

	Object.freeze(config);

	return config;
})