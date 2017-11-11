# Inventory Manager
The Inventory Manager app was created using HTML, Ruby on Rails, CSS/SASS, Ember, Javascript, Handlebars and Bootstrap. This app allows users to create an inventory of items, track if the items are running low, put them in order list, and add them back to inventory list.

<img width="1440" alt="inventory app" src="https://user-images.githubusercontent.com/26861466/32486500-cfa47522-c374-11e7-8e72-6e8efff3f658.png">

## Frontend Repo And Deployed Site Links:
Link to Frontend Repo: https://github.com/pnguyen44/inventory-manager

Link to Frontend Deployed Site: https://pnguyen44.github.io/inventory-manager/

## Backend Repo and Depoyed Site Links:
Link to Backend: https://github.com/pnguyen44/inventory-manager-api

Link to Backend Deployed Site: https://the-inventory-manager.herokuapp.com/



## User Stories
- Users can sign up, sign in, change password, and sign out by clicking on the “Sign up”, ‘Sign in”, “Change Password”, and “Sign out” navigation bar link, respectively.

- When a user clicks on the “Inventory” navigation bar link, all categories that the user entered will appear.

- When users sign in, users can create a new category in the “Inventory” view.

- After users create a category, users can add items to the category by clicking on the “Add Item” Button

- When users click on the “Add Item” button, a modal will appear and users can enter Name, description, current quantity, and alert quantity.

- When users click on the “View Item(s)” button, users can view the items in a category and the button changes to “Hide Item(s)”

- When users click on the “Hide Item(s)” button, the items table disappears and the button changes to “View Item(s)”

- Users can edit a category’s name and delete the category in the “Inventory” view.

- Users can edit the Item’s name, description, current quantity, and alert quantity in the “Inventory” view.

- When users click on the category name in the “inventory” view, the view  will change to the individual category items list.

- If an item’s current quantity is less than or equal to the alert quantity, the category and item will appear in the “Running Low” view, which users can view by clicking on the “Running Low” navigation bar link.

- In the “Running Low” view, users can add an item to the order list and enter in the “requested quantity”  value  by clicking on the “Add To Order List” button.

- When Item is in the order list, the “Add To Order List” button changes to a link “In Order List” that users can click on and display the “Order List” view.

- Users can view all items that have been ordered in the “Order List” view.
In Order List, users can edit the item’s “requested quantity”  .

- When User’s click on the “remove” button, the item is removed from the “Order List” view and the item’s requested quantity is 0 in the “Running Low” view.

- When users click on the “ Send To Inventory” button, users can enter a purchased amount; if the purchased amount is more than or equal to the requested quantity, the item will be removed from the Order List. The purchased amount will be added the item’s current quantity.

## Wireframe
Link to Wireframe: https://i.imgur.com/O0I690u.png

## Creative Process
The first thing I did was create a user story and wireframe to map out my inventory  app. Afterward I created the model for the Category and Item and added their relationship association with each other, as well the User model. In addition, I updated the controller and serializers and wrote curl scripts. When I finished developing the back-end scripts, I wrote html and css and used Ember in the front-end. I used Ruby on Rails in the backend.

## Technologies Used
- Ruby on Rails
- Javascript
- Ember
- Handlebars
- Bootstrap
- HTML
- CSS/ SASS
- PostgreSQL
- Heroku
- Git/Github

## Resources Used
- MDN
- Github
- Stack Overflow
- Ember Documentation

## Unsolved Problems and Future Plans
I would like to show the “Inventory” view when the user signs in. In addition, I would like users to be able to get email notifications about running low items.
