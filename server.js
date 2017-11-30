// get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');


//get your api routes
const api = require('./server/routes/api');


//set app
const app = express();

//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// point static route to dist
app.use(express.static(path.join(__dirname,'dist')));

//set aapp api
app.use('/api',api);



//point other routes and return index.html
app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'dist/index.html'));
});

//set port
const port = '3000';
app.set('port',port);


//initialize server
const server = http.createServer(app);

//listen to server
server.listen(port, ()=>{
    console.log('Server is running on 3000');
});

