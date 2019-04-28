(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{244:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN throw reference"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("So, if it is possible to write code that listens for and handles errors then why not take advantage of that capability and create our own custom Errors? Write if statements that compare values and if you don't get the correct answer then Throw your own Exceptions.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("There is a third clause that can be added to your Try Catch block. It is called finally.")]),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("To create a generic type of Error just write this:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),s("p",[t._v("We can also combine these two steps into a single line of code:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("There are seven error types in Javascript.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),s("p",[t._v("We can add any code that we want inside of our error handling function but be sure to add a return true at the end. This will stop the error being thrown to the browser, which will kill all the other scripts running on the page.")]),t._v(" "),s("p",[t._v("Here is an [example page on CodePen(http://codepen.io/mad-d/pen/QwGzLy/?editors=101) showing how to use this instead of a try catch block.")]),t._v(" "),s("YouTube",{attrs:{title:"Handling Global Errors",url:"https://www.youtube.com/embed/KD4Znk9KsL4"}}),t._v(" "),s("YouTube",{attrs:{title:"Debugging tips, tricks, and best practices",url:"https://www.youtube.com/embed/-rxYde_ESxA"}}),t._v(" "),t._m(24),t._v(" "),s("p",[s("router-link",{attrs:{to:"./"}},[t._v("Back to Week 4 Module Home")])],1)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"throwing-and-catching-errors-and-exceptions-in-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throwing-and-catching-errors-and-exceptions-in-javascript","aria-hidden":"true"}},[this._v("#")]),this._v(" Throwing and Catching Errors and Exceptions in JavaScript")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("An "),a("code",[this._v("Error")]),this._v(" is something which occurs in your script that the JavaScript engine does not know how to handle.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("If..else")]),this._v(" blocks test for and compare values.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Try..catch")]),this._v(" blocks attempt to run some code with the understanding that there may be an Error. There are times when you want to attempt some code which may end up in an Error.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The "),a("code",[this._v("catch")]),this._v(" part of the "),a("code",[this._v("Try..Catch")]),this._v(' block "catches" Exceptions that are "Thrown".')])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("try")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//this will fail because you cannot change the value of the number 7 to be equal to anything else")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("err")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//in here we CATCH the Error that was THROWN in the Try block.")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//the variable err will hold our error so we can access it's details")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//The err object will contain four properties - name, message, pageNumber, and lineNumber.")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//The name property tells you which of the seven types of errors occurred.")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//The message property tells you what the problem was.")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//the pageNumber and lineNumber properties tell you the file name and line number which threw the error.")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"finally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finally","aria-hidden":"true"}},[this._v("#")]),this._v(" Finally")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//code you are attempting goes here")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("err")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//code that runs if an error is thrown goes here")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//this code runs regardless of whether or not the error is thrown.")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-and-throwing-an-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-throwing-an-error","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating and Throwing an Error")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" e "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("The variable "),s("code",[t._v("e")]),t._v(" now holds an "),s("code",[t._v("Error")]),t._v(" object. If we want to "),s("code",[t._v("Throw")]),t._v(" the "),s("code",[t._v("Error")]),t._v(", which will make the browser stop running scripts on the current page, then do this:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[this._v("throw")]),this._v(" e"),a("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"error-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Error Types")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("Error - Generic error from which all other Error Types are created.\nSyntaxError - mistake in how your code is written.\nReferenceError - tried to reference a variable that is not declared.\nTypeError - an unexpected datatype that cannot be converted to something useful for the current context.\nRangeError - Number not in acceptable range.\nURIError - URI methods used incorrectly.\nEvalError - eval function used incorrectly.\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-a-custom-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-error","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a Custom Error")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("There are standard types of Errors that JavaScript will Throw. The standard types are "),s("code",[t._v("SyntaxError")]),t._v(", "),s("code",[t._v("RangeError")]),t._v(", "),s("code",[t._v("ReferenceError")]),t._v(", "),s("code",[t._v("TypeError")]),t._v(", "),s("code",[t._v("EvalError")]),t._v(", "),s("code",[t._v("URIError")]),t._v(", and "),s("code",[t._v("InternalError")]),t._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("However, if you want to create your own type of "),s("code",[t._v("Error")]),t._v(" then we need to extend the generic "),s("code",[t._v("Error")]),t._v(" object's prototype and give it at least a name. We will create a function that uses the new operator to create the "),s("code",[t._v("Error")]),t._v(" Object which will extend the prototype of the generic "),s("code",[t._v("Error")]),t._v(" object.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("MondayError")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_message"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" _message"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stack "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stack"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nMondayError"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Error"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMondayError"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"MondayError"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//now we have a MondayError object that we can instantiate whenever we need")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Once we have this custom "),a("code",[this._v("MondayError")]),this._v(" object we can use it and Throw it anywhere in our code that we want or need.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" date "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" day "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" date"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getDay")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//0 - Sunday, 1 - Monday, 2 - Tuesday, ...")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("day "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("MondayError")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"I hate Mondays"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("err")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('" - "')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" err"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"error-event-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-event-handling","aria-hidden":"true"}},[this._v("#")]),this._v(" Error Event Handling")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("An alternative way that you can handle ALL errors on your page is by adding an event listener for the "),a("code",[this._v("onerror")]),this._v(" event. Typically we would want to use "),a("code",[this._v("addEventListener")]),this._v(" to add the error listener. However, this can be unpredictable in some browsers. So, we will fallback on the older method of adding event listeners.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//msg is the error message")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//url is the page where the error occurred")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//line is the line number where the error occurred")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);n.options.__file="throw-catch.md";a.default=n.exports}}]);