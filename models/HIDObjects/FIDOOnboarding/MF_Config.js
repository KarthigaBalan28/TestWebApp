/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"credential": "credential",
		"request_uri": "request_uri",
		"id": "id",
		"rawId": "rawId",
		"clientDataJSON": "clientDataJSON",
		"attestationObject": "attestationObject",
		"csrf": "csrf",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"credential": "string",
		"request_uri": "string",
		"id": "string",
		"rawId": "string",
		"clientDataJSON": "string",
		"attestationObject": "string",
		"csrf": "string",
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
		tableName: "FIDOOnboarding"
	};

	Object.freeze(config);

	return config;
})