import { Component, h } from '@stencil/core';

@Component({
    tag: 'home-page',
    styleUrl: 'home-page.css',
    shadow: true
})
export class HomePage {
    navigate(route: string) {
        document.querySelector('ion-router').componentOnReady().then((router) => {
            router.push(route);
        });
    }

    render() {
        return (
            <div class="container p-4">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                <div onClick={() => this.navigate("/customer/new")}>
                    <div class="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-gray-100 relative min-h-[150px]">
                        <h2 class="text-xl font-bold mb-2">New Customer</h2>
                        <p class="absolute bottom-3 left-3">Register new customer details...</p>
                        <span class="absolute bottom-3 right-3">&gt;</span>
                    </div>
                </div>
                <div onClick={() => this.navigate("/job/new")}>
                    <div class="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:bg-gray-100 relative min-h-[150px]">
                        <h2 class="text-xl font-bold mb-2">New Job</h2>
                        <p class="absolute bottom-3 left-3">Start a new job...</p>
                        <span class="absolute bottom-3 right-3">&gt;</span>
                    </div>
                </div>

                {/* Add more tiles as needed */}
            </div>
        </div>
        );
    }
}