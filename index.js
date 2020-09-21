/**
 * @fileoverview Meraki portal auto-sign in
 * https://documentation.meraki.com/MR/MR_Splash_Page/Splash_Page_Traffic_Flow_and_Troubleshooting
 */

//Imports
const {CookieJar} = require('tough-cookie');
const axios = require('axios').default;
const cheerio = require('cheerio');
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
  const $ = cheerio.load(splash.data);
  const grant = $('a[class="button"]').attr('href');

  //Failed to parse grant
  if (grant == null)
  {
    return Promise.reject();
  }
  else
  {
    //Get grant (It'll automatically redirect to the grant access)
    await axios.get(grant, {
      jar,
      withCredentials: true
    });

    return Promise.resolve();
  }
};