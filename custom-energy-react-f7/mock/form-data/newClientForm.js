export const newClientFormData = {
    "config": {
        "title": "New Client"
    },
    "fields": [
        {
            "id": "name",
            "type": "text",
            "label": "Client Name",
            "placeholder": "Enter client name",
            "required": true,
            "defaultValue": "",
            "description": "Client name...",
            "attributes": {
                "maxlength": 100
            },
            "visibilityConditions": {}
        },
        {
            "id": "description",
            "type": "text",
            "label": "Description",
            "placeholder": "Enter client description",
            "required": false,
            "defaultValue": "",
            "description": "",
            "attributes": {
                "maxlength": 100
            },
            "visibilityConditions": {}
        },
        {
            "id": "contactName",
            "type": "text",
            "label": "Primary Contact Name",
            "placeholder": "Enter primary contact name",
            "required": true,
            "defaultValue": "",
            "description": "Contact name for the primary contact...",
            "attributes": {
                "min": 0,
                "max": 100
            },
            "visibilityConditions": {}
        },
        {
            "id": "contactNumber",
            "type": "text",
            "label": "Primary Contact Phone",
            "placeholder": "Enter primary contact phone",
            "required": true,
            "defaultValue": "",
            "description": "Phone number for the primary contact...",
            "attributes": {
                "maxlength": 10
            },
            "visibilityConditions": {}
        },
        {
            "id": "contactEmail",
            "type": "email",
            "label": "Primary Contact Email",
            "placeholder": "Enter primary contact email",
            "required": true,
            "defaultValue": "",
            "description": "Email address for the primary contact...",
            "attributes": {},
            "visibilityConditions": {}
        }
    ]
}