const express = require('express');
const app = express();

const PORT = 8000;

app.get('/',(req,res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Access-Control-Allow-Origin', '*');
    let counter = 1;

    const intervalReference = setInterval(()=>{
        let responseData = {counter: counter, date: new Date()};
        responseData = JSON.stringify(responseData);
        res.write(`data: ${responseData}\n\n`);
        counter = counter + 1;
    },3000);  
    
    res.on('close', ()=>{
        clearInterval(intervalReference);
        res.end('closing the connection..');
    })
});

app.listen(PORT, ()=>{
    console.log(`The app listening to the port ${PORT}`)
})