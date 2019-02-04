# Building your own Firmware  <Badge text="Advanced" type="warning"/>
When you are a partner, you will get the possibility to add custom functionality to the firmware that is running on the tags.
We provide a library against which you can build your own firmware. You will get access to your own thread in which you can run your code.
Via the API you get access to all the sensors (raw data or already processed), userdata so that you can exchange data with a computer on the side, ...

## The Library
The library contains all the core RTLS functionality which is all automatically initiated upon starting the tag. 


## Repository
The repository or repo is the storage location on our servers on which you can find the library, build scripts and more.

### Account
Upon becoming a partner, you should have received an account that gives you the ability to [log in into the repository manager] (https://git.rtloc.com/).
Not sure what your account details are? Try the password recovery. If you're still out of luck, get in touch via your prefered way (phone, skype, email) and we'll help you asap.

### Public Key
With an account, you can log in and do some basic things to your repo. In order to unlock the whole functionality of the repository and be able to push & pull to the repo from your PC, you will have to upload your PC's public SSH key.
You can find an excellent guide on how to do that [here](https://docs.gitlab.com/ee/ssh/).

### Access to your repository
Once your account is verified and your public key has been updated, you can get access to your repository via the following link:
```
git@git.rtloc.com:YOUR_COMPANY/taglib.git
```
We use the versioning system `GIT`. If you don't have experience with git, you can find a great set of tutorials [here](https://www.atlassian.com/git/tutorials).
Now you can start fetching, pulling and pushing your code.

## Setup
Once you have access to your repository, you can download the library and start building your own firmware.
If you're an embedded guru, you might have a nice VIM setup on which work your magic.
Alternatively, in the repository you will find a `Visual Studio Code` workspace file that will get you started right away.

## API
The following functions are available.

### General
``` C
void        ctx_set_subver(uint8_t subver);
uint16_t    ctx_get_uid_short(void);
uint64_t    ctx_get_uid_long(void);
uint8_t     ctx_tag_is_fast(void);

### Tagdata
``` C
uint8_t *   ctx_get_tagdata(void);
uint16_t    ctx_get_tagdata_len(void);
void        ctx_get_tagdata_done(void);
uint8_t     ctx_set_tagdata(uint8_t *buf, uint16_t len);
uint8_t     ctx_set_tagdata_done(void);

### User Environment (flash memory)
``` C
uint8_t     ctx_flash_save_user_environment(uint8_t *buf, uint32_t len);
uint8_t     ctx_flash_read_user_environment(uint8_t *buf, uint32_t len);
uint8_t     ctx_usb_is_connected(void);
uint16_t    ctx_usb_data_read(uint8_t *buf, uint16_t buf_len);
uint16_t    ctx_usb_data_write(char *buf, uint16_t len);
```

### Sensors
``` C
void        ctx_sens_set_default_values(void);
uint32_t    ctx_sens_save_to_ext_flash_sample_cnt(void);
void        ctx_sens_save_to_ext_flash_sample_cnt_inc(void);
uint8_t     ctx_sens_save_to_ext_flash(void);
uint8_t     ctx_sens_auto_taguserdata(void);
void        ctx_sens_param_init(void);

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

### Timing
``` C
uint64_t    ctx_time_get_sync_time(void);
uint32_t    ctx_time_get_local_time(void);
```

:::warning Note
For more detailed information, please check the [Firmware API](/api/api_firmware.html).
:::

## Conclusion

