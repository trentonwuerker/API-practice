var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hi', (req, res) => {
  res.render('layout', { title: 'Not Express' })
})

module.exports = router;
