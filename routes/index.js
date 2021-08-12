var express = require('express')
var router = express.Router()
let Handlebars = require('hbs')

// creating a context object for the view
let context = {
  people: [
    { firstName: 'Yehuda', lastName: 'Katz' },
    { firstName: 'Carl', lastName: 'Lerche' },
    { firstName: 'Alan', lastName: 'Johnson' }
  ],
  title: 'HandleBars view engine project demo and custom helpers project',
  condition: false,
  object: {
    objectItem1: 'value item1',
    onjectItem2: 'value item2 '
  },
  anyArray: [1, 2, 3],
  user: 'Majid Nisar'
}

// customer helper using handle bars
Handlebars.registerHelper('list', function (items, options) {
  var out = '<ul>';

  for (var i = 0, l = items.length; i < l; i++) {
    out = out + '<li>' + options.fn(items[i]) + '</li>';
  }

  return out + '</ul>';
})
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', context)
})

module.exports = router
