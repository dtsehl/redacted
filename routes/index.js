// import replacer from '../substitute'

const express = require('express');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Redacted',
  });
});

router.post('/', urlencodedParser, (req, res) => {
  // replacer(req);
// }, function(req)
  // return res.redirect('/results')
});

module.exports = router;
