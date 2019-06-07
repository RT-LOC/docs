# Viewer

The viewer tab contains a web app to display a setup in 3D. Positioning data can be 2.5D (fixed Z) or 3D.

![viewer](https://res.cloudinary.com/dki7divh8/image/upload/q_auto/v1554118062/rtloc_com/viewer_karting.gif)

## Viewing data
Tag and anchor positions can come from data (websocket/MQTT) connection or from local BLE readout.

### No devices visible?
* Data connection: check the "debug" tab for counts per packet type
  - STATUS, TAGS and POS packets are relevant for displaying tags
  - ANCHORS packets are needed to display anchors

* BLE: Open the BLE device info view, check that position packets are received from the "Location service" console

## Floor configuration
You can upload a 2D image describing your floor (e.g. a floorplan) or use one of the pre-made models (generic field, football field, athletics track, ...). Use the settings drawer (right side) to tweak the floor to your needs.
