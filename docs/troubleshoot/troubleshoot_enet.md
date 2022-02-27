# Troubleshoot - Connectivity
Having problems with getting the listener in the system? Or is the TCP connection not reacting as expected?
If the connection is not green as below, something is going wrong.  Try the steps below to find a solution.

## 1. Listener not entering the System
A listener that is connected to the same LAN as the computer running Engine, should automatically become visible in the listener module on the Config page.
If this is not the case, please check the following things:
- Is the ethernet cable well connected to the box?
- Is your computer well connected to the LAN?
- Does the host computer have the correct network settings? Is the network card enabled?
- ...

Some more things you can try:
- Change the ethernet cable to rule out there is no problem with it.
- Try to restart Engine.
- Try to restart the host computer.

If you know the IP address of the node, try pinging it.
- Check the ARP table on the router. If you recognize the IP-address of the listener in there ...

In case all the boxes above are checked, try connecting the listener directly to the computer.


## 2. Orange TCP connection
The computer is aware of the node, but cannot successfully establish a TCP connection with it.
Make sure the computer is in the same IP subnet as the node.
A difference in IP range/subnet could occur when for example:
- The node has a fixed IP but in a different range than the established network
- The node wasn't able to contact the DHCP server and got a self-assigned IP address in the 169.254.0.0/16 range.
- The computer has multiple network interfaces (e.g. WiFi and ethernet) and the dominant one is on a different subnet.

## 3. Red TCP connection
The connection has been active before. Please refer to 1.

## 4. Not receiving any of the Output Data
Please refer to here (XX) to get more information on the Output Data API.
### TCP connection
In case you expect the data via TCP, make sure you have a TCP connection established with the TCP Output server. In Engine, you can monitor the active TCP connections in the API screen.
If this is the case, you can verify in the logConn screen that the data is actually transmitted. Click here to read more about the logConn.
Make sure the UDP1 is not enabled. This will prevent the data from being outputted over the TCP connection.

### UDP connection
Make sure the right IP address is filled in in the API screen, and UDP1 and/or UDP2 is enabled.
