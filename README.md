# My Movie List (Frontend)

Full-stack app for users to create, edit and share movie lists with their friends. Built with React, Ruby on Rails, MongoDB and the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction). Tested with Jest and Storybook.

Currently deployed and hosted at [mymovielist.ca](https://mymovielist.ca).

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
  - [Work with external APIs](#work-with-external-apis)
  - [Research documentation](#research-documentation)
- [Instructions](#instructions)
- [Author](#author)
  - [Other Projects](#other-projects)

## Overview

This app allows users to:

- Create accounts
- Create public and private Movie Lists
- View the 20 most recent lists created
- View their personal movie lists
- Edit lists (add, remove movies, and reorder them)
- Delete lists
- Share public lists with other users

This is a frontend app that is meant to be used with conjunction with an [API](https://github.com/spomberg/my-movie-list-api).

![Usage GIF](https://github.com/spomberg/my-movie-list/blob/main/src/assets/ezgif-1-eb722a5992.gif?raw=true)

### The Challenge

This was my first solo full-stack project out of bootcamp, the challenge was planning and creating a CRUD web application with no external help aside from Google and documentation. 

I chose to create a movie lists application after I learned about the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) and since I'm a nerd who loves films I thought this would be something fun to work on (luckily, I was right). The first challenge was reading the API's documentation to learn how I could leverage it to achieve my goals.

The next steps were designing the wireframes and the the database, as another learning opportunity I decided to use a NoSQL database (MongoDB) for the first time. 

Since I didn't have much free time available for this project I chose to build the backend on Ruby on Rails because it was a framework I was familiarized with and it would enable me to get the API running in less time.

For the front end, the chosen framework was React, another technology I was familiar with and which I wanted to be more profecient in. 

## Screenshots

Main Page

![Main Page](https://github.com/spomberg/my-movie-list/blob/main/src/assets/home_screen.png?raw=true)

List Page

![List Page](https://github.com/spomberg/my-movie-list/blob/main/src/assets/list_screen.png?raw=true)

Edit List Page

![Edit List Page](https://github.com/spomberg/my-movie-list/blob/main/src/assets/edit_screen.png?raw=true)

Add Movie Page

![Add Movie Page](https://github.com/spomberg/my-movie-list/blob/main/src/assets/add_movie.png?raw=true)

## Built with

- React
- Ruby on Rails
- MongoDB

### Dependencies

- Axios
- Sass
- React Router
- MaterialUI
- MaterialUI Icons
- Notistack
- React Copy to Clipboard
- React Spinners
- Validator
- Jest
- Storybook

## What I learned

### Work with external APIs

While I had used external APIs before, I had never worked on a project of this scope that was so reliant on one. I spent a significant amount of time reading the API's documentation just to learn what I could and couldn't do with it and how I could use it to achieve my goals before I wrote a single line of code. Now I feel confident that in the future I will be able to get familiarized with new APIs in no time. 

### Research documentation

To build this application, besides the external API, I also used 8 libraries that I had never worked with before. It took a lot of research to just find out which solutions already existed for the problems I needed to solve and then a lot of documentation reading to figure out how to implement them in my project. It was interesting to realize how much of the time allocated to this project was spent researching and reading. 

## Instructions

- Follow the instructions to set up the API [here](https://github.com/spomberg/my-movie-list-api).
- Clone this repo
- CD into this repo and install dependencies with `npm install`.
- Copy the `.env.example` file and rename it to `.env`.
- Change the `REACT_APP_API_URL` env variable to the API localhost URL and `REACT_APP_BASE_URL_LOCAL` to the frontend URL.
- Run `npm start` to start the app.

## Author

- Portfolio - [spomberg.com](https://spomberg.com)
- LinkedIn - [/marcos-spomberg](https://www.linkedin.com/in/marcos-spomberg/)

### Other projects

- My Movie List - [Site](https://mymovielist.ca) / [Repo](https://github.com/spomberg/my-movie-list)
- Password Generator App - [Site](https://password-generator.spomberg.com) / [Repo](https://github.com/spomberg/password-generator-app)
