# Console
The console is the primary interface to quickly read out data from the board and set settings.

## Usage 
The console is accessible via one of the [hardware interfaces](/embedded/).
The easiest way to test the interface is to  hook up one of your boards with a USB connection. Our PC software suite contains a [built-in console window](/manager/cxRTLS_actions.html#usb) that you can use to send the commands. 
## Commands
The following commands are available.

### General
```
- help
- v
- reset
- rb
- jumpbl
- jump
```

### System
```
- free
- uptime
- synctime
- ps
- stats
```

### Network 
```
- inetinfo
- setip 
```

### Sensors 
```
- ssr
```

:::warning Note
For more detailed information, please check the [Console API](/api/api_console.html).
:::
## Firmware Update
You can perform a Firmware Update of the tag/anchor via the Console. More info [here](cxRTLS_fwup.html#usb)