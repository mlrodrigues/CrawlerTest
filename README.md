Crawler developed as a test for a vacancy at Devnology
==================================================================

## Description

This project, gets all lenovo laptops from the webscraper.io website, sort it by price (low priced to high priced), get all of its data and return as a json.

## Libraries

Currently, we are using three Libraries, are they:

* Json:  
	Json is a lightweight data interchange format inspired by JavaScript object literal syntax.
* puppeteer 14.4.0:
	Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.
* Fs:  
    The fs module is used to save the data that comes from the browser in a json file

## How to use

It is necessary to create a new virtual env and then, install the listed libraries. 

### Run the application
<br>
Now, to run the application, go to the root directory of the application and run the command `npm install`, wait for the dependencies to be installed and then run the command `node ./server.js`.
<br>
Once the program is running, the user can access the page "http://127.0.0.1:3000". After a few seconds, the page will bring up a json containing all data from Lenovo laptops.
