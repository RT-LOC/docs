(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{485:function(s,a,t){"use strict";t.r(a);var l=t(10),i=Object(l.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"binary-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binary-api"}},[s._v("#")]),s._v(" Binary API")]),s._v(" "),t("p",[s._v("The Binary API provides a compact representation of the real-time data stream. It can be accessed over UDP, TCP or websocket.")]),s._v(" "),t("p",[s._v("Live and replay data can be accessed over separated ports, as following:")]),s._v(" "),t("ul",[t("li",[s._v("13100 - For Live data")]),s._v(" "),t("li",[s._v("13200 - For Replay data")])]),s._v(" "),t("h2",{attrs:{id:"preamble"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preamble"}},[s._v("#")]),s._v(" Preamble")]),s._v(" "),t("p",[s._v("Every message will contain a preamble with the following format:")]),s._v(" "),t("div",{staticClass:"protocolBlock"},[t("div",{staticClass:"protocolLeftSide"},[s._v("PREAMBLE")]),s._v(" "),t("div",{staticClass:"protocolRightSide"},[t("div",{staticClass:"block"},[t("div",{staticClass:"line"},[t("div",{staticClass:"smallBlock fl"},[s._v("\n          ##\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          bytes\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          2\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          '##'\n        ")]),s._v(" "),t("div",{staticClass:"protocolDescription fl"},[s._v("\n          Preamble start\n        ")]),s._v(" "),t("div",{staticClass:"cb"})]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"smallBlock fl"},[s._v("\n          length\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          bytes\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          2\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          ..\n        ")]),s._v(" "),t("div",{staticClass:"protocolDescription fl"},[s._v("\n          Length that will follow\n        ")]),s._v(" "),t("div",{staticClass:"cb"})]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"smallBlock fl"},[s._v("\n          version\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          byte\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          1\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          ..\n        ")]),s._v(" "),t("div",{staticClass:"protocolDescription fl"},[s._v("\n          Version of the command\n        ")]),s._v(" "),t("div",{staticClass:"cb"})]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"smallBlock fl"},[s._v("\n          command\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          byte\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          1\n        ")]),s._v(" "),t("div",{staticClass:"smallBlock fl"},[s._v("\n          ..\n        ")]),s._v(" "),t("div",{staticClass:"protocolDescription fl"},[s._v("\n          Command to be executed\n        ")]),s._v(" "),t("div",{staticClass:"cb"})])])]),s._v(" "),t("div",{staticClass:"cb"})]),s._v(" "),t("h2",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[s._v("#")]),s._v(" Commands")]),s._v(" "),t("p",[s._v("Depending on the command indicated in the preamble, the rest of the message will be decoded as indicated below.")]),s._v(" "),t("ApiApp"),s._v(" "),t("blockquote",[t("p",[s._v('the "GET" commands can be sent to retrieve the corresponding data')])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);