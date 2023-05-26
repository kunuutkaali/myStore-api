var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Test url */
router.get('/test', (req, res, next)=>{
  res.send('API Online')
})
module.exports = router;
