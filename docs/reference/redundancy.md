# Redundancy
For some projects, the reliability of stable output is key. Most RTLS have several [Single Points of Failure (SPOF)](https://en.wikipedia.org/wiki/Single_point_of_failure). These are parts of the system that will stop the entire system from working when they fail. Some obvious SPOFs are:
 - PC that processes the data before outputting
 - Master anchor that initiates and controls the system
 - Switch in the network

Even with the best software and most reliable hardware, it is impossible to assure a 100% uptime for all components in a system. A switch can crash, a battery powered anchor can run out of battery, a PC can face a [Blue Screen of Death](https://nl.wikipedia.org/wiki/Blue_screen_of_death).

As our product is being used by companies that require the highest reliability, we built in layers of redundancy on different levels to prevent system failure upon failure of a single device.

<AnimRedun />

## Anchors
### Anchor
We don't work with a master anchor. You can unplug any of the anchors in our system, the rest of the system will keep on running.
Our anchors also don't have to be daisy-chained, as all of our anchors can transmit all their data wirelessly.

To communicate with specific anchors or tags in the system, you need an ethernet connection with one of the anchors. You can freely choose which anchor this is, and you can add as many wired anchors to the system as you want. So if one of them fails for whatever reason, you can send commands to another anchor.

<!-- Image van meerdere IP adressen in cxRTLS --> 
### Listener
Multiple listeners can be used to offload data to the PC. Overlapping data is filtered out automatically.
<!-- Image van meerdere IP adressen  listener module in cxRTLS --> 

## Tags
Multiple tags can be connected to a single output. A tag can also be powered via multiple power sources at the same time.

## Desktop/server
Our software can run on multiple PCs at the same time.
You can choose to which PC the listener is sending its data too, or have the listener multicast or broadcast the data to multiple PCs at the same time.

## Network
To prevent a network failure, you can add a second switch to the system, with different listeners connected to it.