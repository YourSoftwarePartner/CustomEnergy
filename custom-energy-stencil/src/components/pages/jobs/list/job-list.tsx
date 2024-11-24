import { Component, h, State, Watch } from '@stencil/core';

@Component({
    tag: 'job-list',
    styleUrl: 'job-list.css',
    shadow: true
})
export class JobList {
    @State() searchQuery = '';
    @State() jobs = [];

    @State() filteredJobs = [];

    handleJobClick(jobName: string) {
        document.querySelector('ion-router').componentOnReady().then(router => {
            router.push('/jobs/' + jobName);
        });
    };

    @Watch('jobs')
    handleJobsChange() {
        if (this.searchQuery) {
            this.filterJobs();
        } else {
            this.filteredJobs = this.jobs;
        }
    }

    filterJobs() {
        this.filteredJobs = this.jobs.filter(job =>
            job.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }

    handleSearchChange (event: any) {
        this.searchQuery = event.target.value;
    };

    render() {
        return (
            <div class="container mx-auto p-4">
                <input
                    type="text"
                    placeholder="search"
                    value={this.searchQuery}
                    onChange={this.handleSearchChange}
                    class="w-full p-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div class="container">
                    <h1 class="text-2xl font-bold mb-4">All Jobs</h1>
                    <ul class="space-y-4">
                        {this.filteredJobs.map((job) => (
                            <li
                                key={job.name}
                                onClick={() => this.handleJobClick(job.name)}
                                class="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100"
                            >
                                <div class="font-bold">{job.name}</div>
                                <div>{job.type}</div>
                                <div>{job.date}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}