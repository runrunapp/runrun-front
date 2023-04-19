const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static('./dist/runrun'));

app.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, './../dist/runrun/index.html'));
	console.log('path',  path.join(__dirname, './../dist/runrun/index.html'));
});


app.listen(process.env.PORT || 8080);

console.log(`Listenign on port ${process.env.PORT || 8080}`)
