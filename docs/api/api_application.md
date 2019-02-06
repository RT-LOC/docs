
<style>
    nav#nav{background-color:#272c32;height:auto !important;height:50px;margin-top:50px;min-height:50px;}
    nav#nav a{color:#FFF;display:block;float:left;height:50px;line-height:50px;padding:0 10px;text-decoration:none;}
    nav#nav a:hover{background-color:#3f4551;cursor:pointer;}
    nav#nav a#active{background-color:#3f4551;}
    #protocolWrapper{margin:0 auto;margin-bottom:20px;width:960px;}
    #protocolHeader{background-color:#EEE;border-bottom:1px solid #DDD;height:50px;line-height:50px;width:100%;}
    .protocolBlock{border-bottom:1px solid #DDD;height:auto !important;height:10px;min-height:10px;}
    .protocolLeftSide{float:left;font-size:85%;height:50px;line-height:50px;padding-left:10px;width:140px;}
    .protocolRightSide{border-left:1px solid #DDD;float:left;font-size:85%;width:809px;}
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
</style>
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
        <div class="protocolLeftSide">COMMAND</div>
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