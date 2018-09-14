var db = require('../db/config');
var express = require('express');
var router = express.Router();
var $sql = require('../db/sqlMap');
router.post('/getGoods', (req, res) => {
  db.selectAll($sql.goods.all, function(err, result) {
    if (err) {
      console.log(err);
    }
    //console.info(result);

    db.jsonWrite(res, result);
  });
  console.log("到了");
});

router.post('/addGoods', (req, res) => {
  let formItem = req.body.formItem;
  delete formItem['id'];
  console.info("addGoods");
  db.insertData('goods', formItem, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});

router.post('/updateGoods', (req, res) => {
  let formItem = req.body.formItem;
  console.info("updateGoods");
  let where = {
    id: formItem.id
  }
  db.updateData('goods', formItem, where, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});
router.post('/updateGoods', (req, res) => {

  let formItem = req.body.formItem;
  console.info("updateGoods");
  let where = {
    id: formItem.id
  }
  db.updateData('goods', formItem, where, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});
router.post('/deleteGoods', (req, res) => {
    let id = req.body.id;
    console.info("deleteCategory");

    let where = {
        id: id
    }
    db.deleteData('goods', where, function(err, result) {
        if(err) {
            console.log(err);
        }
        db.jsonWrite(res, result)
    });
});
router.post('/getGoodsById', (req, res) => {
    // console.info(res);
    let data = req.body;
    let url = "";

    console.info(data);
    db.query($sql.goods.getGoodsById, [data.id], function(err, result) {
        if (err) {
            console.log(err);
        }
        //console.info(result);

        db.jsonWrite(res, result);
    });
    console.log("到了");
});
module.exports = router;
