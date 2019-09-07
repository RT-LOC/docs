# MQTT data connection

You can receive data in a pub/sub fashion, through our hosted Mosquitto (MQTT) broker. Use the following configuration for your MQTT client:

* Host: mqtt.cloud.rtloc.com
* Port: *8083 (WSS) or 8883(TCP TLS)*
* Username: *Your username*
* Password: *User password, or valid JWT*

## MQTT clients

Clients can connect to the MQTT broker over TCP/TLS or a secure Websocket (WSS).
Example client libraries:

* Javascript (browser): [MQTT.js](https://www.npmjs.com/package/mqtt) (Recommended for web applications), [Eclipse Paho](https://www.eclipse.org/paho/clients/js/), ...

* Python: [Paho MQTT](https://pypi.org/project/paho-mqtt/), ...

* C#: [MQTTnet](https://github.com/chkr1011/MQTTnet), Eclipse Paho, ...

* ...