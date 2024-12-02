
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    clients: [
      {
        id: 12345,
        name: 'British Gas',
        description: 'Leading energy and home services provider in the UK.',
        contacts: [1, 2, 3],
        assets: [1, 2, 3, 4, 5]
      }
    ],
    contacts: [
      {
        id: 1,
        name: 'Mr A Blogs',
        phoneNumber: '07712345678'
      },
      {
        id: 2,
        name: 'Mrs C Blogs',
        phoneNumber: '07712345346'
      },
      {
        id: 3,
        name: 'Dr P Blogs',
        phoneNumber: '07711153432'
      }
    ],
    jobs: [
      {
        id: 1,
        name: 'Commissioning Transformer',
        type: 'Commissioning',
        date: '28/11/2024',
        description: 'Setting up and testing the transformer to ensure it operates correctly.'
      },
      {
        id: 2,
        name: 'Audit of Transformer',
        type: 'Final Audit',
        date: '15/12/2024',
        description: 'Conducting a thorough inspection of the transformer to verify its compliance with standards.'
      },
      {
        id: 3,
        name: 'Fault Finding for Transformer',
        type: 'Fault Finding',
        date: '05/01/2025',
        description: 'Identifying and diagnosing issues in the transformer to ensure proper functionality.'
      }
    ],
    assets: [
      {
        id: 1,
        clientId: '1',
        name: 'Test Asset 1'
      },
      {
        id: 2,
        clientId: '1',
        name: 'Test Asset 2'
      },
      {
        id: 3,
        clientId: '1',
        name: 'Test Asset 3'
      },
      {
        id: 4,
        clientId: '1',
        name: 'Test Asset 4'
      },
      {
        id: 5,
        clientId: '1',
        name: 'Test Asset 5'
      }
    ]
  },
  getters: {
    jobs({ state }) {
      return state.jobs;
    },
    assets({ state }) {
      return state.assets;
    },
    clients({ state }) {
      return state.clients;
    },
    contacts({ state }) {
      return state.contacts;
    }
  },
  actions: {
    addJob({ state }, job) {
      state.jobs = [...state.jobs, job];
    },
    updateJob({ state }, updatedJob) {
      state.jobs = state.jobs.map(job => job.id === updatedJob.id ? updatedJob : job);
    },
    addClient({ state }, client) {
      state.clients = [...state.clients, client];
    },
    addAsset({ state }, asset) {
      state.assets = [...state.assets, asset];
    },
    updateAsset({ state }, updatedAsset) {
      state.assets = state.assets.map(asset => asset.id === updatedAsset.id ? updatedAsset : asset);
    }
  },
});
export default store;
