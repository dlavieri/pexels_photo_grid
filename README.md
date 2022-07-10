# Rokt Coding Assessment, July 2022

## About MVP

This is a basic application for viewing and searching images from the Pexels API. It is made with React v18, styled-components for styles, Context API for state management, and Jet / React-testing-library for front end unit tests. Built with custom webpack config.

As a user:
I can see an initial set of curated photos on the home screen
I am able to access the the photographerʼs name and url if those details are available for
every photo
I can paginate the list of curated photos
I can use a text input to search for photos Iʼm interested
I can see the results of my search in the photo viewing area
I can paginate search results if needed
I should not be shown the "previous" paginiation button when there is no previous page
I can refresh my browser and retain my search query and/or page

## How to run

1. Get a Pexels API key from https://www.pexels.com/onboarding
2. In /api.js, set API_KEY to your Pexels API key, as a string
3. Run npm install --force, to install all dependencies and create node_modules (force necessary since some testing-library react dependencies are not updated for v18)
4. Run npm run build, to create the webpack build main.js
5. Run npm start
6. You should now be able to interact with the project on PORT 9500

To run tests, run npm test
