/*
Navicat MySQL Data Transfer

Source Server         : waiBao测试服务器
Source Server Version : 50635
Source Host           : 59.110.18.65:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50635
File Encoding         : 65001

Date: 2019-04-22 10:24:40
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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carouser
-- ----------------------------

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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '525', '海尔BCD-WD525L', '2099.00', '1540355539312.png', '', '7', '<p>很好很好111</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/haiereshuiqi.mp4\" type=\"video/mp4\" /></video></p>', '<p>3</p>', null, '1', '1540187431100.png');
INSERT INTO `goods` VALUES ('3', '非常好的啊啊啊！！', '啊啊啊啊170', '1999.00', '1540187593837.png', '', '7', '<p>1111</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/shipin/haier/bx/%E6%B5%B7%E5%B0%94BCD-170WDPT.mp4\" type=\"video/mp4\" /></video></p>\n<p>就这样啊啊啊</p>', '<p>很好， 洗的干净</p>', null, '0', '1540187597855.png');
INSERT INTO `goods` VALUES ('4', '很好', '很好', '1111.00', '1540187800420.png', '', '8', '<p>可直接粘贴图片地址插入图片</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/14/BA/oYYBAFpTW96ARCwAAB94A8suyE4210.jpg\" alt=\"\" width=\"750\" height=\"4377\" /></p>\n<p><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/shipin/haier/bx/%E6%B5%B7%E5%B0%94BCD-170WDPT.mp4\" type=\"video/mp4\" /></video></p>\n<p>实打实</p>', '<p>撒大声地</p>', null, '1', '1540187804762.png');
INSERT INTO `goods` VALUES ('6', 'k', '洗衣机', '166.00', '1540187841436.png', '', '7', '<p>产品参数：650&nbsp; &nbsp;产品数据：220&nbsp; &nbsp;&nbsp;</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/shipin/haier/bx/%E6%B5%B7%E5%B0%94BCD-170WDPT.mp4\" type=\"video/mp4\" /></video></p>\n<p>&nbsp;</p>', '', null, '0', '1540191105654.jpg');
INSERT INTO `goods` VALUES ('9', '1001L', '海尔厨房BCD-1001L', '12.00', '1540188352018.png', '', '11', '<p>hhhhh</p>', '<p><img src=\"http://img.yilihuo.com/group1/M00/12/6B/oYYBAFmMJO2AWUp1AFOxoL_uP0M618.jpg\" alt=\"\" width=\"1080\" height=\"14059\" /></p>', '<p>henhao</p>', null, '1', '1540191091802.jpg');
INSERT INTO `goods` VALUES ('10', '1009L', '爱帝洛1009L', '2099.00', '1540190963073.jpg', '', '8', '<p>1111</p>', '<p>1111</p>', '<p>henhao</p>', null, '0', '1540190969276.jpg');
INSERT INTO `goods` VALUES ('12', 'B1011DPC', '滚筒100BCD-B1011DPC', '3099.00', '1540187823317.png', '', '7', '<p>2222</p>', '<p><video controls=\"controls\" width=\"300\" height=\"150\">\n<source src=\"http://pgbq6a7ih.bkt.clouddn.com/haiereshuiqi.mp4\" type=\"video/mp4\" /></video>00000</p>', '<p>4444</p>', null, '1', '1540187825981.png');
INSERT INTO `goods` VALUES ('13', 'eee', 'eeeeeee', '10000.00', '1540191129689.jpg', '', '8', '', '', '', null, '0', null);
INSERT INTO `goods` VALUES ('14', '1011', '海尔1011', '10011.00', '1540191206004.jpg', '', '15', '', '', '', null, '0', null);
INSERT INTO `goods` VALUES ('15', '22', '海尔2222', '222.00', '1540191262474.jpg', '', '8', '', '', '', null, '0', null);
INSERT INTO `goods` VALUES ('16', '10555', 'BCD-10555', '1000.00', '1540191291490.jpg', '', '8', '', '', '', null, '0', null);
INSERT INTO `goods` VALUES ('17', '999', '信息BB-999', '999.00', '1540191320795.jpg', '', '8', '', '', '', null, '0', null);
INSERT INTO `goods` VALUES ('18', 'B101', '海信L-B101', '999.00', '1540191358972.jpg', '', '14', '', '', '', null, '0', null);
INSERT INTO `goods` VALUES ('19', 'MB80-1100MH 波轮全自动洗衣机 智利灰 门盖高光红 钢化玻璃 　 220V,1Ph 50Hz 　', 'MB80-1100MH 波轮全自动洗衣机 智利灰 门盖高光红 钢化玻璃 　 220V,1Ph 50Hz 　', '2099.00', '1540192840801.jpg', '', '14', '', '', '', null, '0', 'null');
INSERT INTO `goods` VALUES ('20', '海尔家用空调KFR-50LW/23XCA33套机', '海尔家用空调KFR-50LW/23XCA33套机', '3022.00', '1540192866441.jpg', '', '8', '', '', '', null, '0', 'null');
INSERT INTO `goods` VALUES ('21', 'MB80-6200DQCG 波轮全自动洗衣机 摩卡金 门盖摩卡金 钢化玻璃 波轮式 220V,1Ph 50Hz RoHS', 'MB80-6200DQCG 波轮全自动洗衣机 摩卡金 门盖摩卡金 钢化玻璃 波轮式 220V,1Ph 50Hz RoHS', '3333.00', '1540192896895.png', '', '15', '', '<p><img src=\"http://filecmms.midea.com/CMDM_IMG/21038010003240/3/MB80-6200DQCG_01.jpg?x-oss-process=image/resize,w_1519,/auto-orient,1/quality,q_50/format,jpg\" alt=\"\" width=\"750\" height=\"1025\" /></p>', '', null, '0', 'null');
INSERT INTO `goods` VALUES ('22', 'KFR-51LW/BP2DN8Y-VA200(B1) 柜机套机 摩卡金 美的', 'KFR-51LW/BP2DN8Y-VA200(B1) 柜机套机 摩卡金 美的', '1099.00', '1544441922252.jpg', '', '19', '', '<p><img src=\"http://filecmms.midea.com/CMDM_IMG/31022210003786/3/2017-1226-M星威折页-01_02.jpg?x-oss-process=image/resize,w_1519,/auto-orient,1/quality,q_50/format,jpg\" alt=\"\" width=\"750\" height=\"1120\" /></p>', '', null, '0', '1544442188917.jpg');

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
INSERT INTO `navigation` VALUES ('4', '第一个', '第一个111', '1555042897700.jpg', '2', '1540190931196.jpg', '0', 'www.haier.com');
INSERT INTO `navigation` VALUES ('5', '第二个', '第二1个', '1555040526109.jpg', '2', '1540191390384.jpg', '0', 'null');
INSERT INTO `navigation` VALUES ('6', '4', '第四个', '1540191412115.jpg', '3', '', '0', 'https://new.qq.com/ch/finance/');
INSERT INTO `navigation` VALUES ('7', '4', '第四个', '1540192749531.jpg', '4', '1540192756524.jpg', '1', 'null');
INSERT INTO `navigation` VALUES ('19', '电视', '', '1540192739796.jpg', '5', '', '0', '');
INSERT INTO `navigation` VALUES ('20', '电视2', '', '1540192729036.jpg', '6', '', '0', '');
INSERT INTO `navigation` VALUES ('21', '电视3', '', '1540190944572.jpg', '7', '', '0', '');
INSERT INTO `navigation` VALUES ('22', '电视8', '', '1540192705435.jpg', '8', '', '0', '');
INSERT INTO `navigation` VALUES ('23', '电视9', '', '1540192715275.jpg', '9', '', '', '');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `department` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1000', 'admin@wz.com', '123456', 'admin@wz.com', null);

-- ----------------------------
-- Table structure for verification
-- ----------------------------
DROP TABLE IF EXISTS `verification`;
CREATE TABLE `verification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `switchs` varchar(10) DEFAULT '1' COMMENT '开个',
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT '说明',
  `weights` int(11) DEFAULT NULL COMMENT '权重排序用',
  `verificationCode` int(255) NOT NULL COMMENT '验证码',
  `beginDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `level` int(11) DEFAULT '1',
  `num` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `verificationCode` (`verificationCode`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of verification
-- ----------------------------
INSERT INTO `verification` VALUES ('33', '1', '启动页', '111', '0', '1232', '2019-04-09 00:00:00', null, '5', '8381');
INSERT INTO `verification` VALUES ('36', '0', '211', '23', '0', '123', '2019-04-10 00:00:00', null, '6', '9');
INSERT INTO `verification` VALUES ('37', '0', '123', '2323', '0', '321', '2019-04-18 16:00:00', null, '6', '0');
INSERT INTO `verification` VALUES ('40', '1', '123', '12313', '0', '123123123', '2019-04-11 00:00:00', null, '2', '0');
INSERT INTO `verification` VALUES ('41', '1', '123', '2323', '0', '321123', '2019-04-18 16:00:00', null, '3', '0');
INSERT INTO `verification` VALUES ('42', '1', '123456', '111', '0', '123456', '2019-04-09 08:00:00', null, '1', '82');
INSERT INTO `verification` VALUES ('53', '0', '1231', '12313', '0', '1231', '2019-04-08 16:00:00', null, '7', '11');
INSERT INTO `verification` VALUES ('62', '1', '121313', '12313', '0', '123131', '2019-04-12 00:00:00', null, '1', '0');
INSERT INTO `verification` VALUES ('74', '0', '12313', '', '0', '123135', '2019-04-19 00:00:00', null, '1', '0');
