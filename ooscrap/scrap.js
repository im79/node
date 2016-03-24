/*inspired by https://www.smashingmagazine.com/2015/04/web-scraping-with-nodejs/*/
var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.tagesspiegel.de/berlin/";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      headline = $(".hcf-headline").first().html();
      
    console.log("Letzte Nachricht: " + headline + "");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
