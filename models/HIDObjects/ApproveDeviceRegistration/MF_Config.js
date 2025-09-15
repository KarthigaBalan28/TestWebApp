/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"Authorization": "Authorization",
		"detail_CreateDevice": "detail_CreateDevice",
		"detail_updateDevice": "detail_updateDevice",
		"DeviceId": "DeviceId",
		"deviceIdOrch": "deviceIdOrch",
		"deviceType": "deviceType",
		"errorCode": "errorCode",
		"errorCode_updateDevice": "errorCode_updateDevice",
		"expiryDate": "expiryDate",
		"provisionMsg": "provisionMsg",
		"scimType": "scimType",
		"startDate": "startDate",
		"URL": "URL",
		"UserId": "UserId",
		"username": "username",
		"usernameWithRandomNo": "usernameWithRandomNo",
		"correlationId": "correlationId",
		"Auth_Key": "Auth_Key",
		"GetInviteCodeServiceError": "GetInviteCodeServiceError",
	};

	Object.freeze(mappings);

	var typings = {
		"Authorization": "string",
		"detail_CreateDevice": "string",
		"detail_updateDevice": "string",
		"DeviceId": "string",
		"deviceIdOrch": "string",
		"deviceType": "string",
		"errorCode": "string",
		"errorCode_updateDevice": "string",
		"expiryDate": "string",
		"provisionMsg": "string",
		"scimType": "string",
		"startDate": "string",
		"URL": "string",
		"UserId": "string",
		"username": "string",
		"usernameWithRandomNo": "string",
		"correlationId": "string",
		"Auth_Key": "string",
		"GetInviteCodeServiceError": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"UserId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDObjects",
		tableName: "ApproveDeviceRegistration"
	};

	Object.freeze(config);

	return config;
})