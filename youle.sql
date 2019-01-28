/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : yangyang

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-11-24 15:11:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `youle`
-- ----------------------------
DROP TABLE IF EXISTS `youle`;
CREATE TABLE `youle` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(150) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` float(3,1) unsigned zerofill NOT NULL,
  `store` varchar(100) NOT NULL,
  `place` varchar(50) NOT NULL,
  `urls` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of youle
-- ----------------------------
INSERT INTO `youle` VALUES ('1', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg', '【赣州邮政官方自营】老俵情 正宗赣南脐橙10斤70-80# 安远甜橙子现摘现发包邮 预售11月发货', '58.0', '赣南农品馆', '江西', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('2', 'http://pic1.ulecdn.com/pic/user_800132535/product/prd20180829/44c78b4e6afa7b69_p800x800.jpg', '2500g洞口雪峰蜜桔(一县一品)【不可用券】【促销活动】', '28.6', '洞口馆专柜', '湖南省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('3', 'http://pic4.ulecdn.com/pic/user_800134232/product/prd20181012/8ff42c9a30def515_p778x534.png', '王庄花生1斤装仅限蚌埠地区配送', '10.0', '六铺老街农产品专柜', '安徽省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('4', 'http://pic2.ulecdn.com/pic/user_800117153/product/prd20181027/1618062ae08b8df8_p800x800.jpg', '牡丹江【宁安馆】东北特产镜泊扶贫大米5公斤包邮，偏远地区除外', '40.1', '邮乐农品宁安馆', '黑龙江省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('5', 'http://pic2.ulecdn.com/pic/user_800139635/product/prd20181023/540fdbe9deb43424_p450x450.jpg', '【监利馆】老江河原生态有机虾稻米5斤装', '31.8', '金香郁专营店', '湖北省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('6', 'http://pic3.ulecdn.com/pic/user_800130944/product/prd20170918/0e4ed682d5a83aeb_p640x640.jpg', '【临沂邮政扶贫】蒙阴县旧寨镇北峪村吴大爷核桃 750g 包邮 爱心核桃 ！来自蒙山深处的渴望！', '19.9', '蒙阴乡情旗舰店专柜', '山东省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('7', 'http://pic4.ulecdn.com/pic/user_800118337/product/prd20181031/d84ceba605beeb35_p531x459.png', '邮 政 大泓香禾大米5kg全国包邮（新疆青海西藏除外）', '40.5', '绥化特色地产馆专柜', '黑龙江省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('8', 'http://pic4.ulecdn.com/pic/user_800118337/product/prd20181031/d84ceba605beeb35_p531x459.png', '新疆若羌源产地灰枣 买三赠一', '20.9', '含山邮乐馆专柜', '安徽省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('9', 'http://pic2.ulecdn.com/pic/user_800109903/product/prd20181029/b3ece5f47778e510_p800x800.jpg', '【邮政助农 香菇精准扶贫】金寨县铁冲乡有机花菇 政府产业扶贫项目 70g*2  全国包邮 领劵9.9', '19.9', '六安金寨专柜', '安徽省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('10', 'http://pic3.ulecdn.com/pic/user_800115119/product/prd20181120/75415299989e478d_p800x800.jpg', '【常 山胡柚】柚子常 山 胡柚 5斤装 新鲜水果 浙江特产包邮', '9.9', '浙江省常山柚乐专柜', '浙江省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('11', 'http://pic0.ulecdn.com/pic/user_800111113/product/prd20181031/47abacb8e7f8f37b_p1200x797.jpg', '【开州馆】扶贫助农 南雅琯溪白心蜜柚 2个装(约5.5斤) 新鲜水果', '10.9', '开州馆', '重庆', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('12', 'http://pic3.ulecdn.com/pic/user_800114200/product/prd20181028/df5ad06cc0bdc97d_p800x800.jpg', '麦德龙 10元代金券', '10.0', '拉卡拉综合电子劵专卖店旗舰店', '北京', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('13', 'http://pic0.ulecdn.com/pic/user_800139595/product/prd20180929/1fd93ef4489a491c_p450x450.jpg', '【保定精准扶贫】黄花菜干货 农家自制 自然晒干125克x2袋', '20.0', '顺平农品', '河北省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('14', 'http://pic1.ulecdn.com/pic/user_800138227/product/prd20181024/f2fd024ca5be4a52_p800x800.jpg', '【邮政助农 精准扶贫】陕西特产 洛川优生带宜君红富士苹果5斤家庭装（9-12枚）', '28.9', '陕西邮政精品扶贫店铜川店旗舰店', '陕西省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('15', 'http://pic0.ulecdn.com/pic/user_800131644/product/prd20181015/5e57c41c90487583_p450x450.jpg', '【石门特产】石门蜜橘  现采现发 口感纯正（10斤装）', '30.0', '邮乐石门馆专柜', '湖南省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('16', 'http://pic2.ulecdn.com/pic/user_800129405/product/prd20180831/fc4b098875d620f2_p800x800.jpg', '【扶贫专区】砀山酥梨大吉大‘梨’9枚标准装', '25.9', '宿州市砀山酥梨专柜', '安徽省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('17', 'http://pic1.ulecdn.com/pic/user_800108411/product/prd20180918/3fe2a520b4240951_p800x800.jpg', '【中邮】纯棉毛巾 套装洗脸巾 男女面巾 送礼福利 2条礼盒装', '18.5', '九味家居用品专营店', '江苏省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('19', 'http://pic0.ulecdn.com/pic/user_800113223/product/prd20181109/522e80cf4abea34c_p450x450.jpg', '【预售】（区内）米湾红葱 葱中精品 2kg 中国邮政集团公司宁夏分公司对接精准扶贫，助推农产品进城', '12.0', '中卫市特色店铺', '宁夏回族自治区', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('20', 'http://pic2.ulecdn.com/pic/user_800136825/product/prd20180820/5938717f8ac6f557_p800x800.jpg', '【精准扶贫，永兴特产】新鲜红农家自种一点红红薯 冰淇淋红薯  5斤装', '20.8', '永兴金陵乡专卖店专柜', '湖南省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
INSERT INTO `youle` VALUES ('21', 'http://pic2.ulecdn.com/pic/user_800110136/product/prd20181012/69a2ba813abd4023_p800x800.jpg', '达盛美 女士加厚手套 款式随机 针织毛线棉手套冬季保暖五指学生防寒秋冬天手套', '13.0', '邮乐新乡馆', '河南省', 'http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg,http://pic0.ulecdn.com/pic/user_800128405/product/prd20181030/4323bbe9834613a5_p500x500.jpg');
