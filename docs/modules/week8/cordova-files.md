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

If you need the full path from the root of the file system then you would use the `.toURL( )` method.

## CDVFiles

When working with Cordova and internal files within your app, there is a special protocol that Cordova uses to keep things consistent across iOS and Android - `cdvfile`. Cdvfile paths look like this:

```
cdvfile://localhost/persistent/path/to/file
```

You can convert other file paths to cdvfile paths by using the `toInternalURL( )` method on the FileEntry Object.

The cdvfile paths are also supported by the `cordova-plugin-file-transfer` and `cordova-plugin-media` plugins.

Be sure to add `cdvfile:` to your `default-src` in your Content-Security-Policy meta tag.

In your config.xml file you also need to add `<access origin="cdvfile://*" />`.

## File Plugin Error Codes

```
1	NOT_FOUND_ERR
2	SECURITY_ERR
3	ABORT_ERR
4	NOT_READABLE_ERR
5	ENCODING_ERR
6	NO_MODIFICATION_ALLOWED_ERR
7	INVALID_STATE_ERR
8	SYNTAX_ERR
9	INVALID_MODIFICATION_ERR
10	QUOTA_EXCEEDED_ERR
11	TYPE_MISMATCH_ERR
12	PATH_EXISTS_ERR
```

## Creating Files

To create a file you need two things. First, access to the filesystem, and second, to choose if your file will be TEMPORARY or PERMANENT.

```js
//to Create a PERMANENT file

window.requestFileSystem(
  LocalFileSystem.PERSISTENT,
  0,
  function(fs) {
    console.log("file system open: " + fs.name);
    fs.root.getFile(
      "newPersistentFile.txt",
      { create: true, exclusive: false },
      function(fe) {
        // fe is a fileEntry object. This is the main object that we will use.
        // create will create the file if it does not already exist
        // exclusive can make the file private to the app
        console.log("fileEntry is file?" + fileEntry.isFile.toString());
        // fileEntry.name == 'someFile.txt'
        // fileEntry.fullPath == '/someFile.txt'
      },
      onErrorCreateFile
    );
  },
  onErrorLoadFs
);

//To create a TEMPORARY file we need to specify the amount of space for the file too
window.requestFileSystem(
  window.TEMPORARY,
  5 * 1024 * 1024,
  function(fs) {
    console.log("file system open: " + fs.name);
    let directoryObj = fs.root;
    directoryObj.getFile(
      "newTempFile.txt",
      { create: true, exclusive: false },
      function(fileEntry) {
        //temp file has been created
      },
      onErrorCreateFile
    );
    createFile(fs.root, "newTempFile.txt", false);
  },
  onErrorLoadFs
);
```

## Writing to a File

To add content into a file we need to call the `.createWriter( )` method on a `fileEntry` object. It will return a `FileWriter` object that can be used to put data into the file.

```js
fileEntry.createWriter(function(fileWriterObj) {
  fileWriterObj.onwriteend = function() {
    console.log("Successful file write...");
    //you can use the file now with its new data
  };

  fileWriterObj.onerror = function(err) {
    console.log("Failed file write: " + err.toString());
  };

  let data = new Blob(["doctype and more html..."], { type: "text/html" });

  fileWriterObj.write(data);
});
```

If you want to append text to an existing file, [use this example](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html#append-a-file-using-alternative-methods)

## Reading from a File

If you want to read from a file you need to access the `.file` property of a `FileEntry` object. Then we need to create a `FileReader` object. The `readAsText( )` method needs to be called on the `FileReader` object and it needs to be passed the `file` property from the `fileEntry.file()` method.

```js
fileEntry.file(function(file) {
  var reader = new FileReader();

  reader.onloadend = function() {
    console.log("File name: ", fileEntry.fullPath);
    console.log("File Contents:", this.result);
  };

  reader.readAsText(file);
}, onErrorReadFile);
```

## Binary Files

To create or read a binary file the process is similar to the examples with the text files.

```js
//download a file with fetch and save it to the filesystem
fetch('http://www.example.com/image.png)
.then(response => {
    return response.blob();
})
.then( blob => {
    //we have the binary file.
    dirEntry.getFile('image.png', { create: true, exclusive: false }, function (fileEntry) {
        fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            readBinaryFile(fileEntry); //see method below
        };
        fileWriter.onerror = function(e) {
            console.log("Failed file write: " + e.toString());
        };
        fileWriter.write(blob);
    });

    }, onErrorCreateFile);
})
.catch( err => {
    console.error( err.message );
});

//To read the binary file, use a method like this
function readBinaryFile(fileEntry){
    fileEntry.file(function (file) {
        let reader = new FileReader();

        reader.onloadend = function() {
            console.log("file name:", fileEntry.fullPath );
            //image is ready to be used in the interface.
            let blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
            let img = document.getElementById('picture');
            img.src = window.URL.createObjectURL(blob);
        };

        reader.readAsArrayBuffer(file);

    }, onErrorReadFile);
}
```

## Creating Directories

Directory entries are similar to file entries. We can only create them one at a time. The following code snippet will create a folder called 'myNewDir' and then a folder called 'images' inside it.

```js
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
  fs.root.getDirectory(
    "myNewDir",
    { create: true },
    function(dirEntry) {
      dirEntry.getDirectory(
        "images",
        { create: true },
        function(subDirEntry) {
          createFile(subDirEntry, "fileInNewSubDir.txt");
        },
        onErrorGetDir
      );
    },
    onErrorGetDir
  );
});
```

## Deleting a File

## References and Resources

[Cordova File plugin page](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html)
[File Storage on Android](https://developer.android.com/guide/topics/data/data-storage.html)
