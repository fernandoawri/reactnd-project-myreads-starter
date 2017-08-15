# MyReads Project

In the MyReads project, you'll find an app that allows you to select and categorize books you have read, are currently reading, or want to read. MyReads project allows you to search more books from the API booksAPI.js provided by [reactnd-books-api.udacity.com](https://reactnd-books-api.udacity.com)

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019). Most of the commits in this repository correspond to videos in the program.

## Project Setup
### Run Dev Version
* clone the Project - `git clone https://github.com/fernandoawri/reactnd-project-myreads-starter`
* install the dependencies - `npm install`
* start the project - `npm start`

![alt text](https://media.giphy.com/media/xT39DhtFUKEkpRMr3G/giphy.gif "Book Details Page")

### Run Prod Version
* clone the Project - `git clone https://github.com/fernandoawri/reactnd-project-myreads-starter`
* install the dependencies - `npm install`
* install the serve if you don't have it - `npm install -g serve`
* start the project - `serve -s build`
* go to the url provided by serve - `Local: http://localhost:5000`

![alt text](https://media.giphy.com/media/3o6vY6TroRe4IOz0Lm/giphy.gif "Book Details Page")

## How to Navigate
### Main Page
The main page shows 3 shelves for books (Currently reading, Want to read, and Read). The main page shows a control that allows users to move books between shelves. The control is tied to each book instance. When the browser is refreshed, the same information is displayed on the page.

### Search Page
The search page has a text input used to find books. As the value of the text input changes, the books that match that text are displayed on the page, along with a control that lets you add the book to your library.

### Book details
The application allows you to click on the cover of each book displayed in the Main page as well as the Search page displaying the book information.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Demo
### :video_camera: Video Walkthrough Main Page
Here's a walkthrough of Main Page:
![Main Page](https://media.giphy.com/media/3oEhn3XH8Mw4jcQuw8/giphy.gif "Main Page")

### :video_camera: Video Walkthrough Search Page
Here's a walkthrough of Search Page:
![alt text](https://media.giphy.com/media/3oEhn8TMFOGgrMjR4I/giphy.gif "Search Page")

### :video_camera: Video Walkthrough Book Details Page
Here's a walkthrough of Book Details Page:
![alt text](https://media.giphy.com/media/xT39D8Mt9zxksDNg7C/giphy.gif "Book Details Page")

## Contributing

This repository is the starter code for _all_ Udacity students.
But contact me and you can use this project as example for your future projects.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
