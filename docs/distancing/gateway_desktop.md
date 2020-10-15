# Gateway to Ranger software

## Set up gateway

Power the gateway (micro USB) and connect it to LAN. If the gateway has a (recent) gateway firmware it should automatically be detected and show up in the list of devices.

If you're using an RTLS anchor device, you will need to re-flash it as a gateway first.

![Downloading firmware](./img/downloading_fw.png)

## Setting up tags

When turning on tags, they should automatically appear in the tag list. When tags go offline, they'll have a red dot indicator which turns green again when you turn them on.

## Accessing data (API)

The distance and event data can be exported to your own application using one of our APIs. Current options include REST (HTTP POST) or MQTT (publishing to a broker, to which your client can subscribe). For the REST option you'll have to provide the POST route of your back-end. To configure MQTT you'll have to provide the broker link, login credentials and the topic to post to.

> Remark: for MQTT

![MQTT API settings](./img/dist_apis.png)
