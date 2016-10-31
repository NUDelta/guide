import setupBrowserPolicy from './config/security.js';
import loadFixtures from './loaders/fixtures.js';
import loadUsers from './loaders/users.js';
import loadConcepts from './loaders/concepts.js';
import publishConcepts from './publications/Concepts.js';
import publishEdges from './publications/Edges.js';

setupBrowserPolicy(BrowserPolicy);

Meteor.startup(() => {
  loadUsers();
  publishConcepts();
  publishEdges();
  loadConcepts();
  
  // loadFixtures([{ name: 'test' }], Concepts);
});
