import React from 'react';
// Use Page, Navbar, Toolbar from Framework7
import { Page, Navbar, Toolbar, Block } from 'framework7-react';
// Konsta UI components
import { List, ListItem, Link, BlockTitle } from 'konsta/react';

const AdminPage = () => (
  // Use Page, Navbar & Toolbar from Framework7
  <Page name="admin">
    <Navbar title="Admin"/>
    <Toolbar bottom>
      <Link toolbar>Left Link</Link>
      <Link toolbar>Right Link</Link>
    </Toolbar>
    {/* In page content we can use Konsta UI components  */}
    <Block strong>
      <p>
        Use this area of the app to configure new customers and engineers.
      </p>
    </Block>
    <BlockTitle large>Client Configuration</BlockTitle>
    <List>
      <ListItem href="/customers/" title="View Clients" />
      <ListItem href="/about/" title="Create New Client" />
    </List>
    <BlockTitle large>Engineer Configuration</BlockTitle>
    <List>
      <ListItem href="/customers/" title="View Engineers" />
      <ListItem href="/about/" title="Add New Engineer" />
    </List>
  </Page>
);
export default AdminPage;

