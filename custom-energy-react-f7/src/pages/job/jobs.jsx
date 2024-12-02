import React from 'react';
import { Page, Navbar, List, ListItem, Block, Button, useStore } from 'framework7-react';
import store from '../../js/store';

const JobsPage = () => {
  const jobs = useStore('jobs');

  // const addProduct = () => {
  //   store.dispatch('addJob', {
  //     id: '4',
  //     title: 'Apple iPhone 12',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
  //   });
  // };

  return (
    <Page name="Jobs">
      <Navbar title="All Jobs" />
      <List strong dividersIos outlineIos insetMd>
        {jobs.map((job) => (
          <ListItem key={job.id} title={job.name} link={`/jobs/${job.id}/`} />
        ))}
      </List>
      <Block>
        <Button fill link="/job/new">
          Create New Job
        </Button>
      </Block>
    </Page>
  );
};

export default JobsPage;
