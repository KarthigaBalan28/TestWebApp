/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"tm_sid": "tm_sid",
		"tm_tag": "tm_tag",
		"application_id": "application_id",
		"channel_id": "channel_id",
		"app_action_id": "app_action_id",
		"tm_action_id": "tm_action_id",
		"error_code": "error_code",
		"message": "message",
		"app_user_id": "app_user_id",
		"risk_score": "risk_score",
	};

	Object.freeze(mappings);

	var typings = {
		"tm_sid": "string",
		"tm_tag": "string",
		"application_id": "string",
		"channel_id": "string",
		"app_action_id": "string",
		"tm_action_id": "string",
		"error_code": "string",
		"message": "string",
		"app_user_id": "string",
		"risk_score": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"tm_sid",
					"tm_tag",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDAuthService",
		tableName: "RMScall"
	};

	Object.freeze(config);

	return config;
})