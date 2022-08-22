<template>
<div style="width: 830px; margin-left: -40px;">
  <nav id="nav">
      <div class="wrapper">
          <a @click="view=0">VIEW ALL</a>
          <a @click="view=1">1. PROPERTIES</a>
          <a @click="view=2">2. PROPERTIES (GET)</a>
          <a @click="view=3">3. TX POWER (GET)</a>
          <a @click="view=4">4. TX POWER (SET)</a>
          <a @click="view=5">5. TX POWER</a>
          <a @click="view=6">6. HAIRS (GET)</a>
          <a @click="view=7">7. HAIRS (SET)</a>
          <a @click="view=8">8. HAIRS</a>
          <a @click="view=9">9. DISTANCES</a>
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
            <div class="protocolLeftSide">PROPERTIES</div>
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
                            24
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
                            3
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
                            uint16
                        </div>
                        <div class="smallBlock fl">
                            2
                        </div>
                        <div class="smallBlock fl">
                            48
                        </div>
                        <div class="protocolDescription fl">
                            length of this message (incl cmd & len)
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
                            100
                        </div>
                        <div class="protocolDescription fl">
                            uptime of device (in seconds)
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            antenna delay (RX)
                        </div>
                        <div class="smallBlock fl">
                            uint16
                        </div>
                        <div class="smallBlock fl">
                            2
                        </div>
                        <div class="smallBlock fl">
                            16500
                        </div>
                        <div class="protocolDescription fl">
                            antenna delay (RX) of the device
                        </div>
                        <div class="cb"></div>
                    </div>                  
                    <div class="line">
                        <div class="smallBlock fl">
                            antenna delay (TX)
                        </div>
                        <div class="smallBlock fl">
                            uint16
                        </div>
                        <div class="smallBlock fl">
                            2
                        </div>
                        <div class="smallBlock fl">
                            16500
                        </div>
                        <div class="protocolDescription fl">
                            lantenna delay (TX) of the device
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            reset type
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
                            reset type of the device:
                            1 = todo
                            2 = todo
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            hw version
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
                            HW type:
                            1 = todo
                            2 = todo
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            obsolete
                        </div>
                        <div class="smallBlock fl">
                            uint64
                        </div>
                        <div class="smallBlock fl">
                            8
                        </div>
                        <div class="smallBlock fl">
                            0
                        </div>
                        <div class="protocolDescription fl">
                            obsolete
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            FW version
                        </div>
                        <div class="smallBlock fl">
                            uint16
                        </div>
                        <div class="smallBlock fl">
                            2
                        </div>
                        <div class="smallBlock fl">
                            30404
                        </div>
                        <div class="protocolDescription fl">
                            Firmware version
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            Firmware version (sub)
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
                            Subversion number
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            obsolete
                        </div>
                        <div class="smallBlock fl">
                            uint48
                        </div>
                        <div class="smallBlock fl">
                            6
                        </div>
                        <div class="smallBlock fl">
                            0
                        </div>
                        <div class="protocolDescription fl">
                            obsolete
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            uid
                        </div>
                        <div class="smallBlock fl">
                            uint64
                        </div>
                        <div class="smallBlock fl">
                            0xAAAA123456780001
                        </div>
                        <div class="smallBlock fl">
                            8
                        </div>
                        <div class="protocolDescription fl">
                            Unique ID
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            obsolete
                        </div>
                        <div class="smallBlock fl">
                            uint64
                        </div>
                        <div class="smallBlock fl">
                            8
                        </div>
                        <div class="smallBlock fl">
                            0
                        </div>
                        <div class="protocolDescription fl">
                            obsolete
                        </div>
                        <div class="cb"></div>
                    </div>
                    <div class="line">
                        <div class="smallBlock fl">
                            obsolete
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
                            obsolete
                        </div>
                        <div class="cb"></div>
                    </div>                 
                </div>
            </div>
            <div class="cb"></div>
        </div>
        <div v-if="view===2 || view===0" data-id="two" class="protocolBlock">
          <div class="protocolLeftSide">PROPERTIES (GET)</div>
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
                  36
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
                  3
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
        <div v-if="view===3 || view===0" data-id="three" class="protocolBlock">
          <div class="protocolLeftSide">TX POWER (GET) </div>
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
                  0
                </div>
                <div class="smallBlock fl">
                  44
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
                  3
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
        <div v-if="view===4 || view===0" data-id="four" class="protocolBlock">
          <div class="protocolLeftSide">TX Power (SET)</div>
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
                  45
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
                  3
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>

              <div class="line">
                <div class="smallBlock fl">
                  tx power (SET)
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  33
                </div>
                <div class="protocolDescription fl">
                TX Power amplification in dB (0..33 dB)
                </div>
                <div class="cb"></div>
              </div>





            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===5 || view===0" data-id="five" class="protocolBlock">
          <div class="protocolLeftSide">TX Power</div>
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
                  46
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
                  3
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>

              <div class="line">
                <div class="smallBlock fl">
                  tx power
                </div>
                <div class="smallBlock fl">
                  uint8
                </div>
                <div class="smallBlock fl">
                  1
                </div>
                <div class="smallBlock fl">
                  33
                </div>
                <div class="protocolDescription fl">
                TX Power amplification in dB (0..33 dB)
                </div>
                <div class="cb"></div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===6 || view===0" data-id="six" class="protocolBlock">
          <div class="protocolLeftSide">HAIRS (GET)</div>
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
                  47
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
                  3
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
          <div class="protocolLeftSide">HAIRS (SET)</div>
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
                  48
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
                  3
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  enable
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
                  enable hairs (0 = disable, 1 = enable)
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  save
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
                  Save parameter to permanent storage (0 = no, 1 = save)
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  size
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
                  Small hairs = 128b Big hairs = 512b (0 = small,1 = big)
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  continuous enable
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
                Continuously transmit the hairs, instead of on request (0 = disable, 1 = enable)
                </div>
                <div class="cb"></div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===8 || view===0" data-id="eight" class="protocolBlock">
          <div class="protocolLeftSide">HAIRS</div>
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
                  48
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
                  3
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  enable
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
                  enable hairs (0 = disable, 1 = enable)
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  save
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
                  Save parameter to permanent storage (0 = no, 1 = save)
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  size
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
                  Small hairs = 128b Big hairs = 512b (0 = small,1 = big)
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  continuous enable
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
                Continuously transmit the hairs, instead of on request (0 = disable, 1 = enable)
                </div>
                <div class="cb"></div>
              </div>
            </div>
          </div>
          <div class="cb"></div>
        </div>
        <div v-if="view===9 || view===0" data-id="nine" class="protocolBlock">
          <div class="protocolLeftSide">DISTANCES</div>
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
                  2
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
                  3
                </div>
                <div class="protocolDescription fl">
                  command protocol version
                </div>
                <div class="cb"></div>
              </div>
              <div class="line">
                <div class="smallBlock fl">
                  nb distances
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
                  amount of distance reports that will follow
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
                  12345
                </div>
                <div class="protocolDescription fl">
                  Current frame of the system
                </div>
                <div class="cb"></div>
              </div>

              <div class="lineGroup lineGroupGray">
                <div class="repeatText">repeat nb_distances times</div>
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
                        device id - 1..65536
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
                        167
                    </div>
                    <div class="protocolDescription fl">
                        distance to this device (in cm)
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
  },
  mounted() {
    if ('analytics' in window) {
      window.analytics.page('Binary API page')
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
