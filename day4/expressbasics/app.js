 const express = require('express');
const app=express();

// //middleware
// app.use('/home',(req,res)=>{
//    //console.log(req);
//     res.send('<h1>baaddd</h1>');
//     console.log(res);
// })

app.listen(8080,()=>{
     console.log('server is running at port 8080');
})

//get()
app.get('/thakgaye',(req,res)=>{
    res.send('<h1>hiiii<h1>')
    console.log(res);
})

app.get('/changes',(req,res)=>{
    res.send('<h1>pls kal holiday do </h1>')
    console.log(res);
})
