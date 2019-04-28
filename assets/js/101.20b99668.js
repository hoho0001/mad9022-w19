(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{195:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("When you create a Google Map, there are a variety of events that we can work with. Not just the typical mouse events that you would have on a web page, but ones specific to the types of interactions you would have with a map, or things that the map could do.")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),n("p",[t._v("It will also add a listener to the marker which sets the level of zoom on the map to 8 and sets the center of the map to the location of the marker.")]),t._v(" "),n("p",[t._v("We can use the same approach to add listeners for any of the events.")]),t._v(" "),n("YouTube",{attrs:{title:"Google Maps Markers and Events",url:"https://www.youtube.com/embed/kUVKzZ1NKX0"}}),t._v(" "),t._m(4),t._v(" "),n("p",[n("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/events",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Map Event reference"),n("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),n("p",[n("router-link",{attrs:{to:"./"}},[t._v("Back to Week 7 Module Home")])],1)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"google-maps-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-maps-events","aria-hidden":"true"}},[this._v("#")]),this._v(" Google Maps Events")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("bounds_changed\ncenter_changed\nclick\ndblclick\ndrag\ndragend\ndragstart\nheading_changed\nidle\nmaptypeid_changed\nmousemove\nmouseout\nmouseover\nprojection_changed\nresize\nrightclick\ntilesloaded\ntilt_changed\nzoom_changed\n")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v("Here is an example of events on a google map. The google maps API has a method called "),n("code",[t._v("addListener")]),t._v(" which is similar to the native "),n("code",[t._v("addEventListener")]),t._v(" method that you use in JavaScript. It takes the name of the event followed by a function which will run when the event happens to the "),n("code",[t._v("map")]),t._v(" object. (Events can also be added to "),n("code",[t._v("marker")]),t._v(" objects). This example waits for the center of the map to change. When it does it sets a delay of 3 seconds to call a function which will reset the center of the map to the position of the marker.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("map"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"center_changed"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// 3 seconds after the center of the map has changed, pan back to the marker.")]),t._v("\n  window"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    map"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("panTo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("marker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getPosition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmarker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"click"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  map"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setZoom")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("8")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  map"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setCenter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("marker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getPosition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);e.options.__file="google-maps-events.md";a.default=e.exports}}]);