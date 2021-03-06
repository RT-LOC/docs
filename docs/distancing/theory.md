# Theoretical remarks

In this section we describe some important considerations / topics when it comes to UWB meshing.

## Scaling the number of devices

While it is easy/trivial to do distance ranging between two devices, it becomes significantly harder when scaling up. Each tag ranges with each other tag. As such, the distance matrix grows as the square of the devices in range. The available bandwidth is also limited and has to be shared by all devices in range. The distance ranging problem is easy with 5 devices, complex with 20 and near impossible to control with 100+ devices. We currently limit the amount of tags that can be directly seen at the same time by one tag to 20.

Note that the number of devices here means a cluster of devices in short range, for example within 10m range (the range depends on the TX power). The total number of devices in use across a wider area can be much larger. For example, hundreds or even thousands of devices could be used across a big plant. An installation with several hundreds of devices is not a problem as long as the devices are scattered around.

## Clock synchronization

A big issue is the synchronization of the clocks across all tags. This is easy when all tags are within the same area, but complexity increases rapidly when there are multiple groups of tags. Whenever these groups get in each other's proximity, the timing has to be synchronized across all connected devices. Without synchronized timing the system cannot operate reliably. 

One way to simplify this synchronization problem is to add a reference node in the area(s) of interest. This node (an anchor) can operate as the central coordination node that dictates the timing and acts as a controller of the network. This solution makes that battery life can be increased significantly, but is much harder to deploy as all areas you want to track distances in need to be equipped with such an anchor. If the areas of interest are adjacent to each other, anchors also need to be mutually synchronized. Conclusion: it increases cost and reduces the ease of deployment.

## Accuracy

UWB is unparalleled when it comes to accuracy of the distance measurements. The technology inherently can achieve an accuracy on the distance measurement of less than 10 centimeters. This is necessary as we need to be able to measure very precisely how close 2 people are together. When the measurements would be more than half a meter off, the results become unusable for social distancing as this will generate a lot of false positive and false negative events and thus you will simply end up with wrong information.
This is exactly why BLE cannot be used as the primary technology to calculate the distances. With BLE, you can reach meter accuracy. It's at most a rough indication of actual distances.

An important consideration is the 'body effect'. Any RF signal travels slower through water and gets attenuated significantly. This means an introduction of error on the measurements. As your body basically is a mass of water, distances that are measured through a body will be higher than expected. The best accuracy is reached in a Line-of-Sight (LOS) situation, when no objects are in between 2 tags. As people are most at risk when they are face to face, this implies that tags are best worn on the front side.

## Power consumption

UWB is a power-hungry technology. To achieve long battery life, it is key to have the UWB radio switched on as little as possible. This contradicts however with the use case of social distancing. Tags need to be able to range with other tags at all times, as we cannot miss any proximity events/close encounters. When there is no central coordination for time synchronization as described above, tags cannot go to sleep on pre-scheduled times. This means tags basically need to be switched on all the time to ensure no events are missed.

One way to limit power consumption is to switch off the UWB radio when no other tag is around. We can use the BLE radio for this pre-filtering. This is useful because the BLE radio consumes about 15 times less power than UWB. However, BLE is not perfect and it might take some time before we have detected that we need to switch to UWB. With quick encounters between 2 people we might be too late with this. Another downside is that the battery life will become a lot less deterministic and thus predictable as the UWB might be switched on all the time whenever you have a colleague sitting in the same office a couple of meters away. 

An example: if two people are walking towards each other at a speed of 5kmph. Combined this gives a speed of 10kmph or 2.78mps. If we only want to switch on the UWB radio whenever 2 people are closer than 10 meters from each other, and we need to detect that they are closer than 2 meters from each other, it gives us roughly a window of 2.8 seconds to switch on the UWB radios on both devices, synchronize their clocks and make sure all the internal 'bookkeeping' is correct and make correct distance rangings between the devices. While this is not impossible to do this in many cases, it is extremely hard to do this reliably in all situations. Imagine a warehouse with many people walking in all directions 

Another way to possibly limit power consumption is to use an accelerometer and switch off the UWB radio whenever the tag is not detecting any movement in a specific period of time. This is however also not the golden solution as this assumes that whenever no movement is detected, it means that the tag is simply not worn or used. One can imagine that when people are sitting at a desk, they are moving very little which can falsely trigger such no-movement events.

A typical example of where our devices can be used is in a shopping mall. In this scenario there could be many people swarming around, making that the device needs to be active at any time. A device that is permanently active consumes roughly 150 mA (rough estimate, depending on the peripherals that are switched on). In the best case scenario this means a 1000mAh battery would be depleted in less than 7 hours. With some power mitigation techniques described above this can be prolonged, but never in a way that will ensure you a much higher battery life. 

The main takeaway from this is that a big enough battery is necessary (preferably with a capacity of around 2000mAh) that can easily be recharged or replaced.

## Certification and regulations

In order to be able to sell tags, they need to comply with country-specific regulations. While our social distancing tags are currently not certified yet, we don't expect this to be a problem in the short term. The main complication in order to get certified is the emission limits. In the context of social distancing, we want to achieve a close range radio anyway (instead of maximizing the range as much as possible). This allows us to put the gain on the radio TX power very low and so easily within regulatory values.

More information is provided by Decawave/Qorvo and can be found here:
* [APR003 Certification Guide Europe](https://www.decawave.com/wp-content/uploads/2018/10/APR003_Certification-Guide-Europe_v1.1.pdf)
* [Certification Guide USA](https://www.decawave.com/wp-content/uploads/2018/10/APR002_Certification-Guide-USA_v1.2.pdf)

## Hardware-specific limitations

Working with certain hardware implementations can impose limitations. For example Decawave’s DWM1001 modules have a max SPI data transfer size of 255 bytes (at once). This limits data communication with the Decawave transceiver and thus bandwidth usage. On boards with a higher data transfer limit, bandwidth use can be optimized more, which allows for better scalability. Other limitations of the RF52832 on these modules are limited flash and RAM memory and a slow SPI bus (8MHz), but it’s enough for social distancing. Using other processors may alleviate some of these limitations, but they are typically more power hungry though and will therefore consume more battery.

Another short-term issue is the availability of the DWM1001 module. The current demand is high and the supply is low, creating a potential bottleneck for all DWM1001-based products. That's why besides DWM1001-based products, we also develop a (more powerful) module that can replace the DWM1001.
