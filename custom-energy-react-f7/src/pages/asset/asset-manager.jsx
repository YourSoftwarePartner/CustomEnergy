import React, { useState, useEffect } from 'react';
import DynamicForm from '../../components/form';
import { Page, Navbar, f7, Button, useStore, ListItem, List, Block, Subnavbar, Searchbar, BlockTitle, Sheet } from 'framework7-react';
import { testFormData } from '../../../mock/form-data/testForm'


const AssetManager = ({ f7route }) => {
    const [clientId, setClientId] = useState("");
    const [client, setClient] = useState();
    const [clientAssets, setClientAssets] = useState([]);

    const [sheetOpened, setSheetOpened] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);

    const clients = useStore('clients');
    const currentClient = clients.find((client) => client.id === parseInt(f7route.params.clientId, 10));

    const assets = useStore('assets');

    useEffect(() => {
        const clientIdParam = f7route.params.clientId;
        setClientId(clientIdParam);

        setClientAssets(assets.filter(asset => currentClient.assets.includes(asset.id)));

        return () => { };
    }, [f7route.params]);

    const handleAssetClick = (asset) => {
        setSelectedAsset(asset);
        setSheetOpened(true);
    }

    const toggleSwipeStep = () => {
        f7.sheet.stepToggle('.demo-sheet-swipe-to-step');
    };

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
                {clientAssets?.length > 0 ?
                    clientAssets.map((asset) => (
                        <ListItem key={asset.id} title={asset.make} subtitle={asset.type} link onClick={() => handleAssetClick(asset)} />
                    ))
                    :
                    <Block strong>
                        <p>No assets found.</p>
                    </Block>
                }
            </List>

            <Sheet
                className="demo-sheet-swipe-to-step"
                style={{ height: 'auto' }}
                opened={sheetOpened}
                swipeToClose
                swipeToStep
                push
                backdrop
                onSheetClosed={() => setSheetOpened(false)}
            >
                <div className="swipe-handler" onClick={() => toggleSwipeStep()}></div>
                <div className="sheet-modal-swipe-step">
                    <Block>
                        <div className="p-6">
                            <p className="text-lg font-semibold mb-2">
                                {`${selectedAsset?.make} - ${selectedAsset?.type}`}
                            </p>
                            {selectedAsset && Object.entries(selectedAsset).map(([key, value]) => (
                                <p key={key} className="text-md text-gray-700 mb-2">
                                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                                </p>
                            ))}
                        </div>
                    </Block>
                </div>
                <div>
                    <BlockTitle medium className="margin-top">
                        Actions
                    </BlockTitle>
                    <Block>
                        <div className="mt-4">
                            <Button fill onClick={() => setSheetOpened(false)}>Edit Asset</Button>
                        </div>
                        <div className="mt-4">
                            <Button fill onClick={() => setSheetOpened(false)}>Assign Location</Button>
                        </div>
                        <div className="mt-4">
                            <Button fill onClick={() => setSheetOpened(false)}>Assign Jobs</Button>
                        </div>
                    </Block>
                </div>
            </Sheet>
        </Page>
    )

}

export default AssetManager;