/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"application_id": "application_id",
		"app_payment_id": "app_payment_id",
		"channel_id": "channel_id",
		"error_code": "error_code",
		"message": "message",
		"payment_state": "payment_state",
		"request_id": "request_id",
		"platform": "platform",
	};

	Object.freeze(mappings);

	var typings = {
		"application_id": "string",
		"app_payment_id": "string",
		"channel_id": "string",
		"error_code": "number",
		"message": "string",
		"payment_state": "string",
		"request_id": "string",
		"platform": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"app_payment_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDRMSPayments",
		tableName: "PaymentUpdate"
	};

	Object.freeze(config);

	return config;
})