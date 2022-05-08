## HEROKU LINK
https://web-application-cw-2.herokuapp.com/


## INTRO

A small, independent restaurant prides itself on its use of fresh local produce and its constantly changing menu and wishes to obtain a website which showcases this. It envisages a site which will allow prospective customers and other members of the general public to view its current lunch and dinner menus and which will allow members of its staff to login and update the menus on a daily basis. 

This repo is primary for the web application and will use:

- JavaScript
- Node.js
- Mustache Templates

## HOW TO RUN THE PROJECT

1. pull down the code
2. Run npm install
3. Run `npm run start` or `npm run dev` (check package json script for difference)

## HOW TO RUN UNIT TESTS

`npm run test`

The command will run all tests in the command line and print out the result report.

## HOW TO RUN ACCEPTANCE TESTS

`npm run cypress:open`

## DEVELOPMENT CHANGES

Unauthenticated:

- HomePage:
- AboutPage:

- Lunch/Dinner Pages:
Better layout for the menus - filter them to be starters, mains & desserts.

- NewsPage: 
Implemented the CRUD functionality for a user.

- ContactPage:

Authenticated:

- Admin Nav Bar:
Due to incomplete actions I have made the edit dish page available in the nav bar but this would be used in the card of the dish.

- Login:
Due to the incomplete actions I have left this open so that you can navigate through the other pages that would only be available if authenticated. Unable to get this to submit and authenticate the user.

- Admin HomePage:
Wanted to implement a search functionality for the dishes (making it easier for the user).

- Add/Edit Dish:
Add: Yes
Edit: No
Delete: No

- Add/Edit Blog:
Not viewable as I didn't implement in time.

Other:

- Code Structure:
Should have put MVC's in a /src folder to begin with, easier to read.

- Tests:
Cypress: I would of implemented this better for adding/editing a dish.
Unit: More added.

## NODE VERSION
Checkout the .nvmrc file for the up to date version used in this repo.

To find out more information please read the docs here:
https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating 


## DEPLOYING TO HEROKU

`heroku login`
`heroku create`
`git push heroku master`
`heroku ps:scale web=1`
`heroku open`
