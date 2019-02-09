<template>
<div style="width: 860px; margin-left: -50px;">
  <nav id="nav">
      <div class="wrapper">
          <a data-a="viewAll">VIEW ALL</a>
          <a data-a="one">1. TAGSPEED</a>
          <a data-a="two">2. DATA</a>
          <a data-a="three">3. TO TAG RAW</a>
          <a data-a="four">4. GET TAGLIST</a>
          <a data-a="five">5. TAGLIST</a>
          <a data-a="six">6. GET ANCHORLIST</a>
          <a data-a="seven">7. ANCHORLIST</a>
          <a data-a="eight">8. EXTERNAL IMPULSE</a>
          <a data-a="nine">9. TAG STATUS</a>
          <div class="cb"></div>
      </div>
  </nav>
  <div id="protocolWrapper">
      <div id="protocolHeader">
          <div class="protocolLeftSide" style="float: left">COMMAND</div>
          <div class="protocolRightSide">
              <div class="smallBlock">
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
      <div data-id="one" class="protocolBlock">
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
  </div>
</div>
</template>

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
  #protocolHeader{background-color:#EEE;border-bottom:1px solid #DDD;height:50px;line-height:50px;width:100%;}
  .protocolBlock{border-bottom:1px solid #DDD;height:auto !important;height:10px;min-height:10px;}
  .protocolLeftSide{float:left;font-size:85%;height:50px;line-height:50px;padding-left:10px;width:140px;}
  .protocolRightSide{border-left:1px solid #DDD;float:left;font-size:85%;}
  .protocolBlock .protocolRightSide .block{margin-top:10px;}
  .protocolBlock .protocolRightSide .line{height:auto !important;height:30px;line-height:30px;min-height:30px;}
  .smallBlock{padding-left:10px;width:90px;}
  .protocolDescription{width:309px;}

  .lineGroupInner{color:#FFF;margin-top:10px;padding-bottom:10px;width:calc(100% - 10px);}
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
