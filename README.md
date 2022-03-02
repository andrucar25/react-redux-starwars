# Star Wars React Web App

## Summary

This project interactively shows information about Star Wars, using the free online api "SWAPI", from where the data is consumed.
You have a login, where the credentials will be the name of an existing character in the SWAPI database, your password will be your hair color, then you will enter the main view where you will see a list of all the movies where the character participated. By clicking on a movie, you will be able to see data in the style of the intro of the Star Wars movies!

## How to use

1. `git clone` this repository
2. Run `npm install` to install the required dependencies for this app
3. Run `npm start` to start the server from your command line


## Screenshots

- To log in, the name written identically to any SWAPI character is used as a user, the password is the color of their hair. An example would be user: Luke Skywalker, his password is blonde(https://swapi.dev/api/people/?search=Luke%20Skywalker).Once logged in, the username will be saved to local storage.

[![login.png](https://i.postimg.cc/2SQCLCtJ/login.png)](https://postimg.cc/MnpChJqb)

- If the username or password is incorrect, an alert is displayed with the number of times the user made a mistake, when the counter reaches 4 then the login button is blocked.

[![loginfail.png](https://i.postimg.cc/zGZJfyxK/loginfail.png)](https://postimg.cc/nC28Rhbh)

- This is the main view, here the movies in which the user participated are listed, also indicating the date of their registration in the database and their name. Clicking on a movie will redirect the user to the movie details view. If this page is refreshed, it will be redirected to it again, since the user name in the local storage allows you to consult all your information. The "Exit" button will delete all information from local storage and redirect to login.

[![movies.png](https://i.postimg.cc/jdJxKH4R/movies.png)](https://postimg.cc/VdmQWbhh)

- In this view, details of the selected movie are shown, as well as the introduction to the star wars style. The back button redirects to the list of movies

[![moviedetail.png](https://i.postimg.cc/59r4Z7vP/moviedetail.png)](https://postimg.cc/Thrvbctm)

- There is also a table that contains the list of characters that participated in the movie, as well as other data about them.

[![moviecharacters.png](https://i.postimg.cc/d3hqhrMm/moviecharacters.png)](https://postimg.cc/FkQtqfH7)


## Built with
- React
- JavaScript
- React Router v6
- TailwindCSS
- Material UI
- React-Redux Redux-Thunk
- Axios
- CryptoJS
- React Spinners
- Lazy Load
