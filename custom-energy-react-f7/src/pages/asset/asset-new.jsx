import React, {useState, useEffect} from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, f7, useStore } from 'framework7-react';
import { newAssetForm } from '../../../mock/form-data/newAssetForm';


const AssetNew = ({f7route}) => {
    const [formConfig, setFormConfig] = useState();
    const [clientId, setClientId] = useState("");

    const clients = useStore('clients');
    const currentClient = clients.find((client) => client.id === parseInt(f7route.params.clientId, 10));

    useEffect(() => {
      setFormConfig(newAssetForm);
      const clientIdParam = f7route.params.clientId;
      setClientId(clientIdParam);

      return () => {};
    }, [f7route.params]);
    
    return (
    <Page>
        <Navbar title={`${currentClient.name} - New Asset`} backLink="Back" />
        { formConfig ?
        <DynamicForm formConfig={formConfig}></DynamicForm>
        : <div>Loading...</div>
        }
    </Page>
    )
    
}

export default AssetNew;