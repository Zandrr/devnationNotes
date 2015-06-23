var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

url = 'http://www.devnation.org/#agenda';

request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);

    var name;
    var json = [];

    $('div.span4').each(function(){
        var data = $(this);
        info = data;
        console.log(info.text());        
        json.push(info.find('h6').text() + "\n");   
    })

}


fs.writeFile('output2.json', json, function(err){

    console.log('File successfully written!');

})

res.send('success!')

    }) ;
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;     