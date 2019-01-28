/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : yangyang

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-11-24 15:08:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `form`
-- ----------------------------
DROP TABLE IF EXISTS `form`;
CREATE TABLE `form` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `data` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of form
-- ----------------------------
INSERT INTO `form` VALUES ('1', '11111111111', '7fa8282ad93047a4d6fe6111c93b308a', '2018-11-21 20:08:34');
INSERT INTO `form` VALUES ('2', '2323243', 'c58af20903f165a77e465fd111333f6a', '2018-11-21 20:12:49');
INSERT INTO `form` VALUES ('3', '13707604723', '06d18a8fca684584cbe0c3cc5a6d5087', '2018-11-22 09:55:28');
INSERT INTO `form` VALUES ('4', '13007604723', 'e3d0407767c4a434b389b91eb78f2fc0', '2018-11-22 09:56:34');
INSERT INTO `form` VALUES ('5', '13007604723', '06d18a8fca684584cbe0c3cc5a6d5087', '2018-11-22 10:23:13');
INSERT INTO `form` VALUES ('6', '13007604723', 'b3b3d8e957cd21db04d3de8724e12bd5', '2018-11-22 10:38:32');
INSERT INTO `form` VALUES ('7', '13007604723', 'b44d227572c8f58c07ed92b911972e20', '2018-11-22 10:41:29');
INSERT INTO `form` VALUES ('8', '13007604723', 'da80990894fcdc922faf1b2dfd9481ee', '2018-11-22 10:46:38');
INSERT INTO `form` VALUES ('9', '13007604723', '1c026c1da1de34940f09fa4121f94d18', '2018-11-22 22:00:35');
INSERT INTO `form` VALUES ('10', '13007604723', '06d18a8fca684584cbe0c3cc5a6d5087', '2018-11-22 22:30:33');
