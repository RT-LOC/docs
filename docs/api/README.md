# APIs
There are many ways to integrate with the RTLOC system and on different levels:
* External API's: position data
  - [`Binary API`](/api/api_application.html) - Interact in a native (PC, phone or tablet) application.
  - [`JSON websocket API`](/api/api_web.html) - Suitable for web- or cloud-oriented apps.
* Internal API's: extra control over devices
  - [`Device CLI`](/api/api_console.html) - Access the RTLS hardware (anchors and tags) via one of the [interfaces](/hardware/#interfaces).
  - [`Firmware API`](/api/api_firmware.html) - Build your own firmware (if you want to go very low-level).
  - [`BLE API`](/api/api_ble.html) - Make a wireless connection with one of the tags or anchors via the Bluetooth Low Energy protocol.

## Overview
The following image gives an overview of where the APIs reside within the system architecture.
![API_overview](./img/api_overview.png)
