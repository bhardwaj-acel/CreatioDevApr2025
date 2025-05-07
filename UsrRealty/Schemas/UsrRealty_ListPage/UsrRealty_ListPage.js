define("UsrRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealty"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 202
						},
						{
							"id": "07037c06-cf81-381d-e2f8-4a02b7ec18f6",
							"code": "PDS_UsrType",
							"caption": "#ResourceString(PDS_UsrType)#",
							"dataValueType": 10,
							"width": 143
						},
						{
							"id": "07cc3353-4717-0f4d-60c5-fada0ca8f484",
							"code": "PDS_UsrOfferType",
							"caption": "#ResourceString(PDS_UsrOfferType)#",
							"dataValueType": 10
						},
						{
							"id": "244bd6f6-35ea-cb39-e0ff-ee996e9c4a3a",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 187
						},
						{
							"id": "c6332421-6476-f67a-c96a-2da7cbc3d00f",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "insert",
				"name": "WidgetAverageSalesPrice",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(WidgetAverageSalesPrice_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_l8p568r_Data",
								"schemaName": "UsrRealty",
								"filters": {
									"filter": {
										"items": {
											"fdab3dff-17b8-42a9-8368-10a912df40c6": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrOfferType"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrRealtyOfferType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "1. Sale",
																"Id": "b8e2bbe8-cba8-4b67-b4e9-48f8047ef179",
																"value": "b8e2bbe8-cba8-4b67-b4e9-48f8047ef179",
																"displayValue": "1. Sale"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrRealty"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "UsrPrice"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(WidgetAverageSalesPrice_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "light-blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WidgetAverageRentalPrice",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(WidgetAverageRentalPrice_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_65ysz91_Data",
								"schemaName": "UsrRealty",
								"filters": {
									"filter": {
										"items": {
											"11c5eed3-c0e3-4632-95e2-6f7f17681a71": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "UsrOfferType"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "UsrRealtyOfferType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "2. Rental",
																"Id": "dcbae2ff-5652-46eb-8c3a-265185099ef1",
																"value": "dcbae2ff-5652-46eb-8c3a-265185099ef1",
																"displayValue": "2. Rental"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "UsrRealty"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "UsrPrice"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(WidgetAverageRentalPrice_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "light-green"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrType": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRealty",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrType": {
							"path": "UsrType"
						},
						"UsrOfferType": {
							"path": "UsrOfferType"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});