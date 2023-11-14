let http = require('http');
let fs = require('fs');
let port =8530;
let sever = http.createServer(requsetHandler);
sever.listen(port);
console.log("server is runninh no port :"+port);

let headers ={
    // Text: {'content-typ':'Txt/plain'},
    html: {'content-typ':'Txt/html'}
}
// function pagectl(response) {
    
//     response.writeHead(200,headers.html);
//     response.write(
//    `<html>
//         <head>
//            <style>
//                     div{
//                         width:100px;
//                         height:200px;
//                         background-color:blue;
//                     }
//            </style>
//         </head>
//           <body>
//               <div>salam</div>
//           </body>
//     </html>`
//     );
//     response.end();

// }
function pagect2(response) {
    console.log("inside page2");
    fs.readFile('./page1.html','utf8',function(error,data){
        if(error)
        {
        response.writeHead(200,headers.html);
        response.write('error 404')
        response.end();
        }
        else{
            response.writeHead(200,headers.html);
            response.write(data);
            response.end();
        }
    })

}
let obj={
    
    page2:pagect2
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
