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
    
    return (
    <Page name="new client">
        <Navbar title={`New Client`} backLink="Back" />
        { formConfig ? 
        <DynamicForm formConfig={formConfig}></DynamicForm> :
        <div>Loading...</div>
        }
    </Page>
    )
}

export default ClientNew;