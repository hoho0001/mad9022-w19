(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{274:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("HTML5 provides two methods for manipulating the history of a web page.")]),t._v(" "),t._m(3),a("p",[t._v("The parameters for the pushState and replaceState methods are the same.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("So, the visible address in the location bar changes but the new url does not get loaded by the browser.")]),t._v(" "),a("p",[t._v("The difference between the two methods is that pushState adds a new entry into the history array and replaceState simply replaces the current entry in the history array without adding a new one.")]),t._v(" "),a("p",[t._v("Each time you click on the back and forward buttons in your browser you are simply moving back and forth within the array of history entries. These methods give you a way to control that array as well as pass additional JSON information along with each entry.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),a("p",[t._v("With these properties we can take any part of the url that we need when the popstate event fires.")]),t._v(" "),a("p",[t._v("Here is a sample code snippet doing just that.")]),t._v(" "),t._m(16),a("p",[a("a",{attrs:{href:"http://codepen.io/mad-d/pen/pvPNLp?editors=101",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodePen History API Sample"),a("OutboundLink")],1),t._v(". CodePen sample shows use of clicking links and manipulating the history object through "),a("code",[t._v("pushState( )")]),t._v(" and "),a("code",[t._v("replaceState( )")]),t._v(" . It also uses "),a("code",[t._v("location.hash")]),t._v(" and the "),a("code",[t._v("window.hashchange")]),t._v(" event.")]),t._v(" "),t._m(17),t._v(" "),a("p",[a("router-link",{attrs:{to:"./"}},[t._v("Back to Week 3 Module Home")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"history-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history-api","aria-hidden":"true"}},[this._v("#")]),this._v(" History API")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("The browser has a built-in "),a("code",[t._v("history")]),t._v(" object that exists inside the "),a("code",[t._v("window")]),t._v(" object along with "),a("code",[t._v("document")]),t._v(" and "),a("code",[t._v("navigator")]),t._v(". There is an API for working with this object that includes methods, properties, and events.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pushState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replaceState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("The "),a("code",[t._v("state")]),t._v(" parameter is a JSON string that will be available through the popstate event.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("title")]),t._v(" parameter should be left null for now as it is not supported in many browsers.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("url")]),t._v(" parameter is used to update the browser's address regardless of whether or not the page exists. It will not reload your page.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("There are also events associated with the "),a("code",[t._v("history")]),t._v(" object - "),a("code",[t._v("popstate")]),t._v(" and the "),a("code",[t._v("location")]),t._v(" object - "),a("code",[t._v("hashchange")]),t._v(". Both event listeners would need to be attached to the window object.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("popstate")]),this._v(" event is fired when the active history entry changes (an actual change in the current location).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("hashchange")]),this._v(" event is fired when the fragment identifier of the URL has changed. After the change you can get the new value from location.hash.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Calling the "),s("code",[this._v("pushState")]),this._v(" and "),s("code",[this._v("replaceState")]),this._v(" methods will NOT trigger the "),s("code",[this._v("popstate")]),this._v(" event. Instead, you would call these methods:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("go")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("go")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//same as the next line")]),t._v("\nhistory"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("back")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("go")]),this._v(" method will move in either direction through the history array. The number passed to the method determines how many steps and in which direction. The "),s("code",[this._v("back( )")]),this._v(" method is the same as "),s("code",[this._v("go(-1)")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It is important to note that in Webkit based browsers (Safari, Chrome, Opera 15+), the "),s("code",[this._v("onload")]),this._v(" event will also trigger the "),s("code",[this._v("popstate")]),this._v(" event.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("With the "),s("code",[this._v("popstate")]),this._v(" event we have an opportunity to step into the process of navigating between urls. We can prevent any default actions and make our own occur. We can get all the information we need about the url entry in the location bar by accessing the "),s("code",[this._v("location")]),this._v(" object.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("location")]),this._v(" object has several properties for the different parts of the url:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//the querystring")]),t._v("\nlocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//the part which begins with #")]),t._v("\nlocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//http or https")]),t._v("\nlocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//the whole url")]),t._v("\nlocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//the domain name")]),t._v("\nlocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//the port number used for the request")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"DOMContentLoaded"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"#myAnchorTag"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"click"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ev "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v('//this function runs when the user clicks on the anchor with the id "myAnchorTag".')]),t._v("\n    ev"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//stop the link from reloading the page.")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" href "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTarget"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("navigate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" href"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("navigate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addToHistory "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//call ajax function to load the proper content for our url")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//potentially use ajax to load the url itself, if it were an html page")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//add handler for the ajax response")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" addToHistory "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("pushState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//add the url to the history array")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    history"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replaceState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//replace the current entry in the history array")]),t._v("\n "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"popstate"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ev "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//this will handle the back button and forward button if clicked.")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ev"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" location"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("navigate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" location"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//don't add this call to the history... it is already there.")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"return"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);e.options.__file="history.md";s.default=e.exports}}]);