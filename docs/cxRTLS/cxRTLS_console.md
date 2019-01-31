# Console
The console is the primary interface to quickly read out data from the board and set settings.

## Usage 
The console is accessible via one of the [hardware interfaces](/hardware/).
The easiest way to test the interface is to  hook up one of your boards with a USB connection. Our PC software suite contains a [built-in console window](/cxRTLS/cxRTLS_actions.html#usb) that you can use to send the commands. 
## Commands
### General
#### `help`
Get a list of all available commands

#### `v`
**Parameters:** none

Read the current version of the firmwares

#### `reset`
**Parameters:** none

Reset the board via a software reset.

#### `rb`
Read back bytes from the internal flashing.

**Parameters:** [1] start, [2] stop
```
[1] - uin32
 - 0..0x40000: start byte of the readout

[2] - uin32
 - 0..0x40000: end byte of the readout 
```

#### `jumpbl`
Jump back to the bootloader and stey there.

**Parameters:** none

#### `jump`
**Parameters:**  [1] target

```
[1] - uint8: 
 - 1: firmware loader
 - 2: tag
 - 3: anchor
```

### System
#### `free`
Free memory on the stack/heap.

**Parameters:** none

#### `uptime`
Uptime in seconds since last reboot.

**Parameters:** none

#### `synctime`
Synchronized system time. Expressed in microseconds.

**Parameters:** none

#### `ps`
List of all running threads

**Parameters:** none

#### `stats`
Statistics of the board (diagnostic statistics, algorithmic statistics, ...). 

**Parameters:** none


### Network <Badge text="anchor only" type="warn"/>
#### `inetinfo`
Display all the inet info such as IP address, netmask and gateway. 

**Parameters:** none

#### `setip`
Set the IP address

**Parameters:** [1] ip, [2] netmask, [3] gateway

```
[1] - IP format:
 - e.g. 192.168.0.101
[2] - IP format:
 - e.g. 255.255.255.0
[3] - IP format:
 - e.g. 192.168.0.1
```

### Sensors
#### `ssr`
Set the sample rate of sensor

**Parameters:**  [1] sensor, [2] rate
```
[1] - uint8: 
 - 1: accelerometer
 - 2: gyroscope
 - 3: magnetometer
 - 4: pressure sensor
 - 5: ...

[2] - uint16: 
 - 0..1000 for accelerometer and gyroscope
 - 0..80 for magnetometer
```


## Firmware Update
You can perform a Firmware Update of the tag/anchor via the Console. More info [here](cxRTLS_fwup.html#usb)