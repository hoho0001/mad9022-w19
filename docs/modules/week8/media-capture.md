# Capturing Audio and Video in the Browser

This first tutorial explains how to use the `<input type="file" capture type="image/*,video/*,audio/*" />` element on mobile devices to capture images, audio, and video content.

<YouTube
    title="Capturing Media on Mobile Devices"
    url="https://www.youtube.com/embed/dbrez37HlJM"
/>

## Cordova Media Capture Plugin

Cordova has a `media-capture` plugin that is specifically for capturing audio and video. The script for capturing either images, audio, or video is basically the same. Here is an example for capturing video.

```js
document.addEventListener("deviceready", () => {
  // start video capture
  let opts = { limit: 1, duration: 10, quality: 1 };
  //limit is ignored for iOS
  //duration is in seconds
  //quality is ignored for iOS. 1 means high quality. 0 means low quality
  navigator.device.capture.captureVideo(ftw, wtf, opts);
});

// capture callback
function ftw(mediaFiles) {
  let path, len;
  for (let i = 0, len = mediaFiles.length; i < len; i++) {
    path = mediaFiles[i].fullPath;
    // do something with the file
  }
}

// capture error callback
function wtf(err) {
  console.log("Capture Error:", err.code, err.message);
}
```

Here are the Error Codes for the capture.

```
1 CaptureError.CAPTURE_INTERNAL_ERR - error in the capturing process
2 CaptureError.CAPTURE_APPLICATION_BUSY - camera or mic in use already
3 CaptureError.CAPTURE_INVALID_ARGUMENT - eg. limit: -1
4 CaptureError.CAPTURE_NO_MEDIA_FILES - user cancels capture
5 CaptureError.CAPTURE_PERMISSION_DENIED - user denied permission for the capture
6 CaptureError.CAPTURE_NOT_SUPPORTED - device does not support the capturing
```

On the [reference page](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media-capture/index.html) you can find more information about the Media File object, the file Meta Data, and other configuration data.

## References and Resources

[HTML5Rocks Media Capture](https://www.html5rocks.com/en/tutorials/getusermedia/intro/)

[Cordova Media Capture Plugin Reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-media-capture/index.html)

[MDN Media Capture and Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API)

[MDN Media Stream Recording API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API)

## Return

[Back to Week 8 Module Home](./README.md)
