# HTML5 Web Payment Request API

The HTML5 Web Payment Request API is NOT a way to process credit cards. It is a way to standardize entry of credit card information, securely store credit card information, securely submit the credit card and purchase information for end users. To use this feature, the webpage must be loaded over HTTPS.

```js
let paymentRequest = new PaymentRequest(methodData, details, [options]);
```

This is the basic signature for creating the interface. `methodData` talks about what kind of payment method is being used. `details` covers the other purchase and transaction details. `options` is an option that defines which fields you want to collect from the user to send to the payment processing location.

Here is a more detailed example:

```js
let methodData = [
  {
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: ["visa", "mastercard", "amex"],
      supportedTypes: ["credit", "debit"]
    }
  }
];

let details = {
  total: {
    label: "E-Course Purcahse",
    amount: { currency: "CAD", value: "20.00" }
  },
  displayItems: [
    {
      label: "E-Course purchase amount",
      amount: { currency: "CAD", value: "20.00" }
    }
  ],
  shippingOptions: [
    {
      id: "standard",
      label: "Standard shipping",
      amount: { currency: "CAD", value: "0.00" },
      selected: true
    }
  ]
};

let options = { requestShipping: true };

try {
  let request = new PaymentRequest(methodData, details, options);
  // The request object will contain a Promise object.
  // Call show() to trigger the browser's payment flow.
  request
    .show()
    .then(function(instrumentResponse) {
      // Do something with the response from the UI.
    })
    .catch(function(err) {
      // Do something with the error from request.show().
    });
} catch (err) {
  // Catch any other errors.
}
```

## References and Resources

[MDN Web Payment Request Reference](https://developer.mozilla.org/en-US/docs/Web/API/PaymentRequest/PaymentRequest)

## Return

[Back to Week 11 Module Home](./README.md)
