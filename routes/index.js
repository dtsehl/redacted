const express = require('express');
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Redacted',
  });
});

router.post('/', urlencodedParser, function (req, res) {
  console.log('this is the body: ', + req.body)
});

module.exports = router;
