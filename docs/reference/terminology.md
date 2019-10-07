# Terminology

## General
`RTLS` - Real-time location system.

`Positioning` - Calculate the positions of (moving) tags.

## RTLOC terminology
`Client` - A customer of ours (possibly not the end customer, if you're an integrator), you for example?

`Project` - A project contains a license (1 license per project) and associated hardware. A client can have multiple projects. (When having multiple RTLS locations, or when selling to own customers)

`Setup` - In a project (single license) there may be a few *setups*. This happens for example when you move your hardware to a new location (for example when doing multiple (sports) events).


## Technology
Some more information on the different technologies we harness. Click here for a full comparison.

`UWB` - Ultra-wide band. A wireless technology that uses a wide spectrum of frequency bands to transmit large amounts of data over a short distance with very low power. All nodes are equipped with UWB. It is used for ranging and communication purposes.

`RFID` - Radio-frequency identification.

`BT` - Bluetooth.

`BLE` - Bluetooth Low Energy. All tags are by default equipped with a BLE chip for short range communication.

`ENET` - Ethernet. All anchors and listeners are by default equipped with ethernet.

`Lora` - Long Range digital wireless data communication technology.

## RTLS System
`Node` - One of the elements of the RTLS system. Could be an anchor, tag or listener.

`Anchor` - A reference node in the RTLS. Comparable with the satellites for GPS.

`Tag` - A node that is tracked.

`Listener` - A node that only listens to data in the air and forwards that data to a PC.

`Autopositioning` - Calculation / estimation of the positions of the anchors by the system, as opposed to manually submitting accurate coordinates. This will provide less accurate position data than submitting accurate coordinates.

`Backhaul` - Way of transporting data within the system. Can be wired of wireless.

`RTManager` / `cxRTLS` - Powerful RTLS engine & UWB debugging app

`Engine` / `cxEngine` - Algorithm implementation, calculates positions from distances

`Viewer` / `cxViewer` - (3D) Position viewer

`API` - Application Protocol Interface. See [here](../API.html).

`Task` -

`Console` - The console through which you can directly communicate with one of the nodes. This node can be attached via UART, USB or Ethernet.
Click here for more information.

`HW` - Hardware

`SW` - Software

`FW` - Firmware

`Hz` - Hertz. The derived unit of frequency [1/s].

`Hairs` - UWB message visual indications in our sniffer

`TagSpeed` - Part of the UWB configuration, containing 

`MANET` - Mobile Adhoc Network.

### Sensors
- `Accelerometer` - Measures acceleration forces. These forces may be static (such as gravity) or dynamic.

- `Gyroscope` - Measures angular velocity.

- `Magnetometer` - Measures magnetic fields.

## Other Technology
`IP66` - International Protection Marking. Rating of our enclosures. Dust- and waterproof.
More information [here](https://en.wikipedia.org/wiki/IP_Code).

`Enclosure` - The casing of the node
