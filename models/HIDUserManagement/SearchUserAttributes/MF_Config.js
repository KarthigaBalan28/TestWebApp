/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"email": "email",
		"phoneNumber": "phoneNumber",
		"errMsg": "errMsg",
		"errorCode": "errorCode",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"email": "string",
		"phoneNumber": "string",
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
		tableName: "SearchUserAttributes"
	};

	Object.freeze(config);

	return config;
})