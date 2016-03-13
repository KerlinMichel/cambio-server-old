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

app.post('/', function (req, res) {
    var body = req.body;
    //var trackingNumber = body.msg.tracking_number;
    //var slug = body.msg.slug;
    //var token = body.msg.unique_token;
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
