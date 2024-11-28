import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

const Client = (props) => {
  const { client } = props;

  return (
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
        <ListItem link={`add/contact`}>Add New Contact</ListItem>
      </List>
      {/* <BlockTitle large>Links</BlockTitle>
      <List strong dividersIos>
        {client.links.map((link, index) => (
          <ListItem
            key={index}
            link={link.url}
            title={link.title}
            external
            target="_blank"
          ></ListItem>
        ))}
        <ListItem external link={`${props.f7route.path}/add/link`}>Add New Link</ListItem>
      </List> */}
    </Page>
  );
};

export default Client;
