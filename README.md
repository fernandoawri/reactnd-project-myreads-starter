# MyReads Project

In the MyReads project, you'll find an app that allows you to select and categorize books you have read, are currently reading, or want to read. MyReads project allows you to search more books from the API booksAPI.js provided by [reactnd-books-api.udacity.com](https://reactnd-books-api.udacity.com)

This repo is a code-along with the first project in the [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019). Most of the commits in this repository correspond to videos in the program.

## Project Setup
### Run Dev Version
* clone the Project - `git clone https://github.com/fernandoawri/reactnd-project-myreads-starter`
* install the dependencies - `npm install`
* start the project - `npm start`

### Run Prod Version
* clone the Project - `git clone https://github.com/fernandoawri/reactnd-project-myreads-starter`
* install the dependencies - `npm install`
* install the serve if you don't have it - `npm install -g serve`
* start the project - `serve -s build`
* go to the url provided by serve - `Local: http://localhost:5000 `

## How to Navigate
### Main Page
The main page shows 3 shelves for books (Currently reading, Want to read, and Read). The main page shows a control that allows users to move books between shelves. The control is tied to each book instance. When the browser is refreshed, the same information is displayed on the page.

### Search Page
The search page has a text input used to find books. As the value of the text input changes, the books that match that text are displayed on the page, along with a control that lets you add the book to your library.

### Book details
The application allows you to click on the cover of each book displayed in the Main page as well as the Search page displaying the book information.

## Demo
### :video_camera: Video Walkthrough Main Page
Here's a walkthrough of Main Page:
<img src='http://i.imgur.com/U1JI2Iu.gif' title='Video Walkthrough Main Page' width='' alt='Video Walkthrough Main Page' />

### :video_camera: Video Walkthrough Search Page
Here's a walkthrough of Search Page:
<img src='http://i.imgur.com/QilT0fQ.gif' title='Video Walkthrough Search Page' width='' alt='Video Walkthrough Search Page' />

### :video_camera: Video Walkthrough Book Details Page
Here's a walkthrough of Book Details Page:
<img src='http://i.imgur.com/sghuqDJ.gif' title='Video Walkthrough Book Details Page' width='' alt='Video Walkthrough Book Details Page' />
