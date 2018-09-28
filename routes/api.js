var db = require('../db/db');
var express = require('express');
var router = express.Router();
//var mysql = require('mysql');
var $sql = require('../db/sqlMap');
var multer = require('multer');
var conn = db.conn;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
});

var upload = multer({ storage: storage });

// 连接数据库
//var conn = mysql.createConnection(models.mysql);

// 增加用户接口
router.get('/getUser', (req, res) => {
  var sql = $sql.user.all;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      db.jsonWrite(res, result);
    }
  });
});
router.get('/', (req, res) => {
  var sql = $sql.user.all;
  conn.query(sql, ['1'], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      db.jsonWrite(res, result);
    }
  });
});
router.post('/uploadFile', upload.array('logo', 2), (req, res) => {
  // console.log("dddd");
  // console.log(req.files[0]); // 上传的文件信息

  let response22 = {
    message: 'File uploaded successfully',
    filename: req.files[0].filename,
    path: req.files[0].path
  };
  let data={
    url:response22.filename
  }
    db.insertData('image',data,function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.end(JSON.stringify(response22));
        }
    });

});
module.exports = router;
