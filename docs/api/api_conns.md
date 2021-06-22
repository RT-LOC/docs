# Connection types

Real-time data (position data, tag/anchor statuses, sensor data, etc.) can be received over UDP/TCP, (secure) websocket WS(S) or MQTT (Message Queuing Telemetry Transport, pub/sub). The data can be transferred in binary or JSON format (see previous sections).

## 1. Direct socket connections

1. Configure data transmission over UDP / TCP / websocket in our desktop application (in the API view)

2. Connect to your computer/server to the correct IP + port

### Code examples
Check out code examples at [https://github.com/RT-LOC/APIs](https://github.com/RT-LOC/APIs) (C, Python, Javascript)

## 2. MQTT data connection

You can receive data in a pub/sub fashion, through an Mosquitto (MQTT) broker.
You can use our MQTT broker (some limitations may apply) or set up your own.

Make sure your RTLS setup is publishing MQTT data to the broker.
Use the following configuration for your MQTT client(s):

* Host: mqtt.cloud.rtloc.com
* Port: 1883 (TCP), 8083 (WSS) or 8883(TCP TLS)
* Username: *client slug**: *user e-mail*
* Password: user password, or valid JWT

*You can find the *client slug* in the license description, in the Hub app or the Portal at [https://app.rtloc.com/settings/info](https://app.rtloc.com/settings/info).

The MQTT topic and data format per type of message is outlined in the [format description](/api/api_web.html).

### MQTT clients

Clients can connect to the MQTT broker over TCP/TLS or a secure Websocket (WSS).
Example client libraries:

* Javascript (browser): [MQTT.js](https://www.npmjs.com/package/mqtt) (Recommended for web applications), [Eclipse Paho](https://www.eclipse.org/paho/clients/js/), ...

* Python: [Paho MQTT](https://pypi.org/project/paho-mqtt/), ...

* C#: [MQTTnet](https://github.com/chkr1011/MQTTnet), Eclipse Paho, ...

* ...

### Code examples
The following example uses the [MQTT.js](https://www.npmjs.com/package/mqtt) client library to connect to our MQTT broker. It uses a demo account and displays demo data (replayed RTLS data continuously fed into our broker).

``` js
const mqtt = require('mqtt')

mqttOptions = {
  keepalive: 50,
  clientId: 'client_' + Math.random().toString(16).substr(2, 8),
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 60000,
  connectTimeout: 30 * 1000,
  username: 'demo:demo@rtloc.com',
  password: '12345', // Alternative: access token instead of password
  rejectUnauthorized: false
}

// Connect to MQTT broker
const client = mqtt.connect('wss://mqtt.cloud.rtloc.com:8083/ws', mqttOptions)

// Subscribe to a few topics
client.subscribe('rtls/replay/kart/status', { qos: 0 })
client.subscribe('rtls/replay/kart/anchors', { qos: 0 })
client.subscribe('rtls/replay/kart/posxyz', { qos: 0 })

// On message: print topic and JSON message
client.on('message', function (topic, message) {
  const json = JSON.parse(message)
  console.log(topic + ' message:')
  console.log(json)
})
```