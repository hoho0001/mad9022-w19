# Google Maps JavaScript API

Last semester we used the Google Static Map API. This was a simple matter of adding an HTML `<img>` element to your page and setting the src attribute of the image to point to the Google API server and include a latitude and longitude in the query string.

Now we want to create Dynamic Maps, which can be controlled with Javascript. We want our users to be able to zoom in and out, to pan around on the map, and even add markers. With an API key and a little bit of JavaScript we can build Geolocation powered websites and applications.

It's important to note that there are different versions of the Google Maps API, including ones for Android and iOS.

## Get Your API Key

To get your Google API key, if you don't already have one, then [visit this page](https://developers.google.com/maps/documentation/javascript/get-api-key).

[Google Cloud API Console](https://console.cloud.google.com/apis/dashboard) is where you can manage your API key and set restrictions on its usage.

For testing purposes you can simply create an API key for Google Maps JavaScript API. However, in the Cordova app you will get the "for development purposes" overlay.

To get rid of this you will need to:

1. Create a Google Cloud Project with Billing Information
2. Enable the Google Maps JavaScript API for the Project
3. Create the API key for the project.

## Getting Started

To use the Google Maps Javascript API you will need to add the Google Maps Javascript to your webpage.

Best Practice: USE HTTPS for all your scripts, css, images, and HTML files.

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

Add this script tag to your page and replace `YOUR_API_KEY` with the API key that you got from the developer site. The "callback" parameter in the querystring would be the name of a function in your own script that you want called once the google map JavaScript has finished loading. This function can be called whatever you like.

You will need an HTML element, like a `<div>`, where the map will be generated. Put the `<div>` into your HTML and give it an id, like `map`.

```html
<body>
  <div id="map"></div>
</body>
```

Next, we need to make sure that we give some dimensions to the map element. Here is some CSS for that.

```css
#map {
  height: 100%;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

Next, in your own Javascript file we need to initialize the map with the coordinates `45.3496711,-75.7569551`

```js
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.3496711, lng: -75.7569551 },
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}
```

At this point, if you run your webpage through a web server you should see a roadmap of Algonquin College at level `16` zoom. Make sure you have the valid API key in your call.

**Zoom Level Number Reference**:

```
1 - World
5 - Continent
10 - City
17 - Buildings
```

[Map Type reference](https://developers.google.com/maps/documentation/javascript/maptypes).

Here is a video by a couple of Google's Developers talking about some common errors when working with the Google Maps API.

<YouTube
    title="Common Google Maps Errors"
    url="https://www.youtube.com/embed/21PDd17dnnI"
/>

The following pages cover adding controls, makers, and managing events on your maps.

Beyond those things there are additional, related APIs from Google that let us do things like get directions, geocode for addresses, or calculate distances on the map. See the links below for more information on these topics.

## Getting Up and Running with Google Maps JS API

This tutorial covers how to get your API key and create your first Google Map.

<YouTube
  title="Getting Started with Google Maps JS API"
  url="https://www.youtube.com/embed/EwZUQuPjakg"
/>

## Map Options

When you are creating a new map, there are a series of options that you can set.

[MapOptions Reference](https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions)

Two of the options are required: `center`, `zoom`. All the rest of them have default values.

Here are a few more options that you could set when creating a new map. `restriction` will create a bounding box that the user cannot pan outside of. The min and max zoom levels will prevent the user from zooming above or below those levels. `clickableIcons` will control whether or not the user can click on icons that represent **Points of Interest** on the map. `disableDoubleClickZoom` will let you add a `dblclick` event listener to your map object. `disableDefaultUI` lets you turn off all the default controls and decide exactly which ones you want to show.

```js
map = google.maps.Map(document.getElementById("map"), {
  zoom: 12,
  center: { lat: 45.3496711, lng: -75.7569551 },
  restriction: { north: 45.0, south: 40.0, west: -100, east: -80 },
  minZoom: 10,
  maxZoom: 15,
  disableDoubleClickZoom: true,
  clickableIcons: false,
  disableDefaultUI: true
});
```

## Reference Links

[to get a Google API key](https://developers.google.com/maps/documentation/javascript/get-api-key)

[Home page for Google Maps API](https://developers.google.com/maps/documentation/javascript/)

[GeoCoding API](https://developers.google.com/maps/documentation/geocoding/start?hl=en_GB)

[Maps Distance and Direction API](https://developers.google.com/maps/documentation/distance-matrix/)

[Localizing the Map in different languages](https://developers.google.com/maps/documentation/javascript/localization)

## Return

[Back to Week 7 Module Home](./README.md)
