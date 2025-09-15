/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"correlationId": "correlationId",
		"DEVICETYPE": "DEVICETYPE",
		"ExternalUserId": "ExternalUserId",
		"Message": "Message",
	};

	Object.freeze(mappings);

	var typings = {
		"correlationId": "string",
		"DEVICETYPE": "string",
		"ExternalUserId": "string",
		"Message": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"ExternalUserId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDTransactionSigning",
		tableName: "SendTXOOBSMS"
	};

	Object.freeze(config);

	return config;
})