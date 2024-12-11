import React, { useState } from 'react';
// Use Page, Navbar, Toolbar from Framework7
import { Page, Navbar, useStore, Block, Popup, Sheet, Button, f7 } from 'framework7-react';
import { List, ListItem, BlockTitle, Toolbar, Link } from 'konsta/react';

const EngineersPage = () => {
  const engineers = useStore('engineers');
  const [sheetOpened, setSheetOpened] = useState(false);
  const [selectedEngineer, setSelectedEngineer] = useState(null);

  const handleEngineerClick = (engineer) => {
    console.log('Engineer clicked: ',
      engineer.name,
      engineer.jobTitle
    );
    setSelectedEngineer(engineer);
    setSheetOpened(true);
  }

  const toggleSwipeStep = () => {
    f7.sheet.stepToggle('.demo-sheet-swipe-to-step');
  };

  return (
    // Use Page, Navbar & Toolbar from Framework7
    <Page name="Engineers">
      <Navbar title="Engineers" className="top-0 sticky" backLink />

      {/* In page content we can use Konsta UI components  */}
      <Block strong>
        <p>
          Use this area to select & view engineer information.
        </p>
      </Block>
      <BlockTitle large>Engineers</BlockTitle>
      <List dividersIos>
        {engineers.map((engineer) => (
          <ListItem key={engineer.id} title={engineer.name} subtitle={engineer.jobTitle} link onClick={() => handleEngineerClick(engineer)} />
        ))}
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
                {selectedEngineer?.name}
              </p>
              <p className="text-md text-gray-700 mb-2">
                Job Title: {selectedEngineer?.jobTitle}
              </p>
              <p className="text-md text-gray-700 mb-2">
                Email: {selectedEngineer?.email}
              </p>
              <p className="text-md text-gray-700 mb-2">
                Phone: {selectedEngineer?.phoneNumber}
              </p>
            </div>
          </Block>
        </div>
        <div>
          <BlockTitle medium className="margin-top">
            Actions
          </BlockTitle>
          <Block>
            <div className="mt-4">
              <Button fill onClick={() => setSheetOpened(false)}>Email Engineer</Button>
            </div>
            <div className="mt-4">
                <Button fill onClick={() => setSheetOpened(false)}>Manage Jobs</Button>
              </div>
          </Block>
        </div>
      </Sheet>
    </Page>
  );
}
export default EngineersPage;

