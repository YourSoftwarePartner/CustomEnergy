export const newAssetForm = {
    "config": {
      "title": "New Asset"
    },
    "fields": [
      {
        "id": "type",
        "type": "select",
        "label": "Type",
        "options": ["LV cabinet", "Transformer", "Switchgear"],
        "required": true,
        "defaultValue": "LV cabinet",
        "description": "Select the type of equipment",
        "attributes": {},
        "visibilityConditions": {}
      },
      {
        "id": "make",
        "type": "text",
        "label": "Make",
        "placeholder": "Enter make",
        "required": true,
        "defaultValue": "",
        "description": "This is the make of the equipment",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "in",
          "value": ["LV cabinet", "Transformer", "Switchgear"]
        }
      },
      {
        "id": "typeDetail",
        "type": "text",
        "label": "Type",
        "placeholder": "Enter type",
        "required": true,
        "defaultValue": "",
        "description": "This is the type of the equipment",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "in",
          "value": ["LV cabinet", "Transformer", "Switchgear"]
        }
      },
      {
        "id": "serialNumber",
        "type": "text",
        "label": "Serial Number",
        "placeholder": "Enter serial number",
        "required": true,
        "defaultValue": "",
        "description": "This is the serial number of the equipment",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "in",
          "value": ["LV cabinet", "Transformer", "Switchgear"]
        }
      },
      {
        "id": "busbarRating",
        "type": "number",
        "label": "Busbar Rating",
        "placeholder": "Enter busbar rating",
        "required": true,
        "defaultValue": 0,
        "description": "This is the busbar rating of the LV cabinet",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "==",
          "value": "LV cabinet"
        }
      },
      {
        "id": "numberOfLvWays",
        "type": "number",
        "label": "Number of LV Ways",
        "placeholder": "Enter number of LV ways",
        "required": true,
        "defaultValue": 0,
        "description": "This is the number of LV ways in the LV cabinet",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "==",
          "value": "LV cabinet"
        }
      },
      {
        "id": "year",
        "type": "number",
        "label": "Year",
        "placeholder": "Enter year",
        "required": true,
        "defaultValue": new Date().getFullYear(),
        "description": "This is the year of manufacture",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "in",
          "value": ["LV cabinet", "Switchgear"]
        }
      },
      {
        "id": "kva",
        "type": "number",
        "label": "KVA",
        "placeholder": "Enter KVA",
        "required": true,
        "defaultValue": 0,
        "description": "This is the KVA rating of the transformer",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "==",
          "value": "Transformer"
        }
      },
      {
        "id": "impedance",
        "type": "number",
        "label": "Impedance %",
        "placeholder": "Enter impedance %",
        "required": true,
        "defaultValue": 0,
        "description": "This is the impedance percentage of the transformer",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "==",
          "value": "Transformer"
        }
      },
      {
        "id": "numberOfTaps",
        "type": "number",
        "label": "Number of Taps",
        "placeholder": "Enter number of taps",
        "required": true,
        "defaultValue": 0,
        "description": "This is the number of taps in the transformer",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "==",
          "value": "Transformer"
        }
      },
      {
        "id": "totalWeight",
        "type": "number",
        "label": "Total Weight",
        "placeholder": "Enter total weight",
        "required": true,
        "defaultValue": 0,
        "description": "This is the total weight of the transformer",
        "attributes": {},
        "visibilityConditions": {
          "fieldId": "type",
          "operator": "==",
          "value": "Transformer"
        }
      }
    ]
  };