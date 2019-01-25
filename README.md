# cryptocurrency
F22 - assignment - An app to list top 50 cryptocurrencies with miscellaneous features

# cryptocurrency
F22 - assignment - An app to list top 50 cryptocurrencies with miscellaneous features


# Falcone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

# How to RUN if you are from assessment team of Geektrust

  - unzip the file and cd into the project folder
  - run `npm install`
  - run `ng serve`
  
## or 

  - git clone https://github.com/sivakumars/cryptocurrency.git
  - switch to the cloned directory
  - run `npm install`
  - run `ng serve`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## IMPORTANT - do the following to overcome the CORS issue. The third party API  doesn't set the appropriate headers.

- Enable the chrome extension - `Allow-Control-Allow-Origin: *`  extension from the chrome store 

or 

## Spin up a local JSON-SERVER by running the following commands from the root folder to have mock data .

- npm i json-server
- json-server db.json

- For all the features to work seamlessly in this method, code changes have to be done to the `crypto-service.ts` file to read
  from the mock data.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


