/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"backend_error_code": "backend_error_code",
		"backend_error_message": "backend_error_message",
		"errmsg": "errmsg",
		"httpStatusCode": "httpStatusCode",
		"tppToken": "tppToken",
		"Message": "Message",
	};

	Object.freeze(mappings);

	var typings = {
		"backend_error_code": "string",
		"backend_error_message": "string",
		"errmsg": "string",
		"httpStatusCode": "string",
		"tppToken": "string",
		"Message": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"tppToken",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDPSD2TPPObjects",
		tableName: "ValidatePsd2TppToken"
	};

	Object.freeze(config);

	return config;
})