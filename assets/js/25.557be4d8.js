(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{200:function(t,a){const e={"tag-data":{topic:"data/devices/tag-data/frame",retain:!1,buffer:!0,descr:"Tag sensor data. Can contain: positions, distances, speed, acceleration, IMU, etc (as configured in the software and available from the hardware)",toCloud:!1},"tag-data-int":{topic:"data/devices/tag-data/int",retain:!1,descr:"Slower (interval) tag data",toCloud:!0},"tag-data-buf":{topic:"data/devices/tag-data/frames",retain:!1,toCloud:!0},"tag-list":{topic:"data/devices/tag-list",retain:!0,descr:"List of all tags",toCloud:!0},"anchor-list":{topic:"data/devices/anchor-list",retain:!0,descr:"List of all anchors",toCloud:!0},statuses:{topic:"data/devices/statuses",retain:!0,descr:"Device statuses: battery voltage, firmware version, etc.",toCloud:!0},fast:{topic:"data/devices/fast",retain:!0,descr:"List of tags (IDs) with a fast slot (detected fast right now)"},events:{topic:"data/events",retain:!1,descr:"Events (as activated)",toCloud:!0},race:{topic:"data/sports/race/frame",retain:!1,buffer:!0,descr:"Race data (standing, timing)",toCloud:!1},"race-int":{topic:"data/sports/race/int",retain:!1,descr:"Slower (interval) race data",toCloud:!0},"race-buf":{topic:"data/sports/race/frames",retain:!1,toCloud:!0},start:{topic:"data/signal/start",retain:!0,descr:"Start signal - from hw (impulse) or sw (button or algo)",toCloud:!0},zones:{topic:"data/zones",retain:!1,descr:"Zone presence per zone",toCloud:!0},params:{topic:"data/params",retain:!0,descr:"Data parameters",toCloud:!0}},r={},s=[];Object.keys(e).forEach(t=>{const{topic:a,retain:n}=e[t];r[a]={key:t,retain:n},s.push({type:t,...e[t]})}),t.exports={dataParams:e,topics:r,dataParams_arr:s}},210:function(t,a,e){"use strict";e.r(a);var r=e(211),s=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a.default=s.a},211:function(t,a,e){const{dataParams:r}=e(200)},461:function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"b",(function(){return s}));var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("tr",[e("th",[t._v("Company")]),t._v(" "),e("th",[t._v("Contact")]),t._v(" "),e("th",[t._v("Country")])]),t._v(" "),e("tr",[e("td",[t._v("Alfreds Futterkiste")]),t._v(" "),e("td",[t._v("Maria Anders")]),t._v(" "),e("td",[t._v("Germany")])]),t._v(" "),e("tr",[e("td",[t._v("Centro comercial Moctezuma")]),t._v(" "),e("td",[t._v("Francisco Chang")]),t._v(" "),e("td",[t._v("Mexico")])])])}]},464:function(t,a,e){"use strict";e.r(a);var r=e(461),s=e(210);for(var n in s)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return s[t]}))}(n);var o=e(10),i=Object(o.a)(s.default,r.a,r.b,!1,null,null,null);a.default=i.exports}}]);