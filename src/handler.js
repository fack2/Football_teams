const path = require('path');
const fs = require('fs');
require('env2')('.env');
const request = require('request');
const getData = require('./queries/getData.js');

const homePage = (req, res) => {
  const homePagePath = path.join(__dirname, '..', 'public/index.html');

  fs.readFile(homePagePath, (err, file) => {
    if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/html',
      });
      res.end('<h1>ERRORE</h1>');
    }
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(file);
  });
};

const publicHandler = (request, response, url) => {
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpg',
    png: 'image/png',
    ico: 'image/x-icon',
  };
  const filePath = path.join(__dirname, '../public', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>this is error message should be</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': extensionType[extension] });
      response.end(file);
    }
  });
};
const getTeamData = (request, response) => {
  const { query } = url.parse(request.url);
  const { text } = queryString.parse(query);
  getData(text, (err, res) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(res));
  });
};

const notFound = (req, res) => {
  res.writeHead(404, {
    'Content-Type': 'text/html',
  });
  res.end('<h1>ERRORE 404 <br> Page Not Found</h1>');
};
module.exports = {
  homePage, publicHandler, notFound, getTeamData,
};
