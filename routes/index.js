var express = require("express");
var router = express.Router();
let Handlebars = require("hbs");

// customer helper using handle bars
Handlebars.registerHelper("list", function(items, options) {
  var out = "<ul>";

  for (var i = 0, l = items.length; i < l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    people: [
      { firstName: "Yehuda", lastName: "Katz" },
      { firstName: "Carl", lastName: "Lerche" },
      { firstName: "Alan", lastName: "Johnson" }
    ],
    title: "Index Page",
    condition: false,
    object: {
      objectItem1: "value item1",
      onjectItem2: "value item2 "
    },
    anyArray: [1, 2, 3],
    user: "Majid Nisar"
  });
});

module.exports = router;
