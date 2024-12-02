import React from 'react';
// Use Page, Navbar, Toolbar from Framework7
import { Page, Navbar, Toolbar } from 'framework7-react';
// Konsta UI components
import { Block, Button, List, ListItem, Link, BlockTitle } from 'konsta/react';

const ClientsPage = () => (
  // Use Page, Navbar & Toolbar from Framework7
  <Page name="clients">
    <Navbar title="Clients" className="top-0 sticky" centerTitle="true" backLink/>

    {/* In page content we can use Konsta UI components  */}
    <Block strong>
      <p>
        Use this area to select & view clients information.
      </p>
    </Block>
    <BlockTitle large>Customers</BlockTitle>
    <List>
      <ListItem href="/client/12345/" title="British Gas" />
    </List>
  </Page>
);
export default ClientsPage;

