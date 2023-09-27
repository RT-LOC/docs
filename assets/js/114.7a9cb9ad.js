(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{560:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"remarks-on-rtls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks-on-rtls"}},[e._v("#")]),e._v(" Remarks on RTLS")]),e._v(" "),a("p",[e._v("In this section we describe some important considerations / topics when it comes to UWB meshing.")]),e._v(" "),a("h2",{attrs:{id:"accuracy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accuracy"}},[e._v("#")]),e._v(" Accuracy")]),e._v(" "),a("p",[e._v("UWB is unparalleled when it comes to accuracy of the distance measurements. The technology inherently can achieve an accuracy on the distance measurement of less than 10 centimeters. The resulting calculated positions can have an accuracy of down to 10cm.")]),e._v(" "),a("p",[e._v("An important consideration is the 'body effect'. Any RF signal travels slower through water and gets attenuated significantly. This means an introduction of error on the measurements. As your body basically is a mass of water, distances that are measured through a body will be higher than expected. The best accuracy is reached with "),a("strong",[e._v("Line-of-Sight (LOS) conditions")]),e._v(", when no objects are in between 2 tags. As people are most at risk when they are face to face, this implies that tags are best worn on the front side.")]),e._v(" "),a("h2",{attrs:{id:"power-consumption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power-consumption"}},[e._v("#")]),e._v(" Power consumption")]),e._v(" "),a("p",[e._v("UWB is a power-hungry technology. To achieve long battery life, it is key to have the UWB radio switched on as little as possible. In our RTLS system (contrary to the distancing system) we can make sure the devices sleep when they do not have to send or detect.")]),e._v(" "),a("p",[e._v("Our RTLS implementation by default focuses on high speed (highly frequent) and high accuracy (using TWR) detection. In this case the UWB radio will be on often and there will be high battery consumption.")]),e._v(" "),a("h2",{attrs:{id:"_3d-positioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3d-positioning"}},[e._v("#")]),e._v(" 3D positioning")]),e._v(" "),a("p",[e._v("If you need also the Z position, you will need to make sure you have anchors placed at different heights. You will also need more anchors than you normally would need in a 2D RTLS scenario.")])])}),[],!1,null,null,null);t.default=n.exports}}]);