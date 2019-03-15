# Gestures in the Browser

There are no built-in gestures in the browser. There is no `tap`, `pinch`, `zoom`, `swipe`, `pan`, or `rotate` events that are built into Javascript.

If you want to use these gestures then you need to rely on the `touch events` - `touchstart`, `touchend`, `touchmove`, and `touchcancel`. Write functions that are triggered by the touch events and then do the calculations yourself to track where the user first touched the screen, where they last touched the screen, how far they moved their one or more finger (or pointer), and how long it took them move that distance.

At the same time you want to make sure that your script is not intefering with built-in behaviours, like the ability to scroll up and down the page.

To help you solve these problems I have created a framework called TinyShell to help you with the swipe and tap events. The framework also includes some basic styling for mobile pages. It is designed to work inside of a Cordova app. If you use it, keep watching the GitHub repo and the version number for updates to the script and styles.

[See more about TinyShell](./tinyshell.md)

## Return

[Back to Week 9 Module Home](./README.md)
