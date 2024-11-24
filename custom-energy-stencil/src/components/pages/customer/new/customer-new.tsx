import { Component, h } from '@stencil/core';

@Component({
    tag: 'customer-new',
    styleUrl: 'customer-new.css',
    shadow: true
})
export class CustomerNew {
    render() {
        return (
            <div class="container mx-auto p-4">
                <h1 class="text-2xl font-bold mb-4">Create New Customer</h1>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="Customer Name"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Contact Name
                        </label>
                        <input
                            type="text"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="Contact Name"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="Contact Number"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}