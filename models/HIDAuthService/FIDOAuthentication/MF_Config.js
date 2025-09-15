/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"request_uri": "request_uri",
		"id": "id",
		"csrf": "csrf",
		"clientDataJSON": "clientDataJSON",
		"authenticatorData": "authenticatorData",
		"signature": "signature",
		"userHandle": "userHandle",
		"csrfx": "csrfx",
		"code": "code",
		"context": "context",
		"password": "password",
		"authType": "authType",
		"id_token": "id_token",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"request_uri": "string",
		"id": "string",
		"csrf": "string",
		"clientDataJSON": "string",
		"authenticatorData": "string",
		"signature": "string",
		"userHandle": "string",
		"csrfx": "string",
		"code": "string",
		"context": "string",
		"password": "string",
		"authType": "string",
		"id_token": "string",
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
		serviceName: "HIDAuthService",
		tableName: "FIDOAuthentication"
	};

	Object.freeze(config);

	return config;
})