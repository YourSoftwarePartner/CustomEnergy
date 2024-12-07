import React, {useState, useEffect} from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, f7, Button, useStore, ListItem, List, Block, Subnavbar, Searchbar, BlockTitle } from 'framework7-react';
import { testFormData } from '../../../mock/form-data/testForm'


const AssetManager = ({f7route}) => {
    const [clientId, setClientId] = useState("");
    const [client, setClient] = useState();
    const [clientAssets, setClientAssets] = useState([]);

    const clients = useStore('clients');
    const currentClient = clients.find((client) => client.id === parseInt(f7route.params.clientId, 10));
    
    const assets = useStore('assets');

    useEffect(() => {
        const clientIdParam = f7route.params.clientId;
        setClientId(clientIdParam);

        setClientAssets(assets.filter(asset => asset.clientId === clientIdParam));

        return () => {};
    }, [f7route.params]);
    
    return (
    <Page>
        <Navbar title={`${currentClient.name} - Asset Manager`} backLink="Back">
            <Subnavbar inner={false}>
                <Searchbar searchContainer=".search-list" searchIn=".item-title" />
            </Subnavbar>
        </Navbar>
        <Block>
            <Button fill raised href={`new`}>New Asset</Button>
        </Block>
        <BlockTitle medium>Assets</BlockTitle>
        <List>
            { clientAssets?.length > 0 ? 
            clientAssets.map((asset) => (
                <ListItem key={asset.id} title={asset.name} link={`/asset/${asset.id}/`} />
            ))
            : 
            <Block strong>
                <p>No assets found.</p>
            </Block>
            }
        </List>
    </Page>
    )
    
}

export default AssetManager;