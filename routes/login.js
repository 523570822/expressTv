var db = require('../db/config');
var conn = db.conn;
var express = require('express');
var router = express.Router();
var $sql = require('../db/sqlMap');
var multer = require('multer');
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};
var admin = {
  role: [''],
  token: '',
  introduction: '',
  name: '',
  id: ''
}
// 增加用户接口
router.post('/loginbyemail', (req, res) => {
    let data = req.body;
    //console.info(data);
    db.query($sql.user.loginbyemail, [data.email,data.password], function(err, result) {
        if (err) {
            console.log(err);
        }
      if(result.length>0){
          admin = {
              role: ['admin'],
              token: 'admin',
              introduction: '我是超级管理员123',
              name: 'data.email',
              id: '1'
          }
          jsonWrite(res, admin);
      }else{
          var admin = {
              role: [''],
              token: '',
              introduction: '',
              name: '',
              id: ''
          }
          jsonWrite(res, admin);
      }
    });




  //jsonWrite(res, admin);

});
router.get('/loginbyemail', (req, res) => {
  jsonWrite(res, admin);
});

router.post('/logout', (req, res) => {
  jsonWrite(res);
});
module.exports = router;
