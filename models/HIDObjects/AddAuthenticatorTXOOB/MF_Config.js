/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"ExternalUserId": "ExternalUserId",
		"Authid": "Authid",
		"active_status": "active_status",
		"scimType_TXOTP": "scimType_TXOTP",
	};

	Object.freeze(mappings);

	var typings = {
		"ExternalUserId": "string",
		"Authid": "string",
		"active_status": "string",
		"scimType_TXOTP": "string",
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
		serviceName: "HIDObjects",
		tableName: "AddAuthenticatorTXOOB"
	};

	Object.freeze(config);

	return config;
})