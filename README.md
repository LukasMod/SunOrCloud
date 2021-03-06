# SunOrCloud
Weather App with React Native

An app that allows you to check the weather for the next 5 days for the city you have entered. 

Features:
- fetch error handling
- indicator while loading
- fancy icons from API
- real data from API
- redux with redux-thunk

The application uses the API: https://openweathermap.org/
The app uses a free key that I generated and it allows 60 requests/min or 1000000 requests/month.
If the data does not download, an error code will be shown. If the key is used by a third party, wait a while for the query limit to renew.


Requirements
Node 12.18.3 or greater is required.
Tested only on Android.

Quick start
1. Short way:
- download Expo Client on your device
- scan barcode: https://expo.io/@lukasmod/projects/sunorcloud

2. Long way:
- clone repo
- yarn install to install the dependencies
- yarn start to start the metro bundler, in a dedicated terminal

- yarn android to run the Android application 
remember to start a simulator (tested on Android Studio API 30 Android 11.0) or connect an Android phone
