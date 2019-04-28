(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{249:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Part of the HTML5 spec is the ability of the browser to determine whether or not it is current connected to a wi-fi connection, a cell tower connection, or no connection at all. New developments also let us determine if the connection is metered as well as the general bandwidth of the connection.")]),t._v(" "),s("p",[t._v("The topics to be covered on this page include:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("If you want to know whether or not a browser is connected to a network currently or in the future then you need to check the navigator property or add an event listener.")]),t._v(" "),t._m(4),s("p",[t._v("The above code will check the status of whether or not the device is currently online. To have something happen in the future when the value of the online property changes we need to add an event listener.")]),t._v(" "),t._m(5),s("p",[t._v("There is an online event and an offline event. Both events are attached to the window object.")]),t._v(" "),s("YouTube",{attrs:{title:"offline and online",url:"https://www.youtube.com/embed/pV7ovhx8sAk"}}),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("This is the most recent part of this whole system. With the connection API we an determine not only IF we are connected but to what kind of connection and how fast it is.")]),t._v(" "),s("p",[t._v("This is done exclusively through Javascript. There is nothing in HTML or CSS dealing with the connection API.")]),t._v(" "),t._m(7),s("p",[t._v("First, we will create a global variable called connection. It will point to a list of possibilities. navigator.connection is the proper object. If that object does not exist then the browser will return a false value. This will make the browser try to assign the next possible object to the variable. If that fails, it moves on to the next. This will continue until the first successful object is found.")]),t._v(" "),s("p",[t._v("Now we need to listen for the change event to occur on the object.")]),t._v(" "),t._m(8),s("p",[t._v("If you want to run the function immediately to get the information before a change occurs then you can just call the same connChange function directly.")]),t._v(" "),t._m(9),s("p",[t._v("As a reference for the connection bandwidth, consider that most network providers quote values in Megabits per second and a typical busy mobile 3G connection will be around 400Mbps ~= 400,000 bits/s ~= 50Kb/s ~= 0.05MB/s.")]),t._v(" "),s("p",[t._v("Also remember that the connection API is still under development and could change.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),s("p",[t._v("The above code sample would be useful if we wanted to keep track of when the user loses their WIFI connection and is now on a metered connection, i.e. is paying for the bandwidth.")]),t._v(" "),s("p",[t._v("Here is the W3C page talking about "),s("a",{attrs:{href:"https://w3c.github.io/netinfo/#type-attribute",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Network Connection API"),s("OutboundLink")],1),t._v(". This link points to the section that talks about possible values for the type property.")]),t._v(" "),t._m(13),t._v(" "),s("p",[s("a",{attrs:{href:"http://hood.ie/blog/minutes-offline-case-study.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("This article"),s("OutboundLink")],1),t._v(" is a great summary of how "),s("code",[t._v("minutes.io")]),t._v(", a meeting note taking app, was built as an offline-first site.")]),t._v(" "),s("p",[t._v("PWA - Progressive Web Apps is the term used to describe apps that can work in an offline-first manner.")]),t._v(" "),t._m(14),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.sitepoint.com/use-network-information-api-improve-responsive-websites/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sitepoint Network Info Tutorial"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://html5demos.com/nav-online",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5Demos Online events"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Online_and_offline_events",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Online and Offline"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/WebAPI/Network_Information",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Network Info API"),s("OutboundLink")],1)]),t._v(" "),t._m(15),t._v(" "),s("p",[s("router-link",{attrs:{to:"./"}},[t._v("Back to Week 10 Module Home")])],1)],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"network-connections-and-offline-info"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#network-connections-and-offline-info","aria-hidden":"true"}},[this._v("#")]),this._v(" Network Connections and Offline Info")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"network-connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#network-connections","aria-hidden":"true"}},[this._v("#")]),this._v(" Network Connections")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("onLine and offLine events")]),this._v(" "),n("li",[this._v("navigator.connection API")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"online-and-offline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#online-and-offline","aria-hidden":"true"}},[this._v("#")]),this._v(" onLine and offLine")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onLine"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"online"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"offline"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"offline"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"offline"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{attrs:{class:"token string"}},[t._v('"online"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"online"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"navigator-connection-information-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#navigator-connection-information-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Navigator Connection Information API")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" connection "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozConnection "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitConnection "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msConnection"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("connection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"change"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" connChange"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("connChange")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Bandwidth is approx: "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" connection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bandwidth "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"MB/s"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metered"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Connection is metered"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"type-of-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-of-connection","aria-hidden":"true"}},[this._v("#")]),this._v(" Type of Connection")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("There is also a type of connection, such as "),n("code",[this._v("LTE")]),this._v(", "),n("code",[this._v("3G")]),this._v(", or "),n("code",[this._v("WIFI")]),this._v(". This part of the Network Connection API is still under development but has some mobile support.")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" connection "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connection "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozConnection "),s("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" navigator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webkitConnection"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" type "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("updateConnectionStatus")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"Connection type is changing from "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" type "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('" to "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" connection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  type "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconnection"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"typechange"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateConnectionStatus"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//listen for changes to the type of connection")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"building-offline-first-apps-and-sites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-offline-first-apps-and-sites","aria-hidden":"true"}},[this._v("#")]),this._v(" Building Offline-First Apps and Sites")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"reference-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference-links","aria-hidden":"true"}},[this._v("#")]),this._v(" Reference Links")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"return"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);e.options.__file="network.md";n.default=e.exports}}]);