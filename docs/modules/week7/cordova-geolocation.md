# Cordova Geolocation Plugin

Working with Geolocation in Cordova is almost exactly the same as working with it in a standard browser. To use it in a Cordova App we just need to add the geolocation plugin. This will talk to the native device capabilities and give us the required permissions to get the location data.

[Cordova Geolocation Plugin Reference](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-geolocation/index.html)

<YouTube
    title="Geolocation with JavaScript"
    url="https://www.youtube.com/embed/NIAqR34eg7I"
/>

When adding the Geolocation plugin to your project, if you are using it on iOS then you also need to add the following to your `config.xml` file, inside the `<platform name="ios"></platform>` element.

```xml
<edit-config target="NSLocationWhenInUseUsageDescription" file="*-Info.plist" mode="merge">
    <string>need location access to find things nearby</string>
</edit-config>
```

Inside the `<string>` element you put your description for why you want geolocation permission in the app. This is just like the Camera permission requirement for iOS.
