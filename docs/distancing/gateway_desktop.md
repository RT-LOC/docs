# Gateway to Ranger software

## Install the Ranger software

A convenient way to manage our tools is the Hub app. You can get it at [https://cloud.rtloc.com/download](https://cloud.rtloc.com/download). (Currently Windows only, requires some space on the C drive). From the Hub app you can download the Ranger app.
Another option is to install the Ranger app by itself, you can request the executable from us.

## Set up gateway

Power the gateway (micro USB) and connect it to LAN. If the gateway has a (recent) gateway firmware it should automatically be detected and show up in the list of devices.

If you're using an RTLS anchor device, you will need to re-flash it as a gateway first.

![Downloading firmware](./img/downloading_fw.png)

## Setting up tags

When turning on tags, they should automatically appear in the tag list. When tags go offline, they'll have a red dot indicator which turns green again when you turn them on.

## Accessing data (API)

The distance and event data can be exported to your own application using one of our APIs. Current options include REST (HTTP POST) or MQTT (publishing to a broker, to which your client can subscribe). For the REST option you'll have to provide the POST route of your back-end. To configure MQTT you'll have to provide the broker link, login credentials and the topic to post to.

![MQTT API settings](./img/dist_apis.jpg)
