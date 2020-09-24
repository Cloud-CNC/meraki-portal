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
catch(error =>
{
  console.error(`An error occurred, you already be logged in! Error: ${error}`);
});