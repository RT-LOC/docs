# UWB and other RF technologies

We harness multiple wireless technologies on our boards. For ranging and the data network we use UWB. GPS is used for outdoor positioning and time management. For local readout of data end setting parameters we added Bluetooth. Below the most important RF parameters and features of these technologies are written down.

## UWB

Ultra-wideband has, as detailed in the IEEE 802.15.4 standard, a number of frequency channels of at least 500MHz wide around the 3-6GHz range. Signalling over a wide frequency range, as opposed to narrowband RF technologies such as WiFi and Bluetooth which signal at a certain frequency (2.4GHz), means using a narrow pulse in time-domain.

### Why UWB?
Because of it’s wide frequency range (and inversely related, it’s narrow pulse width), UWB has unique characteristics and capabilities when compared to other technologies:

* UWB is **not susceptible to narrowband interference**,
* UWB can provide **very accurate ranging**,
* UWB can provide a **secure communication channel**.

### Channels & Bandwidths
There are 6 channels to choose from with the following characteristics.

| Channel | Centre Frequency [MHz] | Bandwidth [MHz] |
|:---------:|:------------------------:|:-----------------:|
|    1    |         3494.4         |      499.2      |
|    2    |         3993.6         |      499.2      |
|    3    |         4492.8         |      499.2      |
|    4    |         3993.6         |      1331.2     |
|    5    |         6489.6         |      499.2      |
|    7    |         6489.6         |      1081.6     |

You can freely choose between these channels in Manager. Note that it might take up to 2 minutes for the system to be fully switched to a different channel.

## GNSS/GPS
Apart from positioning in regions where we have no UWB coverage, GPS provides a useful timing signal.

### Channels & Bandwidths
| Channel | Centre Frequency [MHz]     |  Bandwidth [MHz] |
|:---------:|:------------------------:|:-----------------:|
|    L1    |         1575.42           |      15.345      |
|    L2    |         1227.6            |      11.0        |
|    L3   |         1176.45             |      12.5      |

## Bluetooth
We allow device configuration and read-out via BLE.

### Channels & Bandwidths
| Channel         | Centre Frequency [MHz] |
|:---------------:|:------------------------:|
|    n = 0..78    |         2.402 + n      |
