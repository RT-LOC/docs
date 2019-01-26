# RTLOC Adhoc Ranging
## Introduction
The Adhoc Ranging System allows you to measure distances between different tags that have joined an adhoc network.
The tags will automatically join the adhoc network and immediately start ranging. This means no infrastructure is needed and the whole administration and regulation of the network is done automatically.
You can use one of the 3 interfaces to get data out of the system.

## Get Started
Here are some guides to get started:
- [Flashing of the tags](hw_flashing.html)
- [Setup of the BLE connection](hw_interface_ble.html)

## Interfaces
In order to get data out of the system, we somehow need to interface with the tags. This can be done with:
- BLE (wireless)
- UART (wired)
- Network Sniffer (advanced)

### BLE
Bluetooth Low Energy gives us the possibility to read out the data (distances) on any phone/tablet/... that supports BLE4.0 (basically any recent device).
More information [here](hw_interface_ble.html).

### UART
We can read out the device via a USB cable. More info will follow.

`NOTE: Not supported yet`

### Network Sniffer
The Network Sniffer enables all the advanced features of the system.
You can read out all the distances from all the tags that are in UWB range, see signal quality figures, debug timing, adhoc settings and much more.
More information [here](hw_interface_sniffer.html).

## Conclusion
..