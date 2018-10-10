var http = require("http")

http.get(process.argv[2],function(response){
   response.on("data", function (data) {
    console.log(data.toString("UTF-8"))
   })
  // response.setEncoding("UTF-8");
  // console.log(response)
})
