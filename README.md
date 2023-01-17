# Weather change

Ever wondered what the weather was like 1, 5, 10, 20 or even 40 years ago?  With Weather Change you can look this up!  Simply search for a location and you can have access to this weather data!

This Application uses two API endpoints: MapBox and OpenWeather.  The application will load locations that match your search string from MapBox and then use the geometry of that location to search for weather when you select a location.  One request is made to display the current weather.  A second is called to display historic weather information.  With small tweaks to the code many different data points can be included in the weather rows.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run cypress:open`

Launches the cypress test runner test runner in the interactive watch mode.\
