# Local live (MQTT JSON) data

Real-time data (position data, tag/anchor statuses, sensor data, etc.) can be received over MQTT (Message Queuing Telemetry Transport, pub/sub), either direct over TCP or over Websocket.

## 1. Connection protocol

You can receive data using an Mosquitto (MQTT) **client** which connects to our local broker. This can be over websocket in a browser or over TCP from a backend program or script.

Make sure your RTLS setup is publishing MQTT data to the broker.
Use the following configuration for your MQTT client(s):

* Host: *localhost (same PC) or PC's IP address*
* Port: 1883 (TCP), 8883 (Websocket)
* Username: 
* Password:

The MQTT topic and data format per type of message is outlined in the [JSON format description](/api/api_web.html).

### MQTT clients

Clients can connect to the MQTT broker over TCP/TLS or a secure Websocket (WSS).
Some example client libraries:

* Javascript (browser): [MQTT.js](https://www.npmjs.com/package/mqtt) (Recommended for web applications, websocket), [Eclipse Paho](https://www.eclipse.org/paho/clients/js/), ...

* Python: [Paho MQTT](https://pypi.org/project/paho-mqtt/), ...

* C#: [MQTTnet](https://github.com/chkr1011/MQTTnet), Eclipse Paho, ...

### Code example
The following example uses the [MQTT.js](https://www.npmjs.com/package/mqtt) client library to connect to our MQTT broker. It uses a demo account and displays demo data (replayed RTLS data continuously fed into our broker).

``` js
const mqtt = require('mqtt')

mqttOptions = {
  keepalive: 50,
  clientId: 'client_' + Math.random().toString(16).substr(2, 8),
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 10000,
  connectTimeout: 30 * 1000,
  username: '',
  password: '',
  rejectUnauthorized: false
}

// Connect to MQTT broker
const client = mqtt.connect('mqtt://localhost:1883', mqttOptions)

// Subscribe to a few topics
client.subscribe('data/#', { qos: 0 })

// On message: print topic and JSON message
client.on('message', function (topic, message) {
  const json = JSON.parse(message)
  console.log(topic + ' message:')
  console.log(json)
})
```

> For websocket, use *ws://localhost:8883* instead (change protocol and port)

## 2. Data Format
Each message has the following base format:

``` JSON
{
  "time": "", // Time: Based on GPS time of anchor if available, otherwise PC time
  "meta": { // Meta information
    "data_source": "live",
    ...
  },
  "value": { // Value: message data
    ...
  }
}

```
These are the message types and their associated topics:

<MqttTable></MqttTable>

Example *tag-data* message:

``` JSON
{
  "time":"2022-02-26T10:07:19.128Z",
  "meta":{
    "msg_type":"tag-data",
    "data_source":"replay-cx"
  },
  "value": {
      "frame": 658885,
      "tags": {
        "2012": {
            "pos": {"x": 9356,"y": 23872,"z": 0},
            "speed": {
              "value": 4.61,
              "dir": {"x": 0.94174,"y": 0.33634}
            }
          },
        "2014": {
            "pos":{"x": 12437,"y": 23806,"z": 0},
            "speed": {
              "value": 5.07,
              "dir":{"x": 0.89907,"y": -0.43781}
            }
          },
        ...
      }
  }
```

The messages received can be inspected interactively in our app:

![MQTT JSON format](./img/mqtt_json_packets.jpg)