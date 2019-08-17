![alt text](https://github.com/ut-group7/DogBook/blob/master/client/src/Components/Nav/logo.png "logo")
# Canine Connection

## About
---
This application is a full-stack web application built with the MERN (Mongo, Express, React, Node) tech-stack. The purpose of this application is to create a place where people can pool together information about lost pets to help reunite them with their families! The concept revolves around creating listings involving detailed information about the missing dog and it's last seen location. User's can then see these listings on an interactive map or in an information-card format. There is also a place for user's to post information about dog sightings. 

## Getting Started
---
If you would like to run your own instance of this app you can begin by forking this repository.
 [(How-to fork a repository)](https://help.github.com/en/articles/fork-a-repo)

### Prerequisites
For this project to work you will need to have the following installed/setup:
* Node --> [Get Node](https://nodejs.org/en/)
* Npm --> [Install Npm](https://www.npmjs.com/get-npm)
* Mongo --> [Install Mongo](https://docs.mongodb.com/manual/installation/)
* API keys for Google OAuth strategy --> [Google Developers Console](https://console.developers.google.com/)

#### Google Developer Console & API Keys
This project uses OAuth2.0 with Google to authenticate users. You will need to setup a few things in the Google developer console before the project will run properly. If you need help with this you can find the relevant documentation from Google here: --> [Google OAuth API](https://developers.google.com/identity/protocols/OAuth2WebServer)

##### Adding your Google API key & secret
To keep your Google API keys secure you will need to create file called '.env' inside the root folder of the forked project. Inside the .env file you should add the following code:

```js
# Google OAuth Keys

GOOGLE_CLIENT_ID=paste-your-google-client-id-here
GOOGLE_CLIENT_SECRET=paste-your-google-client-secret-here
```


## Installation
---
Once all of the pre-requisites are in place, using your terminal of choice, inside your root directory you will need to run the command `npm install`. 

Once Npm is done installing all necessary dependencies, you will need to do the same for the client directory via `cd client && npm install`

## Scripts
---
* `npm run test` Runs the mocha testing suite


* `npm start` Starts the *server only* on port 3030


* `npm run dev` Starts the server and the react app development server as well

## Development
---
### Planning
The inital concept came about after a good round of brainstorming possible projects, and ultimately rejecting them. We decided on this project after talking about what a pain it is when you have a run-away dog. You can see some of the inital wireframes for the concept below:

### Authentication

For authentication we utilized the Passportjs and implemented the Google OAuth20 strategy. Passport promises simple authentication integration, learning curve aside, we agree. 


The decision to go with OAuth via Google was based primarily on two things:
* No need to encrypt and store user passwords manually
* No need to haggle with password resets

#### Keeping Security Legit
Although this application is primarily for education/demonstration purposes we wanted to ensure that when it came to authentication, we did it right.


The implemented OAuth strategy creates a user in our local database based on some returned Google profile information - without saving or storing any sort of password - so security stays a top priority. 

We had done research on utilizing a local authentication strategy, but ultimately, aside from the password reset problem this involved also encrypting user passwords before storing in our database - at least if we wanted to meet basic security standards.

#### Future Authentication Updates
In the future, adding the local authentication strategy would be a priority to provide users the option of creating an application-specific profile + credentials, rather than utilizing their Google profile (or lack thereof).

Initial ideas for tackling some of the security challenges this presents:
* Utilizing one of the following for password hashing, depending on the complexity of implementation respectively:
..*bcrypt 
..*scrypt 
..*argon2 

* Utilizing Node-mailer to handle password reset emails. [Node Mailer](https://www.npmjs.com/package/nodemailer)

### Testing
For testing server side code we implemented Mocha & Chai.

Although create-react-app comes with Jest already installed and ready, we ran into issues with Jest version control when installing it for use in our root directory. Utilizing Mocha instead allowed us to keep our server & client test seperate.

We ran out of time, and did not get to develop the tesing suite like we would have preferred, but the skeleton for adding in future tests is setup.

#### Future Additions to Testing
In the future we would like to add:
* Testing on all DB Models, and authentication route returns
* Implementation of Travis CI or similar for automated testing

## Authors
* [Gregory Rutherford](https://github.com/gregory-rutherford)
* [Brock Cowen](https://github.com/BCowen12)
* [Fred Negrete](https://github.com/fred1n)
* [Cayce Brown](https://github.com/caycebrown)
