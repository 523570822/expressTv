var db = require('../db/config');
var express = require('express');
var tree=require('../utils/treeUtil');
var router = express.Router();
var $sql = require('../db/sqlMap');
router.post('/getCategoryAll', (req, res) => {
  db.selectAll($sql.category.all, function(err, result) {
    if (err) {
      console.log(err);
    }
    db.jsonWrite(res, result);
  });
  console.log("到了");
});
router.post('/getCategoryGroup', (req, res) => {
  db.selectAll($sql.category.all, function(err, result) {
    if (err) {
      console.log(err);
    }
      let date;
      let attributes = {
          id: 'id',
          parentId: 'parent_id',
      };
      date=tree.toTreeData(result,attributes);
    db.jsonWrite(res, date);
  });
  console.log("到了");
});
//查询主分类
router.post('/getCategoryParent', (req, res) => {
  db.selectAll($sql.category.getCategoryParent, function(err, result) {
    if (err) {
      console.log(err);
    }
    //console.info(result);

    db.jsonWrite(res, result);
  });
  console.log("到了");
});
//根据父类查询子类

router.post('/getCategoryById', (req, res) => {
    console.info("req");

  let data = req.body;
  let url = "";

  console.info(data);
  db.query($sql.category.getCategoryById, [data.id], function(err, result) {
    if (err) {
      console.log(err);
    }
    //console.info(result);

    db.jsonWrite(res, result);
  });
  console.log("到了");
});
router.get('/getCategoryByWeights', (req, res) => {
    console.info("dddd");

    let data = req.query;
    let url = "";

    console.info(data);
    db.query($sql.category.getCategoryByWeights, [data.id], function(err, result) {
        if (err) {
            console.log(err);
        }
        //console.info(result);

        db.jsonWrite(res, result);
    });
    console.log("到了");
});
router.post('/deleteCategory', (req, res) => {
  let id = req.body.id;
  console.info("deleteCategory");

  let where = {
    id: id
  }
  db.deleteData('category', where, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});
router.post('/addCategory', (req, res) => {
  let formItem = req.body.formItem;
  delete formItem['id'];
  console.info("addCategory");
  db.insertData('category', formItem, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});

router.post('/updateCategory', (req, res) => {
  let formItem = req.body.formItem;
  console.info("updateCategory");
  let where = {
    id: formItem.id
  }
  db.updateData('category', formItem, where, function(err, result) {
    if(err) {
      console.log(err);
    }
    db.jsonWrite(res, result)
  });
});
module.exports = router;
