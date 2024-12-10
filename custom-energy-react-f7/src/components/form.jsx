import React from "react";

import { useState } from "react";
import { Page, Navbar, BlockTitle, List, ListInput, Button, ListItem, Radio, Checkbox } from 'framework7-react';

const DynamicForm = ({ formConfig }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (id, value) => {
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = new CustomEvent('formSubmit', { detail: formData });
        window.dispatchEvent(event);
    };

    const checkVisibility = (field) => {
        const { visibilityConditions } = field;
        if (!visibilityConditions || !visibilityConditions.fieldId) {
            return true;
        }
        const { fieldId, operator, value } = visibilityConditions;
        const fieldValue = formData[fieldId];

        switch (operator) {
            case '==':
                return fieldValue === value;
            case '!=':
                return fieldValue !== value;
            case 'in':
                return Array.isArray(value) && value.includes(fieldValue);
            case 'notin':
                return Array.isArray(value) && !value.includes(fieldValue);
            default:
                return true;
        }
    };

    const renderField = (field) => {
        if (!checkVisibility(field)) {
            return null;
        }

        switch (field.type) {
            case 'text':
            case 'number':
            case 'email':
            case 'password':
            case 'date':
            case 'textarea':
                return (
                    <ListInput
                        key={field.id}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        required={field.required}
                        defaultValue={field.defaultValue}
                        info={field.description}
                        {...field.attributes}
                        outline='true'
                        onInput={(e) => handleChange(field.id, e.target.value)}
                    />
                );
            case 'select':
                return (
                    <ListInput
                        key={field.id}
                        type="select"
                        label={field.label}
                        required={field.required}
                        defaultValue={field.defaultValue}
                        info={field.description}
                        onInput={(e) => handleChange(field.id, e.target.value)}
                    >
                        {field.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </ListInput>
                );
            case 'checkbox':
                return (
                    <ListItem
                        key={field.id}
                        checkbox
                        title={field.label}
                        name={field.id}
                        value={field.defaultValue}
                        onChange={(e) => handleChange(field.id, e.target.checked)}
                    />
                );
            case 'radio':
                return (
                    <List key={field.id}>
                        <BlockTitle>{field.label}</BlockTitle>
                        {field.options.map((option, index) => (
                            <ListItem
                                key={index}
                                radio
                                name={field.id}
                                value={option}
                                title={option}
                                checked={field.defaultValue === option}
                                onChange={(e) => handleChange(field.id, e.target.value)}
                            />
                        ))}
                    </List>
                );
            default:
                return null;
        }
    };

    return (
        <Page>
            <Navbar title={formConfig.config.title} backLink="Back" />
            <form onSubmit={handleSubmit}>
                <List>
                    {formConfig.fields.map(field => renderField(field))}
                </List>
                
            </form>
        </Page>
    );
};

export default DynamicForm;