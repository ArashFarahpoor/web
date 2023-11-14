let http = require('http');
let port =8530;
let sever = http.createServer(requsetHandler);
sever.listen(port);
console.log("server is runninh no port :"+port);

let headers ={
    // Text: {'content-typ':'Txt/plain'},
    html: {'content-typ':'Txt/html'}
}
function pagectl(response) {
    
    response.writeHead(200,headers.html);
    response.write(
   `<html>
        <head>
           <style>
                    div{
                        width:100px;
                        height:200px;
                        background-color:blue;
                    }
           </style>
        </head>
          <body>
              <div>salam</div>
          </body>
    </html>`
    );
    response.end();

}
let obj={
    page1:pagectl
}

function requsetHandler(request,response){
console.log('url:', request.url);
let x =request.url.split('/');
console.log('splitted url :',x);
let firstpart = x[1];
console.log('firstpart:', firstpart);

if(firstpart !== 'favicon.ico'){

      obj[firstpart](response);
}
}
