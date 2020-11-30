# Brookline Student Job Board

- [Brookline Student Job Board](#brookline-student-job-board)
    - [About](#about)
  - [How to Contribute](#how-to-contribute)
    - [How to Raise an Issue](#how-to-raise-an-issue)
    - [What's a Git?](#whats-a-git)
  - [Project Layout](#project-layout)
  - [What's Missing](#whats-missing)
  - [Hosting Locally](#hosting-locally)

### About
I created this site to help students at my former high school find opportinities in the surrounding area, and for some to get experience that I wish I had in contributing to open-source projects. It is currently hosted at https://bhsjobs.herokuapp.com.

## How to Contribute
Feel free to raise issues or submit pull requests! Everything you need to get started should be in the [Hosting Locally](#hosting-locally) section. If you need help, raise it as an issue or email me: *jack at jackheuberger dot com*.

### How to Raise an Issue
If you've never used github before, the "Issues" tab isn't just for problems, but is also used for suggestions and feature requests. If you don't have a github account but still want to suggest a feature/point out a bug, feel free to email me at *jack at jackheuberger dot com*.

### What's a Git?
Git is the coding equivalent of the version history section of Google Drive. GitHub makes the version history available to everyone. Git is an extremely handy tool to learn, and you will use it at some point or another if you pursue a career in CS. Why not get a head start and learn it [now](https://try.github.io/)?

## Project Layout
- ```app.js```
  - The entrypoint. Defines package requirements, establishes middleware, starts Express server.
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
1. Star and Fork this repository
2. Use ```git clone https://github.com/{{USERNAME}}/blinejobboard``` to clone the repo on your computer
3. Create a branch using ```git checkout -b {{BRANCH NAME}}```
4. ```npm install``` and ```npm install -d``` to install reqired dependencies and dev dependencies
5. in /config/, create a file named config.env. **Make sure this file is listed in the gitignore. This should not be published on Github.** This file should read:
    ```
    PORT = 3000 //Optional. Defaults to 3000 if not specified.
    MONGO_URI = //MONGO URI HERE
    GOOGLE_CLIENT_ID = //GOOGLE CLIENT ID HERE
    GOOGLE_CLIENT_SECRET = //GOOGLE CLIENT SECRET HERE
    ```
6. Follow the steps in [Traversy Media's Video](https://www.youtube.com/watch?v=SBvmnHTQIPY) to get your ```MONGO_URI```, ```GOOGLE_CLIENT_ID```, and ```GOOGLE_CLIENT_SECRET```.
7. Run ```npm run dev``` to run the app in development mode. When you make changes, the server will automatically restart. Any errors will be printed in the console.
8. Make changes, then ```git add .``` and ```git commit -m "{{Your_commit_message}}"```
9. Merge your branches, and send a pull request. 
