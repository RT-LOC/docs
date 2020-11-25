# Updating firmware

There are a few methods to change a device's firmware:
1. Over USB using our software
2. Over USB using a standalone script
3. Over BLE (DFU)
4. Over UWB, via a gateway (can do multiple devices at once)

## 1. Over USB, using our software
You can update the firmware for a single device by re-flashing it over USB.

1. Connect the device to the PC over USB
2. Download the new firmware via "Chk New Version"
  > Pick a firmware with the appropriate name: DW_DWM1001 (MDEK tag) or CTX_FRDM (anchor/gateway)
  > And the appropriate kind ("Adhoc" for Distancing)
  > If the device has a non-RTLOC firmware present, you will also need the bootloader (BL and the corresponding device name)
3. Flash to the device using the "Flash" button
  > Bootloader first, then the application firmware. (Only the firmware is required if a recent bootloader is present)

![Downloading firmware](./img/downloading_fw.png)