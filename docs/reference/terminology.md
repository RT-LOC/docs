# Terminology

## General
`RTLS` - Real-time location system.

`Positioning` - Calculate the positions of (moving) tags.

## RTLOC terminology
`Client` - A company or organization owning a license.

`Project` - A client can have multiple RTLS projects. These are different setups at different locations that can run simultaneously.

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

`Manager` / `cxRTLS` - Powerful RTLS engine & UWB debugging app

`Engine` / `cxEngine` - Algorithm implementation, calculates positions from distances

`Viewer` / `cxViewer` - (3D) Position viewer

`API` - Application Protocol Interface. Chout out [our RTLS API](/positioning/apis_overview.html).

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
