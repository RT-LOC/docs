# Basic Positioning
If you're new to RTLS or if the problem you're trying to solve is relatively easy, our `Basic Positioning` solution offers everything you need to quickly get started.
The most important characteristics of this system are the following:
 - Fully wireless setup. No need to connect hardware to the computer, install drivers, ...
 - Readout of all the data via BLE
 - Autopositioning of the anchors 

This solution is tailored to get you started as quickly as possible with a limited amount of tags (12) and anchors (8).

## More details on BLE
This system can function 100% based on Bluetooth Low Energy or BLE communication.
BLE gives us the possibility to read out the data (distances) on any device which supports BLE4.0 (basically any recent device).
More information can be found [here](/hardware/hw_interface_ble.html).


## Minimal requirements
:::warning NOTE:
  If you have bought the `Starterskit`, everything is included in the box to get started and the hardware is preflashed.
  You can skip ahead to the [Getting Started](/getstarted/basic_positioning_getting_started.html#getting-started) section.

  If you bought a starters license to use on your own hardware from other vendors you already owned (e.g. if you bought Decawaves MDEK kit), you can continue reading here.
:::

Before you get started, make sure you have at least the following hardware:
 - 4 or more anchors with power supply
 - 1 or more tags with power supply
 - A computer (desktop or laptop) with bluetooth support and Google Chrome.

 Please refer to our [list of supported tags and anchors](hardware/hw_boards.html).

### Flashing the boards
In order to make use of our system, we need to flash the correct firmware on the boards.
This can be done via the [RTHub](/hub/firmware.html) PC app.

## Features
### Fully Wireless

### Fully Automatic

### Autopos

### Configuring the system

### APIs

## Feature Roadmap
### Read out data via all anchors
#### Description
Right now you can only read out data of the system and of the tags via the Initiator anchor.
You will be able to also read out this information via any anchor with which you can make a Bluetooth connection.
Note that changing the configuration of the system will always go via the Initiator anchor.

#### Date expected

### Read out data directly via tag



### Local system
Now internet connection necessary. 
Soon setup own MQTT connection.
