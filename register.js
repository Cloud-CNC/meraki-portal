/**
 * @fileoverview Register the Meraki Portal Service
 */

//Imports
const service = require('./service.js');

service.on('install', () =>
{
  console.log('Registered Meraki Portal as a startup service!');
});

//Install the service
service.install();