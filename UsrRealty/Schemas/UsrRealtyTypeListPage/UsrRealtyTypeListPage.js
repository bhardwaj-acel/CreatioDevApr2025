define("UsrRealtyTypeListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "FolderTreeActions",
				"values": {
					"folderTree": null
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": null,
						"defaultValue": []
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				}
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "c58ed0e3-3672-ff14-68d5-ebd227eb4bd1",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "0421bfef-9231-4e89-405f-d804375bdfcd",
							"code": "PDS_Description",
							"caption": "#ResourceString(PDS_Description)#",
							"dataValueType": 28,
							"width": 209
						},
						{
							"id": "c2172d2b-4466-7628-c890-be909b035637",
							"code": "PDS_UsrRecordColor",
							"caption": "#ResourceString(PDS_UsrRecordColor)#",
							"dataValueType": 18
						},
						{
							"id": "6cf5e989-c0a5-6517-4908-257b3d7e2746",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Items_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_Description": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"PDS_UsrRecordColor": {
						"modelConfig": {
							"path": "PDS.UsrRecordColor"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"loadOnChange": true,
							"name": "Items_PredefinedFilter"
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"FolderTree_visible"
				],
				"values": {
					"modelConfig": {}
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
					"entitySchemaName": "UsrRealtyType",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"Description": {
							"path": "Description"
						},
						"UsrRecordColor": {
							"path": "UsrRecordColor"
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