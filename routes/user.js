var db = require('../db/config');
var express = require('express');
var router = express.Router();
var $sql = require('../db/sqlMap');
var jsonWrite = function(res, ret) {
  if(typeof ret == 'undefined') {
     console.info("ccccccccccccc");
     // console.info(res);
      let code=0;
    res.json({
      code: 'code',
      msg: '操作失败'
    });
  } else {



    /*   ret.push({
      code: '1',
      msg: '操作成功',
    })*/
    res.json(ret);
  }
};
var jsonWrite1 = function(res, ret,errno) {
    if(typeof ret == 'undefined') {
         console.info("ddddddddddddddddd");
         console.info(errno);
        let code=0;
        res.json({
            code: code,
            errno:errno,
            msg: '操作失败'
        });
    } else {
        /*   ret.push({
          code: '1',
          msg: '操作成功',
        })*/
        res.json(ret);
    }
};
// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.get('/getUser', (req, res) => {
  // console.info("到了")
  var sql = $sql.user.all;

  //console.log("到了");
/*  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })*/
});

router.get('/', (req, res) => {
  console.info("访问到了、");
});

router.post('/getCarouserAll', (req, res) => {
  console.info("getCarouserAll")
  // var sql = $sql.user.getUserByid;
  db.selectAll($sql.user.getCarouserAll, function(err, result) {
    if (err) {
      console.log(err);
    }
    //console.info(result);
    if (result) {
        jsonWrite1(res, result);
    }
  });
});


router.get('/info', (req, res) => {
  console.info("到了1")
  // var sql = $sql.user.getUserByid;

  console.log("到了");
  res.json(userMap.admin);
  //jsonWrite(res, userMap.admin)
/*  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })*/
});
router.post('/addCarousel', (req, res) => {
  let formItem = req.body.formItem;
  delete formItem['id'];
  console.info("addCarousel");
  db.insertData('carouser', formItem, function(err, result) {
    if(err) {
      console.log(err);
    }
    jsonWrite(res, result)
  });
});
router.post('/getVericationAll', (req, res) => {
    console.info("getVericationAll")
    // var sql = $sql.user.getUserByid;
    db.selectAll($sql.user.getVericationAll, function(err, result) {
        if (err) {
            console.log(err);
        }
        //console.info(result);
        if (result) {
            jsonWrite(res, result);
        }
    });
});
router.post('/addVerication', (req, res) => {
    let data = req.body.formItem;
    let formItem = req.body.formItem.formItem;
    delete formItem['id'];
    formItem['beginDate']=data.create;
    console.info(data);
    console.info(req.body.formItem.formItem);

    db.insertData('verification', formItem, function(err, result) {
        if(err) {
            console.log(err);
            jsonWrite1(res, result,err.errno);
        }else{
            jsonWrite1(res, result,0);
        }

    });
});
router.post('/updateVerication', (req, res) => {
    let data = req.body.formItem;
    let formItem = req.body.formItem.formItem;
    formItem['beginDate']=data.create;
    console.info("updateVerication");
    let where = {
        id: formItem.id
    }
    db.updateData('verification', formItem, where, function(err, result) {
        if(err) {
            console.log(err);
            jsonWrite1(res, result,err.errno);
        }else{
            jsonWrite1(res, result,0);
        }

    });
});
router.post('/updateVerication', (req, res) => {
    let data = req.body.formItem;
    let formItem = req.body.formItem.formItem;
    formItem['beginDate']=data.create;
    console.info("updateVerication");
    let where = {
        id: formItem.id
    }
    db.updateData('verification', formItem, where, function(err, result) {
        if(err) {
            console.log(err);
        }
        jsonWrite(res, result)
    });
});
router.post('/getVericationBylevel', (req, res) => {
    console.info("getVericationBylevel");

    let data = req.body;
    let url = "";

    console.info(data);
    db.query($sql.user.getVericationByLevel, [data.level], function(err, result) {
        if (err) {
            console.log(err);
        }
        //console.info(result);

        db.jsonWrite(res, result);
    });
    console.log("到了");
});
router.get('/getVericationByCode', (req, res) => {
    console.info("getVericationByCode");
    let data = req.query;

    let url = "";

   //      console.info(req);
    db.query($sql.user.getVericationByCode, [data.code], function(err, result) {
        if (err) {
            console.log(err);
        }
        let where = {
            verificationCode:data.code
        }

        var num=1;

        result = JSON.stringify(result);//把results对象转为字符串，去掉RowDataPacket
     //   console.log(result);//'[{"count":"1","type":"RangeError"},{"count":"3","type":"ReferenceError"}]'
        result = JSON.parse(result);//把results字符串转为json对象
      //  console.info(result[0].num);

        if(result[0].num==null){

        }else{
            num=result[0].num+1;
        }
        let formItem = {
            num:num
        }
      db.updateData('verification', formItem, where, function(err, result1) {
            if(err) {
                console.log(err);
            }
            jsonWrite(res, result)
        });


    });
    console.log("到了");
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
    jsonWrite(res, result)
  });
});
router.post('/updateCarousel', (req, res) => {
  let formItem = req.body.formItem;
  console.info("updateCarousel");
  let where = {
    id: formItem.id
  }
  db.updateData('carouser', formItem, where, function(err, result) {
    if(err) {
      console.log(err);
    }
    jsonWrite(res, result)
  });
});

router.post('/deleteCarouser', (req, res) => {
  let id = req.body.id;
  console.info("deleteCarouser");

  let where = {
    id: id
  }
  db.deleteData('carouser', where, function(err, result) {
    if(err) {
      console.log(err);
    }
    jsonWrite(res, result)
  });
});
router.post('/deleteNavigation', (req, res) => {
  let id = req.body.id;
  console.info("deleteNavigation");

  let where = {
    id: id
  }
  db.deleteData('navigation', where, function(err, result) {
    if(err) {
      console.log(err);
    }
    jsonWrite(res, result)
  });
});

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'Super Admin',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    name: 'Normal Editor',
    uid: '002'

  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    name: '工程师小王',
    uid: '003'
  },
  dataCarouser: [
    {
      id: 1,
      switch: '0',
      name: '轮播图1',
      url: '../static/img/1535254224057.png',
      description: '北京市朝阳区芍药居',
      weights: 1

    },
    {
      id: 2,
      switch: '1',
      name: '轮播图2',
      url: '../static/img/1535254224057.png',
      description: '北京市海淀区西二旗',
      weights: 2

    },
    {
      id: 3,
      switch: '0',
      name: '轮播图3',
      url: '../static/img/1535254224057.png',
      description: '上海市浦东新区世纪大道',
      weights: 3
    },
    {
      id: 4,
      switch: '1',
      name: '轮播图4',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    }
  ],
  dataNavigation: [
    {
      id: 1,
      switch: 0,
      name: '首页1位置',
      url: '../static/img/1535254224057.png',
      description: '北京市朝阳区芍药居',
      weights: 1

    },
    {
      id: 2,
      switch: 1,
      name: '首页2位置',
      url: '../static/img/1535254224057.png',
      description: '北京市海淀区西二旗',
      weights: 2

    },
    {
      id: 3,
      switch: '0',
      name: '首页3位置',
      url: '../static/img/1535254224057.png',
      description: '上海市浦东新区世纪大道',
      weights: 3
    },
    {
      id: 4,
      switch: '1',
      name: '首页4位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 5,
      switch: '0',
      name: '首页5位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 6,
      switch: '1',
      name: '首页6位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 7,
      switch: 1,
      name: '首页7位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 8,
      switch: 1,
      name: '首页8位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 9,
      switch: 1,
      name: '启动页图片',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    }
  ]
}
module.exports = router;
