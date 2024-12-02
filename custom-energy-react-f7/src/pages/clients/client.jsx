import React from 'react';
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
    //TODO: fix routing - wont route backwards to admin page...
    <Page>
      <Navbar title={`${client.name}`} backLink="Back" />
      <Block strong>
        {client.desc}
      </Block>
      <BlockTitle large>Information [FORM HERE]</BlockTitle>
      <BlockTitle large>Assets</BlockTitle>
      <List strong dividersIos>
        <ListItem link={`add/asset`}>Add New Asset</ListItem>
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
    </Page>
  );
};

export default Client;
