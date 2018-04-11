# Workout-Genius-API

## Installation:
Docker install coming soon...
1. Download repository.
2. Install mongoDB(if you dont already have it)
3. In your command prompt or bash Navigate to the repo and run ```npm install```
4. Create a ".env" in the root directory and add the following to it:
```
EXPRESS_SESSION_SECRET = < CAN BE ANYTHING >

FACEBOOK_APP_ID = < CREATE AN APP AND GET YOUR ID > - https://developers.facebook.com/

FACEBOOK_SECRET_ID =  < YOUR APP SECRET >

MONGO_URL = < CREATE A DATABASE WITH MONGOLABS AND PUT URL HERE > - https://mlab.com/ - ITS FREE
```
5. start mongod by typing ```mongod``` in command prompt
6. In your command prompt or bash Navigate to the repo and run ```npm start```

## Usage

You can make request to any of the RESTful end points below recieve data in JSON formate.

## The root url is:
LOCAL: localhost://4040

MY DEPLOYED HEROKU INSTANCE: https://radiant-headland-78469.herokuapp.com/

### [Example API call](https://radiant-headland-78469.herokuapp.com/api/workouts)
 a GET request to __https://radiant-headland-78469.herokuapp.com//api/workouts__ would return a JSON with all workouts.

---
## RESTful Routes:
| PATH            |  METHOD | USE                       |
| --------------- |:-------:| -------------------------:|
| /api/workouts/  | POST    | Posting a new workout     |
| /api/workouts/  | GET     | Get all workouts          |
| /api/workout/:id| GET     | Shows individual workout  |
| /api/workout/:id| DELETE  | Deletes individual workout|
| /api/workout/:id| PUT     | Edits individual workout  |

## Other Routes:
These routes deal with auth and the user.
Facebook is in the process of updating it's security practices. because of this Oauth & these routes are currently down.

| PATH                            | METHOD | USE                                                         |
| ------------------------------- |:------:| -----------------------------------------------------------:|
| /api/auth/facebook/userauth     | GET    | Retieves authenticated user                                 |
| /api/auth/facebook              | GET    | Authenticates & request user's info from Facebook           |
| /api/auth/facebook/callback     | GET    | Determines if authentication was successful and redirects   |

---

## Middleware/Technologies:
1. Passport-facebook - For authentication via Facebook.
3. BodyParser - To allow the api to recieve form data.
4. Cors - Resolves cors issue when receiving request from another local host
---

# Front-end repository
# [Workout Genius React Front End](https://github.com/myztajay/workout-genius-frontend)


