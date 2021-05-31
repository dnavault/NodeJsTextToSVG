  const express = require("express");
  const router = express.Router();
  const app = express();
  const connect = require('connect');
  const svg64 = require('svg64'); 
  const vhost = require('vhost');
 
  //const userApp = connect();
  //const emailApp = connect();
  
  app.use(vhost('chatter.tedxgramercy.com', require('./chatter/app').app))
  app.use(router);

  app.get('/', function(req, res){
      res.send("Hello from the root application URL");
  });
  
  //app.get('/myapp/test/', function(req, res){
   //   res.send("MyApp 'test' URL");
  //});
  
 // app.listen(0, () => console.log('Application is running'));

  // Email app route
  //router.get('/', function(req,res) {
    //  res.send('Email app');
 // });

  

  //server.use(vhost('email.local', emailApp));
  //server.use(vhost('*.user.local',userApp));

  //console.log(vhost);
  

  app.listen(3000);

  /*const TextToSVG = require('text-to-svg');
  const textToSVG = TextToSVG.loadSync();
  const attributes = {fill:'red', stroke: 'black'};
  const options = {x:0, y:0, fontSize: 72, anchor:'top',attributes: attributes};
  let svg = "";
  //console.log(svg);

  // respond with "hello world" when a GET request is made to the homepage
  app.get('/textToSVG', function (req, res) {
   
    if(req.query.name)
    {
      svg = textToSVG.getSVG(req.query.name, options);
      res.setHeader('Content-Type', 'text/plain');
      //res.setHeader('Content-Type', 'text/html');
      console.log(svg64(svg));
      res.write(svg);
      res.end();
    }
  });

  app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html')  
    res.write("<img src='data:image/svg+xml;utf8,https://5i0t5.sse.codesandbox.io/textToSVG?name=test'/>");
      res.end();
  });
    */

  // app.get('/textToSVG', function (req, res) {
   

    

    /**
     * Exercise:
     * - Read “index.html.template” file
     *  - On the request, read user browser information such as device (let’s check if user is mobile, tablet or desktop) and language (in en-gb form) (don’t tell the candidate to use headers, correct ones are “User-Agent” and “Accept-Language”, candidate can use any library to parse “User-Agent”)
     *  - Return read template file with replaced “{{device}}” with user device info and “{{language}}” with user preferred language
     */
