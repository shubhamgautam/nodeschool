var url = require("url");
var queryString = require("querystring");
var webAddress = prompt();
var parsedUrl =  url.parse(webAddress);
var parsedQuery = queryString.parse(parsedUrl.query);

console.log(url.resolve(webAddress, parsedQuery.file));
