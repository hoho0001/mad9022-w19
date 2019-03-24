# Google Maps Controls

There are a variety of controls that you can add to a map. The types include:

```
Zoom control
Map type control
Street view control
Rotate control
Scale control
Fullscreen control
```

If you want to add these controls to the map, it should be done when you are making your initial call to create your map object.

```js
let map = new google.maps.Map(document.getElementById("map"), {
  zoom: 14,
  center: { lat: -33, lng: 151 },
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: true,
  fullscreenControl: false
});
```

By default the controls are mostly hidden. You can add any combination of them by using true and false values.

There are also other properties that let you manage the style and positioning of the different controls. See the documentation link below for more information.

## Maps Controls Options

There are also options that you can set for each Control type. The options allow you to change the location of the control on the map. Some controls have additional properties, like a default location or a default style.

```js
let map = new google.maps.Map(document.getElementById("map"), {
  zoom: 14,
  center: { lat: -33, lng: 151 },
  zoomControl: true,
  zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_CENTER
  },
  mapTypeControl: false,
  mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    mapTypeIds: ["roadmap", "terrain"],
    position: google.maps.ControlPosition.LEFT_TOP
  },
  scaleControl: false,
  streetViewControl: true,
  streetViewControlOptions: {
    position: google.maps.ControlPosition.RIGHT_CENTER
  },
  rotateControl: false,
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: google.maps.ControlPosition.RIGHT_TOP
  }
});
```

It is worth noting that several of the Map Controls have recently stopped appearing on iOS. This happened with an update to iOS and the Google Maps API. [StackOverflow Note about this](https://stackoverflow.com/questions/52040760/zoom-controls-on-ios-are-no-longer-visible) [Other Forum Post about this iOS problem](https://forum.mendixcloud.com/link/questions/90173). The controls still appear and work on Android.

## References and Resources

[Controls Guide](https://developers.google.com/maps/documentation/javascript/controls)

[Controls Reference](https://developers.google.com/maps/documentation/javascript/reference/control)

## Return

[Back to Week 7 Module Home](./README.md)
