/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"maxLength": "maxLength",
		"minDiffChars": "minDiffChars",
		"minLength": "minLength",
		"notEnglish": "notEnglish",
		"notUserAttribute": "notUserAttribute",
		"numOrAlpha": "numOrAlpha",
		"notSequence": "notSequence",
	};

	Object.freeze(mappings);

	var typings = {
		"maxLength": "string",
		"minDiffChars": "string",
		"minLength": "string",
		"notEnglish": "string",
		"notUserAttribute": "string",
		"numOrAlpha": "string",
		"notSequence": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"maxLength",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDAuthService",
		tableName: "PasswordPolicyCantSignIn"
	};

	Object.freeze(config);

	return config;
})