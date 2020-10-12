# Tag Bluetooth API

Each tag has a BLE API available through which you can check it's data and configuration.

## Application service 014b3880-0748-4ad8-9228-f22c0a749de5

Characteristics:

- IDs, read/write, f5447723-535a-428d-b2bf-3d608a0cc848
- uint16 **UID**; uint16 **CompanyID**
- Event data, notify, 24b54f87-85b2-4f2f-9755-eaafed1c22c8
- uint16 **event number**; uint8 **type**; uint8 **min dist1**; uint16 **Foreign ID**; uint8 **timestamp[8]**; ****uint16 **duration**; uint8 **closest-dist(dm);** uint16 **companyID**; uint8 **sync constant**;
- Event number = the index of the event (for internal -> 1 - 1000, for external storage 1 - 50000)
- Type:
    - Enter SD min zone (1)
    - Exit SD min zone (2)
    - Enter near zone (3)
    - Exit near zone (4)
    - Exit min zone via Timeout (5)
- Min dist 1 - limit that has been breached
- Foreign ID = id of other tag
- Timestamp:
1. uptime as an uint32 (seconds) -> ts[0]..ts[3]
- Ts[7] = 1 if an offset (e.g. epoch on connection) is added to the uptime).
- Duration - how long did events take? (for enter events duration = 0)
- Closest-dist[dm] = how close did tags come to each other? (for enter events closest-dist = 0)
- Company ID - company ID
- Sync constant - 0 = regular breach, 1 = sync breach, 2 = final breach of synchronization
- Event Request, read/write, c01fd00c-4935-4fcd-85c5-8eddd4883365

WRITE

- Uint16 start sample; uint16 amount of samples
- Upon writing this data, the requested samples are outputted via the notify event.
- If you write 0 as start sample, we will output the '*amount'* last samples.
- If you write 0xFFFFFFFF, this will erase the last sample that has been read out.
- If you write 0xFFFFFFFE, this will erase the whole Flash
- If you write 0xFFFFFFFD, this will generate 100 fake events

READ

- Uint16 start sample; Uint16 stop sample
    - Index of the first and last sample that are stored in the flash
- MSD Flags, read/write, dc3ae5d5-c6f4-4df4-b321-ef6e3763ced7
- uint16 settings, bitwise:
    - Bit0 = UWB ON
    - Bit1 = Offloading Distances UART
    - Bit2 = Offloading Events UART
    - Bit3 = Offloading Distances BLE
    - Bit4 = Offloading Events BLE
    - Bit5 = Offloading Distances UWB
    - Bit6 = Offloading Events UWB
- Bit8 = Switchoff UWB when inactive
- 
- MSD thresholds, read/write, c467f4eb-79b8-4e9e-a2a4-957ad523cc93
- uint16 minimum dist (cm); uint16 near dist (cm);uint16 minimum_time (seconds);
    - Mintime: Minimum time that the other tag has to breach the minimum distance, defaults to 1 second.
- Alarm settings, read/write, f555fe16-6734-48d2-a41a-88d873516d54
- uint16 led delay [sec]; reserve;

uint16 reserve; reserve;

uint16 reserve;

- Alarm Timeout = timeout time for alarm in seconds. After each double press on the button the alarm timeout is resetted.
- Distance data, notify, c5afab7d-123a-4d9d-bff4-ba472e471965
- uint8 **count**; *count* x [uint16 **ID**; uint16 **dist(cm)**]

## Battery level service

Characteristics:

- Battery level

## Device Information Service

Characteristics:

- Node ID
    - DIS “System ID”
- Hardware version

Format = (float) (within string)

1.0 == DWM1001-Dev

1.1 == MSD Hub

- Firmware version

Format = (float) (within string)

E.g. "1.1301"

- Serial Number
- Manufacturer Name

## Current Time Service client

*A client service to read the time from the mobile phone. This is available on a system level on iOS devices, and exposed via the app on Android. This is to be used for the tag’s own time keeping, and for timestamping events.*

*This should be synchronized on BLE connection, and potentially on a disconnect event (when supported by the system)*

Characteristics:

- Current Time, read/write/notify, 2A2B

WRITE

- Write epoch in seconds

READ + NOTIFY

- Time as epoch in seconds