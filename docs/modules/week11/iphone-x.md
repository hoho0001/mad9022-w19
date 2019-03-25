# iPhone-X

With the new design of the screen in the iPhone-X models, Cordova and PhoneGap apps no longer fill in the entire screen. The first step in resolving this issue is to add a new value to the viewport meta tag. `viewport-fit=cover` is the new value we need to add.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover"
/>
```

Once this has been done, the background will fill the extra space at the top and bottom of the screen. This is great for the background but it can cause some issues with the content. We still want to create some space between the content and the notch at the top.

IOS 11+ provides 4 constant values that can be used in the CSS as values for the padding or margin properties. They denote how to use the space around the new notch in the iPhone-X. Two get used in portrait mode and two get used in landscape mode.

```
safe-area-inset-top
safe-area-inset-bottom
safe-area-inset-right
safe-area-inset-left
```

Here is an example of the environmental constants in use.

```css
.page {
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(
      safe-area-inset-bottom
    ) env(safe-area-inset-left);
}
```

## Resources and References

Here are a couple links that talk about the solution and related properties.

[Stephen Radford article](https://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/)

[PhoneGap Blob article](https://blog.phonegap.com/displaying-a-phonegap-app-correctly-on-the-iphone-x-c4a85664c493)

[Alpha Software article](https://documentation.alphasoftware.com/pages/Guides/PhoneGap/Hot%20Topics/iPhone%20X%20Styling%20And%20The%20Status%20Bar%20Plugin.xml)

[MDN env() reference](https://developer.mozilla.org/en-US/docs/Web/CSS/env)

[CanIUse env() reference](https://caniuse.com/#feat=css-env-function)
