/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"AuthenticationType": "AuthenticationType",
		"OOB_SENT": "OOB_SENT",
		"password": "password",
		"username": "username",
		"isPasswordRequired": "isPasswordRequired",
		"errorMsg": "errorMsg",
		"reason": "reason",
		"error_description": "error_description",
	};

	Object.freeze(mappings);

	var typings = {
		"AuthenticationType": "string",
		"OOB_SENT": "string",
		"password": "string",
		"username": "string",
		"isPasswordRequired": "string",
		"errorMsg": "string",
		"reason": "string",
		"error_description": "string",
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
		tableName: "SendOOB"
	};

	Object.freeze(config);

	return config;
})