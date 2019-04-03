## API Assignment

This will be a joint assignment with a partner. You and a partner of your choosing will be building a whole full-stack solution. The API portion will be built for MAD9124. The front-end interface will be built for MAD9022.

Please send an email to both Steve **griffis@algonquincollege.com** and Robert **mckennr@algonquincollege.com** to tell us who your partner for the final project will be.

The details and requirements for the API will be covered in MAD9124. The functionality of the API will be graded in that course. The front-end functionality, design, and usability will be graded in MAD9022.

## Front End Requirements

The client-side portion of the final project will require 7 pages. These pages will cover all the administrative features of the API.

1. Sign In
2. Sign Up
3. Change Password
4. Admin | List Pizzas (view and delete pizzas)
5. Admin | Add / Edit Pizzas
6. Admin | List Ingredients (view and delete ingredients)
7. Admin | Add / Edit Ingredients

The layout must be a responsive design and fit on any size screen with appropriate size text.

The layout must be accessible. Accessible means that font sizes are big enough to be read; line height is big enough to allow for easy scanning without being too large which would prevent chunking of content; background and foreground combinations do not make it hard to read; there is consistent padding or margin around all elements to keep them from the edges of the screen and to allow for proper visual alignment of the elements.

The navigation needs to be consistent and predictable on every page.

You may design the CSS yourself entirely or you can start with a framework like Bootstrap version 4 and then enhance it.

The website can be either a series of pages OR a Single Page Application.

All graphics need to be your own OR available with a free licence (provide links to graphic sources in your main.css file.)

All your CSS should be in ONE file that is shared by all pages.

All your JavaScript should be in ONE file that is shared by all pages.

## Project Files

Create your project as a private GitHub repo.

Invite Steve to your repo.

Make the `master` branch the github pages branch.

All file and folder names should be lowercase.

Add a .gitignore file which filters out `node_modules/` and `.DS_Store`.

Make sure there is a README.md file at the root with a link to the `github.io` version of the site.

## User Notification

There needs to be a consistent way of displaying messages to the user. Create a common function which will create a `div` that slides on to the page from the top of the screen to display any message to the user. When something fails or something is successfully completed we need to tell the user.

The div should be styled in one of three ways:

- Info message: Non-critical messages
- Success message: The user was trying to do something and it worked.
- Error message: The user was trying to do something and it failed.

The div should have a close button to allow the user to dismiss the dialog immediately.

When the user clicks the close button the div should disappear immediately.

If the user does not dismiss the div then after 5 seconds have it slide back off the screen.

Your JavaScript should have a single function that is called to display any message.

## Sign In Page

This is where the user would provide their email address and password to try logging in. This page should not check for a valid authentication token. The email and password will be sent to the server as the REQUEST payload to `/auth/tokens/`. (See the Auth Routes notes in the MAD9124 Project description for more details)

There needs to be a logout (sign out) link in the top navigation area on every page where the user is logged in.

When a user logs out they should lose their token and be redirected to this page.

Following a successful login (through the call to your API) you need to get the token out of the response object. It will look something like the example below. Save the token in localStorage with a unique key.

```js
{"data" : {
    "token": "your valid user token from the api"
}}
```

## Sign Up (Registration) Page

The registration page will have a form with five fields - `firstName`, `lastName`, `email`, , `password`, and `userType`. These will be sent to the API as the REQUEST payload. (See the Auth Routes notes in the MAD9124 Project description for more details).

This page does NOT require a valid JWT token.

Add a drop down list to the form to allow users to decide if they want to register as a Staff user or Customer user. This is not typical behaviour. It is only being added temporarily to allow for testing the site and the API. On the server you will need to handle the value from this dropdown list and use it with the `isStaff` property in your API.

## Change Password Page

This page should only be accessible with a valid JWT token after the user has logged in.

It needs to have two input fields - `newPassword` and `retypeNewPassword`. You will do client side validation to make sure that both fields have the EXACT same value. The fields should be displayed as `<input type="password">`.

The form should also have a checkbox, which when clicked, will toggle the `type` of both fields between `password` and `text`. The checkbox label should read `Show Password`.

## Admin Pizza List

The home page AFTER the user logs in

## Admin Pizza Add/Edit

## Admin Ingredient List

## Admin Ingredient Add/Edit
