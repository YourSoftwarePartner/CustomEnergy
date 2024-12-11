export const newEngineerFormData = {
    "config": {
      "title": "New Engineer"
    },
    "fields": [
      {
        "id": "name",
        "type": "text",
        "label": "Name",
        "placeholder": "Enter full name",
        "required": true,
        "defaultValue": "",
        "description": "Enter the engineer's full name",
        "attributes": {
          "maxlength": 100
        },
        "visibilityConditions": {}
      },
      {
        "id": "phoneNumber",
        "type": "text",
        "label": "Phone Number",
        "placeholder": "Enter phone number",
        "required": true,
        "defaultValue": "",
        "description": "Enter the engineer's phone number",
        "attributes": {
          "maxlength": 15
        },
        "visibilityConditions": {}
      },
      {
        "id": "email",
        "type": "email",
        "label": "Email",
        "placeholder": "Enter email",
        "required": true,
        "defaultValue": "",
        "description": "Enter the engineer's email address",
        "attributes": {
          "maxlength": 100
        },
        "visibilityConditions": {}
      },
      {
        "id": "role",
        "type": "select",
        "label": "Role",
        "options": ["Engineer", "Manager", "Technician"],
        "placeholder": "Select role",
        "required": true,
        "defaultValue": "",
        "description": "Select the engineer's role",
        "attributes": {
          "maxlength": 50
        },
        "visibilityConditions": {}
      },
      {
        "id": "jobTitle",
        "type": "text",
        "label": "Job Title",
        "placeholder": "Enter job title",
        "required": true,
        "defaultValue": "",
        "description": "Enter the engineer's job title",
        "attributes": {
          "maxlength": 50
        },
        "visibilityConditions": {}
      }
    ]
  };