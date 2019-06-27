# JSON API

The JSON/web API provides data over direct websockets (WSS) or over MQTT (TCL/TLS OR websocket).
The provided data is structured similarly as in the [`Binary API`](/api/api_application.html).

(the overview here may not be complete)

## Anchor list
* MQTT topic: **rtls/anchors**

```json
[
  {
    "id": <int>, // anchor id
    "pos": [<x>, <y>, <z>]
  }
]
```

## Positioning information
Per tag position information

* MQTT topic: **rtls/posxyz**

```json
{
  "frameNr": , // frame number
  "tags": {
    <id1>: {
      "offset": <offset>,
      "data": {
        "dist": {
          <id2>: <dist1>,
          <id23>: <dist2>
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

* MQTT topic: **rtls/status**

```json
  // With example data:
  [
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
```

<!-- ## Tag information
* MQTT topic: **rtls/tags**

```

``` -->