const express = require('express');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Redacted'
  });
});

module.exports = router;

