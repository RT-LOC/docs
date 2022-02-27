# CAN
The system supports CAN/CANOpen.
You're able to send all raw CAN data over the air to the PC and much more.

## Prerequisites
First make sure that your system is all setup and you have all the necessary files. Note that you will at least need a Windows PC to run the PC software, and a Linux PC to flash the boards (this is also possible on Windows though).

### JLink
Installation instructions for both OS's can be found here: [HERE](https://gnu-mcu-eclipse.github.io/debug/jlink/install/).

#### Linux
On linux, you will need to have JLinkExe installed in order to be able to flash. Make sure the Path includes the directory to JLinkExe.

#### Windows
On windows you will need to install JLink.exe. Make sure the Path includes the directory to JLinkExe.

The link to the last version can be found here:
[CLICK](https://www.segger.com/downloads/jlink/JLink_Windows.exe).

So now we need to edit the Path so that JLink.exe can be run easily from the Command Prompt (and thus in .bat files and so on).

On Windows 10, the steps to edit the Path are as follows:
1. Open the Start Search, type in “env”, and choose “Edit the system environment variables”:
2. Click the “Environment Variables…” button.
3. Under the “System Variables” section (the lower half), find the row with “Path” in the first column, and click edit.
4. The “Edit environment variable” UI will appear.

Now add the correct path. For example:
```
C:\Program Files\SEGGER\JLink_V632h\
```

When this has happened, open a new Command Prompt (start -> 'cmd'), and type JLink. Pressing enter should bring you into the JLink program (in the command prompt still). If this has worked, you're ready to flash.

### Engine
The main software that you will use is Engine. Engine only runs on Windows. All versions from 34110 on support CAN. If you have an older version, please request a new one.
In order to run RTLEngine, you will need to have a valid License. Whenever you start Engine for the first time, you probably don't have a license yet. To acquire one, press 'Build license.txt'.
A dialog message will appear and the file license.txt will be created on the following path:
```
c:/cxRTLS/license.txt
```
Send this file to the e-mail address written in the dialog box to receive the proper license file.
After sending this e-mail, you will receive a file called license.bin, which you have to drop here:
```
c:/cxRTLS/license.bin
```
Doing this will automatically activate the license.

Note that the license will only work on the computer on which you have generated license.txt. For other computers, you will have to redo the procedure.

### binaries & scripts
Make sure you have the binaries & corresponding scripts.
You can find them in a directory called something like: `CTX_RTLS_2018_07_17`.


## Flashing the boards
Connect the left USB port (seen from top) to your PC and make sure the device is recognized by the PC. It will appear as `FRDM-K64FJ` in your devicelist.
If this is the case and JLinkExe (linux) or JLink.exe (windows) has successfully been installed, you are ready to (re)flash the boards.
Change the active directory:
```
cd [PATH_TO]/CTX_RTLS_201X_XX_XX/firmwares
```
From here you should be able to run the scripts.

### Linux
Flash one anchor as a listener:
```
./f_all_ctxanchor_listener.sh
```

And the other 2 anchors (assuming you have 3) as anchors:
```
./f_all_ctxanchor.sh
```

### Windows
On windows, you can double click on the batch-files (\*.bat). To flash the listener:
```
f_all_ctxanchor_listener.bat
```
and the normal anchor:
```
f_all_ctxanchor.bat
```

If you are asked for the target interface, choose SWD.

If flashing the boards has worked, you should see blinking LEDs on the board. If they aren't, unplug and replug the USB/power cable and check again. If it's still like this, contact me (Fred).

Note that later on you can always flash more nodes as anchor or tag.

## Connecting the wires
Make sure to wire the cables correctly according to the following diagram:
TODO

## Engine
Now let's get the boards fully up-and-running. We need to configure the listener and the anchors.

### Listener
First we will make sure the listener is properly initiated.
Connect the listener to the same LAN as your Windows PC that is running Engine.
Go the the screen `Config` in which you will see the Listener Module (if the ethernet part is OK). All the connected listeners are listed here. It will show you to which IP address it is sending its data (this can be unicast, multicast or broadcast), together with the port.
Make sure you see the IP-address of your PC in the column SendTo, and the IP-address of the listener is colored green.

### Anchor(s)
First we will setup a wired anchor. This anchor is able to communicate with the PC over ethernet. (For convenience, don't use the anchor that will be connected to the CANbus here. Use it for the non-wired anchor).
Connect one anchor to the same LAN as your Windows PC that is running Engine.

In the `Config` screen, you should see the wired anchor appear in the Anchor list. It should have an IP address in a green box.
If this is the case, and no data is coming in yet, press `NEW Config`.
Press the line of the anchor and keep pressing until a box appears saying `Select TOA or TVC Slot`. Now drag it into one of the anchor slots (if it's the first anchor you add, it's better to choose the last slot (the slot with the highest number).
When this has succeeded, press `Bld Config`. The anchor will start sending and you should see data coming in in the "Sniff" screen.

Now we can add more wired or non-wired anchors. After flashing, the procedure is a little bit different, as now there are already anchors sending data.
The newly flashed anchor will see the signals of the already active anchors, and will send a "Join Request". Open the Request screen by pressing the `J:1` in the purple box (it's close to the fly in right upper corner).
Press "Add" to add the anchor to the list. You can now close the Request screen again.

Now Press `AutoAnchor` in left lower corner of the Config screen to automatically give the newly added anchor a slot. After, press `Bld Config` again to send the configuration data to the system.
Now the two anchors are in the system and ready to range and send data.

If everything is OK, the CAN data should be coming in already.


### Import the EDS
You can import existing EDS files into Engine.
Rename the file to kart.eds and put it into the following directory:
```
c:/cxRtls/CAN/
```

In the screen `CAN-Obj`, press `Import` (right lower corner). The EDS will be imported and you can now scroll through all records.

### CAN Data
All the CAN data (TX and RX) will be shown in the screen `CAN`. You can scroll through all messages, filter, ...

## TODO
 - Improve SDOs (now only simple 1-message SDOs possible, and not all data is properly captured all the time here)

 - Improve every part of this document

 - Add more TODOs

 - ...

## Known issues
- ...
