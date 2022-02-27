# JSON APIs

Real-time data (position data, tag/anchor statuses, sensor data, etc.) can be received in JSON format to conveniently integrate it with your own backend solution.

## Connection setup

1. Configure data transmission over MQTT / websocket in our Engine application (in the API view)

2. Connect to your client to the correct IP + port

### Engine MQTT configuration
You can use our MQTT broker (some limitations may apply) or set up your own broker.

Make sure your RTLS setup is publishing MQTT data to the broker.
Use the following configuration for your MQTT client(s):

* Host: mqtt.cloud.rtloc.com
* Port: 1883 (TCP), 8083 (WSS) or 8883(TCP TLS)
* Username: *client slug**: *user e-mail*
* Password: user password, or valid JWT

You can find the *client slug* in the license description, in the Desktop app or the Portal at [https://app.rtloc.com/settings/info](https://app.rtloc.com/settings/info).

The MQTT topic and data format per type of message is outlined in the [format description](/api/api_web.html).

### Client code
Check out the code examples at [https://github.com/RT-LOC/APIs](https://github.com/RT-LOC/APIs) (C, Python, Javascript) to get started with your own MQTT client.

## JSON data format

## Anchor list
* MQTT topic: `rtls/replay/<project-slug>/anchors`

```json
{
  "ver": 1,
  "anchorList": {
    <id>: [<x>, <y>, <z>]
  }
}
```

## Positioning information
Per tag position information

* MQTT topic: `rtls/replay/<project-slug>/posxyz`

```json
{
  "ver": 1,
  "frameNr": , // frame number
  "tags": {
    <id1>: {
      "offset": <offset>,
      "data": {
        "dist": {
          <aid2>: [<dist>, <LOS1>, <RSSI1>, <LOS2>, <RSSI2>, <offset>],
          ...
        },
        "pos": [<x>, <y>, <z>]
      }
    },
    <id2>: ...
  }
}
```

## Status
List of status information per tag

* MQTT topic: `rtls/replay/<project-slug>/status`

```json
  // With example data:
{
  "ver": 1,
  "tagStatus": [
    {
      "id": 101           // Device ID
      "frameOff": 0       // Frame offset
      "uptime": 32972
      "antD": 16475       // Antenna delay
      "volt": 0           // Battery voltage
      "hwNr": 2           // Hardware number
      "verConfig": 579    // Version: config
      "verSpeed": 145     //    "     speedfile
      "verLoader": 65534
      "verTag": 456
      "verBoot": 14
      "verSub": 0
    },
    {
      ...
    }
  ]
}
```

## Tag list
* MQTT topic: `rtls/replay/<project-slug>/tags`

```json
[
  "ver": 1,
  "tagList": {
    <id>: [<x>, <y>, <z>]
  }
]
```