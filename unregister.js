/**
 * @fileoverview Unregister the Meraki Portal Service
 */

//Imports
const service = require('./service.js');

service.on('uninstalled', () =>
{
  console.log('Unregistered Meraki Portal as a startup service!');
});

//Uninstall the service
service.uninstall();