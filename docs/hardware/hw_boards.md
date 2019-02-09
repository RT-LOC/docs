# Boards

## Anchors
### Shield

### Titan

### Io

## Tags

### Mars

### Jupiter

### DWM1001
We fully support the [DWM1001 boards](https://www.decawave.com/product/dwm1001-module/). This is a lowcost node designed by Decawave.
It is powered  by the nRF52832 chip that has built-in BLE support. 
![DWM1001](./img/hw_DWM1001.jpg)

### Others
Some of our clients have built custom tags that our fully featured by our tag firmware.


## Features

### Firmwares
|                 | ![icon][shield]  |![icon][mars] | ![icon][jupiter] | ![icon][dwm1001] | ![icon][titan] | ![icon][io] |
|:---------------:|:-------------:|:--------:|:-----------:|:-------:|:-----------:|:--------:|
|    Bootloader   |   ![][V]       |     ![][V]    |      ![][V]      |    ![][V]    |     ![][V]     |    ![][V]   |
| Firmware Loader |   ![][V]       |     ![][V]    |      ![][V]      |    ![][x]    |     ![][V]     |    ![][V]   |
|      Tag FW     |   ![][V]       |     ![][V]    |      ![][V]      |    ![][V]    |     ![][x]     |    ![][x]   |
|    Anchor FW    |   ![][V]       |     ![][x]    |      ![][x]      |    ![][x]    |     ![][V]     |    ![][V]   |
|   Listener FW   |   ![][V]       |     ![][x]    |      ![][x]      |    ![][x]    |     ![][V]     |    ![][V]   |
|     Adhoc FW    |   ![][V]       |     ![][V]    |      ![][V]      |    ![][V]    |     ![][x]     |    ![][x]   |

### Sensors
|                 | ![icon][shield] | ![icon][mars]  | ![icon][jupiter] | ![icon][dwm1001] | ![f][titan] | ![icon][io] |
|:---------------:|:-------------:|:--------:|:-----------:|:-------:|:-----------:|:--------:|
| accelerometer   |       ![][vV]       |     ![][Vv]    |      ![][Vv]      |    ![][vV]    |     ![][vV]     |    ![][Vv]   |
| gyroscope       |       ![][xx]       |     ![][Vv]    |      ![][Vv]      |    ![][xx]    |     ![][vV]     |    ![][Vv]   |
| magnetometer    |       ![][xx]       |     ![][Vv]    |      ![][Vv]      |    ![][xx]    |     ![][vV]     |    ![][vV]   |
| pressure        |       ![][xx]       |     ![][xx]    |      ![][xx]      |    ![][xx]    |     ![][vV]     |    ![][vV]   |
| temperature     |       ![][xx]       |     ![][xx]    |      ![][xx]      |    ![][xx]    |     ![][vV]     |    ![][vV]   |
| humidity        |       ![][xx]       |     ![][xx]    |      ![][xx]      |    ![][xx]    |     ![][xx]     |    ![][vV]   |

### Power
|                 | ![icon][shield] | ![icon][mars]  | ![icon][jupiter] | ![icon][dwm1001] | ![f2][titan] | ![icon][io] |
|:---------------:|:-------------:|:--------:|:-----------:|:-------:|:-----------:|:--------:|
|  Battery (+5V)  |       ![][V]       |     ![][V]    |      ![][V]      |    ![][V]    |     ![][V]     |    ![][V]   |
|      USB        |       ![][V]       |     ![][V]    |      ![][V]      |    ![][V]    |     ![][V]     |    ![][V]   |
|      PoE        |       ![][x]       |     ![][x]    |      ![][x]      |    ![][x]    |     ![][V]     |    ![][V]   |
|     +12V        |       ![][x]       |     ![][x]    |      ![][V]      |    ![][x]    |     ![][V]     |    ![][V]   |
|   240V AC       |       ![][x]       |     ![][x]    |      ![][x]      |    ![][x]    |     ![][x]     |    ![][V]   |

### Size & Weight
|                 | ![icon][shield] |![icon][mars] | ![icon][jupiter]| ![icon][dwm1001] | ![f2][titan] | ![icon][io] |
|:---------------:|:-------------:|:--------:|:-----------:|:-------:|:-----------:|:--------:|
|  length [mm]    |     100       |     V    |      V      |    V    |     V     |    V   |
|   width [mm]    |     100       |     V    |      V      |    x    |     V     |    V   |
|   height[mm]    |     100       |     V    |      V      |    V    |     x     |    x   |
|    weight[g]    |     100       |     x    |      x      |    x    |     V     |    V   |


### Connectivity
|                 | ![icon][shield] | ![icon][mars]  | ![icon][jupiter] | ![icon][dwm1001] | ![f2][titan] | ![icon][io] |
|:---------------:|:-------------:|:--------:|:-----------:|:-------:|:-----------:|:--------:|
|      USB        |       V       |     V    |      V      |    V    |     V     |    V   |
|      SPI        |       V       |     V    |      V      |    x    |     V     |    V   |
|      UART       |       V       |     V    |      V      |    V    |     x     |    x   |
|      I2C        |       V       |     x    |      x      |    x    |     V     |    V   |
|      CAN        |       V       |     x    |      x      |    x    |     V     |    V   |
|     RS232       |       V       |     V    |      V      |    V    |     x     |    x   |
|     Ethernet    |       V       |     V    |      V      |    V    |     x     |    x   |
|  Opto Coupler   |       V       |     V    |      V      |    V    |     x     |    x   |

### RF
Wireless technologies. More details on each technology [here](/reference/rf.html).

|                 | ![icon][shield] | ![icon][mars]  | ![icon][jupiter] | ![icon][dwm1001] | ![f2][titan] | ![icon][io] |
|:---------------:|:-------------:|:--------:|:-----------:|:-------:|:-----------:|:--------:|
|      Decawave   |       V       |     V    |      V      |    V    |     V     |    V   |
|      BLE        |       x       |     V    |      V      |    V    |     V     |    V   |
|      868 MHz    |       x       |     x    |      x      |    x    |     V     |    V   |
|       Lora      |       x       |     x    |      x      |    x    |     x     |    V   |


### Other
|                 | ![icon][shield] | ![icon][mars]  | ![icon][jupiter] | ![icon][dwm1001] | ![f2][titan] | ![icon][io] |
|:---------------:|:-------------:|:--------:|:-----------:|:-------:|:-----------:|:--------:|
|   Qi-charging   |       x       |     V    |      x      |    x    |     x     |    x   |      
|      GPS        |       x       |     x    |      x      |    x    |     V     |    V   |





[mars]: ./img/icon_mars.png
[dwm1001]: ./img/icon_dwm1001.png
[titan]: ./img/icon_titan.png
[io]: ./img/icon_io.png
[jupiter]: ./img/icon_jupiter.png
[shield]: ./img/icon_shield.png

[x]: ./img/icon_x.png
[v]: ./img/icon_v.png
[xx]: ./img/icon_xx.png
[vv]: ./img/icon_vv.png