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
  You can skip ahead to the [Getting Started](/install/basic_positioning_getting_started.html#getting-started) section.

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

## Getting Started
::: tip
If you are using starterskit, the devices should already have the necessary firmware. In case you want to update the firmware on the tags (or switch to Distance Tracking). Take a look at our guide of [hardware flashing](/hardware/flashing/hw_flashing.html).
:::
::: tip
Although not required, it can be convenient to download RTHub  on (https://cloud.rtloc.com/download)[https://cloud.rtloc.com/download].
:::
::: warning
For now we advise to use Google Chrome. Other browsers have not been tested.
:::

So let's get started! 
### Login on the Portal
Before turning to the hardware, you need to make sure you have an account with which you can login. Open the **portal app** from RTHub or via [https://cloud.rtloc.com/ble](https://cloud.rtloc.com/ble). Log in using your account, or create one if you haven't already.

Optionally, create an RTLS "Project". This is not a hard requirement for these first steps.


### Anchors
First we take care of the anchors. 
  1. **Power** all devices over USB (using a power adapter or a battery)
  2. Hang the anchors in a good place (TODO - more information here)
  3. Press the **Bluetooth** icon and select "Connect to device". 
  
  ![BLE](../web/img/ble.jpg)

  Click on the initiator device, called *INITxxx* and press "Pair".
  
  ![BLE](../web/img/ble2.png)

  A Bluetooth connection is now being made. If successful, you should see some device information in the bluetooth page of our portal app. You should see something like this:

  ![BLE](../web/img/ble3.png)

When all these steps are done, we can continue with calculating where the anchors are hung. We do this by __autopositioning__ the anchors. They will try to figure out their relative positions automatically. 

  4. Open the "visualize" tab and press the **autoposition** button. The anchor XYZ coordinates are now being measured. 

![BLE](./img/autopos.png)

You can track the progress of the algorithm live. You will see distances being measured between the anchors.

![BLE](../web/img/ble4.png)


Once the algorithm is done, the view will automatically switch to visualise the anchors. You can check if these positions correspond to where you have placed your anchors.
If something went wrong during the autopositioning algorithm, you will get notified to try it again.
![BLE](../web/img/ble5.png)

### Tags
Now that all anchor stuff is done, we can focus on the tags.
The only thing you have to do is power the tag up. After a couple of seconds, the positions of the tag are coming in and all active tags are visualised.

[SCREENSHOT]

<!-- TODO: screenshot of visualization -->



## Troubleshoot
If you lost the connection with the anchor for some reason, it should reconnect automatically.
If this isn't the case, refresh the page and try to connect again.
[TODO]

## What's next?
You can connect your own app to the device BLE interface and use the RTLS data. Check out the [BLE API details](api/api_ble) for BLE development.

It is also possible to access a real-time stream of position- and sensordata. We provide data in binary and JSON format, over UDP, TCP, websocket or MQTT. To do this, you will need a license for our professional setup. This also includes professional UWB debugging tools on the desktop.
