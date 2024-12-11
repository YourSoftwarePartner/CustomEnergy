import React, { useState, useEffect } from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, useStore } from 'framework7-react';
import store from '../../js/store';
import { newEngineerFormData } from '../../../mock/form-data/newEngineerForm';

const EngineersNew = (props) => {
  const [formConfig, setFormConfig] = useState();

  // const clients = useStore('clients');
  // const currentClient = clients.find((client) => client.id === parseInt(props.f7route.params.clientId, 10));

  useEffect(() => {
    setFormConfig(newEngineerFormData);

    const handleFormSubmit = (event) => {
      const formData = event.detail;
      
      console.log('Form submitted with data:', formData);
      
      const engineerData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        role: formData.role,
        jobTitle: formData.jobTitle,
      };
      // const clientData = {
      //   ...currentClient,
      //   engineers: [...currentClient.engineers, engineerData.id]
      // };

      store.dispatch('addEngineer', engineerData).then((engineer) => {
        if (engineer && engineer.id) {
          console.log('Engineer added:', engineer);
          // store.dispatch('updateClient', clientData);
        }
      });
    };

    window.addEventListener('formSubmit', handleFormSubmit);
    
    return () => {
      window.removeEventListener('formSubmit', handleFormSubmit);
    };
  }, []);

  return (
    <Page name="New Engineer">
      {formConfig ?
        <DynamicForm formConfig={formConfig}></DynamicForm> :
        <div>Loading...</div>
      }
    </Page>
  )
}

export default EngineersNew;