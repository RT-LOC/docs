# Device setup
On this page you can find more information on some good (and bad) practices when you deploy a system. When you want to set up a high-end RTLS, you should keep a couple of simple rules in mind.

<!-- ## Basic requirements
You will need at least the following hardware:

* 1 Listener
* 3 Anchors
* 1 Tag
* 1 Switch
* 4 Micro usb cables (type B)
* 2 Ethernet cables

> If you have bought the Introduction Kit, these items should be included. -->

## Connect listener anchor(s)
* Connect the listener to the LAN network
  - You can use a switch
* The lights on the ethernet plug will start blinking.

* Check that the listener is detected
  - In the desktop software: Go the the screen 'Floor' in which you will see the Listener Module. All the connected listeners are listed here. It will show you to which IP address it is sending its data (this can be unicast, multicast or broadcast), together with the port.

getting_started-listener2.png

Make sure you see the IP-address of your PC in the column SendTo, and the IP-address of the listener is colored green.
If you are having problems getting the listener into the system, please click [here](troubleshoot_enet.html) to go to the troubleshoot.

## Placing anchors
* Pick strategic places for the anchors
  - They should be spread across the room
  - Make sure they are placed so that they are not blocked by big objects (especially metal)

* For each anchor:
  - Connect to power:
    + Micro-USB
    + Power over Ethernet (PoE)
  - If all is well, you should see a green light blinking on all boards.
  - See a different light? See troubleshooting

* Check connection in software:
  - Connect By pressing AutoSetup, the system will automatically be set up and you won't have to bother about the details. Wait for about 15 seconds after pressing the button. You will see the green IP turn red for a short moment. All the anchors & tags that are powered on will start to appear in the list.

getting_started-tags.png

getting_started-anchors.png

  - If all is good, the numbers in the column DecaNr should turn right. This means data of these nodes is received.

## Basic rules

* **Strategically place your anchors.**
If you want accurate results, it's best that you have measurements from different sides of the target. Ideally you should try to have anchors in a rectangle around the position you're measuring.
Also make sure that every possible point in space you want to locate has at least 4 anchors with clear line of sight (LOS) on it.
