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
  replacer(req);
});

function replacer(input) {
  let output = input.body.name
  let splitInput = input.body.words.match(/\w+|"[^"]+"/g);
  splitInput.forEach((x, y) => {
    splitInput[y] = x.split('"').join('')
  })
  console.log(splitInput)
  splitInput.forEach(x => {
    output = output.split(x).join('XXXX')
  })
  console.log(output)
}

module.exports = router;