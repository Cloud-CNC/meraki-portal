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
catch(() =>
{
  console.log('An error occurred, you already be logged in!');
});