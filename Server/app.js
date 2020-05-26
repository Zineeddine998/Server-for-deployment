
//Simple server to test the fonctionalities in the main app
const express = require('express'),
  bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = process.env.PORT || 3000;
app.set('port', port);

app.post('/registration', (req, res, next) => {
  let each;
  for(each in req.body) {
    if(!req.body[each] && each !== 'comment') {
      res.status(400).json({});
      return next();
    }
  }
  setTimeout(() => {
    res.status(200).json({message: `${req.body.username} is Registered Successfully`});
  }, 3000);
});


app.get('/statistics', (req, res, next) => {
  setTimeout(() => {
    res.status(200).json({experience: [
        40,
        25,
        32,
        25,
      ],
      profession: [
        30,
        40,

        20,
        10,
      ],
      age: [
        30,
        60,
        10,
        30,
      ],
    });
  }, 1000);
});

const http = require('http').Server(app);
http.listen(app.get('port'), function() {
  console.log(`Express Server Listening on port ${app.get('port')}.`);
});