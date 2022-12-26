# This project were created for educational reason

![alt text](./cypress/assets/bulb.png)

## There is a lot of commented code and comments to it. I have left everything like it was, so it is possible to track changes and see how the code was refactored. I haven't implemented POM for all pages, so feel free to clone this repo and enforce it for practical experience.

## Framework

- Cypress for configuring the connection to a browser
- Mochawesome reporter, also support of multi-reporters
- Option to run from Jenkins
- Different tests suites are available

## Tools

- Cypress
- Jenkins
- Mochawesome reporter

## Setup

- clone this repository
- install all dependencies for this project with `npm install`

## Jenkins Setup for local run

- launch your Jenkins server
- navigate to Manage Jenkins > Manage Plugins
- install `NodeJS Plugin`
- navigate to Manage Jenkins > Global Toll Configurations > NodeJS installations > Add Node JS

## Running job in Jenkins locally

- create a new pipeline
- pipeline script from SCM
- SCM (Git)
- change a path to Jenkins file `Jenkinsfile`
- use the current repo URL(your_repo)

## Running test locally

- navigate to the project directory
- open terminal
- to run all tests `npx cypress open`
- to run all tests headless `npx cypress run`
