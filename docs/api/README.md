# APIs
There are different ways to integrate with the RTLOC system, depending on your needs.

<!-- ![API_overview](./img/API2_small.gif) -->
<AnimApis />


## Real-time device data
The position and sensor data for each device can be accessed in real-time in a few ways:

* We provide direct **positioning and sensor data** in two formats: binary and JSON
  - **[`Binary format`](/api/api_application.html)** - Allows for fast and very compact transmission over TCP/UDP.
  - **[`JSON format`](/api/api_web.html)** - Receive data in JSON over direct websocket or through an MQTT broker (TCP or websocket).

* This (binary or JSON) data can be accessed over TCP/UDP, websockets, or MQTT
  - [`Direct TCP/UDP/WS(S)`](/api/api_conns.html)
  - **[`MQTT`](/api/api_conns.html)** (over TCP or websocket)

  > MQTT can be connected to over TCP or (secure) websocket

## Meta data

* Access **meta information** about your projects, users and more (information in database) through our [`REST API`](/api/api_rest.html)

* **Single device** (tag / anchor) information can be read through the CLI or via Bluetooth (BLE).
  - [`BLE API`](/api/api_ble.html) - Make a wireless connection with one of the tags with our BLE interface.
  - [`Device CLI`](/api/api_console.html) - Access the RTLS hardware (anchors and tags) via one of the [interfaces](/hardware/#interfaces).

## Custom firmware toolkit

* If you want to go low-level build your own **firmware** and run it next to ours using our [`firmware library`](/api/api_firmware.html)

<!-- ## Overview
The following image gives an overview of where the APIs reside within the system architecture.
![API_overview](./img/api_overview.png) -->
