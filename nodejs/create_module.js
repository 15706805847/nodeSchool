var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extention, callback){
  fs.readdir(dirname, function(err, files){
    if(err){
      callback(err);
      return;
    }
    var ext = "." + extention
    callback(null,files.filter(e=> {return path.extname(e)===ext}))
  });
}
