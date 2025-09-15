/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"maxLength": "maxLength",
		"minDiffChars": "minDiffChars",
		"minLength": "minLength",
		"notEnglish": "notEnglish",
		"notOldPassword": "notOldPassword",
		"notSequence": "notSequence",
		"notUserAttribute": "notUserAttribute",
	};

	Object.freeze(mappings);

	var typings = {
		"maxLength": "string",
		"minDiffChars": "string",
		"minLength": "string",
		"notEnglish": "boolean",
		"notOldPassword": "boolean",
		"notSequence": "boolean",
		"notUserAttribute": "boolean",
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
		serviceName: "HIDUserManagement",
		tableName: "PasswordPolicy"
	};

	Object.freeze(config);

	return config;
})