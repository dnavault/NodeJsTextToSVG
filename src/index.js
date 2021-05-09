  const http = require("http");
   

  http
    .createServer(function(req, res) {
      const TextToSVG = require('text-to-svg');
  const textToSVG = TextToSVG.loadSync();

  const attributes = {fill:'red', stroke: 'black'};
  const options = {x:0, y:0, fontSize: 72, anchor:'top',attributes: attributes};
  const svg = textToSVG.getSVG('hello', options);
  //console.log(svg);

      
      
      res.write(svg);
      res.end();
    })
    .listen(8080);

    /**
     * Exercise:
     * - Read “index.html.template” file
     *  - On the request, read user browser information such as device (let’s check if user is mobile, tablet or desktop) and language (in en-gb form) (don’t tell the candidate to use headers, correct ones are “User-Agent” and “Accept-Language”, candidate can use any library to parse “User-Agent”)
     *  - Return read template file with replaced “{{device}}” with user device info and “{{language}}” with user preferred language
     */