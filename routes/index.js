var express = require('express');
var router = express.Router();
var queries = require('../queries/queries')
var knex = require('knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//TODO extract method
router.get('/api/', (req, res) => {
  knex('classes').then((data) => {
    res.json(data)
  })
})

module.exports = router;
