(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{275:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The way we are going to achieve this is:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Every character in our message will be written as a two-byte integer. That is a number between 0 and 65535 in decimal or between 0 and 1111 1111 1111 1111 in binary.")]),t._v(" "),s("p",[t._v("This means we will need to write 16 bits into the image for each character.")]),t._v(" "),s("p",[t._v("That means we will use 16 pixels for each character in our message. This might sound like a lot of pixels. A 140 character tweet would need 2240 pixels. However, a small image that is only 200 pixels wide and 200 pixels high would contain 40,000 pixels. Our message would only use 5% of the pixels in that very small image.")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("If we were looping through the array of image pixel data from an image on a canvas, each number represents either the red, or green, or blue, or alpha value for a pixel. Here is how you could loop through each value in the array.")]),t._v(" "),t._m(5),s("p",[t._v("If we wanted to start at the 20th pixel in the image then we would change the initial value for i to 4 * 20.")]),t._v(" "),s("p",[t._v("So, the variable blue would contain the integer value representing that colour.")]),t._v(" "),s("p",[t._v("If we wanted to read the last bit from that number we would use the bitwise AND operator. The variable blue will be a number between 0 and 255. (or 0000 0000 and 1111 1111 in binary).")]),t._v(" "),t._m(6),s("p",[t._v("This will just look at the last bit and if it was a one then the result will be one. If the last bit is zero then the result will be zero.")]),t._v(" "),s("p",[t._v("Here is an example showing the number 130 AND 1.")]),t._v(" "),t._m(7),s("p",[t._v("The first row is 130. The second row is 1. AND them together and the result is zero.")]),t._v(" "),s("p",[t._v("Repeat for the next blue channel integer.")]),t._v(" "),s("p",[t._v("If you were reading the bits from a character, we take the 16-bit number representing the character's number and do an AND operation for each column.")]),t._v(" "),s("p",[t._v("Remember that we can shift bits left and right? If I took a 16 bit value and shifted it over 15 places I would be left with a single bit. If I then AND that single bit with the number 1 my result will be either 1 or 0. That is exactly what I want. I shift the number a different number of positions to target each column in turn. AND each result with one to get the one or zero for that last column.")]),t._v(" "),t._m(8),s("p",[t._v('Now we have array of ones and zeros that represent all the bits that would write out the message "hello".')]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("The process for writing to the last bit is very similar. We will have our array of ones and zeros. One at a time we will loop through our array of bits and insert a single bit into our blue channel number.")]),t._v(" "),s("p",[t._v('Let\'s say we have an array of integers representing the blue channel values from our image. We also have an array of bits that represent the letter "A" which we want to embed in the image blue channel data.')]),t._v(" "),s("p",[t._v("We will use the bitwise shift right to remove the last bit. Then shift it back to the left. Now we know that the last digit will always be zero. Then do a bitwise OR with the bit value from our array.")]),t._v(" "),t._m(10),s("p",[t._v("Some of the bits in the numbers that previously ended in ones will now end in zeros. Others that previously ended in zeros will now end in ones. Other bits are not affected.")]),t._v(" "),s("p",[t._v("See this codepen to see the code samples from here in action - "),s("a",{attrs:{href:"http://codepen.io/mad-d/pen/e9e41b8d414b94fa1be071888b94c520",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://codepen.io/mad-d/pen/e9e41b8d414b94fa1be071888b94c520"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),s("p",[s("router-link",{attrs:{to:"./"}},[t._v("Back to Week 12 Module Home")])],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"steganography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steganography","aria-hidden":"true"}},[this._v("#")]),this._v(" Steganography")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Steganography")]),this._v(" - is the practice of concealing a file, message, image, or video within another file, message, image, or video.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[t._v("Take an image with a mobile device camera")]),t._v(" "),s("li",[t._v("Place that image on an HTML "),s("code",[t._v("<canvas>")])]),t._v(" "),s("li",[t._v("Fetch the array of image pixel data with "),s("code",[t._v("context.getImageData()")])]),t._v(" "),s("li",[t._v("Start looking at the data starting a predetermined pixel number from the array.")]),t._v(" "),s("li",[t._v("Select the 8-bit integer that represents the blue channel in the image.")]),t._v(" "),s("li",[t._v("Either read or set the last (right-most) bit from that number.")]),t._v(" "),s("li",[t._v("Repeat reading or setting the last blue channel bit in every pixel until we reach the end of the message we are reading or the end of our bits we need to insert into the image.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"things-we-need-to-know"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#things-we-need-to-know","aria-hidden":"true"}},[this._v("#")]),this._v(" Things we need to know")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"reading-the-last-bit-from-an-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-the-last-bit-from-an-integer","aria-hidden":"true"}},[this._v("#")]),this._v(" Reading the last bit from an integer")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" imageData "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getImageData")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//width and height are the width and height of the area you want to read")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//typically this is the whole canvas.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("4")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//we are incrementing by 4 each time to move forward one pixel at a time")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" red "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" green "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" blue "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" alpha "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bit "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" blue "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("1\t0\t0\t0\t0\t0\t1\t0\n0\t0\t0\t0\t0\t0\t0\t1\n0\t0\t0\t0\t0\t0\t0\t0\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" character "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"A"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" character"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//get the numeric 16-bit value of the character at position zero in the string.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" firstCol "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//16th column")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" secondCol "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("14")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//15th column")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" thirdCol "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("13")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//and so on")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fifteenthCol "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//2nd column")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sixteenthCol "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("//1st column")]),t._v("\nOur example was creating a "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("variable")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each bit"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" In the real world we would just be doing "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a loop and adding each bit to an array that holds all the bits"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" message "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"hello"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bitArray "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" char"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" char"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("message"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" char"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//once for each letter in the message")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" message"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("char"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" col"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("15")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" col"),s("span",{attrs:{class:"token operator"}},[t._v(">=")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" col"),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("//loop once for each bit in the character")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bit "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" col"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    bitArray"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" bit "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"updating-the-last-bit-from-an-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-last-bit-from-an-integer","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating the last bit from an integer")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" blues "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("128")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("54")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("250")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("251")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("230")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("190")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("34")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("35")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("36")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("65")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("123")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("77")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("78")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("79")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("45")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token number"}},[t._v("33")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newblues "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bitArray "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//number 65")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" currentBit "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" b "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" blues"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" b"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//loop once for each blue value")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" right "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" blues"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("b"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" right "),s("span",{attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  newblues"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" bitArray"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("currentBit"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  currentBit"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);e.options.__file="steganography.md";a.default=e.exports}}]);