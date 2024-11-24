import { Component, h, State } from '@stencil/core';
import { Job } from '../../../../types/Job';

@Component({
    tag: 'job-details',
    styleUrl: 'job-details.css',
    shadow: true
})
export class JobDetails {
    @State() job: Job;

    fetchJobDetails() {
        // fetch job details from API
    }

    render() {
        return (
            <div>
            <h1>{this.job.name}</h1>
            <p>Type: {this.job.type}</p>
            <p>Date: {this.job.date}</p>
        </div>
        );
    }
}