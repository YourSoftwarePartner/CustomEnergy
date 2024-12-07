import React from 'react';
// Use Page, Navbar, Toolbar from Framework7
import { Page, Navbar, Toolbar, useStore, ListItem, Block, BlockTitle, List } from 'framework7-react';

const ClientsPage = () => {
  const clients = useStore('clients');

  return (
    // Use Page, Navbar & Toolbar from Framework7
    <Page name="clients">
      <Navbar title="Clients" className="top-0 sticky" backLink />

      {/* In page content we can use Konsta UI components  */}
      <Block strong>
        <p>
          Use this area to select & view clients information.
        </p>
      </Block>
      <BlockTitle large>Customers</BlockTitle>
      <List dividersIos>
        {clients.map((client) => (
          <ListItem key={client.id} title={client.name} link={`/client/${client.id}/`} />
        ))}
      </List>
    </Page>
  );
}
export default ClientsPage;

