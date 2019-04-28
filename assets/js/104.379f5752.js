(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{192:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Now we want to create Dynamic Maps, which can be controlled with Javascript. We want our users to be able to zoom in and out, to pan around on the map, and even add markers. With an API key and a little bit of JavaScript we can build Geolocation powered websites and applications.")]),t._v(" "),s("p",[t._v("It's important to note that there are different versions of the Google Maps API, including ones for Android and iOS.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("To get your Google API key, if you don't already have one, then "),s("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",target:"_blank",rel:"noopener noreferrer"}},[t._v("visit this page"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://console.cloud.google.com/apis/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Cloud API Console"),s("OutboundLink")],1),t._v(" is where you can manage your API key and set restrictions on its usage.")]),t._v(" "),s("p",[t._v('For testing purposes you can simply create an API key for Google Maps JavaScript API. However, in the Cordova app you will get the "for development purposes" overlay.')]),t._v(" "),s("p",[t._v("To get rid of this you will need to:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("To use the Google Maps Javascript API you will need to add the Google Maps Javascript to your webpage.")]),t._v(" "),s("p",[t._v("Best Practice: USE HTTPS for all your scripts, css, images, and HTML files.")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),s("p",[t._v("Next, we need to make sure that we give some dimensions to the map element. Here is some CSS for that.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),s("p",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/maptypes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Map Type reference"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Here is a video by a couple of Google's Developers talking about some common errors when working with the Google Maps API.")]),t._v(" "),s("YouTube",{attrs:{title:"Common Google Maps Errors",url:"https://www.youtube.com/embed/21PDd17dnnI"}}),t._v(" "),s("p",[t._v("The following pages cover adding controls, makers, and managing events on your maps.")]),t._v(" "),s("p",[t._v("Beyond those things there are additional, related APIs from Google that let us do things like get directions, geocode for addresses, or calculate distances on the map. See the links below for more information on these topics.")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("This tutorial covers how to get your API key and create your first Google Map.")]),t._v(" "),s("YouTube",{attrs:{title:"Getting Started with Google Maps JS API",url:"https://www.youtube.com/embed/EwZUQuPjakg"}}),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("When you are creating a new map, there are a series of options that you can set.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("MapOptions Reference"),s("OutboundLink")],1)]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",target:"_blank",rel:"noopener noreferrer"}},[t._v("to get a Google API key"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Home page for Google Maps API"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/geocoding/start?hl=en_GB",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeoCoding API"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/distance-matrix/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maps Distance and Direction API"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/localization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Localizing the Map in different languages"),s("OutboundLink")],1)]),t._v(" "),t._m(21),t._v(" "),s("p",[s("router-link",{attrs:{to:"./"}},[t._v("Back to Week 7 Module Home")])],1)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"google-maps-javascript-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-maps-javascript-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Google Maps JavaScript API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Last semester we used the Google Static Map API. This was a simple matter of adding an HTML "),a("code",[this._v("<img>")]),this._v(" element to your page and setting the src attribute of the image to point to the Google API server and include a latitude and longitude in the query string.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"get-your-api-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-your-api-key","aria-hidden":"true"}},[this._v("#")]),this._v(" Get Your API Key")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("Create a Google Cloud Project with Billing Information")]),this._v(" "),a("li",[this._v("Enable the Google Maps JavaScript API for the Project")]),this._v(" "),a("li",[this._v("Create the API key for the project.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Started")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Add this script tag to your page and replace "),a("code",[this._v("YOUR_API_KEY")]),this._v(' with the API key that you got from the developer site. The "callback" parameter in the querystring would be the name of a function in your own script that you want called once the google map JavaScript has finished loading. This function can be called whatever you like.')])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You will need an HTML element, like a "),a("code",[this._v("<div>")]),this._v(", where the map will be generated. Put the "),a("code",[this._v("<div>")]),this._v(" into your HTML and give it an id, like "),a("code",[this._v("map")]),this._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v("#map")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v("html,\nbody")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("margin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("padding")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Next, in your own Javascript file we need to initialize the map with the coordinates "),a("code",[this._v("45.3496711,-75.7569551")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" map"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("initMap")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  map "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("google"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maps"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"map"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    center"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lat"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("45.3496711")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lng"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("75.7569551")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    zoom"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("16")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mapTypeId"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" google"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maps"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MapTypeId"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("ROADMAP")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("At this point, if you run your webpage through a web server you should see a roadmap of Algonquin College at level "),a("code",[this._v("16")]),this._v(" zoom. Make sure you have the valid API key in your call.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Zoom Level Number Reference")]),this._v(":")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("1 - World\n5 - Continent\n10 - City\n17 - Buildings\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"getting-up-and-running-with-google-maps-js-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-up-and-running-with-google-maps-js-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting Up and Running with Google Maps JS API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"map-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Map Options")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Two of the options are required: "),a("code",[this._v("center")]),this._v(", "),a("code",[this._v("zoom")]),this._v(". All the rest of them have default values.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Here are a few more options that you could set when creating a new map. "),s("code",[t._v("restriction")]),t._v(" will create a bounding box that the user cannot pan outside of. The min and max zoom levels will prevent the user from zooming above or below those levels. "),s("code",[t._v("clickableIcons")]),t._v(" will control whether or not the user can click on icons that represent "),s("strong",[t._v("Points of Interest")]),t._v(" on the map. "),s("code",[t._v("disableDoubleClickZoom")]),t._v(" will let you add a "),s("code",[t._v("dblclick")]),t._v(" event listener to your map object. "),s("code",[t._v("disableDefaultUI")]),t._v(" lets you turn off all the default controls and decide exactly which ones you want to show.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("map "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" google"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maps"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Map")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"map"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  zoom"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  center"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lat"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("45.3496711")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lng"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("75.7569551")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  restriction"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" latLngBounds"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        north"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("45.36")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        south"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("40.35")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        west"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("100.28")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        east"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token number"}},[t._v("80.81")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  minZoom"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maxZoom"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  disableDoubleClickZoom"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  clickableIcons"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  disableDefaultUI"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"reference-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-links","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference Links")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);e.options.__file="google-maps.md";a.default=e.exports}}]);