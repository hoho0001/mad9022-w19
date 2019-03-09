# Cordova File Plugin

Details on how to use the Cordova file plugin to manage files and folders.

The Cordova File plugin provides a bunch of properties that point to commonly used folders. This way you will have access to a common set of folder regardless of whether your App is running on iOS or Android.

```
cordova.file.applicationStorageDirectory - where your app will put folders like `/Documents`. (read-only on iOS)
cordova.file.applicationDirectory - where your app is installed (read only on iOS)
cordova.file.cacheDirectory - where files are cached by your app. These are files that can be recreated. The OS may choose to delete these to free memory.
cordova.file.dataDirectory - private data storage for the app goes here
cordova.file.externalApplicationStorageDirectory - where an app can store files on an external SD card.
```

[Here is the reference for iOS and Android File System Layouts](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html#file-system-layouts)

## Config Settings for File Storage

On Android we need to add a preference setting to our `config.xml` file. For new apps you should add the following.

```xml
<preference name="AndroidPersistentFileLocation" value="Internal" />
```

If you are updating an older app from an old version of Android then you should instead use:

```xml
<preference name="AndroidPersistentFileLocation" value="Compatibility" />
```

or you will lose access to old stored files on Android. The iOS version of the Internal setting is:

```xml
<preference name="iosPersistentFileLocation" value="Library" />
```

## About Filesystems and Paths

**All browsers use forward slash as directory separator in a path.**

**Each level of directory must be created one at a time.**

The file plugin will sometimes take longer than the other plugins to be ready to use. If you are going to use the file plugin at the start of your app then you should use an additional event listener to `deviceready`.

```js
window.addEventListener("filePluginIsReady", () => {
  console.log("File plugin is ready");
});
```

This plugin will tell you when the filesystem and the plugin are ready.

If you are going to be using the file plugin shortly after the app has been started then you can check the value of the `window.isFilePluginReadyRaised` property. If the property is true then you can go ahead and use the plugin methods.

The `FileEntry.fullPath` property will take the full file path to your folder or file and convert it to something that is more standard on both iOS and Android.

```
/var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
/storage/emulated/0/path/to/file                                    (Android)

/path/to/file
```

The first two lines are the full path from the root of the file system.

The bottom line is what will be saved in the `fullPath` property.

## References and Resources

[Cordova File plugin page](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html)
[File Storage on Android](https://developer.android.com/guide/topics/data/data-storage.html)
