
# Getting started
::: tip
If you want to learn more on the technology behind our Real-Time Location System (RTLS) products, please refer to [this page](https://rtloc.com/technology) first.
:::

In order to get started, you will need hardware nodes such as anchors and tags. You can purchase them from us or even from other vendors. We support a range of hardware, including Decawaves DWM1001 based boards.
Before we can get started, you need to know which type of system you are using. We offer 3 systems:
 - [Basic Positioning](/install/basic_positioning_getting_started.html)
 - [Pro Positioning](/install/pro_positioning_getting_started.html)
 - [Distance Tracking](/install/distance_tracking_getting_started.html)
 
If you are only interested in measuring distances between moving objects and reading out sensor data from those objects, you want to go for the `Distance Tracking` solution.
When you also need to know the position of your objects, you'll need a Positioning system. This will always involve anchors that are hung around the field of intrest. The precise positions of these anchors are fixed and need to be known.
Are you new to RTLS, then we advise you to start with our `Basic Positioning` solution. It will allow you to let the anchors calculate their own positions.
If you have some more experience already, you'll find everything you need and more in our `Pro Positioning`. 

Please refer to the correct documentation based on your application needs or the infrastructure/kit you have available.
::: warning
If you bought the starterskit, you can jump immediately to the dedicated [getting started](/install/basic_positioning_getting_started.html#getting-started) section
:::

::: tip
Note that all hardware can be reused if you later decide to upgrade to a [Pro Positioning](/install/pro_positioning_getting_started.html) setup.
::: 

## Basic RTLS (autoposition)
As an introduction to (ultra-wideband) RTLS, we will start with a simple system where the XYZ positions of anchors are estimated by the system. Then tag positions are tracked and read out over BLE.

[Getting Started](/install/basic_positioning_getting_started.html)
<!-- 2. [Tips & Tricks](install/adhoc_tips.html) -->

## Pro RTLS (full position tracking)
To track positions, a combination of anchor and tag hardware devices is needed. Follow these steps to get started:
1. [Getting Started](/install/getting_started.html)
<!-- 2. [First localization](/install/firststeps.html) -->
2. [Anchor Placement](/install/anchor_placement.html)


::: tip
  For a simple online demo of (professional RTLS) positioning data, check out <a href="https://cloud.rtloc.com">https://cloud.rtloc.com</a> using the demo account. The data for this demo is however not live but continuously replayed.
:::