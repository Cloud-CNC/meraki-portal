/**
 * @fileoverview Meraki portal auto-sign in
 * https://documentation.meraki.com/MR/MR_Splash_Page/Splash_Page_Traffic_Flow_and_Troubleshooting
 */

//Imports
const {CookieJar} = require('tough-cookie');
const axios = require('axios').default;
const cookieSupport = require('axios-cookiejar-support').default;

/**
 * @function Meraki portal auto-sign-in
 * @returns {Promise<String>} Will resolve if logged in, will reject of already logged in or an error occured
 */
module.exports = async () =>
{
  //Cookie jar
  cookieSupport(axios);
  const jar = new CookieJar();

  //Get splash page
  const splash = await axios.get('http://www.msftconnecttest.com/redirect', {
    jar
  });

  //Extract grant URL
  const grant = splash.data.match(/https:\/\/n\d{3}\.network-auth\.com\/[A-z]+\/hi\/[A-z0-9]+\/grant/);

  //Failed to parse grant
  if (grant == null || grant[0] == null)
  {
    return Promise.reject();
  }
  else
  {
    //Get grant (It'll automatically redirect to the grant access)
    await axios.get(grant[0], {
      jar
    });

    return Promise.resolve();
  }
};