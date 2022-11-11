var express = require("express");
var bodyParser = require("body-parser");

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST an user name. */
router.post("/", function (req, res, next) {
  var { firstName, lastName } = req.body;
  console.log("First Name :", firstName);
  console.log("Last Name :", lastName);
  res.send("POST received");
});

module.exports = router;
