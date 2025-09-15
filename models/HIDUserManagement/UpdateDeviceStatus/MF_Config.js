/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"active": "active",
		"detail_updateDevice": "detail_updateDevice",
		"DeviceId": "DeviceId",
		"errorCode_updateDevice": "errorCode_updateDevice",
		"status": "status",
		"type": "type",
		"correlationId": "correlationId",
	};

	Object.freeze(mappings);

	var typings = {
		"active": "boolean",
		"detail_updateDevice": "string",
		"DeviceId": "string",
		"errorCode_updateDevice": "string",
		"status": "string",
		"type": "string",
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
		tableName: "UpdateDeviceStatus"
	};

	Object.freeze(config);

	return config;
})