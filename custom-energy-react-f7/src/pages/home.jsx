import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Icon,
  Card,
  CardContent,
  CardHeader,
  BlockHeader,
  Checkbox,
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large={false} sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>

      <NavTitle sliding>Commissioning System</NavTitle>
    </Navbar>

    {/* Page content */}
    <Block>
    <img src="../assets/logo.png"></img>
    </Block>
     <Card className="data-table data-table-init">
      <CardHeader>
        <div className="data-table-title">Upcomming Jobs</div>
        <div className="data-table-actions">
          <Link iconIos="f7:line_horizontal_3_decrease" iconMd="material:sort" />
          <Link iconIos="f7:ellipsis_vertical_circle" iconMd="material:more_vert" />
        </div>
      </CardHeader>
      <CardContent padding={false}>
        <table>
          <thead>
            <tr>
              <th className="label-cell sortable-cell sortable-cell-active">
                Date
              </th>
              <th className="numeric-cell sortable-cell">Client</th>
              <th className="numeric-cell sortable-cell">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="label-cell">24/12/2024</td>
              <td className="numeric-cell">British Gas</td>
              <td className="numeric-cell">New Site</td>
            </tr>
            <tr>
              <td className="label-cell">01/01/2025</td>
              <td className="numeric-cell">British Gas</td>
              <td className="numeric-cell">Re-Test</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>

    <Card className="data-table data-table-init">
      <CardHeader>
        <div className="data-table-title">New Assets</div>
        <div className="data-table-actions">
          <Link iconIos="f7:line_horizontal_3_decrease" iconMd="material:sort" />
          <Link iconIos="f7:ellipsis_vertical_circle" iconMd="material:more_vert" />
        </div>
      </CardHeader>
      <CardContent padding={false}>
        <table>
          <thead>
            <tr>
              <th className="label-cell sortable-cell sortable-cell-active">
                Name
              </th>
              <th className="numeric-cell sortable-cell">Location</th>
              <th className="numeric-cell sortable-cell">Client</th>
              <th className="numeric-cell sortable-cell">Date Installed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="label-cell">Transformer</td>
              <td className="numeric-cell">Battersea</td>
              <td className="numeric-cell">British Gas</td>
              <td className="numeric-cell">20/11/2024</td>
            </tr>
            <tr>
              <td className="label-cell">Switchgear</td>
              <td className="numeric-cell">Harrogate</td>
              <td className="numeric-cell">British Gas</td>
              <td className="numeric-cell">28/09/2024</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>


  </Page>
);
export default HomePage;