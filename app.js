var express	= require('express'),
	routes	= require('./routes'),
	http	= require('http'),
	path	= require('path'),
	robots	= require('robots.txt'),
	bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 2000);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(robots(__dirname + '/robots.txt'));

app.get('/', routes.index);
