# Map Geometry, Shapes, and Lines

## google.maps.geometry

If you want to draw shapes on a map or calculate distances on a map then you should get familiar with the `google.maps.geometry` utility namespace. [geometry namespace reference](https://developers.google.com/maps/documentation/javascript/reference/geometry). There are three namespaces inside this class with methods that you can use.

### `google.maps.geometry.encoding`

For encoding and decoding groups of coordinates to and from Arrays and path Strings.

### `google.maps.geometry.spherical`

For calcuting geodesic angles, distances or areas.

### `google.maps.geometry.poly`

For calculating if a Coordinate is inside a polygonal shape or along a polyline.

## Drawing Shapes and Lines

There may be times when you want to draw shapes or lines on a map. There are four classes that we can use to draw them on a map - `Polyline`, `Polygon`, `Rectangle`, and `Circle`. [Shape and Line guide](https://developers.google.com/maps/documentation/javascript/shapes)
