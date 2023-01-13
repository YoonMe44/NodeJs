/* node */
// const fs = require("fs");
// console.log(fs);

// fs.copyFileSync('copy.txt' , 'text.txt'); /*auto copy file */
/* node */

/* npm */
// const superheroes = require('superheroes');

// let superheroName = superheroes.random();
// console.log(superheroName);

/* npm */

/* framework => express */

// const express = require("express");
// const appExp = express();
// const bodyParser = require('body-parser');
// appExp.use(bodyParser.urlencoded({ extended: true}));
// appExp.get('/',function(req,resp){
//     // resp.send("<h1>Hello World</h1>")
//     resp.sendFile(__dirname + "/index.html");
// });
// appExp.post('/about',function(req,resp){
//     const numOne = Number(req.body.num1);
//     const numTwo =  Number(req.body.num2);
//     const result = numOne + numTwo;
//     console.log(req.body.num1);
//     resp.send("Thanks for posting the answer is " + result);
// })



// appExp.get('/contact',function(req,resp){
//     resp.send("<h1>Contact Page</h1>")
// });


// appExp.get('/about',function(req,resp){
//     resp.send("<h1>About Page</h1>")
// });
// appExp.listen(3000);

/* framework => express */

/*live temp*/
const express = require("express");
const https = require("https");

const app = express();
    console.log(x);
app.get('/',function(req,resp){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Bagan&appid=2e0d022b85800260a6cfa48516ffcae0&units=metric';
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl = ` http://openweathermap.org/img/wn/${icon}@2x.png`;
            resp.write(`<h1>The weather in Bagan is ${temp} degree celcius</h1>`);
            resp.write(`<h1>The weather in Bagan is ${description}</h1>`);
            resp.write(`<img src=${imgUrl}>`);
            resp.send();
            resp.send('<h1>The weather in Yangon is ${description}</h1>');
        })
    })
});

app.listen(3000);
/*live temp*/

