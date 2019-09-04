/*
Navicat MySQL Data Transfer

Source Server         : jingxi_mall
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : todolist

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2019-09-05 02:00:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `modle`
-- ----------------------------
DROP TABLE IF EXISTS `modle`;
CREATE TABLE `modle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(255) DEFAULT NULL,
  `statevalue` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of modle
-- ----------------------------
INSERT INTO `modle` VALUES ('1', '111', 'true');
INSERT INTO `modle` VALUES ('2', '222', 'false');
INSERT INTO `modle` VALUES ('3', '333', 'true');
INSERT INTO `modle` VALUES ('4', '444', 'true');
