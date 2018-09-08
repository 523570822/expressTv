var db = require('../db/db');
var express = require('express');
var router = express.Router();
var $sql = require('../db/sqlMap');
router.post('/getNavigation', (req, res) => {
  db.selectAll($sql.navigation.all, function(err, result) {
    if (err) {
      console.log(err);
    }
    //console.info(result);

    db.jsonWrite(res, result);
  });
  console.log("到了");
});
module.exports = router;
