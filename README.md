# Introduction to React - Weather App
Hello, this is the code for the pt 1 in our weather app build.

## Getting Started
To get started fork and then clone this repository to your local machine.

Next you will need to go to [OpenWeatherAPI](https://home.openweathermap.org/users/sign_up) and create and account and get your API key and Host. Alternatively you can go to [Rapid API](https://rapidapi.com/marketplace) and subscribe to the Open Weather API there and test out the response in the playgound (Recommended).

Once you have your key and host. In your terminal in the root of your project 
```
$ touch .env
```

Copy and and paste the contents from .env.dist into .env and then fill in the following values with your keys.
```
REACT_APP_OPEN_WEATHER_API_KEY=
REACT_APP_OPEN_WEATHER_API_HOST=
```

Now we must install the supporting packages for this project. We are using Yarn as the package manager but just note that you can use npm as well. 

```
$ yarn
```

Once the packages have installed run the following to start the app, it will automatically open in your default browser.

```
$ yarn start
```

Make sure you have location services turned on so the code can read your location from the browser. Otherwise it will render no data. We will add onto this in the future to take in a string.