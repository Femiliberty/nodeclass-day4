const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', { name: 'Hamster', food: 'nuts' });
});

app.post('/class-logIn', function(req, res) {
    const data = req.body;
    console.log(req.body)
    res.json({
        data: data
    });
});

app.get('/teams/:name/:age/:players', function(req, res) {
    res.json({
        name: req.params
    });
})

app.get('/search', function(req, res) {
    res.json({
        name: req.query
    })
});

app.get ('*', function (req, res){
    res.render('error', {message: 'Try Something Else'});
})


app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server is now running on PORT ${port}`);
});