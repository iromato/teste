const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer ((req,res)=> {
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/html');
	res.end(`

<html>
     <head>
          <style>
	  body {
	       background-color: #0000FF;
	       }
	       </style>
	       <title>
	       Hello Blue!
	       </title>
	       </head>
	       <body>
	       <h1>Hello BLUE!</h1>
	       </body>
	       </html>`);
});

