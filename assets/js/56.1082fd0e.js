(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{294:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("There is a new feature coming to JS called optional chaining. It is intended to shorten your if statements where you need to test for the existence of multiple properties.")]),t._v(" "),s("p",[t._v("Here is an example of the code that we would be looking to replace.")]),t._v(" "),t._m(1),s("p",[t._v("With the new syntax we can combine that into a single statement and put question marks for each item we are wanting to check for existence. Here is the new version of the above code.")]),t._v(" "),t._m(2),s("p",[t._v("If you didn't need to check that the last property in the chain was a number then it could just be this:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),s("p",[s("a",{attrs:{href:"https://medium.freecodecamp.org/here-are-three-upcoming-changes-to-javascript-that-youll-love-387bce1bfb0b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn more about ES7 features and the approval process"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://node.green/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node support for JS features"),s("OutboundLink")],1),t._v(" As of February 2019 there is NO support for this feature in Node.")]),t._v(" "),s("p",[t._v("If you are using Babel to do transpiling for this then you will need to add a Babel plugin. "),s("a",{attrs:{href:"https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel optional chaining plugin reference"),s("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),s("p",[s("router-link",{attrs:{to:"./"}},[t._v("Back to Week 14 Module Home")])],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"es7-optional-chaining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es7-optional-chaining","aria-hidden":"true"}},[this._v("#")]),this._v(" ES7 Optional Chaining")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("if")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObject "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" myObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bigprop "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" myObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bigprop"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("smallprop "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bigprop"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("smallprop"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"The object exists, it has a property called bigprop, which in turn contains a property called smallprop, and smallprop is a number"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObject"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bigprop"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("smallprop "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bigprop"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("smallprop"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"saving time makes me happy"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bigprop"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("smallprop"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"success"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);e.options.__file="optional-chaining.md";a.default=e.exports}}]);