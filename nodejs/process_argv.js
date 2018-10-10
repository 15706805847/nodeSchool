// console.log(process.argv)
var a = 0;
for(var i = 2; i < process.argv.length; i++){
  // console.log(process.argv[i]) 
  a = a+Number(process.argv[i]);
}
console.log(a)
