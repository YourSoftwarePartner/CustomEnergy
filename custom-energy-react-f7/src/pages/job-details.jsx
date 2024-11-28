import React from 'react';
import { Page, Navbar, BlockTitle, Block, useStore } from 'framework7-react';

const JobDetailsPage = (props) => {
  const jobId = props.f7route.params.id;
  const jobsList = useStore('jobs');

  var currentJob;
  jobsList.forEach(function (job) {
    if (job.id === jobId) {
      currentJob = job;
    }
  });

  return (
    <Page name="Details">
      <Navbar title={`Job - ${currentJob.name}`} backLink="Back" />
      <BlockTitle>About {currentJob.name}</BlockTitle>
      <Block>{currentJob.type}</Block>
      <Block>{currentJob.date}</Block>
      <Block>{currentJob.description}</Block>
    </Page>
  );
};

export default JobDetailsPage;
