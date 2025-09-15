/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"paymentId": "paymentId",
		"amount": "amount",
		"beneficiaryName": "beneficiaryName",
		"frequencyType": "frequencyType",
		"fromAccountCurrency": "fromAccountCurrency",
		"fromAccountNumber": "fromAccountNumber",
		"isScheduled": "isScheduled",
		"serviceName": "serviceName",
		"toAccountCurrency": "toAccountCurrency",
		"toAccountNumber": "toAccountNumber",
		"transactionCurrency": "transactionCurrency",
		"transactionType": "transactionType",
	};

	Object.freeze(mappings);

	var typings = {
		"paymentId": "string",
		"amount": "string",
		"beneficiaryName": "string",
		"frequencyType": "string",
		"fromAccountCurrency": "string",
		"fromAccountNumber": "string",
		"isScheduled": "string",
		"serviceName": "string",
		"toAccountCurrency": "string",
		"toAccountNumber": "string",
		"transactionCurrency": "string",
		"transactionType": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"paymentId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "HIDPSD2TPPObjects",
		tableName: "ApprovePayments"
	};

	Object.freeze(config);

	return config;
})