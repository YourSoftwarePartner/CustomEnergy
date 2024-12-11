import React from 'react';
// Use Page, Navbar, Toolbar from Framework7
import { Page, Navbar, Toolbar, Block } from 'framework7-react';
// Konsta UI components
import { List, ListItem, Link, BlockTitle, Badge, Icon } from 'konsta/react';
import DemoIcon from '../../components/demoIcon';
import {
  Building
} from 'framework7-icons/react';

const AdminPage = () => (
  // Use Page, Navbar & Toolbar from Framework7
  <Page name="admin">
    <Navbar title="App Management"/>
    <Toolbar bottom>
      <Link toolbar>Left Link</Link>
      <Link toolbar>Right Link</Link>
    </Toolbar>
    {/* In page content we can use Konsta UI components  */}
    <Block strong>
      <p>
        Use this area of the app to configure new customers, assets and engineers.
      </p>
    </Block>
    <BlockTitle large>Client Configuration</BlockTitle>
    <List>
      <ListItem media={<Building/>} href="/clients/" title="View Clients" after={<Badge>1</Badge>}/>
      <ListItem media={<Building/> }href="/client/new" title="Create New Client" />
    </List>
    <BlockTitle large>Engineer Configuration</BlockTitle>
    <List>
      <ListItem media={<DemoIcon/>} href="/engineers/" title="View Engineers" after={<Badge>5</Badge>}>
      </ListItem>
      <ListItem media={<DemoIcon/>} href="/engineers/new" title="Add New Engineer" />
    </List>
  </Page>
);
export default AdminPage;

