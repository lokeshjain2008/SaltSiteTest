# furiosa-autos

Saltside Web code challenge.

## Project

The project consists of a simple [express](http://expressjs.com/en/index.html) application with [jade](http://jade-lang.com/) templating.

### Development
First, run `npm i` to install dependencies. Start the server by running `npm start` and start working! The server will restart automatically when you update code that requires it to do so.

The server runs on `http://localhost:3000`.

### Styling
This project(solution) is using 
[Bootstrap 3](http://getbootstrap.com/css/) 

## Tasks for the challenge.

### Task 1 - Implement the `/models` endpoint
* [x] Implement the models endpoint. Use the provided `api` object to retrieve mock data from the api with the `fetchModels()` function. Render a list of models.
* [x] Make alphabetic sorting possible (ascending, descending, none) by adding a UI component.

### Task 2 - Implement the `/services` endpoint
* [x] Implement the `services` endpoint. Use the provided `api` object to retrieve mock data from the api with the `fetchServices()` function. Render a list of provided services.
* [x] Make the services filterable by `type`. Add some sort of UI component that lets the user filter on the three types `repair`, `maintenance`, and `cosmetic`.

### Task 3 - Bugfix the `/reviews` endpoint
* [x] Bugfix the `reviews` endpoint. It should render all Corporate and Customer reviews. Order is not important.
* [x] Add a UI component that lets the user search for reviews. The search shall look for matches in both `content` and `source`.

### Task 4 - Make the application responsive
* [X] Make the application viewable and usable on mobile devices as well as desktop devices.

