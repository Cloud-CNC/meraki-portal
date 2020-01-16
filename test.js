/**
 * @fileoverview Meraki test
 */

//Imports
const meraki = require('./index.js');

//Login
meraki().then(() =>
{
  console.log('Success!');
}).
catch(err =>
{
  console.error('Failed to parse grant, you already be logged in!');
});