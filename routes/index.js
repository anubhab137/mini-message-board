const messages = [
  {
    text: "Why do you only call me when you're high",
    user: "Arabella",
    added: new Date()
  },
  {
    text: "Because you sound kinda boring when I'm sober",
    user: "Alex",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();
var url= require('url');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});



router.post('/new',(req,res,next)=>{
  
  messages.push({text: req.body.Message, user: req.body.Name, 'added': new Date()});
  console.log(req.baseUrl);
  console.log(req.path);
  res.redirect('/');
});

module.exports = router;
