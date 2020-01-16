/**
 * @fileoverview Meraki portal auto-sign in
 * https://documentation.meraki.com/MR/MR_Splash_Page/Splash_Page_Traffic_Flow_and_Troubleshooting
 */

//Imports
const request = require('request').defaults({jar: true});

/**
 * @function Meraki portal auto-sign-in
 * @returns {Promise<String>} Will resolve if logged in, will reject of already logged in or an error occured
 */
module.exports = () => new Promise(async (resolve, reject) =>
{
  //Get splash page
  request('http://www.msftconnecttest.com/redirect', (err, res, body) =>
  {
    //Extract grant URL
    const grant = body.match(/https:\/\/n\d{3}\.network-auth\.com\/[A-z]+\/hi\/[A-z0-9]+\/grant/);

    //Failed to parse grant
    if (grant == null || grant[0] == null)
    {
      reject();
    }
    else
    {
      //Get grant (It'll automatically redirect to the grant access)
      request(grant[0], (err, req, body) =>
      {
        resolve();
      });
    }
  });
});