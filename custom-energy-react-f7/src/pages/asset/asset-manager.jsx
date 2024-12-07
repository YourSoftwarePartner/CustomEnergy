import React, {useState, useEffect} from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, f7 } from 'framework7-react';
import { testFormData } from '../../../mock/form-data/testForm'


const AssetManager = ({f7route}) => {
    const [formConfig, setFormConfig] = useState();
    const [clientId, setClientId] = useState("");

    useEffect(() => {
        const clientIdParam = f7route.params.clientId;
        setClientId(clientIdParam);

        return () => {};
    }, [f7route.params]);
    
    return (
    <Page>
        <Navbar title={`${clientId} - Asset Manager`} backLink="Back" />
        
    </Page>
    )
    
}

export default AssetManager;