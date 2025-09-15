/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"client_id": "client_id",
		"error": "error",
		"error_description": "error_description",
		"expires_in": "expires_in",
		"redirect_uri": "redirect_uri",
		"request_uri": "request_uri",
		"response_type": "response_type",
		"scope": "scope",
		"username": "username",
		"id": "id",
		"rawId": "rawId",
		"clientDataJSON": "clientDataJSON",
		"attestationObject": "attestationObject",
		"csrf": "csrf",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"client_id": "string",
		"error": "string",
		"error_description": "string",
		"expires_in": "number",
		"redirect_uri": "string",
		"request_uri": "string",
		"response_type": "string",
		"scope": "string",
		"username": "string",
		"id": "string",
		"rawId": "string",
		"clientDataJSON": "string",
		"attestationObject": "string",
		"csrf": "string",
		"correlationId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"client_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDUserManagement",
		tableName: "FIDORegistration"
	};

	Object.freeze(config);

	return config;
})