# BHSJobBoard

- [BHSJobBoard](#bhsjobboard)
    - [About](#about)
  - [How to Contribute](#how-to-contribute)
  - [Project Layout](#project-layout)
  - [What's Missing](#whats-missing)
  - [Hosting Locally](#hosting-locally)

### About
I created this site to help students at my former high school find opportinities in the surrounding area. It is currently hosted at https://bhsjobs.herokuapp.com.

## How to Contribute
Feel free to raise issues or submit pull requests! Everything you need to get started should be in the [Hosting Locally](#hosting-locally) section. If you need help, raise it as an issue or email me: *jack at jackheuberger dot com*.

### How to Raise an Issue
If you've never used github before, the "Issues" tab isn't just for problems, but is also used for suggestions and feature requests. If you don't have a github account but still want to suggest a feature/point out a bug, feel free to email me at *jack at jackheuberger dot com*.

## Project Layout
- ```app.js```
  - Entrypoint. Defines package requirements, establishes middleware, starts Express server.
- ```/config/```
  - Mongoose setup in ```db.js```.
  - Passport initialization and user creation in ```passport.js```
- ```/helpers/```
  - Custom helpers for Handlebars. 
- ```/middleware/```
  - ```auth.js``` contains two functions that ensure users are or are not logged in before accessing certian views.
- ```/models/```
  - Contains the Mongoose Schemas for Users and Job objects. 
- ```/public/```
  - Forward-facing CSS and other files if needed.
- ```/routes/```
  - Each file defines the endpoints for various pages. 
  - ```index.js``` handles login and redirection to dashboard. 
  - ```auth.js``` handles creating Users and the Google API callbacks.
  - ```jobs.js``` handles displaying and creating Jobs.
- ```/views/```
  - Everything in views are Handlebars templates and snippets that form the pages of the app.
- ```Procfile```
  - So Heroku knows what's going on.

## What's Missing
- /config/config.env with vars PORT, MONGO_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
- These are stored in Heroku environment variables. 

Based on Traversy Media's [Node.JS App from Scratch](https://www.youtube.com/watch?v=SBvmnHTQIPY) video.
## Hosting Locally
1. ```git clone``` this repo
2. ```npm install``` and ```npm install -d``` to install reqired dependencies and dev dependencies
3. in /config/, create a file named config.env. **Make sure this file is listed in the gitignore. This should not be published on Github.** This file should read:
    ```
    PORT = 3000 //Optional. Defaults to 3000 if not specified.
    MONGO_URI = //MONGO URI HERE
    GOOGLE_CLIENT_ID = //GOOGLE CLIENT ID HERE
    GOOGLE_CLIENT_SECRET = //GOOGLE CLIENT SECRET HERE
    ```
4. Follow the steps in [Traversy Media's Video](https://www.youtube.com/watch?v=SBvmnHTQIPY) to get your ```MONGO_URI```, ```GOOGLE_CLIENT_ID```, and ```GOOGLE_CLIENT_SECRET```.
5. Run ```npm run dev``` to run the app in development mode. 
6. Run ```npm run prod``` to start the app in production mode.
