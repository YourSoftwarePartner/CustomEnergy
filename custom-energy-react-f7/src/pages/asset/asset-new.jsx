import React, {useState, useEffect} from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, f7 } from 'framework7-react';
import { testFormData } from '../../../mock/form-data/testForm'


const AssetNew = ({f7route}) => {
    const [formConfig, setFormConfig] = useState();
    const [clientId, setClientId] = useState("");

    useEffect(() => {
      setFormConfig(testFormData);
      const clientIdParam = f7route.params.clientId;
      setClientId(clientIdParam);

      return () => {};
    }, [f7route.params]);
    
    return formConfig ? 
    <Page>
        <Navbar title={`${clientId} - New Asset`} backLink="Back" />
        <DynamicForm formConfig={formConfig}></DynamicForm>
    </Page>
    : <div>Loading...</div>
}

export default AssetNew;