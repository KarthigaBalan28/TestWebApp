/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "PaymentCreate", "objectService" : "HIDRMSPayments"};

    var setterFunctions = {
        amount: function(val, state) {
            context["field"] = "amount";
            context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
            state['amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        application_id: function(val, state) {
            context["field"] = "application_id";
            context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
            state['application_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_action_id: function(val, state) {
            context["field"] = "app_action_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
            state['app_action_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_payment_id: function(val, state) {
            context["field"] = "app_payment_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
            state['app_payment_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_session_id: function(val, state) {
            context["field"] = "app_session_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_session_id"] : null);
            state['app_session_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_user_id: function(val, state) {
            context["field"] = "app_user_id";
            context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
            state['app_user_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        channel_id: function(val, state) {
            context["field"] = "channel_id";
            context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
            state['channel_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        client_ip: function(val, state) {
            context["field"] = "client_ip";
            context["metadata"] = (objectMetadata ? objectMetadata["client_ip"] : null);
            state['client_ip'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        currency: function(val, state) {
            context["field"] = "currency";
            context["metadata"] = (objectMetadata ? objectMetadata["currency"] : null);
            state['currency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error_code: function(val, state) {
            context["field"] = "error_code";
            context["metadata"] = (objectMetadata ? objectMetadata["error_code"] : null);
            state['error_code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        message: function(val, state) {
            context["field"] = "message";
            context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
            state['message'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        partner_account_id: function(val, state) {
            context["field"] = "partner_account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["partner_account_id"] : null);
            state['partner_account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        partner_account_number: function(val, state) {
            context["field"] = "partner_account_number";
            context["metadata"] = (objectMetadata ? objectMetadata["partner_account_number"] : null);
            state['partner_account_number'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        patner_account_mode: function(val, state) {
            context["field"] = "patner_account_mode";
            context["metadata"] = (objectMetadata ? objectMetadata["patner_account_mode"] : null);
            state['patner_account_mode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        patner_bank_code: function(val, state) {
            context["field"] = "patner_bank_code";
            context["metadata"] = (objectMetadata ? objectMetadata["patner_bank_code"] : null);
            state['patner_bank_code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        patner_country: function(val, state) {
            context["field"] = "patner_country";
            context["metadata"] = (objectMetadata ? objectMetadata["patner_country"] : null);
            state['patner_country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        patner_iban: function(val, state) {
            context["field"] = "patner_iban";
            context["metadata"] = (objectMetadata ? objectMetadata["patner_iban"] : null);
            state['patner_iban'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        patner_swift: function(val, state) {
            context["field"] = "patner_swift";
            context["metadata"] = (objectMetadata ? objectMetadata["patner_swift"] : null);
            state['patner_swift'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        patner_swift_account_number: function(val, state) {
            context["field"] = "patner_swift_account_number";
            context["metadata"] = (objectMetadata ? objectMetadata["patner_swift_account_number"] : null);
            state['patner_swift_account_number'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payment_state: function(val, state) {
            context["field"] = "payment_state";
            context["metadata"] = (objectMetadata ? objectMetadata["payment_state"] : null);
            state['payment_state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payment_type: function(val, state) {
            context["field"] = "payment_type";
            context["metadata"] = (objectMetadata ? objectMetadata["payment_type"] : null);
            state['payment_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        request_id: function(val, state) {
            context["field"] = "request_id";
            context["metadata"] = (objectMetadata ? objectMetadata["request_id"] : null);
            state['request_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        risk: function(val, state) {
            context["field"] = "risk";
            context["metadata"] = (objectMetadata ? objectMetadata["risk"] : null);
            state['risk'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_account_id: function(val, state) {
            context["field"] = "source_account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["source_account_id"] : null);
            state['source_account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_account_mode: function(val, state) {
            context["field"] = "source_account_mode";
            context["metadata"] = (objectMetadata ? objectMetadata["source_account_mode"] : null);
            state['source_account_mode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_account_number: function(val, state) {
            context["field"] = "source_account_number";
            context["metadata"] = (objectMetadata ? objectMetadata["source_account_number"] : null);
            state['source_account_number'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_bank_code: function(val, state) {
            context["field"] = "source_bank_code";
            context["metadata"] = (objectMetadata ? objectMetadata["source_bank_code"] : null);
            state['source_bank_code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_country: function(val, state) {
            context["field"] = "source_country";
            context["metadata"] = (objectMetadata ? objectMetadata["source_country"] : null);
            state['source_country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_iban: function(val, state) {
            context["field"] = "source_iban";
            context["metadata"] = (objectMetadata ? objectMetadata["source_iban"] : null);
            state['source_iban'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_swift: function(val, state) {
            context["field"] = "source_swift";
            context["metadata"] = (objectMetadata ? objectMetadata["source_swift"] : null);
            state['source_swift'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        source_swift_account_number: function(val, state) {
            context["field"] = "source_swift_account_number";
            context["metadata"] = (objectMetadata ? objectMetadata["source_swift_account_number"] : null);
            state['source_swift_account_number'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tags: function(val, state) {
            context["field"] = "tags";
            context["metadata"] = (objectMetadata ? objectMetadata["tags"] : null);
            state['tags'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tm_device_tag: function(val, state) {
            context["field"] = "tm_device_tag";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_device_tag"] : null);
            state['tm_device_tag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        tm_session_sid: function(val, state) {
            context["field"] = "tm_session_sid";
            context["metadata"] = (objectMetadata ? objectMetadata["tm_session_sid"] : null);
            state['tm_session_sid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        app_action_id_resp: function(val, state) {
            context["field"] = "app_action_id_resp";
            context["metadata"] = (objectMetadata ? objectMetadata["app_action_id_resp"] : null);
            state['app_action_id_resp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        platform: function(val, state) {
            context["field"] = "platform";
            context["metadata"] = (objectMetadata ? objectMetadata["platform"] : null);
            state['platform'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function PaymentCreate(defaultValues) {
        var privateState = {};
        context["field"] = "amount";
        context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
        privateState.amount = defaultValues ?
            (defaultValues["amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["amount"], context) :
                null) :
            null;

        context["field"] = "application_id";
        context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
        privateState.application_id = defaultValues ?
            (defaultValues["application_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["application_id"], context) :
                null) :
            null;

        context["field"] = "app_action_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
        privateState.app_action_id = defaultValues ?
            (defaultValues["app_action_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_action_id"], context) :
                null) :
            null;

        context["field"] = "app_payment_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
        privateState.app_payment_id = defaultValues ?
            (defaultValues["app_payment_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_payment_id"], context) :
                null) :
            null;

        context["field"] = "app_session_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_session_id"] : null);
        privateState.app_session_id = defaultValues ?
            (defaultValues["app_session_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_session_id"], context) :
                null) :
            null;

        context["field"] = "app_user_id";
        context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
        privateState.app_user_id = defaultValues ?
            (defaultValues["app_user_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_user_id"], context) :
                null) :
            null;

        context["field"] = "channel_id";
        context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
        privateState.channel_id = defaultValues ?
            (defaultValues["channel_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["channel_id"], context) :
                null) :
            null;

        context["field"] = "client_ip";
        context["metadata"] = (objectMetadata ? objectMetadata["client_ip"] : null);
        privateState.client_ip = defaultValues ?
            (defaultValues["client_ip"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["client_ip"], context) :
                null) :
            null;

        context["field"] = "currency";
        context["metadata"] = (objectMetadata ? objectMetadata["currency"] : null);
        privateState.currency = defaultValues ?
            (defaultValues["currency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currency"], context) :
                null) :
            null;

        context["field"] = "error_code";
        context["metadata"] = (objectMetadata ? objectMetadata["error_code"] : null);
        privateState.error_code = defaultValues ?
            (defaultValues["error_code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_code"], context) :
                null) :
            null;

        context["field"] = "message";
        context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
        privateState.message = defaultValues ?
            (defaultValues["message"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["message"], context) :
                null) :
            null;

        context["field"] = "partner_account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["partner_account_id"] : null);
        privateState.partner_account_id = defaultValues ?
            (defaultValues["partner_account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["partner_account_id"], context) :
                null) :
            null;

        context["field"] = "partner_account_number";
        context["metadata"] = (objectMetadata ? objectMetadata["partner_account_number"] : null);
        privateState.partner_account_number = defaultValues ?
            (defaultValues["partner_account_number"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["partner_account_number"], context) :
                null) :
            null;

        context["field"] = "patner_account_mode";
        context["metadata"] = (objectMetadata ? objectMetadata["patner_account_mode"] : null);
        privateState.patner_account_mode = defaultValues ?
            (defaultValues["patner_account_mode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["patner_account_mode"], context) :
                null) :
            null;

        context["field"] = "patner_bank_code";
        context["metadata"] = (objectMetadata ? objectMetadata["patner_bank_code"] : null);
        privateState.patner_bank_code = defaultValues ?
            (defaultValues["patner_bank_code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["patner_bank_code"], context) :
                null) :
            null;

        context["field"] = "patner_country";
        context["metadata"] = (objectMetadata ? objectMetadata["patner_country"] : null);
        privateState.patner_country = defaultValues ?
            (defaultValues["patner_country"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["patner_country"], context) :
                null) :
            null;

        context["field"] = "patner_iban";
        context["metadata"] = (objectMetadata ? objectMetadata["patner_iban"] : null);
        privateState.patner_iban = defaultValues ?
            (defaultValues["patner_iban"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["patner_iban"], context) :
                null) :
            null;

        context["field"] = "patner_swift";
        context["metadata"] = (objectMetadata ? objectMetadata["patner_swift"] : null);
        privateState.patner_swift = defaultValues ?
            (defaultValues["patner_swift"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["patner_swift"], context) :
                null) :
            null;

        context["field"] = "patner_swift_account_number";
        context["metadata"] = (objectMetadata ? objectMetadata["patner_swift_account_number"] : null);
        privateState.patner_swift_account_number = defaultValues ?
            (defaultValues["patner_swift_account_number"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["patner_swift_account_number"], context) :
                null) :
            null;

        context["field"] = "payment_state";
        context["metadata"] = (objectMetadata ? objectMetadata["payment_state"] : null);
        privateState.payment_state = defaultValues ?
            (defaultValues["payment_state"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payment_state"], context) :
                null) :
            null;

        context["field"] = "payment_type";
        context["metadata"] = (objectMetadata ? objectMetadata["payment_type"] : null);
        privateState.payment_type = defaultValues ?
            (defaultValues["payment_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payment_type"], context) :
                null) :
            null;

        context["field"] = "request_id";
        context["metadata"] = (objectMetadata ? objectMetadata["request_id"] : null);
        privateState.request_id = defaultValues ?
            (defaultValues["request_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["request_id"], context) :
                null) :
            null;

        context["field"] = "risk";
        context["metadata"] = (objectMetadata ? objectMetadata["risk"] : null);
        privateState.risk = defaultValues ?
            (defaultValues["risk"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["risk"], context) :
                null) :
            null;

        context["field"] = "source_account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["source_account_id"] : null);
        privateState.source_account_id = defaultValues ?
            (defaultValues["source_account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_account_id"], context) :
                null) :
            null;

        context["field"] = "source_account_mode";
        context["metadata"] = (objectMetadata ? objectMetadata["source_account_mode"] : null);
        privateState.source_account_mode = defaultValues ?
            (defaultValues["source_account_mode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_account_mode"], context) :
                null) :
            null;

        context["field"] = "source_account_number";
        context["metadata"] = (objectMetadata ? objectMetadata["source_account_number"] : null);
        privateState.source_account_number = defaultValues ?
            (defaultValues["source_account_number"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_account_number"], context) :
                null) :
            null;

        context["field"] = "source_bank_code";
        context["metadata"] = (objectMetadata ? objectMetadata["source_bank_code"] : null);
        privateState.source_bank_code = defaultValues ?
            (defaultValues["source_bank_code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_bank_code"], context) :
                null) :
            null;

        context["field"] = "source_country";
        context["metadata"] = (objectMetadata ? objectMetadata["source_country"] : null);
        privateState.source_country = defaultValues ?
            (defaultValues["source_country"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_country"], context) :
                null) :
            null;

        context["field"] = "source_iban";
        context["metadata"] = (objectMetadata ? objectMetadata["source_iban"] : null);
        privateState.source_iban = defaultValues ?
            (defaultValues["source_iban"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_iban"], context) :
                null) :
            null;

        context["field"] = "source_swift";
        context["metadata"] = (objectMetadata ? objectMetadata["source_swift"] : null);
        privateState.source_swift = defaultValues ?
            (defaultValues["source_swift"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_swift"], context) :
                null) :
            null;

        context["field"] = "source_swift_account_number";
        context["metadata"] = (objectMetadata ? objectMetadata["source_swift_account_number"] : null);
        privateState.source_swift_account_number = defaultValues ?
            (defaultValues["source_swift_account_number"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["source_swift_account_number"], context) :
                null) :
            null;

        context["field"] = "tags";
        context["metadata"] = (objectMetadata ? objectMetadata["tags"] : null);
        privateState.tags = defaultValues ?
            (defaultValues["tags"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tags"], context) :
                null) :
            null;

        context["field"] = "tm_device_tag";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_device_tag"] : null);
        privateState.tm_device_tag = defaultValues ?
            (defaultValues["tm_device_tag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_device_tag"], context) :
                null) :
            null;

        context["field"] = "tm_session_sid";
        context["metadata"] = (objectMetadata ? objectMetadata["tm_session_sid"] : null);
        privateState.tm_session_sid = defaultValues ?
            (defaultValues["tm_session_sid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["tm_session_sid"], context) :
                null) :
            null;

        context["field"] = "app_action_id_resp";
        context["metadata"] = (objectMetadata ? objectMetadata["app_action_id_resp"] : null);
        privateState.app_action_id_resp = defaultValues ?
            (defaultValues["app_action_id_resp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["app_action_id_resp"], context) :
                null) :
            null;

        context["field"] = "platform";
        context["metadata"] = (objectMetadata ? objectMetadata["platform"] : null);
        privateState.platform = defaultValues ?
            (defaultValues["platform"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["platform"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "amount": {
                get: function() {
                    context["field"] = "amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.amount, context);
                },
                set: function(val) {
                    setterFunctions['amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "application_id": {
                get: function() {
                    context["field"] = "application_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["application_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.application_id, context);
                },
                set: function(val) {
                    setterFunctions['application_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "app_action_id": {
                get: function() {
                    context["field"] = "app_action_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_action_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_action_id, context);
                },
                set: function(val) {
                    setterFunctions['app_action_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "app_payment_id": {
                get: function() {
                    context["field"] = "app_payment_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_payment_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_payment_id, context);
                },
                set: function(val) {
                    setterFunctions['app_payment_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "app_session_id": {
                get: function() {
                    context["field"] = "app_session_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_session_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_session_id, context);
                },
                set: function(val) {
                    setterFunctions['app_session_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "app_user_id": {
                get: function() {
                    context["field"] = "app_user_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_user_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_user_id, context);
                },
                set: function(val) {
                    setterFunctions['app_user_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "channel_id": {
                get: function() {
                    context["field"] = "channel_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["channel_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.channel_id, context);
                },
                set: function(val) {
                    setterFunctions['channel_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "client_ip": {
                get: function() {
                    context["field"] = "client_ip";
                    context["metadata"] = (objectMetadata ? objectMetadata["client_ip"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.client_ip, context);
                },
                set: function(val) {
                    setterFunctions['client_ip'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currency": {
                get: function() {
                    context["field"] = "currency";
                    context["metadata"] = (objectMetadata ? objectMetadata["currency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currency, context);
                },
                set: function(val) {
                    setterFunctions['currency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "error_code": {
                get: function() {
                    context["field"] = "error_code";
                    context["metadata"] = (objectMetadata ? objectMetadata["error_code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error_code, context);
                },
                set: function(val) {
                    setterFunctions['error_code'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "message": {
                get: function() {
                    context["field"] = "message";
                    context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.message, context);
                },
                set: function(val) {
                    setterFunctions['message'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "partner_account_id": {
                get: function() {
                    context["field"] = "partner_account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["partner_account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.partner_account_id, context);
                },
                set: function(val) {
                    setterFunctions['partner_account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "partner_account_number": {
                get: function() {
                    context["field"] = "partner_account_number";
                    context["metadata"] = (objectMetadata ? objectMetadata["partner_account_number"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.partner_account_number, context);
                },
                set: function(val) {
                    setterFunctions['partner_account_number'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "patner_account_mode": {
                get: function() {
                    context["field"] = "patner_account_mode";
                    context["metadata"] = (objectMetadata ? objectMetadata["patner_account_mode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.patner_account_mode, context);
                },
                set: function(val) {
                    setterFunctions['patner_account_mode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "patner_bank_code": {
                get: function() {
                    context["field"] = "patner_bank_code";
                    context["metadata"] = (objectMetadata ? objectMetadata["patner_bank_code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.patner_bank_code, context);
                },
                set: function(val) {
                    setterFunctions['patner_bank_code'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "patner_country": {
                get: function() {
                    context["field"] = "patner_country";
                    context["metadata"] = (objectMetadata ? objectMetadata["patner_country"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.patner_country, context);
                },
                set: function(val) {
                    setterFunctions['patner_country'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "patner_iban": {
                get: function() {
                    context["field"] = "patner_iban";
                    context["metadata"] = (objectMetadata ? objectMetadata["patner_iban"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.patner_iban, context);
                },
                set: function(val) {
                    setterFunctions['patner_iban'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "patner_swift": {
                get: function() {
                    context["field"] = "patner_swift";
                    context["metadata"] = (objectMetadata ? objectMetadata["patner_swift"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.patner_swift, context);
                },
                set: function(val) {
                    setterFunctions['patner_swift'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "patner_swift_account_number": {
                get: function() {
                    context["field"] = "patner_swift_account_number";
                    context["metadata"] = (objectMetadata ? objectMetadata["patner_swift_account_number"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.patner_swift_account_number, context);
                },
                set: function(val) {
                    setterFunctions['patner_swift_account_number'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payment_state": {
                get: function() {
                    context["field"] = "payment_state";
                    context["metadata"] = (objectMetadata ? objectMetadata["payment_state"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payment_state, context);
                },
                set: function(val) {
                    setterFunctions['payment_state'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payment_type": {
                get: function() {
                    context["field"] = "payment_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["payment_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payment_type, context);
                },
                set: function(val) {
                    setterFunctions['payment_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "request_id": {
                get: function() {
                    context["field"] = "request_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["request_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.request_id, context);
                },
                set: function(val) {
                    setterFunctions['request_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "risk": {
                get: function() {
                    context["field"] = "risk";
                    context["metadata"] = (objectMetadata ? objectMetadata["risk"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.risk, context);
                },
                set: function(val) {
                    setterFunctions['risk'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_account_id": {
                get: function() {
                    context["field"] = "source_account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_account_id, context);
                },
                set: function(val) {
                    setterFunctions['source_account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_account_mode": {
                get: function() {
                    context["field"] = "source_account_mode";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_account_mode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_account_mode, context);
                },
                set: function(val) {
                    setterFunctions['source_account_mode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_account_number": {
                get: function() {
                    context["field"] = "source_account_number";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_account_number"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_account_number, context);
                },
                set: function(val) {
                    setterFunctions['source_account_number'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_bank_code": {
                get: function() {
                    context["field"] = "source_bank_code";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_bank_code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_bank_code, context);
                },
                set: function(val) {
                    setterFunctions['source_bank_code'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_country": {
                get: function() {
                    context["field"] = "source_country";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_country"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_country, context);
                },
                set: function(val) {
                    setterFunctions['source_country'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_iban": {
                get: function() {
                    context["field"] = "source_iban";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_iban"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_iban, context);
                },
                set: function(val) {
                    setterFunctions['source_iban'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_swift": {
                get: function() {
                    context["field"] = "source_swift";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_swift"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_swift, context);
                },
                set: function(val) {
                    setterFunctions['source_swift'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "source_swift_account_number": {
                get: function() {
                    context["field"] = "source_swift_account_number";
                    context["metadata"] = (objectMetadata ? objectMetadata["source_swift_account_number"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.source_swift_account_number, context);
                },
                set: function(val) {
                    setterFunctions['source_swift_account_number'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tags": {
                get: function() {
                    context["field"] = "tags";
                    context["metadata"] = (objectMetadata ? objectMetadata["tags"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tags, context);
                },
                set: function(val) {
                    setterFunctions['tags'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tm_device_tag": {
                get: function() {
                    context["field"] = "tm_device_tag";
                    context["metadata"] = (objectMetadata ? objectMetadata["tm_device_tag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tm_device_tag, context);
                },
                set: function(val) {
                    setterFunctions['tm_device_tag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "tm_session_sid": {
                get: function() {
                    context["field"] = "tm_session_sid";
                    context["metadata"] = (objectMetadata ? objectMetadata["tm_session_sid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.tm_session_sid, context);
                },
                set: function(val) {
                    setterFunctions['tm_session_sid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "app_action_id_resp": {
                get: function() {
                    context["field"] = "app_action_id_resp";
                    context["metadata"] = (objectMetadata ? objectMetadata["app_action_id_resp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.app_action_id_resp, context);
                },
                set: function(val) {
                    setterFunctions['app_action_id_resp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "platform": {
                get: function() {
                    context["field"] = "platform";
                    context["metadata"] = (objectMetadata ? objectMetadata["platform"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.platform, context);
                },
                set: function(val) {
                    setterFunctions['platform'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.amount = value ? (value["amount"] ? value["amount"] : null) : null;
            privateState.application_id = value ? (value["application_id"] ? value["application_id"] : null) : null;
            privateState.app_action_id = value ? (value["app_action_id"] ? value["app_action_id"] : null) : null;
            privateState.app_payment_id = value ? (value["app_payment_id"] ? value["app_payment_id"] : null) : null;
            privateState.app_session_id = value ? (value["app_session_id"] ? value["app_session_id"] : null) : null;
            privateState.app_user_id = value ? (value["app_user_id"] ? value["app_user_id"] : null) : null;
            privateState.channel_id = value ? (value["channel_id"] ? value["channel_id"] : null) : null;
            privateState.client_ip = value ? (value["client_ip"] ? value["client_ip"] : null) : null;
            privateState.currency = value ? (value["currency"] ? value["currency"] : null) : null;
            privateState.error_code = value ? (value["error_code"] ? value["error_code"] : null) : null;
            privateState.message = value ? (value["message"] ? value["message"] : null) : null;
            privateState.partner_account_id = value ? (value["partner_account_id"] ? value["partner_account_id"] : null) : null;
            privateState.partner_account_number = value ? (value["partner_account_number"] ? value["partner_account_number"] : null) : null;
            privateState.patner_account_mode = value ? (value["patner_account_mode"] ? value["patner_account_mode"] : null) : null;
            privateState.patner_bank_code = value ? (value["patner_bank_code"] ? value["patner_bank_code"] : null) : null;
            privateState.patner_country = value ? (value["patner_country"] ? value["patner_country"] : null) : null;
            privateState.patner_iban = value ? (value["patner_iban"] ? value["patner_iban"] : null) : null;
            privateState.patner_swift = value ? (value["patner_swift"] ? value["patner_swift"] : null) : null;
            privateState.patner_swift_account_number = value ? (value["patner_swift_account_number"] ? value["patner_swift_account_number"] : null) : null;
            privateState.payment_state = value ? (value["payment_state"] ? value["payment_state"] : null) : null;
            privateState.payment_type = value ? (value["payment_type"] ? value["payment_type"] : null) : null;
            privateState.request_id = value ? (value["request_id"] ? value["request_id"] : null) : null;
            privateState.risk = value ? (value["risk"] ? value["risk"] : null) : null;
            privateState.source_account_id = value ? (value["source_account_id"] ? value["source_account_id"] : null) : null;
            privateState.source_account_mode = value ? (value["source_account_mode"] ? value["source_account_mode"] : null) : null;
            privateState.source_account_number = value ? (value["source_account_number"] ? value["source_account_number"] : null) : null;
            privateState.source_bank_code = value ? (value["source_bank_code"] ? value["source_bank_code"] : null) : null;
            privateState.source_country = value ? (value["source_country"] ? value["source_country"] : null) : null;
            privateState.source_iban = value ? (value["source_iban"] ? value["source_iban"] : null) : null;
            privateState.source_swift = value ? (value["source_swift"] ? value["source_swift"] : null) : null;
            privateState.source_swift_account_number = value ? (value["source_swift_account_number"] ? value["source_swift_account_number"] : null) : null;
            privateState.tags = value ? (value["tags"] ? value["tags"] : null) : null;
            privateState.tm_device_tag = value ? (value["tm_device_tag"] ? value["tm_device_tag"] : null) : null;
            privateState.tm_session_sid = value ? (value["tm_session_sid"] ? value["tm_session_sid"] : null) : null;
            privateState.app_action_id_resp = value ? (value["app_action_id_resp"] ? value["app_action_id_resp"] : null) : null;
            privateState.platform = value ? (value["platform"] ? value["platform"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(PaymentCreate);

    //Create new class level validator object
    BaseModel.Validator.call(PaymentCreate);

    var registerValidatorBackup = PaymentCreate.registerValidator;

    PaymentCreate.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(PaymentCreate.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'paymentCreate' with service id 'paymentCreate5176'
     PaymentCreate.paymentCreate = function(params, onCompletion){
        return PaymentCreate.customVerb('paymentCreate', params, onCompletion);
     };

    var relations = [];

    PaymentCreate.relations = relations;

    PaymentCreate.prototype.isValid = function() {
        return PaymentCreate.isValid(this);
    };

    PaymentCreate.prototype.objModelName = "PaymentCreate";
    PaymentCreate.prototype.objServiceName = "HIDRMSPayments";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    PaymentCreate.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDRMSPayments", "PaymentCreate", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    PaymentCreate.clone = function(objectToClone) {
        var clonedObj = new PaymentCreate();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return PaymentCreate;
});