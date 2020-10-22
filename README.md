# Meraki Portal
![status](https://img.shields.io/badge/status-beta-orange)
[![issues](https://img.shields.io/github/issues/Wakeful-Cloud/meraki-portal)](https://github.com/Wakeful-Cloud/meraki-portal/issues)
[![last commit](https://img.shields.io/github/last-commit/Wakeful-Cloud/meraki-portal)](https://github.com/Wakeful-Cloud/meraki-portal/commits/master)

Tired of clicking `Continue to the Internet` every time you want to do something on your computer? This plugin does it for you, programmatically.

## Install
`npm i meraki-portal`

## Startup Service (Windows Only)
* Register the service: `npm run register`
* Unregister the service: `npm run unregister`

## Usage
```Javascript
//Import
const merakiPortal = require('meraki-portal');

//Login (Promise; resolves when successful/rejects when already logged in or an error happened)
merakiPortal();
```

## Limitations
* This plugin has been tested on exactly `1` Meraki network
* No support for credentials
* No built in way of verifying that you've logged in

## How it works
The plugin makes a `GET` request to `http://www.msftconnecttest.com/redirect` which the Meraki AP redirects to the splash page. [Cheerio](https://github.com/cheeriojs/cheerio) then extracts the grant URL from the splash page which the plugin then makes a `GET` request to, completing the login process. The full process is better explained [here](https://documentation.meraki.com/MR/MR_Splash_Page/Splash_Page_Traffic_Flow_and_Troubleshooting).