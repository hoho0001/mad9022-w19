# Cordova Commands & Config

Here is the [official documentation for Cordova](https://cordova.apache.org/docs/en/8.x/guide/overview/index.html) You should use this as the main reference.

## Create Projects

To create a brand new Cordova project, navigate in your CLI to the location where you want to create the project. Do not create the folder for the project yet. The `cordova` command will create the folder.

```
cordova create folder ca.example.user.app app-name
```

The command is `cordova create`. It has three parameters you should pass:

1. The name of the project folder
2. The package name for the app. This is the name the device will user for your app. It must be unique.
3. The display name for your app. Use quotation marks if there is a space.

## Adding Platforms

To add a platform, like Android or iOS, to your project we use the `cordova platform` command.

```
cordova platform add android
cordova platform rm ios
cordova platform ls
```

With the platform command we can use `add` `remove` or `ls` to add one platform, remove one platform, or list all installed platforms.

## Adding Plugins

Plugins are just like NPM packages. We add them with the `cordova plugin` command.

```
cordova plugin add cordova-plugin-device
cordova plugin ls
cordova plugin rm cordova-plugin-camera
cordova plugin search keyword
```

Just like the platform commands we can add, remove, or list the plugins.

We can also SEARCH for plugins that match a certain keyword. This command will open your browser and take you to the search results for the plugin search.

You can find all the Cordova commands here [Cordova CLI Reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-cli/index.html)

## Config.xml File

The `config.xml` file is the settings file for your Cordova project. [Cordova config.xml Reference](https://cordova.apache.org/docs/en/8.x/config_ref/index.html)

This is where you can change the version number for your app, the display name or package name for your app, or define what images to use for your Icon or Splashscreen.

## Storing Data

There are many options for saving data in a Cordova application. [Data Storage Reference](https://cordova.apache.org/docs/en/8.x/cordova/storage/storage.html)

LocalStorage is probably the simpliest of your options.

WebSQL is a bit more complicated but it is supported on both iOS and Android. It uses the SQLite syntax. Support for this might be dropped by the browsers at any time. The standard is no longer being developed.

IndexDB is only supported on Android so is not a great option for building apps.

SQLite requires a plugin but works in the same was as WebSQL. Here is the [SQLite Plugin](https://github.com/litehelpers/Cordova-sqlite-storage#readme)

## Cordova Video Playlist

Here is the playlist of tutorials on Cordova. As more Cordova tutorials are created, they will be added to [this playlist](https://www.youtube.com/watch?v=CDY1fRZycGk&list=PLyuRouwmQCjkLnfGRHMosenaxPq9PqH0n).

## Return

[Back to Week 3 Module Home](./README.md)
