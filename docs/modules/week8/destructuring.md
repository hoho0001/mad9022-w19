# ES6 Destructuring

Destructuring is a a new technique added in ES6. Simply put, it is a way to assign all the properties from an object or an array to individual variables in a single line of code.

Here is an example of basic destructuring with the values from an array.

```js
let name, num, rest;
[name, num, ...rest] = [
  "bob",
  123,
  "bob@work.org",
  true,
  false,
  "(212)-555-1234"
];
//the value of name will be 'bob'
//the value of num will be 123
//the value of rest will be ['bob@work.org', true, false, '(212)-555-1234']
```

Here is an example of basic destructuring with an object.

```js
let name, num;
({ name, num } = { name: "Leonard", num: 1234 });
//the variable name will be 'Leonard'
//the variable num will be 1234
```

You can also provide default values for the variables when destructuring an array or object.

```js
let day, month;
({ day = "Monday", month = "January" } = { month: "March" });
//the value of day will be 'Monday'
//the value of month will be 'March'
```

<YouTube
    title="destructuring"
    url="https://www.youtube.com/embed/ktBTYQXBAog"
/>

## References and Resources

[MDN destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[MDN rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## Return

[Back to Week 8 Module Home](./README.md)
