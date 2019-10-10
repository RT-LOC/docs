
# Getting started

If you need a 101 session (the basics) on Real-time Location Systems (RTLS) and/or ultra-wideband (UWB) check out [this page](https://rtloc.com/technology) first.

For RTLS setups, we distinguish between autoposition RTLS and a full high-precision positioning setup. Please refer to the correct documentation based on your application needs or the infrastructure/kit you have available. For entry-level users, it is easyer to get started [using autopositioning of the anchors](/install/autortls_getting_started.html). All hardware can be reused if you later decide to upgrade to a [professional RTLS setup](/install/getting_started.html).

There is also the (third) option only do distance tracking, if you only need distances (no positions, not RTLS) between a set of tags (no anchors). Read more about this [here](/install/adhoc_getting_started.html).

::: tip
  You need RTLS hardware nodes to get started. You can purchase these from us or even from other vendors. (we provide interoperability, for example with Decawave's DWM1001)
:::

## RTLS introduction (autoposition)
As an introduction to (ultra-wideband) RTLS, we will start with a simple system where the XYZ positions of anchors are estimated by the system. Then tag positions are tracked and read out over BLE.

[Getting Started](/install/autortls_getting_started.html)
<!-- 2. [Tips & Tricks](install/adhoc_tips.html) -->

## Pro RTLS (full position tracking)
To track positions, a combination of anchor and tag hardware devices is needed. Follow these steps to get started:
1. [Getting Started](/install/getting_started.html)
<!-- 2. [First localization](/install/firststeps.html) -->
2. [Anchor Placement](/install/anchor_placement.html)


::: tip
  For a simple online demo of (professional RTLS) positioning data, check out <a href="https://cloud.rtloc.com">https://cloud.rtloc.com</a> using the demo account. The data for this demo is however not live but continuously replayed.
:::