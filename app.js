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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', routes.index);
