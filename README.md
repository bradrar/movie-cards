# React Movie Cards

[Live Demo Here](https://react-movie-cards.netlify.com/)

A basic application that displays a list of movies as a list of cards. Each card provides movie detail such as title, subtitle, description, image, and rating.

This app uses nested components that is 3 levels deep. It also uses Redux to store the state of the movie lists that is needed for the app.


Component Diagram 

![alt text](https://www.imageupload.co.uk/images/2018/10/25/sample.md.png "Compenents level")

It also uses Webpack Dependency Management - require.context -  in order to make the dynamic images display in the app.

Bootstrap is used for styling and all custom stylings are located in App.css


The application is composed of the following components:

* Header - A heading that displays application title

* Movies - The primary (root) component that manages state for Movies and all underlying components. It is also responsible for connecting to react to redux

* MovieList-reducer. - Groups a collection of movies

* MovieCard - Represents a single instance of a movie

* StarRating - Indicates average rating of a movie as a list of 5 stars


Screenshot

![alt text](https://www.imageupload.co.uk/images/2018/10/25/Moviecards.md.png "Movie Card Screenshot")

