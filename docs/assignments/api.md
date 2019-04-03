# Final Project

## Pizza Shop

::: tip Due before 5:00pm on Friday April 26, 2019
Counts for 20% of your final Grade in MAD9022
:::

This will be a joint assignment with a partner. You and a partner of your choosing will be building a whole full-stack solution. The API portion will be built for MAD9124. The front-end interface will be built for MAD9022.

::: danger ACTION REQUIRED
Please send an email to both Steve **griffis@algonquincollege.com** and Robert **mckennr@algonquincollege.com** to tell us who your partner for the final project will be.
:::

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

Every page should have a common branded header.

## Project Files

Create your project as a private GitHub repo.

Invite Steve to your repo.

Make the `master` branch the github pages branch.

All file and folder names should be lowercase.

Add a .gitignore file which filters out `node_modules/` and `.DS_Store`.

Make sure there is a README.md file at the root with a link to the `github.io` version of the site.

## Webpage Paths

If you are creating this site as a SPA then you can use the `pushState` method to change the URL displayed to the user.

Whether your site is built with separate pages or as a SPA the paths should look the same.

/index.html - the sign in page
/register.html - the sign up page
/profile.html - the change password page
/admin/pizzas.html - the list / delete pizza page
/admin/pizza-edit.html - the add / edit pizza page
/admin/ingredients.html - the list / delete ingredient page
/admin/ingredient-edit.html - the add / edit ingredient page

Note: the admin pages are inside an admin folder (or appear as if they are).

## User Notification

There needs to be a consistent way of displaying messages to the user. Create a common function which will create a `div` that slides on to the page from the top of the screen to display any message to the user. When something fails or something is successfully completed we need to tell the user.

The div should be styled in one of three ways:

- Info message: Non-critical messages
- Success message: The user was trying to do something and it worked.
- Error message: The user was trying to do something and it failed.

The div should have a close button to allow the user to dismiss the dialog immediately.

When the user clicks the close button the div should disappear immediately.

If the user does not dismiss the div then after 5 seconds have it slide back off the screen.

Your JavaScript should have a single function that is called to display any message. The div should display BOTH the `title` and the `detail` from the Response payload for an error message.

## Sign In Page

This is where the user would provide their email address and password to try logging in. This page should not check for a valid authentication token. The email and password will be sent to the server as the REQUEST payload to `/auth/tokens/`. [See the Auth Routes notes in the MAD9124 Project description for more details](https://mad9124-w19.github.io/deliverables/final.html)

There needs to be a logout (sign out) link in the top navigation area on every page where the user is logged in.

When a user logs out they should lose their token and be redirected to this page.

Following a successful login (through the call to your API) you need to get the token out of the response object. It will look something like the example below. Save the token in localStorage with a unique key.

```js
{"data" : {
    "token": "your valid user token from the api"
}}
```

After logging in, the user should be redirected to the Pizza List page. They will be able to see links for Pizza List, Ingredient List, Logout, and Change Password. You can choose the labels for these links but they should make sense.

## Sign Up (Registration) Page

The registration page will have a form with five fields - `firstName`, `lastName`, `email`, , `password`, and `userType`. These will be sent to the API as the REQUEST payload. [See the Auth Routes notes in the MAD9124 Project description for more details](https://mad9124-w19.github.io/deliverables/final.html).

This page does NOT require a valid JWT token.

Add a drop down list to the form to allow users to decide if they want to register as a Staff user or Customer user. This is not typical behaviour. It is only being added temporarily to allow for testing the site and the API. On the server you will need to handle the value from this dropdown list and use it with the `isStaff` property in your API.

## Change Password Page

This page should only be accessible with a valid JWT token after the user has logged in.

The page should display the user's current first name, last name, and email address as read only text.

It needs to have two input fields - `newPassword` and `retypeNewPassword`. You will do client side validation to make sure that both fields have the EXACT same value. The fields should be displayed as `<input type="password">`.

The form should also have a checkbox, which when clicked, will toggle the `type` of both fields between `password` and `text`. The checkbox label should read `Show Password`.

## Admin Pizza List

The home page AFTER the user logs in is the Pizza List page. This page lets you view all the currently created pizzas in your database. This page requires a valid JWT token in localStorage or the user will be redirected back to the `Sign In` screen.

This page will make a request to the API for a list of all the pizzas in your database. The JWT token needs to be passed through the Authentication Bearer token header.

In each row on this page there should all the details provided from the API call `GET /api/pizzas` and also be two buttons - `Edit` and `Delete`.

Clicking the `Delete` button will require a confirmation dialog. After the user confirms the delete then make the appropriate API call to delete the pizza from the database.

Clicking the `Edit` button will take the user to the `Add/Edit` page. The id of the pizza to edit needs to be passed to the page through the queryString if you are using multiple pages.

This page will also need a button/link at the top and/or bottom of the screen to Add a new pizza. Clicking this button/link will take the user to the Add/Edit screen.

## Admin Pizza Add/Edit

If no pizza id is provided on this page then the form should be empty. The page should consider itself to be in `ADD` mode. If a pizza id is provided through the querystring then the page should be in `EDIT` mode. This `ADD / EDIT` mode will determine which API call you make for the pizza.

In `EDIT` mode, this page will make a request to the API for the details of the pizza with the matching id. The JWT token needs to be passed through the Authentication Bearer token header.

The user will have two buttons on this page - `SAVE PIZZA` and `BACK TO PIZZA LIST`. The back button just takes the user back to the Admin pizza list page. The Save button will make an API call to add or edit the pizza details.

## Admin Ingredient List

The Ingredient List page will work the same way as the pizza list page. Every ingredient should display the details about the ingredient that are available from your database and the API call `GET /api/ingredients`. Every ingredient should be displayed on a single row with two buttons - `Edit` and `Delete`.

This page will make a request to the API for a list of all the ingredients in your database. The JWT token needs to be passed through the Authentication Bearer token header.

Without a valid request and response nothing will be visible on this page.

Clicking the `Edit` button will take the user to the Ingredient add edit page. The ingredient id should be passed through the querystring if the website is built on multiple pages.

This page will also need a button/link at the top and/or bottom of the screen to Add a new ingredient. Clicking this button/link will take the user to the Add/Edit screen.

## Admin Ingredient Add/Edit

The id of the ingredient to edit will be passed to this page through the querystring if the site is multiple pages and if the page is in `EDIT` mode. It will make a request to the API for the details of the ingredient. The JWT token needs to be passed through the Authentication Bearer token header.

If no id is provided then the page will be in `ADD` mode. The page needs to know if it is in add or edit mode if the user clicks on the `SAVE INGREDIENT` button. The page will have two buttons - `SAVE INGREDIENT` and `BACK TO INGREDIENT LIST`.

When the user clicks the SAVE button then you need to make a call to the appropriate API endpoint depending on whether the user is adding or editing an ingredient. The JWT token will need to be sent through the Authentication Bearer token header with this request.

::: tip Remember
It is a good habit to make a git commit as you complete each logical requirement. This not only tracks your progress, but protects your working code in case you later break it and need to roll back.
:::

::: warning Bonus
If you want to earn up to 5 bonus percent on the project then you can also create the Ordering pages for the customers on your website.
:::
