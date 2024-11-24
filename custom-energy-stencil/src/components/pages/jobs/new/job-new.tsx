import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'job-new',
    styleUrl: 'job-new.css',
    shadow: true
})
export class JobNew {
    @State() isModalOpen = false;

    private handleOpenModal() {
        this.isModalOpen = true;
    };

    private handleCloseModal() {
        this.isModalOpen = false;
    };

    handleAddLocation(event: any) {
        event.preventDefault();
        // const formData = new FormData(event.target as HTMLFormElement);
        // // const newLocation = {
        // //     locationName: formData.get('locationName') as string,
        // //     siteName: formData.get('siteName') as string,
        // //     siteAddress: formData.get('siteAddress') as string,
        // //     contactName: formData.get('contactName') as string,
        // //     contactNumber: formData.get('contactNumber') as string,
        // //     contactEmail: formData.get('contactEmail') as string,
        // // };
        // // addLocation(newLocation);
        this.handleCloseModal();
    };

    render() {
        return (
            <div class="container mx-auto p-4">
                <h1 class="text-2xl font-bold mb-4">Create New Job</h1>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Job Name</label>
                        <input
                            type="text"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Type</label>
                        <select
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        >
                            <option value="Commissioning">Commissioning</option>
                            <option value="Final Audit">Final Audit</option>
                            <option value="HV/LV energisation">HV/LV energisation</option>
                            <option value="Metering">Metering</option>
                            <option value="Fault Finding">Fault Finding</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Date</label>
                        <input
                            type="date"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={this.handleOpenModal}
                        >
                            Add Location
                        </button>
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
    
                {/* <LocationModal
                    isOpen={this.isModalOpen}
                    onClose={this.handleCloseModal}
                    onAddLocation={this.handleAddLocation}
                /> */}
            </div>
        );
    }
}