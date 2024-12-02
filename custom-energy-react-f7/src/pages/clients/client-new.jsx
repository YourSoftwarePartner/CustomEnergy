import React, {useState, useEffect} from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar } from 'framework7-react';
import { newClientFormData } from '../../../mock/form-data/newClientForm'


const ClientNew = () => {
    const [formConfig, setFormConfig] = useState();

    useEffect(() => {
      setFormConfig(newClientFormData);
      return () => {};
    }, []);

    // Split out contact information and client information and call addClient in store...
    
    return formConfig ? 
    <Page>
        <Navbar title={`New Client`} backLink="Back" />
        <DynamicForm formConfig={formConfig}></DynamicForm>
    </Page>
    : <div>Loading...</div>
}

export default ClientNew;