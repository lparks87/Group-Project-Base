# INST 377 Final Project

Final Project INST 377

Final Project: Rotten Studios
Rotten Studios is a web application that allows studios, content platforms, and production companies to find what attributes of movies and television shows have the greatest impact on the total amount of invoices for each movie/television show. My motivation for this project was always seeing web application geared more towards customers purchasing movies and not for the studios or production companies creating these movies. 

My solution is attempting to simplify the process and create a web application where these stakeholders can access all this information in one place. The application will allow studios to determine what attributes are responsible for an increased profit. The user will be able to search by studio name, genre, or viewer rating to determine if there is a larger population attracted to those. The result will contain any result that has that following attrribute so it may be one or more. The users will also be able search a studio by the name and find their location on a map where the marker will give the precise location based on coordinates. Users will also be able to add a studio they want to check, update a studios location, or delete a studio.	

## Link to Heroku: (https://morning-stream-00427.herokuapp.com/)

### Target browser:
My primary stakeholders include studios, content platforms, and production companies. Other studios may want to determine which studios are their biggest competition. They would also be able to determine if there is a specific genre that more customers are purchasing and then start producing more of that type. Content platforms may want to determine if signing a contract with a studio would increase/decrease profit.  Lastly, this could potentially be useful for production companies who work with a given studio as they are responsible making the movie, hiring the actors, and creating advertisements. 

## Link to User Manual: User Manual Link
## Link to Developer Manual: Developer Manual Link

### User Manual: 
If the user is on a computer, they will be able to see the  three links at the top labeled Home, Map, and About Us which will allow the user to navigate to those pages. If the user is on a smaller device such as an ipad or a phone, the navigation window will switch to hambuger icon in the top right corner. The user will then click on the icon and the three navigation links will drop down below. 
To start off the user will be prompted to the home page where they will be able to use the provided search bar to customize the result set below. Users can search by studio name, genre, and viewer rating which will allow them to see what movie and television shows are bringing in the largest profit and why. This is where the stakeholders will get most of their information and it will be stored in an organized table below that is easy to read.  The Map page will allow users to search for a studio, case sensitive, and it will place a marker at the exact coordinates of the searched studio. The user does not have to refresh the page in order to search for a different studio. The about us section discusses the information problem I am trying to solve and the predicted stakeholders. Below the about section, is a text box where users/studios can edit or delete their information from the dataset. This might be becasue they are going out of business or they simply do not want their information tracked. It also allows for new studios to enter their name and be added to the dataset. 

### Developer Manual:
In order to download this web application, the user will need to select the green code button which will then allow them to clone and open the repository in Github desktop. Information about Github Desktop can be found here: [Github Desktop](https://desktop.github.com/)

### Bulma:
Bulma is an open source CSS framework that provides easy styling in order to build responsive web applications. To get started using Bulma, you need to type npm install bulma in your terminal. Users will then need to use a CDN by adding the following CSS file to the head of the HTML page:
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
```
After this you can begin using Bulma. It's important to add the CSS style sheet after the Bulma link in order to further customize web pages. The last styling link has the greatest priority and able to overwrite other styles. Bulma provides great documentation for users which can be found here: [Bulma Documentation](https://bulma.io/documentation/overview/)

### Font Awesome:
Font awesome was also used in the implementation of icons which provides context to the user of what each link a user clicks on. In order to get started using font awesome, you enter your email to create your first kit. Once you send this kit, it will allow you to browse through the free icons they have in their library. In order to use these icons in your code, you will need to add the following script below after the Bulma link and before your CSS link.
```
    <script
      src="https://kit.fontawesome.com/df6cf4852c.js"
      crossorigin="anonymous"
    ></script> 
```
I have attached three links below to assist users getting started.
* [Getting Started](https://fontawesome.com/start) 
* [Font Awesome Documentation](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)
* [Icon Gallery](https://fontawesome.com/icons?d=gallery&p=2)

### How to use Markdown
Markdown is a text notation system used in Discord, Whatsapp and similar to structure pages without writing HTML at all. You'll be using it for your documentation.
* [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

### The data used for this application:
I used my database that I created from INST 327. This database is made up of seven entities including a customers table, genres table, invoices table, rental information table, studios table, tv/movies table, and viewer ratings table. For the purposes of this web application, only tv_movie, genre, viewer_ratings, studio, rental_info, and invoices were used. The data below was used the most throughout the creation of this web application.

The following studios are included in this dataset: 
| Studio              |
| ------------------- |
| Screen Media        |
|Warner Bros.         | 
|Sony                 |
|Universal            |
|Lionsgate            |
|Paramount            |
|MGM                  |
|BVHE                 |
|Samuel Goldwyn Films |
|FOX                  |
|STX Entertainment    |
|Studio Mir           |
|ABC                  |
|Netflix              |
|Belasirius Production|
      

The following genres are included in this dataset: 
| Genre                  |
| ---------------------- |
| Action                 |
|Family                  | 
|Thriller & Suspense     |
|Drama                   |
|Horror                  |
|Comedy                  |
|Sci-fi & Fantasy        |
|Documentary/Docu-series |


The following viewer ratings are included in this dataset: 
| Viewer Ratings |
| ---------------|
| NR             |
|PG              | 
|PG-13           |
|R               |
|TV-Y7-FV        |
|TV-14           |
|TV-MA           |

### How I was able to use the data above in the web application:
In order to use this data, I created API endpoints which specifies what data can be accessed through the API. For instance, since I used 6 out of the 7 tables, I am not able to access the information from the table not used, the customers table. I created GET, PUT, POST, and DELETE for all endpoints on the off chance that I would have to alter the scope of my project. The GET endpoints retrieve information that is specified through sequelize. The PUT endpoints will update informaiton specifed, typically a record. The POST endpoint adds new data to the server and the DELETE endpoint will delete the specific information.

### Difficulties/Bugs:
Unfortunately, I was unable to add a sort by function or utilize dropdowns for filters. The dropdowns provided many difficulties when attempting to assign a value to an option in the dropdown. Due to this, I switched to the search bars which are case-sensitive so if a user does not know the exact studio name, they will not be able to utilize the web application much. When a user types in an incorrect result, I am not able to notify the user that it was wrong as I could not implement that function. The dataset also lacked a way to distinguish movies from tv shows besides seeing that episodes and seasons were NULL for movies. This made it extremely difficult to separate the two to provide additional information to the user. 

### Future/Opportunities:
Rectifying all of the current bugs.
Including the dropdowns to prevent syntax errors which would increase user learnability and reduce frustration
Creating a carousel of pictures would allow users to see what studios are included in the dataset which would allow a studio to determine if they are included or not. 
In the future it would be important to add a more diverse set of features and create a more user-friendly design. 
Adding another column to the tv_movie table that distinguishes movies from television shows which would then allow another way for users to filter through data. 

