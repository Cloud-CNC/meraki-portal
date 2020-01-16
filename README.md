# Meraki Portal
Tired of clicking `Continue to the Internet` everytime you want to do something? This plugin does it for you.

## Install
`npm i meraki-portal`

## Usage
```Javascript
//Import
const merakiPortal = require('meraki-portal');

//Login (Promise)
merakiPortal();
```

## Limitations
* This plugin has been tested on exactly 1 network
* No support for credentials
* No built in way of verifying that you've logged in

## How it works
The plugin makes a `GET` request to `http://www.msftconnecttest.com/redirect` which the Meraki AP redirects to the splash page. A RegEx filter extracts the grant URL from the splash page source code which the plugin then makes a `GET` request to, completing the login process. The full process is better explained [here](https://documentation.meraki.com/MR/MR_Splash_Page/Splash_Page_Traffic_Flow_and_Troubleshooting).