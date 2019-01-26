# cryptocurrency
F22 - assignment - An app to list top 50 cryptocurrencies with miscellaneous features

# cryptocurrency
F22 - assignment - An app to list top 50 cryptocurrencies with miscellaneous features


# Falcone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

# How to RUN the application

  - unzip the file and cd into the project folder
  - run `npm install`
  - run `ng serve`
  
## or 

  - git clone https://github.com/sivakumars/cryptocurrency.git
  - switch to the cloned directory
  - run `npm install`
  - run `ng serve`

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

##Features

- Lists top 50 cryptocoins from the "https://chasing-coins.com" API service.
- Homepage has the following features as well
   - Filter the list based on the positive or negative change over the last 24 hours.
   - Sort columns in ascending or descending order by clicking the column names.
   - Details link that takes the user to the Details page
   
- Details page
   - Displays  the total Market cap in the cryptocurrency market and the 24 hour volume change
   - Displays the Logo and the 24 hour price of the cryptocurrency in  USD
   - A chart to display the All time high and monthly trends
      - clicking on the chart label filters the graph for USD or BTC
   
   TODO:
   
   -  Add more filters to filter the list on home page
   -  sort by 24 hour volume change as well.
   - change the colour schemes with better gradients.
   - Add navigation feature in the detail page so the user doesn't have to go back to the home page each time to 
     fetch the next currency detail.
