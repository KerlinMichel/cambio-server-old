//
// # LetsTakeSomeWebHooks
//
// A simple webhooks server
//
var http = require('http');
var path = require('path');

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 80;

app.use(bodyParser.json());

var request = require('request');
var url ='http://requestb.in/qjjf5gqj';
var url2 = 'http://jwgames.me:8080/bin/ee3303f9-2914-4dcc-bc6e-84c824c6e2b8';

var jar = request.jar();
jar.setCookie(request.cookie("foo=bar"), "http://jwgames.me:8080/bin/ee3303f9-2914-4dcc-bc6e-84c824c6e2b8");
jar.setCookie(request.cookie("bar=baz"), "http://jwgames.me:8080/bin/ee3303f9-2914-4dcc-bc6e-84c824c6e2b8");

var options = { method: 'POST',
  url: 'http://jwgames.me:8080/bin/ee3303f9-2914-4dcc-bc6e-84c824c6e2b8',
  qs: { foo: [ 'bar', 'baz' ] },
  headers: 
   { 'content-type': 'application/x-www-form-urlencoded',
     accept: 'application/json' },
  form: { foo: 'bar', bar: 'baz' },
  jar: 'JAR' };

app.post('/', function (req, res) {
    var body = req.body;
    //var trackingNumber = body.msg.tracking_number;
    //var slug = body.msg.slug;
    //var token = body.msg.unique_token;
    request(url, function (error, response, body) {
        if (!error) {
            console.log(body);
        }
    });
    
    request(url2, function (error, response, body) {
    if (error) throw new Error(error);
        console.log(body);
    });
    
    console.log(req);
    console.log(body);
    console.log(body.text);
    console.log(body.from.address);
    console.log(body['text']);
    //console.log(trackingNumber, slug, token);

    res.json({
        message: 'ok got it!'
    });
});



var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('LETS GET SOME HOOKS BOI at http://%s:%s', host, port)

});
