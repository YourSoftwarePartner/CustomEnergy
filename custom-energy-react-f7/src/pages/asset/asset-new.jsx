import React, {useState, useEffect} from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, f7, useStore , Button} from 'framework7-react';
import { newAssetForm } from '../../../mock/form-data/newAssetForm';
import store from '../../js/store';

const AssetNew = ({f7route}) => {
    const [formConfig, setFormConfig] = useState();
    const [clientId, setClientId] = useState("");

    const clients = useStore('clients');
    const currentClient = clients.find((client) => client.id === parseInt(f7route.params.clientId, 10));

    const handleFormSubmit = (event) => {
      const formData = event.detail;
      
      console.log('Form submitted with data:', formData);
      
      const assetData = {
        ...formData
      };

      store.dispatch('addAsset', assetData).then((asset) => {
        if (asset && asset.id) {
          console.log('Asset added:', asset);
          updateClientAssets(asset);
          f7.views.main.router.back();
        }
      });
    };

    const updateClientAssets = (asset) => {
      const clientData = {
        ...currentClient,
        assets: [...currentClient.assets, asset.id]
      };

      store.dispatch('updateClient', clientData);
    }

    useEffect(() => {
      setFormConfig(newAssetForm);
      const clientIdParam = f7route.params.clientId;
      setClientId(clientIdParam);

      window.addEventListener('formSubmit', handleFormSubmit);
      return () => {
        window.removeEventListener('formSubmit', handleFormSubmit);
      };
    }, [f7route.params]);
    
    return (
    <Page>
        { formConfig ?
        <DynamicForm formTitle={`${currentClient.name} - New Asset`} formConfig={formConfig}></DynamicForm>
        : <div>Loading...</div>
        }
    </Page>
    )
    
}

export default AssetNew;