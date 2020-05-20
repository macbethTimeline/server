const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();


app.use(express.static('public'));
app.use(cors());
app.listen(process.env.PORT || 8080, () => console.log("Port used: "));

app.get('/', function(req, res) { // GET REQUEST
    let rdata = fs.readFileSync('./timeline.json');
    let data = JSON.parse(rdata);
    res.send(data);

});

app.post('/', function(req,res) {
    console.log(req.body);
    let thing = JSON.parse(req.body)
    const newEvent = {
        "scene": thing.scene,
        "act": thing.act,
        "title": thing.title,
        "quote": thing.quote,
        "desc": thing.desc,
        "by": thing.by,
        "themes": JSON.parse(req.stuff.themes),
    }
    console.log("EVENT");
    // console.log(newEvent);
    // let rdata = fs.readFileSync('./timeline.json');
    // let data = JSON.parse(rdata);
    // data.push(newEvent);


    // fs.writeFileSync('timeline.json', JSON.stringify(data));

    // res.send(JSON.stringify(data));
});