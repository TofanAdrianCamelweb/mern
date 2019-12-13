const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const Routes = express.Router();

var app  = express();
var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(jsonParser);


app.post('/post',jsonParser,function (req,res) {
    console.log(req.body);
    res.send(req.body);

});

app.get('/get', function(req, res) {

   res.send(req.param('test'))
});


app.listen(PORT, () => console.log(`serverul ruleaza pe portul ${PORT}`));

