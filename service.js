/**
 * @fileoverview Meraki Portal Service Registration
 */

//Imports
const path = require('path');
const Service = require('node-windows').Service;

//Register the service
const service = new Service({
  name: 'Meraki Portal',
  description: 'Meraki Portal automatic start',
  script: path.join(__dirname, 'cli.js'),
  dependencies: [
    'WLAN AutoConfig'
  ]
});

//Export
module.exports = service;