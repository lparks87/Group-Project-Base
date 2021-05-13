# This is your readme
You are required to fill it in with documentation similar to that found in the Sequelize example for the course as part of your final project.

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

Final Project INST 377

Final Project: Rotten Studios
Rotten Studios is a web application that allows studios, content platforms, and production companies to find what attributes of movies and television shows have the greatest impact on the total amount of invoices for each movie/television show. 

The application will allow studios to determine what attributes are responsible for an increased profit. The user will be able to search by studio name, genre, or viewer rating to determine if there is a larger population attracted to those. The result will contain any result that has that following attrribute so it may be one or more. The users will also be able search a studio by the name and find their location on a map where the marker will give the precise location based on coordinates. Users will also be able to add a studio they want to check, update a studios location, or delete a studio. 

Link to Heroku: https://morning-stream-00427.herokuapp.com/
Target browser:
My primary stakeholders include studios, content platforms, and production companies. Other studios may want to determine which studios are their biggest competition. They would also be able to determine if there is a specific genre that more customers are purchasing and then start producing more of that type. Content platforms may want to determine if signing a contract with a studio would increase/decrease profit.  Lastly, this could potentially be useful for production companies who work with a given studio as they are responsible making the movie, hiring the actors, and creating advertisements. 

Link to User Manual: User Manual Link
Link to Developer Manual: Developer Manual Link
User Manual
If the user is on a computer, they will be able to see the  three links at the top labeled Home, Map, and About Us which will allow the user to navigate to those pages. If the user is on a smaller device such as an ipad or a phone, the navigation window will switch to hambuger icon in the top right corner. The user will then click on the icon and the three navigation links will drop down below. 
To start off the user will be prompted to the home page where they will be able to use the provided search bar to customize the result set below. Users can search by studio name, genre, and viewer rating which will allow them to see what movie and television shows are bringing in the largest profit and why. This is where the stakeholders will get most of their information and it will be stored in an organized table below that is easy to read.  The Map page will allow users to search for a studio, case sensitive, and it will place a marker at the exact coordinates of the searched studio. The user does not have to refresh the page in order to search for a different studio. The about us section discusses the information problem I am trying to solve and the predicted stakeholders. Below the about section, is a text box where users/studios can edit or delete their information from the dataset. This might be becasue they are going out of business or they simply do not want their information tracked. It also allows for new studios to enter their name and be added to the dataset. 

Developer Manual
How to install your application and all dependencies
To download our actual project, just select the clone repository button for this repository to clone it to your computer. Using Github desktop will be the easiest way to clone the repository. You can find information about Github Desktop here: https://desktop.github.com/

Bulma
Our project harnesses Bulma, a CSS framework for stylizing HTML in an easy manner. You can find the instructions on how to install Bulma here: https://bulma.io/documentation/overview/start/. The simplest way to do this is by using npm to install it. Open a new terminal and enter “npm install bulma”. For Bulma to work correctly a few things need to added. These are already included in our project, but if you are trying to recreate our work, make sure you include the following:

A HTML doctype like so:
Code in the HTML to make the viewport responsive:
The following code in your "head" element:
Font Awesome
Font Awesome is an icons library. It can be found here: https://fontawesome.com/. To see their entire library of icons, go here, https://fontawesome.com/icons?d=gallery. When you find one you like, you can hit "start using this icon" on that icons page to get the HTML tag for adding it to your HTML. We use this for all of the icons on our site. We have added the script for this library already to our HTML.

In case you are curious, here is the code to add it: <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>

jQuery
Our project uses jQuery, primarily to display the movies and tv shows to the table that meet the users customized search. You can install the library by opening terminal and running the following: npm install jquery Here is the link to their website which has more in depth downloading instructions: https://jquery.com/download/. To ensure that jQuery is added to your website, if you’re trying to recreate our work, add the following to your HTML head:

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="crossorigin="anonymous"></script>

How to run our application on a server
To run our application you will first need to install Node.JS. The place to download it can be found here: https://nodejs.org/en/
You will also need NPM, which you can install here, in addition to Node.JS: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
You can also see how changes you make to your code impact the website without having to push those changes by using Live Server for Visual Studio Code. Visual Studio Code is our preferred text editor. Here is the link to further information about Live Server: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
How to run any tests you have written for your software
While we do not have formalized tests for our application, we have implemented a thorough series of console logs to track whether the code is retrieving the correct content and performing tasks correctly. These can be accessed if the user right clicks on a page and selects inspect. Once the inspection page has been displayed, the user should select console to see any messages added that were added to debug. 

The API's for our application
I used my database that I created from INST 327. This database is made up of seven entities including a customers table, genres table, invoices table, rental information table, studios table, tv/movies table, and viewer ratings table. For the purposes of this web application, only tv_movie, genre, viewer_ratings, studio, rental_info, and invoices were used. 

In order to use this data, I created API endpoints which specifies what data can be accessed through the API. For instance, since I used 6 out of the 7 tables, I am not able to access the information from the table not used, the customers table. I created GET, PUT, POST, and DELETE for all endpoints on the off chance that I would have to alter the scope of my project. The GET endpoints retrieve information that is specified through sequelize. The PUT endpoints will update informaiton specifed, typically a record. The POST endpoint adds new data to the server and the DELETE endpoint will delete the specific information.

Known Bugs
Unfortunately, I was unable to add a sort by function or utilize dropdowns for filters. The dropdowns provided many difficulties when attempting to assign a value to an option in the dropdown. Due to this, I switched to the search bars which are case-sensitive so if a user does not know the exact studio name, they will not be able to utilize the web application much. When a user types in an incorrect result, I am not able to notify the user that it was wrong as I could not implement that function. 

Future Development
Rectifying all of the current bugs.
Including the dropdowns to prevent syntax errors which would increase user learnability and reduce frustration
Creating a carousel of pictures would allow users to see what studios are included in the dataset which would allow a studio to determine if they are included or not. 
In the future it would be important to add a more diverse set of features and create a more user-friendly design. 