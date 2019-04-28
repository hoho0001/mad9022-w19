(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{235:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("These three plugins have closely related functionality. It is important to understand when you would use each.")]),e._v(" "),a("p",[e._v("The Cordova File plugin allows you to manage the file system through a Cordova app.\n"),a("a",{attrs:{href:"https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cordova File Plugin reference"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The Cordova Media Plugin provides the ability to "),a("strong",[e._v("RECORD")]),e._v(" and "),a("strong",[e._v("PLAYBACK AUDIO")]),e._v(" files on a device.\n"),a("a",{attrs:{href:"https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cordova Media Plugin reference"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The Media Capture Plugin provides access to the device's "),a("strong",[e._v("audio")]),e._v(", "),a("strong",[e._v("image")]),e._v(", and "),a("strong",[e._v("video")]),e._v(" "),a("strong",[e._v("CAPTURE")]),e._v(" capabilities.\n"),a("a",{attrs:{href:"https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media-capture/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cordova Media Capture Plugin reference"),a("OutboundLink")],1)]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("The Cordova Media Plugin will provide the necessary permissions for the user to access and play an audio file.")]),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("The possible values that would be sent to the mediaStatus callback method are:")]),e._v(" "),e._m(5),a("p",[e._v("You can use this callback and the numbers as logic in your program to decide if you want to do something like play another track.")]),e._v(" "),a("p",[e._v("When the error function runs, it will receive a number that represents the reason for the failure. The numbers and values are as follows.")]),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),a("p",[a("a",{attrs:{href:"https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media/index.html#methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("Media Object Method Reference"),a("OutboundLink")],1)]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),a("p",[e._v("IOS will require extra permissions when you add this plugin. Since the plugin wants to be able to access the microphone, we need to provide a reason for the access in our app. Without this reason Apple will reject the app.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),a("YouTube",{attrs:{title:"playing audio with the Cordova media plugin",url:"https://www.youtube.com/embed/Fk-DpOnuvmM"}}),e._v(" "),e._m(21),e._v(" "),a("p",[a("router-link",{attrs:{to:"./"}},[e._v("Back to Week 5 Module Home")])],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"cordova-file-media-media-capture-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cordova-file-media-media-capture-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Cordova File, Media, & Media Capture Plugins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"media-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#media-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Media Plugin")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[e._v("let")]),e._v(" media "),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{attrs:{class:"token class-name"}},[e._v("Media")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("src"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" mediaSuccess"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" mediaError"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" mediaStatus"),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For an Android device, if you were saving your audio files inside the "),t("code",[this._v("www")]),this._v(" folder, inside a "),t("code",[this._v("media")]),this._v(" folder then the path would start with "),t("code",[this._v("file:///android_asset/www/")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The primary Object that you will use with this plugin is the "),t("code",[this._v("Media")]),this._v(" object. When you instantiate the Media object you should pass it a source string followed by three callback methods. The first method is the one to call upon successfully finishing playing the audio file. The second method would be called if an error occurred with loading or playing the audio file. The final one lets you know whenever there is a change in the status of the media playback.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Media.MEDIA_NONE = 0\nMedia.MEDIA_STARTING = 1\nMedia.MEDIA_RUNNING = 2\nMedia.MEDIA_PAUSED = 3\nMedia.MEDIA_STOPPED = 4\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("MediaError.MEDIA_ERR_ABORTED = 1\nMediaError.MEDIA_ERR_NETWORK = 2\nMediaError.MEDIA_ERR_DECODE = 3\nMediaError.MEDIA_ERR_NONE_SUPPORTED = 4\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"media-object-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#media-object-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Media Object Methods")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once you have instantiated a "),t("code",[this._v("Media")]),this._v(" object then you can use the provided methods to control the media file.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("media.getCurrentAmplitude()")]),e._v(": Returns the current amplitude within an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.getCurrentPosition()")]),e._v(": Returns the current position within an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.getDuration()")]),e._v(": Returns the duration of an audio file in SECONDS.")]),e._v(" "),a("li",[a("code",[e._v("media.play()")]),e._v(": Start or resume playing an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.pause()")]),e._v(": Pause playback of an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.pauseRecord()")]),e._v(": Pause recording of an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.release()")]),e._v(": Releases the underlying operating system's audio resources.")]),e._v(" "),a("li",[a("code",[e._v("media.resumeRecord()")]),e._v(": Resume recording of an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.seekTo()")]),e._v(": Moves the position within the audio file. Use MILLISECONDS.")]),e._v(" "),a("li",[a("code",[e._v("media.setVolume()")]),e._v(": Set the volume for audio playback.")]),e._v(" "),a("li",[a("code",[e._v("media.startRecord()")]),e._v(": Start recording an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.stopRecord()")]),e._v(": Stop recording an audio file.")]),e._v(" "),a("li",[a("code",[e._v("media.stop()")]),e._v(": Stop playing an audio file.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"media-object-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#media-object-properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Media Object Properties")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There are also two properties of the "),t("code",[this._v("Media")]),this._v(" object. They are READ ONLY though.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("position: the current position in the media file")]),this._v(" "),t("li",[this._v("duration: the length of the media file")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use the "),t("code",[this._v("media.seekTo(ms)")]),this._v(" method to move around the file. Use a "),t("strong",[this._v("millisecond")]),this._v(" value.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"important-note-for-android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-note-for-android","aria-hidden":"true"}},[this._v("#")]),this._v(" Important Note for Android")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When you are finished playing an audio file on Android, be sure to call the "),t("code",[this._v("media.release()")]),this._v(" method to free system memory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"important-note-for-ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-note-for-ios","aria-hidden":"true"}},[this._v("#")]),this._v(" Important Note for iOS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We need the permission "),t("code",[this._v("NSMicrophoneUsageDescription")]),this._v(" to be added to the info.plist file in the XCode project.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We can usually achieve this by editing our "),t("code",[this._v("config.xml")]),this._v(" file with the following entry.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("edit-config")]),e._v(" "),a("span",{attrs:{class:"token attr-name"}},[e._v("target")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("NSMicrophoneUsageDescription"),a("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{attrs:{class:"token attr-name"}},[e._v("file")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("*-Info.plist"),a("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{attrs:{class:"token attr-name"}},[e._v("mode")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("=")]),a("span",{attrs:{class:"token punctuation"}},[e._v('"')]),e._v("merge"),a("span",{attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("string")]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("need microphone access to record sounds"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("string")]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("edit-config")]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The reason why you want to access the microphone from your app should be put inside the "),t("code",[this._v("<string>")]),this._v(" element.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"return"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return","aria-hidden":"true"}},[this._v("#")]),this._v(" Return")])}],!1,null,null,null);n.options.__file="cordova-media.md";t.default=n.exports}}]);