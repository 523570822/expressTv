// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)',
    all: 'select * from user',
    getUserByid: 'select * from user where id=1 ',
    getCarouserAll: 'select * from carouser ',
    getNavigationAll: 'select * from navigation '
  },
  navigation: {

    all: 'select * from navigation'

  },
  category: {

    all: 'select * from category'

  }

};

module.exports = sqlMap;
