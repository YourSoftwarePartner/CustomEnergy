import { useState } from "react";
import { Page, Navbar, BlockTitle, List, ListInput, Button, ListItem, Radio, Checkbox } from 'framework7-react';

const DynamicForm = ({ formConfig }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (id, value) => {
        setFormData({ ...formData, [id]: value });
    };

    const renderField = (field) => {
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
                        onInput={(e) => handleChange(field.id, e.target.value)}
                    />
                );
            case 'checkbox':
                return (
                    <ListItem key={field.id} checkbox title={field.label}>
                    </ListItem>
                );
            case 'radio':
                return (
                    <List key={field.id}>
                        <ListItem title={field.label} groupTitle />
                        {field.options.map((option, index) => (
                            <ListItem key={index} radio title={option}>
                            </ListItem>
                        ))}
                    </List>
                );
            case 'toggle':
                return (
                    <ListItem title={field.label}>
                        <Toggle slot="after" />
                    </ListItem>
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
            case 'file':
                return (
                    <ListInput
                        key={field.id}
                        type="file"
                        label={field.label}
                        required={field.required}
                        info={field.description}
                        onInput={(e) => handleChange(field.id, e.target.files[0])}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <BlockTitle>Fill in the form</BlockTitle>
            <List form>
                {formConfig.fields.map(field => renderField(field))}
            </List>
            <Button fill>Submit</Button>
        </div>
    );
};

export default DynamicForm;