(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{258:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The Javascript dataset property that allows us to access attributes from the HTML which begin with data- does not work properly with all versions of Android. Versions 2.1, 2.2, and 2.3 have only partial support for this property.")]),t._v(" "),s("p",[t._v("So, if you are looking to support Android phones versions 2.1 and up then we need an alternate method. We can use the getAttribute and setAttribute methods.")]),t._v(" "),s("p",[t._v("The dataset method would be:")]),t._v(" "),t._m(2),s("p",[t._v("The get/set attribute alternative is:")]),t._v(" "),t._m(3),s("p",[t._v("If we were writing the HTML with the data- property already inside it then we would write something like this.")]),t._v(" "),t._m(4),s("p",[t._v("This is an extremely useful capability.")]),t._v(" "),s("p",[t._v("It means that we can use attributes that we make up to store any information we want.")]),t._v(" "),s("p",[t._v("We can add properties to any element that we read through Javascript which will let us decide how to update or alter the interface of our application.")]),t._v(" "),s("p",[t._v("We can add values that we collect from a user into the interface to be used later.")]),t._v(" "),s("p",[t._v("We can add values that we extract from a JSON file or XML file, again, to be used later.")]),t._v(" "),t._m(5),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN dataset prop reference"),s("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),s("p",[s("router-link",{attrs:{to:"./"}},[t._v("Back to Week 11 Module Home")])],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"dataset-properties-in-html-elements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset-properties-in-html-elements","aria-hidden":"true"}},[this._v("#")]),this._v(" Dataset Properties in HTML Elements")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"dataset-property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset-property","aria-hidden":"true"}},[this._v("#")]),this._v(" Dataset Property")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"p"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("123")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//will output the value 123.")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"p"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"data-info"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("123")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" p"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"data-info"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-info")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("123"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Some text in a paragraph."),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"references-and-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references-and-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" References and Resources")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);n.options.__file="dataset-props.md";a.default=n.exports}}]);