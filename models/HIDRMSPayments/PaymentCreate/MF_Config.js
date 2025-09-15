/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"amount": "amount",
		"application_id": "application_id",
		"app_action_id": "app_action_id",
		"app_payment_id": "app_payment_id",
		"app_session_id": "app_session_id",
		"app_user_id": "app_user_id",
		"channel_id": "channel_id",
		"client_ip": "client_ip",
		"currency": "currency",
		"error_code": "error_code",
		"message": "message",
		"partner_account_id": "partner_account_id",
		"partner_account_number": "partner_account_number",
		"patner_account_mode": "patner_account_mode",
		"patner_bank_code": "patner_bank_code",
		"patner_country": "patner_country",
		"patner_iban": "patner_iban",
		"patner_swift": "patner_swift",
		"patner_swift_account_number": "patner_swift_account_number",
		"payment_state": "payment_state",
		"payment_type": "payment_type",
		"request_id": "request_id",
		"risk": "risk",
		"source_account_id": "source_account_id",
		"source_account_mode": "source_account_mode",
		"source_account_number": "source_account_number",
		"source_bank_code": "source_bank_code",
		"source_country": "source_country",
		"source_iban": "source_iban",
		"source_swift": "source_swift",
		"source_swift_account_number": "source_swift_account_number",
		"tags": "tags",
		"tm_device_tag": "tm_device_tag",
		"tm_session_sid": "tm_session_sid",
		"app_action_id_resp": "app_action_id_resp",
		"platform": "platform",
	};

	Object.freeze(mappings);

	var typings = {
		"amount": "string",
		"application_id": "string",
		"app_action_id": "string",
		"app_payment_id": "string",
		"app_session_id": "string",
		"app_user_id": "string",
		"channel_id": "string",
		"client_ip": "string",
		"currency": "string",
		"error_code": "number",
		"message": "string",
		"partner_account_id": "string",
		"partner_account_number": "string",
		"patner_account_mode": "string",
		"patner_bank_code": "string",
		"patner_country": "string",
		"patner_iban": "string",
		"patner_swift": "string",
		"patner_swift_account_number": "string",
		"payment_state": "string",
		"payment_type": "string",
		"request_id": "string",
		"risk": "string",
		"source_account_id": "string",
		"source_account_mode": "string",
		"source_account_number": "string",
		"source_bank_code": "string",
		"source_country": "string",
		"source_iban": "string",
		"source_swift": "string",
		"source_swift_account_number": "string",
		"tags": "string",
		"tm_device_tag": "string",
		"tm_session_sid": "string",
		"app_action_id_resp": "string",
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
		tableName: "PaymentCreate"
	};

	Object.freeze(config);

	return config;
})