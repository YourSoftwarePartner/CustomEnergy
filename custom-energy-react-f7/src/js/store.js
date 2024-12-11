
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    clients: [
      {
        id: 12345,
        name: 'British Gas',
        description: 'Leading energy and home services provider in the UK.',
        contacts: [1, 2, 3],
        assets: [1, 2, 3, 4, 5],
        engineers: [1, 2]
      }
    ],
    engineers: [
      {
        id: 1,
        name: 'John Doe',
        phoneNumber: '07712345678',
        email: 'jdoe@customenergy.com',
        role: 'Engineer',
        jobTitle: 'Senior Engineer',  
      },
      {
        id: 2,
        name: 'Jane Doe',
        phoneNumber: '07712345678',
        email: 'janedoe@customenergy.com',
        role: 'Engineer',
        jobTitle: 'Junior Engineer',
      },
      {
        id: 3,
        name: 'John Smith',
        phoneNumber: '07712345678',
        email: '',
        role: 'Engineer',
        jobTitle: 'Senior Engineer',
      },
      {
        id: 4,
        name: 'Jane Smith',
        phoneNumber: '07712345678',
        email: '',
        role: 'Engineer',
        jobTitle: 'Junior Engineer',
      },
      {
        id: 5,
        name: 'John Brown',
        phoneNumber: '07712345678',
        email: '',
        role: 'Engineer',
        jobTitle: 'Senior Engineer',
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
        make: 'Test Asset 1',
        type: 'LV cabinet type 1',
      },
      {
        id: 2,
        make: 'Test Asset 2',
        type: 'LV cabinet type 2',
      },
      {
        id: 3,
        make: 'Test Asset 3',
        type: 'LV cabinet type 3',
      },
      {
        id: 4,
        make: 'Test Asset 4',
        type: 'LV cabinet type 4',
      },
      {
        id: 5,
        make: 'Test Asset 5',
        type: 'LV cabinet type 5',
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
    },
    engineers({ state }) {
      return state.engineers;
    }
  },
  actions: {
    addJob({ state }, job) {
      if (!job.id) {
        job.id = state.jobs.length ? Math.max(...state.jobs.map(j => j.id)) + 1 : 1;
      } else {
        const existingJob = state.jobs.find(j => j.id === job.id);
        if (existingJob) {
          throw new Error(`Job with ID ${job.id} already exists.`);
        }
      }
      state.jobs = [...state.jobs, job];

      return Promise.resolve(job);
    },
    addContact({state}, contact) {
      if (!contact.id) {
        contact.id = state.contacts.length ? Math.max(...state.contacts.map(c => c.id)) + 1 : 1;
      } else {
        const existingContact = state.contacts.find(c => c.id === contact.id);
        if (existingContact) {
          throw new Error(`Contact with ID ${contact.id} already exists.`);
        }
      }
      state.contacts = [...state.contacts, contact];

      return Promise.resolve(contact);
    },
    addClient({ state }, client) {
      if (!client.id) {
        client.id = state.clients.length ? Math.max(...state.clients.map(c => c.id)) + 1 : 1;
      } else {
        const existingClient = state.clients.find(c => c.id === client.id);
        if (existingClient) {
          throw new Error(`Client with ID ${client.id} already exists.`);
        }
      }
      state.clients = [...state.clients, client];

      return Promise.resolve(client);
    },
    addAsset({ state }, asset) {
      if (!asset.id) {
        asset.id = state.assets.length ? Math.max(...state.assets.map(a => a.id)) + 1 : 1;
      } else {
        const existingAsset = state.assets.find(a => a.id === asset.id);
        if (existingAsset) {
          throw new Error(`Asset with ID ${asset.id} already exists.`);
        }
      }
      state.assets = [...state.assets, asset];

      return Promise.resolve(asset);
    },
    addEngineer({ state }, engineer) {
      if (!engineer.id) {
        engineer.id = state.engineers.length ? Math.max(...state.engineers.map(e => e.id)) + 1 : 1;
      } else {
        const existingEngineer = state.engineers.find(e => e.id === engineer.id);
        if (existingEngineer) {
          throw new Error(`Engineer with ID ${engineer.id} already exists.`);
        }
      }
      state.engineers = [...state.engineers, engineer];

      return Promise.resolve(engineer);
    },
    updateAsset({ state }, updatedAsset) {
      state.assets = state.assets.map(asset => asset.id === updatedAsset.id ? updatedAsset : asset);
    },
    updateClient({ state }, updatedClient) {
      state.clients = state.clients.map(client => client.id === updatedClient.id ? updatedClient : client);
    },
    updateContact({ state }, updatedContact) {
      state.contacts = state.contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact);
    },
    updateEngineer({ state }, updatedEngineer) {
      state.engineers = state.engineers.map(engineer => engineer.id === updatedEngineer.id ? updatedEngineer : engineer);
    },
    updateJob({ state }, updatedJob) {
      state.jobs = state.jobs.map(job => job.id === updatedJob.id ? updatedJob : job);
    }
  },
});
export default store;
