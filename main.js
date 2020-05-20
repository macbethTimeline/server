const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();


app.use(express.static('public'));
app.use(cors({
    origin: '*'
  }));
app.listen(process.env.PORT || 8080, () => console.log("Port used: "));

app.get('/', function(req, res) { // GET REQUEST
    let rdata = fs.readFileSync('./timeline.json');
    let data = JSON.parse(rdata);
    res.send(data);

});

app.post('/', function(req,res) {
    const newEvent = {
        "scene": req.query.scene,
        "act": req.query.act,
        "title": req.query.title,
        "quote": req.query.quote,
        "desc": req.query.desc,
        "by": req.query.by,
        "themes": JSON.parse(req.query.themes),
    }
    console.log(newEvent)
    let rdata = fs.readFileSync('./timeline.json');
    let data = JSON.parse(rdata);
    data.push(newEvent);


    fs.writeFileSync('timeline.json', JSON.stringify(data));

    res.send(JSON.stringify(data));
});