// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)',
    all: 'select * from user',
    getUserByid: 'select * from user where id=1 ',
      loginbyemail:'select * from user where name=? and password=?',
    getCarouserAll: 'select * from carouser order by id',
    getNavigationAll: 'select * from navigation '
  },
  navigation: {

    all: 'select * from navigation'

  },
  category: {

    all: 'select * from category',
    getCategoryParent: "select * from category c where c.parent_id='0' ",
    getCategoryById: "select * from category c where c.parent_id=? ",
      getCategoryByWeights: "select * from category c where c.parent_id in(select id from category where weights=?)",
  },
  goods: {
      getGoodsById: "select * from goods c where c.id=? ",
      getGoodsByCategoryId: "select g.*,c.`name` as cname from goods g LEFT JOIN category c on g.category_id=c.id where g.category_id=? ",
      getGoodsByKeyword: "SELECT * FROM goods WHERE keyword= UPPER(?) ",
    all: 'select g.*,c.`name` as cname from goods g LEFT JOIN category c on g.category_id=c.id',
  },
  image:{
      getImageAll:"select * from image order by id"
  }

};

module.exports = sqlMap;
