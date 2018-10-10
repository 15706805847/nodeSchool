var http = require("http");
var bl = require("bl");

var result = "";
http.get(process.argv[2],function(response){
  response.pipe(bl(function (err, data) {
    console.log(data.length);
    console.log(data.toString("UTF-8"))
    result = data.toString("UTF-8")
  }))
   // response.on("end", function (data) {
   //  console.log(result)
   // })
  // response.setEncoding("UTF-8");
  // console.log(response)
})
