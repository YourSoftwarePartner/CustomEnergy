import React, { useState, useEffect } from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, Button } from 'framework7-react';
import { newClientFormData } from '../../../mock/form-data/newClientForm'
import store from '../../js/store';

const ClientNew = () => {
  const [formConfig, setFormConfig] = useState();

  useEffect(() => {
    setFormConfig(newClientFormData);

    const handleFormSubmit = (event) => {
      const formData = event.detail;
      
      console.log('Form submitted with data:', formData);
      
      const clientData = {
        name: formData.name,
        description: formData.description,
        contacts: [],
        assets: [],
        engineers: []
      };
      const contactData = {
        name: formData.contactName,
        phonenumber: formData.contactNumber
      };

      store.dispatch('addClient', clientData);
      store.dispatch('addContact', contactData);
    };

    window.addEventListener('formSubmit', handleFormSubmit);
    
    return () => {
      window.removeEventListener('formSubmit', handleFormSubmit);
    };
  }, []);

  // Split out contact information and client information and call addClient in store...


  return (
    <Page name="new client">
      {formConfig ?
        <DynamicForm formConfig={formConfig}></DynamicForm> :
        <div>Loading...</div>
      }
    </Page>
  )
}

export default ClientNew;