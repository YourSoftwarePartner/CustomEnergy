import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <ion-router>
          <ion-route url="/" component="home-page"></ion-route>
          <ion-route url="/job" component="job-list"></ion-route>
          <ion-route url="/job/new" component="job-new"></ion-route>
          <ion-route url="/job/:id" component="job-details"></ion-route>
          <ion-route url="/customer" component="customer-list"></ion-route>
          <ion-route url="/customer/:id" component="customer-details"></ion-route>
          <ion-route url="/customer/new" component="customer-new"></ion-route>
        </ion-router>

        <ion-router-outlet></ion-router-outlet>
      </div>
    )
  }
}
