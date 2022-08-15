# My Movie List (Frontend)

Currently deployed and hosted at [mymovielist.ca](https://mymovielist.ca).

Full-stack app for users to create, edit and share movie lists with their friends. Built with React, Ruby on Rails, MongoDB and the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction). Tested with Jest and Storybook.

This app allows users to:

- Create accounts
- Create public and private Movie Lists
- View the 20 most recent lists created
- View their personal movie lists
- Edit lists (add and remove movies and reorder them)
- Delete lists
- Share public lists with other users

This is a frontend app that is meant to be used with conjunction with an [API](https://github.com/spomberg/my-movie-list-api).

## Dependencies

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

![Usage GIF](https://github.com/spomberg/my-movie-list/blob/main/src/assets/ezgif-1-eb722a5992.gif?raw=true)

## Instructions

- Follow the instructions to set up the API [here](https://github.com/spomberg/my-movie-list-api).
- Clone this repo
- CD into this repo and install dependencies with `npm install`.
- Copy the `.env.example` file and rename it to `.env`.
- Change the `REACT_APP_API_URL` env variable to the API localhost URL and `REACT_APP_BASE_URL_LOCAL` to the frontend URL.
- Run `npm start` to start the app.