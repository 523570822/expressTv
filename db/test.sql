/*
Navicat MySQL Data Transfer

Source Server         : waiBao测试服务器
Source Server Version : 50635
Source Host           : 59.110.18.65:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50635
File Encoding         : 65001

Date: 2018-10-22 11:50:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carouser
-- ----------------------------
DROP TABLE IF EXISTS `carouser`;
CREATE TABLE `carouser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `switch` varchar(10) DEFAULT '1' COMMENT '开个',
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT '说明',
  `weights` int(11) DEFAULT NULL COMMENT '权重排序用',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carouser
-- ----------------------------
INSERT INTO `carouser` VALUES ('33', '0', '启动页', '1539928263542.png', '', '0');
INSERT INTO `carouser` VALUES ('34', '0', '1111', '1539951355401.png', '', '0');
INSERT INTO `carouser` VALUES ('35', '0', '111', '1539951405742.png', '111', '0');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  `weights` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `tree_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '洗衣机', 'null', '4', '0', 'null');
INSERT INTO `category` VALUES ('2', '冰箱', '0', '5', '0', 'null');
INSERT INTO `category` VALUES ('3', '电视机', 'null', 'null', '10', 'null');
INSERT INTO `category` VALUES ('4', '热水器', 'null', '6', '0', 'null');
INSERT INTO `category` VALUES ('7', '滚筒', 'null', 'null', '10', 'null');
INSERT INTO `category` VALUES ('8', '普通', 'null', '5', '1', 'null');
INSERT INTO `category` VALUES ('9', '液晶55寸电视', null, null, '3', null);
INSERT INTO `category` VALUES ('10', '海尔产品', 'null', '7', '0', 'null');
INSERT INTO `category` VALUES ('11', '海尔洗衣机', null, null, '10', null);
INSERT INTO `category` VALUES ('14', '半自动', null, null, '1', null);
INSERT INTO `category` VALUES ('15', '全自动', null, null, '1', null);
INSERT INTO `category` VALUES ('16', '商用洗衣机', null, null, '1', null);
INSERT INTO `category` VALUES ('17', '干洗机', null, null, '1', null);
INSERT INTO `category` VALUES ('19', '空调', null, null, '1', null);
INSERT INTO `category` VALUES ('20', '风冷冰箱', null, null, '1', null);
INSERT INTO `category` VALUES ('21', '制冷冰箱', null, null, '1', null);
INSERT INTO `category` VALUES ('22', '太阳能', null, null, '1', null);
INSERT INTO `category` VALUES ('23', '热水器', 'null', 'null', '10', 'null');
INSERT INTO `category` VALUES ('25', '厨房家电', 'null', '8', '0', 'null');
INSERT INTO `category` VALUES ('26', '厨房1', null, null, '25', null);

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyword` varchar(255) DEFAULT NULL COMMENT '搜索关键词',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '名称',
  `price` decimal(21,2) NOT NULL COMMENT '价格',
  `product_images` longtext COMMENT '商品图片',
  `product_video` longtext,
  `category_id` int(255) DEFAULT NULL COMMENT '商品类别',
  `parameter` longtext COMMENT '产品参数',
  `details` longtext COMMENT '产品详情',
  `characteristic` longtext COMMENT '产品特性',
  `url` varchar(255) DEFAULT NULL,
  `weights` int(11) DEFAULT '0' COMMENT '权重影响显示顺序',
  `qrcode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '525', '海尔BCD-WD525L', '2099.00', '1539952001909.png', '', '7', '<p>11111111111000</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/haiereshuiqi.mp4\" type=\"video/mp4\" /></video></p>', '<p>3</p>', null, '1', '1540105387894.png');
INSERT INTO `goods` VALUES ('3', '非常好的啊啊啊！！', '啊啊啊啊170', '1999.00', '1539952135671.png', '', '7', '<p>1111</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/shipin/haier/bx/%E6%B5%B7%E5%B0%94BCD-170WDPT.mp4\" type=\"video/mp4\" /></video></p>\n<p>就这样啊啊啊</p>', '<p>很好， 洗的干净</p>', null, '0', '1540179393392.png');
INSERT INTO `goods` VALUES ('4', '很好', '很好', '1111.00', '1539952165777.png', '', '8', '<p>可直接粘贴图片地址插入图片</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/14/BA/oYYBAFpTW96ARCwAAB94A8suyE4210.jpg\" alt=\"\" width=\"750\" height=\"4377\" /></p>\n<p><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/shipin/haier/bx/%E6%B5%B7%E5%B0%94BCD-170WDPT.mp4\" type=\"video/mp4\" /></video></p>\n<p>实打实</p>', '<p>撒大声地</p>', null, '1', '');
INSERT INTO `goods` VALUES ('6', 'k', '洗衣机', '166.00', '1539952198323.png', '', '7', '<p>产品参数：650&nbsp; &nbsp;产品数据：220&nbsp; &nbsp;&nbsp;</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/shipin/haier/bx/%E6%B5%B7%E5%B0%94BCD-170WDPT.mp4\" type=\"video/mp4\" /></video></p>\n<p>&nbsp;</p>', '', null, '0', '');
INSERT INTO `goods` VALUES ('9', '1001L', '海尔厨房BCD-1001L', '12.00', '1540005370514.png', '', '11', '<p>1</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /></p>', '<p>1</p>', null, '1', '');
INSERT INTO `goods` VALUES ('10', '1009L', '爱帝洛1009L', '2099.00', '1540086575273.png', '', '8', '', '<p><img src=\"http://img.yilihuo.com/group1/M00/14/BA/oYYBAFpTW96ARCwAAB94A8suyE4210.jpg\" alt=\"\" width=\"750\" height=\"4377\" /></p>', '<p>1000</p>', null, null, '');
INSERT INTO `goods` VALUES ('12', 'B1011DPC', '滚筒100BCD-B1011DPC', '3099.00', '1540104297662.png', '', '7', '<p>2222</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/haiereshuiqi.mp4\" type=\"video/mp4\" /></video></p>', '<p>4444</p>', null, '1', '');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT '说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES ('10', '1539828509958.png', '22', '333');

-- ----------------------------
-- Table structure for navigation
-- ----------------------------
DROP TABLE IF EXISTS `navigation`;
CREATE TABLE `navigation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `weights` int(11) DEFAULT NULL,
  `urlx` varchar(255) DEFAULT NULL,
  `switchsb` varchar(10) DEFAULT '1' COMMENT '开个',
  `goot_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of navigation
-- ----------------------------
INSERT INTO `navigation` VALUES ('4', '第一个', '第一个', '1540082221778.png', '1', '1540124944487.jpg', '0', 'null');
INSERT INTO `navigation` VALUES ('5', '第二个', '第二个', '1540093813600.jpg', '2', '1540124955072.jpg', '0', 'null');
INSERT INTO `navigation` VALUES ('6', '4', '第四个', '1539953924506.png', '3', '', '1', 'https://new.qq.com/ch/finance/');
INSERT INTO `navigation` VALUES ('7', '4', '第四个', '1539953768843.png', '4', '', '0', 'null');
INSERT INTO `navigation` VALUES ('19', '电视', '', '1539951492313.png', '5', '', '', '');
INSERT INTO `navigation` VALUES ('20', '电视2', '', '1539951516846.png', '6', '', '', '');
INSERT INTO `navigation` VALUES ('21', '电视3', '', '1539951538105.png', '7', '', '', '');
INSERT INTO `navigation` VALUES ('22', '电视8', '', '1539951552479.jpg', '8', '', '', '');
INSERT INTO `navigation` VALUES ('23', '电视9', '', '1540107683289.jpg', '9', '', '', '');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `introduction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'Super Admin', '3', '[\'admin\']', 'admin', '???????123');
