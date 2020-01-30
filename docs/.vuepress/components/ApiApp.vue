<template>
<div style="width: 830px; margin-left: -40px;">
  <nav id="nav">
      <div class="wrapper">
          <a @click="view=0">VIEW ALL</a>
          <a @click="view=1">1. TAGSPEED</a>
          <a @click="view=2">2. DATA</a>
          <a @click="view=3">3. TO TAG RAW</a>
          <a @click="view=4">4. GET TAGLIST</a>
          <a @click="view=5">5. TAGLIST</a>
          <a @click="view=6">6. GET ANCHORLIST</a>
          <a @click="view=7">7. ANCHORLIST</a>
          <a @click="view=8">8. EXTERNAL IMPULSE</a>
          <a @click="view=9">9. TAG STATUS</a>
          <div class="cb"></div>
      </div>
  </nav>
  <div id="protocolWrapper">
      <div id="protocolHeader">
          <div class="protocolLeftSide" style="float: left">COMMAND</div>
          <div class="protocolRightSide">
              <div class="smallBlock fl">
                  PARAMS
              </div>
              <div class="smallBlock fl">
                  TYPE
              </div>
              <div class="smallBlock fl">
                  BYTES
              </div>
              <div class="smallBlock fl">
                  EXAMPLE
              </div>
              <div class="protocolDescription fl">
                  DESCRIPTION
              </div>
              <div class="cb"></div>
          </div>
          <div class="cb"></div>
      </div>
      <div v-if="view===1 || view===0" data-id="one" class="protocolBlock">
          <div class="protocolLeftSide">TAGSPEED</div>
          <div class="protocolRightSide">
              <div class="block">
                  <div class="line">
                      <div class="smallBlock fl">
                          cmd
                      </div>
                      <div class="smallBlock fl">
                          char
                      </div>
                      <div class="smallBlock fl">
                          1
                      </div>
                      <div class="smallBlock fl">
                          'S'
                      </div>
                      <div class="protocolDescription fl">
                      </div>
                      <div class="cb"></div>
                  </div>
                  <div class="line">
                      <div class="smallBlock fl">
                          version
                      </div>
                      <div class="smallBlock fl">
                          uint8
                      </div>
                      <div class="smallBlock fl">
                          1
                      </div>
                      <div class="smallBlock fl">
                          0
                      </div>
                      <div class="protocolDescription fl">
                          command protocol version
                      </div>
                      <div class="cb"></div>
                  </div>
                  <div class="lineGroup lineGroupGray">
                      <div class="repeatText">repeat x times</div>
                      <div class="line">
                          <div class="smallBlock fl">
                              id
                          </div>
                          <div class="smallBlock fl">
                              uint16
                          </div>
                          <div class="smallBlock fl">
                              2
                          </div>
                          <div class="smallBlock fl">
                              101
                          </div>
                          <div class="protocolDescription fl">
                              tag id - 100..65536
                          </div>
                          <div class="cb"></div>
                      </div>
                      <div class="line">
                          <div class="smallBlock fl">
                              speed
                          </div>
                          <div class="smallBlock fl">
                              uint8
                          </div>
                          <div class="smallBlock fl">
                              1
                          </div>
                          <div class="smallBlock fl">
                              1
                          </div>
                          <div class="protocolDescription fl">
                              speed group of tag.<br/>list given via other command (to specify)
                          </div>
                          <div class="cb"></div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="cb"></div>
      </div>
      <div v-if="view===2 || view===0" data-id="two" class="protocolBlock">
          <div class="protocolLeftSide">DATA</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  'D'
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  length
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  12 + 13 * timeCnt
                </div>
                <div class="protocolDescription fl">
                  length of (sub)header that follows
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  msg id
                </div>
                <div class="smallBlock fl">
                  uint32
                </div>
                <div class="smallBlock fl">
                  4
                </div>
                <div class="smallBlock fl">
                  5423
                </div>
                <div class="protocolDescription fl">
                  message count for the distances (absolute count)
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  frame nr
                </div>
                <div class="smallBlock fl">
                  uint32
                </div>
                <div class="smallBlock fl">
                  4
                </div>
                <div class="smallBlock fl">
                  145
                </div>
                <div class="protocolDescription fl">
                  number of the current frame<br/>frame count goes from 0 to 10.000.000
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  frame size
                </div>
                <div class="smallBlock fl">
                  uint16
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="smallBlock fl">
                  5000
                </div>
                <div class="protocolDescription fl">
                  frame size in microseconds, divided by 10<br/>default frame size = 50000 us
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  timeCnt
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="protocolDescription fl">
                  amount of timestamps that will follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="lineGroup lineGroupGray">
                  <div class="repeatText">repeat timeCnt times</div>
                  <div class="line">
                    <div class="smallBlock fl">
                      source id
                    </div>
                    <div class="smallBlock fl">
                      uint16
                    </div>
                    <div class="smallBlock fl">
                      2
                    </div>
                    <div class="smallBlock fl">
                      9000
                    </div>
                    <div class="protocolDescription fl">
                      ID of the node that serves the time
                    </div>
                    <div class="cb"></div>
                  </div>
                <div class="line">
                  <div class="smallBlock fl">
                    year
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    'D'
                  </div>
                  <div class="protocolDescription fl">
                    ..
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    month
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">
                    month
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    day
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">
                    day
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    hour
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">
                    hour
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    minute
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">
                    minute
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    second
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">
                    second
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    millisecond
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    123
                  </div>
                  <div class="protocolDescription fl">
                    millisecond
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    timeflag
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    131
                  </div>
                  <div class="protocolDescription fl">
                    flag for time - 0 = CPU, otherwise bit1 = GPS time, bit6 = leap second validated, bit7 = time validated, bit8 = date validated.
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    spare
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    0
                  </div>
                  <div class="protocolDescription fl">
                    spare bytes
                  </div>
                  <div class="cb"></div>
                </div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  tagCnt
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  10
                </div>
                <div class="protocolDescription fl">
                  amount of tags<br/>indicates how many tag measurements will follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="lineGroup lineGroupGray">
                  <div class="repeatText">repeated tagCnt times</div>
                <div class="line">
                  <div class="smallBlock fl">
                    tag id
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    101
                  </div>
                  <div class="protocolDescription fl">
                    tag id - 100..65536
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    tag offset
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    45000
                  </div>
                  <div class="protocolDescription fl">
                    offset for timestamp in microsec, divided by 10
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    tagSize
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    100
                  </div>
                  <div class="protocolDescription fl">
                    amount of bytes connected to this tag that will follow<br/>sum of all the type blocks
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="lineGroupInner lineGroupBlue_1">
                  <div class="line">
                    <div class="smallBlock fl">
                      type
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      68
                    </div>
                    <div class="protocolDescription fl">
                      ‘D’ for distances
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      anchorCnt
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      10
                    </div>
                    <div class="protocolDescription fl">
                      amount of anchors<br/>indicates how many anchor measurements will follow
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="lineGroup lineGroupInner lineGroupBlue_2">
                      <div class="repeatTextLight">repeated anchorCnt times</div>
                    <div class="line">
                      <div class="smallBlock fl">
                        anchor id
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        10
                      </div>
                      <div class="protocolDescription fl">
                        anchor id - 10..99
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        distance
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        1500
                      </div>
                      <div class="protocolDescription fl">
                        distance in cm
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        LOS1
                      </div>
                      <div class="smallBlock fl">
                        uint8
                      </div>
                      <div class="smallBlock fl">
                        1
                      </div>
                      <div class="smallBlock fl">
                        1
                      </div>
                      <div class="protocolDescription fl">
                        tag to anchor LOS status<br/>0 = LOS, 1 = NLOS
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        RSSI1
                      </div>
                      <div class="smallBlock fl">
                        uint8
                      </div>
                      <div class="smallBlock fl">
                        1
                      </div>
                      <div class="smallBlock fl">
                        45
                      </div>
                      <div class="protocolDescription fl">
                        tag to anchor RSSI [dB]
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        LOS2
                      </div>
                      <div class="smallBlock fl">
                        uint8
                      </div>
                      <div class="smallBlock fl">
                        1
                      </div>
                      <div class="smallBlock fl">
                        1
                      </div>
                      <div class="protocolDescription fl">
                        anchor to tag LOS status<br/>0 = LOS, 1 = NLOS
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        RSSI2
                      </div>
                      <div class="smallBlock fl">
                        uint8
                      </div>
                      <div class="smallBlock fl">
                        1
                      </div>
                      <div class="smallBlock fl">
                        45
                      </div>
                      <div class="protocolDescription fl">
                        anchor to tag RSSI [dB]
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        anchor offset
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        45000
                      </div>
                      <div class="protocolDescription fl">
                        offset for timestamp in microsec, divided by 10
                      </div>
                      <div class="cb"></div>
                    </div>
                  </div>
                </div>
                <div class="lineGroupInner lineGroupBlue_1">
                  <div class="line">
                    <div class="smallBlock fl">
                      type
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      81
                    </div>
                    <div class="protocolDescription fl">
                      ‘Q’ for quaternions
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      q0
                    </div>
                    <div class="smallBlock fl">
                      float
                    </div>
                    <div class="smallBlock fl">
                      4
                    </div>
                    <div class="smallBlock fl">
                      0.9913
                    </div>
                    <div class="protocolDescription fl">
                      q0
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      q1
                    </div>
                    <div class="smallBlock fl">
                      float
                    </div>
                    <div class="smallBlock fl">
                      4
                    </div>
                    <div class="smallBlock fl">
                      0.0014
                    </div>
                    <div class="protocolDescription fl">
                      q1
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      q2
                    </div>
                    <div class="smallBlock fl">
                      float
                    </div>
                    <div class="smallBlock fl">
                      4
                    </div>
                    <div class="smallBlock fl">
                      0.2341
                    </div>
                    <div class="protocolDescription fl">
                      q2
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      q3
                    </div>
                    <div class="smallBlock fl">
                      float
                    </div>
                    <div class="smallBlock fl">
                      4
                    </div>
                    <div class="smallBlock fl">
                      0.1958
                    </div>
                    <div class="protocolDescription fl">
                      q3
                    </div>
                    <div class="cb"></div>
                  </div>
                </div>
                <div class="lineGroupInner lineGroupBlue_1">
                  <div class="line">
                    <div class="smallBlock fl">
                      type
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      82
                    </div>
                    <div class="protocolDescription fl">
                      ‘R’ for raw
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      sampleCnt
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="protocolDescription fl">
                      amount of samples that will follow
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="lineGroup lineGroupInner lineGroupBlue_2">
                      <div class="repeatTextLight">repeated sampleCnt times</div>
                    <div class="line">
                      <div class="smallBlock fl">
                        ts
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        25
                      </div>
                      <div class="protocolDescription fl">
                        ts offset in us, divided by 10
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        ax
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel x value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        ay
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel y value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        az
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel z value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <br/>
                    <div class="line">
                      <div class="smallBlock fl">
                        gx
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel x value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        gy
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel y value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        gz
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel z value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <br/>
                    <div class="line">
                      <div class="smallBlock fl">
                        mx
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel x value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        my
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel y value
                      </div>
                      <div class="cb"></div>
                    </div>
                    <div class="line">
                      <div class="smallBlock fl">
                        mz
                      </div>
                      <div class="smallBlock fl">
                        uint16
                      </div>
                      <div class="smallBlock fl">
                        2
                      </div>
                      <div class="smallBlock fl">
                        123
                      </div>
                      <div class="protocolDescription fl">
                        raw accel z value
                      </div>
                      <div class="cb"></div>
                    </div>
                  </div>
                </div>
                <div class="lineGroupInner lineGroupBlue_1">
                  <div class="line">
                    <div class="smallBlock fl">
                      type
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      80
                    </div>
                    <div class="protocolDescription fl">
                      ‘P’ for positions
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      x
                    </div>
                    <div class="smallBlock fl">
                      uint32
                    </div>
                    <div class="smallBlock fl">
                      4
                    </div>
                    <div class="smallBlock fl">
                      1363
                    </div>
                    <div class="protocolDescription fl">
                      x coordinate in cm
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      y
                    </div>
                    <div class="smallBlock fl">
                      uint32
                    </div>
                    <div class="smallBlock fl">
                      4
                    </div>
                    <div class="smallBlock fl">
                      -7348
                    </div>
                    <div class="protocolDescription fl">
                      y coordinate in cm
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      z
                    </div>
                    <div class="smallBlock fl">
                      uint32
                    </div>
                    <div class="smallBlock fl">
                      4
                    </div>
                    <div class="smallBlock fl">
                      201
                    </div>
                    <div class="protocolDescription fl">
                      z coordinate in cm
                    </div>
                    <div class="cb"></div>
                  </div>
                </div>
                <div class="lineGroupInner lineGroupBlue_1">
                  <div class="line">
                    <div class="smallBlock fl">
                      type
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      85
                    </div>
                    <div class="protocolDescription fl">
                      ‘U’ for userdata out
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      count
                    </div>
                    <div class="smallBlock fl">
                      uint16
                    </div>
                    <div class="smallBlock fl">
                      2
                    </div>
                    <div class="smallBlock fl">
                      6
                    </div>
                    <div class="protocolDescription fl">
                      amount of bytes that will follow
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      bytestream
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      count
                    </div>
                    <div class="smallBlock fl">
                      [1 2 3 4 5 6]
                    </div>
                    <div class="protocolDescription fl">

                    </div>
                    <div class="cb"></div>
                  </div>
                </div>
                <div class="lineGroupInner lineGroupBlue_1">
                  <div class="line">
                    <div class="smallBlock fl">
                      type
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      73
                    </div>
                    <div class="protocolDescription fl">
                      'I' for Impulse Response
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      length
                    </div>
                    <div class="smallBlock fl">
                      uint16
                    </div>
                    <div class="smallBlock fl">
                      2
                    </div>
                    <div class="smallBlock fl">
                      6
                    </div>
                    <div class="protocolDescription fl">
                      Amount of bytes that will follow
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      source
                    </div>
                    <div class="smallBlock fl">
                      uint16
                    </div>
                    <div class="smallBlock fl">
                      2
                    </div>
                    <div class="smallBlock fl">
                      101
                    </div>
                    <div class="protocolDescription fl">
                      source of IR
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      index
                    </div>
                    <div class="smallBlock fl">
                      uint16
                    </div>
                    <div class="smallBlock fl">
                      2
                    </div>
                    <div class="smallBlock fl">
                      6
                    </div>
                    <div class="protocolDescription fl">
                      index in accumulator
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      left
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      5
                    </div>
                    <div class="protocolDescription fl">
                      samples left of index
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="line">
                    <div class="smallBlock fl">
                      right
                    </div>
                    <div class="smallBlock fl">
                      uint8
                    </div>
                    <div class="smallBlock fl">
                      1
                    </div>
                    <div class="smallBlock fl">
                      15
                    </div>
                    <div class="protocolDescription fl">
                      samples right of index
                    </div>
                    <div class="cb"></div>
                  </div>
                  <div class="lineGroup lineGroupInner lineGroupBlue_2">
                      <div class="repeatTextLight">repeated (left + right + 1) times</div>
                      <div class="line">
                        <div class="smallBlock fl">
                          real
                        </div>
                        <div class="smallBlock fl">
                          int16
                        </div>
                        <div class="smallBlock fl">
                          2
                        </div>
                        <div class="smallBlock fl">
                          -12
                        </div>
                        <div class="protocolDescription fl">
                          real part of complex number
                        </div>
                        <div class="cb"></div>
                      </div>
                      <div class="line">
                        <div class="smallBlock fl">
                          complex
                        </div>
                        <div class="smallBlock fl">
                          int16
                        </div>
                        <div class="smallBlock fl">
                          2
                        </div>
                        <div class="smallBlock fl">
                          75
                        </div>
                        <div class="protocolDescription fl">
                          complex part of complex number
                        </div>
                        <div class="cb"></div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===3 || view===0" data-id="three" class="protocolBlock">
          <div class="protocolLeftSide">TO TAG RAW</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  'U'
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  idCnt
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="protocolDescription fl">
                  amount of id’s that will follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="lineGroup lineGroupGray">
                  <div class="repeatText">repeated idCnt times</div>
                <div class="line">
                  <div class="smallBlock fl">
                    id
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    101
                  </div>
                  <div class="protocolDescription fl">
                    node id
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    count
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    6
                  </div>
                  <div class="protocolDescription fl">

                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    bytestream
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    count
                  </div>
                  <div class="smallBlock fl">
                    [1 2 3 4 5 6]
                  </div>
                  <div class="protocolDescription fl">

                  </div>
                  <div class="cb"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===4 || view===0" data-id="four" class="protocolBlock">
          <div class="protocolLeftSide">GET TAGLIST</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  'T'/84
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===5 || view===0" data-id="five" class="protocolBlock">
          <div class="protocolLeftSide">TAGLIST</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  'T'/84
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  block length
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  8
                </div>
                <div class="protocolDescription fl">
                  length of blocks to follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  tagCnt
                </div>
                <div class="smallBlock fl">
                  uint16
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="protocolDescription fl">
                  amount of id’s that will follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="lineGroup lineGroupGray">
                  <div class="repeatText">repeated tagCnt times</div>
                <div class="line">
                  <div class="smallBlock fl">
                    id
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    101
                  </div>
                  <div class="protocolDescription fl">
                    node id
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    speed
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">

                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    z-coords
                  </div>
                  <div class="smallBlock fl">
                    int16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    1234
                  </div>
                  <div class="protocolDescription fl">
                    height of the tag in cm
                  </div>
                  <div class="cb"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===6 || view===0" data-id="six" class="protocolBlock">
          <div class="protocolLeftSide">GET ANCHORLIST</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  ’A’/65
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===7 || view===0" data-id="seven" class="protocolBlock">
          <div class="protocolLeftSide">ANCHORLIST</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  ’A’/65
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  block length
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  8
                </div>
                <div class="protocolDescription fl">
                  length of blocks to follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  anchorCnt
                </div>
                <div class="smallBlock fl">
                  uint16
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="protocolDescription fl">
                  amount of id’s that will follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="lineGroup lineGroupGray">
                  <div class="repeatText">repeated anchorCnt times</div>
                <div class="line">
                  <div class="smallBlock fl">
                    id
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    101
                  </div>
                  <div class="protocolDescription fl">
                    node id
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    x-coord
                  </div>
                  <div class="smallBlock fl">
                    int16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    1234
                  </div>
                  <div class="protocolDescription fl">
                    x-coordinate of the anchor in cm
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    y-coord
                  </div>
                  <div class="smallBlock fl">
                    int16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    1234
                  </div>
                  <div class="protocolDescription fl">
                    y-coordinate of the anchor in cm
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    z-coord
                  </div>
                  <div class="smallBlock fl">
                    int16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    1234
                  </div>
                  <div class="protocolDescription fl">
                    z-coordinate of the anchor in cm
                  </div>
                  <div class="cb"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===8 || view===0" data-id="eight" class="protocolBlock">
          <div class="protocolLeftSide">EXTERNAL IMPULSE</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  'E'/69
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  length
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  15
                </div>
                <div class="protocolDescription fl">
                  amount of bytes that follows
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  type
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  101
                </div>
                <div class="protocolDescription fl">
                  type information
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  frame
                </div>
                <div class="smallBlock fl">
                  uint32
                </div>
                <div class="smallBlock fl">
                  4
                </div>
                <div class="smallBlock fl">
                  1234
                </div>
                <div class="protocolDescription fl">
                  frame number in which the event has happened
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  offset
                </div>
                <div class="smallBlock fl">
                  uint16
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="smallBlock fl">
                  1234
                </div>
                <div class="protocolDescription fl">
                  offset in ms within the frame
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  gps
                </div>
                <div class="smallBlock fl">
                  uint8[8]
                </div>
                <div class="smallBlock fl">
                  8
                </div>
                <div class="smallBlock fl">
                  <i>see up (add link)</i>
                </div>
                <div class="protocolDescription fl">
                  time in GPS format
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  spare
                </div>
                <div class="smallBlock fl">
                  uint16
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="smallBlock fl">
                  1234
                </div>
                <div class="protocolDescription fl">
                  spare bytes
                </div>
                <div class="cb"></div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===9 || view===0" data-id="nine" class="protocolBlock">
          <div class="protocolLeftSide">TAG STATUS</div>
          <div class="protocolRightSide">
            <div class="block">
              <div class="line">
                <div class="smallBlock fl">
                  cmd
                </div>
                <div class="smallBlock fl">
                  char
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  'X'/88
                </div>
                <div class="protocolDescription fl">
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  version
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  0
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  block length
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  48
                </div>
                <div class="protocolDescription fl">
                  length of each block that follows
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  nodeCnt
                </div>
                <div class="smallBlock fl">
                  uint16
                </div>
                <div class="smallBlock fl">
                  2
                </div>
                <div class="smallBlock fl">
                  3
                </div>
                <div class="protocolDescription fl">
                  amount of blocks that will follow
                </div>
                <div class="cb"></div>
              </div>
              <div class="lineGroup lineGroupGray">
                  <div class="repeatText">repeated nodeCnt times</div>
                <div class="line">
                  <div class="smallBlock fl">
                    nodeid
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    100
                  </div>
                  <div class="protocolDescription fl">
                    tag id - 100..65536
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    node kind
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">
                    kind of FW running at the moment <\br> <i>(see list of node kind)</i>
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    frame_off_micro
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    1000
                  </div>
                  <div class="protocolDescription fl">
                    offset inside frame in microsec/10
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    uptime
                  </div>
                  <div class="smallBlock fl">
                    uint32
                  </div>
                  <div class="smallBlock fl">
                    4
                  </div>
                  <div class="smallBlock fl">
                    10000
                  </div>
                  <div class="protocolDescription fl">
                    uptime in seconds
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    reset reason
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="protocolDescription fl">
                    reson of last boot  <\br> <i>(see list of boot reasons)</i>
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    config ver
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    10
                  </div>
                  <div class="protocolDescription fl">
                    config file version
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    tagspeed ver
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    10
                  </div>
                  <div class="protocolDescription fl">
                    tagspeed file version
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    ant delay
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    16475
                  </div>
                  <div class="protocolDescription fl">
                    antenna delay
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    last seen
                  </div>
                  <div class="smallBlock fl">
                    uint32
                  </div>
                  <div class="smallBlock fl">
                    4
                  </div>
                  <div class="smallBlock fl">
                    ..
                  </div>
                  <div class="protocolDescription fl">
                    time last seen
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    last user data
                  </div>
                  <div class="smallBlock fl">
                    uint32
                  </div>
                  <div class="smallBlock fl">
                    4
                  </div>
                  <div class="smallBlock fl">
                    ..
                  </div>
                  <div class="protocolDescription fl">
                    time of last seen user data
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    voltage
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    40000
                  </div>
                  <div class="protocolDescription fl">
                    raw ADC value </br>(formula = <i>(3.3 x value)/(2ˆ15) </i>)
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    hw number
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="protocolDescription fl">
                    hardware number  </br><i>see HW list</i>
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    loader ver
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    24
                  </div>
                  <div class="protocolDescription fl">
                    loader fw version
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    loader crc
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    12345
                  </div>
                  <div class="protocolDescription fl">
                    loader fw crc
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    anchor ver
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    473
                  </div>
                  <div class="protocolDescription fl">
                    anchor fw version
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    anchor crc
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    12345
                  </div>
                  <div class="protocolDescription fl">
                    anchor fw crc
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    tag ver
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    473
                  </div>
                  <div class="protocolDescription fl">
                    tag fw version
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    tag crc
                  </div>
                  <div class="smallBlock fl">
                    uint16
                  </div>
                  <div class="smallBlock fl">
                    2
                  </div>
                  <div class="smallBlock fl">
                    12345
                  </div>
                  <div class="protocolDescription fl">
                    tag fw crc
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    tag subver
                  </div>
                  <div class="smallBlock fl">
                    uint8
                  </div>
                  <div class="smallBlock fl">
                    1
                  </div>
                  <div class="smallBlock fl">
                    13
                  </div>
                  <div class="protocolDescription fl">
                    tag fw subversion
                  </div>
                  <div class="cb"></div>
                </div>
                <div class="line">
                  <div class="smallBlock fl">
                    deca64
                  </div>
                  <div class="smallBlock fl">
                    uint64
                  </div>
                  <div class="smallBlock fl">
                    8
                  </div>
                  <div class="smallBlock fl">
                    0xDECA1234
                  </div>
                  <div class="protocolDescription fl">
                    the long ID of the tag
                  </div>
                  <div class="cb"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>  
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      view: 0
    }
  }
}
</script>

<style>
  nav#nav {background-color:#FFF;border-bottom:2px solid #CCC;height:100px;
  /* position:fixed; */
  width:100%;z-index:99999999;}/*background-color:#FFF;border-bottom:2px solid #CCC;*/
  nav#nav a{color:#222;display:block;float:left;height:100px;line-height:100px;padding:0 10px;text-decoration:none;}/**/
  nav#nav a:hover{color:#53a0c3;font-weight:bold;}
  nav#nav a#activeNav{color:#53a0c3;font-weight:bold;}
  nav#nav {background-color:#272c32;height:auto !important;height:50px;margin-top:50px;min-height:50px;}
  nav#nav a{color:#FFF;display:block;float:left;height:50px;line-height:50px;padding:0 10px;text-decoration:none;}
  nav#nav a:hover{background-color:#3f4551;cursor:pointer;}
  nav#nav a#active{background-color:#3f4551;}

  #protocolWrapper{margin:0 austo;margin-bottom:20px;}
  #protocolHeader{background-color:#EEE;border-bottom:1px solid #DDD;line-height:50px;width:100%;font-weight: bold;}
  .protocolBlock{border-bottom:1px solid #DDD;height:auto !important;height:10px;min-height:10px;}
  .protocolLeftSide{float:left;font-size:85%;padding-top:10px;padding-left:10px;width:100px;font-weight: bold;text-align: center;}
  .protocolRightSide{border-left:1px solid #DDD;float:left;font-size:85%;}
  .protocolBlock .protocolRightSide .block{margin-top:10px;}
  .protocolBlock .protocolRightSide .line{height:auto !important;height:30px;line-height:30px;min-height:30px;min-width:699px;}
  .smallBlock{padding-left:10px;width:90px;}
  .protocolDescription{max-width: 305px;}

  .lineGroupInner{color:#FFF;margin-top:10px;padding-bottom:10px;margin-left: 10px}
  .lineGroupGray{background-color:#EEE;margin-bottom:10px;padding-bottom:10px;}
  .lineGroupBlue_1{background-color:#1080af;}
  .lineGroupBlue_2{background-color:#13698d;}
  .lineGroup{position:relative;}
  .repeatText{color:#999;font-size:85%;font-style:italic;font-weight:light;position:absolute;right:10px;top:10px;}
  .repeatTextLight{color:#DDD;font-size:85%;position:absolute;right:10px;top:10px;}

  .fl{float:left;}
  .fr{float:right;}
  .cb{clear:both;}

  #navItems{margin-right:50px;}
  #toggleMenu{display:none;float:right;height:63px;line-height:63px;margin-right:20px;padding-top:20px;}



  #navHolder{background-color:#f7f7f9;height:100%;left:0;margin-top:100px;position:fixed;width:250px;}
  #navSearch{height:40px;margin:10px;outline:none;padding:0 10px;width:calc(100% - 40px);}

  #navHolderItems a{background-color:#868583;border-right:1px solid #f7f7f9;border-top:1px solid #868583;color:#FFF;display:block;float:left;font-weight:lighter;height:40px;line-height:40px;padding:0 10px;text-align:center;text-decoration:none;width:calc((100% / 3) - 21px);}
  #navHolderItems a#active{background-color:#f7f7f9;color:#868583;}
        
  #navCollapse{background-color:#CCC;height:50px;left:200px;position:fixed;top:100px;width:50px;}
        
  #navContent{padding-top:20px;}
  #navContent a{border-bottom:1px solid #CCC;color:#444;display:block;height:40px;line-height:40px;text-decoration:none;padding-left:20px;}
  #navContent a.navActive{background-color:#AAA;}

  #fileViewer{color:#444547;margin-left:310px;padding-top:50px;}
  #updatedFile{color:#CCC;font-size:85%;text-align:center;}

  @media only screen and (max-width: 1300px) {
    #toggleMenu{display:none;}
  }
  @media only screen and (max-width: 1024px) {
    nav a{display:none;}
    #toggleMenu{display:block;}
  }
</style>
