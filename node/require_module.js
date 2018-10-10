var module = require('./create_module.js');

module(process.argv[2],process.argv[3],function(err,list){
  if(err){
    console.log(err);
  }
  list.forEach(file=>{
    console.log(file)
  })
})
