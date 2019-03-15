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

The file plugin will sometimes take longer than the other plugins to be ready to use on Chrome. If you are going to use the file plugin at the start of your app then you should use an additional event listener to `deviceready` if you are using the `browser` platform.

```js
window.addEventListener("filePluginIsReady", () => {
  console.log("File plugin is ready");
});
```

This plugin will tell you when the filesystem and the plugin are ready.
** THIS EVENT IS ONLY FOR CHROME**

If you are going to be using the file plugin shortly after the app has been started then you can check the value of the `window.isFilePluginReadyRaised` property. If the property is true then you can go ahead and use the plugin methods.

The `FileEntry.fullPath` property will take the full file path to your folder or file and convert it to something that is more standard on both iOS and Android.

```
/var/mobile/Applications/<application UUID>/Documents/path/to/file  (iOS)
/storage/emulated/0/path/to/file                                    (Android)

/path/to/file
```

The first two lines are the full path from the root of the file system.

The bottom line is what will be saved in the `fullPath` property.

If you need the full path from the root of the file system starting with `file:///` then you would use the `.toURL( )` method.

## CDVFiles

When working with Cordova and internal files within your app, there is a special protocol that Cordova uses to keep things consistent across iOS and Android - `cdvfile`. Cdvfile paths look like this:

```
cdvfile://localhost/persistent/path/to/file
```

Notice the `persistent` part of the path. This would become `temporary` if you used the alternate filesystem. You can convert other file paths to cdvfile paths by using the `toInternalURL( )` method on the FileEntry Object.

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

## Temporary or Persistent Filesystems

When you access the filesytem there are two versions - Temporary and Persistent. If you create folders or files with the Temporary version then the mobile device is allow to remove them if it needs the memory.

When you create files that are Persistent then you are creating ones that need to be saved for the device to access at a later time or on another launch.

```js
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, ftw, wtf);

window.requestFileSystem(LocalFileSystem.TEMPORARY, 1024 * 1024 * 5, ftw, wtf);
```

Usually when accessing the temporary filesystem you will want to specify how much space you will need for your files. The example above is requesting 5MB of space.

## FileEntry Objects

The `FileEntry` object represents a file on the local filesystem. Once you have a reference to the filesystem and it's root folder then you can start to navigate the folders and create, write, read, or delete files.

To get a `FileEntry` object you would normally start with the `getFile( )` method on a `DirEntry` object.

```js
fs.root.getFile("someFile.html", { create: true, exclusive: false }, ftw, wtf);
```

The first parameter is the name of the file that you want to access (even if it does not exist yet). The second parameter are options about the request for the file. The most common parameter is `create`. This tells the filesystem if it should create the file if it does not exist yet. The exclusive parameter tells the filesystem if this file is only allowed to be accessed by the current app or if it may be shared across apps. The `ftw` parameter is the success callback function. The `wtf` parameter is the error callback function.

### FileEntry Properties

Here are the properties that you can access for a `FileEntry` object.

```js
fe.isFile; //Boolean
fe.isDirectory; //Boolean
fe.name; //String
fe.fullPath; //String
fe.nativeURL; //String
fe.filesystem; //reference to containing filesystem
```

### FileEntry Methods

Here are the methods that you can access from a `FileEntry` object.

```js
fe.toURL(); //returns String that usually starts with file:///
fe.toInternalURL(); //returns String that starts with cdvfile://localhost/
fe.remove(ftw, wtf); //attempts to remove the file. Has success and error callbacks
fe.getParent(ftw, wtf); //attempts to get the parent directory
fe.copyTo(parent, newName, ftw, wtf); //copy a file to a new folder with a new name
fe.moveTo(parent, newName, ftw, wtf); //move a file to a new folder with a new name
fe.getMetadata(ftw, wtf); //get the size and modificationTime for a file
fe.setMetadata(ftw, wtf, metaObj); //update the meta info for a file
fe.file(ftw, wtf); //get a reference to a file to use with a FileReader
fe.createWriter(); //create a writer to add data to a file. returns new FileWriter
```

## DirectoryEntry Objects

The `DirectoryEntry` object represents a directory on the local filesystem. Very similar to the `FileEntry` object there are only a few different methods. Again, it requires you to have access to the filesystem.

### Directory Object properties

These are the properties that you can access from a Directory object.

```js
dir.isFile; //Boolean
dir.isDirectory; //Boolean
dir.name; //String directory name
dir.fullPath; //String path and folder name from app root
dir.nativeURL; //String path and folder name from OS filesystem root
dir.filesystem; // reference to the filesystem used to open the directory
```

### Directory Object methods

These are the methods that you can use from a Directory object.

```js
dir.getDirectory(path, options, ftw, wtf); //get a reference to a directory
dir.getFile(path, options, ftw, wtf); //get a reference to a file in the directory
dir.moveTo(parent, name, ftw, wtf); //move a folder to a new location
dir.copyTo(parent, name, ftw, wtf); //copy a folder to a new location
dir.toURL(); // get the path to the folder starting with file:///
dir.toInternalURL(); // get the path to the folder starting with cdvfile://localhost/
dir.remove(ftw, wtf); //delete an empty folder.
dir.removeRecursively(ftw, wtf); // remove a folder and all of its contents
dir.getParent(ftw, wtf); //get a reference to the containing folder
dir.createReader(); //read a file. returns new FileReader
dir.getMetadata(ftw, wtf);
dir.setMetadata(ftw, wtf, options);
```

## Creating Text Files

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
    console.log("file system open:", fs.name);
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
    console.log("Failed file write:" + err.toString());
  };

  let data = new Blob(["doctype and more actual html..."], {
    type: "text/html"
  });

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
//if you need to load a local file then you need to use XMLHttpRequest
fetch("http://www.example.com/image.png")
  .then(response => {
    return response.blob();
  })
  .then(blob => {
    //we have the binary file.
    dirEntry.getFile(
      "image.png",
      { create: true, exclusive: false },
      function(fileEntry) {
        fileEntry.createWriter(function(fileWriter) {
          fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            readBinaryFile(fileEntry); //see method below
          };
          fileWriter.onerror = function(e) {
            console.log("Failed file write: " + e.toString());
          };
          fileWriter.write(blob);
        });
      },
      onErrorCreateFile
    );
  })
  .catch(err => {
    console.error(err.message);
  });

//To read the binary file, use a method like this
function readBinaryFile(fileEntry) {
  fileEntry.file(function(file) {
    let reader = new FileReader();

    reader.onloadend = function() {
      console.log("file name:", fileEntry.fullPath);
      //image is ready to be used in the interface.
      let blob = new Blob([new Uint8Array(this.result)], { type: "image/png" });
      //this would give you the blob to work with, if you need that
      //it can be passed to an HTML element with URL.createObjectURL( )
      let img = document.getElementById("picture");
      img.src = window.URL.createObjectURL(blob);
    };

    reader.readAsArrayBuffer(file);
  }, onErrorReadFile);
}

//An alternate (simpler) way of simply accessing a file to pass
//to an HTML element is by with just a FileEntry object
//this works if you know the path and filename
fs.root.getFile(
  "image.png",
  {
    create: false
  },
  function(fileEntry) {
    // success function
    // image.png file has been retrieved from root folder
    let img = document.createElement("img");
    img.src = fileEntry.toInternalURL();
    document.body.appendChild(img);
  },
  wtf
);
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

## References and Resources

[Cordova File plugin page](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-file/index.html)
[File Storage on Android](https://developer.android.com/guide/topics/data/data-storage.html)

## Return

[Back to Week 8 Module Home](./README.md)
