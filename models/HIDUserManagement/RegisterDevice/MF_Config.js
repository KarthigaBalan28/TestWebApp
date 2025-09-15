/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"detail_CreateDevice": "detail_CreateDevice",
		"detail_updateDevice": "detail_updateDevice",
		"DeviceId": "DeviceId",
		"errorCode": "errorCode",
		"errorCode_updateDevice": "errorCode_updateDevice",
		"provisionMsg": "provisionMsg",
		"UserId": "UserId",
		"username": "username",
		"usernameWithRandomNo": "usernameWithRandomNo",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"detail_CreateDevice": "string",
		"detail_updateDevice": "string",
		"DeviceId": "string",
		"errorCode": "string",
		"errorCode_updateDevice": "string",
		"provisionMsg": "string",
		"UserId": "string",
		"username": "string",
		"usernameWithRandomNo": "string",
		"correlationId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"DeviceId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDUserManagement",
		tableName: "RegisterDevice"
	};

	Object.freeze(config);

	return config;
})