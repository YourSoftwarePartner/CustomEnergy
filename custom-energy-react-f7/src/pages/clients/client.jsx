import React, { Fragment } from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem, useStore } from 'framework7-react';

const Client = (props) => {
  const { client } = props;

  const clients = useStore('clients');
  const currentClient = clients.find((client) => client.id === parseInt(props.f7route.params.clientId, 10));

  const contacts = useStore('contacts');
  const currentContactsList = contacts.filter(function (contact) {
    return currentClient.contacts.includes(contact.id);
  });

  return (
    <Page>
      { currentClient && clients?.length > 0 ? 
      <Fragment>
        <Navbar title={`${currentClient.name}`} backLink="Back" />
        <Block strong>
          {currentClient.description}
        </Block>
        {/* <BlockTitle large>Information [FORM HERE]</BlockTitle> */}
        <BlockTitle large>Assets</BlockTitle>
        <List strong dividersIos>
          <ListItem link={`assets`}>Manage Assets</ListItem>
        </List>
        <BlockTitle large>Contacts</BlockTitle>
        <List strong dividersIos>
          { currentContactsList.map((contact) => (
            <ListItem
            key={contact.id}
            link={`contact/:id/edit`}
            title={contact.name}
          ></ListItem>
          )) }
          <ListItem link={`add/contact`}>Add New Contact</ListItem>
        </List>
      </Fragment>
      : 
      <Block strong>
        <p>Client not found.</p>
      </Block>
  }
    </Page>
  );
};

export default Client;
