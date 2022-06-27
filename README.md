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

### Execute o aplicativo
<br>
Agora, para executar o aplicativo, vá para o diretório raiz do aplicativo e execute o comando `npm install`, aguarde os dependencias serem instarlada e depois execute o comando `node ./server.js`.
<br>
Uma vez que o programa esteja rodando, o usuário pode acessar a página "http://127.0.0.1:3000". Após alguns segundos, a página trará um json contendo todos os dados dos laptops Lenovo.
