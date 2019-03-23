// function sayHello(name){
//     global.console.log('Hello'+name);
// }
// sayHello('Bijay');


// console.log(module);



// const log= require('./logger');
// log('message');
// console.log(logger);

// const path=require('path');
// // here path is built in function
// var pathObj=path.parse(__filename);
// console.log(pathObj);

// for os module
// const os=require('os');
// var totalMemory=os.totalmem();
// var freeMemory=os.freemem();
// // console.log('Total Memory:'+totalMemory);

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// for file 
const fs=require('fs');
// const files=fs.readdirSync('./');
// console.log(files);
fs.readdir('$',function(err,files){
    if(err)console.log('Error',err);
    else console.log('Result',files)
});