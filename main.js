const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();

// app.use(express.bodyParser());
app.use(express.static(__dirname + '/'));
app.use(cors());
app.listen(process.env.PORT || 8080, () => console.log("Port used: "));

app.get('/', function(req, res) { // GET REQUEST
    let rdata = fs.readFileSync('./timeline.json');
    let data = JSON.parse(rdata);
    res.send(data);

});

app.get('/posts', function(req,res) {
    let thing = req.query;
    const newEvent = {
        "scene": thing.scene,
        "act": thing.act,
        "title": thing.title,
        "quote": thing.quote,
        "desc": thing.desc,
        "by": thing.by,
        "themes": JSON.parse(req.stuff.themes),
    };

    console.log(newEvent);
    let rdata = fs.readFileSync('./timeline.json');
    let data = JSON.parse(rdata);
    data.push(newEvent);


    fs.writeFileSync('timeline.json', JSON.stringify(data));

    res.statusCode = 302;
    res.setHeader("Location", "https://macbethtimeline.github.io/");
    

});