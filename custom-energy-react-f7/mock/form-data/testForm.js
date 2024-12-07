export const testFormData = {
    "config": {
        "title": "Form Title"
    },
    "fields": [
        {
            "id": "1",
            "type": "text",
            "label": "Text Input",
            "placeholder": "Enter text",
            "required": true,
            "defaultValue": "",
            "description": "This is a text input field",
            "attributes": {
                "maxlength": 100
            },
            "visibilityConditions": {
                "fieldId": "2",
                "operator": "==",
                "value": "show"
            }
        },
        {
            "id": "2",
            "type": "number",
            "label": "Number Input",
            "placeholder": "Enter number",
            "required": false,
            "defaultValue": 0,
            "description": "This is a number input field",
            "attributes": {
                "min": 0,
                "max": 100
            },
            "visibilityConditions": {}
        },
        {
            "id": "3",
            "type": "email",
            "label": "Email Input",
            "placeholder": "Enter email",
            "required": true,
            "defaultValue": "",
            "description": "This is an email input field",
            "attributes": {},
            "visibilityConditions": {}
        },
        {
            "id": "4",
            "type": "password",
            "label": "Password Input",
            "placeholder": "Enter password",
            "required": true,
            "defaultValue": "",
            "description": "This is a password input field",
            "attributes": {
                "maxlength": 50
            },
            "visibilityConditions": {}
        },
        {
            "id": "5",
            "type": "date",
            "label": "Date Input",
            "placeholder": "Select date",
            "required": false,
            "defaultValue": "",
            "description": "This is a date input field",
            "attributes": {},
            "visibilityConditions": {}
        },
        {
            "id": "6",
            "type": "checkbox",
            "label": "Checkbox",
            "required": false,
            "defaultValue": false,
            "description": "This is a checkbox",
            "attributes": {},
            "visibilityConditions": {}
        },
        {
            "id": "7",
            "type": "radio",
            "label": "Radio Button",
            "options": ["Option 1", "Option 2"],
            "required": true,
            "defaultValue": "Option 1",
            "description": "This is a radio button",
            "attributes": {},
            "visibilityConditions": {}
        },
        {
            "id": "8",
            "type": "select",
            "label": "Select Dropdown",
            "options": ["Option 1", "Option 2"],
            "required": true,
            "defaultValue": "Option 1",
            "description": "This is a select dropdown",
            "attributes": {},
            "visibilityConditions": {}
        },
        {
            "id": "9",
            "type": "textarea",
            "label": "Textarea",
            "placeholder": "Enter text",
            "required": false,
            "defaultValue": "",
            "description": "This is a textarea",
            "attributes": {
                "maxlength": 500
            },
            "visibilityConditions": {}
        },
        {
            "id": "10",
            "type": "file",
            "label": "File Upload",
            "required": false,
            "defaultValue": "",
            "description": "This is a file upload",
            "attributes": {},
            "visibilityConditions": {}
        }
    ]
}