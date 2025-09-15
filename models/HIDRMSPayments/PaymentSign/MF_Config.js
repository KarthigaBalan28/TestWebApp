/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"application_id": "application_id",
		"app_action_id": "app_action_id",
		"app_payment_id": "app_payment_id",
		"app_session_id": "app_session_id",
		"app_user_id": "app_user_id",
		"channel_id": "channel_id",
		"client_ip": "client_ip",
		"error_code": "error_code",
		"message": "message",
		"payment_state": "payment_state",
		"request_id": "request_id",
		"security_item_type": "security_item_type",
		"signature_state": "signature_state",
		"tm_action_id": "tm_action_id",
		"tm_device_tag": "tm_device_tag",
		"tm_session_sid": "tm_session_sid",
		"platform": "platform",
	};

	Object.freeze(mappings);

	var typings = {
		"application_id": "string",
		"app_action_id": "string",
		"app_payment_id": "string",
		"app_session_id": "string",
		"app_user_id": "string",
		"channel_id": "string",
		"client_ip": "string",
		"error_code": "number",
		"message": "string",
		"payment_state": "string",
		"request_id": "string",
		"security_item_type": "string",
		"signature_state": "string",
		"tm_action_id": "string",
		"tm_device_tag": "string",
		"tm_session_sid": "string",
		"platform": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"app_action_id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDRMSPayments",
		tableName: "PaymentSign"
	};

	Object.freeze(config);

	return config;
})