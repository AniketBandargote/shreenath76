 let fs=require('fs');

 //perform CRUD Operation

 //let data="hii today's weather is cool";
 //task-1 create a file and write data into it
// fs.writeFile('demo.txt',data,{encoding:'utf-8'},(err)=>{
//     if(err) throw err;
//     console.log("file is created successfully");

// })

//way-2
// fs.writeFileSync('demo.txt',data,(err)=>{
//        if(err) throw err;
//        console.log("file is created successfully");
// })

//read file
//let fileread=fs.readFileSync('demo.txt');
//console.log(fileread.toString());
//delete previous data from file
//fs.truncateSync('demo.txt')
//update a file
//fs.appendFileSync('demo.txt','\n i hope weather will be same for next days');

//delete data
//fs.unlinkSync('demo.txt');

let data ="hii am student of the klebca college nippani";
fs.writeFileSync('demo.txt',data)
let readf=fs.readFileSync('demo.txt')
console.log(readf.toString());

fs.truncateSync('demo.txt');

fs.appendFileSync('demo.txt','am student');