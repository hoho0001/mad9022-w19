# HTML5 Web Payment Request API

The HTML5 Web Payment Request API is NOT a way to process credit cards. It is a way to standardize entry of credit card information, securely store credit card information, securely submit the credit card and purchase information for end users. To use this feature, the webpage must be loaded over HTTPS.

```js
let paymentRequest = new PaymentRequest(methodData, details, [options]);
```

This is the basic signature for creating the interface. `methodData` talks about what kind of payment method is being used. `details` covers the other purchase and transaction details. `options` is an option that defines which fields you want to collect from the user to send to the payment processing location.

## References and Resources

[MDN Web Payment Request Reference](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/PaymentRequest)

## Return

[Back to Week 11 Module Home](./README.md)
