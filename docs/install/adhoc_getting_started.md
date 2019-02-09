# Adhoc Ranging
## Introduction
The Adhoc Ranging System is a variation of a `Mobile Adhoc Network` or `MANET`. It allows you to measure distances between different tags that have joined an adhoc network.
The tags join the adhoc network and immediately start ranging. This means **no infrastructure** is needed and the whole administration and regulation of the network is done automagically.
You can use one of the 3 interfaces to get data out of the system.

![adhoc](./img/adhoc.png)

## Basic requirements
Before you get started, make sure you have at least the following hardware:

### Positioning devices
![nodes](./img/adhoc_nodes.png)

```
  - 2 Tags
```

### Networking equipment
![network](./img/adhoc_phone.png)

```
  - 1 Phone or Tabled (with BLE)
```

### Power supplies
  ![power](./img/adhoc_power_supply.png)

```
  - 2 Micro usb cables (type B) and batteries
  or
  - 2 LiPo batteries
```

## Get Started
Here are some guides to get started:
If your tags are not flashed with the Adhoc Firmware, you will have to do that manually.
- [Flashing of the tags](/hardware/flashing/hw_flashing.html)

Do you want to use the BLE connection to read out data?
- [Setup of the BLE connection](/hardware/hw_interface_ble.html)

## Interfaces
In order to get data out of the system, we somehow need to interface with the tags. This can be done with:
- BLE (wireless)
- USB (wired)
- Network Sniffer (advanced)

### BLE
Bluetooth Low Energy gives us the possibility to read out the data (distances) on any phone/tablet/... that supports BLE4.0 (basically any recent device).
More information [here](/hardware/hw_interface_ble.html).

### USB
We can read out the device via a USB cable. More info will follow.

`NOTE: Not supported yet`

### Network Sniffer
The Network Sniffer enables all the advanced features of the system.
You can read out all the distances from all the tags that are in UWB range, see signal quality figures, debug timing, adhoc settings and much more.
More information [here](/hardware/hw_interface_sniffer.html).

## Conclusion
..