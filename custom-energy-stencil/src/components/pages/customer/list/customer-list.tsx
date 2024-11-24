import { Component, h, State, Watch } from '@stencil/core';
import { Customer } from '../../../../types/Customer';

@Component({
    tag: 'customer-list',
    styleUrl: 'customer-list.css',
    shadow: true
})
export class CustomerList {
    @State() searchQuery = '';
    @State() customers: Customer[] = [];

    @State() filteredCustomers: Customer[] = [];

    handleCustomerClick(customerName: string) {
        document.querySelector('ion-router').componentOnReady().then(router => {
            router.push('/customers/' + customerName);
        });
    };

    @Watch('jobs')
    handleJobsChange() {
        if (this.searchQuery) {
            this.filterJobs();
        } else {
            this.filteredCustomers = this.customers;
        }
    }

    filterJobs() {
        this.filteredCustomers = this.customers.filter(job =>
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
                    <h1 class="text-2xl font-bold mb-4">Customers</h1>
                    <ul class="space-y-4">
                        {this.filteredCustomers.map((customer) => (
                            <li
                                key={customer.name}
                                onClick={() => this.handleCustomerClick(customer.name)}
                                class="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100"
                            >
                                <div class="font-bold">{customer.name}</div>
                                <div>{customer.contactName}</div>
                                <div>{customer.contactNumber}</div>
                                <div>{customer.email}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}