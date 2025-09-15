/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"username": "username",
		"AuthenticationType": "AuthenticationType",
		"OTP_SENT": "OTP_SENT",
	};

	Object.freeze(mappings);

	var typings = {
		"username": "string",
		"AuthenticationType": "enum",
		"OTP_SENT": "boolean",
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
		serviceName: "HIDTransactionSigning",
		tableName: "OTPRequest"
	};

	Object.freeze(config);

	return config;
})