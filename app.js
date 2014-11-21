var express = require('express');
var port = process.env.PORT || 3400;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.listen(port);

console.log('imooc started on port ' + port);
