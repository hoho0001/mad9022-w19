# Cordova Android Permissions

With Android, sometimes there are extra permissions that you need to enable. In Android Marshmallow (API ) the permission system changed so that users have to grant permissions at run time. Occassionally a plugin will be missing a required permission. Luckily, there is a plugin that we can use to solve this.

[Android permission plugin](https://www.npmjs.com/package/cordova-plugin-android-permissions)

[Android Native reference for permissions](https://developer.android.com/reference/android/Manifest.permission.html)

This plugin will let you ask for a specific permission by prompting the user to allow it.

```js
permissions.requestPermission(
  permissions.READ_EXTERNAL_STORAGE,
  function(status) {
    console.log("success setting permission");
    console.log(status.hasPermission);
  },
  function(err) {
    console.log("failed to set permission");
  }
);
```

You can also check to see whether or not a user has already granted permissions to do something. See the Android reference above for a list of all the possible permissions.

```js
permissions.checkPermission(
  permissions.READ_EXTERNAL_STORAGE,
  function(status) {
    console.log("success checking permission");
    console.log(status.hasPermission); //property is true or false
  },
  function(err) {
    console.log("unable to check the permission");
  }
);
```

When comes to solving permission problems for iOS, the solution is usually adding the `edit-config` element with the right settings to the config.xml file. This way Cordova will copy the settings into the XCode project when you build your app. As an example, here is the iOS permissions for accessing the user location via GPS.

```xml
<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
    <string>need location access to find things nearby</string>
</edit-config>
```

<YouTube
  title="Android Permissions on Cordova"
  url="https://www.youtube.com/embed/W47ZJ1vgqqI"
/>

## References and Resources

[Android permission plugin](https://www.npmjs.com/package/cordova-plugin-android-permissions)

[Android Native reference for permissions](https://developer.android.com/reference/android/Manifest.permission.html)

[Android Permission Categories](https://developer.android.com/guide/topics/permissions/overview#normal-dangerous)

[Article about Understanding Android Permissions](https://blog.avast.com/managing-android-app-permissions)

## Return

[Back to Week 9 Module Home](./README.md)
