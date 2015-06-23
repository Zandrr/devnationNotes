var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

url = 'http://www.redhat.com/summit/speakers/session/';

request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);

    var name;
    var json = [];

    $('div.sessionSpeaker').each(function(){
        var data = $(this);
        info = data.next();         
        json.push(info.find('h4').text() + "\n");   
    })

}


fs.writeFile('output.json', json, function(err){

    console.log('File successfully written!');

})

res.send('Check your console!')

    }) ;
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;     