var db = require('../db/config');
var express = require('express');
var router = express.Router();
var $sql = require('../db/sqlMap');
router.post('/getImageAll', (req, res) => {
  db.selectAll($sql.image.getImageAll, function(err, result) {
    if (err) {
      console.log(err);
    }
    //console.info(result);

    db.jsonWrite(res, result);
  });
  console.log("到了");
});

router.post('/addNavigation', (req, res) => {
  let formItem = req.body.formItem;
  delete formItem['id'];
  console.info("addNavigation");
  db.insertData('navigation', formItem, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});
router.post('/addImage', (req, res) => {
    let formItem = req.body.formItem;
    delete formItem['id'];
    console.info("image");
    db.insertData('image', formItem, function(err, result) {
        if(err) {
            console.log(err);
        }
        db.jsonWrite(res, result)
    });
});
router.post('/updateNavigation', (req, res) => {
  let formItem = req.body.formItem;
  console.info("updateNavigation");
  let where = {
    id: formItem.id
  }
  db.updateData('navigation', formItem, where, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});
module.exports = router;
