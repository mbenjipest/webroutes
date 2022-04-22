window.swagger={
    "swagger": "2.0",
    "schemes": [
        "https"
    ],
    "basePath": "/api",
    "host": "subdomain.pestroutes.com",
    "info": {
        "version": "1.0",
        "title": "PestRoutes",
        "description": "Access your pest control office's data in powerful ways. Build highly customized reports, integrate with services, or work with big data."
    },
    "paths": {
        "/subscription/search": {
            "post": {
                "summary": "search",
                "operationId": "subscriptionSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "Default: (0,1). 0: Frozen and no longer being placed in the job pool, 1: Active, -3: Lead",
                        "default": [
                            0,
                            1
                        ]
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer who owns this subcscription"
                    },
                    {
                        "name": "subscriptionIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Unique Identifier for this Subscription"
                    },
                    {
                        "name": "soldBy",
                        "in": "query",
                        "type": "integer",
                        "description": "The user who is being credited for this sale. Used in stats and commissions reporting"
                    },
                    {
                        "name": "preferredTech",
                        "in": "query",
                        "type": "integer",
                        "description": "The employee ID of the preferred tech"
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": "Date this subscription was created / added / sold"
                    },
                    {
                        "name": "dateCancelled",
                        "in": "query",
                        "type": "string",
                        "description": "Date this subscription was cancelled"
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "Last date that something was changed on this subscription."
                    },
                    {
                        "name": "serviceType",
                        "in": "query",
                        "type": "integer",
                        "description": "The recurring service type to be scheduled for this subscription"
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "The recurring service type to be scheduled for this subscription"
                    },
                    {
                        "name": "frequency",
                        "in": "query",
                        "type": "integer",
                        "description": "The service frequency of this subscription. >0: The number of days, if it is divisible by 30 it is the number of months, -3: Custom Schedule"
                    },
                    {
                        "name": "dueDate",
                        "in": "query",
                        "type": "string",
                        "description": "When this subscription is due for their next service"
                    },
                    {
                        "name": "lastCompleted",
                        "in": "query",
                        "type": "string",
                        "description": "When the last service was completed"
                    },
                    {
                        "name": "dateUpdatedStart",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateUpdatedEnd",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateAddedStart",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateAddedEnd",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "contractIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "The contract ID signed for the subscription"
                    },
                    {
                        "name": "leadDateClosed",
                        "in": "query",
                        "type": "string",
                        "description": "The date the lead was closed"
                    },
                    {
                        "name": "leadDateAssigned",
                        "in": "query",
                        "type": "string",
                        "description": "The date the lead was assigned"
                    },
                    {
                        "name": "leadStageID",
                        "in": "query",
                        "type": "integer",
                        "description": "The stageID of the lead"
                    },
                    {
                        "name": "leadAssignedTo",
                        "in": "query",
                        "type": "integer",
                        "description": "The employeeID the lead was assigned to"
                    },
                    {
                        "name": "leadAddedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "The employeeID who added the lead"
                    },
                    {
                        "name": "leadDateAdded",
                        "in": "query",
                        "type": "string",
                        "description": "The date the lead was added"
                    },
                    {
                        "name": "leadUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "The date the lead was last updated"
                    },
                    {
                        "name": "leadSourceID",
                        "in": "query",
                        "type": "integer",
                        "description": "The sourceID of the lead"
                    },
                    {
                        "name": "sourceID",
                        "in": "query",
                        "type": "integer",
                        "description": "The sourceID of the subscription"
                    },
                    {
                        "name": "nextService",
                        "in": "query",
                        "type": "string",
                        "description": "The date that the next service is due"
                    },
                    {
                        "name": "regionID",
                        "in": "query",
                        "type": "integer",
                        "description": "RegionID of the subscription"
                    },
                    {
                        "name": "lastRegularServiceDate",
                        "in": "query",
                        "type": "string",
                        "description": "Date for last service of subscription type"
                    },
                    {
                        "name": "lastRegularServiceStatus",
                        "in": "query",
                        "type": "integer",
                        "description": "Last regular service status"
                    },
                    {
                        "name": "sentriconConnected",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 if the subscription is connected to sentricon"
                    },
                    {
                        "name": "sentriconSiteID",
                        "in": "query",
                        "type": "string",
                        "description": "Sentricon Site ID or null if not connected to Sentricon"
                    },
                    {
                        "name": "nextBillingDate",
                        "in": "query",
                        "type": "string",
                        "description": "Next billing date for the subscription"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property subscriptionIDsNoDataExported will specify the items that are not included in the resolved subscription array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search subscription Response returns an array of subscriptionIDs",
                        "schema": {
                            "$ref": "#/definitions/subscriptionSearchResponse"
                        }
                    }
                }
            }
        },
        "/subscription/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "subscriptionGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for subscription. Accepts an array of subscriptionIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "subscriptionIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "includeCancellationReason",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an array of cancellationNotes associated with the subscription.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/subscription"
                            }
                        }
                    }
                }
            }
        },
        "/subscription/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "subscriptionGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get subscription data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [
                    {
                        "name": "includeCancellationReason",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an array of cancellationNotes associated with the subscription.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/subscription"
                        }
                    }
                }
            }
        },
        "/subscription/create": {
            "post": {
                "summary": "create",
                "operationId": "subscriptionCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "create a subscription",
                "parameters": [
                    {
                        "name": "subscriptionLink",
                        "in": "query",
                        "type": "string",
                        "description": "Subscription Link for import",
                        "required": false
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "The service type ID for the regular recurring services",
                        "required": true
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer ID which this subscription belongs to",
                        "required": true
                    },
                    {
                        "name": "billToAccountID",
                        "in": "query",
                        "type": "integer",
                        "description": "Billing Account which this subscription belongs to",
                        "required": false
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "0: frozen, 1: active and being placed in the job pool.",
                        "required": false,
                        "default": 1
                    },
                    {
                        "name": "billingFrequency",
                        "in": "query",
                        "type": "integer",
                        "description": "Frequency that an invoice is generated for this service. -1/0 ",
                        "required": false,
                        "default": -1
                    },
                    {
                        "name": "frequency",
                        "in": "query",
                        "type": "integer",
                        "description": "The frequency that the services get scheduled. -1 represents One-Time, 0 represents 'as needed'. Greater than 0 represents the frequency in days. If it is divisible by 30, it is converted to months -- so 90 would represent 3 months and not necessarily 90 days.",
                        "required": false
                    },
                    {
                        "name": "followupDelay",
                        "in": "query",
                        "type": "integer",
                        "description": "How many days after the initial service to schedule the first recurring service. Set as -1 to use frequency",
                        "required": false,
                        "default": -1
                    },
                    {
                        "name": "agreementLength",
                        "in": "query",
                        "type": "integer",
                        "description": "Agreement Length",
                        "required": false
                    },
                    {
                        "name": "preferredTech",
                        "in": "query",
                        "type": "integer",
                        "description": "The employee ID of the preferred tech - 0 for no preference",
                        "required": false
                    },
                    {
                        "name": "preferredDays",
                        "in": "query",
                        "type": "integer",
                        "description": "Preferred appointment day (0-SUN, 1-MON, 2-TUE, 3-WED, 4-THU, 5-FRI, 6-SAT)",
                        "required": false
                    },
                    {
                        "name": "preferredStart",
                        "in": "query",
                        "type": "string",
                        "description": "Preferred appointment start time window in local time e.g. 00:00:00",
                        "required": false
                    },
                    {
                        "name": "preferredEnd",
                        "in": "query",
                        "type": "string",
                        "description": "Preferred appointment end time window in local time e.g. 14:30:00",
                        "required": false
                    },
                    {
                        "name": "sourceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Subscription Source ID",
                        "required": false
                    },
                    {
                        "name": "regionID",
                        "in": "query",
                        "type": "integer",
                        "description": "RegionID of the subscription",
                        "required": false
                    },
                    {
                        "name": "renewalFrequency",
                        "in": "query",
                        "type": "integer",
                        "description": "How often a subscription is due for renewal.",
                        "required": false
                    },
                    {
                        "name": "renewalDate",
                        "in": "query",
                        "type": "string",
                        "description": "Next renewal date",
                        "required": false
                    },
                    {
                        "name": "customDate",
                        "in": "query",
                        "type": "string",
                        "description": "Custom next appointment date for the subscription.",
                        "required": false
                    },
                    {
                        "name": "customScheduleID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of a pre-defined custom-schedule for services. frequency will be set to -3.",
                        "required": false
                    },
                    {
                        "name": "nextBillingDate",
                        "in": "query",
                        "type": "string",
                        "description": "Next billing date for the subscription",
                        "required": false
                    },
                    {
                        "name": "duration",
                        "in": "query",
                        "type": "integer",
                        "description": "The default duration in minutes for the appointment. Set to -1 to inherit from the service type.",
                        "required": false
                    },
                    {
                        "name": "soldBy",
                        "in": "query",
                        "type": "integer",
                        "description": "The employee ID who gets credit for this sale. Defaults to the user who added the subscription",
                        "required": false
                    },
                    {
                        "name": "soldBy2",
                        "in": "query",
                        "type": "integer",
                        "description": "Additional employeeID that gets credit for this sale",
                        "required": false
                    },
                    {
                        "name": "soldBy3",
                        "in": "query",
                        "type": "integer",
                        "description": "Additional employeeID that gets credit for this sale",
                        "required": false
                    },
                    {
                        "name": "serviceCharge",
                        "in": "query",
                        "type": "integer",
                        "description": "Amount that will be charged each service",
                        "required": false
                    },
                    {
                        "name": "addons",
                        "in": "query",
                        "type": "object",
                        "description": "Array of ticket addon objects, see ticket/createAddon for parameters",
                        "required": false
                    },
                    {
                        "name": "initialCharge",
                        "in": "query",
                        "type": "integer",
                        "description": "Amount that will be charged on the initial service",
                        "required": false
                    },
                    {
                        "name": "initialAddons",
                        "in": "query",
                        "type": "object",
                        "description": "Array of ticket addon objects, see ticket/createAddon for parameters",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "subscriptionID",
                        "schema": {
                            "$ref": "#/definitions/subscriptionCreateResponse"
                        }
                    }
                }
            }
        },
        "/subscription/update": {
            "post": {
                "summary": "update",
                "operationId": "subscriptionUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update subscription details",
                "parameters": [
                    {
                        "name": "subscriptionLink",
                        "in": "query",
                        "type": "string",
                        "description": "Subscription Link for import",
                        "required": false
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "The service type ID for the regular recurring services",
                        "required": false
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer ID which this subscription belongs to",
                        "required": false
                    },
                    {
                        "name": "billToAccountID",
                        "in": "query",
                        "type": "integer",
                        "description": "Billing Account which this subscription belongs to",
                        "required": false
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "0: frozen, 1: active and being placed in the job pool.",
                        "required": false
                    },
                    {
                        "name": "billingFrequency",
                        "in": "query",
                        "type": "integer",
                        "description": "Frequency that an invoice is generated for this service. -1/0 ",
                        "required": false
                    },
                    {
                        "name": "frequency",
                        "in": "query",
                        "type": "integer",
                        "description": "The frequency that the services get scheduled. -1 represents One-Time, 0 represents 'as needed'. Greater than 0 represents the frequency in days. If it is divisible by 30, it is converted to months -- so 90 would represent 3 months and not necessarily 90 days.",
                        "required": false
                    },
                    {
                        "name": "followupDelay",
                        "in": "query",
                        "type": "integer",
                        "description": "How many days after the initial service to schedule the first recurring service. Set as -1 to use frequency",
                        "required": false
                    },
                    {
                        "name": "agreementLength",
                        "in": "query",
                        "type": "integer",
                        "description": "Agreement Length",
                        "required": false
                    },
                    {
                        "name": "preferredTech",
                        "in": "query",
                        "type": "integer",
                        "description": "The employee ID of the preferred tech - 0 for no preference",
                        "required": false
                    },
                    {
                        "name": "preferredDays",
                        "in": "query",
                        "type": "integer",
                        "description": "Preferred appointment day (0-SUN, 1-MON, 2-TUE, 3-WED, 4-THU, 5-FRI, 6-SAT)",
                        "required": false
                    },
                    {
                        "name": "preferredStart",
                        "in": "query",
                        "type": "string",
                        "description": "Preferred appointment start time window in local time e.g. 00:00:00",
                        "required": false
                    },
                    {
                        "name": "preferredEnd",
                        "in": "query",
                        "type": "string",
                        "description": "Preferred appointment end time window in local time e.g. 14:30:00",
                        "required": false
                    },
                    {
                        "name": "sourceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Subscription Source ID",
                        "required": false
                    },
                    {
                        "name": "regionID",
                        "in": "query",
                        "type": "integer",
                        "description": "RegionID of the subscription",
                        "required": false
                    },
                    {
                        "name": "renewalFrequency",
                        "in": "query",
                        "type": "integer",
                        "description": "How often a subscription is due for renewal.",
                        "required": false
                    },
                    {
                        "name": "renewalDate",
                        "in": "query",
                        "type": "string",
                        "description": "Next renewal date",
                        "required": false
                    },
                    {
                        "name": "customDate",
                        "in": "query",
                        "type": "string",
                        "description": "Custom next appointment date for the subscription.",
                        "required": false
                    },
                    {
                        "name": "customScheduleID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of a pre-defined custom-schedule for services. frequency will be set to -3.",
                        "required": false
                    },
                    {
                        "name": "nextBillingDate",
                        "in": "query",
                        "type": "string",
                        "description": "Next billing date for the subscription",
                        "required": false
                    },
                    {
                        "name": "duration",
                        "in": "query",
                        "type": "integer",
                        "description": "The default duration in minutes for the appointment. Set to -1 to inherit from the service type.",
                        "required": false
                    },
                    {
                        "name": "soldBy",
                        "in": "query",
                        "type": "integer",
                        "description": "The employee ID who gets credit for this sale. Defaults to the user who added the subscription",
                        "required": false
                    },
                    {
                        "name": "soldBy2",
                        "in": "query",
                        "type": "integer",
                        "description": "Additional employeeID that gets credit for this sale",
                        "required": false
                    },
                    {
                        "name": "soldBy3",
                        "in": "query",
                        "type": "integer",
                        "description": "Additional employeeID that gets credit for this sale",
                        "required": false
                    },
                    {
                        "name": "serviceCharge",
                        "in": "query",
                        "type": "integer",
                        "description": "Amount that will be charged each service",
                        "required": false
                    },
                    {
                        "name": "addons",
                        "in": "query",
                        "type": "object",
                        "description": "Array of ticket addon objects, see ticket/createAddon for parameters",
                        "required": false
                    },
                    {
                        "name": "initialCharge",
                        "in": "query",
                        "type": "integer",
                        "description": "Amount that will be charged on the initial service",
                        "required": false
                    },
                    {
                        "name": "initialAddons",
                        "in": "query",
                        "type": "object",
                        "description": "Array of ticket addon objects, see ticket/createAddon for parameters",
                        "required": false
                    },
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the tickets table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/subscriptionUpdateResponse"
                        }
                    }
                }
            }
        },
        "/subscription/getInitialAddOns": {
            "post": {
                "summary": "getInitialAddOns",
                "operationId": "subscriptionGetInitialAddOns",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/subscriptionGetInitialAddOnsResponse"
                        }
                    }
                }
            }
        },
        "/subscription/createInitialAddOn": {
            "post": {
                "summary": "createInitialAddOn",
                "operationId": "subscriptionCreateInitialAddOn",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    },
                    {
                        "name": "productID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to products table.",
                        "required": true
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to serviceTypes table.",
                        "required": false
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Amount to charge for this addon.",
                        "required": true
                    },
                    {
                        "name": "quantity",
                        "in": "query",
                        "type": "integer",
                        "description": "The number of items. Defaults to 1.",
                        "required": false
                    },
                    {
                        "name": "taxable",
                        "in": "query",
                        "type": "integer",
                        "description": "1- tax 0 - no tax; Defaults to the value specified for serviceTaxable on initial ticket.",
                        "required": false
                    },
                    {
                        "name": "creditTo",
                        "in": "query",
                        "type": "integer",
                        "description": "The employee who will receive credit for selling the add-on for commissions. Defaults to creditTo on Service Subscription.",
                        "required": false
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Customer facing text for item.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "addOnID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/subscriptionCreateInitialAddOnResponse"
                        }
                    }
                }
            }
        },
        "/subscription/updateInitialAddOn": {
            "post": {
                "summary": "updateInitialAddOn",
                "operationId": "subscriptionUpdateInitialAddOn",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    },
                    {
                        "name": "productID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to products table.",
                        "required": true
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to serviceTypes table.",
                        "required": false
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Amount to charge for this addon.",
                        "required": true
                    },
                    {
                        "name": "quantity",
                        "in": "query",
                        "type": "integer",
                        "description": "The number of items. Defaults to 1.",
                        "required": false
                    },
                    {
                        "name": "taxable",
                        "in": "query",
                        "type": "integer",
                        "description": "1- tax 0 - no tax; Defaults to the value specified for serviceTaxable on initial ticket.",
                        "required": false
                    },
                    {
                        "name": "creditTo",
                        "in": "query",
                        "type": "integer",
                        "description": "The employee who will receive credit for selling the add-on for commissions. Defaults to creditTo on Service Subscription.",
                        "required": false
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Customer facing text for item.",
                        "required": false
                    },
                    {
                        "name": "addOnID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to ticketItems table. Retrieve via getInitialAddons(subscriptionID).",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "addOnID for the updated entity",
                        "schema": {
                            "$ref": "#/definitions/subscriptionUpdateInitialAddOnResponse"
                        }
                    }
                }
            }
        },
        "/subscription/deleteInitialAddOn": {
            "post": {
                "summary": "deleteInitialAddOn",
                "operationId": "subscriptionDeleteInitialAddOn",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    },
                    {
                        "name": "addOnID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to initialAddons table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/subscriptionDeleteInitialAddOnResponse"
                        }
                    }
                }
            }
        },
        "/subscription/setInitialAddOns": {
            "post": {
                "summary": "setInitialAddOns",
                "operationId": "subscriptionSetInitialAddOns",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    },
                    {
                        "name": "addons",
                        "in": "query",
                        "type": "array",
                        "description": "Addon Entity - see createInitialAddOn params",
                        "required": false,
                        "default": []
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the initial addons (with new IDs) for the given subscription.",
                        "schema": {
                            "$ref": "#/definitions/subscriptionSetInitialAddOnsResponse"
                        }
                    }
                }
            }
        },
        "/subscription/updateLeadStage": {
            "post": {
                "summary": "updateLeadStage",
                "operationId": "subscriptionUpdateLeadStage",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    },
                    {
                        "name": "subscriptionLink",
                        "in": "query",
                        "type": "integer",
                        "description": "Alternative to subscriptionID. This is the \"SubscriptionID\" sent during an API insert through import/main.",
                        "required": false
                    },
                    {
                        "name": "stageID",
                        "in": "query",
                        "type": "integer",
                        "description": "Lead stage ID.",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "0 - Convert To Lead, 1 - Convert to subscription (lead won)",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Success status.",
                        "schema": {
                            "$ref": "#/definitions/subscriptionUpdateLeadStageResponse"
                        }
                    }
                }
            }
        },
        "/customer/search": {
            "post": {
                "summary": "search",
                "operationId": "customerSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether or not this customer is 'Active': 1 or 'Inactive': 0."
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Unique Identifier"
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": "The date this customer was created or added."
                    },
                    {
                        "name": "dateCancelled",
                        "in": "query",
                        "type": "string",
                        "description": "The date this customer was cancelled."
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "Last date this customer record was updated."
                    },
                    {
                        "name": "aPay",
                        "in": "query",
                        "type": "integer",
                        "description": "Auto Pay status: 0-Not on Auto Pay, 1-Auto Pay CC, 2-AutoPay ACH"
                    },
                    {
                        "name": "lname",
                        "in": "query",
                        "type": "string",
                        "description": "Customer's last name"
                    },
                    {
                        "name": "fname",
                        "in": "query",
                        "type": "string",
                        "description": "Customer's first name"
                    },
                    {
                        "name": "address",
                        "in": "query",
                        "type": "string",
                        "description": "Customer's address"
                    },
                    {
                        "name": "city",
                        "in": "query",
                        "type": "string",
                        "description": "Customer's city"
                    },
                    {
                        "name": "state",
                        "in": "query",
                        "type": "string",
                        "description": "Customer's state"
                    },
                    {
                        "name": "zip",
                        "in": "query",
                        "type": "string",
                        "description": "Customer's zip code"
                    },
                    {
                        "name": "dateUpdatedStart",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateUpdatedEnd",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateAddedStart",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateAddedEnd",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "masterAccount",
                        "in": "query",
                        "type": "integer",
                        "description": "CustomerID for the master account in the connected property"
                    },
                    {
                        "name": "balanceAge",
                        "in": "query",
                        "type": "integer",
                        "description": "Balance age in days. Available filters: >, <, >=, <=, =, !=, IN, BETWEEN"
                    },
                    {
                        "name": "agingDate",
                        "in": "query",
                        "type": "string",
                        "description": "Date the balance began."
                    },
                    {
                        "name": "responsibleBalanceAge",
                        "in": "query",
                        "type": "integer",
                        "description": "Responsible balance age in days. Available filters: >, <, >=, <=, =, !=, IN, BETWEEN"
                    },
                    {
                        "name": "responsibleAgingDate",
                        "in": "query",
                        "type": "string",
                        "description": "Date the responsibleBalance began."
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "type": "integer",
                        "description": "Match any 10-digit phone number (phone1, phone2, or additionalContact phone). Numbers only."
                    },
                    {
                        "name": "phone1",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary 10-digit phone number. Numbers only."
                    },
                    {
                        "name": "phone2",
                        "in": "query",
                        "type": "integer",
                        "description": "Secondary 10-digit phone number. Numbers only."
                    },
                    {
                        "name": "additionalPhone",
                        "in": "query",
                        "type": "integer",
                        "description": "Additional contact 10-digit phone number. Numbers only."
                    },
                    {
                        "name": "billingPhone",
                        "in": "query",
                        "type": "integer",
                        "description": "Billing 10-digit phone number. Numbers only."
                    },
                    {
                        "name": "companyName",
                        "in": "query",
                        "type": "string",
                        "description": "Company name of the customer."
                    },
                    {
                        "name": "customerLink",
                        "in": "query",
                        "type": "string",
                        "description": "Search by the CustomerID specified on import/main."
                    },
                    {
                        "name": "regionID",
                        "in": "query",
                        "type": "integer",
                        "description": "RegionID of the customer"
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "type": "string",
                        "description": "Customer's email"
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID who added the customer"
                    },
                    {
                        "name": "addedByID",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID who added the customer"
                    },
                    {
                        "name": "autoPayPaymentProfileID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of the autopay paymentProfile attached to the customer"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property customerIDsNoDataExported will specify the items that are not included in the resolved customer array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search customer Response returns an array of customerIDs",
                        "schema": {
                            "$ref": "#/definitions/customerSearchResponse"
                        }
                    }
                }
            }
        },
        "/customer/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "customerGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for customer. Accepts an array of customerIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "includeCancellationReason",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an array of cancellationNotes associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includeSubscriptions",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an array of subscriptions associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includeCustomerFlag",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an array of flags associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includeAdditionalContacts",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an array of additional contacts associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includePortalLogin",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve additional properties portalLogin (full URL for customer login) and portalLoginExpires (datetime in PST). Portal token guarenteed valid for 3 days or longer.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/customer"
                            }
                        }
                    }
                }
            }
        },
        "/customer/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "customerGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get customer data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [
                    {
                        "name": "includeCancellationReason",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an array of cancellationNotes associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includeSubscriptions",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an array of subscriptions associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includeCustomerFlag",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an array of flags associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includeAdditionalContacts",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an array of additional contacts associated with each customer.",
                        "required": false
                    },
                    {
                        "name": "includePortalLogin",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve additional properties portalLogin (full URL for customer login) and portalLoginExpires (datetime in PST). Portal token guarenteed valid for 3 days or longer.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/customer"
                        }
                    }
                }
            }
        },
        "/customer/createPaymentProfile": {
            "post": {
                "summary": "createPaymentProfile",
                "operationId": "customerCreatePaymentProfile",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Create a payment profile using a CreditCardToken and CreditCardTokenID from braintree/element",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign Key to customers table",
                        "required": true
                    },
                    {
                        "name": "CreditCardToken",
                        "in": "query",
                        "type": "string",
                        "description": "Required for braintree and element. Not required for nmi",
                        "required": false
                    },
                    {
                        "name": "CreditCardTokenID",
                        "in": "query",
                        "type": "string",
                        "description": "Required for braintree and nmi. Not required for element",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "payment profile",
                        "schema": {
                            "$ref": "#/definitions/customerCreatePaymentProfileResponse"
                        }
                    }
                }
            }
        },
        "/customer/updatePaymentProfile": {
            "post": {
                "summary": "updatePaymentProfile",
                "operationId": "customerUpdatePaymentProfile",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update billing information of existing payment profile for a customer",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign Key to customers table",
                        "required": true
                    },
                    {
                        "name": "billingName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing name associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingAddress1",
                        "in": "query",
                        "type": "string",
                        "description": "Billing address associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingCity",
                        "in": "query",
                        "type": "string",
                        "description": "Billing city associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingState",
                        "in": "query",
                        "type": "string",
                        "description": "Billing state associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingZip",
                        "in": "query",
                        "type": "integer",
                        "description": "Billing zip code associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingCountryID",
                        "in": "query",
                        "type": "string",
                        "description": "Billing country code associated with payment profile",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "payment profile",
                        "schema": {
                            "$ref": "#/definitions/customerUpdatePaymentProfileResponse"
                        }
                    }
                }
            }
        },
        "/customer/create": {
            "post": {
                "summary": "create",
                "operationId": "customerCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "create a customer",
                "parameters": [
                    {
                        "name": "billToAccountID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "fname",
                        "in": "query",
                        "type": "string",
                        "description": "First name",
                        "required": false
                    },
                    {
                        "name": "lname",
                        "in": "query",
                        "type": "string",
                        "description": "Last name",
                        "required": false
                    },
                    {
                        "name": "spouse",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "address",
                        "in": "query",
                        "type": "string",
                        "description": "Address string",
                        "required": false
                    },
                    {
                        "name": "city",
                        "in": "query",
                        "type": "string",
                        "description": "City string",
                        "required": false
                    },
                    {
                        "name": "state",
                        "in": "query",
                        "type": "string",
                        "description": "2 letter state code",
                        "required": false
                    },
                    {
                        "name": "zip",
                        "in": "query",
                        "type": "string",
                        "description": "Zip code",
                        "required": false
                    },
                    {
                        "name": "mapCode",
                        "in": "query",
                        "type": "string",
                        "description": "Map Code",
                        "required": false
                    },
                    {
                        "name": "squareFeet",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "phone1",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "phone2",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "ext1",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "ext2",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "aPay",
                        "in": "query",
                        "type": "integer",
                        "description": "0 - no APay, 1 - credit card apay, 2 ACH apay",
                        "required": false
                    },
                    {
                        "name": "maxMonthlyCharge",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "paidInFull",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "preferredPayment",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "lat",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "lng",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "notes",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "termiteMonitoring",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "customerLink",
                        "in": "query",
                        "type": "string",
                        "description": "External ID, usually the primary key for your application",
                        "required": false
                    },
                    {
                        "name": "taxRate",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "stateTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "cityTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countyTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "districtTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "customTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "customCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "cityCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countyCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "districtCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "zipCityCounty",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "smsReminders",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "phoneReminders",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "emailReminders",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "preferredTech",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "preferredBillingDate",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countyID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "county",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countryID",
                        "in": "query",
                        "type": "string",
                        "description": "2-letter Country code e.g. US",
                        "required": false
                    },
                    {
                        "name": "dateCancelled",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "specialScheduling",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "regionID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "salesmanAPay",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "masterAccount",
                        "in": "query",
                        "type": "integer",
                        "description": "0 if not part a master account or assigned to one; otherwise ID of the master account for this customer group",
                        "required": false
                    },
                    {
                        "name": "billTo",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "commercialAccount",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "companyName",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "type": "string",
                        "description": "email",
                        "required": false
                    },
                    {
                        "name": "sourceID",
                        "in": "query",
                        "type": "integer",
                        "description": "sourceID for the customer (from Admin > Preferences > Customer References > Customer Sources",
                        "required": false
                    },
                    {
                        "name": "divisionID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "billingFName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing First Name",
                        "required": false
                    },
                    {
                        "name": "billingLName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Last Name",
                        "required": false
                    },
                    {
                        "name": "billingCountryID",
                        "in": "query",
                        "type": "string",
                        "description": "Billing CountryID",
                        "required": false
                    },
                    {
                        "name": "billingAddress",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Address",
                        "required": false
                    },
                    {
                        "name": "billingCity",
                        "in": "query",
                        "type": "string",
                        "description": "Billing City",
                        "required": false
                    },
                    {
                        "name": "billingState",
                        "in": "query",
                        "type": "string",
                        "description": "Billing State",
                        "required": false
                    },
                    {
                        "name": "billingZip",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Zip",
                        "required": false
                    },
                    {
                        "name": "billingPhone",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Phone",
                        "required": false
                    },
                    {
                        "name": "billingEmail",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Email",
                        "required": false
                    },
                    {
                        "name": "billingCompanyName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingCompanyName",
                        "required": false
                    },
                    {
                        "name": "billingPhoneExt",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingPhoneExt",
                        "required": false
                    },
                    {
                        "name": "billingPhone2",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingPhone2",
                        "required": false
                    },
                    {
                        "name": "billingPhone2Ext",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingPhone2Ext",
                        "required": false
                    },
                    {
                        "name": "billingBusinessContactID",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingBusinessContactID",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "subscriptionID",
                        "schema": {
                            "$ref": "#/definitions/customerCreateResponse"
                        }
                    }
                }
            }
        },
        "/customer/update": {
            "post": {
                "summary": "update",
                "operationId": "customerUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update customer details",
                "parameters": [
                    {
                        "name": "billToAccountID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "fname",
                        "in": "query",
                        "type": "string",
                        "description": "First name",
                        "required": false
                    },
                    {
                        "name": "lname",
                        "in": "query",
                        "type": "string",
                        "description": "Last name",
                        "required": false
                    },
                    {
                        "name": "spouse",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "address",
                        "in": "query",
                        "type": "string",
                        "description": "Address string",
                        "required": false
                    },
                    {
                        "name": "city",
                        "in": "query",
                        "type": "string",
                        "description": "City string",
                        "required": false
                    },
                    {
                        "name": "state",
                        "in": "query",
                        "type": "string",
                        "description": "2 letter state code",
                        "required": false
                    },
                    {
                        "name": "zip",
                        "in": "query",
                        "type": "string",
                        "description": "Zip code",
                        "required": false
                    },
                    {
                        "name": "mapCode",
                        "in": "query",
                        "type": "string",
                        "description": "Map Code",
                        "required": false
                    },
                    {
                        "name": "squareFeet",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "phone1",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "phone2",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "ext1",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "ext2",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "aPay",
                        "in": "query",
                        "type": "integer",
                        "description": "0 - no APay, 1 - credit card apay, 2 ACH apay",
                        "required": false
                    },
                    {
                        "name": "maxMonthlyCharge",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "paidInFull",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "preferredPayment",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "lat",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "lng",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "notes",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "termiteMonitoring",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "customerLink",
                        "in": "query",
                        "type": "string",
                        "description": "External ID, usually the primary key for your application",
                        "required": false
                    },
                    {
                        "name": "taxRate",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "stateTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "cityTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countyTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "districtTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "customTax",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "customCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "cityCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countyCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "districtCode",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "zipCityCounty",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "smsReminders",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "phoneReminders",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "emailReminders",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "preferredTech",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "preferredBillingDate",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countyID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "county",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "countryID",
                        "in": "query",
                        "type": "string",
                        "description": "2-letter Country code e.g. US",
                        "required": false
                    },
                    {
                        "name": "dateCancelled",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "specialScheduling",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "regionID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "salesmanAPay",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "masterAccount",
                        "in": "query",
                        "type": "integer",
                        "description": "0 if not part a master account or assigned to one; otherwise ID of the master account for this customer group",
                        "required": false
                    },
                    {
                        "name": "billTo",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "commercialAccount",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "companyName",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "type": "string",
                        "description": "email",
                        "required": false
                    },
                    {
                        "name": "sourceID",
                        "in": "query",
                        "type": "integer",
                        "description": "sourceID for the customer (from Admin > Preferences > Customer References > Customer Sources",
                        "required": false
                    },
                    {
                        "name": "divisionID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "billingFName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing First Name",
                        "required": false
                    },
                    {
                        "name": "billingLName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Last Name",
                        "required": false
                    },
                    {
                        "name": "billingCountryID",
                        "in": "query",
                        "type": "string",
                        "description": "Billing CountryID",
                        "required": false
                    },
                    {
                        "name": "billingAddress",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Address",
                        "required": false
                    },
                    {
                        "name": "billingCity",
                        "in": "query",
                        "type": "string",
                        "description": "Billing City",
                        "required": false
                    },
                    {
                        "name": "billingState",
                        "in": "query",
                        "type": "string",
                        "description": "Billing State",
                        "required": false
                    },
                    {
                        "name": "billingZip",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Zip",
                        "required": false
                    },
                    {
                        "name": "billingPhone",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Phone",
                        "required": false
                    },
                    {
                        "name": "billingEmail",
                        "in": "query",
                        "type": "string",
                        "description": "Billing Email",
                        "required": false
                    },
                    {
                        "name": "billingCompanyName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingCompanyName",
                        "required": false
                    },
                    {
                        "name": "billingPhoneExt",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingPhoneExt",
                        "required": false
                    },
                    {
                        "name": "billingPhone2",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingPhone2",
                        "required": false
                    },
                    {
                        "name": "billingPhone2Ext",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingPhone2Ext",
                        "required": false
                    },
                    {
                        "name": "billingBusinessContactID",
                        "in": "query",
                        "type": "string",
                        "description": "Billing billingBusinessContactID",
                        "required": false
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the customers table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/customerUpdateResponse"
                        }
                    }
                }
            }
        },
        "/customerFlag/search": {
            "post": {
                "summary": "search",
                "operationId": "customerFlagSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerFlags",
                        "in": "query",
                        "type": "string",
                        "description": "Limit using user-defined generic flags or system flags: paidInFull, switchOver, purpleDragon, pendingCancellation, prefersPaper, collectonsStage"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property customerFlagIDsNoDataExported will specify the items that are not included in the resolved customerFlag array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search customerFlag Response returns an array of customerIDs",
                        "schema": {
                            "$ref": "#/definitions/customerFlagSearchResponse"
                        }
                    }
                }
            }
        },
        "/customerFlag/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "customerFlagGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for customerFlag. Accepts an array of customerIDs. Returns a max of 1000 records.\n This function has an addition standard filter for customerFlags that will help squelch unnecessary flags.",
                "parameters": [
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "limitCustomerFlags",
                        "in": "query",
                        "type": "string",
                        "description": "Standard search filter. E.G. \"limitCustomerFlags\": {\"operator\":\"IN\",\"value\":[\"myFlag\",\"yourflag\"}",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/customerFlag"
                            }
                        }
                    }
                }
            }
        },
        "/customerFlag/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "customerFlagGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get customerFlag data for single ID -- please provide a specific record ID in the URL structure.\n This function has an addition standard filter for customerFlags that will help squelch unnecessary flags.",
                "parameters": [
                    {
                        "name": "limitCustomerFlags",
                        "in": "query",
                        "type": "string",
                        "description": "Standard search filter. E.G. \"limitCustomerFlags\": {\"operator\":\"IN\",\"value\":[\"myFlag\",\"yourflag\"}",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/customerFlag"
                        }
                    }
                }
            }
        },
        "/ticket/search": {
            "post": {
                "summary": "search",
                "operationId": "ticketSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "ticketIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether this ticket/invoice is active: 1 or inactive: 0. Inactive tickets are not added to the customer's balance or A/R aging",
                        "default": [
                            0,
                            1
                        ]
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "The customer who owns this ticket"
                    },
                    {
                        "name": "recurringTemplateSubscriptionIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "When a ticket has a recurring template subscription ID it represents a recurring ticket template"
                    },
                    {
                        "name": "dateCreated",
                        "in": "query",
                        "type": "string",
                        "description": "The date this ticket was created"
                    },
                    {
                        "name": "invoiceDate",
                        "in": "query",
                        "type": "string",
                        "description": "Invoice date"
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "The date the ticket was updated"
                    },
                    {
                        "name": "balance",
                        "in": "query",
                        "type": "number",
                        "description": "Any unpaid balance left on this ticket"
                    },
                    {
                        "name": "subTotal",
                        "in": "query",
                        "type": "number",
                        "description": "Amount of ticket before tax"
                    },
                    {
                        "name": "total",
                        "in": "query",
                        "type": "number",
                        "description": "Total of invoice including any applicable taxes"
                    },
                    {
                        "name": "taxAmount",
                        "in": "query",
                        "type": "number",
                        "description": "Amount of tax"
                    },
                    {
                        "name": "appointmentIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "The appointment this ticket was generated for. Tickets may not always be attached to an appointment. For example in cases of recurring billing or stand alone invoices for administrative fees."
                    },
                    {
                        "name": "subscriptionIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "The subscription this ticket was generated for. This is only used for the ticket template which define the price of the subscription setup."
                    },
                    {
                        "name": "templateType",
                        "in": "query",
                        "type": "string",
                        "description": "The ticket template type. I: initial ticket template, R: recurring ticket template, NA: not a ticket template."
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property ticketIDsNoDataExported will specify the items that are not included in the resolved ticket array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search ticket Response returns an array of ticketIDs",
                        "schema": {
                            "$ref": "#/definitions/ticketSearchResponse"
                        }
                    }
                }
            }
        },
        "/ticket/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "ticketGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for ticket. Accepts an array of ticketIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "ticketIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/ticket"
                            }
                        }
                    }
                }
            }
        },
        "/ticket/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "ticketGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get ticket data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/ticket"
                        }
                    }
                }
            }
        },
        "/ticket/create": {
            "post": {
                "summary": "create",
                "operationId": "ticketCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table.",
                        "required": true
                    },
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscription table.",
                        "required": true
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to serviceTypes table.",
                        "required": true
                    },
                    {
                        "name": "serviceTaxable",
                        "in": "query",
                        "type": "integer",
                        "description": "1- tax 0 - no tax; Defaults to the value specified for given serviceID.",
                        "required": false
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "Date this invoice should be applied",
                        "required": true
                    },
                    {
                        "name": "billToAccountID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table.",
                        "required": false
                    },
                    {
                        "name": "serviceCharge",
                        "in": "query",
                        "type": "number",
                        "description": "Value in USD.",
                        "required": true
                    },
                    {
                        "name": "additionalNotes",
                        "in": "query",
                        "type": "string",
                        "description": "Add notes about the invoice.",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "string",
                        "description": "0 = not active, 1 = active, -1 = ticket template, -3 = lead",
                        "required": false,
                        "default": 1
                    },
                    {
                        "name": "templateType",
                        "in": "query",
                        "type": "string",
                        "description": "R = recurring, I = initial, NA = not applicable/not a template",
                        "required": false,
                        "default": "NA"
                    },
                    {
                        "name": "addons",
                        "in": "query",
                        "type": "array",
                        "description": "Array of ticket addon objects, see ticket/createAddon. Send as empty array or false to unset.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "ticketID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/ticketCreateResponse"
                        }
                    }
                }
            }
        },
        "/ticket/update": {
            "post": {
                "summary": "update",
                "operationId": "ticketUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table.",
                        "required": false
                    },
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscription table.",
                        "required": false
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to serviceTypes table.",
                        "required": false
                    },
                    {
                        "name": "serviceTaxable",
                        "in": "query",
                        "type": "integer",
                        "description": "1- tax 0 - no tax; Defaults to the value specified for given serviceID.",
                        "required": false
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "Date this invoice should be applied",
                        "required": false
                    },
                    {
                        "name": "billToAccountID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table.",
                        "required": false
                    },
                    {
                        "name": "serviceCharge",
                        "in": "query",
                        "type": "number",
                        "description": "Value in USD.",
                        "required": false
                    },
                    {
                        "name": "additionalNotes",
                        "in": "query",
                        "type": "string",
                        "description": "Add notes about the invoice.",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "string",
                        "description": "0 = not active, 1 = active, -1 = ticket template, -3 = lead",
                        "required": false
                    },
                    {
                        "name": "templateType",
                        "in": "query",
                        "type": "string",
                        "description": "R = recurring, I = initial, NA = not applicable/not a template",
                        "required": false
                    },
                    {
                        "name": "addons",
                        "in": "query",
                        "type": "array",
                        "description": "If addons are sent with ticket/update a `setAddons` operation will be used. Old addons will be removed and new addons will be created to match the array sent.",
                        "required": false
                    },
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the tickets table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/ticketUpdateResponse"
                        }
                    }
                }
            }
        },
        "/ticket/delete": {
            "post": {
                "summary": "delete",
                "operationId": "ticketDelete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to tickets table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Success status of the request.",
                        "schema": {
                            "$ref": "#/definitions/ticketDeleteResponse"
                        }
                    }
                }
            }
        },
        "/ticket/getAddOns": {
            "post": {
                "summary": "getAddOns",
                "operationId": "ticketGetAddOns",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Addons for a ticket.",
                "parameters": [
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to tickets table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns an array of ticketItems associated with the given ticket",
                        "schema": {
                            "$ref": "#/definitions/ticketGetAddOnsResponse"
                        }
                    }
                }
            }
        },
        "/ticket/createAddOn": {
            "post": {
                "summary": "createAddOn",
                "operationId": "ticketCreateAddOn",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to tickets table. Retrieve via getAddons(subscriptionID).",
                        "required": true
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Customer Facing text for item.",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "quantity",
                        "in": "query",
                        "type": "integer",
                        "description": "Number of products or services to add.",
                        "required": false,
                        "default": 1
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Charge Amount for item.",
                        "required": true
                    },
                    {
                        "name": "productID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to products table.",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to services Table.",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "taxable",
                        "in": "query",
                        "type": "integer",
                        "description": "0 for untaxable, 1 for taxable. Items with negative amounts cannot be taxable.",
                        "required": true
                    },
                    {
                        "name": "creditTo",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to employees table.",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "unitID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to unit table (if applicable for unit specific addons on multi-unit customers)",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Return the ID of the newly created ticketItem entity.",
                        "schema": {
                            "$ref": "#/definitions/ticketCreateAddOnResponse"
                        }
                    }
                }
            }
        },
        "/ticket/updateAddOn": {
            "post": {
                "summary": "updateAddOn",
                "operationId": "ticketUpdateAddOn",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to tickets table. Retrieve via getAddons(subscriptionID).",
                        "required": true
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Customer Facing text for item.",
                        "required": false
                    },
                    {
                        "name": "quantity",
                        "in": "query",
                        "type": "integer",
                        "description": "Number of products or services to add.",
                        "required": false
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Charge Amount for item.",
                        "required": false
                    },
                    {
                        "name": "productID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to products table.",
                        "required": false
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to services Table.",
                        "required": false
                    },
                    {
                        "name": "taxable",
                        "in": "query",
                        "type": "integer",
                        "description": "0 for untaxable, 1 for taxable. Items with negative amounts cannot be taxable.",
                        "required": false
                    },
                    {
                        "name": "creditTo",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to employees table.",
                        "required": false
                    },
                    {
                        "name": "unitID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to unit table (if applicable for unit specific addons on multi-unit customers)",
                        "required": false
                    },
                    {
                        "name": "itemID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the ticketItems table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated ticketItem entity.",
                        "schema": {
                            "$ref": "#/definitions/ticketUpdateAddOnResponse"
                        }
                    }
                }
            }
        },
        "/ticket/setAddOns": {
            "post": {
                "summary": "setAddOns",
                "operationId": "ticketSetAddOns",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Delete all existing addons and set the addons for the specified ticket to the received array.",
                "parameters": [
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    },
                    {
                        "name": "addons",
                        "in": "query",
                        "type": "array",
                        "description": "Addon Entity - see createAddOn params",
                        "required": false,
                        "default": []
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/ticketSetAddOnsResponse"
                        }
                    }
                }
            }
        },
        "/ticket/deleteAddOn": {
            "post": {
                "summary": "deleteAddOn",
                "operationId": "ticketDeleteAddOn",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Delete a ticketItem from the given ticketID.",
                "parameters": [
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": true
                    },
                    {
                        "name": "itemID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to ticketItems table. Retrieve via getAddons(subscriptionID).",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/ticketDeleteAddOnResponse"
                        }
                    }
                }
            }
        },
        "/appointment/search": {
            "post": {
                "summary": "search",
                "operationId": "appointmentSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "appointmentIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Unique ID"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "The status of an appointment which can include:<ul><li>0: Pending</li><li>1: Completed</li><li>2: No Show</li><li>-2: Rescheduled</li><li>-1: Cancelled</li></ul>",
                        "default": [
                            0,
                            1
                        ]
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer who owns this appointment"
                    },
                    {
                        "name": "subscriptionIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Subscription who owns this appointment. Appointments that are attached to subscriptions inherit the subscriptions pricing templates and other defaults as well as update the subscriptions next service dates upon completion. Re-services and stand-alone services are NOT attached to subscriptions."
                    },
                    {
                        "name": "spotIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Spot ID the appointment is assigned to."
                    },
                    {
                        "name": "routeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Route the appointment is assigned to."
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": "Date this appointment was created / scheduled."
                    },
                    {
                        "name": "dateCompleted",
                        "in": "query",
                        "type": "string",
                        "description": "Date this appointment was completed / marked serviced (not necessarily the date it was on the schedule)."
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "Date this appointment is scheduled for."
                    },
                    {
                        "name": "serviceIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Service type ID for this appointment. Reference the endpoint `servicetypes` to see available options"
                    },
                    {
                        "name": "servicedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "The technician who serviced this appointment"
                    },
                    {
                        "name": "completedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "The user who marked this appointment as completed NOT necessarily the one who serviced the appointment."
                    },
                    {
                        "name": "dateAddedStart",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateAddedEnd",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateStart",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateEnd",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateCancelled",
                        "in": "query",
                        "type": "string",
                        "description": "Cancelation date"
                    },
                    {
                        "name": "additionalTechs",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID of additional tech"
                    },
                    {
                        "name": "salesAnchor",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 if this is the first appointment connected to a subscription"
                    },
                    {
                        "name": "targetPests",
                        "in": "query",
                        "type": "integer",
                        "description": "The ID of a target insect associated with the appointment, these IDs can be found in preferences via Admin > Preferences > Service Related > Target Issues"
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "Date the appointment was last changed"
                    },
                    {
                        "name": "salesTeamID",
                        "in": "query",
                        "type": "integer",
                        "description": "Sales team that sold the appointment."
                    },
                    {
                        "name": "cancelledBy",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID that cancelled the appointment."
                    },
                    {
                        "name": "assignedTech",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID that was assigned to the appointment."
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property appointmentIDsNoDataExported will specify the items that are not included in the resolved appointment array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search appointment Response returns an array of appointmentIDs",
                        "schema": {
                            "$ref": "#/definitions/appointmentSearchResponse"
                        }
                    }
                }
            }
        },
        "/appointment/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "appointmentGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for appointment. Accepts an array of appointmentIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "appointmentIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "includeCancellationReason",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an additional field cancellationReason.",
                        "required": false
                    },
                    {
                        "name": "includeTargetPests",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an additional field targetPests as an array of integers.",
                        "required": false
                    },
                    {
                        "name": "includeCustomFields",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve an additional field customFields as an array of Custom Fields names and values.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/appointment"
                            }
                        }
                    }
                }
            }
        },
        "/appointment/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "appointmentGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get appointment data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [
                    {
                        "name": "includeCancellationReason",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an additional field cancellationReason.",
                        "required": false
                    },
                    {
                        "name": "includeTargetPests",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an additional field targetPests as an array of integers.",
                        "required": false
                    },
                    {
                        "name": "includeCustomFields",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve an additional field customFields as an array of Custom Fields names and values.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/appointment"
                        }
                    }
                }
            }
        },
        "/appointment/create": {
            "post": {
                "summary": "create",
                "operationId": "appointmentCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "customerID associated with the appointment",
                        "required": true
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "serviceID to perform",
                        "required": true
                    },
                    {
                        "name": "start",
                        "in": "query",
                        "type": "string",
                        "description": "Start Time Window",
                        "required": false
                    },
                    {
                        "name": "end",
                        "in": "query",
                        "type": "string",
                        "description": "End Time Window",
                        "required": false
                    },
                    {
                        "name": "duration",
                        "in": "query",
                        "type": "integer",
                        "description": "Number of minutes this appointment should last",
                        "required": false
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID to whom this appointment belongs",
                        "required": false
                    },
                    {
                        "name": "notes",
                        "in": "query",
                        "type": "string",
                        "description": "Appointment Notes",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "spotID",
                        "in": "query",
                        "type": "",
                        "description": "Specify to fix this appointment to a spot",
                        "required": false
                    },
                    {
                        "name": "routeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Specify to fix this appointment on a route.",
                        "required": false
                    },
                    {
                        "name": "callAhead",
                        "in": "query",
                        "type": "integer",
                        "description": "Number of minutes ahead of the appointment start time to call",
                        "required": false
                    },
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Specify the subscriptionID this appointment is associated with",
                        "required": false,
                        "default": -1
                    },
                    {
                        "name": "doInterior",
                        "in": "query",
                        "type": "integer",
                        "description": "0 - unspecified, 1 - Exterior only, 2 - Interior Needed ",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "targetPests",
                        "in": "query",
                        "type": "string",
                        "description": "Comma separated list of insectIDs",
                        "required": false
                    },
                    {
                        "name": "rejectOccupiedSpots",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to receive a failure result when the appointment would create a second appointment in the same spot as another appointment (fixed or floating appointments).",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "rejectFixedOccupiedSpots",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to receive a failure result when the appointment would create a second appointment in the same spot as another fixed-to-spot appointment appointment.",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "reservation",
                        "in": "query",
                        "type": "string",
                        "description": "If the spotID sent has been reserved, send a bearer token to schedule to a reserved spot",
                        "required": false
                    },
                    {
                        "name": "bypassLockedRoute",
                        "in": "query",
                        "type": "integer",
                        "description": "Ignore locked route setting and schedule anyways",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "servicedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID who completed the appointment",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Return the ID of the newly created appointment.",
                        "schema": {
                            "$ref": "#/definitions/appointmentCreateResponse"
                        }
                    }
                }
            }
        },
        "/appointment/update": {
            "post": {
                "summary": "update",
                "operationId": "appointmentUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "customerID associated with the appointment",
                        "required": false
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "serviceID to perform",
                        "required": false
                    },
                    {
                        "name": "start",
                        "in": "query",
                        "type": "string",
                        "description": "Start Time Window",
                        "required": false
                    },
                    {
                        "name": "end",
                        "in": "query",
                        "type": "string",
                        "description": "End Time Window",
                        "required": false
                    },
                    {
                        "name": "duration",
                        "in": "query",
                        "type": "integer",
                        "description": "Number of minutes this appointment should last",
                        "required": false
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID to whom this appointment belongs",
                        "required": false
                    },
                    {
                        "name": "notes",
                        "in": "query",
                        "type": "string",
                        "description": "Appointment Notes",
                        "required": false
                    },
                    {
                        "name": "spotID",
                        "in": "query",
                        "type": "",
                        "description": "Specify to fix this appointment to a spot",
                        "required": false
                    },
                    {
                        "name": "routeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Specify to fix this appointment on a route.",
                        "required": false
                    },
                    {
                        "name": "callAhead",
                        "in": "query",
                        "type": "integer",
                        "description": "Number of minutes ahead of the appointment start time to call",
                        "required": false
                    },
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Specify the subscriptionID this appointment is associated with",
                        "required": false
                    },
                    {
                        "name": "doInterior",
                        "in": "query",
                        "type": "integer",
                        "description": "0 - unspecified, 1 - Exterior only, 2 - Interior Needed ",
                        "required": false
                    },
                    {
                        "name": "targetPests",
                        "in": "query",
                        "type": "string",
                        "description": "Comma separated list of insectIDs",
                        "required": false
                    },
                    {
                        "name": "rejectOccupiedSpots",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to receive a failure result when the appointment would create a second appointment in the same spot as another appointment (fixed or floating appointments).",
                        "required": false
                    },
                    {
                        "name": "rejectFixedOccupiedSpots",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to receive a failure result when the appointment would create a second appointment in the same spot as another fixed-to-spot appointment appointment.",
                        "required": false
                    },
                    {
                        "name": "reservation",
                        "in": "query",
                        "type": "string",
                        "description": "If the spotID sent has been reserved, send a bearer token to schedule to a reserved spot",
                        "required": false
                    },
                    {
                        "name": "bypassLockedRoute",
                        "in": "query",
                        "type": "integer",
                        "description": "Ignore locked route setting and schedule anyways",
                        "required": false
                    },
                    {
                        "name": "servicedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID who completed the appointment",
                        "required": false
                    },
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the appointments table.",
                        "required": true
                    },
                    {
                        "name": "timeIn",
                        "in": "query",
                        "type": "string",
                        "description": "The time the technician checked into the appointment (via user defined input).",
                        "required": false
                    },
                    {
                        "name": "timeOut",
                        "in": "query",
                        "type": "string",
                        "description": "The time the technician checked out of the appointment (via user-defined input).",
                        "required": false
                    },
                    {
                        "name": "checkIn",
                        "in": "query",
                        "type": "string",
                        "description": "The time the technician checked into the appointment (via check-in button).",
                        "required": false
                    },
                    {
                        "name": "checkOut",
                        "in": "query",
                        "type": "string",
                        "description": "The time the technician checked out of the appointment (via check-out button).",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "The status of an appointment which can include:0: Pending, 1: Completed, 2: No Show",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated appointment entity.",
                        "schema": {
                            "$ref": "#/definitions/appointmentUpdateResponse"
                        }
                    }
                }
            }
        },
        "/appointment/cancel": {
            "post": {
                "summary": "cancel",
                "operationId": "appointmentCancel",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Cancel specified appointmentID",
                "parameters": [
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "appointmentID to cancel",
                        "required": true
                    },
                    {
                        "name": "cancelReason",
                        "in": "query",
                        "type": "string",
                        "description": "Cancel Reason",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "cancelledBy",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID that cancelled the appointment",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/appointmentCancelResponse"
                        }
                    }
                }
            }
        },
        "/appointment/complete": {
            "post": {
                "summary": "complete",
                "operationId": "appointmentComplete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Complete specified appointmentID",
                "parameters": [
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": true
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "The status of an appointment which can include:0: Pending, 1: Completed, 2: No Show",
                        "required": false
                    },
                    {
                        "name": "completionNotes",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "officeNotes",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "flagNotes",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "timeIn",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "timeOut",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "checkIn",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "checkOut",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "latIn",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "latOut",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "longIn",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "longOut",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "signature",
                        "in": "query",
                        "type": "string",
                        "description": "base64 encoded signature",
                        "required": false
                    },
                    {
                        "name": "techSignature",
                        "in": "query",
                        "type": "string",
                        "description": "base64 encoded signature",
                        "required": false
                    },
                    {
                        "name": "windSpeed",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "windDirection",
                        "in": "query",
                        "type": "string",
                        "description": "N,NW,NE,etc..",
                        "required": false
                    },
                    {
                        "name": "servicedInterior",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "temperature",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "sprayRigID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "paymentMethod",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "amountCollected",
                        "in": "query",
                        "type": "number",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "checkCollectedNumber",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "chemicals",
                        "in": "query",
                        "type": "array",
                        "description": "",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns an array of system messages (usually soft errors) keyed by appointmentID, if any messages exist.",
                        "schema": {
                            "$ref": "#/definitions/appointmentCompleteResponse"
                        }
                    }
                }
            }
        },
        "/employee/search": {
            "post": {
                "summary": "search",
                "operationId": "employeeSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "'Active': 1 or 'Inactive': 0",
                        "default": 1
                    },
                    {
                        "name": "employeeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Unique Identifier"
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Unique Identifier"
                    },
                    {
                        "name": "yearsExperience",
                        "in": "query",
                        "type": "integer",
                        "description": "How many years this employee has in experience. Typically used for sales reps to distinguish between rookies and seasoned."
                    },
                    {
                        "name": "lname",
                        "in": "query",
                        "type": "string",
                        "description": "Employee's last name"
                    },
                    {
                        "name": "fname",
                        "in": "query",
                        "type": "string",
                        "description": "Employee's first name"
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "Employee type. 0: Office Staff, 1: Technician, 2: Sales Rep"
                    },
                    {
                        "name": "employeeLink",
                        "in": "query",
                        "type": "string",
                        "description": "Employee's Link"
                    },
                    {
                        "name": "roamingRep",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID of the master account if this account has access to multiple offices."
                    },
                    {
                        "name": "teamID",
                        "in": "query",
                        "type": "integer",
                        "description": "teamID of the employee"
                    },
                    {
                        "name": "primaryTeam",
                        "in": "query",
                        "type": "integer",
                        "description": "primary teamID of the employee"
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "type": "string",
                        "description": "phone number"
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "type": "string",
                        "description": "email"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property employeeIDsNoDataExported will specify the items that are not included in the resolved employee array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search employee Response returns an array of employeeIDs",
                        "schema": {
                            "$ref": "#/definitions/employeeSearchResponse"
                        }
                    }
                }
            }
        },
        "/employee/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "employeeGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for employee. Accepts an array of employeeIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "employeeIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/employee"
                            }
                        }
                    }
                }
            }
        },
        "/employee/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "employeeGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get employee data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/employee"
                        }
                    }
                }
            }
        },
        "/employee/create": {
            "post": {
                "summary": "create",
                "operationId": "employeeCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Create a new employee.",
                "parameters": [
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "0: office staff, 1: technician, 2: salesman ",
                        "required": false
                    },
                    {
                        "name": "fname",
                        "in": "query",
                        "type": "string",
                        "description": "Employee first name.",
                        "required": true
                    },
                    {
                        "name": "lname",
                        "in": "query",
                        "type": "string",
                        "description": "Employee last name.",
                        "required": true
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "type": "string",
                        "description": "Employee phone.",
                        "required": false
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "type": "string",
                        "description": "Employee email.",
                        "required": false
                    },
                    {
                        "name": "username",
                        "in": "query",
                        "type": "string",
                        "description": "Login username, required for a roaming rep.",
                        "required": false
                    },
                    {
                        "name": "password",
                        "in": "query",
                        "type": "string",
                        "description": "Login password, required for a roaming rep.",
                        "required": false
                    },
                    {
                        "name": "roamingRep",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID of the master account. If a non-master account is selected, that account's master rep will be used instead.",
                        "required": false
                    },
                    {
                        "name": "roamingMaster",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 to specify that the user is a roaming master account. This setting will override roamingRep.",
                        "required": false
                    },
                    {
                        "name": "employeeLink",
                        "in": "query",
                        "type": "string",
                        "description": "Employee's Link",
                        "required": false
                    },
                    {
                        "name": "accessControlProfileID",
                        "in": "query",
                        "type": "integer",
                        "description": "Access Control Profile ID defined in preferences. 0 represents a custom profile.",
                        "required": false
                    },
                    {
                        "name": "accessControl",
                        "in": "query",
                        "type": "string",
                        "description": "Send as form-data array or as a JSON encoded string",
                        "required": false
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 0 to set the employee as inactive, send as 1 to set the employee to active. Default state is active.",
                        "required": false
                    },
                    {
                        "name": "primaryTeam",
                        "in": "query",
                        "type": "integer",
                        "description": "Set the primary team for the employee. If the employee is not on this team it will be placed on that team during this operation.",
                        "required": false
                    },
                    {
                        "name": "supervisorID",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID of the supervisor for this employee.",
                        "required": false
                    },
                    {
                        "name": "experience",
                        "in": "query",
                        "type": "integer",
                        "description": "Integer (max 2 digits)",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "employeeID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/employeeCreateResponse"
                        }
                    }
                }
            }
        },
        "/employee/update": {
            "post": {
                "summary": "update",
                "operationId": "employeeUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update an employee.",
                "parameters": [
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "0: office staff, 1: technician, 2: salesman ",
                        "required": false
                    },
                    {
                        "name": "fname",
                        "in": "query",
                        "type": "string",
                        "description": "Employee first name.",
                        "required": false
                    },
                    {
                        "name": "lname",
                        "in": "query",
                        "type": "string",
                        "description": "Employee last name.",
                        "required": false
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "type": "string",
                        "description": "Employee phone.",
                        "required": false
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "type": "string",
                        "description": "Employee email.",
                        "required": false
                    },
                    {
                        "name": "username",
                        "in": "query",
                        "type": "string",
                        "description": "Login username, required for a roaming rep.",
                        "required": false
                    },
                    {
                        "name": "password",
                        "in": "query",
                        "type": "string",
                        "description": "Login password, required for a roaming rep.",
                        "required": false
                    },
                    {
                        "name": "roamingRep",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID of the master account. If a non-master account is selected, that account's master rep will be used instead.",
                        "required": false
                    },
                    {
                        "name": "roamingMaster",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 to specify that the user is a roaming master account. This setting will override roamingRep.",
                        "required": false
                    },
                    {
                        "name": "employeeLink",
                        "in": "query",
                        "type": "string",
                        "description": "Employee's Link",
                        "required": false
                    },
                    {
                        "name": "accessControlProfileID",
                        "in": "query",
                        "type": "integer",
                        "description": "Access Control Profile ID defined in preferences. 0 represents a custom profile.",
                        "required": false
                    },
                    {
                        "name": "accessControl",
                        "in": "query",
                        "type": "string",
                        "description": "Send as form-data array or as a JSON encoded string",
                        "required": false
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 0 to set the employee as inactive, send as 1 to set the employee to active. Default state is active.",
                        "required": false
                    },
                    {
                        "name": "primaryTeam",
                        "in": "query",
                        "type": "integer",
                        "description": "Set the primary team for the employee. If the employee is not on this team it will be placed on that team during this operation.",
                        "required": false
                    },
                    {
                        "name": "supervisorID",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID of the supervisor for this employee.",
                        "required": false
                    },
                    {
                        "name": "experience",
                        "in": "query",
                        "type": "integer",
                        "description": "Integer (max 2 digits)",
                        "required": false
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the employee table.",
                        "required": true
                    },
                    {
                        "name": "removeVisualGrouping",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to remove visual grouping assignments for the employee.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/employeeUpdateResponse"
                        }
                    }
                }
            }
        },
        "/employee/dealias": {
            "post": {
                "summary": "dealias",
                "operationId": "employeeDealias",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Find the employeeIDs associated with this employeeID or link",
                "parameters": [
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key of the employee",
                        "required": false
                    },
                    {
                        "name": "employeeLink",
                        "in": "query",
                        "type": "integer",
                        "description": "External key of the employee",
                        "required": false
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "integer",
                        "description": "active property of the employee 0: inactive 1: active",
                        "required": false
                    },
                    {
                        "name": "useBothKeys",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to join on both roamingRep and employeeLink relationship",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "employeeID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/employeeDealiasResponse"
                        }
                    }
                }
            }
        },
        "/serviceType/search": {
            "post": {
                "summary": "search",
                "operationId": "serviceTypeSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Office Unique Identifier"
                    },
                    {
                        "name": "typeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Service Type Unique Identifier"
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Description of the Service Type"
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "type": "string",
                        "description": "Category of the Service Type"
                    },
                    {
                        "name": "reservice",
                        "in": "query",
                        "type": "integer",
                        "description": "Service is a reservice type"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property serviceTypeIDsNoDataExported will specify the items that are not included in the resolved serviceType array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search serviceType Response returns an array of typeIDs",
                        "schema": {
                            "$ref": "#/definitions/serviceTypeSearchResponse"
                        }
                    }
                }
            }
        },
        "/serviceType/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "serviceTypeGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for serviceType. Accepts an array of typeIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "typeIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/serviceType"
                            }
                        }
                    }
                }
            }
        },
        "/serviceType/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "serviceTypeGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get serviceType data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/serviceType"
                        }
                    }
                }
            }
        },
        "/payment/search": {
            "post": {
                "summary": "search",
                "operationId": "paymentSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Office Unique Identifier"
                    },
                    {
                        "name": "paymentIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Payment Unique Identifier"
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer Unique Identifier"
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Amount of Payment"
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "Payment date"
                    },
                    {
                        "name": "paymentMethod",
                        "in": "query",
                        "type": "integer",
                        "description": "Payment Method 0-Coupon, 1-Cash, 2-Check, 3-Credit Card, 4 ACH"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "Status of the payment (0-Unsuccessful, 1-Successful, 2-Refunded)"
                    },
                    {
                        "name": "dateApplied",
                        "in": "query",
                        "type": "string",
                        "description": "Date the payment was applied"
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID that recorded the payment"
                    },
                    {
                        "name": "originalPaymentID",
                        "in": "query",
                        "type": "integer",
                        "description": "Original paymentID (for refunds)"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property paymentIDsNoDataExported will specify the items that are not included in the resolved payment array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search payment Response returns an array of paymentIDs",
                        "schema": {
                            "$ref": "#/definitions/paymentSearchResponse"
                        }
                    }
                }
            }
        },
        "/payment/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "paymentGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for payment. Accepts an array of paymentIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "paymentIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/payment"
                            }
                        }
                    }
                }
            }
        },
        "/payment/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "paymentGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get payment data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/payment"
                        }
                    }
                }
            }
        },
        "/payment/create": {
            "post": {
                "summary": "create",
                "operationId": "paymentCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "doCharge",
                        "in": "query",
                        "type": "integer",
                        "description": "1 - payment will be processed via PestRoutes. 0 - payment is inserted as a completed payment without charging.",
                        "required": true
                    },
                    {
                        "name": "paymentMethod",
                        "in": "query",
                        "type": "integer",
                        "description": "Payment Method 0-Coupon, 1-Cash, 2-Check, 3-Credit Card, 4 ACH",
                        "required": true
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "customerID to associate the payment with",
                        "required": true
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Amount this payment was for",
                        "required": true
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Employee to associate with the payment",
                        "required": false
                    },
                    {
                        "name": "notes",
                        "in": "query",
                        "type": "integer",
                        "description": "Description for this payment",
                        "required": false
                    },
                    {
                        "name": "ticketID",
                        "in": "query",
                        "type": "integer",
                        "description": "Limit payment to this ticket",
                        "required": false
                    },
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Limit payment to this subscription",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "paymentID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/paymentCreateResponse"
                        }
                    }
                }
            }
        },
        "/payment/createRefund": {
            "post": {
                "summary": "createRefund",
                "operationId": "paymentCreateRefund",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "paymentID",
                        "in": "query",
                        "type": "integer",
                        "description": "paymentID to refund",
                        "required": true
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Amount this payment was for",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "refundID or FALSE.",
                        "schema": {
                            "$ref": "#/definitions/paymentCreateRefundResponse"
                        }
                    }
                }
            }
        },
        "/contract/search": {
            "post": {
                "summary": "search",
                "operationId": "contractSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "contractIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "subscriptionIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "dateSigned",
                        "in": "query",
                        "type": "string",
                        "description": "The date the contract was signed."
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": "The date the contract was added."
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property contractIDsNoDataExported will specify the items that are not included in the resolved contract array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search contract Response returns an array of contractIDs",
                        "schema": {
                            "$ref": "#/definitions/contractSearchResponse"
                        }
                    }
                }
            }
        },
        "/contract/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "contractGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for contract. Accepts an array of contractIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "contractIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "includeDocumentLink",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve a link to the document on AWS with a 15 day TTL.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/contract"
                            }
                        }
                    }
                }
            }
        },
        "/contract/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "contractGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get contract data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [
                    {
                        "name": "includeDocumentLink",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve a link to the document on AWS with a 15 day TTL.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/contract"
                        }
                    }
                }
            }
        },
        "/contract/create": {
            "post": {
                "summary": "create",
                "operationId": "contractCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Create the default contract for the subscriptionID or subscriptionLink sent. If sending a signedFile, \n\t\t    upload the file as multipart/form-data with parameter name uploadFile",
                "parameters": [
                    {
                        "name": "subscriptionID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to subscriptions table.",
                        "required": false
                    },
                    {
                        "name": "subscriptionLink",
                        "in": "query",
                        "type": "integer",
                        "description": "Alternative to subscriptionID. This is the \"SubscriptionID\" sent during an API insert through import/main.",
                        "required": false
                    },
                    {
                        "name": "emailCustomer",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 to also send a link to the customer via email.",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "dateSigned",
                        "in": "query",
                        "type": "string",
                        "description": "The date the contract was signed. Required if uploading a signed document.",
                        "required": false
                    },
                    {
                        "name": "base64EncodedFile",
                        "in": "query",
                        "type": "string",
                        "description": "The Base64 encoded signed contract. Pass this if not sending the file.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "If a file is provided, the contractID will be returned after uploading. \n\t\t    Otherwise it will return a Magic URL that will log the customer in and display the contract for signing (with the contractID as the last part).",
                        "schema": {
                            "$ref": "#/definitions/contractCreateResponse"
                        }
                    }
                }
            }
        },
        "/contract/delete": {
            "post": {
                "summary": "delete",
                "operationId": "contractDelete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Delete an uploaded contract",
                "parameters": [
                    {
                        "name": "contractID",
                        "in": "query",
                        "type": "integer",
                        "description": "Id of the contract to be deleted.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Success status of the request.",
                        "schema": {
                            "$ref": "#/definitions/contractDeleteResponse"
                        }
                    }
                }
            }
        },
        "/review/search": {
            "post": {
                "summary": "search",
                "operationId": "reviewSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "feedbackIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "appointmentIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "starRating",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "favorable",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property reviewIDsNoDataExported will specify the items that are not included in the resolved review array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search review Response returns an array of feedbackIDs",
                        "schema": {
                            "$ref": "#/definitions/reviewSearchResponse"
                        }
                    }
                }
            }
        },
        "/review/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "reviewGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for review. Accepts an array of feedbackIDs. Returns a max of 1000 records.\n This function has an additional non-standard filter \"includeCustomers\". If true, the Customer object will be included in the results.",
                "parameters": [
                    {
                        "name": "feedbackIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "includeCustomers",
                        "in": "query",
                        "type": "int",
                        "description": "Set true to include the Customer object in review results..",
                        "required": false
                    },
                    {
                        "name": "pruneSensitiveInfo",
                        "in": "query",
                        "type": "int",
                        "description": "Set true to return review text that has been pruned of credit card, phone, and email information.",
                        "required": false
                    },
                    {
                        "name": "pruneProfanity",
                        "in": "query",
                        "type": "int",
                        "description": "Set true to return review text that has been pruned of common profanity.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/review"
                            }
                        }
                    }
                }
            }
        },
        "/review/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "reviewGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get review data for single ID -- please provide a specific record ID in the URL structure.\n This function has an additional non-standard filter \"includeCustomers\". If true, the Customer object will be included in the results.",
                "parameters": [
                    {
                        "name": "includeCustomers",
                        "in": "query",
                        "type": "integer",
                        "description": "Set true to include the Customer object in review results..",
                        "required": false
                    },
                    {
                        "name": "pruneSensitiveInfo",
                        "in": "query",
                        "type": "integer",
                        "description": "Set true to return review text that has been pruned of credit card, phone, and email information.",
                        "required": false
                    },
                    {
                        "name": "pruneProfanity",
                        "in": "query",
                        "type": "integer",
                        "description": "Set true to return review text that has been pruned of common profanity.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/review"
                        }
                    }
                }
            }
        },
        "/review/summary": {
            "post": {
                "summary": "summary",
                "operationId": "reviewSummary",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "zipCodes",
                        "in": "query",
                        "type": "array",
                        "description": "Zip codes to summarize",
                        "required": false
                    },
                    {
                        "name": "cities",
                        "in": "query",
                        "type": "array",
                        "description": "Cities to summarize",
                        "required": false
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "array",
                        "description": "Foreign key to offices table. Default: officeID associated with the API key sent.",
                        "required": false
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "array",
                        "description": "Foreign key to customers table",
                        "required": false
                    },
                    {
                        "name": "startTime",
                        "in": "query",
                        "type": "string",
                        "description": "Left bound for feedback time",
                        "required": false
                    },
                    {
                        "name": "endTime",
                        "in": "query",
                        "type": "string",
                        "description": "Right bound for feedback time",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "A BUNCH OF STUFF",
                        "schema": {
                            "$ref": "#/definitions/reviewSummaryResponse"
                        }
                    }
                }
            }
        },
        "/review/create": {
            "post": {
                "summary": "create",
                "operationId": "reviewCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to appointments table",
                        "required": true
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table",
                        "required": true
                    },
                    {
                        "name": "starRating",
                        "in": "query",
                        "type": "integer",
                        "description": "Integer 1-5 as star rating.",
                        "required": true
                    },
                    {
                        "name": "feedback",
                        "in": "query",
                        "type": "string",
                        "description": "Customer Feedback String",
                        "required": true
                    },
                    {
                        "name": "time",
                        "in": "query",
                        "type": "string",
                        "description": "Time the feedback was given",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Return the ID of the newly created review item.",
                        "schema": {
                            "$ref": "#/definitions/reviewCreateResponse"
                        }
                    }
                }
            }
        },
        "/review/update": {
            "post": {
                "summary": "update",
                "operationId": "reviewUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to appointments table",
                        "required": false
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table",
                        "required": false
                    },
                    {
                        "name": "starRating",
                        "in": "query",
                        "type": "integer",
                        "description": "Integer 1-5 as star rating.",
                        "required": false
                    },
                    {
                        "name": "feedback",
                        "in": "query",
                        "type": "string",
                        "description": "Customer Feedback String",
                        "required": false
                    },
                    {
                        "name": "time",
                        "in": "query",
                        "type": "string",
                        "description": "Time the feedback was given",
                        "required": false
                    },
                    {
                        "name": "feedbackID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the customerFeedback table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated customerFeedback entity.",
                        "schema": {
                            "$ref": "#/definitions/reviewUpdateResponse"
                        }
                    }
                }
            }
        },
        "/review/delete": {
            "post": {
                "summary": "delete",
                "operationId": "reviewDelete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Delete a customerFeedback item.",
                "parameters": [
                    {
                        "name": "feedbackID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key of the customerFeedback table",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/reviewDeleteResponse"
                        }
                    }
                }
            }
        },
        "/note/search": {
            "post": {
                "summary": "search",
                "operationId": "noteSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "noteIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "typeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "employeeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "content",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "cancellationReason",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "referenceID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "Last date this note record was updated."
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property noteIDsNoDataExported will specify the items that are not included in the resolved note array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search note Response returns an array of noteIDs",
                        "schema": {
                            "$ref": "#/definitions/noteSearchResponse"
                        }
                    }
                }
            }
        },
        "/note/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "noteGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for note. Accepts an array of noteIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "noteIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/note"
                            }
                        }
                    }
                }
            }
        },
        "/note/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "noteGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get note data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/note"
                        }
                    }
                }
            }
        },
        "/note/create": {
            "post": {
                "summary": "create",
                "operationId": "noteCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table.",
                        "required": true
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "Date of the note (mutable)",
                        "required": true
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to employees table.",
                        "required": false
                    },
                    {
                        "name": "contactType",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to contactTypes table found via Admin > Preference > Note Types",
                        "required": true
                    },
                    {
                        "name": "notes",
                        "in": "query",
                        "type": "string",
                        "description": "Arbitrary comment string",
                        "required": true
                    },
                    {
                        "name": "sendTo",
                        "in": "query",
                        "type": "string",
                        "description": "System field?",
                        "required": false
                    },
                    {
                        "name": "showOnInvoice",
                        "in": "query",
                        "type": "boolean",
                        "description": "1 to display this note on invoices, 0 to hide",
                        "required": true
                    },
                    {
                        "name": "cancellationReason",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to cancellationReasons table found via Admin > Preference > Cancellation Reasons",
                        "required": false
                    },
                    {
                        "name": "showTech",
                        "in": "query",
                        "type": "boolean",
                        "description": "Note will be displayed to Tech can see on TechRoutes",
                        "required": false
                    },
                    {
                        "name": "showCustomer",
                        "in": "query",
                        "type": "boolean",
                        "description": "Note will be displayed to the customer in some service notifications",
                        "required": false
                    },
                    {
                        "name": "referenceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Subscription ID this note relates to.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "contactID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/noteCreateResponse"
                        }
                    }
                }
            }
        },
        "/note/update": {
            "post": {
                "summary": "update",
                "operationId": "noteUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table.",
                        "required": true
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "Date of the note (mutable)",
                        "required": true
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to employees table.",
                        "required": false
                    },
                    {
                        "name": "contactType",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to contactTypes table found via Admin > Preference > Note Types",
                        "required": true
                    },
                    {
                        "name": "notes",
                        "in": "query",
                        "type": "string",
                        "description": "Arbitrary comment string",
                        "required": false
                    },
                    {
                        "name": "sendTo",
                        "in": "query",
                        "type": "string",
                        "description": "System field?",
                        "required": false
                    },
                    {
                        "name": "showOnInvoice",
                        "in": "query",
                        "type": "boolean",
                        "description": "1 to display this note on invoices, 0 to hide",
                        "required": true
                    },
                    {
                        "name": "cancellationReason",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to cancellationReasons table found via Admin > Preference > Cancellation Reasons",
                        "required": false
                    },
                    {
                        "name": "showTech",
                        "in": "query",
                        "type": "boolean",
                        "description": "Note will be displayed to Tech can see on TechRoutes",
                        "required": false
                    },
                    {
                        "name": "showCustomer",
                        "in": "query",
                        "type": "boolean",
                        "description": "Note will be displayed to the customer in some service notifications",
                        "required": false
                    },
                    {
                        "name": "referenceID",
                        "in": "query",
                        "type": "integer",
                        "description": "Subscription ID this note relates to.",
                        "required": false
                    },
                    {
                        "name": "contactID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the notes table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/noteUpdateResponse"
                        }
                    }
                }
            }
        },
        "/note/delete": {
            "post": {
                "summary": "delete",
                "operationId": "noteDelete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customers table.",
                        "required": true
                    },
                    {
                        "name": "contactID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to customerContacts table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Success status of the request.",
                        "schema": {
                            "$ref": "#/definitions/noteDeleteResponse"
                        }
                    }
                }
            }
        },
        "/changelog/search": {
            "post": {
                "summary": "search",
                "operationId": "changelogSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "classID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "referenceID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "dateChanged",
                        "in": "query",
                        "type": "string",
                        "description": "The date this log was created"
                    },
                    {
                        "name": "changeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key for changelog"
                    },
                    {
                        "name": "changelogIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key for changelog (alias)"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property changelogIDsNoDataExported will specify the items that are not included in the resolved changelog array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search changelog Response returns an array of changeIDs",
                        "schema": {
                            "$ref": "#/definitions/changelogSearchResponse"
                        }
                    }
                }
            }
        },
        "/changelog/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "changelogGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for changelog. Accepts an array of changeIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "changeIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/changelog"
                            }
                        }
                    }
                }
            }
        },
        "/changelog/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "changelogGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get changelog data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/changelog"
                        }
                    }
                }
            }
        },
        "/document/search": {
            "post": {
                "summary": "search",
                "operationId": "documentSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "uploadIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "customerID associated with the document"
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "customerID associated with the document"
                    },
                    {
                        "name": "appointmentIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "appointmentID associated with the document"
                    },
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "appointmentID associated with the document"
                    },
                    {
                        "name": "formTemplateID",
                        "in": "query",
                        "type": "integer",
                        "description": "formTemplateID for pulling specific form types"
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property documentIDsNoDataExported will specify the items that are not included in the resolved document array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search document Response returns an array of uploadIDs",
                        "schema": {
                            "$ref": "#/definitions/documentSearchResponse"
                        }
                    }
                }
            }
        },
        "/document/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "documentGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for document. Accepts an array of uploadIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "uploadIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "includeDocumentLink",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve a link to the document on AWS with a 15 day TTL.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/document"
                            }
                        }
                    }
                }
            }
        },
        "/document/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "documentGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get document data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [
                    {
                        "name": "includeDocumentLink",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve a link to the document on AWS with a 15 day TTL.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/document"
                        }
                    }
                }
            }
        },
        "/document/create": {
            "post": {
                "summary": "create",
                "operationId": "documentCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Upload file as multipart/form-data with parameter name uploadFile",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer ID this document relates to.",
                        "required": true
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "integer",
                        "description": "Description for this document",
                        "required": true
                    },
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "Appointment ID this document relates to",
                        "required": false
                    },
                    {
                        "name": "showCustomer",
                        "in": "query",
                        "type": "bool",
                        "description": "If set true this document will be accessable to the customer it is attached to.",
                        "required": false
                    },
                    {
                        "name": "showTech",
                        "in": "query",
                        "type": "bool",
                        "description": "If set true this document will be accessable to technicians servicing this customer.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "uploadID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/documentCreateResponse"
                        }
                    }
                }
            }
        },
        "/document/createEncoded": {
            "post": {
                "summary": "createEncoded",
                "operationId": "documentCreateEncoded",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Allows file upload using a Base64 representation submitted through POST, GET or query string parameters",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer ID this document relates to.",
                        "required": true
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "integer",
                        "description": "Description for this document",
                        "required": true
                    },
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "Appointment ID this document relates to",
                        "required": false
                    },
                    {
                        "name": "showCustomer",
                        "in": "query",
                        "type": "bool",
                        "description": "If set true this document will be accessable to the customer it is attached to.",
                        "required": false
                    },
                    {
                        "name": "showTech",
                        "in": "query",
                        "type": "bool",
                        "description": "If set true this document will be accessable to technicians servicing this customer.",
                        "required": false
                    },
                    {
                        "name": "encodedFile",
                        "in": "query",
                        "type": "string",
                        "description": "Base64 representation of a file.",
                        "required": true
                    },
                    {
                        "name": "filename",
                        "in": "query",
                        "type": "string",
                        "description": "Name of encoded file",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "uploadID for the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/documentCreateEncodedResponse"
                        }
                    }
                }
            }
        },
        "/document/update": {
            "post": {
                "summary": "update",
                "operationId": "documentUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update the attributes of a customer upload.",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer ID this document relates to.",
                        "required": true
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "integer",
                        "description": "Description for this document",
                        "required": true
                    },
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "Appointment ID this document relates to",
                        "required": false
                    },
                    {
                        "name": "showCustomer",
                        "in": "query",
                        "type": "bool",
                        "description": "If set true this document will be accessable to the customer it is attached to.",
                        "required": false
                    },
                    {
                        "name": "showTech",
                        "in": "query",
                        "type": "bool",
                        "description": "If set true this document will be accessable to technicians servicing this customer.",
                        "required": false
                    },
                    {
                        "name": "uploadID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of upload to update",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the modified upload.",
                        "schema": {
                            "$ref": "#/definitions/documentUpdateResponse"
                        }
                    }
                }
            }
        },
        "/document/delete": {
            "post": {
                "summary": "delete",
                "operationId": "documentDelete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Delete a customer upload",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "CustomerID to delete from.",
                        "required": true
                    },
                    {
                        "name": "uploadID",
                        "in": "query",
                        "type": "integer",
                        "description": "UploadID to delete.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Success status of the request.",
                        "schema": {
                            "$ref": "#/definitions/documentDeleteResponse"
                        }
                    }
                }
            }
        },
        "/route/search": {
            "post": {
                "summary": "search",
                "operationId": "routeSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.\n If the includeData flag is set the additional parameters from getData (latitude, longitude) can be used.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "routeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateStart",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateEnd",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "assignedTech",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "apiCanSchedule",
                        "in": "query",
                        "type": "boolean",
                        "description": "Send as 1 to retrieve only routes that the API can schedule for."
                    },
                    {
                        "name": "lastUpdated",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "employeeTeams",
                        "in": "query",
                        "type": "integer",
                        "description": "Send with an employeeID to limit routes to those that the employee's team is assigned to via route can schedule settings."
                    },
                    {
                        "name": "excludeGlobalSalesTeam",
                        "in": "query",
                        "type": "integer",
                        "description": "send as 1 to ignore routes available to the global sales team"
                    },
                    {
                        "name": "groupTitle",
                        "in": "query",
                        "type": "string",
                        "description": "Title of the group associated with the route"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property routeIDsNoDataExported will specify the items that are not included in the resolved route array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search route Response returns an array of routeIDs",
                        "schema": {
                            "$ref": "#/definitions/routeSearchResponse"
                        }
                    }
                }
            }
        },
        "/route/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "routeGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for route. Accepts an array of routeIDs. Returns a max of 1000 records.\n This function has additional non-standard filters Latitude and Longitude for distance calculation. If these are not specified the office location will be used.",
                "parameters": [
                    {
                        "name": "routeIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "latitude",
                        "in": "query",
                        "type": "number",
                        "description": "Latitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "longitude",
                        "in": "query",
                        "type": "number",
                        "description": "Longitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "maxDistance",
                        "in": "query",
                        "type": "int",
                        "description": "Maximum number of miles from the route average to return.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/route"
                            }
                        }
                    }
                }
            }
        },
        "/route/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "routeGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get route data for single ID -- please provide a specific record ID in the URL structure.\n This function has additional non-standard filters Latitude and Longitude for distance calculation. If these are not specified the office location will be used.",
                "parameters": [
                    {
                        "name": "latitude",
                        "in": "query",
                        "type": "number",
                        "description": "Latitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "longitude",
                        "in": "query",
                        "type": "number",
                        "description": "Longitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "maxDistance",
                        "in": "query",
                        "type": "integer",
                        "description": "Maximum number of miles from the route average to return.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/route"
                        }
                    }
                }
            }
        },
        "/route/create": {
            "post": {
                "summary": "create",
                "operationId": "routeCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "create a group",
                "parameters": [
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "DayID to create for",
                        "required": false
                    },
                    {
                        "name": "templateID",
                        "in": "query",
                        "type": "integer",
                        "description": "templateID from office software",
                        "required": false
                    },
                    {
                        "name": "assignedTech",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID",
                        "required": false
                    },
                    {
                        "name": "autoCreateGroup",
                        "in": "query",
                        "type": "integer",
                        "description": "set as 1 if the group should be auto-created with the template title, set as 0 to reject on missing group",
                        "required": false,
                        "default": 1
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "routeID",
                        "schema": {
                            "$ref": "#/definitions/routeCreateResponse"
                        }
                    }
                }
            }
        },
        "/route/update": {
            "post": {
                "summary": "update",
                "operationId": "routeUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update route details",
                "parameters": [
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "DayID to create for",
                        "required": false
                    },
                    {
                        "name": "assignedTech",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID",
                        "required": false
                    },
                    {
                        "name": "autoCreateGroup",
                        "in": "query",
                        "type": "integer",
                        "description": "set as 1 if the group should be auto-created with the template title, set as 0 to reject on missing group",
                        "required": false
                    },
                    {
                        "name": "routeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the route table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/routeUpdateResponse"
                        }
                    }
                }
            }
        },
        "/spot/search": {
            "post": {
                "summary": "search",
                "operationId": "spotSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.\n If the includeData flag is set the additional parameters from getData (latitude, longitude, and maxDistance) can be used.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "spotIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key for spots."
                    },
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "apiCanSchedule",
                        "in": "query",
                        "type": "boolean",
                        "description": "Send as 1 to retrieve only routes that the API can schedule for."
                    },
                    {
                        "name": "assignedTech",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "routeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key for routes."
                    },
                    {
                        "name": "routeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key for routes."
                    },
                    {
                        "name": "reserved",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key for routes."
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property spotIDsNoDataExported will specify the items that are not included in the resolved spot array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search spot Response returns an array of spotIDs",
                        "schema": {
                            "$ref": "#/definitions/spotSearchResponse"
                        }
                    }
                }
            }
        },
        "/spot/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "spotGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for spot. Accepts an array of spotIDs. Returns a max of 1000 records.\n This function has additional non-standard filters Latitude and Longitude for distance calculation. If these are not specified the office location will be used.",
                "parameters": [
                    {
                        "name": "spotIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "latitude",
                        "in": "query",
                        "type": "number",
                        "description": "Latitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "longitude",
                        "in": "query",
                        "type": "number",
                        "description": "Longitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "maxDistance",
                        "in": "query",
                        "type": "int",
                        "description": "Maximum number of miles from the previous spot to return.",
                        "required": false
                    },
                    {
                        "name": "ignoreInitialDriveTime",
                        "in": "query",
                        "type": "int",
                        "description": "If sent as 1 the start and end of the route will be ignored for distanceToClosest and maxDistance once the route has an appointment on it. This strategy can be beneficial technicians are driving a long distance to their first appointment, then servicing locally from there.",
                        "required": false
                    },
                    {
                        "name": "open",
                        "in": "query",
                        "type": "int",
                        "description": "Set as 1 to return only open routes from the GET",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/spot"
                            }
                        }
                    }
                }
            }
        },
        "/spot/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "spotGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get spot data for single ID -- please provide a specific record ID in the URL structure.\n This function has additional non-standard filters Latitude and Longitude for distance calculation. If these are not specified the office location will be used.",
                "parameters": [
                    {
                        "name": "latitude",
                        "in": "query",
                        "type": "number",
                        "description": "Latitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "longitude",
                        "in": "query",
                        "type": "number",
                        "description": "Longitude for distance calculcations. If not specified, the office longitude will be used",
                        "required": false
                    },
                    {
                        "name": "maxDistance",
                        "in": "query",
                        "type": "integer",
                        "description": "Maximum number of miles from the previous spot to return.",
                        "required": false
                    },
                    {
                        "name": "ignoreInitialDriveTime",
                        "in": "query",
                        "type": "integer",
                        "description": "If sent as 1 the start and end of the route will be ignored for distanceToClosest and maxDistance once the route has an appointment on it. This strategy can be beneficial technicians are driving a long distance to their first appointment, then servicing locally from there.",
                        "required": false
                    },
                    {
                        "name": "open",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 to return only open routes from the GET",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/spot"
                        }
                    }
                }
            }
        },
        "/spot/reserve": {
            "post": {
                "summary": "reserve",
                "operationId": "spotReserve",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Reserve a spot until a particular time",
                "parameters": [
                    {
                        "name": "spotID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to spots table",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "spotOptions",
                        "in": "query",
                        "type": "array",
                        "description": "Array of spotIDs. If sent, the first available spotID in this set will be reserved",
                        "required": false,
                        "default": []
                    },
                    {
                        "name": "duration",
                        "in": "query",
                        "type": "integer",
                        "description": "duration of the lock in minutes",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns a token granting the bearer access to schedule to the specificed spot, spotID, reservationEnd timestamp.",
                        "schema": {
                            "$ref": "#/definitions/spotReserveResponse"
                        }
                    }
                }
            }
        },
        "/spot/release": {
            "post": {
                "summary": "release",
                "operationId": "spotRelease",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Release reservations on a spot",
                "parameters": [
                    {
                        "name": "spotID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to spots table",
                        "required": false,
                        "default": 0
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns true unless a database error occurs.",
                        "schema": {
                            "$ref": "#/definitions/spotReleaseResponse"
                        }
                    }
                }
            }
        },
        "/spot/block": {
            "post": {
                "summary": "block",
                "operationId": "spotBlock",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Block spots",
                "parameters": [
                    {
                        "name": "spotID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to spots table",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "spotIDs",
                        "in": "query",
                        "type": "array",
                        "description": "Array of additional spotIDs to block",
                        "required": false,
                        "default": []
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "array",
                        "description": "Block description default: Break",
                        "required": false,
                        "default": "Break"
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns true unless a database error occurs.",
                        "schema": {
                            "$ref": "#/definitions/spotBlockResponse"
                        }
                    }
                }
            }
        },
        "/spot/unblock": {
            "post": {
                "summary": "unblock",
                "operationId": "spotUnblock",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "unblock spots",
                "parameters": [
                    {
                        "name": "spotID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to spots table",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "spotIDs",
                        "in": "query",
                        "type": "array",
                        "description": "Array of additional spotIDs to unblock",
                        "required": false,
                        "default": []
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns true unless a database error occurs.",
                        "schema": {
                            "$ref": "#/definitions/spotUnblockResponse"
                        }
                    }
                }
            }
        },
        "/genericFlag/search": {
            "post": {
                "summary": "search",
                "operationId": "genericFlagSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "genericFlagIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "code",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property genericFlagIDsNoDataExported will specify the items that are not included in the resolved genericFlag array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search genericFlag Response returns an array of genericFlagIDs",
                        "schema": {
                            "$ref": "#/definitions/genericFlagSearchResponse"
                        }
                    }
                }
            }
        },
        "/genericFlag/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "genericFlagGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for genericFlag. Accepts an array of genericFlagIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "genericFlagIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/genericFlag"
                            }
                        }
                    }
                }
            }
        },
        "/genericFlag/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "genericFlagGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get genericFlag data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/genericFlag"
                        }
                    }
                }
            }
        },
        "/genericFlagAssignment/search": {
            "post": {
                "summary": "search",
                "operationId": "genericFlagAssignmentSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "genericFlagAssignmentIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "genericFlagIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "entityIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property genericFlagAssignmentIDsNoDataExported will specify the items that are not included in the resolved genericFlagAssignment array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search genericFlagAssignment Response returns an array of genericFlagAssignmentIDs",
                        "schema": {
                            "$ref": "#/definitions/genericFlagAssignmentSearchResponse"
                        }
                    }
                }
            }
        },
        "/genericFlagAssignment/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "genericFlagAssignmentGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for genericFlagAssignment. Accepts an array of genericFlagAssignmentIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "genericFlagAssignmentIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/genericFlagAssignment"
                            }
                        }
                    }
                }
            }
        },
        "/genericFlagAssignment/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "genericFlagAssignmentGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get genericFlagAssignment data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/genericFlagAssignment"
                        }
                    }
                }
            }
        },
        "/genericFlagAssignment/create": {
            "post": {
                "summary": "create",
                "operationId": "genericFlagAssignmentCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "genericFlagID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to flag",
                        "required": true
                    },
                    {
                        "name": "entityID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of entity being assigned the flag",
                        "required": true
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "string",
                        "description": "Type of flag.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "genericFlagID for the newly created flag.",
                        "schema": {
                            "$ref": "#/definitions/genericFlagAssignmentCreateResponse"
                        }
                    }
                }
            }
        },
        "/genericFlagAssignment/update": {
            "post": {
                "summary": "update",
                "operationId": "genericFlagAssignmentUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "genericFlagAssignmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of genericFlagAssignment being updated",
                        "required": true
                    },
                    {
                        "name": "genericFlagID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign key to flag",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "genericFlagID for the updated flag.",
                        "schema": {
                            "$ref": "#/definitions/genericFlagAssignmentUpdateResponse"
                        }
                    }
                }
            }
        },
        "/genericFlagAssignment/delete": {
            "post": {
                "summary": "delete",
                "operationId": "genericFlagAssignmentDelete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "genericFlagAssignmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": null,
                        "schema": {
                            "$ref": "#/definitions/genericFlagAssignmentDeleteResponse"
                        }
                    }
                }
            }
        },
        "/team/search": {
            "post": {
                "summary": "search",
                "operationId": "teamSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "teamID",
                        "in": "query",
                        "type": "integer",
                        "description": "Unique Identifier"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "type": "string",
                        "description": "Team Name"
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "Team type. 0: Office Team, 2: Sales Team",
                        "default": [
                            2
                        ]
                    },
                    {
                        "name": "teamLeader",
                        "in": "query",
                        "type": "integer",
                        "description": "Employee ID of the team leader"
                    },
                    {
                        "name": "employeeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Employee IDs of team members"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property teamIDsNoDataExported will specify the items that are not included in the resolved team array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search team Response returns an array of teamIDs",
                        "schema": {
                            "$ref": "#/definitions/teamSearchResponse"
                        }
                    }
                }
            }
        },
        "/team/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "teamGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for team. Accepts an array of teamIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "teamIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/team"
                            }
                        }
                    }
                }
            }
        },
        "/team/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "teamGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get team data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/team"
                        }
                    }
                }
            }
        },
        "/accessControl/search": {
            "post": {
                "summary": "search",
                "operationId": "accessControlSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Employee ID of custom Access Control Profile"
                    },
                    {
                        "name": "accessControlProfileID",
                        "in": "query",
                        "type": "integer",
                        "description": "0: Custom Access Control Profile per user. Otherwise, ID of defined Access Control Profiles"
                    },
                    {
                        "name": "admin",
                        "in": "query",
                        "type": "integer",
                        "description": "Administrator"
                    },
                    {
                        "name": "adminMessage",
                        "in": "query",
                        "type": "integer",
                        "description": "Admin Messages"
                    },
                    {
                        "name": "editPreferences",
                        "in": "query",
                        "type": "integer",
                        "description": "Adjust Preferences"
                    },
                    {
                        "name": "viewOwnRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Routes"
                    },
                    {
                        "name": "viewOtherRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other's Routes"
                    },
                    {
                        "name": "editOwnRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Routes"
                    },
                    {
                        "name": "editOtherRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other's Routes"
                    },
                    {
                        "name": "createRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "Create Routes"
                    },
                    {
                        "name": "deleteRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "Delete Routes"
                    },
                    {
                        "name": "lockUnlockRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "Lock/Unlock Routes"
                    },
                    {
                        "name": "scheduleOnLockedRoutes",
                        "in": "query",
                        "type": "integer",
                        "description": "Schedule On Locked Routes"
                    },
                    {
                        "name": "scheduleOwn",
                        "in": "query",
                        "type": "integer",
                        "description": "Schedule Appointments"
                    },
                    {
                        "name": "cancelOwn",
                        "in": "query",
                        "type": "integer",
                        "description": "Cancel Own Appointments"
                    },
                    {
                        "name": "editOthers",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other's Appointments"
                    },
                    {
                        "name": "canUnlockAppointments",
                        "in": "query",
                        "type": "integer",
                        "description": "Unlock Other's Appointments"
                    },
                    {
                        "name": "intelligentRouting",
                        "in": "query",
                        "type": "integer",
                        "description": "Intelligent Routing"
                    },
                    {
                        "name": "editMap",
                        "in": "query",
                        "type": "integer",
                        "description": "Assign Map Pages"
                    },
                    {
                        "name": "viewProdValue",
                        "in": "query",
                        "type": "integer",
                        "description": "View Production Value"
                    },
                    {
                        "name": "useTechRoutesStructures",
                        "in": "query",
                        "type": "integer",
                        "description": "Use Structures/Trend Reporting (Additional Charges Apply)"
                    },
                    {
                        "name": "viewUsers",
                        "in": "query",
                        "type": "integer",
                        "description": "View Users"
                    },
                    {
                        "name": "editUsers",
                        "in": "query",
                        "type": "integer",
                        "description": "Add / Edit Users"
                    },
                    {
                        "name": "viewTechs",
                        "in": "query",
                        "type": "integer",
                        "description": "View Techs"
                    },
                    {
                        "name": "editTechs",
                        "in": "query",
                        "type": "integer",
                        "description": "Add / Edit Techs"
                    },
                    {
                        "name": "viewSalesmen",
                        "in": "query",
                        "type": "integer",
                        "description": "View Sales Reps"
                    },
                    {
                        "name": "editSalesmen",
                        "in": "query",
                        "type": "integer",
                        "description": "Add / Edit Sales Reps"
                    },
                    {
                        "name": "viewOwnTimeSheet",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Time Sheet"
                    },
                    {
                        "name": "viewOtherTimeSheet",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other Time Sheets"
                    },
                    {
                        "name": "editOwnTimeSheet",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Time Sheet"
                    },
                    {
                        "name": "editOtherTimeSheet",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other Time Sheets"
                    },
                    {
                        "name": "overrideTimeClockRestrictions",
                        "in": "query",
                        "type": "integer",
                        "description": "Override Time Clock Restrictions"
                    },
                    {
                        "name": "canSpyOnReps",
                        "in": "query",
                        "type": "integer",
                        "description": "Rep Spy (SalesRoutes)"
                    },
                    {
                        "name": "editTeams",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Teams"
                    },
                    {
                        "name": "viewEmployeeFinancialSettings",
                        "in": "query",
                        "type": "integer",
                        "description": "View Employee Financial Settings"
                    },
                    {
                        "name": "editEmployeeFinancialSettings",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Employee Financial Settings"
                    },
                    {
                        "name": "viewOwnTasks",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Tasks"
                    },
                    {
                        "name": "viewOtherTasks",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other Tasks"
                    },
                    {
                        "name": "editOwnTasks",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Tasks"
                    },
                    {
                        "name": "editOtherTasks",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other Tasks"
                    },
                    {
                        "name": "viewAlerts",
                        "in": "query",
                        "type": "integer",
                        "description": "View Alerts"
                    },
                    {
                        "name": "viewTransactions",
                        "in": "query",
                        "type": "integer",
                        "description": "View Transactions"
                    },
                    {
                        "name": "addCharge",
                        "in": "query",
                        "type": "integer",
                        "description": "Add Charges"
                    },
                    {
                        "name": "applyPayment",
                        "in": "query",
                        "type": "integer",
                        "description": "Apply Payments"
                    },
                    {
                        "name": "editTransactions",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Transactions"
                    },
                    {
                        "name": "processRefunds",
                        "in": "query",
                        "type": "integer",
                        "description": "Refund Payments"
                    },
                    {
                        "name": "deleteInvoice",
                        "in": "query",
                        "type": "integer",
                        "description": "Delete Invoices"
                    },
                    {
                        "name": "createCoupon",
                        "in": "query",
                        "type": "integer",
                        "description": "Create Coupon"
                    },
                    {
                        "name": "invoiceNegativeItem",
                        "in": "query",
                        "type": "integer",
                        "description": "Negative Charges"
                    },
                    {
                        "name": "closedMonthAppointmentCompletion",
                        "in": "query",
                        "type": "integer",
                        "description": "Complete appointment when period is locked"
                    },
                    {
                        "name": "createCustomers",
                        "in": "query",
                        "type": "integer",
                        "description": "Create Customers"
                    },
                    {
                        "name": "viewOwnCustomers",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Customers"
                    },
                    {
                        "name": "viewOtherCustomers",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other Customers"
                    },
                    {
                        "name": "editOwnCustomers",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Customers"
                    },
                    {
                        "name": "editOtherCustomers",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other Customers"
                    },
                    {
                        "name": "toggleCustomerStatus",
                        "in": "query",
                        "type": "integer",
                        "description": "Freeze/Unfreeze Customers"
                    },
                    {
                        "name": "editCancellationDates",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Cancellation Date/Reason"
                    },
                    {
                        "name": "toggleSubscriptionStatus",
                        "in": "query",
                        "type": "integer",
                        "description": "Freeze/Unfreeze Subscriptions"
                    },
                    {
                        "name": "viewOwnSubscriptions",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Subscriptions"
                    },
                    {
                        "name": "viewOtherSubscriptions",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other Subscriptions"
                    },
                    {
                        "name": "editOwnSubscriptions",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Subscriptions"
                    },
                    {
                        "name": "editOtherSubscriptions",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other Subscriptions"
                    },
                    {
                        "name": "accessSentricon",
                        "in": "query",
                        "type": "integer",
                        "description": "Can Access Sentricon"
                    },
                    {
                        "name": "editOwnSalesRep",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Sales Rep"
                    },
                    {
                        "name": "editOtherSalesRep",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other Sales Rep"
                    },
                    {
                        "name": "viewLeaderBoardsAllOffices",
                        "in": "query",
                        "type": "integer",
                        "description": "View Leaderboards of All Offices"
                    },
                    {
                        "name": "createCustomersFromMobile",
                        "in": "query",
                        "type": "integer",
                        "description": "Create Customers on Mobile (Additional Charges Apply)"
                    },
                    {
                        "name": "viewOwnLeads",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Leads"
                    },
                    {
                        "name": "viewOtherLeads",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other Leads"
                    },
                    {
                        "name": "editOwnLeads",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Leads"
                    },
                    {
                        "name": "editOtherLeads",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other Leads"
                    },
                    {
                        "name": "assignBillingAccount",
                        "in": "query",
                        "type": "integer",
                        "description": "Assign Billing Account"
                    },
                    {
                        "name": "viewOwnBilling",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Billing"
                    },
                    {
                        "name": "viewOtherBilling",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other Billing"
                    },
                    {
                        "name": "editOwnBilling",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Own Billing"
                    },
                    {
                        "name": "editOtherBilling",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Other Billing"
                    },
                    {
                        "name": "addOwnBilling",
                        "in": "query",
                        "type": "integer",
                        "description": "Add Own Billing"
                    },
                    {
                        "name": "addOtherBilling",
                        "in": "query",
                        "type": "integer",
                        "description": "Add Other Billing"
                    },
                    {
                        "name": "approveForms",
                        "in": "query",
                        "type": "integer",
                        "description": "Approve Forms"
                    },
                    {
                        "name": "viewOwnInvoices",
                        "in": "query",
                        "type": "integer",
                        "description": "View Own Invoices"
                    },
                    {
                        "name": "viewOtherInvoices",
                        "in": "query",
                        "type": "integer",
                        "description": "View Other Invoices"
                    },
                    {
                        "name": "editTaxable",
                        "in": "query",
                        "type": "integer",
                        "description": "Edit Taxable"
                    },
                    {
                        "name": "hideCommercialPricing",
                        "in": "query",
                        "type": "integer",
                        "description": "Hide Commercial Price on Mobile"
                    },
                    {
                        "name": "hideResidentialPricing",
                        "in": "query",
                        "type": "integer",
                        "description": "Hide Residential Price on Mobile"
                    },
                    {
                        "name": "ignoreMinInitial",
                        "in": "query",
                        "type": "integer",
                        "description": "Ignore Min Initial Charge"
                    },
                    {
                        "name": "ignoreMinRecurring",
                        "in": "query",
                        "type": "integer",
                        "description": "Ignore Min Recurring Charge"
                    },
                    {
                        "name": "ignoreMinContractValue",
                        "in": "query",
                        "type": "integer",
                        "description": "Ignore Min Contract Value"
                    },
                    {
                        "name": "viewSalesmanReports",
                        "in": "query",
                        "type": "integer",
                        "description": "View Sales Overview"
                    },
                    {
                        "name": "viewDetailedSalesReports",
                        "in": "query",
                        "type": "integer",
                        "description": "View Sales Details"
                    },
                    {
                        "name": "viewOfficeReports",
                        "in": "query",
                        "type": "integer",
                        "description": "View Office Reports"
                    },
                    {
                        "name": "viewCustomReports",
                        "in": "query",
                        "type": "integer",
                        "description": "View Custom Reports"
                    },
                    {
                        "name": "viewCustomerReport",
                        "in": "query",
                        "type": "integer",
                        "description": "View Customer Report"
                    },
                    {
                        "name": "viewDashboard",
                        "in": "query",
                        "type": "integer",
                        "description": "View Dashboard"
                    },
                    {
                        "name": "salesroutesBaseballRevenue",
                        "in": "query",
                        "type": "integer",
                        "description": "Sales Leaderboard Revenue"
                    },
                    {
                        "name": "serviceNotificationApproval",
                        "in": "query",
                        "type": "integer",
                        "description": "Service Notification Approval"
                    },
                    {
                        "name": "activeCustomersWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Active Customers"
                    },
                    {
                        "name": "subscriptionTypesWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Active Subscriptions"
                    },
                    {
                        "name": "cancelReasonsWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Cancellation Reasons"
                    },
                    {
                        "name": "monthlyServicesWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Monthly Services"
                    },
                    {
                        "name": "starRatingWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Technician Ratings"
                    },
                    {
                        "name": "collectionsWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Collections Percentage"
                    },
                    {
                        "name": "completionPercentageWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Completion Percentage"
                    },
                    {
                        "name": "regularStopsPerRouteWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Stops Per Route"
                    },
                    {
                        "name": "aPayCustomersWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Autopay Percentage"
                    },
                    {
                        "name": "accountAgeWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Receivables Aging"
                    },
                    {
                        "name": "paymentBreakdownWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Payment Types"
                    },
                    {
                        "name": "averageRatesWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Average Rates"
                    },
                    {
                        "name": "averageContractValuesWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Average Contract Values"
                    },
                    {
                        "name": "customerAgeWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Average Customer Age"
                    },
                    {
                        "name": "customerSourcesWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Subscription Sources"
                    },
                    {
                        "name": "extraCardsWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Frozen with Account"
                    },
                    {
                        "name": "monthlyBillingWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Recurring Billing"
                    },
                    {
                        "name": "debitBalanceWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Debit Balance"
                    },
                    {
                        "name": "revenueByServiceTypeWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Revenue by Service"
                    },
                    {
                        "name": "revenueByMonthWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Revenue by Month"
                    },
                    {
                        "name": "recurringAnnualRevenueWidget",
                        "in": "query",
                        "type": "integer",
                        "description": "Recurring Annual Revenue"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property accessControlIDsNoDataExported will specify the items that are not included in the resolved accessControl array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search accessControl Response returns an array of employeeIDs",
                        "schema": {
                            "$ref": "#/definitions/accessControlSearchResponse"
                        }
                    }
                }
            }
        },
        "/accessControl/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "accessControlGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for accessControl. Accepts an array of employeeIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "employeeIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/accessControl"
                            }
                        }
                    }
                }
            }
        },
        "/accessControl/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "accessControlGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get accessControl data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/accessControl"
                        }
                    }
                }
            }
        },
        "/unit/search": {
            "post": {
                "summary": "search",
                "operationId": "unitSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "unitIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key."
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Customer who owns this unit"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property unitIDsNoDataExported will specify the items that are not included in the resolved unit array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search unit Response returns an array of unitIDs",
                        "schema": {
                            "$ref": "#/definitions/unitSearchResponse"
                        }
                    }
                }
            }
        },
        "/unit/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "unitGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for unit. Accepts an array of unitIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "unitIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/unit"
                            }
                        }
                    }
                }
            }
        },
        "/unit/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "unitGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get unit data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/unit"
                        }
                    }
                }
            }
        },
        "/timeClock/search": {
            "post": {
                "summary": "search",
                "operationId": "timeClockSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "entryIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key."
                    },
                    {
                        "name": "timeClockIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key (alias)"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "employeeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID who the time clock entry applies to."
                    },
                    {
                        "name": "timeIn",
                        "in": "query",
                        "type": "string",
                        "description": "Clock-in time"
                    },
                    {
                        "name": "timeOut",
                        "in": "query",
                        "type": "string",
                        "description": "Clock-out time"
                    },
                    {
                        "name": "paid",
                        "in": "query",
                        "type": "integer",
                        "description": "0 for unpaid categories, 1 for paid categories. Clock entries with no category association are considered paid."
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property timeClockIDsNoDataExported will specify the items that are not included in the resolved timeClock array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search timeClock Response returns an array of entryIDs",
                        "schema": {
                            "$ref": "#/definitions/timeClockSearchResponse"
                        }
                    }
                }
            }
        },
        "/timeClock/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "timeClockGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for timeClock. Accepts an array of entryIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "entryIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/timeClock"
                            }
                        }
                    }
                }
            }
        },
        "/timeClock/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "timeClockGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get timeClock data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/timeClock"
                        }
                    }
                }
            }
        },
        "/timeClockCategory/search": {
            "post": {
                "summary": "search",
                "operationId": "timeClockCategorySearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "clockCategoryIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key."
                    },
                    {
                        "name": "timeClockCategoryIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key (alias)"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "visible",
                        "in": "query",
                        "type": "integer",
                        "description": "Visible to staff"
                    },
                    {
                        "name": "allowOnClockIn",
                        "in": "query",
                        "type": "integer",
                        "description": "time clock category is allowed on initial clock in."
                    },
                    {
                        "name": "systemReserved",
                        "in": "query",
                        "type": "integer",
                        "description": "1 = system reserved category (cannot be deleted or changed)"
                    },
                    {
                        "name": "paid",
                        "in": "query",
                        "type": "integer",
                        "description": "0 for unpaid categories, 1 for paid categories. Clock entries with no category association are considered paid."
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "Date this category was last changed"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property timeClockCategoryIDsNoDataExported will specify the items that are not included in the resolved timeClockCategory array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search timeClockCategory Response returns an array of clockCategoryIDs",
                        "schema": {
                            "$ref": "#/definitions/timeClockCategorySearchResponse"
                        }
                    }
                }
            }
        },
        "/timeClockCategory/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "timeClockCategoryGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for timeClockCategory. Accepts an array of clockCategoryIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "clockCategoryIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/timeClockCategory"
                            }
                        }
                    }
                }
            }
        },
        "/timeClockCategory/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "timeClockCategoryGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get timeClockCategory data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/timeClockCategory"
                        }
                    }
                }
            }
        },
        "/region/search": {
            "post": {
                "summary": "search",
                "operationId": "regionSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "regionIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Office ID region belongs to"
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Description of the region"
                    },
                    {
                        "name": "created",
                        "in": "query",
                        "type": "string",
                        "description": "Time the region was created"
                    },
                    {
                        "name": "deleted",
                        "in": "query",
                        "type": "string",
                        "description": "Time the region was deleted"
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "active",
                        "in": "query",
                        "type": "string",
                        "description": "Active status for the region."
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property regionIDsNoDataExported will specify the items that are not included in the resolved region array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search region Response returns an array of regionIDs",
                        "schema": {
                            "$ref": "#/definitions/regionSearchResponse"
                        }
                    }
                }
            }
        },
        "/region/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "regionGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for region. Accepts an array of regionIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "regionIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/region"
                            }
                        }
                    }
                }
            }
        },
        "/region/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "regionGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get region data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/region"
                        }
                    }
                }
            }
        },
        "/task/search": {
            "post": {
                "summary": "search",
                "operationId": "taskSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "taskIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key."
                    },
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "CustomerID the task relates to."
                    },
                    {
                        "name": "assignedTo",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID the task is assigned to"
                    },
                    {
                        "name": "completedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID who completed the task"
                    },
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "Type of task: 0 - Task, 1 - Alert"
                    },
                    {
                        "name": "dueDate",
                        "in": "query",
                        "type": "string",
                        "description": "Time the task or alert is due."
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": "Time the task or alert was added."
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "type": "integer",
                        "description": "Category ID of the task"
                    },
                    {
                        "name": "referenceID",
                        "in": "query",
                        "type": "integer",
                        "description": "ReferenceID for the task. (e.g. subscriptionID that it relates to) "
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number associated with the task"
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "Time the task was last updated."
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "Status of the task. (0-Pending, 1-Completed, 2-In Use, 3-Urgent)"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property taskIDsNoDataExported will specify the items that are not included in the resolved task array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search task Response returns an array of taskIDs",
                        "schema": {
                            "$ref": "#/definitions/taskSearchResponse"
                        }
                    }
                }
            }
        },
        "/task/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "taskGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for task. Accepts an array of taskIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "taskIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/task"
                            }
                        }
                    }
                }
            }
        },
        "/task/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "taskGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get task data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/task"
                        }
                    }
                }
            }
        },
        "/task/create": {
            "post": {
                "summary": "create",
                "operationId": "taskCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Create a new task or alert.",
                "parameters": [
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "0: task, 1: alert",
                        "required": true
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "CustomerID the task pertains to",
                        "required": true
                    },
                    {
                        "name": "referenceID",
                        "in": "query",
                        "type": "integer",
                        "description": "SubscriptionID the task pertains to",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for the task",
                        "required": false
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "type": "integer",
                        "description": "categoryID of the task values: Appt Status (15), Billing (1), Customer Care (10), Customer Status (13), Feedback (7), Follow Up (5), Office (6), Reminder Reply (9), Sales (11), Scheduling (2), Service (4), SMS Reply (12), Subscription Status (14), Tech Flag (8), Voice Mail (3)",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "addedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID who added the task or alert",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "assignedTo",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID the task is assigned to",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "dueDate",
                        "in": "query",
                        "type": "string",
                        "description": "Date the task is due",
                        "required": false,
                        "default": "0000-00-000"
                    },
                    {
                        "name": "task",
                        "in": "query",
                        "type": "string",
                        "description": "Text description of the task",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "0: Pending, 1: Completed, 2: In Use, 3: Urgent, -1: Deleted",
                        "required": false,
                        "default": 0
                    },
                    {
                        "name": "dateCompleted",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "completedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "completionNotes",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false,
                        "default": ""
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "taskID of the newly created entity.",
                        "schema": {
                            "$ref": "#/definitions/taskCreateResponse"
                        }
                    }
                }
            }
        },
        "/task/update": {
            "post": {
                "summary": "update",
                "operationId": "taskUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update a task.",
                "parameters": [
                    {
                        "name": "type",
                        "in": "query",
                        "type": "integer",
                        "description": "0: task, 1: alert",
                        "required": false
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "CustomerID the task pertains to",
                        "required": false
                    },
                    {
                        "name": "referenceID",
                        "in": "query",
                        "type": "integer",
                        "description": "SubscriptionID the task pertains to",
                        "required": false
                    },
                    {
                        "name": "phone",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for the task",
                        "required": false
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "type": "integer",
                        "description": "categoryID of the task values: Appt Status (15), Billing (1), Customer Care (10), Customer Status (13), Feedback (7), Follow Up (5), Office (6), Reminder Reply (9), Sales (11), Scheduling (2), Service (4), SMS Reply (12), Subscription Status (14), Tech Flag (8), Voice Mail (3)",
                        "required": false
                    },
                    {
                        "name": "addedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID who added the task or alert",
                        "required": false
                    },
                    {
                        "name": "assignedTo",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID the task is assigned to",
                        "required": false
                    },
                    {
                        "name": "dueDate",
                        "in": "query",
                        "type": "string",
                        "description": "Date the task is due",
                        "required": false
                    },
                    {
                        "name": "task",
                        "in": "query",
                        "type": "string",
                        "description": "Text description of the task",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "0: Pending, 1: Completed, 2: In Use, 3: Urgent, -1: Deleted",
                        "required": false
                    },
                    {
                        "name": "dateCompleted",
                        "in": "query",
                        "type": "string",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "completedBy",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "completionNotes",
                        "in": "query",
                        "type": "integer",
                        "description": "",
                        "required": false
                    },
                    {
                        "name": "taskID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the task table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/taskUpdateResponse"
                        }
                    }
                }
            }
        },
        "/employeeLocation/search": {
            "post": {
                "summary": "search",
                "operationId": "employeeLocationSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "locationIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key."
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "EmployeeID the location is assigned to"
                    },
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "time",
                        "in": "query",
                        "type": "integer",
                        "description": "time the location check-in took place"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property employeeLocationIDsNoDataExported will specify the items that are not included in the resolved employeeLocation array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search employeeLocation Response returns an array of locationIDs",
                        "schema": {
                            "$ref": "#/definitions/employeeLocationSearchResponse"
                        }
                    }
                }
            }
        },
        "/employeeLocation/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "employeeLocationGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for employeeLocation. Accepts an array of locationIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "locationIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/employeeLocation"
                            }
                        }
                    }
                }
            }
        },
        "/employeeLocation/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "employeeLocationGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get employeeLocation data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/employeeLocation"
                        }
                    }
                }
            }
        },
        "/form/search": {
            "post": {
                "summary": "search",
                "operationId": "formSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "formIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "dateSigned",
                        "in": "query",
                        "type": "string",
                        "description": "The date the form was signed."
                    },
                    {
                        "name": "dateAdded",
                        "in": "query",
                        "type": "string",
                        "description": "The date the form was added."
                    },
                    {
                        "name": "unitID",
                        "in": "query",
                        "type": "integer",
                        "description": "The unitID associated with the form."
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "The employeeID who created the form."
                    },
                    {
                        "name": "documentState",
                        "in": "query",
                        "type": "integer",
                        "description": "State of the document e.g. WIP, COMPLETED"
                    },
                    {
                        "name": "formTemplateID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of the template this form was created from"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property formIDsNoDataExported will specify the items that are not included in the resolved form array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search form Response returns an array of contractIDs",
                        "schema": {
                            "$ref": "#/definitions/formSearchResponse"
                        }
                    }
                }
            }
        },
        "/form/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "formGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for form. Accepts an array of contractIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "contractIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    {
                        "name": "includeDocumentLink",
                        "in": "query",
                        "type": "int",
                        "description": "Send as 1 to retrieve a link to the document on AWS with a 15 day TTL.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/form"
                            }
                        }
                    }
                }
            }
        },
        "/form/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "formGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get form data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [
                    {
                        "name": "includeDocumentLink",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to retrieve a link to the document on AWS with a 15 day TTL.",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/form"
                        }
                    }
                }
            }
        },
        "/product/search": {
            "post": {
                "summary": "search",
                "operationId": "productSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "productID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary Key"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "OfficeID of the product; -1 is available to all offices."
                    },
                    {
                        "name": "code",
                        "in": "query",
                        "type": "string",
                        "description": "Product Code (up to 25 characters)"
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "type": "string",
                        "description": "Product category"
                    },
                    {
                        "name": "visible",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether or not the product is visible in lists when creating a new addon"
                    },
                    {
                        "name": "salesVisible",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether or not the product is visible on SalesRoutes"
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Description of the product"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property productIDsNoDataExported will specify the items that are not included in the resolved product array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search product Response returns an array of productIDs",
                        "schema": {
                            "$ref": "#/definitions/productSearchResponse"
                        }
                    }
                }
            }
        },
        "/product/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "productGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for product. Accepts an array of productIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "productIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/product"
                            }
                        }
                    }
                }
            }
        },
        "/product/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "productGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get product data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/product"
                        }
                    }
                }
            }
        },
        "/product/create": {
            "post": {
                "summary": "create",
                "operationId": "productCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": "OfficeID of the product; -1 is available to all offices.",
                        "required": false
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Description of the product",
                        "required": true
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Cost of each product",
                        "required": true
                    },
                    {
                        "name": "taxable",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 if the product is taxable",
                        "required": true
                    },
                    {
                        "name": "code",
                        "in": "query",
                        "type": "string",
                        "description": "Product Code (up to 25 characters)",
                        "required": true
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "type": "string",
                        "description": "Product category",
                        "required": true
                    },
                    {
                        "name": "visible",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether or not the product is visible in lists when creating a new addon",
                        "required": true
                    },
                    {
                        "name": "salesVisible",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether or not the product is visible on SalesRoutes",
                        "required": true
                    },
                    {
                        "name": "recurring",
                        "in": "query",
                        "type": "integer",
                        "description": "0 means it shows up only on the service it was added to, 1 means it shows up on every service ",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "genericFlagID for the newly created flag.",
                        "schema": {
                            "$ref": "#/definitions/productCreateResponse"
                        }
                    }
                }
            }
        },
        "/product/update": {
            "post": {
                "summary": "update",
                "operationId": "productUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "",
                "parameters": [
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": "OfficeID of the product; -1 is available to all offices.",
                        "required": false
                    },
                    {
                        "name": "description",
                        "in": "query",
                        "type": "string",
                        "description": "Description of the product",
                        "required": false
                    },
                    {
                        "name": "amount",
                        "in": "query",
                        "type": "number",
                        "description": "Cost of each product",
                        "required": false
                    },
                    {
                        "name": "taxable",
                        "in": "query",
                        "type": "integer",
                        "description": "Set as 1 if the product is taxable",
                        "required": false
                    },
                    {
                        "name": "code",
                        "in": "query",
                        "type": "string",
                        "description": "Product Code (up to 25 characters)",
                        "required": false
                    },
                    {
                        "name": "category",
                        "in": "query",
                        "type": "string",
                        "description": "Product category",
                        "required": false
                    },
                    {
                        "name": "visible",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether or not the product is visible in lists when creating a new addon",
                        "required": false
                    },
                    {
                        "name": "salesVisible",
                        "in": "query",
                        "type": "integer",
                        "description": "Whether or not the product is visible on SalesRoutes",
                        "required": false
                    },
                    {
                        "name": "recurring",
                        "in": "query",
                        "type": "integer",
                        "description": "0 means it shows up only on the service it was added to, 1 means it shows up on every service ",
                        "required": false
                    },
                    {
                        "name": "productID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the notes table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "productID of the changed item",
                        "schema": {
                            "$ref": "#/definitions/productUpdateResponse"
                        }
                    }
                }
            }
        },
        "/appointmentReminder/search": {
            "post": {
                "summary": "search",
                "operationId": "appointmentReminderSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "reminderID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary Key"
                    },
                    {
                        "name": "reminderIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Alias of reminderID"
                    },
                    {
                        "name": "appointmentReminderIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Alias of reminderID"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Office the reminder belongs to"
                    },
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "appointmentID the reminder pertains to"
                    },
                    {
                        "name": "text",
                        "in": "query",
                        "type": "string",
                        "description": "Text of the reminder"
                    },
                    {
                        "name": "dateSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time the reminder was sent"
                    },
                    {
                        "name": "emailSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time email was sent"
                    },
                    {
                        "name": "voiceSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time voice message was sent"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "-1 = don't send, 0 = not sent, 1 = sent, 9 = confirmed"
                    },
                    {
                        "name": "response",
                        "in": "query",
                        "type": "string",
                        "description": "Response text received"
                    },
                    {
                        "name": "responseTime",
                        "in": "query",
                        "type": "string",
                        "description": "Time response was received"
                    },
                    {
                        "name": "sendTo",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for SMS"
                    },
                    {
                        "name": "emailAddress",
                        "in": "query",
                        "type": "string",
                        "description": "Email address the reminder was sent to"
                    },
                    {
                        "name": "voiceNumber",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for voice"
                    },
                    {
                        "name": "dateUpdated",
                        "in": "query",
                        "type": "string",
                        "description": "Date that this appointmentReminder was last updated"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property appointmentReminderIDsNoDataExported will specify the items that are not included in the resolved appointmentReminder array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search appointmentReminder Response returns an array of reminderIDs",
                        "schema": {
                            "$ref": "#/definitions/appointmentReminderSearchResponse"
                        }
                    }
                }
            }
        },
        "/appointmentReminder/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "appointmentReminderGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for appointmentReminder. Accepts an array of reminderIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "reminderIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/appointmentReminder"
                            }
                        }
                    }
                }
            }
        },
        "/appointmentReminder/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "appointmentReminderGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get appointmentReminder data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/appointmentReminder"
                        }
                    }
                }
            }
        },
        "/appointmentReminder/create": {
            "post": {
                "summary": "create",
                "operationId": "appointmentReminderCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "create a customer",
                "parameters": [
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "appointmentID the reminder pertains to",
                        "required": true
                    },
                    {
                        "name": "text",
                        "in": "query",
                        "type": "string",
                        "description": "Text of the reminder",
                        "required": true
                    },
                    {
                        "name": "dateSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time the reminder was sent",
                        "required": true
                    },
                    {
                        "name": "emailSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time email was sent",
                        "required": true
                    },
                    {
                        "name": "voiceSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time voice message was sent",
                        "required": false,
                        "default": "0000-00-00 00:00:00"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "-1 = don't send reminder, 0 = not sent(not allowed), 1 = sent, 6 = confirmed by office, 9 = confirmed via SMS",
                        "required": true
                    },
                    {
                        "name": "response",
                        "in": "query",
                        "type": "string",
                        "description": "Response text received",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "responseTime",
                        "in": "query",
                        "type": "string",
                        "description": "Time response was received",
                        "required": false,
                        "default": "0000-00-00 00:00:00"
                    },
                    {
                        "name": "sendTo",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for SMS",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "emailAddress",
                        "in": "query",
                        "type": "string",
                        "description": "Email address the reminder was sent to",
                        "required": false,
                        "default": ""
                    },
                    {
                        "name": "voiceNumber",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for voice",
                        "required": false,
                        "default": ""
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "reminderID",
                        "schema": {
                            "$ref": "#/definitions/appointmentReminderCreateResponse"
                        }
                    }
                }
            }
        },
        "/appointmentReminder/update": {
            "post": {
                "summary": "update",
                "operationId": "appointmentReminderUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update appointmentReminder details",
                "parameters": [
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": "appointmentID the reminder pertains to",
                        "required": false
                    },
                    {
                        "name": "text",
                        "in": "query",
                        "type": "string",
                        "description": "Text of the reminder",
                        "required": false
                    },
                    {
                        "name": "dateSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time the reminder was sent",
                        "required": false
                    },
                    {
                        "name": "emailSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time email was sent",
                        "required": false
                    },
                    {
                        "name": "voiceSent",
                        "in": "query",
                        "type": "string",
                        "description": "Time voice message was sent",
                        "required": false
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "-1 = don't send reminder, 0 = not sent(not allowed), 1 = sent, 6 = confirmed by office, 9 = confirmed via SMS",
                        "required": false
                    },
                    {
                        "name": "response",
                        "in": "query",
                        "type": "string",
                        "description": "Response text received",
                        "required": false
                    },
                    {
                        "name": "responseTime",
                        "in": "query",
                        "type": "string",
                        "description": "Time response was received",
                        "required": false
                    },
                    {
                        "name": "sendTo",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for SMS",
                        "required": false
                    },
                    {
                        "name": "emailAddress",
                        "in": "query",
                        "type": "string",
                        "description": "Email address the reminder was sent to",
                        "required": false
                    },
                    {
                        "name": "voiceNumber",
                        "in": "query",
                        "type": "string",
                        "description": "Phone number for voice",
                        "required": false
                    },
                    {
                        "name": "reminderID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the appointmentReminder table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/appointmentReminderUpdateResponse"
                        }
                    }
                }
            }
        },
        "/paymentProfile/search": {
            "post": {
                "summary": "search",
                "operationId": "paymentProfileSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "paymentProfileIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key for the paymentProfile"
                    },
                    {
                        "name": "customerIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "customer that the paymentProfile belongs to."
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "OfficeID of the customer that the paymentProfile belongs to."
                    },
                    {
                        "name": "dateCreated",
                        "in": "query",
                        "type": "string",
                        "description": "date the payment profile was created"
                    },
                    {
                        "name": "status",
                        "in": "query",
                        "type": "integer",
                        "description": "-1 = soft deleted, 0 = empty, 1 = valid, 2 = invalid, 3 = expired, 4 = last transaction failed"
                    },
                    {
                        "name": "billingState",
                        "in": "query",
                        "type": "string",
                        "description": "State associated with the CC/Bank account"
                    },
                    {
                        "name": "billingZip",
                        "in": "query",
                        "type": "string",
                        "description": "Zip associated with the CC/Bank account"
                    },
                    {
                        "name": "paymentMethod",
                        "in": "query",
                        "type": "integer",
                        "description": "1=cc, 2 = ach"
                    },
                    {
                        "name": "gateway",
                        "in": "query",
                        "type": "string",
                        "description": "ACH or CC gateway E.G. authorize, nmi, brain, element"
                    },
                    {
                        "name": "cardType",
                        "in": "query",
                        "type": "string",
                        "description": "Credit card only e.g. Visa, Mastercard"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property paymentProfileIDsNoDataExported will specify the items that are not included in the resolved paymentProfile array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search paymentProfile Response returns an array of paymentProfileIDs",
                        "schema": {
                            "$ref": "#/definitions/paymentProfileSearchResponse"
                        }
                    }
                }
            }
        },
        "/paymentProfile/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "paymentProfileGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for paymentProfile. Accepts an array of paymentProfileIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "paymentProfileIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/paymentProfile"
                            }
                        }
                    }
                }
            }
        },
        "/paymentProfile/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "paymentProfileGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get paymentProfile data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/paymentProfile"
                        }
                    }
                }
            }
        },
        "/paymentProfile/create": {
            "post": {
                "summary": "create",
                "operationId": "paymentProfileCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Create a payment profile using a CreditCardToken and CreditCardTokenID from braintree/element. This will become the active payment profile for cc/ach.",
                "parameters": [
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign Key to customers table",
                        "required": true
                    },
                    {
                        "name": "billingName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing name associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingAddress1",
                        "in": "query",
                        "type": "string",
                        "description": "Billing address associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingAddress2",
                        "in": "query",
                        "type": "string",
                        "description": "Billing address associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingCity",
                        "in": "query",
                        "type": "string",
                        "description": "Billing city associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingState",
                        "in": "query",
                        "type": "string",
                        "description": "Billing state associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingZip",
                        "in": "query",
                        "type": "integer",
                        "description": "Billing zip code associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingCountryID",
                        "in": "query",
                        "type": "string",
                        "description": "Billing country code associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "paymentMethod",
                        "in": "query",
                        "type": "integer",
                        "description": "1=cc, 2 = ach",
                        "required": true
                    },
                    {
                        "name": "gateway",
                        "in": "query",
                        "type": "string",
                        "description": "ACH or CC gateway E.G. authorize, nmi, brain, element",
                        "required": false
                    },
                    {
                        "name": "bankName",
                        "in": "query",
                        "type": "string",
                        "description": "ACH only",
                        "required": false
                    },
                    {
                        "name": "accountNumber",
                        "in": "query",
                        "type": "string",
                        "description": "ACH only - check account number",
                        "required": false
                    },
                    {
                        "name": "routingNumber",
                        "in": "query",
                        "type": "string",
                        "description": "ACH only - routing number",
                        "required": false
                    },
                    {
                        "name": "checkType",
                        "in": "query",
                        "type": "integer",
                        "description": "ACH only - 0=checking, 1=savings",
                        "required": false
                    },
                    {
                        "name": "accountType",
                        "in": "query",
                        "type": "integer",
                        "description": "ACH only -  0=personal, 1=business",
                        "required": false
                    },
                    {
                        "name": "merchantID",
                        "in": "query",
                        "type": "string",
                        "description": "Required for braintree and element. Not required for nmi",
                        "required": false
                    },
                    {
                        "name": "merchantToken",
                        "in": "query",
                        "type": "string",
                        "description": "Required for braintree and nmi. Not required for element",
                        "required": false
                    },
                    {
                        "name": "autopay",
                        "in": "query",
                        "type": "integer",
                        "description": "Send as 1 to set the owning customer to autopay using this profile",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "paymentProfileID",
                        "schema": {
                            "$ref": "#/definitions/paymentProfileCreateResponse"
                        }
                    }
                }
            }
        },
        "/paymentProfile/update": {
            "post": {
                "summary": "update",
                "operationId": "paymentProfileUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Create a payment profile using a CreditCardToken and CreditCardTokenID from braintree/element. This will become the active payment profile for cc/ach.",
                "parameters": [
                    {
                        "name": "paymentProfileID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign Key to paymentProfile table",
                        "required": true
                    },
                    {
                        "name": "billingFName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing name associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingLName",
                        "in": "query",
                        "type": "string",
                        "description": "Billing name associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingAddress1",
                        "in": "query",
                        "type": "string",
                        "description": "Billing address associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingAddress2",
                        "in": "query",
                        "type": "string",
                        "description": "Billing address associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingCity",
                        "in": "query",
                        "type": "string",
                        "description": "Billing city associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingState",
                        "in": "query",
                        "type": "string",
                        "description": "Billing state associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingZip",
                        "in": "query",
                        "type": "integer",
                        "description": "Billing zip code associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "billingCountryID",
                        "in": "query",
                        "type": "string",
                        "description": "Billing country code associated with payment profile",
                        "required": false
                    },
                    {
                        "name": "expMonth",
                        "in": "query",
                        "type": "integer",
                        "description": "2 digit month",
                        "required": false
                    },
                    {
                        "name": "expYear",
                        "in": "query",
                        "type": "integer",
                        "description": "2 digit year (e.g. 21 for 2021)",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "paymentProfileID",
                        "schema": {
                            "$ref": "#/definitions/paymentProfileUpdateResponse"
                        }
                    }
                }
            }
        },
        "/paymentProfile/delete": {
            "post": {
                "summary": "delete",
                "operationId": "paymentProfileDelete",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Delete a payment profile.",
                "parameters": [
                    {
                        "name": "paymentProfileID",
                        "in": "query",
                        "type": "integer",
                        "description": "Foreign Key to paymentProfile table",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "paymentProfileID",
                        "schema": {
                            "$ref": "#/definitions/paymentProfileDeleteResponse"
                        }
                    }
                }
            }
        },
        "/office/search": {
            "post": {
                "summary": "search",
                "operationId": "officeSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary Key"
                    },
                    {
                        "name": "companyID",
                        "in": "query",
                        "type": "integer",
                        "description": "companyID of the office"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property officeIDsNoDataExported will specify the items that are not included in the resolved office array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search office Response returns an array of officeIDs",
                        "schema": {
                            "$ref": "#/definitions/officeSearchResponse"
                        }
                    }
                }
            }
        },
        "/office/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "officeGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for office. Accepts an array of officeIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/office"
                            }
                        }
                    }
                }
            }
        },
        "/office/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "officeGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get office data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/office"
                        }
                    }
                }
            }
        },
        "/door/search": {
            "post": {
                "summary": "search",
                "operationId": "doorSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "doorID",
                        "in": "query",
                        "type": "integer",
                        "description": "doorID"
                    },
                    {
                        "name": "lat",
                        "in": "query",
                        "type": "number",
                        "description": "lat"
                    },
                    {
                        "name": "lng",
                        "in": "query",
                        "type": "number",
                        "description": "lng"
                    },
                    {
                        "name": "employeeID",
                        "in": "query",
                        "type": "integer",
                        "description": "employeeID"
                    },
                    {
                        "name": "searchDistance",
                        "in": "query",
                        "type": "integer",
                        "description": "Size in miles of the search grid when using centerLat, centerLng filters."
                    },
                    {
                        "name": "centerLat",
                        "in": "query",
                        "type": "number",
                        "description": "Latitude of search radius center. Default distance 50 miles; override with searchDistance parameter. centerLng must also be set to use this filter"
                    },
                    {
                        "name": "centerLng",
                        "in": "query",
                        "type": "number",
                        "description": "Longitude of search radius center. Default distance 50 miles; override with searchDistance parameter. centerLat must also be set to use this filter"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property doorIDsNoDataExported will specify the items that are not included in the resolved door array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search door Response returns an array of doorIDs",
                        "schema": {
                            "$ref": "#/definitions/doorSearchResponse"
                        }
                    }
                }
            }
        },
        "/door/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "doorGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for door. Accepts an array of doorIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "doorIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/door"
                            }
                        }
                    }
                }
            }
        },
        "/door/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "doorGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get door data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/door"
                        }
                    }
                }
            }
        },
        "/knock/search": {
            "post": {
                "summary": "search",
                "operationId": "knockSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "knockID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary Key"
                    },
                    {
                        "name": "doorID",
                        "in": "query",
                        "type": "integer",
                        "description": "Door the knock is associated with"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property knockIDsNoDataExported will specify the items that are not included in the resolved knock array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search knock Response returns an array of knockIDs",
                        "schema": {
                            "$ref": "#/definitions/knockSearchResponse"
                        }
                    }
                }
            }
        },
        "/knock/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "knockGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for knock. Accepts an array of knockIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "knockIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/knock"
                            }
                        }
                    }
                }
            }
        },
        "/knock/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "knockGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get knock data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/knock"
                        }
                    }
                }
            }
        },
        "/chemical/search": {
            "post": {
                "summary": "search",
                "operationId": "chemicalSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "chemicalIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Office ID region belongs to"
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "type": "string",
                        "description": "Name of the chemical"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property chemicalIDsNoDataExported will specify the items that are not included in the resolved chemical array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search chemical Response returns an array of chemicalIDs",
                        "schema": {
                            "$ref": "#/definitions/chemicalSearchResponse"
                        }
                    }
                }
            }
        },
        "/chemical/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "chemicalGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for chemical. Accepts an array of chemicalIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "chemicalIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/chemical"
                            }
                        }
                    }
                }
            }
        },
        "/chemical/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "chemicalGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get chemical data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/chemical"
                        }
                    }
                }
            }
        },
        "/chemicalUse/search": {
            "post": {
                "summary": "search",
                "operationId": "chemicalUseSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "chemicalUseIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key"
                    },
                    {
                        "name": "chemicalUseID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key alias"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Office ID region belongs to"
                    },
                    {
                        "name": "chemicalID",
                        "in": "query",
                        "type": "integer",
                        "description": "ID of the chemical Used"
                    },
                    {
                        "name": "appointmentID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "customerID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "dateCreated",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "createdBy",
                        "in": "query",
                        "type": "string",
                        "description": ""
                    },
                    {
                        "name": "serviceID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property chemicalUseIDsNoDataExported will specify the items that are not included in the resolved chemicalUse array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search chemicalUse Response returns an array of chemicalUseIDs",
                        "schema": {
                            "$ref": "#/definitions/chemicalUseSearchResponse"
                        }
                    }
                }
            }
        },
        "/chemicalUse/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "chemicalUseGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for chemicalUse. Accepts an array of chemicalUseIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "chemicalUseIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/chemicalUse"
                            }
                        }
                    }
                }
            }
        },
        "/chemicalUse/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "chemicalUseGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get chemicalUse data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/chemicalUse"
                        }
                    }
                }
            }
        },
        "/group/search": {
            "post": {
                "summary": "search",
                "operationId": "groupSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "groupIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key"
                    },
                    {
                        "name": "groupID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key alias"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Office ID region belongs to"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property groupIDsNoDataExported will specify the items that are not included in the resolved group array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search group Response returns an array of groupIDs",
                        "schema": {
                            "$ref": "#/definitions/groupSearchResponse"
                        }
                    }
                }
            }
        },
        "/group/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "groupGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for group. Accepts an array of groupIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "groupIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/group"
                            }
                        }
                    }
                }
            }
        },
        "/group/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "groupGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get group data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/group"
                        }
                    }
                }
            }
        },
        "/group/create": {
            "post": {
                "summary": "create",
                "operationId": "groupCreate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "create a group",
                "parameters": [
                    {
                        "name": "date",
                        "in": "query",
                        "type": "string",
                        "description": "Date to create for",
                        "required": false
                    },
                    {
                        "name": "templateID",
                        "in": "query",
                        "type": "integer",
                        "description": "templateID from office software",
                        "required": false
                    },
                    {
                        "name": "title",
                        "in": "query",
                        "type": "string",
                        "description": "Title string (30 character limit)",
                        "required": false
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "subscriptionID",
                        "schema": {
                            "$ref": "#/definitions/groupCreateResponse"
                        }
                    }
                }
            }
        },
        "/group/update": {
            "post": {
                "summary": "update",
                "operationId": "groupUpdate",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Update group details",
                "parameters": [
                    {
                        "name": "title",
                        "in": "query",
                        "type": "string",
                        "description": "Title string (30 character limit)",
                        "required": false
                    },
                    {
                        "name": "groupID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key to the group table.",
                        "required": true
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Returns the ID of the updated entity.",
                        "schema": {
                            "$ref": "#/definitions/groupUpdateResponse"
                        }
                    }
                }
            }
        },
        "/insect/search": {
            "post": {
                "summary": "search",
                "operationId": "insectSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "insectIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key"
                    },
                    {
                        "name": "insectID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key alias"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "OfficeID insect belongs to"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property insectIDsNoDataExported will specify the items that are not included in the resolved insect array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search insect Response returns an array of insectIDs",
                        "schema": {
                            "$ref": "#/definitions/insectSearchResponse"
                        }
                    }
                }
            }
        },
        "/insect/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "insectGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for insect. Accepts an array of insectIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "insectIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/insect"
                            }
                        }
                    }
                }
            }
        },
        "/insect/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "insectGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get insect data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/insect"
                        }
                    }
                }
            }
        },
        "/location/search": {
            "post": {
                "summary": "search",
                "operationId": "locationSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "locationIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key"
                    },
                    {
                        "name": "locationID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key alias"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "OfficeID insect belongs to"
                    },
                    {
                        "name": "visible",
                        "in": "query",
                        "type": "integer",
                        "description": "visibility of the location"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property locationIDsNoDataExported will specify the items that are not included in the resolved location array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search location Response returns an array of locationIDs",
                        "schema": {
                            "$ref": "#/definitions/locationSearchResponse"
                        }
                    }
                }
            }
        },
        "/location/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "locationGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for location. Accepts an array of locationIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "locationIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/location"
                            }
                        }
                    }
                }
            }
        },
        "/location/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "locationGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get location data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/location"
                        }
                    }
                }
            }
        },
        "/applicationMethod/search": {
            "post": {
                "summary": "search",
                "operationId": "applicationMethodSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "methodIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key"
                    },
                    {
                        "name": "methodID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key alias"
                    },
                    {
                        "name": "applicationMethodID",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key alias"
                    },
                    {
                        "name": "applicationMethodIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "Primary key alias"
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": "OfficeID insect belongs to"
                    },
                    {
                        "name": "visible",
                        "in": "query",
                        "type": "integer",
                        "description": "visibility of the method"
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property applicationMethodIDsNoDataExported will specify the items that are not included in the resolved applicationMethod array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search applicationMethod Response returns an array of applciationMethodIDs",
                        "schema": {
                            "$ref": "#/definitions/applicationMethodSearchResponse"
                        }
                    }
                }
            }
        },
        "/applicationMethod/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "applicationMethodGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for applicationMethod. Accepts an array of applciationMethodIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "applciationMethodIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/applicationMethod"
                            }
                        }
                    }
                }
            }
        },
        "/applicationMethod/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "applicationMethodGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get applicationMethod data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/applicationMethod"
                        }
                    }
                }
            }
        },
        "/glAccount/search": {
            "post": {
                "summary": "search",
                "operationId": "glAccountSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "glAccountIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "glAccountID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "glNumber",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property glAccountIDsNoDataExported will specify the items that are not included in the resolved glAccount array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search glAccount Response returns an array of glAccountIDs",
                        "schema": {
                            "$ref": "#/definitions/glAccountSearchResponse"
                        }
                    }
                }
            }
        },
        "/glAccount/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "glAccountGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for glAccount. Accepts an array of glAccountIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "glAccountIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/glAccount"
                            }
                        }
                    }
                }
            }
        },
        "/glAccount/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "glAccountGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get glAccount data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/glAccount"
                        }
                    }
                }
            }
        },
        "/cancellationReason/search": {
            "post": {
                "summary": "search",
                "operationId": "cancellationReasonSearch",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Provide a set of parameters which will return a list of ids. There is no limit to the number of IDs this will return. You can then supply these ids to the `get` endpoint in order to retrieve bulk data. Every parameter available supports a simple value OR a powerful query object that gives you access to all basic comparators. \n\nExample: dateAdded={\"operator\":\">\",\"value\":\"2016-01-01\"}\n\nExample: dateAdded={\"operator\\\":\\\"BETWEEN\\\",\\\"value\\\":[\\\"2016-05-12\\\",\\\"2016-05-13\\\"]}\n\nAvailable operators: >, <, >=, <=, =, !=, IN, BETWEEN, LIKE, STARTSWITH, ENDSWITH, CONTAINS.\n\nEach of the search endpoints allows for an optional parameter 'includeData'. When sent, the API will additionally send the resolved objects for the first 1000 IDs. Keep in mind when using 'includeData' that if there are more than 1000 items an additional property '{entity}IDsNoDataExported' will specify the items that are not included in the resolved data array.",
                "parameters": [
                    {
                        "name": "reasonIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "reasonID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeIDs",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "officeID",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "visible",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "systemReserved",
                        "in": "query",
                        "type": "integer",
                        "description": ""
                    },
                    {
                        "name": "includeData",
                        "in": "query",
                        "type": "integer",
                        "description": "{0,1} Sends the resolved objects for the first 1000 IDs. If there are more than 1000 items an additional property cancellationReasonIDsNoDataExported will specify the items that are not included in the resolved cancellationReason array."
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "Search cancellationReason Response returns an array of reasonIDs",
                        "schema": {
                            "$ref": "#/definitions/cancellationReasonSearchResponse"
                        }
                    }
                }
            }
        },
        "/cancellationReason/get": {
            "post": {
                "summary": "getBulk",
                "operationId": "cancellationReasonGetBulk",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get Bulk data for cancellationReason. Accepts an array of reasonIDs. Returns a max of 1000 records.",
                "parameters": [
                    {
                        "name": "reasonIDs",
                        "in": "query",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                ],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetBulk Response",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/cancellationReason"
                            }
                        }
                    }
                }
            }
        },
        "/cancellationReason/[id]": {
            "post": {
                "summary": "getSingle",
                "operationId": "cancellationReasonGetID",
                "consumes": [
                    "application/x-www-form-urlencoded"
                ],
                "produces": [
                    "text/html"
                ],
                "description": "Get cancellationReason data for single ID -- please provide a specific record ID in the URL structure.",
                "parameters": [],
                "security": [
                    {
                        "authenticationToken": []
                    },
                    {
                        "authenticationKey": []
                    }
                ],
                "responses": {
                    "default": {
                        "description": "GetID Response",
                        "schema": {
                            "$ref": "#/definitions/cancellationReason"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "subscription": {
            "type": "object",
            "properties": {
                "subscriptionID": {
                    "description": "Unique ID",
                    "type": "integer"
                },
                "customerID": {
                    "description": "Customer ID which this subscription belongs to",
                    "type": "integer"
                },
                "billToAccountID": {
                    "description": "Billing Account which this subscription belongs to",
                    "type": "integer"
                },
                "officeID": {
                    "description": "Office ID which this subscription belongs to",
                    "type": "integer"
                },
                "dateAdded": {
                    "description": "Date this subscription was added / created. Sold date.",
                    "type": "string"
                },
                "contractAdded": {
                    "description": "Date the last contract was added / created.",
                    "type": "string"
                },
                "active": {
                    "description": "0: frozen, 1: active and being placed in the job pool.",
                    "type": "integer"
                },
                "activeText": {
                    "description": "Friendly text version of active",
                    "type": "integer"
                },
                "initialQuote": {
                    "description": "The retail quoted price for the initial service on this subscription.",
                    "type": "number"
                },
                "initialDiscount": {
                    "description": "The discount to be applied to the initial service",
                    "type": "number"
                },
                "initialServiceTotal": {
                    "description": "The net amount of initialQuote-initialDiscount. DOES NOT INCLUDE add-ons",
                    "type": "number"
                },
                "yifDiscount": {
                    "description": "The discount provided if paying for a year in advance",
                    "type": "number"
                },
                "recurringCharge": {
                    "description": "A shortcut for the subtotal of the recurring ticket",
                    "type": "number"
                },
                "contractValue": {
                    "description": "Calculated as the initial total + the number of recurring services*recurringCharge. There are some tweaks available for different companies / preferences, particularly when dealing with recurring billing.",
                    "type": "number"
                },
                "billingFrequency": {
                    "description": "How often this subscription gets their invoice generated -- can be seperate from when their service takes place. 0 / -1 represents getting billed after each service.",
                    "type": "integer"
                },
                "frequency": {
                    "description": "The frequency that the services get scheduled. -1 represents One-Time, 0 represents 'as needed'. Greater than 0 represents the frequency in days. If it is divisible by 30, it is converted to months -- so 90 would represent 3 months and not necessarily 90 days.",
                    "type": "integer"
                },
                "followupService": {
                    "description": "How many days after the initial service to schedule the first recurring service.",
                    "type": "integer"
                },
                "agreementLength": {
                    "description": "Agreement Length",
                    "type": "number"
                },
                "nextService": {
                    "description": "When the next service is due.",
                    "type": "string"
                },
                "lastCompleted": {
                    "description": "When the last service was completed",
                    "type": "string"
                },
                "serviceID": {
                    "description": "The service type ID for the regular recurring services",
                    "type": "integer"
                },
                "serviceType": {
                    "description": "Friendly description of the serviceID",
                    "type": "string"
                },
                "soldBy": {
                    "description": "The employee ID who gets credit for this sale. Defaults to the user who added the subscription",
                    "type": "integer"
                },
                "soldBy2": {
                    "description": "Additional employeeID that gets credit for this sale",
                    "type": "integer"
                },
                "soldBy3": {
                    "description": "Additional employeeID that gets credit for this sale",
                    "type": "integer"
                },
                "preferredTech": {
                    "description": "preferred tech ID",
                    "type": "integer"
                },
                "initialAppointmentID": {
                    "description": "The initial service appointment ID",
                    "type": "integer"
                },
                "initialStatus": {
                    "description": "A shortcut for the status of the initial appointment",
                    "type": "integer"
                },
                "initialStatusText": {
                    "description": "Friendly text version of the initialStatus",
                    "type": "string"
                },
                "dateCancelled": {
                    "description": "The date the subscription was cancelled if any.",
                    "type": "string"
                },
                "dateUpdated": {
                    "description": "The date the subscription was last updated.",
                    "type": "string"
                },
                "cxlNotes": {
                    "description": "The notes associated with cancelling this appointment. Group_Concat'ed in case of multiple cancellations",
                    "type": "string"
                },
                "subscriptionLink": {
                    "description": "Subscription Link",
                    "type": "string"
                },
                "appointmentIDs": {
                    "description": "Every appointment attached to this subscription",
                    "type": "integer"
                },
                "completedAppointmentIDs": {
                    "description": "Every completed appointment attached to this subscription",
                    "type": "integer"
                },
                "initialAppointment": {
                    "description": "The initial appointment object if includeInitialAppointments = true",
                    "type": "object",
                    "items": {
                        "$ref": "#/definitions/appointment"
                    }
                },
                "recurringTicket": {
                    "description": "The recurring ticket template associated with this subscription",
                    "type": "object",
                    "items": {
                        "$ref": "#/definitions/ticket"
                    }
                },
                "addOns": {
                    "description": "An array of Add-On objects associated with the INITIAL appointment.",
                    "type": "string"
                },
                "leadID": {
                    "description": "Primary key for lead",
                    "type": "integer"
                },
                "leadDateAdded": {
                    "description": "Time that this lead was created",
                    "type": "string"
                },
                "leadUpdated": {
                    "description": "Time that this lead was last updated",
                    "type": "string"
                },
                "leadAddedBy": {
                    "description": "employeeID that created this lead",
                    "type": "integer"
                },
                "leadSourceID": {
                    "description": "Lead Source ID",
                    "type": "integer"
                },
                "leadSource": {
                    "description": "Lead Source Description",
                    "type": "string"
                },
                "leadStatus": {
                    "description": "Lead Status",
                    "type": "integer"
                },
                "leadStageID": {
                    "description": "Lead Stage ID",
                    "type": "integer"
                },
                "leadStage": {
                    "description": "Lead Stage Description",
                    "type": "string"
                },
                "leadAssignedTo": {
                    "description": "EmployeeID to whom the lead is assigned",
                    "type": "integer"
                },
                "leadDateAssigned": {
                    "description": "Time the lead was assigned",
                    "type": "string"
                },
                "leadValue": {
                    "description": "Value of the lead",
                    "type": "number"
                },
                "leadDateClosed": {
                    "description": "Time the lead was closed",
                    "type": "string"
                },
                "leadLostReason": {
                    "description": "Lead Lost Reason",
                    "type": "string"
                },
                "sourceID": {
                    "description": "Subscription Source ID",
                    "type": "integer"
                },
                "source": {
                    "description": "Subscription Source Description",
                    "type": "string"
                },
                "annualRecurringServices": {
                    "description": "Services per year without counting initial",
                    "type": "integer"
                },
                "unitIDs": {
                    "description": "An array of unit IDs available for this subscription (for multi unit customers) - defaults to all unless specific units have been selected",
                    "type": "integer"
                },
                "regionID": {
                    "description": "RegionID of the subscription",
                    "type": "integer"
                },
                "initialInvoice": {
                    "description": "When the initial invoice should get generated. INITIAL_COMPLETION = when the initial service is completed. SIGNED_AGREEMENT = when the agreement is signed. INITIAL_BILLING_DATE = on a specified billing date.",
                    "type": "string"
                },
                "initialBillingDate": {
                    "description": "The date to generate initial invoice when initialInvoice = INITIAL_BILLING_DATE",
                    "type": "string"
                },
                "renewalFrequency": {
                    "description": "How often a subscription is due for renewal.",
                    "type": "integer"
                },
                "renewalDate": {
                    "description": "Next renewal date",
                    "type": "string"
                },
                "customDate": {
                    "description": "custom next appointment date",
                    "type": "string"
                },
                "sentriconConnected": {
                    "description": "Set as 1 if the subscription is connected to sentricon",
                    "type": "integer"
                },
                "sentriconSiteID": {
                    "description": "Sentricon Site ID or null if not connected to Sentricon",
                    "type": "string"
                },
                "seasonalStart": {
                    "description": "Date the season starts or 0000-00-00 if it is not a seasonal subscription",
                    "type": "string"
                },
                "seasonalEnd": {
                    "description": "Date the season ends or 0000-00-00 if it is not a seasonal subscription",
                    "type": "string"
                },
                "nextBillingDate": {
                    "description": "Next billing date for the subscription",
                    "type": "string"
                },
                "maxMonthlyCharge": {
                    "description": "Max monthly charge for the subscription",
                    "type": "number"
                },
                "expirationDate": {
                    "description": "Expiration Date for the subscription.",
                    "type": "string"
                },
                "lastAppointment": {
                    "description": "Last completed appointment associated with the subscription",
                    "type": "string"
                },
                "duration": {
                    "description": "Default duration of services in minutes",
                    "type": "string"
                },
                "preferredDays": {
                    "description": "Empty String no preference, 0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday",
                    "type": "integer"
                },
                "preferredStart": {
                    "description": "Preferred appointment start time bound",
                    "type": "string"
                },
                "preferredEnd": {
                    "description": "Preferred appointment end time bound",
                    "type": "string"
                }
            }
        },
        "subscriptionSearchResponse": {
            "type": "object",
            "description": "The subscriptionIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "subscriptionIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for subscription"
                    }
                }
            }
        },
        "subscriptionCreateResponse": {
            "type": "integer"
        },
        "subscriptionUpdateResponse": {
            "type": "integer"
        },
        "subscriptionGetInitialAddOnsResponse": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "addOnID": {
                        "description": "Primary Key ticketItems.itemID",
                        "type": "integer"
                    },
                    "subscriptionID": {
                        "description": "Foreign key to subscriptions table.",
                        "type": "integer"
                    },
                    "productID": {
                        "description": "Foreign key to products table.",
                        "type": "integer"
                    },
                    "amount": {
                        "description": "Amount to charge for this addon.",
                        "type": "number"
                    },
                    "description": {
                        "description": "Friendly description of the product.",
                        "type": "string"
                    },
                    "quantity": {
                        "description": "The number of items.",
                        "type": "integer"
                    },
                    "taxable": {
                        "description": "1- tax 0 - no tax",
                        "type": "integer"
                    },
                    "creditTo": {
                        "description": "Employee who sold the add-on",
                        "type": "integer"
                    }
                }
            }
        },
        "subscriptionCreateInitialAddOnResponse": {
            "type": "integer"
        },
        "subscriptionUpdateInitialAddOnResponse": {
            "type": "integer"
        },
        "subscriptionDeleteInitialAddOnResponse": {
            "type": "boolean"
        },
        "subscriptionSetInitialAddOnsResponse": {
            "$ref": "#/definitions/subscriptionGetInitialAddOnsResponse"
        },
        "subscriptionUpdateLeadStageResponse": {
            "type": "integer"
        },
        "customer": {
            "type": "object",
            "properties": {
                "customerID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "billToAccountID": {
                    "description": "Billing Account which this subscription belongs to",
                    "type": "integer"
                },
                "officeID": {
                    "description": "The ID of the office this customer belongs to.",
                    "type": "integer"
                },
                "fname": {
                    "description": "The first name of the customer",
                    "type": "string"
                },
                "lname": {
                    "description": "The last name of the customer.",
                    "type": "string"
                },
                "companyName": {
                    "description": "The company name of the customer.",
                    "type": "string"
                },
                "spouse": {
                    "description": "Spouse or alternate contact.",
                    "type": "string"
                },
                "commercialAccount": {
                    "description": "0: Not Commercial, 1: Commercial",
                    "type": "integer"
                },
                "status": {
                    "description": "0: Inactive Customer, 1: Active Customer",
                    "type": "integer"
                },
                "statusText": {
                    "description": "Friendly status",
                    "type": "string"
                },
                "email": {
                    "description": "Email Address of customer",
                    "type": "string"
                },
                "phone1": {
                    "description": "The primary phone number of the customer",
                    "type": "string"
                },
                "ext1": {
                    "description": "Extension for the primary phone of the customer",
                    "type": "string"
                },
                "phone2": {
                    "description": "The secondary phone number of the customer",
                    "type": "string"
                },
                "ext2": {
                    "description": "Extension for the secondary phone of the customer",
                    "type": "string"
                },
                "address": {
                    "description": "Customer Service Address",
                    "type": "string"
                },
                "city": {
                    "description": "Customer Service City",
                    "type": "string"
                },
                "state": {
                    "description": "Customer Service State",
                    "type": "string"
                },
                "zip": {
                    "description": "Customer Service Zip",
                    "type": "string"
                },
                "billingCompanyName": {
                    "description": "Billing Company Name",
                    "type": "string"
                },
                "billingFName": {
                    "description": "Billing First Name",
                    "type": "string"
                },
                "billingLName": {
                    "description": "Billing Last Name",
                    "type": "string"
                },
                "billingCountryID": {
                    "description": "Billing CountryID",
                    "type": "string"
                },
                "billingAddress": {
                    "description": "Billing Address",
                    "type": "string"
                },
                "billingCity": {
                    "description": "Billing City",
                    "type": "string"
                },
                "billingState": {
                    "description": "Billing State",
                    "type": "string"
                },
                "billingZip": {
                    "description": "Billing Zip",
                    "type": "string"
                },
                "billingPhone": {
                    "description": "Billing Phone",
                    "type": "string"
                },
                "billingEmail": {
                    "description": "Billing Email",
                    "type": "string"
                },
                "lat": {
                    "description": "Lattitude",
                    "type": "number"
                },
                "lng": {
                    "description": "Longitude",
                    "type": "number"
                },
                "squareFeet": {
                    "description": "SquareFeet",
                    "type": "integer"
                },
                "addedByID": {
                    "description": "The user ID who created this customer",
                    "type": "integer"
                },
                "dateAdded": {
                    "description": "The date this customer account was created.",
                    "type": "string"
                },
                "dateCancelled": {
                    "description": "The date this customer account was cancelled.",
                    "type": "string"
                },
                "dateUpdated": {
                    "description": "The date this customer was last changed.",
                    "type": "string"
                },
                "sourceID": {
                    "description": "The source ID of how the customer was obtained",
                    "type": "integer"
                },
                "source": {
                    "description": "Friendly version of the source",
                    "type": "string"
                },
                "aPay": {
                    "description": "Whether or not the customer is on auto pay",
                    "type": "string"
                },
                "preferredTechID": {
                    "description": "The user ID of the preferred tech",
                    "type": "integer"
                },
                "paidInFull": {
                    "description": "Whether or not this customer prefers to pay in advance -- flag",
                    "type": "integer"
                },
                "subscriptionIDs": {
                    "description": "An array of subscription ID's attached to this customer",
                    "type": "integer"
                },
                "balance": {
                    "description": "The total outstanding balance of the customer",
                    "type": "number"
                },
                "balanceAge": {
                    "description": "The number of days this customer has owed any invoice.",
                    "type": "integer"
                },
                "responsibleBalance": {
                    "description": "The total outstanding balance of the customer",
                    "type": "number"
                },
                "responsibleBalanceAge": {
                    "description": "The number of days this customer has owed any invoice.",
                    "type": "integer"
                },
                "customerLink": {
                    "description": "Customer Link from the that comes from the integration",
                    "type": "string"
                },
                "masterAccount": {
                    "description": "CustomerID for the master account in the connected property",
                    "type": "string"
                },
                "preferredBillingDate": {
                    "description": "Preferred day for Billing",
                    "type": "integer"
                },
                "paymentHoldDate": {
                    "description": "Payment Hold Date",
                    "type": "string"
                },
                "mostRecentCreditCardLastFour": {
                    "description": "Last 4 digits of most recently used Credit Card",
                    "type": "string"
                },
                "mostRecentCreditCardExpirationDate": {
                    "description": "Expiration date of most recently used Credit Card",
                    "type": "string"
                },
                "appointmentIDs": {
                    "description": "An array of appointmentIDs associated with the customer",
                    "type": "integer"
                },
                "ticketIDs": {
                    "description": "An array of ticketIDs associated with the customer",
                    "type": "integer"
                },
                "paymentIDs": {
                    "description": "An array of paymentIDs associated with the customer",
                    "type": "integer"
                },
                "subscriptions": {
                    "description": "An optional array of all subscription objects. Looks for the includeSubscriptions=true parameter",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/subscription"
                    }
                },
                "unitIDs": {
                    "description": "An array of unitIDs associated with the customer",
                    "type": "integer"
                },
                "regionID": {
                    "description": "RegionID of the customer",
                    "type": "integer"
                },
                "mapCode": {
                    "description": "Mapcode of the customer",
                    "type": "string"
                },
                "mapPage": {
                    "description": "Mappage of the customer",
                    "type": "string"
                },
                "specialScheduling": {
                    "description": "Special Scheduling for the customer",
                    "type": "string"
                },
                "taxRate": {
                    "description": "Tax rate of the customer",
                    "type": "number"
                },
                "smsReminders": {
                    "description": "Customer SMS reminder preference.",
                    "type": "integer"
                },
                "phoneReminders": {
                    "description": "Customer phone reminder preference.",
                    "type": "integer"
                },
                "emailReminders": {
                    "description": "Customer email reminder preference.",
                    "type": "integer"
                },
                "customerSource": {
                    "description": "Customer source.",
                    "type": "string"
                },
                "customerSourceID": {
                    "description": "Customer sourceID.",
                    "type": "string"
                },
                "maxMonthlyCharge": {
                    "description": "Max monthly charge for the customer",
                    "type": "number"
                },
                "county": {
                    "description": "County name",
                    "type": "string"
                },
                "useStructures": {
                    "description": "Set as 1 if the customer is marked as a structure customer (a customer can be residential, multi-unit, or structure)",
                    "type": "integer"
                },
                "isMultiUnit": {
                    "description": "Set as 1 if the customer is marked as a multi-unit customer (a customer can be residential, multi-unit, or structure)",
                    "type": "integer"
                },
                "autoPayPaymentProfileID": {
                    "description": "ID of the autopay paymentProfile attached to the customer",
                    "type": "integer"
                },
                "divisionID": {
                    "description": "divisionID of the customer",
                    "type": "integer"
                }
            }
        },
        "customerSearchResponse": {
            "type": "object",
            "description": "The customerIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "customerIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for customer"
                    }
                }
            }
        },
        "customerCreatePaymentProfileResponse": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "description": "Primary Key for paymentProfiles",
                        "type": "integer"
                    },
                    "customerID": {
                        "description": "Customer associated with the payment profile",
                        "type": "integer"
                    },
                    "profileID": {
                        "description": "Credit card token associated with the payment processor",
                        "type": "string"
                    },
                    "paymentProfileID": {
                        "description": "Credit card token id associated with the payment processor",
                        "type": "string"
                    },
                    "createdBy": {
                        "description": "EmployeeID who added the payment profile",
                        "type": "integer"
                    },
                    "dateCreated": {
                        "description": "Date created",
                        "type": "string"
                    },
                    "billingName": {
                        "description": "Billing name",
                        "type": "string"
                    },
                    "billingAddress1": {
                        "description": "Billing Address",
                        "type": "string"
                    },
                    "billingCity": {
                        "description": "Billing city",
                        "type": "string"
                    },
                    "billingState": {
                        "description": "Billing state",
                        "type": "string"
                    },
                    "billingZip": {
                        "description": "Billing zip",
                        "type": "integer"
                    },
                    "billingCountryID": {
                        "description": "Billing country",
                        "type": "string"
                    },
                    "lastFour": {
                        "description": "Last four digits of card number",
                        "type": "string"
                    },
                    "expMonth": {
                        "description": "Expiration month",
                        "type": "string"
                    },
                    "expYear": {
                        "description": "Expiration year",
                        "type": "string"
                    }
                }
            }
        },
        "customerUpdatePaymentProfileResponse": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "description": "Primary Key for paymentProfiles",
                        "type": "integer"
                    },
                    "customerID": {
                        "description": "Customer associated with the payment profile",
                        "type": "integer"
                    },
                    "profileID": {
                        "description": "Credit card token associated with the payment processor",
                        "type": "string"
                    },
                    "paymentProfileID": {
                        "description": "Credit card token id associated with the payment processor",
                        "type": "string"
                    },
                    "createdBy": {
                        "description": "EmployeeID who added the payment profile",
                        "type": "integer"
                    },
                    "dateCreated": {
                        "description": "Date created",
                        "type": "string"
                    },
                    "billingName": {
                        "description": "Billing name",
                        "type": "string"
                    },
                    "billingAddress1": {
                        "description": "Billing Address",
                        "type": "string"
                    },
                    "billingCity": {
                        "description": "Billing city",
                        "type": "string"
                    },
                    "billingState": {
                        "description": "Billing state",
                        "type": "string"
                    },
                    "billingZip": {
                        "description": "Billing zip",
                        "type": "integer"
                    },
                    "billingCountryID": {
                        "description": "Billing country",
                        "type": "string"
                    },
                    "lastFour": {
                        "description": "Last four digits of card number",
                        "type": "string"
                    },
                    "expMonth": {
                        "description": "Expiration month",
                        "type": "string"
                    },
                    "expYear": {
                        "description": "Expiration year",
                        "type": "string"
                    }
                }
            }
        },
        "customerCreateResponse": {
            "type": "integer"
        },
        "customerUpdateResponse": {
            "type": "integer"
        },
        "customerFlag": {
            "type": "object",
            "properties": {
                "customerID": {
                    "description": "CustomerID",
                    "type": "integer"
                },
                "flag": {
                    "description": "Flag Code",
                    "type": "string"
                },
                "flagValue": {
                    "description": "Flag Value",
                    "type": "string"
                }
            }
        },
        "customerFlagSearchResponse": {
            "type": "object",
            "description": "The customerFlagIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "customerFlagIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for customerFlag"
                    }
                }
            }
        },
        "ticket": {
            "type": "object",
            "properties": {
                "ticketID": {
                    "description": "Unique ID",
                    "type": "integer"
                },
                "customerID": {
                    "description": "Customer ID which this subscription belongs to",
                    "type": "integer"
                },
                "billToAccountID": {
                    "description": "Billing Account which this subscription belongs to",
                    "type": "integer"
                },
                "officeID": {
                    "description": "Office ID which this subscription belongs to",
                    "type": "integer"
                },
                "dateCreated": {
                    "description": "Date this ticket was added / created.",
                    "type": "string"
                },
                "invoiceDate": {
                    "description": "Invoice date",
                    "type": "string"
                },
                "dateUpdated": {
                    "description": "The date the ticket was updated",
                    "type": "string"
                },
                "active": {
                    "description": "0: pending, 1: active and counts towards customer's outstanding balance, -1: a ticket template.",
                    "type": "integer"
                },
                "subTotal": {
                    "description": "Subtotal = serviceCharge + sum of line items",
                    "type": "number"
                },
                "taxAmount": {
                    "description": "Total calculated tax",
                    "type": "number"
                },
                "total": {
                    "description": "Subtotal + total",
                    "type": "number"
                },
                "serviceCharge": {
                    "description": "Base charge for this ticket.",
                    "type": "number"
                },
                "serviceTaxable": {
                    "description": "Whether or not the base service charge for this ticket is taxable (1) or not (0)",
                    "type": "integer"
                },
                "productionValue": {
                    "description": "Value for reporting / commission purposes. -1: Same as subTotal, >= 0: different from subtotal",
                    "type": "number"
                },
                "taxRate": {
                    "description": "The tax rate associated with this ticket.",
                    "type": "number"
                },
                "appointmentID": {
                    "description": "If this ticket is attached to an appointment it will show here",
                    "type": "integer"
                },
                "balance": {
                    "description": "Any unpaid balance left on this ticket",
                    "type": "number"
                },
                "subscriptionID": {
                    "description": "ONLY CONTAINS A VALUE WHEN THIS IS A TEMPLATE for a particular subscription. These should never be active",
                    "type": "integer"
                },
                "autoGenerated": {
                    "description": "The subscription ID that generated this ticket when it was part of recurring billing, from a renewal or for the initial service if the initial invoice does not get generated at the time of service completion.",
                    "type": "integer"
                },
                "autoGeneratedType": {
                    "description": "Indicates if the invoice was create as part of the recurring billing schedule, for a subscription renewal or is the initial invoice when the initial invoice is not created at the time of service completion.\n                    INITIAL = initial invoice, RECURRING = recurring billing invoice, RENEWAL = renewal invoice.",
                    "type": "string"
                },
                "renewalID": {
                    "description": "The subscription ID that generated this ticket when it was part of a renewal",
                    "type": "integer"
                },
                "serviceID": {
                    "description": "Ticket service type",
                    "type": "integer"
                },
                "items": {
                    "description": "An array of line items associated with this ticket",
                    "type": "string"
                },
                "invoiceNumber": {
                    "description": "The displayed Invoice #",
                    "type": "string"
                },
                "templateType": {
                    "description": "The ticket template type. I: initial ticket template, R: recurring ticket template, NA: not a ticket template.",
                    "type": "string"
                },
                "glNumber": {
                    "description": "glNumber of the ticket",
                    "type": "string"
                }
            }
        },
        "ticketSearchResponse": {
            "type": "object",
            "description": "The ticketIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "ticketIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for ticket"
                    }
                }
            }
        },
        "ticketCreateResponse": {
            "type": "integer"
        },
        "ticketUpdateResponse": {
            "type": "integer"
        },
        "ticketDeleteResponse": {
            "type": "boolean"
        },
        "ticketGetAddOnsResponse": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "itemID": {
                        "description": "Primary key for ticketItems",
                        "type": "integer"
                    },
                    "ticketID": {
                        "description": "Foreign key to tickets table. Retrieve via getAddons(subscriptionID).",
                        "type": "integer"
                    },
                    "description": {
                        "description": "Customer Facing text for item.",
                        "type": "string"
                    },
                    "quantity": {
                        "description": "Number of products or services to add.",
                        "type": "integer"
                    },
                    "amount": {
                        "description": "Charge Amount for item.",
                        "type": "number"
                    },
                    "productID": {
                        "description": "Foreign key to products table.",
                        "type": "integer"
                    },
                    "serviceID": {
                        "description": "Foreign key to services Table.",
                        "type": "integer"
                    },
                    "taxable": {
                        "description": "0 for untaxable, 1 for taxable. Items with negative amounts cannot be taxable.",
                        "type": "integer"
                    },
                    "creditTo": {
                        "description": "Foreign key to employees table.",
                        "type": "integer"
                    },
                    "unitID": {
                        "description": "Foreign key to unit table (if applicable for unit specific addons on multi-unit customers)",
                        "type": "integer"
                    }
                }
            }
        },
        "ticketCreateAddOnResponse": {
            "type": "integer"
        },
        "ticketUpdateAddOnResponse": {
            "type": "integer"
        },
        "ticketSetAddOnsResponse": {
            "$ref": "#/definitions/ticketGetAddOnsResponse"
        },
        "ticketDeleteAddOnResponse": {
            "type": "boolean"
        },
        "appointment": {
            "type": "object",
            "properties": {
                "appointmentID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "officeID": {
                    "description": "The ID of the office this appointment belongs to.",
                    "type": "integer"
                },
                "customerID": {
                    "description": "The ID of the customer this appointment belongs to.",
                    "type": "integer"
                },
                "subscriptionID": {
                    "description": "The ID of the subscription if this appointment belongs to a subscription. If an appointment is attached to a subscription it inherits its pricing as well as other defaults. It also resets the next due date upon completion. Stand alone services or reservices will be a -1.",
                    "type": "integer"
                },
                "subscriptionRegionID": {
                    "description": "RegionID of the subscription if this appointment belongs to a one. For stand alone services or reservices it will be -1.",
                    "type": "integer"
                },
                "routeID": {
                    "description": "The ID of the route that this appointment is assigned to.",
                    "type": "integer"
                },
                "spotID": {
                    "description": "The ID of the spot that this appointment is assigned to. Null indicates an appointment that is flexible on route.",
                    "type": "integer"
                },
                "date": {
                    "description": "The date this appointment is scheduled for.",
                    "type": "string"
                },
                "start": {
                    "description": "The beginning of the acceptable time window that the tech may arrive.",
                    "type": "string"
                },
                "end": {
                    "description": "The end of the acceptable time window that the tech may arrive.",
                    "type": "string"
                },
                "duration": {
                    "description": "The number of minutes this appointment is scheduled for.",
                    "type": "integer"
                },
                "type": {
                    "description": "The service type ID of this appointment. Reference the endpoint `servicetype` for available options.",
                    "type": "integer"
                },
                "dateAdded": {
                    "description": "The date this appointment was created / added.",
                    "type": "string"
                },
                "employeeID": {
                    "description": "The employee ID who created this appointment.",
                    "type": "integer"
                },
                "status": {
                    "description": "The status code of this appointment.",
                    "type": "integer"
                },
                "statusText": {
                    "description": "Friendly representation of status",
                    "type": "string"
                },
                "callAhead": {
                    "description": "The number of minutes the tech should call ahead to the customer before arriving.",
                    "type": "integer"
                },
                "isInitial": {
                    "description": "Whether or not this is the initial appointment for the associated subscription. 1: yes, 0: no",
                    "type": "integer"
                },
                "subscriptionPreferredTech": {
                    "description": "The employee ID of the technitian set up as preferred for this service subscription, if this appointment belongs to a one. For stand alone services or reservices it will be -1.",
                    "type": "integer"
                },
                "completedBy": {
                    "description": "The employee ID who marked this as serviced -- not necessarily which tech completed the service.",
                    "type": "integer"
                },
                "servicedBy": {
                    "description": "The employee ID of the technician who serviced this appointment",
                    "type": "integer"
                },
                "dateCompleted": {
                    "description": "The date this appointment was marked as serviced (when the action took place and not necessarily the date of the appointment).",
                    "type": "string"
                },
                "notes": {
                    "description": "The notes the technician left for the customer.",
                    "type": "string"
                },
                "officeNotes": {
                    "description": "The notes the technician left ONLY for the office.",
                    "type": "string"
                },
                "timeIn": {
                    "description": "The time the technician checked into the appointment (via user defined input).",
                    "type": "string"
                },
                "timeOut": {
                    "description": "The time the technician checked out of the appointment (via user-defined input).",
                    "type": "string"
                },
                "checkIn": {
                    "description": "The time the technician checked into the appointment (via check-in button).",
                    "type": "string"
                },
                "checkOut": {
                    "description": "The time the technician checked out of the appointment (via check-out button).",
                    "type": "string"
                },
                "windSpeed": {
                    "description": "Miles Per Hour",
                    "type": "integer"
                },
                "windDirection": {
                    "description": "The direction of the wind -- 8 point compass.",
                    "type": "string"
                },
                "temperature": {
                    "description": "Degrees Farenheight.",
                    "type": "integer"
                },
                "amountCollected": {
                    "description": "The amount the tech reported as being collected.",
                    "type": "number"
                },
                "paymentMethod": {
                    "description": "The method of payment collected. -1: no payment collected, 0: coupon, 1: cash, 2: check, 3: credit card",
                    "type": "integer"
                },
                "servicedInterior": {
                    "description": "1: Serviced Interior, 0: Outside only",
                    "type": "integer"
                },
                "ticketID": {
                    "description": "The ticket / invoice ID associated with the appointment.",
                    "type": "integer"
                },
                "dateCancelled": {
                    "description": "Cancelation date",
                    "type": "string"
                },
                "additionalTechs": {
                    "description": "EmployeeIDs of additional techs on the appointment. Comma separated.",
                    "type": "string"
                },
                "cancellationReason": {
                    "description": "Appointment cancellation reason, only returned if parameter 'includeCancellationReason' is included with the request.",
                    "type": "string"
                },
                "unitIDs": {
                    "description": "An array of unit IDs associated with this appointment (for multi unit customers)",
                    "type": "integer"
                },
                "targetPests": {
                    "description": "Requires parameter 'includeTargetPests' to be sent with the request. The ID of a target insect associated with the appointment, these IDs can be found in preferences via Admin > Preferences > Service Related > Target Issues",
                    "type": "integer"
                },
                "appointmentNotes": {
                    "description": "Notes for the appointment.",
                    "type": "string"
                },
                "doInterior": {
                    "description": "0 - unspecified, 1 - Exterior only, 2 - Interior Needed",
                    "type": "integer"
                },
                "dateUpdated": {
                    "description": "Date the appointment was last changed",
                    "type": "string"
                },
                "cancelledBy": {
                    "description": "EmployeeID that cancelled the appointment.",
                    "type": "integer"
                },
                "assignedTech": {
                    "description": "EmployeeID that was assigned to the appointment.",
                    "type": "integer"
                },
                "latIn": {
                    "description": "latIn recorded at appointment completion",
                    "type": "number"
                },
                "latOut": {
                    "description": "latOut recorded at appointment completion",
                    "type": "number"
                },
                "longIn": {
                    "description": "longIn recorded at appointment completion",
                    "type": "number"
                },
                "longOut": {
                    "description": "longOut recorded at appointment completion",
                    "type": "number"
                },
                "sequence": {
                    "description": "When multiple appointments occupy the same spot this determines which of the appointments will be first.",
                    "type": "integer"
                }
            }
        },
        "appointmentSearchResponse": {
            "type": "object",
            "description": "The appointmentIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "appointmentIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for appointment"
                    }
                }
            }
        },
        "appointmentCreateResponse": {
            "type": "integer"
        },
        "appointmentUpdateResponse": {
            "type": "integer"
        },
        "appointmentCancelResponse": {
            "type": "integer"
        },
        "appointmentCompleteResponse": {
            "$ref": "#/definitions/array"
        },
        "employee": {
            "type": "object",
            "properties": {
                "employeeID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "officeID": {
                    "description": "Office ID this employee belongs to",
                    "type": "integer"
                },
                "active": {
                    "description": "0: Inactive account, 1: Active account",
                    "type": "integer"
                },
                "fname": {
                    "description": "Employee's first name",
                    "type": "string"
                },
                "lname": {
                    "description": "Employee's last name",
                    "type": "string"
                },
                "initials": {
                    "description": "Employee's name initials -- user defined in case of duplicate's",
                    "type": "string"
                },
                "nickname": {
                    "description": "Employee's nickname",
                    "type": "string"
                },
                "type": {
                    "description": "Employee type. 0: Office Staff, 1: Technician, 2: Sales Rep",
                    "type": "integer"
                },
                "phone": {
                    "description": "Phone number",
                    "type": "string"
                },
                "email": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "username": {
                    "description": "Employees username",
                    "type": "string"
                },
                "experience": {
                    "description": "Years of experience of the rep -- mostly to distinguish rookies from veterans",
                    "type": "integer"
                },
                "pic": {
                    "description": "URL of the employee image",
                    "type": "string"
                },
                "linkedEmployeeIDs": {
                    "description": "The master account if this employee is linked to other accounts in other offices. For reporting purposes their stats are typically combined.",
                    "type": "integer"
                },
                "employeeLink": {
                    "description": "Employee's Link",
                    "type": "string"
                },
                "licenseNumber": {
                    "description": "License Number",
                    "type": "string"
                },
                "supervisorID": {
                    "description": "EmployeeID of supervisor",
                    "type": "integer"
                },
                "roamingRep": {
                    "description": "The master employeeID if this employee is linked to other accounts in other offices. Set as 0 if the account cannot roam.",
                    "type": "integer"
                },
                "teamIDs": {
                    "description": "The master employeeID if this employee is linked to other accounts in other offices. Set as 0 if the account cannot roam.",
                    "type": "integer"
                },
                "primaryTeam": {
                    "description": "The master employeeID if this employee is linked to other accounts in other offices. Set as 0 if the account cannot roam.",
                    "type": "integer"
                }
            }
        },
        "employeeSearchResponse": {
            "type": "object",
            "description": "The employeeIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "employeeIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for employee"
                    }
                }
            }
        },
        "employeeCreateResponse": {
            "type": "integer"
        },
        "employeeUpdateResponse": {
            "type": "integer"
        },
        "employeeDealiasResponse": {
            "type": "integer"
        },
        "serviceType": {
            "type": "object",
            "properties": {
                "typeID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "officeID": {
                    "description": "Office ID this service type belongs to, it will be -1 if it is a Global service type",
                    "type": "integer"
                },
                "description": {
                    "description": "Service type description",
                    "type": "string"
                },
                "frequency": {
                    "description": "Service Type Frequecy. (-1 when it is As need, 0 when it is One Time, -3 when it is Custom Schedule)",
                    "type": "integer"
                },
                "defaultCharge": {
                    "description": "Service type default charge",
                    "type": "number"
                },
                "category": {
                    "description": "Service type category",
                    "type": "string"
                },
                "reservice": {
                    "description": "Service is a reservice type",
                    "type": "integer"
                },
                "defaultLength": {
                    "description": "Default appointment duration in minutes",
                    "type": "integer"
                },
                "defaultInitialCharge": {
                    "description": "Service defaultInitialCharge. If this is not set, the office default initial quote is sent instead.",
                    "type": "number"
                },
                "initialID": {
                    "description": "Initial service type, or 0 if one is not set.",
                    "type": "integer"
                },
                "minimumRecurringCharge": {
                    "description": "Minimum recurring charge for subscriptions generated through SalesRoutes.",
                    "type": "number"
                },
                "minimumInitialCharge": {
                    "description": "Minimum initial charge for subscriptions generated through SalesRoutes.",
                    "type": "number"
                },
                "regularService": {
                    "description": "Set as 1 if the service type is marked as a regular service.",
                    "type": "integer"
                },
                "initial": {
                    "description": "Set as 1 if the service type is marked as an initial service.",
                    "type": "integer"
                },
                "glAccountID": {
                    "description": "glAccountID of the service",
                    "type": "integer"
                }
            }
        },
        "serviceTypeSearchResponse": {
            "type": "object",
            "description": "The serviceTypeIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "serviceTypeIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for serviceType"
                    }
                }
            }
        },
        "payment": {
            "type": "object",
            "properties": {
                "paymentID": {
                    "description": "Payment Unique Identifier",
                    "type": "integer"
                },
                "officeID": {
                    "description": "Office Unique Identifier",
                    "type": "integer"
                },
                "customerID": {
                    "description": "Customer Unique Identifier",
                    "type": "integer"
                },
                "date": {
                    "description": "Payment date",
                    "type": "string"
                },
                "paymentMethod": {
                    "description": "Payment Method 0-Coupon, 1-Cash, 2-Check, 3-Credit Card, 4 ACH, 5-Credit Memo",
                    "type": "integer"
                },
                "amount": {
                    "description": "Payment amount",
                    "type": "number"
                },
                "appliedAmount": {
                    "description": "Amount of the payment that was used",
                    "type": "number"
                },
                "unassignedAmount": {
                    "description": "Amount of the payment that was not used yet",
                    "type": "number"
                },
                "status": {
                    "description": "Status of the payment (0-Unsuccessful, 1-Successful, 2-Refunded)",
                    "type": "integer"
                },
                "invoiceIDs": {
                    "description": "Tickets that this payment was applied for",
                    "type": "integer"
                },
                "paymentApplications": {
                    "description": "Array of payment applications associated with the ticket",
                    "type": "string"
                },
                "employeeID": {
                    "description": "EmployeeID who recorded the payment",
                    "type": "integer"
                },
                "officePayment": {
                    "description": "officePayment flag",
                    "type": "integer"
                },
                "collectionPayment": {
                    "description": "collectionPayment flag",
                    "type": "integer"
                },
                "writeOff": {
                    "description": "writeOff flag",
                    "type": "integer"
                },
                "paymentOrigin": {
                    "description": "0 = PestRoutes, 1 = PestPortals, 2 = SalesRoutes, 3 = TechRoutes, 4 = ARM (collections)",
                    "type": "integer"
                },
                "originalPaymentID": {
                    "description": "Original paymentID (for refunds)",
                    "type": "integer"
                },
                "lastFour": {
                    "description": "Last 4 digits of credit card if applicable",
                    "type": "string"
                },
                "notes": {
                    "description": "Notes from payment processor",
                    "type": "string"
                },
                "batchOpened": {
                    "description": "time payment batch was opened",
                    "type": "string"
                },
                "batchClosed": {
                    "description": "time payment batch was closed",
                    "type": "string"
                },
                "paymentSource": {
                    "description": "possible values: 'API','Batch Process','Collections','Customer Portal','Manual','Trigger','Import'",
                    "type": "string"
                }
            }
        },
        "paymentSearchResponse": {
            "type": "object",
            "description": "The paymentIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "paymentIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for payment"
                    }
                }
            }
        },
        "paymentCreateResponse": {
            "type": "integer"
        },
        "paymentCreateRefundResponse": {
            "type": "integer"
        },
        "contract": {
            "type": "object",
            "properties": {
                "contractIDs": {
                    "description": null,
                    "type": "integer"
                },
                "contractID": {
                    "description": null,
                    "type": "integer"
                },
                "customerIDs": {
                    "description": null,
                    "type": "integer"
                },
                "subscriptionIDs": {
                    "description": null,
                    "type": "integer"
                },
                "dateSigned": {
                    "description": "The date the contract was signed.",
                    "type": "string"
                },
                "dateAdded": {
                    "description": "The date the contract was added.",
                    "type": "string"
                },
                "documentState": {
                    "description": "State of the document e.g. WIP, COMPLETED",
                    "type": "integer"
                }
            }
        },
        "contractSearchResponse": {
            "type": "object",
            "description": "The contractIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "contractIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for contract"
                    }
                }
            }
        },
        "contractCreateResponse": {
            "$ref": "#/definitions/string"
        },
        "contractDeleteResponse": {
            "type": "boolean"
        },
        "review": {
            "type": "object",
            "properties": {
                "feedbackID": {
                    "description": null,
                    "type": "integer"
                },
                "officeIDs": {
                    "description": null,
                    "type": "integer"
                },
                "customerID": {
                    "description": null,
                    "type": "integer"
                },
                "appointmentID": {
                    "description": null,
                    "type": "integer"
                },
                "date": {
                    "description": null,
                    "type": "string"
                },
                "starRating": {
                    "description": null,
                    "type": "integer"
                },
                "feedback": {
                    "description": null,
                    "type": "string"
                },
                "favorable": {
                    "description": null,
                    "type": "integer"
                },
                "Customer": {
                    "description": "The customer object associated with the review (only if 'includeCustomers' parameter is sent)",
                    "type": "object",
                    "items": {
                        "$ref": "#/definitions/customer"
                    }
                }
            }
        },
        "reviewSearchResponse": {
            "type": "object",
            "description": "The reviewIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "reviewIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for review"
                    }
                }
            }
        },
        "reviewSummaryResponse": {
            "type": "object",
            "properties": {
                "stars": {
                    "description": "Object filled with stars E.G. {1:100, 2:101, 3:200, 4:300, 5:400}",
                    "type": "object"
                },
                "zips": {
                    "description": "Object filled with zip information E.G. {75252: {num:700, average: 2.5, zip: 75252} }",
                    "type": "object"
                },
                "cities": {
                    "description": "Object filled with city information E.G. {Dallas: {num:700, average: 2.5, city: \"Dallas\"} }",
                    "type": "object"
                },
                "average": {
                    "description": "Average star rating for the given parameters",
                    "type": "number"
                }
            }
        },
        "reviewCreateResponse": {
            "type": "integer"
        },
        "reviewUpdateResponse": {
            "type": "integer"
        },
        "reviewDeleteResponse": {
            "type": "boolean"
        },
        "note": {
            "type": "object",
            "properties": {
                "noteID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "officeIDs": {
                    "description": null,
                    "type": "integer"
                },
                "customerID": {
                    "description": "Customer ID",
                    "type": "integer"
                },
                "customerName": {
                    "description": "Customer Name",
                    "type": "string"
                },
                "customerSpouse": {
                    "description": "Spouse Field",
                    "type": "string"
                },
                "companyName": {
                    "description": "Company Name",
                    "type": "string"
                },
                "employeeID": {
                    "description": "Employee ID that created the note",
                    "type": "integer"
                },
                "employeeName": {
                    "description": "Employee name that created the note",
                    "type": "string"
                },
                "date": {
                    "description": "Date note was created",
                    "type": "string"
                },
                "showCustomer": {
                    "description": "Whether or not this shows up on the invoices or customer portal so the customer can see it",
                    "type": "integer"
                },
                "showTech": {
                    "description": "Whether or not this shows up in the tech app",
                    "type": "integer"
                },
                "cancellationReasonID": {
                    "description": "If this is part of a cancellation, the ID cancellation reason selected",
                    "type": "integer"
                },
                "cancellationReason": {
                    "description": "If this is part of a cancellation, the description of the cancellation reason selected",
                    "type": "string"
                },
                "typeID": {
                    "description": "The ID for the contact type",
                    "type": "integer"
                },
                "type": {
                    "description": "Description of note type",
                    "type": "integer"
                },
                "notes": {
                    "description": "The actual note content",
                    "type": "string"
                },
                "referenceID": {
                    "description": "If this is in regards to a subscription cancellation, the subscription ID. Can also be a re-instatement subscription ID, etc... depending on the note type",
                    "type": "integer"
                },
                "dateAdded": {
                    "description": "Date this note was created",
                    "type": "string"
                },
                "dateUpdated": {
                    "description": "Date the note was last updated.",
                    "type": "string"
                }
            }
        },
        "noteSearchResponse": {
            "type": "object",
            "description": "The noteIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "noteIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for note"
                    }
                }
            }
        },
        "noteCreateResponse": {
            "type": "integer"
        },
        "noteUpdateResponse": {
            "type": "integer"
        },
        "noteDeleteResponse": {
            "type": "boolean"
        },
        "changelog": {
            "type": "object",
            "properties": {
                "changeID": {
                    "description": "Unique ID",
                    "type": "integer"
                },
                "classID": {
                    "description": "Constant number identifying change type. Possible Values: {\"Employee\":1,\"Group\":2,\"Route\":3,\"Appointment\":4,\"Ticket\":5,\"PaymentProfile\":6,\"Subscription\":7,\"Customer\":8,\"Diagram\":9,\"InsectsAction\":10,\"ServiceTypesAction\":11,\"PreSetNotesAction\":13,\"SprayRigsAction\":12,\"AddOnsAction\":15,\"EquipmentTypesAction\":14,\"GenericFlagsAction\":17,\"DivisionsAction\":20,\"CancellationReasonsAction\":18,\"FrequencyAction\":16,\"VoiceMessagesAction\":22,\"Unit\":21,\"SalesAidesAction\":26,\"FormTemplatesAction\":28,\"RegionsAction\":24,\"DiagramMarkersAction\":37,\"LostReasonsAction\":40,\"BillingLetterTemplatesAction\":29,\"LocationAction\":39,\"ChemicalsAction\":35,\"CustomerSourcesAction\":19,\"NoteCategoriesAction\":41,\"SocialNetworkAction\":38,\"ContractTemplatesAction\":27,\"OfficeInfoAction\":32,\"DealsAction\":30,\"LeadStagesAction\":25,\"NoteTypesAction\":36,\"MerchantInfoAction\":33,\"VendorsAction\":80,\"AccessControlProfilesAction\":23,\"Document\":42,\"PreferencesAction\":31,\"CustomerCommunicationsAction\":34,\"ClockCategoriesAction\":43,\"ObjectionsAction\":44,\"CompetitorsAction\":45,\"CommissionRateAction\":46,\"CreditCardImportAction\":47,\"PreferencesBodyAction\":50,\"AdditionalContact\":51,\"StructureTemplatesAction\":58,\"ConditionTypesAction\":55,\"StructuresAction\":60,\"ConditionsAction\":56,\"ConditionTemplatesAction\":57,\"EmailTemplateAction\":52,\"EmailCategoryAction\":53,\"ExceptionTypesAction\":59,\"TimeClockEntriesAction\":54,\"Payment\":61,\"Task\":62,\"TimeClockSettingsAction\":63,\"VisualRouting\":64,\"TermiteReportAction\":65,\"TermiteFindingAction\":66,\"TermiteRecommendationAction\":67,\"TermiteAreaAction\":68,\"TermiteFindingTemplateAction\":69,\"TermiteRecommendationTemplateAction\":70,\"RenewalNoticeAction\":71,\"SubPropertyTypesAction\":72,\"ElementProfile\":73,\"BrainProfile\":74,\"NMIProfile\":75,\"SpreedlyProfile\":76,\"RoutesProfile\":77,\"PayrixProfile\":79,\"Equipment\":78,\"SkillsAction\":81,\"CustomFieldsAction\":92,\"AffiliateNetworkBillingOffice\":93}",
                    "type": "integer"
                },
                "class": {
                    "description": "Name of the Class associated with the number. Possible values: Employee, Group, Route, Appointment, Ticket, PaymentProfile, Subscription, Customer, Diagram, InsectsAction, ServiceTypesAction, PreSetNotesAction, SprayRigsAction, AddOnsAction, EquipmentTypesAction, GenericFlagsAction, DivisionsAction, CancellationReasonsAction, FrequencyAction, VoiceMessagesAction, Unit, SalesAidesAction, FormTemplatesAction, RegionsAction, DiagramMarkersAction, LostReasonsAction, BillingLetterTemplatesAction, LocationAction, ChemicalsAction, CustomerSourcesAction, NoteCategoriesAction, SocialNetworkAction, ContractTemplatesAction, OfficeInfoAction, DealsAction, LeadStagesAction, NoteTypesAction, MerchantInfoAction, VendorsAction, AccessControlProfilesAction, Document, PreferencesAction, CustomerCommunicationsAction, ClockCategoriesAction, ObjectionsAction, CompetitorsAction, CommissionRateAction, CreditCardImportAction, PreferencesBodyAction, AdditionalContact, StructureTemplatesAction, ConditionTypesAction, StructuresAction, ConditionsAction, ConditionTemplatesAction, EmailTemplateAction, EmailCategoryAction, ExceptionTypesAction, TimeClockEntriesAction, Payment, Task, TimeClockSettingsAction, VisualRouting, TermiteReportAction, TermiteFindingAction, TermiteRecommendationAction, TermiteAreaAction, TermiteFindingTemplateAction, TermiteRecommendationTemplateAction, RenewalNoticeAction, SubPropertyTypesAction, ElementProfile, BrainProfile, NMIProfile, SpreedlyProfile, RoutesProfile, PayrixProfile, Equipment, SkillsAction, CustomFieldsAction, AffiliateNetworkBillingOffice",
                    "type": "string"
                },
                "dateChanged": {
                    "description": "Date this change was made.",
                    "type": "string"
                },
                "employeeID": {
                    "description": "ID of employee who made the change.",
                    "type": "integer"
                },
                "notes": {
                    "description": "JSON encoded object representing the change that was made.",
                    "type": "json"
                },
                "referenceID": {
                    "description": "ID of the specified class that was changed",
                    "type": "integer"
                }
            }
        },
        "changelogSearchResponse": {
            "type": "object",
            "description": "The changelogIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "changelogIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for changelog"
                    }
                }
            }
        },
        "document": {
            "type": "object",
            "properties": {
                "uploadID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "officeID": {
                    "description": null,
                    "type": "integer"
                },
                "customerID": {
                    "description": "Customer ID",
                    "type": "integer"
                },
                "dateAdded": {
                    "description": "date this upload was added",
                    "type": "string"
                },
                "addedBy": {
                    "description": "Employee ID that added this ",
                    "type": "integer"
                },
                "description": {
                    "description": "Description for this upload",
                    "type": "string"
                },
                "showCustomer": {
                    "description": "Set to 1 if this upload is visible to the customer",
                    "type": "integer"
                },
                "showTech": {
                    "description": "Set to 1 if this upload is visible to the technician through TechRoutes.",
                    "type": "integer"
                },
                "appointmentID": {
                    "description": "Appointment ID this upload relates to.",
                    "type": "integer"
                },
                "prefix": {
                    "description": "origination database prefix",
                    "type": "integer"
                }
            }
        },
        "documentSearchResponse": {
            "type": "object",
            "description": "The documentIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "documentIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for document"
                    }
                }
            }
        },
        "documentCreateResponse": {
            "type": "integer"
        },
        "documentCreateEncodedResponse": {
            "type": "integer"
        },
        "documentUpdateResponse": {
            "type": "integer"
        },
        "documentDeleteResponse": {
            "type": "boolean"
        },
        "route": {
            "type": "object",
            "properties": {
                "routeID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "title": {
                    "description": "",
                    "type": "integer"
                },
                "templateID": {
                    "description": "",
                    "type": "integer"
                },
                "dateAdded": {
                    "description": "",
                    "type": "string"
                },
                "addedBy": {
                    "description": "ID of employee who added this route",
                    "type": "integer"
                },
                "officeID": {
                    "description": "",
                    "type": "integer"
                },
                "groupTitle": {
                    "description": "",
                    "type": "integer"
                },
                "date": {
                    "description": "date of this route",
                    "type": "string"
                },
                "dayNotes": {
                    "description": "",
                    "type": "integer"
                },
                "dayAlert": {
                    "description": "",
                    "type": "integer"
                },
                "dayID": {
                    "description": "",
                    "type": "integer"
                },
                "additionalTechs": {
                    "description": "EmployeeIDs of additional techs on the appointment. Comma separated.",
                    "type": "string"
                },
                "assignedTech": {
                    "description": "EmployeeID assigned to route. 0 represents no tech assigned.",
                    "type": "integer"
                },
                "apiCanSchedule": {
                    "description": "Set as 1 when the API has access to schedule to this route.",
                    "type": "integer"
                },
                "scheduleTeams": {
                    "description": "Array of teams that can schedule to the route.",
                    "type": "string"
                },
                "scheduleTypes": {
                    "description": "Array of systemTypes that can schedule to the route. {0 office staff, 1 techs, 2 sales, 3 api}",
                    "type": "string"
                },
                "averageLatitude": {
                    "description": "Average latitude of customers scheduled to this route (or null)",
                    "type": "number"
                },
                "averageLongitude": {
                    "description": "Average longitude of customers scheduled to this route (or null)",
                    "type": "number"
                },
                "averageDistance": {
                    "description": "Average distance of customers scheduled to this route to the given latitude and longitude parameters (or the office latitude and longitude if not sent)",
                    "type": "number"
                },
                "dateUpdated": {
                    "description": "date this route was last updated",
                    "type": "string"
                },
                "distanceScore": {
                    "description": "Route distance score (snapshot)",
                    "type": "integer"
                }
            }
        },
        "routeSearchResponse": {
            "type": "object",
            "description": "The routeIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "routeIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for route"
                    }
                }
            }
        },
        "routeCreateResponse": {
            "type": "integer"
        },
        "routeUpdateResponse": {
            "type": "integer"
        },
        "spot": {
            "type": "object",
            "properties": {
                "spotID": {
                    "description": "",
                    "type": "integer"
                },
                "routeID": {
                    "description": "",
                    "type": "integer"
                },
                "date": {
                    "description": "",
                    "type": "string"
                },
                "start": {
                    "description": "",
                    "type": "string"
                },
                "end": {
                    "description": "",
                    "type": "string"
                },
                "spotCapacity": {
                    "description": "",
                    "type": "integer"
                },
                "description": {
                    "description": "",
                    "type": "string"
                },
                "currentAppointment": {
                    "description": "",
                    "type": "integer"
                },
                "currentAppointmentDuration": {
                    "description": "",
                    "type": "integer"
                },
                "blockReason": {
                    "description": "",
                    "type": "string"
                },
                "distanceToPrevious": {
                    "description": "",
                    "type": "number"
                },
                "previousLat": {
                    "description": "",
                    "type": "number"
                },
                "previousLng": {
                    "description": "",
                    "type": "number"
                },
                "prevCustomer": {
                    "description": "ID of the customer occupying the next appointment",
                    "type": "integer"
                },
                "prevSpotID": {
                    "description": "ID of the last occupied spot",
                    "type": "integer"
                },
                "prevAppointmentID": {
                    "description": "ID of the last appointment",
                    "type": "integer"
                },
                "distanceToNext": {
                    "description": "",
                    "type": "number"
                },
                "nextLat": {
                    "description": "",
                    "type": "number"
                },
                "nextLng": {
                    "description": "",
                    "type": "number"
                },
                "nextCustomer": {
                    "description": "ID of the customer occupying the next filled appointment",
                    "type": "integer"
                },
                "nextSpotID": {
                    "description": "ID of the next occupied spot",
                    "type": "integer"
                },
                "nextAppointmentID": {
                    "description": "ID of the next appointment",
                    "type": "integer"
                },
                "apiCanSchedule": {
                    "description": "1 when the API can schedule to this spot",
                    "type": "integer"
                },
                "assignedTech": {
                    "description": "EmployeeID assigned to the route.",
                    "type": "integer"
                },
                "reserved": {
                    "description": "True if the appointment has been reserved by an API user.",
                    "type": "integer"
                },
                "reservationEnd": {
                    "description": "The time that the reservation on this spot will expire.",
                    "type": "string"
                }
            }
        },
        "spotSearchResponse": {
            "type": "object",
            "description": "The spotIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "spotIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for spot"
                    }
                }
            }
        },
        "spotReserveResponse": {
            "$ref": "#/definitions/array"
        },
        "spotReleaseResponse": {
            "type": "integer"
        },
        "spotBlockResponse": {
            "type": "integer"
        },
        "spotUnblockResponse": {
            "type": "integer"
        },
        "genericFlag": {
            "type": "object",
            "properties": {
                "genericFlagID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "officeIDs": {
                    "description": "Alias for officeID.",
                    "type": "integer"
                },
                "officeID": {
                    "description": null,
                    "type": "integer"
                },
                "code": {
                    "description": null,
                    "type": "string"
                },
                "description": {
                    "description": null,
                    "type": "string"
                },
                "status": {
                    "description": null,
                    "type": "integer"
                },
                "type": {
                    "description": null,
                    "type": "string"
                }
            }
        },
        "genericFlagSearchResponse": {
            "type": "object",
            "description": "The genericFlagIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "genericFlagIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for genericFlag"
                    }
                }
            }
        },
        "genericFlagAssignment": {
            "type": "object",
            "properties": {
                "genericFlagAssignmentID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "genericFlagID": {
                    "description": null,
                    "type": "integer"
                },
                "entityID": {
                    "description": "CUST, EQAS, SUBS, or APPT ID",
                    "type": "integer"
                },
                "type": {
                    "description": "Type of flag assignment",
                    "type": "string"
                }
            }
        },
        "genericFlagAssignmentSearchResponse": {
            "type": "object",
            "description": "The genericFlagAssignmentIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "genericFlagAssignmentIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for genericFlagAssignment"
                    }
                }
            }
        },
        "genericFlagAssignmentCreateResponse": {
            "type": "integer"
        },
        "genericFlagAssignmentUpdateResponse": {
            "type": "integer"
        },
        "genericFlagAssignmentDeleteResponse": {
            "$ref": "#/definitions/"
        },
        "team": {
            "type": "object",
            "properties": {
                "teamID": {
                    "description": "Unique Identifier",
                    "type": "integer"
                },
                "officeID": {
                    "description": "Office ID this team belongs to",
                    "type": "integer"
                },
                "name": {
                    "description": "Team name",
                    "type": "string"
                },
                "teamLeader": {
                    "description": "Team Leader ID",
                    "type": "integer"
                },
                "employeeIDs": {
                    "description": "Employee IDs of team members",
                    "type": "integer"
                }
            }
        },
        "teamSearchResponse": {
            "type": "object",
            "description": "The teamIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "teamIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for team"
                    }
                }
            }
        },
        "accessControl": {
            "type": "object",
            "properties": {
                "employeeID": {
                    "description": "Employee ID of custom Access Control Profile",
                    "type": "integer"
                },
                "accessControlProfileID": {
                    "description": "0: Custom Access Control Profile per user. Otherwise, ID of defined Access Control Profiles",
                    "type": "integer"
                },
                "admin": {
                    "description": "Administrator",
                    "type": "integer"
                },
                "adminMessage": {
                    "description": "Admin Messages",
                    "type": "integer"
                },
                "editPreferences": {
                    "description": "Adjust Preferences",
                    "type": "integer"
                },
                "viewOwnRoutes": {
                    "description": "View Own Routes",
                    "type": "integer"
                },
                "viewOtherRoutes": {
                    "description": "View Other's Routes",
                    "type": "integer"
                },
                "editOwnRoutes": {
                    "description": "Edit Own Routes",
                    "type": "integer"
                },
                "editOtherRoutes": {
                    "description": "Edit Other's Routes",
                    "type": "integer"
                },
                "createRoutes": {
                    "description": "Create Routes",
                    "type": "integer"
                },
                "deleteRoutes": {
                    "description": "Delete Routes",
                    "type": "integer"
                },
                "lockUnlockRoutes": {
                    "description": "Lock/Unlock Routes",
                    "type": "integer"
                },
                "scheduleOnLockedRoutes": {
                    "description": "Schedule On Locked Routes",
                    "type": "integer"
                },
                "scheduleOwn": {
                    "description": "Schedule Appointments",
                    "type": "integer"
                },
                "cancelOwn": {
                    "description": "Cancel Own Appointments",
                    "type": "integer"
                },
                "editOthers": {
                    "description": "Edit Other's Appointments",
                    "type": "integer"
                },
                "canUnlockAppointments": {
                    "description": "Unlock Other's Appointments",
                    "type": "integer"
                },
                "intelligentRouting": {
                    "description": "Intelligent Routing",
                    "type": "integer"
                },
                "editMap": {
                    "description": "Assign Map Pages",
                    "type": "integer"
                },
                "viewProdValue": {
                    "description": "View Production Value",
                    "type": "integer"
                },
                "useTechRoutesStructures": {
                    "description": "Use Structures/Trend Reporting (Additional Charges Apply)",
                    "type": "integer"
                },
                "viewUsers": {
                    "description": "View Users",
                    "type": "integer"
                },
                "editUsers": {
                    "description": "Add / Edit Users",
                    "type": "integer"
                },
                "viewTechs": {
                    "description": "View Techs",
                    "type": "integer"
                },
                "editTechs": {
                    "description": "Add / Edit Techs",
                    "type": "integer"
                },
                "viewSalesmen": {
                    "description": "View Sales Reps",
                    "type": "integer"
                },
                "editSalesmen": {
                    "description": "Add / Edit Sales Reps",
                    "type": "integer"
                },
                "viewOwnTimeSheet": {
                    "description": "View Own Time Sheet",
                    "type": "integer"
                },
                "viewOtherTimeSheet": {
                    "description": "View Other Time Sheets",
                    "type": "integer"
                },
                "editOwnTimeSheet": {
                    "description": "Edit Own Time Sheet",
                    "type": "integer"
                },
                "editOtherTimeSheet": {
                    "description": "Edit Other Time Sheets",
                    "type": "integer"
                },
                "overrideTimeClockRestrictions": {
                    "description": "Override Time Clock Restrictions",
                    "type": "integer"
                },
                "canSpyOnReps": {
                    "description": "Rep Spy (SalesRoutes)",
                    "type": "integer"
                },
                "editTeams": {
                    "description": "Edit Teams",
                    "type": "integer"
                },
                "viewEmployeeFinancialSettings": {
                    "description": "View Employee Financial Settings",
                    "type": "integer"
                },
                "editEmployeeFinancialSettings": {
                    "description": "Edit Employee Financial Settings",
                    "type": "integer"
                },
                "viewOwnTasks": {
                    "description": "View Own Tasks",
                    "type": "integer"
                },
                "viewOtherTasks": {
                    "description": "View Other Tasks",
                    "type": "integer"
                },
                "editOwnTasks": {
                    "description": "Edit Own Tasks",
                    "type": "integer"
                },
                "editOtherTasks": {
                    "description": "Edit Other Tasks",
                    "type": "integer"
                },
                "viewAlerts": {
                    "description": "View Alerts",
                    "type": "integer"
                },
                "viewTransactions": {
                    "description": "View Transactions",
                    "type": "integer"
                },
                "addCharge": {
                    "description": "Add Charges",
                    "type": "integer"
                },
                "applyPayment": {
                    "description": "Apply Payments",
                    "type": "integer"
                },
                "editTransactions": {
                    "description": "Edit Transactions",
                    "type": "integer"
                },
                "processRefunds": {
                    "description": "Refund Payments",
                    "type": "integer"
                },
                "deleteInvoice": {
                    "description": "Delete Invoices",
                    "type": "integer"
                },
                "createCoupon": {
                    "description": "Create Coupon",
                    "type": "integer"
                },
                "invoiceNegativeItem": {
                    "description": "Negative Charges",
                    "type": "integer"
                },
                "closedMonthAppointmentCompletion": {
                    "description": "Complete appointment when period is locked",
                    "type": "integer"
                },
                "createCustomers": {
                    "description": "Create Customers",
                    "type": "integer"
                },
                "viewOwnCustomers": {
                    "description": "View Own Customers",
                    "type": "integer"
                },
                "viewOtherCustomers": {
                    "description": "View Other Customers",
                    "type": "integer"
                },
                "editOwnCustomers": {
                    "description": "Edit Own Customers",
                    "type": "integer"
                },
                "editOtherCustomers": {
                    "description": "Edit Other Customers",
                    "type": "integer"
                },
                "toggleCustomerStatus": {
                    "description": "Freeze/Unfreeze Customers",
                    "type": "integer"
                },
                "editCancellationDates": {
                    "description": "Edit Cancellation Date/Reason",
                    "type": "integer"
                },
                "toggleSubscriptionStatus": {
                    "description": "Freeze/Unfreeze Subscriptions",
                    "type": "integer"
                },
                "viewOwnSubscriptions": {
                    "description": "View Own Subscriptions",
                    "type": "integer"
                },
                "viewOtherSubscriptions": {
                    "description": "View Other Subscriptions",
                    "type": "integer"
                },
                "editOwnSubscriptions": {
                    "description": "Edit Own Subscriptions",
                    "type": "integer"
                },
                "editOtherSubscriptions": {
                    "description": "Edit Other Subscriptions",
                    "type": "integer"
                },
                "accessSentricon": {
                    "description": "Can Access Sentricon",
                    "type": "integer"
                },
                "editOwnSalesRep": {
                    "description": "Edit Own Sales Rep",
                    "type": "integer"
                },
                "editOtherSalesRep": {
                    "description": "Edit Other Sales Rep",
                    "type": "integer"
                },
                "viewLeaderBoardsAllOffices": {
                    "description": "View Leaderboards of All Offices",
                    "type": "integer"
                },
                "createCustomersFromMobile": {
                    "description": "Create Customers on Mobile (Additional Charges Apply)",
                    "type": "integer"
                },
                "viewOwnLeads": {
                    "description": "View Own Leads",
                    "type": "integer"
                },
                "viewOtherLeads": {
                    "description": "View Other Leads",
                    "type": "integer"
                },
                "editOwnLeads": {
                    "description": "Edit Own Leads",
                    "type": "integer"
                },
                "editOtherLeads": {
                    "description": "Edit Other Leads",
                    "type": "integer"
                },
                "assignBillingAccount": {
                    "description": "Assign Billing Account",
                    "type": "integer"
                },
                "viewOwnBilling": {
                    "description": "View Own Billing",
                    "type": "integer"
                },
                "viewOtherBilling": {
                    "description": "View Other Billing",
                    "type": "integer"
                },
                "editOwnBilling": {
                    "description": "Edit Own Billing",
                    "type": "integer"
                },
                "editOtherBilling": {
                    "description": "Edit Other Billing",
                    "type": "integer"
                },
                "addOwnBilling": {
                    "description": "Add Own Billing",
                    "type": "integer"
                },
                "addOtherBilling": {
                    "description": "Add Other Billing",
                    "type": "integer"
                },
                "approveForms": {
                    "description": "Approve Forms",
                    "type": "integer"
                },
                "viewOwnInvoices": {
                    "description": "View Own Invoices",
                    "type": "integer"
                },
                "viewOtherInvoices": {
                    "description": "View Other Invoices",
                    "type": "integer"
                },
                "editTaxable": {
                    "description": "Edit Taxable",
                    "type": "integer"
                },
                "hideCommercialPricing": {
                    "description": "Hide Commercial Price on Mobile",
                    "type": "integer"
                },
                "hideResidentialPricing": {
                    "description": "Hide Residential Price on Mobile",
                    "type": "integer"
                },
                "ignoreMinInitial": {
                    "description": "Ignore Min Initial Charge",
                    "type": "integer"
                },
                "ignoreMinRecurring": {
                    "description": "Ignore Min Recurring Charge",
                    "type": "integer"
                },
                "ignoreMinContractValue": {
                    "description": "Ignore Min Contract Value",
                    "type": "integer"
                },
                "viewSalesmanReports": {
                    "description": "View Sales Overview",
                    "type": "integer"
                },
                "viewDetailedSalesReports": {
                    "description": "View Sales Details",
                    "type": "integer"
                },
                "viewOfficeReports": {
                    "description": "View Office Reports",
                    "type": "integer"
                },
                "viewCustomReports": {
                    "description": "View Custom Reports",
                    "type": "integer"
                },
                "viewCustomerReport": {
                    "description": "View Customer Report",
                    "type": "integer"
                },
                "viewDashboard": {
                    "description": "View Dashboard",
                    "type": "integer"
                },
                "salesroutesBaseballRevenue": {
                    "description": "Sales Leaderboard Revenue",
                    "type": "integer"
                },
                "serviceNotificationApproval": {
                    "description": "Service Notification Approval",
                    "type": "integer"
                },
                "activeCustomersWidget": {
                    "description": "Active Customers",
                    "type": "integer"
                },
                "subscriptionTypesWidget": {
                    "description": "Active Subscriptions",
                    "type": "integer"
                },
                "cancelReasonsWidget": {
                    "description": "Cancellation Reasons",
                    "type": "integer"
                },
                "monthlyServicesWidget": {
                    "description": "Monthly Services",
                    "type": "integer"
                },
                "starRatingWidget": {
                    "description": "Technician Ratings",
                    "type": "integer"
                },
                "collectionsWidget": {
                    "description": "Collections Percentage",
                    "type": "integer"
                },
                "completionPercentageWidget": {
                    "description": "Completion Percentage",
                    "type": "integer"
                },
                "regularStopsPerRouteWidget": {
                    "description": "Stops Per Route",
                    "type": "integer"
                },
                "aPayCustomersWidget": {
                    "description": "Autopay Percentage",
                    "type": "integer"
                },
                "accountAgeWidget": {
                    "description": "Receivables Aging",
                    "type": "integer"
                },
                "paymentBreakdownWidget": {
                    "description": "Payment Types",
                    "type": "integer"
                },
                "averageRatesWidget": {
                    "description": "Average Rates",
                    "type": "integer"
                },
                "averageContractValuesWidget": {
                    "description": "Average Contract Values",
                    "type": "integer"
                },
                "customerAgeWidget": {
                    "description": "Average Customer Age",
                    "type": "integer"
                },
                "customerSourcesWidget": {
                    "description": "Subscription Sources",
                    "type": "integer"
                },
                "extraCardsWidget": {
                    "description": "Frozen with Account",
                    "type": "integer"
                },
                "monthlyBillingWidget": {
                    "description": "Recurring Billing",
                    "type": "integer"
                },
                "debitBalanceWidget": {
                    "description": "Debit Balance",
                    "type": "integer"
                },
                "revenueByServiceTypeWidget": {
                    "description": "Revenue by Service",
                    "type": "integer"
                },
                "revenueByMonthWidget": {
                    "description": "Revenue by Month",
                    "type": "integer"
                },
                "recurringAnnualRevenueWidget": {
                    "description": "Recurring Annual Revenue",
                    "type": "integer"
                },
                "accessControlProfileName": {
                    "description": "Access control profile name (if this is a preset access control profile)",
                    "type": "string"
                }
            }
        },
        "accessControlSearchResponse": {
            "type": "object",
            "description": "The accessControlIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "accessControlIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for accessControl"
                    }
                }
            }
        },
        "unit": {
            "type": "object",
            "properties": {
                "unitID": {
                    "description": "Unique ID",
                    "type": "integer"
                },
                "unitName": {
                    "description": "Unit name (building + - + description)",
                    "type": "string"
                },
                "building": {
                    "description": "Unit building",
                    "type": "string"
                },
                "description": {
                    "description": "Unit description",
                    "type": "string"
                },
                "customerID": {
                    "description": "customerID the unit belongs to.",
                    "type": "integer"
                }
            }
        },
        "unitSearchResponse": {
            "type": "object",
            "description": "The unitIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "unitIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for unit"
                    }
                }
            }
        },
        "timeClock": {
            "type": "object",
            "properties": {
                "entryID": {
                    "description": "Unique ID",
                    "type": "integer"
                },
                "employeeID": {
                    "description": "EmployeeID time clock entry applied to",
                    "type": "integer"
                },
                "officeID": {
                    "description": "officeID the time clock entry was made on",
                    "type": "integer"
                },
                "timeIn": {
                    "description": "Clock-in time in server time (PST)",
                    "type": "string"
                },
                "timeOut": {
                    "description": "Clock-Out time in server time (PST)",
                    "type": "string"
                },
                "clockCategoryID": {
                    "description": "Clock category ID that was used for this entry",
                    "type": "integer"
                },
                "paid": {
                    "description": "0 - time clock category is specified as unpaid, 1 - time clock category is specified as paid. If time clock category is specified as 0 or does not exist it is considered a paid entry.",
                    "type": "integer"
                }
            }
        },
        "timeClockSearchResponse": {
            "type": "object",
            "description": "The timeClockIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "timeClockIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for timeClock"
                    }
                }
            }
        },
        "timeClockCategory": {
            "type": "object",
            "properties": {
                "clockCategoryID": {
                    "description": "Primary key.",
                    "type": "integer"
                },
                "officeID": {
                    "description": null,
                    "type": "integer"
                },
                "visible": {
                    "description": "Visible to staff",
                    "type": "integer"
                },
                "allowOnClockIn": {
                    "description": "time clock category is allowed on initial clock in.",
                    "type": "integer"
                },
                "systemReserved": {
                    "description": "1 = system reserved category (cannot be deleted or changed)",
                    "type": "integer"
                },
                "paid": {
                    "description": "0 for unpaid categories, 1 for paid categories. Clock entries with no category association are considered paid.",
                    "type": "integer"
                },
                "dateUpdated": {
                    "description": "Date this category was last changed",
                    "type": "string"
                },
                "description": {
                    "description": "Description associated with the clock category",
                    "type": "integer"
                }
            }
        },
        "timeClockCategorySearchResponse": {
            "type": "object",
            "description": "The timeClockCategoryIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "timeClockCategoryIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for timeClockCategory"
                    }
                }
            }
        },
        "region": {
            "type": "object",
            "properties": {
                "regionIDs": {
                    "description": "Primary key",
                    "type": "integer"
                },
                "officeIDs": {
                    "description": "Office ID region belongs to",
                    "type": "integer"
                },
                "description": {
                    "description": "Description of the region",
                    "type": "string"
                },
                "created": {
                    "description": "Time the region was created",
                    "type": "string"
                },
                "deleted": {
                    "description": "Time the region was deleted",
                    "type": "string"
                },
                "points": {
                    "description": "latitude and longitude bounding points separated by colons",
                    "type": "string"
                },
                "type": {
                    "description": "",
                    "type": "string"
                },
                "active": {
                    "description": "Active status for the region.",
                    "type": "string"
                }
            }
        },
        "regionSearchResponse": {
            "type": "object",
            "description": "The regionIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "regionIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for region"
                    }
                }
            }
        },
        "task": {
            "type": "object",
            "properties": {
                "taskIDs": {
                    "description": "Primary key.",
                    "type": "integer"
                },
                "officeID": {
                    "description": "officeID of the task",
                    "type": "integer"
                },
                "customerID": {
                    "description": "customerID the task is related to",
                    "type": "integer"
                },
                "assignedTo": {
                    "description": "EmployeeID the task is assigned to",
                    "type": "integer"
                },
                "completedBy": {
                    "description": "EmployeeID who completed the task",
                    "type": "integer"
                },
                "type": {
                    "description": "Type of task: 0 - Alert, 1 - Task",
                    "type": "integer"
                },
                "dueDate": {
                    "description": "Time the task or alert is due.",
                    "type": "string"
                },
                "dateAdded": {
                    "description": "Time the task or alert was added.",
                    "type": "string"
                },
                "category": {
                    "description": "Category ID of the task.",
                    "type": "integer"
                },
                "categoryDescription": {
                    "description": "Category text of the task.",
                    "type": "integer"
                },
                "task": {
                    "description": "Text description of the task.",
                    "type": "string"
                },
                "completionNotes": {
                    "description": "Completion notes for the task.",
                    "type": "string"
                },
                "referenceID": {
                    "description": "ReferenceID for the task. (e.g. subscriptionID that it relates to) ",
                    "type": "integer"
                },
                "phone": {
                    "description": "Phone number associated with the task",
                    "type": "string"
                },
                "dateUpdated": {
                    "description": "Time the task was last updated.",
                    "type": "string"
                },
                "status": {
                    "description": "Status of the task. (0-Pending, 1-Completed, 2-In Use, 3-Urgent)",
                    "type": "string"
                }
            }
        },
        "taskSearchResponse": {
            "type": "object",
            "description": "The taskIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "taskIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for task"
                    }
                }
            }
        },
        "taskCreateResponse": {
            "type": "integer"
        },
        "taskUpdateResponse": {
            "type": "integer"
        },
        "employeeLocation": {
            "type": "object",
            "properties": {
                "locationID": {
                    "description": "Primary key.",
                    "type": "integer"
                },
                "employeeID": {
                    "description": "EmployeeID the location is assigned to",
                    "type": "integer"
                },
                "officeID": {
                    "description": null,
                    "type": "integer"
                },
                "time": {
                    "description": "time the location check-in took place",
                    "type": "integer"
                },
                "latitude": {
                    "description": "latitude of the check-in",
                    "type": "number"
                },
                "longitude": {
                    "description": "longitude of the check-in",
                    "type": "number"
                }
            }
        },
        "employeeLocationSearchResponse": {
            "type": "object",
            "description": "The employeeLocationIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "employeeLocationIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for employeeLocation"
                    }
                }
            }
        },
        "form": {
            "type": "object",
            "properties": {
                "formID": {
                    "description": null,
                    "type": "integer"
                },
                "customerID": {
                    "description": null,
                    "type": "integer"
                },
                "dateSigned": {
                    "description": "The date the form was signed.",
                    "type": "string"
                },
                "dateAdded": {
                    "description": "The date the form was added.",
                    "type": "string"
                },
                "unitID": {
                    "description": "The unitID associated with the form.",
                    "type": "integer"
                },
                "employeeID": {
                    "description": "The employeeID who created the form.",
                    "type": "integer"
                },
                "documentState": {
                    "description": "State of the document e.g. WIP, COMPLETED",
                    "type": "integer"
                },
                "formTemplateID": {
                    "description": "ID of the template this form was created from",
                    "type": "integer"
                },
                "formDescription": {
                    "description": "String description of the template the form was created from.",
                    "type": "string"
                }
            }
        },
        "formSearchResponse": {
            "type": "object",
            "description": "The formIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "formIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for form"
                    }
                }
            }
        },
        "product": {
            "type": "object",
            "properties": {
                "productID": {
                    "description": "Primary Key",
                    "type": "integer"
                },
                "officeID": {
                    "description": "OfficeID of the product; -1 is available to all offices.",
                    "type": "integer"
                },
                "description": {
                    "description": "Description of the product",
                    "type": "string"
                },
                "glAccountID": {
                    "description": "glAccountID of the product",
                    "type": "string"
                },
                "amount": {
                    "description": "Cost of each product",
                    "type": "number"
                },
                "taxable": {
                    "description": "Set as 1 if the product is taxable",
                    "type": "integer"
                },
                "code": {
                    "description": "Product Code (up to 10 characters)",
                    "type": "string"
                },
                "category": {
                    "description": "Product category",
                    "type": "string"
                },
                "visible": {
                    "description": "Whether or not the product is visible in lists when creating a new addon",
                    "type": "integer"
                },
                "salesVisible": {
                    "description": "Whether or not the product is visible on SalesRoutes",
                    "type": "integer"
                },
                "recurring": {
                    "description": "0 means it shows up only on the service it was added to, 1 means it shows up on every service ",
                    "type": "integer"
                }
            }
        },
        "productSearchResponse": {
            "type": "object",
            "description": "The productIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "productIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for product"
                    }
                }
            }
        },
        "productCreateResponse": {
            "type": "integer"
        },
        "productUpdateResponse": {
            "type": "integer"
        },
        "appointmentReminder": {
            "type": "object",
            "properties": {
                "reminderID": {
                    "description": "Primary Key",
                    "type": "integer"
                },
                "officeID": {
                    "description": "Office the reminder belongs to",
                    "type": "integer"
                },
                "appointmentID": {
                    "description": "appointmentID the reminder pertains to",
                    "type": "integer"
                },
                "text": {
                    "description": "Text of the reminder",
                    "type": "string"
                },
                "dateSent": {
                    "description": "Time the reminder was sent",
                    "type": "string"
                },
                "emailSent": {
                    "description": "Time email was sent",
                    "type": "string"
                },
                "voiceSent": {
                    "description": "Time voice message was sent",
                    "type": "string"
                },
                "status": {
                    "description": "-1 = don't send reminder, 0 = not sent, 1 = sent, 9 = confirmed",
                    "type": "integer"
                },
                "response": {
                    "description": "Response text received",
                    "type": "string"
                },
                "responseTime": {
                    "description": "Time response was received",
                    "type": "string"
                },
                "sendTo": {
                    "description": "Phone number for SMS",
                    "type": "string"
                },
                "emailAddress": {
                    "description": "Email address the reminder was sent to",
                    "type": "string"
                },
                "voiceNumber": {
                    "description": "Phone number for voice",
                    "type": "string"
                },
                "dateUpdated": {
                    "description": "Date that this appointmentReminder was last updated",
                    "type": "string"
                }
            }
        },
        "appointmentReminderSearchResponse": {
            "type": "object",
            "description": "The appointmentReminderIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "appointmentReminderIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for appointmentReminder"
                    }
                }
            }
        },
        "appointmentReminderCreateResponse": {
            "type": "integer"
        },
        "appointmentReminderUpdateResponse": {
            "type": "integer"
        },
        "paymentProfile": {
            "type": "object",
            "properties": {
                "paymentProfileID": {
                    "description": "Primary key for the paymentProfile",
                    "type": "integer"
                },
                "customerID": {
                    "description": "customer that the paymentProfile belongs to.",
                    "type": "integer"
                },
                "officeID": {
                    "description": "OfficeID of the customer that the paymentProfile belongs to.",
                    "type": "integer"
                },
                "createdBy": {
                    "description": "employeeID who created the paymentProfile",
                    "type": "integer"
                },
                "description": {
                    "description": "Payment profile description",
                    "type": "string"
                },
                "dateCreated": {
                    "description": "date the payment profile was created",
                    "type": "string"
                },
                "status": {
                    "description": "-1 = soft deleted, 0 = empty, 1 = valid, 2 = invalid, 3 = expired, 4 = last transaction failed",
                    "type": "integer"
                },
                "statusNotes": {
                    "description": "",
                    "type": "string"
                },
                "billingName": {
                    "description": "Name associated with the CC/Bank account",
                    "type": "string"
                },
                "billingAddress1": {
                    "description": "Address associated with the CC/Bank account",
                    "type": "string"
                },
                "billingAddress2": {
                    "description": "",
                    "type": "string"
                },
                "billingCountryID": {
                    "description": "Country associated with the CC/Bank account",
                    "type": "integer"
                },
                "billingCity": {
                    "description": "City associated with the CC/Bank account",
                    "type": "string"
                },
                "billingState": {
                    "description": "State associated with the CC/Bank account",
                    "type": "string"
                },
                "billingZip": {
                    "description": "Zip associated with the CC/Bank account",
                    "type": "string"
                },
                "billingPhone": {
                    "description": "Phone associated with the CC/Bank account",
                    "type": "string"
                },
                "billingEmail": {
                    "description": "email associated with the CC/Bank account",
                    "type": "string"
                },
                "paymentMethod": {
                    "description": "1=cc, 2 = ach",
                    "type": "integer"
                },
                "gateway": {
                    "description": "ACH or CC gateway E.G. authorize, nmi, brain, element",
                    "type": "string"
                },
                "merchantID": {
                    "description": "Credit card only",
                    "type": "string"
                },
                "merchantToken": {
                    "description": "Credit card only",
                    "type": "string"
                },
                "lastFour": {
                    "description": "Credit card only last four digits of the card",
                    "type": "string"
                },
                "expMonth": {
                    "description": "Credit card only - Expiration month",
                    "type": "string"
                },
                "expYear": {
                    "description": "Credit card only - Expiration year",
                    "type": "string"
                },
                "cardType": {
                    "description": "Credit card only e.g. Visa, Mastercard",
                    "type": "string"
                },
                "bankName": {
                    "description": "ACH only",
                    "type": "string"
                },
                "accountNumber": {
                    "description": "ACH only - masked account number",
                    "type": "string"
                },
                "routingNumber": {
                    "description": "ACH only - routing number",
                    "type": "string"
                },
                "checkType": {
                    "description": "ACH only - 0=checking, 1=savings",
                    "type": "integer"
                },
                "accountType": {
                    "description": "ACH only -  0=personal, 1=business",
                    "type": "integer"
                },
                "failedAttempts": {
                    "description": "",
                    "type": "integer"
                },
                "sentFailureDate": {
                    "description": "",
                    "type": "string"
                },
                "lastAttemptDate": {
                    "description": "",
                    "type": "string"
                },
                "paymentHoldDate": {
                    "description": "",
                    "type": "string"
                },
                "retryPoints": {
                    "description": "",
                    "type": "integer"
                },
                "initialTransactionID": {
                    "description": "",
                    "type": "string"
                },
                "lastDeclineType": {
                    "description": "",
                    "type": "string"
                }
            }
        },
        "paymentProfileSearchResponse": {
            "type": "object",
            "description": "The paymentProfileIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "paymentProfileIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for paymentProfile"
                    }
                }
            }
        },
        "paymentProfileCreateResponse": {
            "type": "integer"
        },
        "paymentProfileUpdateResponse": {
            "type": "integer"
        },
        "paymentProfileDeleteResponse": {
            "type": "integer"
        },
        "office": {
            "type": "object",
            "properties": {
                "officeID": {
                    "description": "Primary Key",
                    "type": "integer"
                },
                "officeName": {
                    "description": "Description of the product",
                    "type": "string"
                },
                "companyID": {
                    "description": "companyID of the office",
                    "type": "integer"
                }
            }
        },
        "officeSearchResponse": {
            "type": "object",
            "description": "The officeIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "officeIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for office"
                    }
                }
            }
        },
        "door": {
            "type": "object",
            "properties": {
                "doorID": {
                    "description": "doorID",
                    "type": "integer"
                },
                "lat": {
                    "description": "lat",
                    "type": "number"
                },
                "lng": {
                    "description": "lng",
                    "type": "number"
                },
                "timeCreated": {
                    "description": "timeCreated",
                    "type": "string"
                },
                "employeeID": {
                    "description": "employeeID",
                    "type": "integer"
                },
                "name": {
                    "description": "name",
                    "type": "string"
                },
                "address": {
                    "description": "address",
                    "type": "string"
                },
                "city": {
                    "description": "city",
                    "type": "string"
                },
                "state": {
                    "description": "state",
                    "type": "string"
                },
                "zip": {
                    "description": "zip",
                    "type": "string"
                },
                "phone": {
                    "description": "phone",
                    "type": "string"
                },
                "status": {
                    "description": "status",
                    "type": "integer"
                },
                "notes": {
                    "description": "notes",
                    "type": "string"
                },
                "email": {
                    "description": "email",
                    "type": "string"
                },
                "callbackTime": {
                    "description": "callbackTime",
                    "type": "string"
                },
                "knockCounter": {
                    "description": "knockCounter",
                    "type": "integer"
                },
                "countryID": {
                    "description": "countryID",
                    "type": "string"
                }
            }
        },
        "doorSearchResponse": {
            "type": "object",
            "description": "The doorIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "doorIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for door"
                    }
                }
            }
        },
        "knock": {
            "type": "object",
            "properties": {
                "knockID": {
                    "description": "Primary Key",
                    "type": "integer"
                },
                "type": {
                    "description": "0 - competitor, 1 - objection",
                    "type": "integer"
                },
                "doorID": {
                    "description": "",
                    "type": "integer"
                },
                "serviceID": {
                    "description": "",
                    "type": "integer"
                },
                "employeeID": {
                    "description": "",
                    "type": "integer"
                },
                "dateAdded": {
                    "description": "",
                    "type": "string"
                }
            }
        },
        "knockSearchResponse": {
            "type": "object",
            "description": "The knockIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "knockIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for knock"
                    }
                }
            }
        },
        "chemical": {
            "type": "object",
            "properties": {
                "chemicalID": {
                    "description": "",
                    "type": "integer"
                },
                "name": {
                    "description": "",
                    "type": "string"
                },
                "manufacturer": {
                    "description": "",
                    "type": "string"
                },
                "label": {
                    "description": "",
                    "type": "string"
                },
                "ingredient1": {
                    "description": "",
                    "type": "string"
                },
                "ingredient2": {
                    "description": "",
                    "type": "string"
                },
                "ingredient3": {
                    "description": "",
                    "type": "string"
                },
                "percent1": {
                    "description": "",
                    "type": "number"
                },
                "percent2": {
                    "description": "",
                    "type": "number"
                },
                "percent3": {
                    "description": "",
                    "type": "number"
                },
                "epaNumber": {
                    "description": "",
                    "type": "string"
                },
                "image": {
                    "description": "",
                    "type": "string"
                },
                "description": {
                    "description": "",
                    "type": "string"
                },
                "defaultDilution": {
                    "description": "",
                    "type": "number"
                },
                "concentratedUnit": {
                    "description": "",
                    "type": "string"
                },
                "dilutedUnit": {
                    "description": "",
                    "type": "string"
                },
                "inventoryUnit": {
                    "description": "",
                    "type": "string"
                },
                "applicationRate": {
                    "description": "",
                    "type": "string"
                },
                "links": {
                    "description": "",
                    "type": "string"
                },
                "msdsLink": {
                    "description": "",
                    "type": "string"
                },
                "measurementType": {
                    "description": "",
                    "type": "integer"
                },
                "visible": {
                    "description": "",
                    "type": "integer"
                },
                "defaultApplicationMethod": {
                    "description": "",
                    "type": "integer"
                },
                "officeID": {
                    "description": "",
                    "type": "integer"
                },
                "isBait": {
                    "description": "",
                    "type": "integer"
                },
                "sentriconBaitTypeID": {
                    "description": "",
                    "type": "integer"
                },
                "labelLink": {
                    "description": "",
                    "type": "string"
                },
                "mixRatioNumerator": {
                    "description": "",
                    "type": "number"
                },
                "mixRatioNumeratorUnit": {
                    "description": "",
                    "type": "string"
                },
                "mixRatioDenominator": {
                    "description": "",
                    "type": "number"
                },
                "mixRatioDenominatorUnit": {
                    "description": "",
                    "type": "string"
                },
                "activeIngredientRate": {
                    "description": "",
                    "type": "number"
                },
                "type": {
                    "description": "",
                    "type": "integer"
                },
                "availableToTermite": {
                    "description": "",
                    "type": "integer"
                },
                "pestControlCode": {
                    "description": "",
                    "type": "integer"
                }
            }
        },
        "chemicalSearchResponse": {
            "type": "object",
            "description": "The chemicalIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "chemicalIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for chemical"
                    }
                }
            }
        },
        "chemicalUse": {
            "type": "object",
            "properties": {
                "chemicalUseID": {
                    "description": "",
                    "type": "integer"
                },
                "chemicalID": {
                    "description": "",
                    "type": "integer"
                },
                "officeID": {
                    "description": "",
                    "type": "integer"
                },
                "appointmentID": {
                    "description": "",
                    "type": "integer"
                },
                "customerID": {
                    "description": "",
                    "type": "integer"
                },
                "dateCreated": {
                    "description": "",
                    "type": "string"
                },
                "createdBy": {
                    "description": "",
                    "type": "string"
                },
                "serviceID": {
                    "description": "",
                    "type": "integer"
                },
                "dilution": {
                    "description": "",
                    "type": "number"
                },
                "dosage": {
                    "description": "",
                    "type": "number"
                },
                "amount": {
                    "description": "",
                    "type": "number"
                },
                "concentratedAmount": {
                    "description": "",
                    "type": "number"
                },
                "concentratedUnit": {
                    "description": "",
                    "type": "string"
                },
                "unit": {
                    "description": "",
                    "type": "string"
                },
                "targetInsects": {
                    "description": "",
                    "type": "string"
                },
                "locationsTreated": {
                    "description": "",
                    "type": "string"
                },
                "applicationMethod": {
                    "description": "",
                    "type": "integer"
                },
                "squareFoot": {
                    "description": "",
                    "type": "integer"
                },
                "structureID": {
                    "description": "",
                    "type": "integer"
                },
                "mixRatioNumerator": {
                    "description": "",
                    "type": "number"
                },
                "mixRatioNumeratorUnit": {
                    "description": "",
                    "type": "string"
                },
                "mixRatioDenominator": {
                    "description": "",
                    "type": "number"
                },
                "mixRatioDenominatorUnit": {
                    "description": "",
                    "type": "string"
                },
                "activeIngredientRate": {
                    "description": "",
                    "type": "number"
                },
                "epaLot": {
                    "description": "",
                    "type": "string"
                },
                "pestControlCode": {
                    "description": "",
                    "type": "integer"
                }
            }
        },
        "chemicalUseSearchResponse": {
            "type": "object",
            "description": "The chemicalUseIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "chemicalUseIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for chemicalUse"
                    }
                }
            }
        },
        "group": {
            "type": "object",
            "properties": {
                "groupID": {
                    "description": "",
                    "type": "integer"
                }
            }
        },
        "groupSearchResponse": {
            "type": "object",
            "description": "The groupIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "groupIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for group"
                    }
                }
            }
        },
        "groupCreateResponse": {
            "type": "integer"
        },
        "groupUpdateResponse": {
            "type": "integer"
        },
        "insect": {
            "type": "object",
            "properties": {
                "insectID": {
                    "description": "",
                    "type": "integer"
                },
                "officeID": {
                    "description": "",
                    "type": "integer"
                },
                "name": {
                    "description": "",
                    "type": "string"
                },
                "family": {
                    "description": "",
                    "type": "string"
                },
                "threat": {
                    "description": "",
                    "type": "string"
                },
                "fact": {
                    "description": "",
                    "type": "string"
                },
                "about1": {
                    "description": "",
                    "type": "string"
                },
                "about2": {
                    "description": "",
                    "type": "string"
                },
                "aboutBlurb": {
                    "description": "",
                    "type": "string"
                },
                "funFacts": {
                    "description": "",
                    "type": "string"
                },
                "factBlurb": {
                    "description": "",
                    "type": "string"
                },
                "image": {
                    "description": "",
                    "type": "string"
                },
                "visible": {
                    "description": "",
                    "type": "integer"
                },
                "system": {
                    "description": "",
                    "type": "integer"
                }
            }
        },
        "insectSearchResponse": {
            "type": "object",
            "description": "The insectIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "insectIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for insect"
                    }
                }
            }
        },
        "location": {
            "type": "object",
            "properties": {
                "locationID": {
                    "description": "",
                    "type": "integer"
                },
                "officeID": {
                    "description": "",
                    "type": "integer"
                },
                "name": {
                    "description": "",
                    "type": "string"
                },
                "visible": {
                    "description": "",
                    "type": "integer"
                },
                "system": {
                    "description": "",
                    "type": "integer"
                }
            }
        },
        "locationSearchResponse": {
            "type": "object",
            "description": "The locationIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "locationIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for location"
                    }
                }
            }
        },
        "applicationMethod": {
            "type": "object",
            "properties": {
                "applicationMethodID": {
                    "description": "",
                    "type": "integer"
                },
                "officeID": {
                    "description": "",
                    "type": "integer"
                },
                "applicationMethod": {
                    "description": "",
                    "type": "string"
                },
                "visible": {
                    "description": "",
                    "type": "integer"
                },
                "systemReserved": {
                    "description": "",
                    "type": "integer"
                }
            }
        },
        "applicationMethodSearchResponse": {
            "type": "object",
            "description": "The applicationMethodIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "applicationMethodIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for applicationMethod"
                    }
                }
            }
        },
        "glAccount": {
            "type": "object",
            "properties": {
                "glAccountID": {
                    "description": null,
                    "type": "integer"
                },
                "glNumber": {
                    "description": null,
                    "type": "integer"
                },
                "officeID": {
                    "description": null,
                    "type": "integer"
                },
                "title": {
                    "description": null,
                    "type": "string"
                },
                "description": {
                    "description": null,
                    "type": "string"
                },
                "visible": {
                    "description": null,
                    "type": "integer"
                }
            }
        },
        "glAccountSearchResponse": {
            "type": "object",
            "description": "The glAccountIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "glAccountIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for glAccount"
                    }
                }
            }
        },
        "cancellationReason": {
            "type": "object",
            "properties": {
                "reasonID": {
                    "description": null,
                    "type": "integer"
                },
                "officeID": {
                    "description": null,
                    "type": "integer"
                },
                "visible": {
                    "description": "Used by the FieldRoutes application to hide/show reasons from staff",
                    "type": "integer"
                },
                "systemReserved": {
                    "description": "Used by the FieldRoutes application to specify fixed system actions",
                    "type": "integer"
                },
                "reason": {
                    "description": "Description of the cancellation reason",
                    "type": "string"
                }
            }
        },
        "cancellationReasonSearchResponse": {
            "type": "object",
            "description": "The cancellationReasonIDs object contains an array of IDs matching the search parameters.",
            "properties": {
                "cancellationReasonIDs": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "description": "unique ID for cancellationReason"
                    }
                }
            }
        }
    },
    "securityDefinitions": {
        "authenticationToken": {
            "name": "authenticationToken",
            "type": "apiKey",
            "in": "query"
        },
        "authenticationKey": {
            "name": "authenticationKey",
            "type": "apiKey",
            "in": "query"
        }
    }
};