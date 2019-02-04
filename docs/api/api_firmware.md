# Firmware API

## General
### `set subversion`
``` C
void        ctx_set_subver(uint8_t subver);
```
**Parameters:**  [1] subver

### `get short uID`
``` C
uint16_t    ctx_get_uid_short(void);
```
**Parameters:**  /

### `get long uID`
``` C
uint64_t    ctx_get_uid_long(void);
```
**Parameters:**  /

### `get tag is fast`
``` C
uint8_t     ctx_tag_is_fast(void);
```
**Parameters:**  /


## Tagdata
### `get tagdata`
``` C
uint8_t *   ctx_get_tagdata(void);
```
**Parameters:**  /
**Return value:**  Pointer to the tagdata structure.


### `get tagdata length`
``` C
uint16_t    ctx_get_tagdata_len(void);
```
**Parameters:**  /
**Return value:**  Length of the tagdata


### `get tagdata done`
``` C
void        ctx_get_tagdata_done(void);
```
**Parameters:**  /
**Return value:** /

### `set tagdata`
``` C
uint8_t     ctx_set_tagdata(uint8_t *buf, uint16_t len);
```
**Parameters:**  [1] pointer to the tagdata out, [2] tagdata length
**Return value:**  0 = NOK, 1 = OK

### `set tagdata done`
``` C
uint8_t     ctx_set_tagdata_done(void);
```
**Parameters:**  /
**Return value:**  0 = NOK, 1 = OK


## User Environment (flash memory)
### `Save User Environment`
``` C
uint8_t     ctx_flash_save_user_environment(uint8_t *buf, uint32_t len);
```
**Parameters:**  [1] pointer to which the user environment has to be written, [2] length to write
**Return value:**  0 = NOK, 1 = OK


### `Read User Environment`
``` C
uint8_t     ctx_flash_read_user_environment(uint8_t *buf, uint32_t len);
```
**Parameters:**  [1] pointer to which the user environment has to be read, [2] length to read
**Return value:**  0 = NOK, 1 = OK

## USB
### `usb is connected`
``` C
uint8_t     ctx_usb_is_connected(void);
```
**Parameters:**  /
**Return value:**  0 = not connected, 1 = connected


### `usb data read`
``` C
uint16_t    ctx_usb_data_read(uint8_t *buf, uint16_t buf_len);
```
**Parameters:**  [1] pointer to which the usb data has to be read, [2] length to read
**Return value:**  ...


### `usb data write`
``` C
uint16_t    ctx_usb_data_write(char *buf, uint16_t len);
```
**Parameters:**  [1] pointer to which the usb data has to be written, [2] length to write
**Return value:** ...


## Sensors
### `set default values`
``` C
void        ctx_sens_set_default_values(void);
```
**Parameters:**  /
**Return value:** /


### `save sample count to external flash`
``` C
uint32_t    ctx_sens_save_to_ext_flash_sample_cnt(void);
```
**Parameters:**  /
**Return value:**  ...

### `increase sample count saved to external flash`
``` C
void        ctx_sens_save_to_ext_flash_sample_cnt_inc(void);
```
**Parameters:**  /
**Return value:** /


### `save sensor values to external flash`
``` C
uint8_t     ctx_sens_save_to_ext_flash(void);
```
**Parameters:**  /
**Return value:**  0 = NOK, 1 = OK

### `set auto taguserdata`
``` C
uint8_t     ctx_sens_auto_taguserdata(void);
```
**Parameters:**  /
**Return value:**  0 = NOK, 1 = OK


### `initialize parameters`
``` C
void        ctx_sens_param_init(void);
```
**Parameters:**  /
**Return value:**  ..



``` C
sensors2_t * ctx_sens_store_values(sens_data_t *data);
sensors_t *  ctx_get_stored_values(void);
uint16_t     ctx_sens_get_sample_rate(void);
uint16_t     ctx_sens_thread_delay(void);
void         ctx_sens_thread_suspend(void);
void         ctx_sens_thread_delay_us(uint32_t us);
void         ctx_sens_thread_delay_ms(uint32_t ms);
void         ctx_sens_interrupt_init(void);
void         ctx_sens_interrupt_wait(void);
```

## Timing
### `get synchronized time`
``` C
uint64_t    ctx_time_get_sync_time(void);
```
**Parameters:**  /
**Return value:**  The synchronized time. Format = ..


### `get local time`
``` C
uint32_t    ctx_time_get_local_time(void);
```
**Parameters:**  [1] pointer to which the usb data has to be written, [2] length to write
**Return value:** The local time. Format = ..

