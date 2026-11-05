// ==UserScript==
// @name         VOOI Ultra 全站专业汉化
// @namespace    local.vooi.ultra.zh-cn
// @version      1.0.0
// @description  VOOI Ultra 简体中文：套利终端、单腿交易、套利机器人、持仓委托、资金划转及账户界面。离线词库，保留交易数据。
// @author       VOOI Ultra 中文本地化
// @match        https://ultra.vooi.io/*
// @run-at       document-start
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @noframes
// @homepageURL  https://github.com/Menglayer/vooi-ultra-zh-CN
// @supportURL   https://github.com/Menglayer/vooi-ultra-zh-CN/issues
// @source       https://github.com/Menglayer/vooi-ultra-zh-CN
// @downloadURL  https://raw.githubusercontent.com/Menglayer/vooi-ultra-zh-CN/main/vooi-ultra-zh-CN.user.js
// @updateURL    https://raw.githubusercontent.com/Menglayer/vooi-ultra-zh-CN/main/vooi-ultra-zh-CN.user.js
// @license      MIT
// ==/UserScript==

(() => {
  'use strict';
  if (location.hostname !== 'ultra.vooi.io') return;
  const VERSION = '1.0.0';
  const ENTRIES = [
 [
  "Funding Apricot",
  "资金费机器人 · 杏色"
 ],
 [
  "Funding Azure",
  "资金费机器人 · 蔚蓝"
 ],
 [
  "Funding Basil",
  "资金费机器人 · 罗勒"
 ],
 [
  "Funding Berry",
  "资金费机器人 · 浆果"
 ],
 [
  "Funding Birch",
  "资金费机器人 · 白桦"
 ],
 [
  "Funding Blush",
  "资金费机器人 · 绯红"
 ],
 [
  "Funding Cedar",
  "资金费机器人 · 雪松"
 ],
 [
  "Funding Clover",
  "资金费机器人 · 三叶草"
 ],
 [
  "Funding Crimson",
  "资金费机器人 · 深红"
 ],
 [
  "Funding Cyan",
  "资金费机器人 · 青色"
 ],
 [
  "Funding Dahlia",
  "资金费机器人 · 大丽花"
 ],
 [
  "Funding Daisy",
  "资金费机器人 · 雏菊"
 ],
 [
  "Funding Fern",
  "资金费机器人 · 蕨叶"
 ],
 [
  "Funding Fig",
  "资金费机器人 · 无花果"
 ],
 [
  "Funding Garnet",
  "资金费机器人 · 石榴石"
 ],
 [
  "Funding Ginger",
  "资金费机器人 · 姜黄"
 ],
 [
  "Funding Hazel",
  "资金费机器人 · 榛木"
 ],
 [
  "Funding Heather",
  "资金费机器人 · 石楠"
 ],
 [
  "Funding Indigo",
  "资金费机器人 · 靛蓝"
 ],
 [
  "Funding Iris",
  "资金费机器人 · 鸢尾"
 ],
 [
  "Funding Ivory",
  "资金费机器人 · 象牙白"
 ],
 [
  "Funding Ivy",
  "资金费机器人 · 常春藤"
 ],
 [
  "Funding Jade",
  "资金费机器人 · 翡翠"
 ],
 [
  "Funding Juniper",
  "资金费机器人 · 杜松"
 ],
 [
  "Funding Lavender",
  "资金费机器人 · 薰衣草"
 ],
 [
  "Funding Lemon",
  "资金费机器人 · 柠檬"
 ],
 [
  "Funding Lilac",
  "资金费机器人 · 丁香"
 ],
 [
  "Funding Lily",
  "资金费机器人 · 百合"
 ],
 [
  "Funding Linden",
  "资金费机器人 · 椴树"
 ],
 [
  "Funding Lotus",
  "资金费机器人 · 莲花"
 ],
 [
  "Funding Magnolia",
  "资金费机器人 · 木兰"
 ],
 [
  "Funding Marigold",
  "资金费机器人 · 金盏花"
 ],
 [
  "Funding Melon",
  "资金费机器人 · 甜瓜"
 ],
 [
  "Funding Moss",
  "资金费机器人 · 苔藓"
 ],
 [
  "Funding Myrtle",
  "资金费机器人 · 桃金娘"
 ],
 [
  "Funding Nutmeg",
  "资金费机器人 · 肉豆蔻"
 ],
 [
  "Funding Olive",
  "资金费机器人 · 橄榄"
 ],
 [
  "Funding Opal",
  "资金费机器人 · 欧泊"
 ],
 [
  "Funding Peach",
  "资金费机器人 · 桃色"
 ],
 [
  "Funding Pearl",
  "资金费机器人 · 珍珠"
 ],
 [
  "Funding Peony",
  "资金费机器人 · 牡丹"
 ],
 [
  "Funding Pine",
  "资金费机器人 · 青松"
 ],
 [
  "Funding Plum",
  "资金费机器人 · 梅子"
 ],
 [
  "Funding Poppy",
  "资金费机器人 · 虞美人"
 ],
 [
  "Funding Quince",
  "资金费机器人 · 榅桲"
 ],
 [
  "Funding Rowan",
  "资金费机器人 · 花楸"
 ],
 [
  "Funding Ruby",
  "资金费机器人 · 红宝石"
 ],
 [
  "Funding Saffron",
  "资金费机器人 · 藏红花"
 ],
 [
  "Funding Sage",
  "资金费机器人 · 鼠尾草"
 ],
 [
  "Funding Sapphire",
  "资金费机器人 · 蓝宝石"
 ],
 [
  "Funding Scarlet",
  "资金费机器人 · 猩红"
 ],
 [
  "Funding Sienna",
  "资金费机器人 · 赭石"
 ],
 [
  "Funding Slate",
  "资金费机器人 · 石板灰"
 ],
 [
  "Funding Sorrel",
  "资金费机器人 · 酸模"
 ],
 [
  "Funding Teal",
  "资金费机器人 · 蓝绿"
 ],
 [
  "Funding Thistle",
  "资金费机器人 · 蓟花"
 ],
 [
  "Funding Thyme",
  "资金费机器人 · 百里香"
 ],
 [
  "Funding Topaz",
  "资金费机器人 · 黄玉"
 ],
 [
  "Funding Umber",
  "资金费机器人 · 棕土"
 ],
 [
  "Funding Velvet",
  "资金费机器人 · 丝绒"
 ],
 [
  "Funding Violet",
  "资金费机器人 · 紫罗兰"
 ],
 [
  "Funding Willow",
  "资金费机器人 · 垂柳"
 ],
 [
  "Funding Yarrow",
  "资金费机器人 · 蓍草"
 ],
 [
  "Funding Zinnia",
  "资金费机器人 · 百日菊"
 ],
 [
  "OI Apricot",
  "未平仓量机器人 · 杏色"
 ],
 [
  "OI Azure",
  "未平仓量机器人 · 蔚蓝"
 ],
 [
  "OI Basil",
  "未平仓量机器人 · 罗勒"
 ],
 [
  "OI Berry",
  "未平仓量机器人 · 浆果"
 ],
 [
  "OI Birch",
  "未平仓量机器人 · 白桦"
 ],
 [
  "OI Blush",
  "未平仓量机器人 · 绯红"
 ],
 [
  "OI Cedar",
  "未平仓量机器人 · 雪松"
 ],
 [
  "OI Clover",
  "未平仓量机器人 · 三叶草"
 ],
 [
  "OI Crimson",
  "未平仓量机器人 · 深红"
 ],
 [
  "OI Cyan",
  "未平仓量机器人 · 青色"
 ],
 [
  "OI Dahlia",
  "未平仓量机器人 · 大丽花"
 ],
 [
  "OI Daisy",
  "未平仓量机器人 · 雏菊"
 ],
 [
  "OI Fern",
  "未平仓量机器人 · 蕨叶"
 ],
 [
  "OI Fig",
  "未平仓量机器人 · 无花果"
 ],
 [
  "OI Garnet",
  "未平仓量机器人 · 石榴石"
 ],
 [
  "OI Ginger",
  "未平仓量机器人 · 姜黄"
 ],
 [
  "OI Hazel",
  "未平仓量机器人 · 榛木"
 ],
 [
  "OI Heather",
  "未平仓量机器人 · 石楠"
 ],
 [
  "OI Indigo",
  "未平仓量机器人 · 靛蓝"
 ],
 [
  "OI Iris",
  "未平仓量机器人 · 鸢尾"
 ],
 [
  "OI Ivory",
  "未平仓量机器人 · 象牙白"
 ],
 [
  "OI Ivy",
  "未平仓量机器人 · 常春藤"
 ],
 [
  "OI Jade",
  "未平仓量机器人 · 翡翠"
 ],
 [
  "OI Juniper",
  "未平仓量机器人 · 杜松"
 ],
 [
  "OI Lavender",
  "未平仓量机器人 · 薰衣草"
 ],
 [
  "OI Lemon",
  "未平仓量机器人 · 柠檬"
 ],
 [
  "OI Lilac",
  "未平仓量机器人 · 丁香"
 ],
 [
  "OI Lily",
  "未平仓量机器人 · 百合"
 ],
 [
  "OI Linden",
  "未平仓量机器人 · 椴树"
 ],
 [
  "OI Lotus",
  "未平仓量机器人 · 莲花"
 ],
 [
  "OI Magnolia",
  "未平仓量机器人 · 木兰"
 ],
 [
  "OI Marigold",
  "未平仓量机器人 · 金盏花"
 ],
 [
  "OI Melon",
  "未平仓量机器人 · 甜瓜"
 ],
 [
  "OI Moss",
  "未平仓量机器人 · 苔藓"
 ],
 [
  "OI Myrtle",
  "未平仓量机器人 · 桃金娘"
 ],
 [
  "OI Nutmeg",
  "未平仓量机器人 · 肉豆蔻"
 ],
 [
  "OI Olive",
  "未平仓量机器人 · 橄榄"
 ],
 [
  "OI Opal",
  "未平仓量机器人 · 欧泊"
 ],
 [
  "OI Peach",
  "未平仓量机器人 · 桃色"
 ],
 [
  "OI Pearl",
  "未平仓量机器人 · 珍珠"
 ],
 [
  "OI Peony",
  "未平仓量机器人 · 牡丹"
 ],
 [
  "OI Pine",
  "未平仓量机器人 · 青松"
 ],
 [
  "OI Plum",
  "未平仓量机器人 · 梅子"
 ],
 [
  "OI Poppy",
  "未平仓量机器人 · 虞美人"
 ],
 [
  "OI Quince",
  "未平仓量机器人 · 榅桲"
 ],
 [
  "OI Rowan",
  "未平仓量机器人 · 花楸"
 ],
 [
  "OI Ruby",
  "未平仓量机器人 · 红宝石"
 ],
 [
  "OI Saffron",
  "未平仓量机器人 · 藏红花"
 ],
 [
  "OI Sage",
  "未平仓量机器人 · 鼠尾草"
 ],
 [
  "OI Sapphire",
  "未平仓量机器人 · 蓝宝石"
 ],
 [
  "OI Scarlet",
  "未平仓量机器人 · 猩红"
 ],
 [
  "OI Sienna",
  "未平仓量机器人 · 赭石"
 ],
 [
  "OI Slate",
  "未平仓量机器人 · 石板灰"
 ],
 [
  "OI Sorrel",
  "未平仓量机器人 · 酸模"
 ],
 [
  "OI Teal",
  "未平仓量机器人 · 蓝绿"
 ],
 [
  "OI Thistle",
  "未平仓量机器人 · 蓟花"
 ],
 [
  "OI Thyme",
  "未平仓量机器人 · 百里香"
 ],
 [
  "OI Topaz",
  "未平仓量机器人 · 黄玉"
 ],
 [
  "OI Umber",
  "未平仓量机器人 · 棕土"
 ],
 [
  "OI Velvet",
  "未平仓量机器人 · 丝绒"
 ],
 [
  "OI Violet",
  "未平仓量机器人 · 紫罗兰"
 ],
 [
  "OI Willow",
  "未平仓量机器人 · 垂柳"
 ],
 [
  "OI Yarrow",
  "未平仓量机器人 · 蓍草"
 ],
 [
  "OI Zinnia",
  "未平仓量机器人 · 百日菊"
 ],
 [
  "Volume Apricot",
  "成交量机器人 · 杏色"
 ],
 [
  "Volume Azure",
  "成交量机器人 · 蔚蓝"
 ],
 [
  "Volume Basil",
  "成交量机器人 · 罗勒"
 ],
 [
  "Volume Berry",
  "成交量机器人 · 浆果"
 ],
 [
  "Volume Birch",
  "成交量机器人 · 白桦"
 ],
 [
  "Volume Blush",
  "成交量机器人 · 绯红"
 ],
 [
  "Volume Cedar",
  "成交量机器人 · 雪松"
 ],
 [
  "Volume Clover",
  "成交量机器人 · 三叶草"
 ],
 [
  "Volume Crimson",
  "成交量机器人 · 深红"
 ],
 [
  "Volume Cyan",
  "成交量机器人 · 青色"
 ],
 [
  "Volume Dahlia",
  "成交量机器人 · 大丽花"
 ],
 [
  "Volume Daisy",
  "成交量机器人 · 雏菊"
 ],
 [
  "Volume Fern",
  "成交量机器人 · 蕨叶"
 ],
 [
  "Volume Fig",
  "成交量机器人 · 无花果"
 ],
 [
  "Volume Garnet",
  "成交量机器人 · 石榴石"
 ],
 [
  "Volume Ginger",
  "成交量机器人 · 姜黄"
 ],
 [
  "Volume Hazel",
  "成交量机器人 · 榛木"
 ],
 [
  "Volume Heather",
  "成交量机器人 · 石楠"
 ],
 [
  "Volume Indigo",
  "成交量机器人 · 靛蓝"
 ],
 [
  "Volume Iris",
  "成交量机器人 · 鸢尾"
 ],
 [
  "Volume Ivory",
  "成交量机器人 · 象牙白"
 ],
 [
  "Volume Ivy",
  "成交量机器人 · 常春藤"
 ],
 [
  "Volume Jade",
  "成交量机器人 · 翡翠"
 ],
 [
  "Volume Juniper",
  "成交量机器人 · 杜松"
 ],
 [
  "Volume Lavender",
  "成交量机器人 · 薰衣草"
 ],
 [
  "Volume Lemon",
  "成交量机器人 · 柠檬"
 ],
 [
  "Volume Lilac",
  "成交量机器人 · 丁香"
 ],
 [
  "Volume Lily",
  "成交量机器人 · 百合"
 ],
 [
  "Volume Linden",
  "成交量机器人 · 椴树"
 ],
 [
  "Volume Lotus",
  "成交量机器人 · 莲花"
 ],
 [
  "Volume Magnolia",
  "成交量机器人 · 木兰"
 ],
 [
  "Volume Marigold",
  "成交量机器人 · 金盏花"
 ],
 [
  "Volume Melon",
  "成交量机器人 · 甜瓜"
 ],
 [
  "Volume Moss",
  "成交量机器人 · 苔藓"
 ],
 [
  "Volume Myrtle",
  "成交量机器人 · 桃金娘"
 ],
 [
  "Volume Nutmeg",
  "成交量机器人 · 肉豆蔻"
 ],
 [
  "Volume Olive",
  "成交量机器人 · 橄榄"
 ],
 [
  "Volume Opal",
  "成交量机器人 · 欧泊"
 ],
 [
  "Volume Peach",
  "成交量机器人 · 桃色"
 ],
 [
  "Volume Pearl",
  "成交量机器人 · 珍珠"
 ],
 [
  "Volume Peony",
  "成交量机器人 · 牡丹"
 ],
 [
  "Volume Pine",
  "成交量机器人 · 青松"
 ],
 [
  "Volume Plum",
  "成交量机器人 · 梅子"
 ],
 [
  "Volume Poppy",
  "成交量机器人 · 虞美人"
 ],
 [
  "Volume Quince",
  "成交量机器人 · 榅桲"
 ],
 [
  "Volume Rowan",
  "成交量机器人 · 花楸"
 ],
 [
  "Volume Ruby",
  "成交量机器人 · 红宝石"
 ],
 [
  "Volume Saffron",
  "成交量机器人 · 藏红花"
 ],
 [
  "Volume Sage",
  "成交量机器人 · 鼠尾草"
 ],
 [
  "Volume Sapphire",
  "成交量机器人 · 蓝宝石"
 ],
 [
  "Volume Scarlet",
  "成交量机器人 · 猩红"
 ],
 [
  "Volume Sienna",
  "成交量机器人 · 赭石"
 ],
 [
  "Volume Slate",
  "成交量机器人 · 石板灰"
 ],
 [
  "Volume Sorrel",
  "成交量机器人 · 酸模"
 ],
 [
  "Volume Teal",
  "成交量机器人 · 蓝绿"
 ],
 [
  "Volume Thistle",
  "成交量机器人 · 蓟花"
 ],
 [
  "Volume Thyme",
  "成交量机器人 · 百里香"
 ],
 [
  "Volume Topaz",
  "成交量机器人 · 黄玉"
 ],
 [
  "Volume Umber",
  "成交量机器人 · 棕土"
 ],
 [
  "Volume Velvet",
  "成交量机器人 · 丝绒"
 ],
 [
  "Volume Violet",
  "成交量机器人 · 紫罗兰"
 ],
 [
  "Volume Willow",
  "成交量机器人 · 垂柳"
 ],
 [
  "Volume Yarrow",
  "成交量机器人 · 蓍草"
 ],
 [
  "Volume Zinnia",
  "成交量机器人 · 百日菊"
 ],
 [
  "Bot Apricot",
  "机器人 · 杏色"
 ],
 [
  "Bot Azure",
  "机器人 · 蔚蓝"
 ],
 [
  "Bot Basil",
  "机器人 · 罗勒"
 ],
 [
  "Bot Berry",
  "机器人 · 浆果"
 ],
 [
  "Bot Birch",
  "机器人 · 白桦"
 ],
 [
  "Bot Blush",
  "机器人 · 绯红"
 ],
 [
  "Bot Cedar",
  "机器人 · 雪松"
 ],
 [
  "Bot Clover",
  "机器人 · 三叶草"
 ],
 [
  "Bot Crimson",
  "机器人 · 深红"
 ],
 [
  "Bot Cyan",
  "机器人 · 青色"
 ],
 [
  "Bot Dahlia",
  "机器人 · 大丽花"
 ],
 [
  "Bot Daisy",
  "机器人 · 雏菊"
 ],
 [
  "Bot Fern",
  "机器人 · 蕨叶"
 ],
 [
  "Bot Fig",
  "机器人 · 无花果"
 ],
 [
  "Bot Garnet",
  "机器人 · 石榴石"
 ],
 [
  "Bot Ginger",
  "机器人 · 姜黄"
 ],
 [
  "Bot Hazel",
  "机器人 · 榛木"
 ],
 [
  "Bot Heather",
  "机器人 · 石楠"
 ],
 [
  "Bot Indigo",
  "机器人 · 靛蓝"
 ],
 [
  "Bot Iris",
  "机器人 · 鸢尾"
 ],
 [
  "Bot Ivory",
  "机器人 · 象牙白"
 ],
 [
  "Bot Ivy",
  "机器人 · 常春藤"
 ],
 [
  "Bot Jade",
  "机器人 · 翡翠"
 ],
 [
  "Bot Juniper",
  "机器人 · 杜松"
 ],
 [
  "Bot Lavender",
  "机器人 · 薰衣草"
 ],
 [
  "Bot Lemon",
  "机器人 · 柠檬"
 ],
 [
  "Bot Lilac",
  "机器人 · 丁香"
 ],
 [
  "Bot Lily",
  "机器人 · 百合"
 ],
 [
  "Bot Linden",
  "机器人 · 椴树"
 ],
 [
  "Bot Lotus",
  "机器人 · 莲花"
 ],
 [
  "Bot Magnolia",
  "机器人 · 木兰"
 ],
 [
  "Bot Marigold",
  "机器人 · 金盏花"
 ],
 [
  "Bot Melon",
  "机器人 · 甜瓜"
 ],
 [
  "Bot Moss",
  "机器人 · 苔藓"
 ],
 [
  "Bot Myrtle",
  "机器人 · 桃金娘"
 ],
 [
  "Bot Nutmeg",
  "机器人 · 肉豆蔻"
 ],
 [
  "Bot Olive",
  "机器人 · 橄榄"
 ],
 [
  "Bot Opal",
  "机器人 · 欧泊"
 ],
 [
  "Bot Peach",
  "机器人 · 桃色"
 ],
 [
  "Bot Pearl",
  "机器人 · 珍珠"
 ],
 [
  "Bot Peony",
  "机器人 · 牡丹"
 ],
 [
  "Bot Pine",
  "机器人 · 青松"
 ],
 [
  "Bot Plum",
  "机器人 · 梅子"
 ],
 [
  "Bot Poppy",
  "机器人 · 虞美人"
 ],
 [
  "Bot Quince",
  "机器人 · 榅桲"
 ],
 [
  "Bot Rowan",
  "机器人 · 花楸"
 ],
 [
  "Bot Ruby",
  "机器人 · 红宝石"
 ],
 [
  "Bot Saffron",
  "机器人 · 藏红花"
 ],
 [
  "Bot Sage",
  "机器人 · 鼠尾草"
 ],
 [
  "Bot Sapphire",
  "机器人 · 蓝宝石"
 ],
 [
  "Bot Scarlet",
  "机器人 · 猩红"
 ],
 [
  "Bot Sienna",
  "机器人 · 赭石"
 ],
 [
  "Bot Slate",
  "机器人 · 石板灰"
 ],
 [
  "Bot Sorrel",
  "机器人 · 酸模"
 ],
 [
  "Bot Teal",
  "机器人 · 蓝绿"
 ],
 [
  "Bot Thistle",
  "机器人 · 蓟花"
 ],
 [
  "Bot Thyme",
  "机器人 · 百里香"
 ],
 [
  "Bot Topaz",
  "机器人 · 黄玉"
 ],
 [
  "Bot Umber",
  "机器人 · 棕土"
 ],
 [
  "Bot Velvet",
  "机器人 · 丝绒"
 ],
 [
  "Bot Violet",
  "机器人 · 紫罗兰"
 ],
 [
  "Bot Willow",
  "机器人 · 垂柳"
 ],
 [
  "Bot Yarrow",
  "机器人 · 蓍草"
 ],
 [
  "Bot Zinnia",
  "机器人 · 百日菊"
 ],
 [
  "Let’s go!",
  "开始使用！"
 ],
 [
  "About VOOI Ultra",
  "关于 VOOI Ultra"
 ],
 [
  "Perps is live —",
  "永续合约已上线 —"
 ],
 [
  "Share up to $15K",
  "瓜分最高 $15K 奖池"
 ],
 [
  "Trade Robinhood Perps",
  "交易 Robinhood 永续合约"
 ],
 [
  "Share up to $10K",
  "瓜分最高 $10K 奖池"
 ],
 [
  "More",
  "更多"
 ],
 [
  "Earn rewards",
  "赚取奖励"
 ],
 [
  "Hide",
  "隐藏"
 ],
 [
  "Show",
  "显示"
 ],
 [
  "opportunities",
  "机会推荐"
 ],
 [
  "VOOI Delta-Neutral",
  "VOOI Delta 中性"
 ],
 [
  "Step",
  "步骤"
 ],
 [
  "How",
  "了解"
 ],
 [
  "Vooi user ID",
  "VOOI 用户标识"
 ],
 [
  "Wallet app",
  "钱包应用"
 ],
 [
  "signed in",
  "已登录"
 ],
 [
  "signed out",
  "已退出登录"
 ],
 [
  "Session expires",
  "会话到期时间"
 ],
 [
  "Public key",
  "公钥"
 ],
 [
  "Signing key",
  "签名密钥"
 ],
 [
  "Key storage",
  "密钥存储"
 ],
 [
  "Reconnect needed",
  "需要重新连接"
 ],
 [
  "Local time",
  "本地时间"
 ],
 [
  "Time zone",
  "时区"
 ],
 [
  "User agent",
  "浏览器标识"
 ],
 [
  "Copy your user info and send it to support — that's all we need to find your account.",
  "复制用户信息并发送给客服，即可帮助定位您的账户。"
 ],
 [
  "User info",
  "用户信息"
 ],
 [
  "Full info",
  "完整信息"
 ],
 [
  "Debug info",
  "诊断信息"
 ],
 [
  "Copy address",
  "复制地址"
 ],
 [
  "To Launch Q4",
  "计划于第四季度上线"
 ],
 [
  "Earn points as you trade",
  "交易赚取积分"
 ],
 [
  "Earn points and USDC",
  "赚取积分与 USDC"
 ],
 [
  "Apply a code to get rebates",
  "填写邀请码以获得返佣"
 ],
 [
  "Earned on your trades",
  "交易累计获得"
 ],
 [
  "VOOI trading rebates",
  "VOOI 交易返佣"
 ],
 [
  "Live points",
  "当前积分"
 ],
 [
  "Past airdrops",
  "历史空投"
 ],
 [
  "earned by VOOI traders",
  "由 VOOI 交易者获得"
 ],
 [
  "Applying invite code…",
  "正在应用邀请码…"
 ],
 [
  "Invite code activated",
  "邀请码已激活"
 ],
 [
  "Invalid or already used invite code",
  "邀请码无效或已使用"
 ],
 [
  "Bybit won't let you trade this market until you accept",
  "接受以下条款后，Bybit 才允许交易该市场"
 ],
 [
  "Two agreements cover its traditional-asset perpetuals — one for stocks, ETFs and metals, one for crude oil. Accepting here covers the one this market needs, and your other venues are unaffected.",
  "传统资产永续合约有两份协议：一份适用于股票、ETF 和金属，另一份适用于原油。在此接受的仅为该市场所需协议，不影响其他交易场所。"
 ],
 [
  "Futures trading in traditional assets involves significant market risk and price volatility, especially outside the underlying asset's regular market hours. In the event of adverse price movements, your entire margin balance may be liquidated. Bybit is not responsible for any losses you may incur and does not provide financial advice. For more details, please refer to our",
  "传统资产合约交易涉及显著的市场风险和价格波动，尤其在标的资产常规交易时段以外。不利价格变动可能使您的全部保证金被强平。Bybit 不对您的损失承担责任，也不提供投资建议。详情请参阅"
 ],
 [
  "Terms and Conditions for Traditional Asset Perpetuals",
  "传统资产永续合约条款与条件"
 ],
 [
  "I have read and agree to these terms",
  "我已阅读并同意上述条款"
 ],
 [
  "Couldn't accept the terms on your behalf — accept them in Bybit, then send the order again.",
  "无法代您接受条款，请在 Bybit 接受后重新提交委托。"
 ],
 [
  "Bybit accepts these terms only from a master-account key carrying Account Transfer, Subaccount Transfer or Withdrawal permission — recreate your key in Bybit if it has none",
  "Bybit 仅接受具备账户划转、子账户划转或提现权限的主账户密钥提交条款确认。若密钥不具备这些权限，请在 Bybit 重新创建"
 ],
 [
  "Trading terms accepted",
  "交易条款已接受"
 ],
 [
  "Send your order again to open the position.",
  "请重新提交委托以开仓。"
 ],
 [
  "Accept terms",
  "接受条款"
 ],
 [
  "Trading terms",
  "交易条款"
 ],
 [
  "Reading",
  "读取"
 ],
 [
  "on the key, then restrict IP access to our IPs below — Binance deletes unrestricted keys that can do more than read.",
  "权限，然后将访问 IP 限制为下方提供的 IP。Binance 会删除未限制 IP 且具备读取以外权限的密钥。"
 ],
 [
  "Binance API Management with Enable Reading and Enable Futures checked, Spot & Margin left off, and IP access set to Restrict access to trusted IPs only with our IPs added",
  "Binance API 管理：勾选允许读取和合约权限，不勾选现货与杠杆权限；将 IP 访问设为仅信任指定 IP，并添加下方 IP"
 ],
 [
  "Create a",
  "创建一个"
 ],
 [
  "System-generated",
  "系统生成"
 ],
 [
  "key for",
  "密钥，用于"
 ],
 [
  "API Transaction",
  "API 交易"
 ],
 [
  ", and give it",
  "，并授予"
 ],
 [
  "Unified Trading — Trade",
  "统一交易 — 交易"
 ],
 [
  "Contract — Orders, Positions",
  "合约 — 委托、持仓"
 ],
 [
  ". Then bind it to our IPs below — Bybit expires a key with no bound IP after 90 days.",
  "。然后绑定下方 IP。Bybit 会在 90 天后使未绑定 IP 的密钥过期。"
 ],
 [
  "Trading Account",
  "交易账户"
 ],
 [
  ", give the key any name in",
  "，为密钥命名，填写在"
 ],
 [
  "API Key Remark",
  "API 密钥备注"
 ],
 [
  ", then set",
  "，然后设置"
 ],
 [
  "Spot Trading",
  "现货交易"
 ],
 [
  "Margin Trading (Unified Account)",
  "杠杆交易（统一账户）"
 ],
 [
  "Read and Write",
  "读取与写入"
 ],
 [
  "— everything else stays off, including",
  "— 其他权限均关闭，包括"
 ],
 [
  "IP Permissions",
  "IP 权限"
 ],
 [
  "Bind IP",
  "绑定 IP"
 ],
 [
  "and paste our IPs below — optional, but Gate disables keys with no bound IP after 90 days.",
  "并粘贴下方 IP。此项可选，但 Gate 会在 90 天后禁用未绑定 IP 的密钥。"
 ],
 [
  "In Gate Futures, open",
  "在 Gate 合约中打开"
 ],
 [
  "Preference",
  "偏好设置"
 ],
 [
  "Account Mode",
  "账户模式"
 ],
 [
  "Classic Spot Mode",
  "经典现货模式"
 ],
 [
  ". Single-Currency, Multi-Currency and Portfolio Margin Mode aren't supported.",
  "。不支持单币种、多币种及投资组合保证金模式。"
 ],
 [
  "Position Mode",
  "持仓模式"
 ],
 [
  "One-Way Mode",
  "单向持仓模式"
 ],
 [
  "Open Gate Futures",
  "打开 Gate 合约"
 ],
 [
  "Account modes",
  "账户模式"
 ],
 [
  "API Access Key",
  "API 访问密钥"
 ],
 [
  "API Secret Key",
  "API 私密密钥"
 ],
 [
  "API key",
  "API 密钥"
 ],
 [
  "API Key",
  "API 密钥"
 ],
 [
  "Secret Key",
  "私密密钥"
 ],
 [
  "View Account Details",
  "查看账户详情"
 ],
 [
  "under Spot and Futures, then",
  "在现货与合约下勾选，然后"
 ],
 [
  "View Order Details",
  "查看委托详情"
 ],
 [
  "Order Placing",
  "下单"
 ],
 [
  "under Futures — P2P stays off.",
  "在合约下勾选，P2P 权限保持关闭。"
 ],
 [
  "Notes",
  "备注"
 ],
 [
  "is required, so give the key any name, then link it to our IPs below — optional, but MEXC expires keys with no linked IP after 90 days.",
  "为必填项，请为密钥命名，然后关联下方 IP。IP 关联可选，但 MEXC 会在 90 天后使未关联 IP 的密钥过期。"
 ],
 [
  "In MEXC Futures → Preference, set",
  "在 MEXC 合约 → 偏好设置中，将"
 ],
 [
  "Single-Asset Margin",
  "单币种保证金"
 ],
 [
  "as the account asset mode and",
  "设为账户资产模式，并将持仓模式设为"
 ],
 [
  "Open MEXC Futures preferences",
  "打开 MEXC 合约偏好设置"
 ],
 [
  "Create key",
  "创建密钥"
 ],
 [
  "Paste key",
  "粘贴密钥"
 ],
 [
  "Our IPs",
  "VOOI 服务器 IP"
 ],
 [
  "Copy our IP addresses",
  "复制服务器 IP 地址"
 ],
 [
  "key stopped working. Create a new one to enable trading again.",
  "密钥已失效，请创建新密钥以重新启用交易。"
 ],
 [
  "check the",
  "请检查"
 ],
 [
  "setup guide",
  "配置指南"
 ],
 [
  "check the key’s permissions and IP whitelist",
  "检查密钥权限与 IP 白名单"
 ],
 [
  "I already have a key",
  "我已有密钥"
 ],
 [
  "I have my key",
  "已准备好密钥"
 ],
 [
  "USDC rewards",
  "USDC 奖励"
 ],
 [
  "How to Earn Lighter x Robinhood Points?",
  "如何赚取 Lighter × Robinhood 积分？"
 ],
 [
  "Choose any Lighter x Robinhood market at",
  "在以下终端选择任一 Lighter × Robinhood 市场："
 ],
 [
  "VOOI Arbitrage Desk",
  "VOOI 套利终端"
 ],
 [
  "Connect wallet and trade",
  "连接钱包并交易"
 ],
 [
  "Lighter x Robinhood markets",
  "Lighter × Robinhood 市场"
 ],
 [
  "to earn points and farm funding spread",
  "赚取积分与资金费率差收益"
 ],
 [
  "Your Lighter x Robinhood Points",
  "您的 Lighter × Robinhood 积分"
 ],
 [
  "will be updated weekly",
  "将每周更新"
 ],
 [
  "Open VOOI Arbitrage Desk",
  "打开 VOOI 套利终端"
 ],
 [
  "Trading is enabled on",
  "已启用交易的场所："
 ],
 [
  "Fund this account on",
  "请为此账户充值，操作场所为"
 ],
 [
  "itself — VOOI trades the balance that is already there.",
  "。VOOI 使用该场所账户中已有的余额交易。"
 ],
 [
  "EVM wallet is not connected",
  "未连接 EVM 钱包"
 ],
 [
  "Please sign the transaction...",
  "请在钱包中签署交易…"
 ],
 [
  "No transactions returned from deposit API",
  "充值接口未返回交易"
 ],
 [
  "Waiting for confirmation...",
  "等待确认…"
 ],
 [
  "The transaction was cancelled in the wallet",
  "交易已在钱包中取消"
 ],
 [
  "The transaction failed on-chain",
  "链上交易失败"
 ],
 [
  "Deposit request accepted",
  "充值请求已接受"
 ],
 [
  "Funds are on the way — this can take up to ~10 minutes.",
  "资金正在转入，最长可能需要约 10 分钟。"
 ],
 [
  "Deposit failed",
  "充值失败"
 ],
 [
  "Not enough balance",
  "余额不足"
 ],
 [
  "Switch network",
  "切换网络"
 ],
 [
  "Switch Network",
  "切换网络"
 ],
 [
  "Funds land",
  "资金到账"
 ],
 [
  "Two wallet signatures register a VOOI trading key on Aster, and your wallet will ask to switch to BNB Chain for them. No gas either way, and the key cannot withdraw your funds.",
  "通过两次钱包签名，在 Aster 注册 VOOI 交易密钥。钱包会请求切换至 BNB Chain。两次签名均无需 Gas 费，该密钥无法提现您的资金。"
 ],
 [
  "One signature approves a VOOI agent wallet on Hyperliquid. No gas, and an agent can trade but never withdraw.",
  "一次签名即可在 Hyperliquid 授权 VOOI 代理钱包。无需 Gas 费，代理只能交易，不能提现。"
 ],
 [
  "One signature registers a VOOI trading key on your Lighter account. No gas, and the key cannot withdraw your funds.",
  "一次签名即可在 Lighter 账户注册 VOOI 交易密钥。无需 Gas 费，该密钥无法提现您的资金。"
 ],
 [
  "One signature registers a VOOI trading key on your Robinhood account. No gas, and the key cannot withdraw your funds.",
  "一次签名即可在 Robinhood 账户注册 VOOI 交易密钥。无需 Gas 费，该密钥无法提现您的资金。"
 ],
 [
  "Checking whether you have a",
  "正在检查您是否已有"
 ],
 [
  "has no account until money arrives, so the deposit comes first.",
  "在资金到账后才建立账户，因此请先充值。"
 ],
 [
  "opens your account the moment the deposit arrives — usually within a minute, up to ten at worst. This step moves on by itself, so you can leave the window open.",
  "会在充值到账时自动开立账户，通常在 1 分钟内，最长约 10 分钟。此步骤会自动继续，可保持窗口开启。"
 ],
 [
  "Three wallet signatures create your Extended account and authorize a VOOI trading key. No gas, and the key cannot withdraw your funds.",
  "通过三次钱包签名创建 Extended 账户并授权 VOOI 交易密钥。无需 Gas 费，该密钥无法提现您的资金。"
 ],
 [
  "One wallet signature signs you in to Ondo, creates your account if you have none, and issues a VOOI trading key. No gas, and withdrawals only ever go to addresses you whitelist in the Ondo app.",
  "一次钱包签名即可登录 Ondo；若无账户则创建账户，并签发 VOOI 交易密钥。无需 Gas 费，提现只能转入您在 Ondo 应用中列入白名单的地址。"
 ],
 [
  "Two wallet signatures on Polygon create your Polymarket Perps account if you have none and authorize a VOOI trading key. No gas, and the key cannot withdraw your funds.",
  "通过 Polygon 上的两次钱包签名创建 Polymarket 永续合约账户（如尚无账户），并授权 VOOI 交易密钥。无需 Gas 费，该密钥无法提现您的资金。"
 ],
 [
  "Deposit appears here as soon as the account exists.",
  "账户创建后，此处即可显示充值。"
 ],
 [
  "One balance across Hyperliquid, trade.xyz and Kinetiq",
  "Hyperliquid、trade.xyz 与 Kinetiq 共用余额"
 ],
 [
  "Stock, commodity and crypto perps on one USDC balance",
  "股票、大宗商品及加密资产永续合约共用 USDC 余额"
 ],
 [
  "A white-label Lighter deployment, connected the same way",
  "基于 Lighter 的白标部署，连接方式相同"
 ],
 [
  "Setup guide",
  "配置指南"
 ],
 [
  "Exchange keys are stored against your VOOI account, so this comes first.",
  "交易所密钥关联存储于 VOOI 账户，因此需要先完成此步骤。"
 ],
 [
  "key stopped working. Sign again below to replace it.",
  "密钥已失效，请在下方重新签名以替换。"
 ],
 [
  "Needed for this trade",
  "本次交易所需"
 ],
 [
  "Other exchanges",
  "其他交易所"
 ],
 [
  "Referral code activated",
  "邀请码已激活"
 ],
 [
  "Enter your referral code",
  "输入邀请码"
 ],
 [
  "Activate your code to unlock rewards",
  "激活邀请码以解锁奖励"
 ],
 [
  "From referral link",
  "来自邀请链接"
 ],
 [
  "Incorrect code",
  "邀请码错误"
 ],
 [
  "Referral Code",
  "邀请码"
 ],
 [
  "Deposit from",
  "充值来源"
 ],
 [
  "Deposit to",
  "充值目标"
 ],
 [
  "Deposit fee",
  "充值手续费"
 ],
 [
  "You will get",
  "预计到账"
 ],
 [
  "Minimum deposit",
  "最低充值额"
 ],
 [
  "Wallet not connected",
  "未连接钱包"
 ],
 [
  "Amount must exceed fee",
  "金额须大于手续费"
 ],
 [
  "Sign in required",
  "请先登录"
 ],
 [
  "Soon",
  "即将上线"
 ],
 [
  "Trading stops right away.",
  "交易将立即停止。"
 ],
 [
  "Your positions and orders on",
  "您的持仓与委托所在场所为"
 ],
 [
  "stay open, and the key keeps working until you revoke it there.",
  "，仍会保留；在该场所撤销密钥前，密钥仍有效。"
 ],
 [
  "Connecting again takes a new API key and secret.",
  "重新连接需要新的 API 访问密钥与私密密钥。"
 ],
 [
  "You can turn it back on at any time.",
  "您可随时重新启用。"
 ],
 [
  "Hyperliquid won't approve another API wallet on your account",
  "Hyperliquid 无法再为您的账户授权 API 钱包"
 ],
 [
  "Each account gets a limited number, and yours are all in use. Remove one you no longer need on Hyperliquid, then enable trading again.",
  "每个账户可授权的数量有限，您的名额已用完。请在 Hyperliquid 移除不再使用的钱包，再重新启用交易。"
 ],
 [
  "Remove one you no longer need",
  "移除不再使用的钱包"
 ],
 [
  "Open your Hyperliquid API wallets",
  "打开 Hyperliquid API 钱包列表"
 ],
 [
  "Every step from freeing a slot to trading",
  "从释放名额到开始交易的完整步骤"
 ],
 [
  "API wallet limit",
  "API 钱包数量上限"
 ],
 [
  "requires switching your account type to trade via VOOI",
  "需要切换账户类型才能通过 VOOI 交易"
 ],
 [
  "Your account is currently Standard. The switch is immediate and needs no signature. Your current open positions remain as they are.",
  "您的账户当前为标准账户。切换立即生效，无需签名，现有持仓保持不变。"
 ],
 [
  "Standard",
  "标准账户"
 ],
 [
  "Premium",
  "高级账户"
 ],
 [
  "On top of the",
  "除上述"
 ],
 [
  "fees above, VOOI adds",
  "手续费外，VOOI 另收取"
 ],
 [
  "bps on every order",
  "个基点 / 每笔委托"
 ],
 [
  "Switch account type",
  "切换账户类型"
 ],
 [
  "Switch to",
  "切换至"
 ],
 [
  "Two things to check on MEXC.",
  "请在 MEXC 检查以下两项。"
 ],
 [
  "MEXC sometimes pauses futures trading over its API. Its system messages say why, and finishing Advanced KYC clears most cases. Your other venues keep trading meanwhile.",
  "MEXC 有时会暂停 API 合约交易，原因会通过系统消息说明。多数情况可通过完成高级身份认证解决。其他交易场所不受影响。"
 ],
 [
  "MEXC explains what it needs there.",
  "MEXC 会在其中说明所需操作。"
 ],
 [
  "Your MEXC messages",
  "MEXC 账户消息"
 ],
 [
  "Futures trading needs a verified identity.",
  "合约交易需要完成身份认证。"
 ],
 [
  "Your verification status",
  "身份认证状态"
 ],
 [
  "MEXC · Notifications → System Notifications",
  "MEXC · 通知 → 系统通知"
 ],
 [
  "MEXC · Profile → Identification",
  "MEXC · 个人资料 → 身份认证"
 ],
 [
  "Still stuck? MEXC support can help",
  "仍无法解决？请联系 MEXC 客服"
 ],
 [
  "MEXC paused new positions",
  "MEXC 已暂停新开仓"
 ],
 [
  "Earn funding on the spread between venues.",
  "通过交易场所之间的资金费率差赚取资金费收益。"
 ],
 [
  "Arbitrage volume via VOOI to earn USDC Cashback and Points.",
  "通过 VOOI 套利交易累积成交量，赚取 USDC 返现与积分。"
 ],
 [
  "Earn while the position runs",
  "持仓期间持续赚取收益"
 ],
 [
  "Hedge assets across two venues to earn funding rates.",
  "在两个交易场所对冲持仓，赚取资金费收益。"
 ],
 [
  "Snap pre-built strategies, open delta-neutral positions via DEXs and CEXs, collect funding.",
  "选择预设策略，通过去中心化及中心化交易所建立 Delta 中性仓位，赚取资金费。"
 ],
 [
  "Arbitrage Desk – Earn Funding Spread",
  "套利终端 — 赚取资金费率差"
 ],
 [
  "Ranked by APR, slippage or funding.",
  "按年化收益率、滑点或资金费率排序。"
 ],
 [
  "Find a strategy in Arbitrage Desk. Click Trade to open both legs from one page.",
  "在套利终端选择策略，点击交易，即可从同一页面建立双腿仓位。"
 ],
 [
  "Pick a strategy",
  "选择策略"
 ],
 [
  "Find strategy",
  "查找策略"
 ],
 [
  "Meet Arbitrage Desk",
  "了解套利终端"
 ],
 [
  "Next Step",
  "下一步"
 ],
 [
  "Enter amount",
  "输入金额"
 ],
 [
  "Pay",
  "支付"
 ],
 [
  "Receive",
  "接收"
 ],
 [
  "Minimum received",
  "最低到账"
 ],
 [
  "Swap on Hyperliquid",
  "在 Hyperliquid 兑换"
 ],
 [
  "No token received",
  "未收到代币"
 ],
 [
  "Please sign your transaction in the wallet...",
  "请在钱包中签署交易…"
 ],
 [
  "Submitting your withdrawal...",
  "正在提交提现…"
 ],
 [
  "Withdrawal request accepted",
  "提现请求已接受"
 ],
 [
  "User rejected the request",
  "用户已拒绝请求"
 ],
 [
  "You have rejected the transaction.",
  "您已拒绝此交易。"
 ],
 [
  "Changing (reducing) your exchange balance via withdrawal can impact open positions — up to full liquidation.",
  "提现会减少交易所余额，可能影响未平仓位，严重时可能导致全部强平。"
 ],
 [
  "Be extremely careful!",
  "请务必谨慎！"
 ],
 [
  "I understand that withdrawing funds may reduce my margin and can lead to liquidation of my open positions",
  "我理解提现可能减少保证金，并可能导致未平仓位被强平"
 ],
 [
  "Withdraw from",
  "提现来源"
 ],
 [
  "Withdraw to",
  "提现目标"
 ],
 [
  "Withdraw fee",
  "提现手续费"
 ],
 [
  "Minimum withdrawal",
  "最低提现额"
 ],
 [
  "Aster withdrawals are temporarily unavailable here. Please withdraw directly on",
  "此处暂不支持 Aster 提现，请直接前往"
 ],
 [
  "Ondo pays out only to addresses whitelisted in its",
  "Ondo 仅允许向其白名单中的地址提现，白名单位于"
 ],
 [
  "address book",
  "地址簿"
 ],
 [
  ". Add this wallet there first.",
  "。请先在其中添加此钱包。"
 ],
 [
  "Hyperliquid withdrawals require unified account mode.",
  "Hyperliquid 提现需要统一账户模式。"
 ],
 [
  "An unexpected error occurred.",
  "发生意外错误。"
 ],
 [
  "The requested page could not be found.",
  "未找到所请求的页面。"
 ],
 [
  "Sign in failed",
  "登录失败"
 ],
 [
  "Signed in successfully",
  "登录成功"
 ],
 [
  "VOOI never sees your wallet’s private key",
  "VOOI 无法获知您的钱包私钥"
 ],
 [
  "A message, not a transaction",
  "签署消息，无需发送交易"
 ],
 [
  "Signing in costs no gas and cannot move your funds",
  "登录无需 Gas 费，也不会转移您的资金"
 ],
 [
  "Your key stays in your wallet",
  "私钥始终保留在钱包中"
 ],
 [
  "VOOI only receives the signature, never the key that made it",
  "VOOI 仅接收签名，无法获取用于生成签名的私钥"
 ],
 [
  "Exchange keys are locked down",
  "交易所密钥受到严格保护"
 ],
 [
  "Keys you connect later are encrypted with AWS KMS and isolated from the rest of VOOI",
  "后续连接的密钥由 AWS KMS 加密，并与 VOOI 其他系统隔离"
 ],
 [
  "Signature not completed",
  "签名未完成"
 ],
 [
  "Sign to continue",
  "签名以继续"
 ],
 [
  "Sign a message — no gas, no transaction",
  "签署消息，无需 Gas 费，不发送交易"
 ],
 [
  "Setting up your account",
  "正在配置账户"
 ],
 [
  "Signed in",
  "已登录"
 ],
 [
  "Waiting for your wallet",
  "等待钱包响应"
 ],
 [
  "Confirm the signature in your wallet",
  "请在钱包中确认签名"
 ],
 [
  "Verify ownership",
  "验证钱包所有权"
 ],
 [
  "Set up your account",
  "配置账户"
 ],
 [
  "Ready to trade",
  "可以开始交易"
 ],
 [
  "Checking your venues and balances",
  "正在检查交易场所与余额"
 ],
 [
  "Detected",
  "已检测到"
 ],
 [
  "The request was rejected or the wallet is unavailable.",
  "请求已被拒绝，或钱包不可用。"
 ],
 [
  "Connect a wallet to trade every venue from one account. VOOI never holds your funds.",
  "连接钱包，即可通过一个账户交易所有支持的场所。VOOI 不托管您的资金。"
 ],
 [
  "More wallets",
  "更多钱包"
 ],
 [
  "Your keys are encrypted with AWS KMS",
  "您的密钥由 AWS KMS 加密"
 ],
 [
  "AWS KMS encryption",
  "AWS KMS 加密"
 ],
 [
  "Every key is encrypted with its own hardware-backed key, so a database dump is useless ciphertext",
  "每个密钥均通过独立的硬件保护密钥加密，数据库导出仅包含无法直接使用的密文"
 ],
 [
  "Isolated signing",
  "隔离签名"
 ],
 [
  "Keys live in a dedicated vault and never leave it. Signing happens inside, and keys are never returned",
  "密钥始终保留在专用保险库中。签名在内部执行，密钥不会被返回"
 ],
 [
  "Dedicated servers and IPs",
  "独立服务器与 IP"
 ],
 [
  "Key storage runs on isolated servers reachable only from our own fixed IPs",
  "密钥存储运行在隔离服务器上，仅允许 VOOI 固定 IP 访问"
 ],
 [
  "Whitelisted withdrawals",
  "提现地址白名单"
 ],
 [
  "Withdrawals only ever go to addresses you whitelist in the Ondo app",
  "提现仅可转入您在 Ondo 应用中加入白名单的地址"
 ],
 [
  "Withdrawals disabled",
  "已禁用提现权限"
 ],
 [
  "Connected keys can trade but never withdraw your funds",
  "已连接密钥仅可交易，无法提现您的资金"
 ],
 [
  "Current",
  "当前"
 ],
 [
  "applies an upgrade immediately and a downgrade once every 24 hours",
  "升级立即生效，降级每 24 小时仅允许一次"
 ],
 [
  "Fees and limits",
  "费用与限额"
 ],
 [
  "Change to",
  "更改为"
 ],
 [
  "Account type",
  "账户类型"
 ],
 [
  "Exchange maker / taker fee",
  "交易所挂单 / 吃单手续费"
 ],
 [
  "VOOI adds",
  "VOOI 附加费"
 ],
 [
  "You pay",
  "您需支付"
 ],
 [
  "Deposit in progress",
  "充值处理中"
 ],
 [
  "Wallet signature",
  "钱包签名"
 ],
 [
  "Checking account",
  "正在检查账户"
 ],
 [
  "Deposit first",
  "请先充值"
 ],
 [
  "Balance of Hyperliquid includes Trade.xyz, Kinetiq & Entropy",
  "Hyperliquid 余额包含 trade.xyz、Kinetiq 与 Entropy"
 ],
 [
  "Key expired",
  "密钥已过期"
 ],
 [
  "Agent fee approval is outdated — open to re-approve",
  "代理手续费授权已过期，点击重新授权"
 ],
 [
  "How to change?",
  "如何更改？"
 ],
 [
  "Switch to unified",
  "切换至统一账户"
 ],
 [
  "Switch to Unified",
  "切换至统一账户"
 ],
 [
  "Hyperliquid uses one shared balance now.",
  "Hyperliquid 现采用统一共享余额。"
 ],
 [
  "Some exchange keys are invalid — expand to reconnect",
  "部分交易所密钥无效，展开后重新连接"
 ],
 [
  "Agent fee approval is outdated.",
  "代理手续费授权已过期。"
 ],
 [
  "Change exchange",
  "切换交易所"
 ],
 [
  "Preparing registration...",
  "正在准备注册…"
 ],
 [
  "Failed to prepare registration",
  "准备注册失败"
 ],
 [
  "Switching to BSC for signing...",
  "正在切换至 BNB Chain 以签名…"
 ],
 [
  "Please sign the messages...",
  "请签署消息…"
 ],
 [
  "Signing registration data (1/2)",
  "正在签署注册数据（1/2）"
 ],
 [
  "Signing registration data (2/2)",
  "正在签署注册数据（2/2）"
 ],
 [
  "Saving credentials...",
  "正在保存凭据…"
 ],
 [
  "Please sign in your wallet (1/3)",
  "请在钱包中签名（1/3）"
 ],
 [
  "Please sign in your wallet (2/3)",
  "请在钱包中签名（2/3）"
 ],
 [
  "Please sign in your wallet (3/3)",
  "请在钱包中签名（3/3）"
 ],
 [
  "Creating your Extended trading keys",
  "正在创建 Extended 交易密钥"
 ],
 [
  "Registering your Extended account",
  "正在注册 Extended 账户"
 ],
 [
  "Authorizing your Extended API key",
  "正在授权 Extended API 密钥"
 ],
 [
  "Please sign the builder approval...",
  "请签署构建者授权…"
 ],
 [
  "Please sign the broker approval...",
  "请签署经纪商授权…"
 ],
 [
  "Switching network for signing...",
  "正在切换网络以签名…"
 ],
 [
  "Please sign the message...",
  "请签署消息…"
 ],
 [
  "Switching to Polygon for signing...",
  "正在切换至 Polygon 以签名…"
 ],
 [
  "Authorizing your Polymarket trading key",
  "正在授权 Polymarket 交易密钥"
 ],
 [
  "Trading has been disabled for this exchange",
  "此交易所的交易已停用"
 ],
 [
  "Agent approval updated.",
  "代理授权已更新。"
 ],
 [
  "Could not approve the agent.",
  "无法授权代理。"
 ],
 [
  "Select all",
  "全选"
 ],
 [
  "No open orders",
  "暂无未成交委托"
 ],
 [
  "No orders match the selected filters",
  "没有委托符合筛选条件"
 ],
 [
  "Symbol",
  "资产代码"
 ],
 [
  "Filled",
  "已成交"
 ],
 [
  "Trigger Conditions",
  "触发条件"
 ],
 [
  "Created at:",
  "创建时间："
 ],
 [
  "Updated at:",
  "更新时间："
 ],
 [
  "Partially filled",
  "部分成交"
 ],
 [
  "Failed to load order history.",
  "加载历史委托失败。"
 ],
 [
  "No order history",
  "暂无历史委托"
 ],
 [
  "No orders on the selected venues",
  "所选交易场所暂无委托"
 ],
 [
  "Failed to load more. Try again",
  "加载更多失败，请重试"
 ],
 [
  "No response from server",
  "服务器未响应"
 ],
 [
  "Sending close orders…",
  "正在发送平仓委托…"
 ],
 [
  "Close orders sent",
  "平仓委托已发送"
 ],
 [
  "Failed to send close orders",
  "发送平仓委托失败"
 ],
 [
  "Do you want to close",
  "是否确认关闭"
 ],
 [
  "is not available in your region, so its positions stay open.",
  "在您所在地区不可用，其仓位将继续保留。"
 ],
 [
  "Close all",
  "全部平仓"
 ],
 [
  "Close All Positions",
  "关闭全部仓位"
 ],
 [
  "Held by an arbitrage bot. Closing it by hand halts the bot until you check both venues and start it again",
  "该仓位由套利机器人管理。手动平仓会使机器人停止，请检查两个交易场所后再重新启动"
 ],
 [
  "You will get:",
  "预计到账："
 ],
 [
  "Total position size:",
  "仓位总规模："
 ],
 [
  "Close amount",
  "平仓数量"
 ],
 [
  "Close amount is too small.",
  "平仓数量过小。"
 ],
 [
  "Close Position",
  "平仓"
 ],
 [
  "is not available in your region. This position cannot be closed from here.",
  "在您所在地区不可用，无法在此关闭该仓位。"
 ],
 [
  "Sending close order…",
  "正在发送平仓委托…"
 ],
 [
  "Close order sent",
  "平仓委托已发送"
 ],
 [
  "Failed to send close order",
  "发送平仓委托失败"
 ],
 [
  "This can differ from what you see on MEXC. MEXC counts the fees you paid on this position as part of your margin, so its number reads a little higher than the one here.",
  "此数值可能与 MEXC 不同。MEXC 将该仓位已支付的手续费计入保证金，因此其显示值略高于此处。"
 ],
 [
  "funding fee is applied after the first hour of the position being open.",
  "资金费从持仓满一小时后开始计收。"
 ],
 [
  "This can differ from what you see on Bybit. By default Bybit calculates PnL from the last traded price, while the number here uses the mark price.",
  "此数值可能与 Bybit 不同。Bybit 默认按最新成交价计算盈亏，此处使用标记价。"
 ],
 [
  "This can differ from what you see on Gate. The percentage here comes from the position size and leverage, while Gate uses the margin held on the position, which changes when you add or remove margin. The amounts can also differ slightly while the price moves.",
  "此比例可能与 Gate 不同。此处按仓位规模与杠杆计算，Gate 则按随追加或减少保证金而变化的仓位保证金计算。价格变动时，金额也可能略有差异。"
 ],
 [
  "This can differ from what you see on MEXC. MEXC counts the fees you paid on this position as part of your margin, so its percentage sits closer to zero than the one here. The amounts can also differ slightly while the price moves.",
  "此比例可能与 MEXC 不同。MEXC 将已支付手续费计入仓位保证金，因此比例更接近零。价格变动时，金额也可能略有差异。"
 ],
 [
  "Market price:",
  "市场价格："
 ],
 [
  "Sending TP/SL orders…",
  "正在发送止盈止损委托…"
 ],
 [
  "TP/SL orders sent",
  "止盈止损委托已发送"
 ],
 [
  "They will appear under open orders once accepted.",
  "委托被接受后将显示在当前委托中。"
 ],
 [
  "Failed to send TP/SL orders",
  "发送止盈止损委托失败"
 ],
 [
  "stop limit",
  "止损限价"
 ],
 [
  "TP price above",
  "止盈价高于"
 ],
 [
  "TP price below",
  "止盈价低于"
 ],
 [
  "SL price below",
  "止损价低于"
 ],
 [
  "SL price above",
  "止损价高于"
 ],
 [
  "Sending cancel request…",
  "正在发送撤单请求…"
 ],
 [
  "Failed to cancel order",
  "撤单失败"
 ],
 [
  "Cancel request sent",
  "撤单请求已发送"
 ],
 [
  "The order will disappear once the venue confirms.",
  "交易场所确认后委托将移除。"
 ],
 [
  "is not available in your region. TP/SL cannot be set from here.",
  "在您所在地区不可用，无法在此设置止盈止损。"
 ],
 [
  "No available positions",
  "暂无持仓"
 ],
 [
  "No positions match the selected filters",
  "没有持仓符合筛选条件"
 ],
 [
  "Fee (not deducted)",
  "手续费（未扣除）"
 ],
 [
  "ADL",
  "自动减仓"
 ],
 [
  "Auto-deleveraged",
  "已自动减仓"
 ],
 [
  "Liquidation",
  "强平"
 ],
 [
  "Forced close",
  "强制平仓"
 ],
 [
  "Settlement",
  "结算"
 ],
 [
  "Market settlement",
  "市场结算"
 ],
 [
  "Failed to load trade history.",
  "加载成交记录失败。"
 ],
 [
  "No trade history",
  "暂无成交记录"
 ],
 [
  "No trades on the selected venues",
  "所选交易场所暂无成交"
 ],
 [
  "Your realized PnL on this fill, with the exchange fee taken out. A fee charged in another token can't be subtracted, so it's shown under the value instead. A dash means no PnL was reported for the fill.",
  "本次成交的已实现盈亏，已扣除交易所手续费。若手续费以其他代币收取，无法直接扣除，将在数值下单独显示。横线表示交易所未返回该笔成交盈亏。"
 ],
 [
  "What the exchange charged you for this trade, in the token it charged you in. A negative amount is a rebate it paid you instead. A dash means no fee was charged.",
  "交易所对本次成交收取的手续费，使用实际扣费代币显示。负值表示收到返佣，横线表示未收取手续费。"
 ],
 [
  "Maker means your order rested in the book until someone filled it. Taker means it crossed the spread and filled right away. Older trades show a dash, as do fills the exchange doesn't report a role for.",
  "挂单方指委托进入订单簿后等待对手成交；吃单方指跨越买卖价差立即成交。较早成交或交易所未返回角色时显示横线。"
 ],
 [
  "Role",
  "成交角色"
 ],
 [
  "Double check",
  "到期复查"
 ],
 [
  "Checks again",
  "再次检查"
 ],
 [
  "Funding turns negative",
  "资金费率差转负"
 ],
 [
  "Set the spread to close at",
  "设置触发平仓的费率差"
 ],
 [
  "Set between 1 minute and 365 days",
  "请设置 1 分钟至 365 天"
 ],
 [
  "Realized PnL and funding on both legs, less the fees the venues charged",
  "双腿已实现盈亏与资金费，减去交易场所收取的手续费"
 ],
 [
  "No closed arbitrage positions",
  "暂无已平仓套利记录"
 ],
 [
  "Canceling the order…",
  "正在撤销委托…"
 ],
 [
  "It clears once the venue confirms.",
  "交易场所确认后将移除。"
 ],
 [
  "Cancel sent",
  "撤单请求已发送"
 ],
 [
  "Could not cancel the order",
  "无法撤销委托"
 ],
 [
  "Canceled before it filled.",
  "成交前已撤销。"
 ],
 [
  "On the exchange, waiting to fill.",
  "已在交易所挂单，等待成交。"
 ],
 [
  "The exchange rejected this leg.",
  "交易所拒绝了该腿委托。"
 ],
 [
  "Filled in full.",
  "已全部成交。"
 ],
 [
  "Partly filled so far.",
  "当前已部分成交。"
 ],
 [
  "Close long",
  "关闭多头腿"
 ],
 [
  "Close short",
  "关闭空头腿"
 ],
 [
  "We do not have a description for this status yet.",
  "此状态暂无说明。"
 ],
 [
  "Not placed",
  "未提交"
 ],
 [
  "Show steps",
  "显示执行步骤"
 ],
 [
  "· all filled",
  " · 已全部成交"
 ],
 [
  "not placed",
  "未提交"
 ],
 [
  "not started",
  "未开始"
 ],
 [
  "is hedging its first leg",
  "正在为第一腿建立对冲"
 ],
 [
  "is filling its first leg",
  "第一腿正在成交"
 ],
 [
  "You canceled this order. Nothing filled.",
  "您已撤销此委托，未发生成交。"
 ],
 [
  "The venue has been asked to pull this order. It clears as soon as that is confirmed.",
  "已请求交易场所撤销此委托，确认后将移除。"
 ],
 [
  "Canceling",
  "撤销中"
 ],
 [
  "This order stopped early. Check Positions — one leg may be open on its own.",
  "委托提前停止，请检查持仓，其中一腿可能处于未对冲状态。"
 ],
 [
  "Both legs are open. You can manage them in Positions.",
  "双腿均已开仓，可在持仓中管理。"
 ],
 [
  "The second leg is filling now.",
  "第二腿正在成交。"
 ],
 [
  "The second leg is on the exchange, waiting to fill.",
  "第二腿已在交易所挂单，等待成交。"
 ],
 [
  "The second leg is on its way to the exchange.",
  "第二腿正在发送至交易所。"
 ],
 [
  "Accepted. Nothing has reached the exchange yet.",
  "委托已接受，尚未发送至交易所。"
 ],
 [
  "The first leg filled. The second one is going out now.",
  "第一腿已成交，正在发送第二腿。"
 ],
 [
  "The first leg is filling. The second goes out once it is done.",
  "第一腿正在成交，完成后将发送第二腿。"
 ],
 [
  "The first leg is on the exchange, waiting to fill at your price.",
  "第一腿已在交易所挂单，等待按指定价格成交。"
 ],
 [
  "The first leg is on its way to the exchange.",
  "第一腿正在发送至交易所。"
 ],
 [
  "Both legs closed. What is left of the pair is in Positions.",
  "双腿已完成本次平仓，组合剩余仓位可在持仓中查看。"
 ],
 [
  "The second leg is closing now.",
  "第二腿正在平仓。"
 ],
 [
  "The second leg is on the exchange, waiting to close.",
  "第二腿已在交易所挂单，等待平仓。"
 ],
 [
  "The first leg closed. The second one is going out now.",
  "第一腿已平仓，正在发送第二腿。"
 ],
 [
  "The first leg is closing. The second goes out once it is done.",
  "第一腿正在平仓，完成后将发送第二腿。"
 ],
 [
  "open and hedged",
  "已建立仓位并完成对冲"
 ],
 [
  "You canceled this order",
  "您已撤销此委托"
 ],
 [
  "Auto close canceled this order",
  "自动平仓已撤销此委托"
 ],
 [
  "Cancels this order before it fills.",
  "在成交前撤销此委托。"
 ],
 [
  "Stops the order where this step’s hedge stalled. Steps already hedged are kept, and the unhedged part of this step stays open on one side.",
  "在当前对冲停滞的步骤停止委托。已对冲的步骤保留，当前步骤未对冲部分将保留为单侧持仓。"
 ],
 [
  "Stops the order before its next step. Steps already hedged are kept. A step that is already on its way can be left unhedged.",
  "在下一步开始前停止委托，保留已对冲的步骤。正在发送的步骤可能留下未对冲仓位。"
 ],
 [
  "A step is filling right now. You can cancel between steps.",
  "当前步骤正在成交，可在步骤之间撤销。"
 ],
 [
  "Already canceling — waiting for the venue to confirm.",
  "已在撤销中，等待交易场所确认。"
 ],
 [
  "This order is already finished.",
  "该委托已结束。"
 ],
 [
  "The exchange has not confirmed the order yet. Try again in a moment.",
  "交易所尚未确认该委托，请稍后重试。"
 ],
 [
  "The first leg has started filling, so this order has to finish.",
  "第一腿已开始成交，该委托须继续完成。"
 ],
 [
  "The first leg already filled, so this order has to finish.",
  "第一腿已成交，该委托须继续完成。"
 ],
 [
  "Arbitrage order copied",
  "套利委托已复制"
 ],
 [
  "Spreads the steps out in time",
  "按时间分散执行步骤"
 ],
 [
  "TWAP",
  "时间加权平均价"
 ],
 [
  "Each step waits until both order books fit the slippage tolerance",
  "每步均等待双腿订单簿满足滑点容忍度"
 ],
 [
  "Spreads the steps out in time, and each one waits until both order books fit the tolerance",
  "按时间分散执行，各步均等待双腿订单簿满足滑点容忍度"
 ],
 [
  "TWAP + slippage",
  "时间加权执行 + 滑点限制"
 ],
 [
  "Steps go out evenly across this time; the order stops if one is still due when it ends",
  "各步在此时长内均匀执行；到期仍有未执行步骤时，委托停止"
 ],
 [
  "Each step waits this long after the last one is hedged",
  "上一执行步骤完成对冲后，等待此时长再进入下一步"
 ],
 [
  "Step timing",
  "步骤时间安排"
 ],
 [
  "Set between 2 and 500 steps",
  "请设置 2 至 500 步"
 ],
 [
  "Runs for",
  "执行总时长"
 ],
 [
  "Step every",
  "步骤间隔"
 ],
 [
  "How many parts the order is split into",
  "委托拆分的份数"
 ],
 [
  "Each step is hedged before the next one starts",
  "每一步完成对冲后才进入下一步"
 ],
 [
  "Timing unit",
  "时间单位"
 ],
 [
  "Each step waits until both order books can fill it within this slippage",
  "每步均等待双腿订单簿能在此滑点范围内完成成交"
 ],
 [
  "Measured from mid price",
  "相对中间价衡量"
 ],
 [
  "Leave blank to send each step without a check",
  "留空则不检查滑点，直接发送各步委托"
 ],
 [
  "Max wait unit",
  "最长等待时间单位"
 ],
 [
  "How long a step waits for slippage to come within the tolerance",
  "每步等待滑点降至容忍范围内的最长时间"
 ],
 [
  "When it runs out, the order stops",
  "等待超时后委托停止"
 ],
 [
  "Steps already hedged stay open",
  "已对冲的仓位继续保留"
 ],
 [
  "From 1 minute up to",
  "最短 1 分钟，最长"
 ],
 [
  "High",
  "高"
 ],
 [
  "High slippage at this size",
  "该规模下滑点较高"
 ],
 [
  "Each step waits until slippage is under",
  "每步等待滑点低于"
 ],
 [
  "Split into",
  "拆分为"
 ],
 [
  "has no open position for this leg — it was closed, or it never opened. Check Trade History to see what filled.",
  "没有该腿的持仓，可能已平仓或从未成功开仓。请在成交记录中核对。"
 ],
 [
  "Canceling auto close…",
  "正在取消自动平仓…"
 ],
 [
  "Auto close canceled",
  "自动平仓已取消"
 ],
 [
  "Could not cancel auto close",
  "无法取消自动平仓"
 ],
 [
  "Cancel auto close",
  "取消自动平仓"
 ],
 [
  "Closes if it is met again when the time is up, whatever it did in between",
  "等待到期后若条件再次满足则平仓，不要求期间持续满足"
 ],
 [
  "Closes once it has stayed met the whole time; dropping out starts the count over",
  "条件持续满足整个时长后平仓；中途不满足则重新计时"
 ],
 [
  "Hold mode",
  "条件持续模式"
 ],
 [
  "Hold",
  "持续时间"
 ],
 [
  "At or above",
  "达到或高于"
 ],
 [
  "At or below",
  "达到或低于"
 ],
 [
  "Met now — the pair closes as soon as this is saved",
  "当前已满足，保存后将立即平仓"
 ],
 [
  "Saving auto close…",
  "正在保存自动平仓…"
 ],
 [
  "Setting auto close…",
  "正在设置自动平仓…"
 ],
 [
  "Auto close updated",
  "自动平仓已更新"
 ],
 [
  "Auto close set",
  "自动平仓已设置"
 ],
 [
  "Closes both legs in full at market when any condition is",
  "任一条件满足时，以市价全部关闭双腿"
 ],
 [
  "met",
  "已满足"
 ],
 [
  "Whichever condition is met first closes the pair, and the rest stop counting. Every order resting on either market is canceled first, TP/SL included. The close crosses both order books, so a thin book costs slippage.",
  "任一条件先满足就触发组合平仓，其他条件停止计时。首先撤销两个市场上的所有挂单，包括止盈止损。平仓会跨越双腿订单簿，深度不足时将产生滑点。"
 ],
 [
  "Closes the pair at a set time, whatever the spreads are doing",
  "在指定时间平仓，不受价差或费率差变化影响"
 ],
 [
  "Close after",
  "延时平仓"
 ],
 [
  "How long from saving until the pair closes",
  "从保存起到组合平仓的时长"
 ],
 [
  "Short leg’s bid minus long leg’s ask, over their average. Closing pays roughly both markets’ bid–ask on top of it.",
  "空头腿买一价减去多头腿卖一价，再除以两者均值。实际平仓还需承担约为两个市场买卖价差之和的额外成本。"
 ],
 [
  "Short funding minus long funding, per hour, as in the 1h Spread column. Positive means the pair earns funding.",
  "空头小时资金费率减去多头小时资金费率，与 1 小时资金费率差列一致。正值表示组合赚取资金费。"
 ],
 [
  "Closes when the funding spread drops below zero and the pair starts paying funding",
  "资金费率差降至零以下、组合开始支付资金费时平仓"
 ],
 [
  "Saving starts every condition’s hold over",
  "保存后，所有条件的持续时间重新计时"
 ],
 [
  "An order is still working this pair. If a condition is met first, auto close cancels it and closes whatever has filled.",
  "该组合仍有执行中的委托。若先满足平仓条件，自动平仓将撤销该委托并关闭已成交仓位。"
 ],
 [
  "Waiting for both legs’ markets to load",
  "等待双腿市场数据加载"
 ],
 [
  "Choose at least one condition",
  "请至少选择一个条件"
 ],
 [
  "Create auto close",
  "创建自动平仓"
 ],
 [
  "— Auto close",
  "— 自动平仓"
 ],
 [
  "Closes both legs at market when any of these is met",
  "以下任一条件满足时，以市价关闭双腿"
 ],
 [
  "Closes both legs at market when any of these is met:",
  "以下任一条件满足时，以市价关闭双腿："
 ],
 [
  "Met — closed the pair",
  "条件已满足，组合已平仓"
 ],
 [
  "Not met",
  "未满足"
 ],
 [
  "Met since",
  "条件开始满足于"
 ],
 [
  "Canceled before any condition was met. Both legs stayed open.",
  "在任何条件满足前已取消，双腿持仓均保留。"
 ],
 [
  "Watching. None of the conditions is met right now.",
  "正在监控，当前没有条件满足。"
 ],
 [
  "Both legs were closed at market.",
  "双腿已以市价平仓。"
 ],
 [
  "A condition was met. Both legs are closing at market.",
  "条件已满足，双腿正在以市价平仓。"
 ],
 [
  "Closing did not finish. Check Positions — a leg may still be open.",
  "平仓未完成，请检查持仓，可能仍有一腿未平仓。"
 ],
 [
  "Stops watching. Both legs stay open.",
  "停止监控，双腿持仓均保留。"
 ],
 [
  "A condition was met and the pair is already closing.",
  "条件已满足，组合已在平仓中。"
 ],
 [
  "This auto close is already finished.",
  "该自动平仓任务已结束。"
 ],
 [
  "No arbitrage orders",
  "暂无套利委托"
 ],
 [
  "Trigger",
  "触发条件"
 ],
 [
  "Waiting",
  "等待中"
 ],
 [
  "Auto close is still on",
  "自动平仓仍在启用"
 ],
 [
  "Some close orders failed",
  "部分平仓委托失败"
 ],
 [
  "The positions update once the orders fill.",
  "委托成交后持仓将更新。"
 ],
 [
  "is not available in your region, so its pairs stay open.",
  "在您所在地区不可用，其组合持仓将继续保留。"
 ],
 [
  "Type:",
  "类型："
 ],
 [
  "This leg has not filled yet.",
  "该腿尚未成交。"
 ],
 [
  "closes at market only: it does not accept a resting reduce-only order.",
  "仅支持市价平仓，不接受挂单形式的只减仓委托。"
 ],
 [
  "Closing",
  "平仓中"
 ],
 [
  "Annualized from the current funding spread — projected, not realized",
  "按当前资金费率差年化估算，属于预期值，非已实现收益"
 ],
 [
  "Price impact of closing this share at market, from each order book",
  "按各腿订单簿估算，市价关闭该比例仓位的价格冲击"
 ],
 [
  "Collateral this close releases plus what it earns, after fees and slippage",
  "本次平仓释放的抵押品加上收益，已扣除手续费与滑点"
 ],
 [
  "Auto close is watching this pair — a close in steps or with a resting leg can’t go out",
  "自动平仓正在监控该组合，无法提交分步平仓或带挂单腿的平仓委托"
 ],
 [
  "This close also cancels the pair’s auto close",
  "本次平仓也会取消该组合的自动平仓"
 ],
 [
  "Auto close keeps watching what is left of the pair",
  "自动平仓将继续监控组合剩余仓位"
 ],
 [
  "Place close order",
  "提交平仓委托"
 ],
 [
  "Share of the long leg to close",
  "多头腿平仓比例"
 ],
 [
  "Share of the short leg to close",
  "空头腿平仓比例"
 ],
 [
  "Share of the pair to close",
  "组合平仓比例"
 ],
 [
  "Close legs by different amounts",
  "双腿分别设置平仓数量"
 ],
 [
  "Separate sliders for the long and short leg",
  "分别使用滑块设置多头腿与空头腿"
 ],
 [
  "Closes the pair in steps. Each step closes part of the long leg at market and hedges it on the short leg before the next one starts, so at most one step is unhedged at a time. With a duration set, the steps are spread evenly across it and the order stops if one is still due when it ends. With a pause set, each step waits that long after the last one. With a slippage tolerance set, a step waits for both order books to fit it, and the order stops once the max wait runs out.",
  "分步关闭组合。每步先以市价关闭部分多头腿，再关闭相应空头腿以保持对冲，随后进入下一步，因此同一时间最多只有一步未对冲。设置总时长后，各步均匀分布，到期仍有未执行步骤则停止；设置暂停时长后按该时长等待；设置滑点容忍度后，各步须等待双腿订单簿满足要求，超过最长等待时间则停止。"
 ],
 [
  "Closes gradually — less slippage on thin books",
  "逐步平仓，降低深度不足时的滑点"
 ],
 [
  "Only one leg is open. A resting close always places both, so this pair can only be closed at market.",
  "当前仅一腿持仓。挂单平仓需要同时提交双腿，因此该组合仅可市价平仓。"
 ],
 [
  "A resting close",
  "挂单平仓"
 ],
 [
  "A close in steps",
  "分步平仓"
 ],
 [
  "places both legs, so each of them needs a share to close. Give the other leg a share, or close at market.",
  "会同时提交双腿，因此两腿均需设置平仓比例。请为另一腿设置比例，或改用市价平仓。"
 ],
 [
  "That share is below the smallest order",
  "该平仓比例低于最小委托要求，场所为"
 ],
 [
  "will take. Close a larger part of the pair.",
  "。请提高组合平仓比例。"
 ],
 [
  "is not available in your region. This pair cannot be closed from here.",
  "在您所在地区不可用，无法在此关闭该组合。"
 ],
 [
  "Both legs are needed to close through an arbitrage order",
  "通过套利委托平仓需要双腿均有持仓"
 ],
 [
  "Close size is too small for one of the venues",
  "平仓规模低于某交易场所的最低要求"
 ],
 [
  "The long leg has no size to close",
  "多头腿没有可平仓数量"
 ],
 [
  "The short leg has no size to close",
  "空头腿没有可平仓数量"
 ],
 [
  "close order",
  "平仓委托"
 ],
 [
  "close orders",
  "平仓委托"
 ],
 [
  "the open leg",
  "未平仓腿"
 ],
 [
  "The open leg",
  "未平仓腿"
 ],
 [
  "both legs",
  "双腿"
 ],
 [
  "Pair closed",
  "组合已平仓"
 ],
 [
  "Both legs were already flat. Its history row is on its way.",
  "双腿已无持仓，历史记录正在生成。"
 ],
 [
  "The position updates once it fills.",
  "成交后持仓将更新。"
 ],
 [
  "Closes both legs — at market, or with one leg resting as a limit order.",
  "关闭双腿，可选择市价，或其中一腿采用限价挂单。"
 ],
 [
  "A condition of this pair’s auto close was met, and both legs are closing at market.",
  "该组合的自动平仓条件已满足，双腿正在以市价平仓。"
 ],
 [
  "Auto close closed both legs. The desk is writing this pair’s history row from its fills and clearing the row.",
  "自动平仓已关闭双腿，终端正根据成交生成历史记录并清除此行。"
 ],
 [
  "Both legs closed. The desk is writing this pair’s history row from its fills and clearing the row — reload the page if it is still here after a few minutes.",
  "双腿已平仓，终端正根据成交生成历史记录并清除此行。若几分钟后仍显示，请刷新页面。"
 ],
 [
  "This pair’s close order filled from another device. Closing it here writes its history row from its fills.",
  "该组合的平仓委托已在其他设备成交。在此关闭可根据成交生成历史记录。"
 ],
 [
  "A close order is resting on this pair. Cancel it in Arbitrage Orders to close at market instead.",
  "该组合有挂单中的平仓委托。若需改用市价，请先在套利委托中撤销。"
 ],
 [
  "A sequential order is still working this pair. Wait for its last step, or cancel it in Arbitrage Orders.",
  "该组合仍有顺序执行中的委托，请等待最后一步完成，或在套利委托中撤销。"
 ],
 [
  "An order is working this pair and has opened nothing yet. Cancel it in Arbitrage Orders first — closing now would drop the desk record while the order keeps going, and the pair it opens would be invisible here.",
  "该组合的委托正在执行，尚未建立持仓。请先在套利委托中撤销，否则现在关闭会删除终端记录，而委托仍会继续，随后建立的组合将无法在此显示。"
 ],
 [
  "Nothing opened on this pair, so there is nothing to close. The desk is clearing the row.",
  "该组合未建立持仓，无需平仓，终端正在清除此行。"
 ],
 [
  "— Arbitrage Desk",
  "— 套利终端"
 ],
 [
  "· met since",
  "· 条件满足始于"
 ],
 [
  "Click to change or cancel",
  "点击修改或取消"
 ],
 [
  "Set auto close",
  "设置自动平仓"
 ],
 [
  "Watching",
  "监控中"
 ],
 [
  "Closes in",
  "距平仓还有"
 ],
 [
  "Nothing ever opened on this pair — its order was canceled. Clearing the row.",
  "该组合的委托已撤销，从未建立持仓，正在清除此行。"
 ],
 [
  "Both legs closed. The desk is writing this pair's history row from its fills.",
  "双腿已平仓，终端正根据成交生成历史记录。"
 ],
 [
  "Auto close closed both legs. The desk is writing this pair's history row from its fills.",
  "自动平仓已关闭双腿，终端正根据成交生成历史记录。"
 ],
 [
  "This pair's close order filled from another device. Close it here to write its history row from its fills.",
  "该组合的平仓委托已在其他设备成交。在此关闭可根据成交生成历史记录。"
 ],
 [
  "Neither leg is open. The position closed, or its orders never filled.",
  "双腿均无持仓，可能已平仓或委托从未成交。"
 ],
 [
  "Both legs hold the same size. Nothing to balance.",
  "双腿规模相同，无需调整平衡。"
 ],
 [
  "An order is still working this pair. Wait for it to finish, or cancel it in Arbitrage Orders.",
  "该组合仍有执行中的委托，请等待完成，或在套利委托中撤销。"
 ],
 [
  "Sets up an order to balance the legs. You confirm it in the strategy form.",
  "设置用于平衡双腿的委托，需在策略表单中确认。"
 ],
 [
  "The legs are out of balance. Waiting for this market to price the top-up.",
  "双腿规模不平衡，正在等待市场提供补仓报价。"
 ],
 [
  "Rebalance loaded into the form",
  "平衡双腿的委托已载入表单"
 ],
 [
  "An order is still working this pair, so some figures may be empty. Open Arbitrage Orders to track or cancel it.",
  "该组合仍有执行中的委托，部分数据可能为空。请在套利委托中跟踪或撤销。"
 ],
 [
  "Closes the pair at market once a condition you set is met. Each leg’s TP/SL sits under it.",
  "您设定的条件满足时，以市价关闭组合。各腿的止盈止损显示在下方。"
 ],
 [
  "No available arbitrage positions",
  "暂无套利持仓"
 ],
 [
  "Open Arbitrage Desk",
  "打开套利终端"
 ],
 [
  "to earn the funding spread",
  "以赚取资金费率差"
 ],
 [
  "No close snapshot to write the history row from",
  "缺少平仓快照，无法生成历史记录"
 ],
 [
  "Competition ended",
  "交易赛已结束"
 ],
 [
  "Starts in",
  "距开始还有"
 ],
 [
  "Trading Competition",
  "交易赛"
 ],
 [
  "Trade via Desk",
  "通过终端交易"
 ],
 [
  "Trade via Bot",
  "通过机器人交易"
 ],
 [
  "Campaign rules",
  "活动规则"
 ],
 [
  "Eligibility, payouts, and how volume is counted",
  "参与资格、奖励发放及成交量统计规则"
 ],
 [
  "Automate your Delta‑Neutral trades",
  "自动执行 Delta 中性交易"
 ],
 [
  "Enable a bot to long",
  "启用机器人做多"
 ],
 [
  "and short the same market on any DEX, earning points and rewards passively.",
  "，并在任一去中心化交易所做空同一市场，自动赚取积分和奖励。"
 ],
 [
  "volume is counted automatically.",
  "成交量将自动计入统计。"
 ],
 [
  "Open Delta-Neutral Bot",
  "打开 Delta 中性机器人"
 ],
 [
  "Start trading",
  "开始交易"
 ],
 [
  "Reach min volume",
  "达到最低成交量"
 ],
 [
  "Address",
  "地址"
 ],
 [
  "Reward",
  "奖励"
 ],
 [
  "qualifying volume",
  "达标成交量"
 ],
 [
  "Leaderboard",
  "排行榜"
 ],
 [
  "Leaderboard is updating",
  "排行榜更新中"
 ],
 [
  "Perps trades placed through VOOI from",
  "通过 VOOI 提交的永续合约交易将被统计，起始时间为"
 ],
 [
  "enter the ranking",
  "计入排名"
 ],
 [
  "The pool grows with the combined volume of every qualified trader. Each milestone unlocks a larger pool, and the one unlocked right now is shown at the top of the page.",
  "奖池随全部达标交易者的累计成交量增长。每达到一个里程碑就解锁更大奖池，当前已解锁的奖池显示在页面顶部。"
 ],
 [
  "At launch",
  "活动开始时"
 ],
 [
  "Total volume",
  "累计成交量"
 ],
 [
  "more to unlock",
  "后解锁"
 ],
 [
  "Every milestone is unlocked",
  "所有里程碑均已解锁"
 ],
 [
  "Prize pool",
  "奖池"
 ],
 [
  "Unlocked prize pool",
  "已解锁奖池"
 ],
 [
  "Locked prize pool",
  "待解锁奖池"
 ],
 [
  "Ongoing",
  "进行中"
 ],
 [
  "Full terms",
  "完整条款"
 ],
 [
  "Join now",
  "立即参与"
 ],
 [
  "Trade Polymarket markets on VOOI and grow the shared prize pool",
  "在 VOOI 交易 Polymarket 市场，推动共享奖池增长"
 ],
 [
  "Up to $15K",
  "最高 $15K"
 ],
 [
  "Polymarket × VOOI Trading Competition",
  "Polymarket × VOOI 交易赛"
 ],
 [
  "Trade Robinhood markets on VOOI and grow the shared prize pool",
  "在 VOOI 交易 Robinhood 市场，推动共享奖池增长"
 ],
 [
  "Up to $10K",
  "最高 $10K"
 ],
 [
  "Robinhood × VOOI Trading Competition",
  "Robinhood × VOOI 交易赛"
 ],
 [
  "Trade any Extended market via VOOI to score on PnL, volume and open interest",
  "通过 VOOI 交易任意 Extended 市场，按盈亏、成交量与未平仓量获得积分"
 ],
 [
  "The Final Arc Competition",
  "The Final Arc 交易赛"
 ],
 [
  "Trade Ondo markets via VOOI",
  "通过 VOOI 交易 Ondo 市场"
 ],
 [
  "Weekly pool",
  "每周奖池"
 ],
 [
  "Ondo USDC Rewards",
  "Ondo USDC 奖励"
 ],
 [
  "Earn new Lighter points for each Robinhood perp trade via VOOI",
  "每笔通过 VOOI 执行的 Robinhood 永续合约交易均可赚取新一轮 Lighter 积分"
 ],
 [
  "LIT points pool",
  "LIT 积分池"
 ],
 [
  "Lighter on Robinhood Points",
  "Robinhood 市场的 Lighter 积分"
 ],
 [
  "Trade Ondo markets on VOOI and grow the shared prize pool",
  "在 VOOI 交易 Ondo 市场，推动共享奖池增长"
 ],
 [
  "Up to $15.5K",
  "最高 $15.5K"
 ],
 [
  "Ondo × VOOI Trading Competition",
  "Ondo × VOOI 交易赛"
 ],
 [
  "Trade any RWA asset on Extended via VOOI",
  "通过 VOOI 交易 Extended 的任意现实世界资产"
 ],
 [
  "Extended RWA",
  "Extended 现实世界资产"
 ],
 [
  "Campaigns | VOOI Ultra",
  "奖励活动 | VOOI Ultra"
 ],
 [
  "Live incentives across the venues VOOI Ultra trades on: competitions, weekly reward pools and points programs, each with its terms and a way in.",
  "VOOI Ultra 支持场所的当前激励：交易赛、每周奖池及积分计划，并提供各活动条款与参与入口。"
 ],
 [
  "Live incentives across partner venues. Rewards and terms are set by each venue.",
  "合作交易场所的当前激励，奖励与条款由各场所制定。"
 ],
 [
  "Live",
  "进行中"
 ],
 [
  "Ended",
  "已结束"
 ],
 [
  "Campaign terms can change without notice. Check the full terms before you trade. Not financial advice.",
  "活动条款可能随时变更且不另行通知。交易前请查阅完整条款，此内容不构成投资建议。"
 ],
 [
  "Campaign overview",
  "活动概览"
 ],
 [
  "Event schedule",
  "活动时间"
 ],
 [
  "Read more",
  "了解详情"
 ],
 [
  "Prize milestones",
  "奖池里程碑"
 ],
 [
  "Reward distribution",
  "奖励分配"
 ],
 [
  "Ondo Trading Competition is a three-week volume competition for traders executing Ondo Perps markets through VOOI. One leaderboard, ranked by leveraged volume. The entire unlocked pool is split pro-rata across every qualified trader — nobody needs a podium finish to be paid.",
  "Ondo 交易赛为期三周，面向通过 VOOI 交易 Ondo 永续合约的用户。采用统一排行榜，按含杠杆的名义成交量排名。全部已解锁奖池按比例分配给所有达标交易者，无需进入前三名即可获得奖励。"
 ],
 [
  "The competition runs from Sep 16 00:00 UTC to Oct 7, 2026 00:01 UTC. Every trade on Ondo Perps markets placed through VOOI in that window counts. The leaderboard refreshes automatically, and rewards are paid after the final day.",
  "活动时间为 2026 年 9 月 16 日 00:00 UTC 至 10 月 7 日 00:01 UTC。期间通过 VOOI 提交的所有 Ondo 永续合约交易均计入统计。排行榜自动刷新，活动结束后发放奖励。"
 ],
 [
  "A wallet with an Ondo Perps account connected to VOOI takes part automatically, with no sign-up. You qualify for a share of the pool once your volume on Ondo Perps markets through VOOI reaches",
  "将 Ondo 永续合约账户连接至 VOOI 的钱包会自动参赛，无需报名。通过 VOOI 的 Ondo 永续合约成交量达到以下门槛，即可参与奖池分配："
 ],
 [
  "Any participants breaking Ondo Perps Terms and Conditions detailed here won’t be included in the leaderboard. Users from restricted jurisdictions are prohibited from trading Ondo Perps markets via VOOI.",
  "违反此处 Ondo 永续合约条款与条件的参与者不会计入排行榜。受限司法辖区的用户不得通过 VOOI 交易 Ondo 永续合约。"
 ],
 [
  "The unlocked pool is split between qualified traders in proportion to their volume: your reward is your share of the total qualified volume multiplied by the pool. There is no podium bonus, so a larger share of volume is the only way to earn more. Rewards on this page are estimates until the competition ends, and are paid in USDC after that.",
  "已解锁奖池按达标交易者的成交量占比分配：您的奖励等于您占总达标成交量的比例乘以奖池。没有前三名额外奖励，只有提高成交量占比才能增加收益。本页奖励在活动结束前均为估算，结束后以 USDC 发放。"
 ],
 [
  "Ondo Trading Competition | VOOI Ultra",
  "Ondo 交易赛 | VOOI Ultra"
 ],
 [
  "Trade Ondo Perps markets through VOOI from Sep 16 to Oct 7, 2026. The prize pool grows with total volume and is shared pro-rata between qualified traders.",
  "于 2026 年 9 月 16 日至 10 月 7 日通过 VOOI 交易 Ondo 永续合约。奖池随总成交量增长，并按比例分配给达标交易者。"
 ],
 [
  "Polymarket Trading Competition is a two-week volume competition for traders executing Polymarket Perps markets through VOOI. One leaderboard, ranked by notional volume. The entire unlocked pool is split pro-rata across every qualified trader — nobody needs a podium finish to be paid.",
  "Polymarket 交易赛为期两周，面向通过 VOOI 交易 Polymarket 永续合约的用户。采用统一排行榜，按名义成交量排名。全部已解锁奖池按比例分配给所有达标交易者，无需进入前三名即可获得奖励。"
 ],
 [
  "The competition runs from Oct 29 00:00 UTC to Nov 11, 2026 23:59 UTC. Every trade on Polymarket Perps markets placed through the VOOI app or the VOOI API in that window counts. The leaderboard refreshes automatically, and rewards are paid after the final day.",
  "活动时间为 2026 年 10 月 29 日 00:00 UTC 至 11 月 11 日 23:59 UTC。期间通过 VOOI 应用或接口提交的所有 Polymarket 永续合约交易均计入统计。排行榜自动刷新，活动结束后发放奖励。"
 ],
 [
  "A wallet with a Polymarket Perps account connected to VOOI takes part automatically, with no sign-up. You qualify for a share of the pool once your volume on Polymarket Perps markets through VOOI reaches",
  "将 Polymarket 永续合约账户连接至 VOOI 的钱包会自动参赛，无需报名。通过 VOOI 的 Polymarket 永续合约成交量达到以下门槛，即可参与奖池分配："
 ],
 [
  "Users from restricted jurisdictions can’t trade Polymarket Perps markets via VOOI.",
  "受限司法辖区的用户无法通过 VOOI 交易 Polymarket 永续合约。"
 ],
 [
  "The unlocked pool is split between qualified traders in proportion to their volume: your reward is your share of the total qualified volume multiplied by the pool. There is no podium bonus, so a larger share of volume is the only way to earn more. Rewards on this page are estimates until the competition ends. After that, the Polymarket team sends them straight to your Polymarket wallet, with nothing to claim on VOOI.",
  "已解锁奖池按达标交易者的成交量占比分配。您的奖励等于您占总达标成交量的比例乘以奖池，没有前三名额外奖励。本页奖励在活动结束前均为估算，结束后由 Polymarket 团队直接发往您的 Polymarket 钱包，无需在 VOOI 领取。"
 ],
 [
  "Polymarket Trading Competition | VOOI Ultra",
  "Polymarket 交易赛 | VOOI Ultra"
 ],
 [
  "Trade Polymarket Perps markets through VOOI from Oct 29 to Nov 11, 2026. The prize pool grows with total volume and is shared pro-rata between qualified traders.",
  "于 2026 年 10 月 29 日至 11 月 11 日通过 VOOI 交易 Polymarket 永续合约。奖池随总成交量增长，并按比例分配给达标交易者。"
 ],
 [
  "Robinhood Trading Competition is a two-week volume competition for traders executing Robinhood Perps markets through VOOI. One leaderboard, ranked by leveraged volume. The whole prize pool is split pro-rata across every qualified trader — nobody needs a podium finish to be paid.",
  "Robinhood 交易赛为期两周，面向通过 VOOI 交易 Robinhood 永续合约的用户。采用统一排行榜，按含杠杆的名义成交量排名。整个奖池按比例分配给所有达标交易者，无需进入前三名即可获得奖励。"
 ],
 [
  "The competition runs from Oct 28 00:00 UTC to Nov 10, 2026 23:59 UTC. Every trade on Robinhood Perps markets placed through the VOOI app or the VOOI API in that window counts. The leaderboard refreshes automatically, and rewards are paid after the final day.",
  "活动时间为 2026 年 10 月 28 日 00:00 UTC 至 11 月 10 日 23:59 UTC。期间通过 VOOI 应用或接口提交的所有 Robinhood 永续合约交易均计入统计。排行榜自动刷新，活动结束后发放奖励。"
 ],
 [
  "A wallet with a Robinhood Perps account connected to VOOI takes part automatically, with no sign-up. You qualify for a share of the pool once your volume on Robinhood Perps markets through VOOI reaches",
  "将 Robinhood 永续合约账户连接至 VOOI 的钱包会自动参赛，无需报名。通过 VOOI 的 Robinhood 永续合约成交量达到以下门槛，即可参与奖池分配："
 ],
 [
  "Only Premium accounts take part, since Robinhood accepts VOOI orders from a Premium account alone. If yours is Standard, the order form offers the switch.",
  "仅高级账户可参与，因为 Robinhood 仅接受来自高级账户的 VOOI 委托。若当前为标准账户，可通过委托表单提供的入口切换。"
 ],
 [
  "The pool is split between qualified traders in proportion to their volume: your reward is your share of the total qualified volume multiplied by the pool. There is no podium bonus, so a larger share of volume is the only way to earn more. Rewards on this page are estimates until the competition ends. After that, the Lighter team sends them in USDC or LIT straight to your Lighter account, with nothing to claim on VOOI.",
  "奖池按达标交易者的成交量占比分配，您的奖励等于您占总达标成交量的比例乘以奖池，没有前三名额外奖励。本页奖励在活动结束前均为估算，结束后由 Lighter 团队以 USDC 或 LIT 直接发往您的 Lighter 账户，无需在 VOOI 领取。"
 ],
 [
  "Robinhood Trading Competition | VOOI Ultra",
  "Robinhood 交易赛 | VOOI Ultra"
 ],
 [
  "Trade Robinhood Perps markets through VOOI from Oct 28 to Nov 10, 2026. The prize pool grows with total volume and is shared pro-rata between qualified traders.",
  "于 2026 年 10 月 28 日至 11 月 10 日通过 VOOI 交易 Robinhood 永续合约。奖池随总成交量增长，并按比例分配给达标交易者。"
 ],
 [
  "VOOI fee cut from",
  "VOOI 手续费已从以下费率下调："
 ],
 [
  "Measured against each pair's thinner leg — the side that caps how much the pair can absorb.",
  "按每组组合中流动性较弱的一腿衡量，该腿限制组合可承接的规模。"
 ],
 [
  "How long a pair's funding spread has stayed positive. A coin stays while at least one of its pairs qualifies, and only those pairs are listed under it.",
  "组合的资金费率差持续为正的时长。只要某币种至少有一组组合符合条件，该币种就会保留，且仅列出符合条件的组合。"
 ],
 [
  "Spreads and slippage are shown for this position size.",
  "价差与滑点按此仓位规模显示。"
 ],
 [
  "Gross of fees, from a spread that resets at every settlement and can flip sign. An estimate, not a promise or financial advice.",
  "未扣除手续费。费率差会在每次结算时重置，且可能转为负值。此处为估算，不构成收益承诺或投资建议。"
 ],
 [
  "Gross of fees, from a spread that resets at every settlement and can flip sign.",
  "未扣除手续费。费率差会在每次结算时重置，且可能转为负值。"
 ],
 [
  "Gross of fees, and collected at each leg's own settlement.",
  "未扣除手续费，资金费按各腿所属交易场所的结算时间分别收取。"
 ],
 [
  "Funding is flat right now, so neither side pays.",
  "当前资金费率为零，双方均无需支付。"
 ],
 [
  "Neither leg has enough orders to fill",
  "双腿订单簿均无足够挂单完成成交"
 ],
 [
  "The long leg does not have enough orders to fill",
  "多头腿订单簿无足够挂单完成成交"
 ],
 [
  "The short leg does not have enough orders to fill",
  "空头腿订单簿无足够挂单完成成交"
 ],
 [
  "The spread you would really get once your order is filled, before fees.",
  "按实际成交价格计算的价差，未扣除手续费。"
 ],
 [
  "No live prices for either leg yet.",
  "双腿暂时均无实时价格。"
 ],
 [
  "No live price for the long leg yet.",
  "多头腿暂无实时价格。"
 ],
 [
  "No live price for the short leg yet.",
  "空头腿暂无实时价格。"
 ],
 [
  "No spread for this pair yet.",
  "该组合暂无价差数据。"
 ],
 [
  "The best price on each side right now, before fees. Your Size only turns the gap into dollars here — P Spread @ Size applies it to the prices.",
  "当前两侧的最优报价，未扣除手续费。此处仅按指定规模将价差换算为金额；“指定规模成交价差”才会按规模重新计算成交价格。"
 ],
 [
  "Most this pair allows — the lower of its two legs' limits.",
  "此组合允许的最高杠杆，取双腿上限中的较低值。"
 ],
 [
  "Highest leverage across this asset's pairs. Each pair is capped by whichever leg allows less.",
  "该资产全部组合中的最高杠杆。每组组合均受双腿中较低的杠杆上限约束。"
 ],
 [
  "Venues this asset trades on. Expand the row to see every pairing between them.",
  "支持该资产的交易场所。展开行可查看它们之间的所有组合。"
 ],
 [
  "Each leg's venue and the quote it trades against. Long leg on top, short leg below — every per-leg column follows this order.",
  "各腿的交易场所及计价资产。上方为多头腿，下方为空头腿；所有按腿显示的列均遵循此顺序。"
 ],
 [
  "Funding-rate difference between the short and long leg, annualized — the strategy's gross APR, before fees and assuming the current spread holds. Updates in real time.",
  "空头腿与多头腿资金费率之差的年化值，即假设当前费率差保持不变时、未扣除手续费的策略年化收益率。数据实时更新。"
 ],
 [
  "The gap between the two prices in the Price column. Positive means the short leg sells for more than the long leg costs.",
  "价格列中两个价格的差值。正值表示空头腿卖出价高于多头腿买入价。"
 ],
 [
  "The P Spread actually available at size: each leg priced at the fill it would get for the position size set under Settings, before fees. No value when a leg's order book cannot absorb that size.",
  "按设置中的仓位规模，使用各腿预估实际成交价计算的价差，未扣除手续费。若任意一腿订单簿无法承接该规模，则不显示数值。"
 ],
 [
  "The widest P Spread this pair reached in the last hour.",
  "该组合过去 1 小时内出现的最大价差。"
 ],
 [
  "The widest P Spread this pair reached in the last 24 hours — how good the entry has been lately.",
  "该组合过去 24 小时内出现的最大价差，用于观察近期最佳开仓条件。"
 ],
 [
  "What walking the order book past the best price costs each leg at the position size set under Settings. Excludes the half-spread you cross to enter, which P Spread already reflects. Color grades it against a typical taker fee.",
  "按设置中的规模，订单穿透最优报价后对各腿产生的价格冲击。不含开仓跨越的半个买卖价差，这部分已反映在价差指标中。颜色表示其相对典型吃单手续费的高低。"
 ],
 [
  "24-hour trading volume of each leg's market, in USD. Sorting ranks by the thinner leg, the side that caps how much the pair can absorb.",
  "各腿市场的 24 小时美元成交量。排序依据成交量较低的一腿，该腿限制组合可承接的规模。"
 ],
 [
  "Open interest — the total value of open positions in each leg's market. Sorting ranks by the thinner leg, the side that caps how much the pair can absorb.",
  "未平仓量，即各腿市场未平仓位的总价值。排序依据未平仓量较低的一腿，该腿限制组合可承接的规模。"
 ],
 [
  "The price each leg opens at: the long buys at the ask, the short sells at the bid. The gap between the two is P Spread.",
  "各腿当前开仓价格：多头以卖一价买入，空头以买一价卖出。两者之差即为价差。"
 ],
 [
  "Each leg's price change over the last 24 hours.",
  "各腿过去 24 小时的价格涨跌幅。"
 ],
 [
  "Every venue. Pick one to see all the pairs it trades in, or several to pair only within your picks.",
  "包含所有交易场所。选一个可查看涉及该场所的全部组合；选多个则仅显示所选场所之间的组合。"
 ],
 [
  "How often the table refetches. Rows re-rank on each update, so Off holds the current ranking until you refresh.",
  "表格重新获取数据的频率。每次更新都会重新排序；关闭后保留当前排序，直到手动刷新。"
 ],
 [
  "Hand-picked by the desk, with the reason as a badge. Sized for the same entry as the other cards.",
  "终端精选的机会，标签显示入选原因。与其他卡片采用相同的开仓规模计算。"
 ],
 [
  "The funding this side receives, whichever direction it is paid in",
  "当前方向收到的资金费，无论资金费率的正负"
 ],
 [
  "Funding only: price moves and fees are not included, and the rate resets at every settlement and can flip sign. An estimate, not a promise or financial advice.",
  "仅计算资金费，不含价格变动及手续费。费率在每次结算时重置，且可能转为负值。此处为估算，不构成收益承诺或投资建议。"
 ],
 [
  "Highest leverage this market allows.",
  "该市场允许的最高杠杆。"
 ],
 [
  "The venue this market trades on and the quote it settles in",
  "该市场所在交易场所及结算资产"
 ],
 [
  "The current funding rate annualized, on the side that receives it. Funding only: trading fees and price moves are not included.",
  "按当前收取资金费一侧计算的资金费率年化值。仅计算资金费，不含交易手续费和价格变动。"
 ],
 [
  "The side that receives funding at the current rate: short while the rate is positive, long while it is negative",
  "按当前费率收取资金费的一侧：费率为正时为空头，为负时为多头"
 ],
 [
  "24-hour trading volume of this market, in USD",
  "该市场的 24 小时美元成交量"
 ],
 [
  "Open interest — the total value of open positions in this market, one side",
  "未平仓量，即该市场单侧未平仓位的总价值"
 ],
 [
  "Price change over the last 24 hours",
  "过去 24 小时的价格涨跌幅"
 ],
 [
  "Mid price:",
  "中间价："
 ],
 [
  "Copy to Short",
  "复制至空头腿"
 ],
 [
  "Copy to Long",
  "复制至多头腿"
 ],
 [
  "The venues did not answer in time.",
  "交易场所响应超时。"
 ],
 [
  "A Maker–Taker pair has no position until the limit order fills. Add TP/SL from the position once both legs are open.",
  "挂单—吃单组合在限价单成交前不会建立持仓。双腿均开仓后，可从持仓中添加止盈止损。"
 ],
 [
  "A pair split into steps builds its position one step at a time. Add TP/SL from the position once every step has filled.",
  "分步组合会逐步建立持仓。全部步骤成交后，可从持仓中添加止盈止损。"
 ],
 [
  "Failed to prepare orders",
  "准备委托失败"
 ],
 [
  "This pair can't go out as a Maker–Taker order",
  "该组合不支持挂单—吃单委托"
 ],
 [
  "Switch to Taker–Taker · instant to place it.",
  "请切换为“吃单—吃单 · 即时执行”后提交。"
 ],
 [
  "This pair can't be split into steps",
  "该组合不支持分步执行"
 ],
 [
  "Turn off Split into steps to place it.",
  "请关闭“分步执行”后提交。"
 ],
 [
  "Sending arbitrage order in steps…",
  "正在发送分步套利委托…"
 ],
 [
  "Sending arbitrage orders…",
  "正在发送套利委托…"
 ],
 [
  "Failed to send arbitrage orders",
  "发送套利委托失败"
 ],
 [
  "Arbitrage orders sent",
  "套利委托已发送"
 ],
 [
  "The position updates once both legs fill.",
  "双腿成交后持仓将更新。"
 ],
 [
  "Minimum position size is $10.1 USDC",
  "最低仓位规模为 $10.1 USDC"
 ],
 [
  "No step count fits both venues' order limits",
  "没有步数同时满足两个交易场所的委托限制"
 ],
 [
  "Don’t split",
  "不分步"
 ],
 [
  "Select strategy",
  "选择策略"
 ],
 [
  "Leg already in use",
  "该腿已被占用"
 ],
 [
  "Enable trading on",
  "启用交易的场所："
 ],
 [
  "account type",
  "账户类型"
 ],
 [
  "Price unavailable",
  "价格不可用"
 ],
 [
  "Set Size",
  "设置规模"
 ],
 [
  "Maker–Taker always opens both legs. Switch to Taker–Taker · instant to add to one leg.",
  "挂单—吃单始终同时建立双腿。若仅对一腿加仓，请切换为“吃单—吃单 · 即时执行”。"
 ],
 [
  "Switch to Taker–Taker · instant",
  "切换为吃单—吃单 · 即时执行"
 ],
 [
  "Steps always open both legs. Turn off Split into steps to add to one leg.",
  "分步执行始终建立双腿。若仅对一腿加仓，请关闭“分步执行”。"
 ],
 [
  "Set Limit Price",
  "设置限价"
 ],
 [
  "Update Venue Settings",
  "更新交易场所设置"
 ],
 [
  "Open Market Orders",
  "提交市价开仓委托"
 ],
 [
  "Open Maker–Taker Order",
  "提交挂单—吃单开仓委托"
 ],
 [
  "Open a position:",
  "建立仓位："
 ],
 [
  "Opens the pair in steps. Each step buys the long leg at market and hedges it on the short leg before the next one starts, so at most one step is unhedged at a time. With a duration set, the steps are spread evenly across it and the order stops if one is still due when it ends. With a pause set, each step waits that long after the last one. With a slippage tolerance set, a step waits for both order books to fit it, and the order stops once the max wait runs out.",
  "分步建立组合。每步先以市价买入多头腿，再完成空头腿对冲后进入下一步，因此同一时间最多只有一步未对冲。设置总时长后，各步均匀分布，到期仍有未执行步骤则停止；设置暂停时长后，每步按该时长等待；设置滑点容忍度后，每步须等待双腿订单簿满足要求，超过最长等待时间则停止。"
 ],
 [
  "Opens gradually — less slippage on thin books",
  "逐步开仓，降低深度不足时的滑点"
 ],
 [
  "Entry Economics",
  "开仓收益与成本估算"
 ],
 [
  "How many hourly funding payments it takes for accrued funding income to cover the round-trip cost — the minimum holding time before the position turns profitable.",
  "累计资金费收入覆盖往返交易成本所需的小时结算次数，即仓位开始盈利前所需的最短持仓时间。"
 ],
 [
  "Break-even funding periods",
  "回本所需资金费结算期数"
 ],
 [
  "Projected funding income over the next 8 and 24 hours at the current funding spread and entered position size.",
  "按当前资金费率差与输入的仓位规模，估算未来 8 小时和 24 小时的资金费收入。"
 ],
 [
  "Est. funding income 8h / 24h",
  "预估资金费收入（8 / 24 小时）"
 ],
 [
  "Gross APR (funding)",
  "资金费毛年化收益率"
 ],
 [
  "Combined margin needed to open both legs at each leg's selected leverage.",
  "按各腿所选杠杆建立双腿仓位所需的保证金合计。"
 ],
 [
  "Estimated liquidation price of the long and short leg. If either leg reaches its liquidation price, that side is closed and the hedge breaks.",
  "多头与空头腿的预估强平价格。任一腿达到强平价都会被关闭，组合的对冲关系将被破坏。"
 ],
 [
  "Est. liquidation (L / S)",
  "预估强平价（多 / 空）"
 ],
 [
  "left axis",
  "左轴"
 ],
 [
  "right axis",
  "右轴"
 ],
 [
  "Price spread chart is unavailable right now",
  "价差图表暂不可用"
 ],
 [
  "No price spread history for this pair yet",
  "该组合暂无历史价差数据"
 ],
 [
  "Funding spread chart is unavailable right now",
  "资金费率差图表暂不可用"
 ],
 [
  "No funding spread history for this pair yet",
  "该组合暂无历史资金费率差数据"
 ],
 [
  "Open Edge",
  "开仓价差优势"
 ],
 [
  "Close Cost",
  "平仓价差成本"
 ],
 [
  "Spread (% of mid)",
  "价差（占中间价百分比）"
 ],
 [
  "Open Edge mean",
  "平均开仓价差优势"
 ],
 [
  "Close Cost mean",
  "平均平仓价差成本"
 ],
 [
  "High / Low",
  "最高 / 最低"
 ],
 [
  "(short bid − long ask) / mid",
  "（空头买一价 − 多头卖一价）/ 中间价"
 ],
 [
  "Price / Funding Spread",
  "价差 / 资金费率差"
 ],
 [
  "In/Out Spread",
  "开平仓价差"
 ],
 [
  "Historical Funding Spread",
  "历史资金费率差"
 ],
 [
  "Historical Funding spread",
  "历史资金费率差"
 ],
 [
  "Historical Price Spread",
  "历史价差"
 ],
 [
  "Historical Price spread",
  "历史价差"
 ],
 [
  "In/Out",
  "开仓 / 平仓"
 ],
 [
  "P/F Dual",
  "价差 / 费率差双图"
 ],
 [
  "Candles of the gap you can actually execute at the selected interval, taken from both legs' order books. You buy the long leg at its ask and sell the short leg at its bid, so a positive spread means the short venue pays more than the long venue asks — the gap you capture entering now.",
  "按所选周期显示实际可成交价差的 K 线，数据来自双腿订单簿。多头以卖一价买入，空头以买一价卖出；价差为正表示空头卖出价高于多头买入价，即当前开仓可获取的价差优势。"
 ],
 [
  "Watch where the spread sits against its recent range: enter when it's unusually wide, exit as it narrows back toward zero.",
  "观察当前价差在近期区间中的位置：价差显著扩大时开仓，收窄并接近零时平仓。"
 ],
 [
  "Gaps in the candles are intervals with no recorded quotes. The In/Out tab shows the same measure sampled every second, next to what it costs to unwind.",
  "K 线空缺表示该周期没有记录报价。“开仓 / 平仓”标签以每秒采样显示相同指标，并与平仓成本并列比较。"
 ],
 [
  "Spread (right axis)",
  "费率差（右轴）"
 ],
 [
  "— short-venue funding − long-venue funding.",
  "— 空头场所资金费率减去多头场所资金费率。"
 ],
 [
  "Legs (left axis)",
  "双腿费率（左轴）"
 ],
 [
  "— each venue's own hourly funding rate, so you can see which side drives the spread.",
  "— 各交易场所自身的小时资金费率，用于判断费率差的主要来源。"
 ],
 [
  "Funding income is what the strategy lives on. Look for a spread that stays positive over time, not just a one-day spike.",
  "资金费收入是策略的主要收益来源。应关注长期持续为正的费率差，而不只是单日突升。"
 ],
 [
  "If the spread flips negative and stays there, the position bleeds funding — time to reassess the pair.",
  "若费率差持续为负，持仓会不断支付资金费，此时需要重新评估该组合。"
 ],
 [
  "Both spreads on one pane at the selected interval — the price gap you enter and exit on next to the funding gap the position earns.",
  "按所选周期，在同一图表中展示开平仓的价差与持仓赚取的资金费率差。"
 ],
 [
  "Price (right axis)",
  "价差（右轴）"
 ],
 [
  "— the executable gap between the legs' order books, the same series as the Price tab.",
  "— 双腿订单簿之间的可成交价差，与价差标签中的数据一致。"
 ],
 [
  "Funding (left axis)",
  "资金费率差（左轴）"
 ],
 [
  "— gap between the legs' hourly funding rates, sampled at the selected interval and labelled both annualized (APR) and per hour.",
  "— 按所选周期采样的双腿小时资金费率差，同时标注年化值与每小时数值。"
 ],
 [
  "The axes are scaled independently — compare each line to its own history, not the lines to each other.",
  "两侧坐标轴独立缩放，请将各曲线与自身历史比较，不宜直接比较两条曲线的高度。"
 ],
 [
  "The sweet spot is a price spread sitting unusually wide while the funding spread holds positive: you capture the gap on entry and keep collecting funding after.",
  "较有利的情况是价差显著扩大且资金费率差持续为正：开仓时获取价差优势，随后持续收取资金费。"
 ],
 [
  "Sampled once per second from both legs' live order books. You long the long-venue (buy at its ask) and short the short-venue (sell at its bid).",
  "每秒从双腿实时订单簿采样。多头场所以卖一价买入，空头场所以买一价卖出。"
 ],
 [
  "Open Edge is the same measure the Historical Price spread tab charts as candles.",
  "“开仓价差优势”与历史价差 K 线使用相同指标。"
 ],
 [
  "Close Cost sits above Open Edge by both books' bid-ask spreads. Gross entry→exit PnL ≈ Open Edge − Close Cost (fees and funding not included).",
  "平仓价差成本高于开仓价差优势的部分来自双侧订单簿的买卖价差。开仓至平仓的毛盈亏约等于开仓价差优势减去平仓价差成本，不含手续费与资金费。"
 ],
 [
  "Enter when Open Edge is high — ideally above your fees plus expected funding.",
  "开仓价差优势较高时入场，理想情况下应高于手续费与预期资金费之和。"
 ],
 [
  "Exit when Close Cost drops low or turns negative.",
  "平仓价差成本降低或转负时退出。"
 ],
 [
  "A wide gap between the lines means thin books / high crossing cost — size down or use limit orders.",
  "两条曲线间距较大意味着深度不足或跨越买卖价差的成本较高，可降低规模或使用限价委托。"
 ],
 [
  "Browse strategies",
  "浏览策略"
 ],
 [
  "You see the hourly funding-rate difference between the short and long legs, which is the strategy's gross hourly yield before fees. Updates in real time.",
  "空头腿与多头腿每小时资金费率之差，即未扣除手续费的策略每小时毛收益率，实时更新。"
 ],
 [
  "You see the price each leg crosses to open the position — the long leg's best ask and the short leg's best bid. P Spread is the gap between these two prices.",
  "双腿开仓时跨越的最优报价：多头腿卖一价与空头腿买一价。两者之差即为价差。"
 ],
 [
  "You see the same funding normalized to one hour, so legs on venues with different settlement schedules can be compared directly.",
  "将资金费率统一换算为 1 小时，便于直接比较不同结算周期的交易场所。"
 ],
 [
  "You see the same funding over eight hours — the interval most venues quote it in.",
  "将资金费率换算为 8 小时，这是多数交易场所使用的报价周期。"
 ],
 [
  "You see the total value of open positions in each leg's market.",
  "显示各腿市场中未平仓位的总价值。"
 ],
 [
  "You see each leg's 24-hour trading volume in USD.",
  "显示各腿市场的 24 小时美元成交量。"
 ],
 [
  "The market pair may have changed or disappeared from the live scanner. Browse current opportunities to choose an available strategy.",
  "该市场组合可能已变更或从实时扫描结果中移除。请浏览当前机会并选择可用策略。"
 ],
 [
  "This arbitrage strategy is no longer available.",
  "该套利策略已不可用。"
 ],
 [
  "Strategy not found",
  "未找到策略"
 ],
 [
  "No pair selected",
  "尚未选择组合"
 ],
 [
  "Select a pair and review",
  "请选择组合并查看详情"
 ],
 [
  "Failed to load strategy data",
  "加载策略数据失败"
 ],
 [
  "Back to strategies",
  "返回策略列表"
 ],
 [
  "What this close earns and costs",
  "本次平仓的收益与成本"
 ],
 [
  "Both legs are valued at the mark, so resting away from it is not counted here.",
  "双腿均按标记价估值，偏离标记价的挂单价格影响未计入此处。"
 ],
 [
  "Maker + taker + broker fees",
  "挂单费 + 吃单费 + 经纪商费"
 ],
 [
  "Taker + broker fees",
  "吃单费 + 经纪商费"
 ],
 [
  "Mark PnL on both legs, before funding, closing fees and slippage",
  "双腿按标记价计算的盈亏，未计入资金费、平仓手续费与滑点"
 ],
 [
  "Top up",
  "补充资金"
 ],
 [
  "Any side",
  "不限方向"
 ],
 [
  "Hide unfilled attempts",
  "隐藏未成交尝试"
 ],
 [
  "Show unfilled attempts",
  "显示未成交尝试"
 ],
 [
  "About",
  "约"
 ],
 [
  "per",
  "每"
 ],
 [
  "at",
  "于"
 ],
 [
  "against",
  "相对于"
 ],
 [
  "Checked",
  "已检查"
 ],
 [
  "The",
  "该"
 ],
 [
  "an hour",
  "每小时"
 ],
 [
  "your Min",
  "您设定的最低值"
 ],
 [
  "ago ·",
  "前 ·"
 ],
 [
  "this amount",
  "此金额"
 ],
 [
  "Picked",
  "已选择"
 ],
 [
  "your profit",
  "您的利润"
 ],
 [
  ", then",
  "，然后"
 ],
 [
  "time from Min to Max",
  "最短至最长时间之间的随机时长"
 ],
 [
  "this long",
  "此时长"
 ],
 [
  "Up to",
  "最高"
 ],
 [
  "Opening",
  "开仓中"
 ],
 [
  "· Cost up to",
  "· 成本最高"
 ],
 [
  "Per hour",
  "每小时"
 ],
 [
  "Per 8 hours",
  "每 8 小时"
 ],
 [
  "pays it",
  "支付资金费"
 ],
 [
  "earns it",
  "收取资金费"
 ],
 [
  "A dash means that leg does not have enough orders for this size.",
  "横线表示该腿订单簿挂单量不足以承接此规模。"
 ],
 [
  "positive",
  "持续为正"
 ],
 [
  "exc.",
  "个交易场所"
 ],
 [
  "and",
  "及"
 ],
 [
  "or",
  "或"
 ],
 [
  "Switch",
  "切换"
 ],
 [
  "Re-approve",
  "重新授权"
 ],
 [
  "agent",
  "代理"
 ],
 [
  "Increase",
  "提高"
 ],
 [
  "Swap to",
  "兑换为"
 ],
 [
  "base asset",
  "基础资产"
 ],
 [
  "Annualized return from the current funding-rate spread between the legs, before fees and slippage.",
  "按当前双腿资金费率差计算的年化收益率，未扣除手续费与滑点。"
 ],
 [
  "· median",
  "· 中位数"
 ],
 [
  "samples",
  "个样本"
 ],
 [
  "mid = (short bid + long ask) / 2",
  "中间价 =（空头买一价 + 多头卖一价）/ 2"
 ],
 [
  "Spread = (short bid − long ask) / mid",
  "价差 =（空头买一价 − 多头卖一价）/ 中间价"
 ],
 [
  "Open Edge = (short bid − long ask) / their mid",
  "开仓价差优势 =（空头买一价 − 多头卖一价）/ 两者中间价"
 ],
 [
  "Symbols",
  "资产代码"
 ],
 [
  "Vol 24h",
  "24 小时成交量"
 ],
 [
  "· OI",
  "· 未平仓量"
 ],
 [
  "Set",
  "设置"
 ],
 [
  "to",
  "至"
 ],
 [
  "Transfer",
  "划转"
 ],
 [
  "Total cost = DEX fee + estimated slippage, calculated from order book depth and your position size.",
  "总成本 = 去中心化交易所手续费 + 预估滑点，按订单簿深度与仓位规模计算。"
 ],
 [
  "CEX fee:",
  "中心化交易所手续费："
 ],
 [
  "DEX fee:",
  "去中心化交易所手续费："
 ],
 [
  "on",
  "在"
 ],
 [
  "on —",
  "在 —"
 ],
 [
  "Change",
  "更改"
 ],
 [
  "charges",
  "收取"
 ],
 [
  "bps",
  "基点"
 ],
 [
  "Manage",
  "管理"
 ],
 [
  "Mode.",
  "模式。"
 ],
 [
  "Switching...",
  "正在切换…"
 ],
 [
  "Main",
  "主导航"
 ],
 [
  "What's new",
  "更新日志"
 ],
 [
  "What's New",
  "更新日志"
 ],
 [
  "Latest Update",
  "最新更新"
 ],
 [
  "Perps Arena",
  "永续交易成本比较"
 ],
 [
  "User ID",
  "用户标识"
 ],
 [
  "Chain ID",
  "链标识"
 ],
 [
  "league",
  "联赛"
 ],
 [
  "Rank #",
  "排名 #"
 ],
 [
  "Apply code",
  "应用邀请码"
 ],
 [
  "Enable",
  "启用"
 ],
 [
  "Pick",
  "选择"
 ],
 [
  ". Under",
  "。在以下栏目中："
 ],
 [
  "choose",
  "选择"
 ],
 [
  "Keep",
  "保持"
 ],
 [
  "Check",
  "勾选"
 ],
 [
  "API secret",
  "API 私密密钥"
 ],
 [
  "addresses",
  "地址"
 ],
 [
  "· API Management",
  "· API 管理"
 ],
 [
  "Your",
  "您的"
 ],
 [
  "Rank",
  "排名"
 ],
 [
  "Disconnect",
  "断开连接"
 ],
 [
  "Enter",
  "输入"
 ],
 [
  "EVM Wallet (",
  "EVM 钱包（"
 ],
 [
  "of",
  "/"
 ],
 [
  "Oops!",
  "出现错误！"
 ],
 [
  "excluded",
  "已排除"
 ],
 [
  "Adjust Leverage",
  "调整杠杆"
 ],
 [
  "Available",
  "可用"
 ],
 [
  "Higher leverage increases position size but also raises liquidation risk.",
  "更高杠杆会增加仓位规模，也会提高强平风险。"
 ],
 [
  "unknown reason",
  "未知原因"
 ],
 [
  "Deposit in progress...",
  "充值处理中…"
 ],
 [
  "Invalid transfer parameters",
  "划转参数无效"
 ],
 [
  "Your transaction has been confirmed. Waiting for your transfer to be picked up...",
  "交易已确认，等待系统接收划转请求…"
 ],
 [
  "Your transaction has been detected. Waiting for the transfer to be processed.",
  "已检测到交易，等待处理划转。"
 ],
 [
  "Your transfer is complete. Funds have been delivered to the destination.",
  "划转已完成，资金已送达目标账户。"
 ],
 [
  "An unexpected error occurred during the transfer.",
  "划转过程中发生意外错误。"
 ],
 [
  "The transfer was refunded.",
  "划转资金已退回。"
 ],
 [
  "Transfer status polling timed out",
  "查询划转状态超时"
 ],
 [
  "Your transaction has been submitted. Waiting for on-chain confirmation...",
  "交易已提交，等待链上确认…"
 ],
 [
  "Your transaction has been submitted successfully.",
  "交易已成功提交。"
 ],
 [
  "Your transfer has been submitted successfully.",
  "划转已成功提交。"
 ],
 [
  "Stake 100 $LIT",
  "质押 100 $LIT"
 ],
 [
  "to reduce",
  "以降低"
 ],
 [
  "Lighter withdrawal fee",
  "Lighter 提现手续费"
 ],
 [
  "From",
  "来源"
 ],
 [
  "To",
  "目标"
 ],
 [
  "From:",
  "来源："
 ],
 [
  "To:",
  "目标："
 ],
 [
  "Transfer preparation failed",
  "准备划转失败"
 ],
 [
  "Please try again.",
  "请重试。"
 ],
 [
  "Lighter fee",
  "Lighter 手续费"
 ],
 [
  "VOOI fee",
  "VOOI 手续费"
 ],
 [
  "Transfer fee",
  "划转手续费"
 ],
 [
  "Transfer fee:",
  "划转手续费："
 ],
 [
  "Hyperliquid transfers require unified account mode.",
  "Hyperliquid 划转需要统一账户模式。"
 ],
 [
  "Sign and transfer",
  "签名并划转"
 ],
 [
  "Transferred",
  "已划转"
 ],
 [
  "Including DEX's withdrawal fee and a network fee",
  "包含去中心化交易所提现费与网络费"
 ],
 [
  "View on",
  "查看于"
 ],
 [
  "Explorer",
  "区块浏览器"
 ],
 [
  "View TX",
  "查看链上交易"
 ],
 [
  "No transfer margin history",
  "暂无保证金划转记录"
 ],
 [
  "Transfer margin history",
  "保证金划转记录"
 ],
 [
  "Back to Transfer",
  "返回划转"
 ],
 [
  "Back to Trade",
  "返回交易"
 ],
 [
  "position",
  "仓位"
 ],
 [
  "Gain",
  "盈利"
 ],
 [
  "Loss",
  "亏损"
 ],
 [
  "Set TP",
  "设置止盈"
 ],
 [
  "Set SL",
  "设置止损"
 ],
 [
  "fee",
  "手续费"
 ],
 [
  "a moment",
  "片刻"
 ],
 [
  "Maker / Maker",
  "挂单 / 挂单"
 ],
 [
  "Maker / Taker",
  "挂单 / 吃单"
 ],
 [
  "is going out now",
  "正在发送"
 ],
 [
  "steps",
  "步"
 ],
 [
  "Unhedged",
  "未对冲"
 ],
 [
  "Not open",
  "未开仓"
 ],
 [
  "in",
  "在"
 ],
 [
  "pair still has its",
  "该组合仍有"
 ],
 [
  "pairs still have their",
  "这些组合仍有"
 ],
 [
  "it",
  "该任务"
 ],
 [
  "them",
  "这些任务"
 ],
 [
  "Taker–Taker · split",
  "吃单—吃单 · 分步执行"
 ],
 [
  "Spread --",
  "价差 --"
 ],
 [
  "Size (",
  "规模（"
 ],
 [
  "Total (",
  "合计（"
 ],
 [
  "best bid",
  "买一价"
 ],
 [
  "best ask",
  "卖一价"
 ],
 [
  "Long ·",
  "多头 ·"
 ],
 [
  "Short ·",
  "空头 ·"
 ],
 [
  "Start",
  "启动"
 ],
 [
  "Liq",
  "强平价"
 ],
 [
  "N/A",
  "不适用"
 ],
 [
  "cost",
  "成本"
 ],
 [
  "earn",
  "赚取"
 ],
 [
  "floor",
  "门槛"
 ],
 [
  "cycle",
  "交易周期"
 ],
 [
  "cycles",
  "交易周期"
 ],
 [
  "pair",
  "组合"
 ],
 [
  "pairs",
  "组合"
 ],
 [
  "lower",
  "降低"
 ],
 [
  "raise",
  "提高"
 ],
 [
  "change",
  "更改"
 ],
 [
  "update",
  "更新"
 ],
 [
  "save",
  "保存"
 ],
 [
  "set",
  "设置"
 ],
 [
  "below",
  "低于"
 ],
 [
  "above",
  "高于"
 ],
 [
  "continuous",
  "连续满足"
 ],
 [
  "recheck",
  "到期复查"
 ],
 [
  "transaction",
  "交易"
 ],
 [
  "message",
  "消息"
 ],
 [
  "minimum",
  "最低"
 ],
 [
  "maximum",
  "最高"
 ],
 [
  "New arbitrage bot | VOOI Ultra",
  "新建套利机器人 | VOOI Ultra"
 ],
 [
  "Arbitrage bot | VOOI Ultra",
  "套利机器人 | VOOI Ultra"
 ],
 [
  "Edit arbitrage bot | VOOI Ultra",
  "编辑套利机器人 | VOOI Ultra"
 ],
 [
  "Arbitrage Bots | VOOI Ultra",
  "套利机器人 | VOOI Ultra"
 ],
 [
  "Create arbitrage bots that hold delta-neutral pairs across venues while the funding spread pays, and watch what each one holds.",
  "创建跨交易场所的 Delta 中性套利机器人，在资金费率差有利时持仓，并查看各机器人的仓位。"
 ],
 [
  "VOOI Arbitrage Desk - Multi-Venue Arbitrage Scanner and Terminal",
  "VOOI 套利终端 — 多场所套利扫描与交易"
 ],
 [
  "Scan funding and price spread on assets across Hyperliquid, Aster, Lighter, Extended, HIP-3 and Binance - execute it in one click simultaneously",
  "扫描 Hyperliquid、Aster、Lighter、Extended、HIP-3 及 Binance 的资产资金费率差与价差，并一键同时执行"
 ],
 [
  "Strategy not found · VOOI Ultra",
  "未找到策略 · VOOI Ultra"
 ],
 [
  "VOOI Ultra – Arbitrage Desk",
  "VOOI Ultra — 套利终端"
 ],
 [
  "Explore funding arbitrage opportunities across venues on VOOI Ultra and manage positions from a unified interface.",
  "在 VOOI Ultra 探索跨交易场所资金费套利机会，并通过统一界面管理仓位。"
 ],
 [
  "VOOI Ultra – Multi-Venue Perpetual Trading",
  "VOOI Ultra — 多场所永续合约交易"
 ],
 [
  "Trade perpetuals across Hyperliquid, Lighter, Aster, Extended, and Binance on VOOI Ultra. Compare quotes, execute orders, and manage margin from one non-custodial interface.",
  "在 VOOI Ultra 交易 Hyperliquid、Lighter、Aster、Extended 与 Binance 的永续合约，通过统一的非托管界面比较报价、执行委托和管理保证金。"
 ],
 [
  "VOOI Arbitrage Desk - Single-Leg Funding Scanner",
  "VOOI 套利终端 — 单腿资金费率扫描"
 ],
 [
  "Find the highest funding on a single position across every venue VOOI trades - open the side that gets paid in one click",
  "在 VOOI 支持的所有交易场所中寻找单腿最高资金费率，一键建立收取资金费的方向"
 ],
 [
  "VOOI Ultra – Transfer Margin",
  "VOOI Ultra — 保证金划转"
 ],
 [
  "Move free collateral between Hyperliquid, Lighter, and Aster on VOOI Ultra. Cross-venue margin coordination without withdrawing to your wallet.",
  "在 VOOI Ultra 将可用抵押品划转于 Hyperliquid、Lighter 与 Aster 之间，无需先提现至钱包。"
 ],
 [
  "VOOI Ultra – Transfer History",
  "VOOI Ultra — 划转历史"
 ],
 [
  "What's New | VOOI Ultra",
  "更新日志 | VOOI Ultra"
 ],
 [
  "MEXC notification centre with System Notifications selected in the left sidebar",
  "MEXC 通知中心，左侧已选择系统通知"
 ],
 [
  "MEXC Identification page showing an Advanced KYC card marked Verified",
  "MEXC 身份认证页面，高级认证卡片显示已认证"
 ],
 [
  "Gate Create API Key with a name in API Key Remark, our IPs pasted under IP Permissions with Bind IP selected, Trading Account as the account type, and Read And Write on Spot Trading, Perpetual Futures, Stocks and Margin Trading (Unified Account) with every other permission left off",
  "Gate 创建 API 密钥页面：填写密钥备注，选择交易账户，绑定 VOOI IP；开启现货、永续合约、股票及统一账户杠杆交易的读取与写入权限，关闭其他权限"
 ],
 [
  "MEXC Create New API Key with View Account Details checked under Spot and Futures, View Order Details and Order Placing checked under Futures, P2P off, a name in the required Notes field, and our IPs in the optional Link IP Address field",
  "MEXC 创建 API 密钥页面：现货与合约开启查看账户详情；合约开启查看委托详情和下单；关闭 P2P，填写备注，并可关联 VOOI IP"
 ],
 [
  "min",
  "分钟"
 ],
 [
  "sec",
  "秒"
 ],
 [
  "hr",
  "小时"
 ],
 [
  "hrs",
  "小时"
 ],
 [
  "Savings –",
  "节省 –"
 ],
 [
  "🔥 Oil",
  "🔥 原油"
 ],
 [
  "Markets ·",
  "市场 ·"
 ],
 [
  "Page",
  "页码"
 ],
 [
  "markets",
  "个市场"
 ],
 [
  "One Desk | Seven Perp Venues",
  "一个终端 | 七个永续交易场所"
 ],
 [
  "Every market, every venue, one trading interface.",
  "所有市场、所有交易场所，统一交易界面。"
 ],
 [
  "Long or short, execute strategies, let your AI Agent trade across Hyperliquid perps, Lighter perps, Aster perps, Extended perps, Binance perps, trade.xyz RWA perps, and Kinetiq perps.",
  "做多、做空并执行交易策略，让 AI 代理跨 Hyperliquid、Lighter、Aster、Extended、Binance、trade.xyz 现实世界资产及 Kinetiq 永续市场交易。"
 ],
 [
  "Arbitrage Desk Strategies",
  "套利终端策略"
 ],
 [
  "Eligibility",
  "参与资格"
 ],
 [
  "Version",
  "版本"
 ],
 [
  "Use",
  "使用"
 ],
 [
  "Open Interest Bot",
  "未平仓量机器人"
 ],
 [
  "The Perp Fee & Slippage Comparator",
  "永续合约手续费与滑点比较工具"
 ],
 [
  "Perps Arena is VOOI Ultra’s live execution-cost comparator for the top perpetual exchanges. Pick a pair, position size, leverage and direction, and instantly see total entry cost — maker/taker fees, expected slippage and current funding — across Hyperliquid, trade.xyz, Kinetiq, Lighter, Robinhood, Aster, Extended, Ondo, Polymarket, Binance, MEXC, Bybit, Ostium, GMX and gTrade. Find the cheapest venue for your trade size before you commit capital. Updated in real time from live order books and oracle feeds.",
  "这是 VOOI Ultra 面向主流永续交易所的实时执行成本比较工具。选择交易对、仓位规模、杠杆与方向，即可查看 Hyperliquid、trade.xyz、Kinetiq、Lighter、Robinhood、Aster、Extended、Ondo、Polymarket、Binance、MEXC、Bybit、Ostium、GMX 和 gTrade 的总开仓成本，包括挂单与吃单手续费、预估滑点及当前资金费。在投入资金前，为您的交易规模寻找成本最低的场所。数据依据实时订单簿与预言机报价持续更新。"
 ],
 [
  "Trade Ondo Perps markets through VOOI. Share up to $15,500 in USDC rewards.",
  "通过 VOOI 交易 Ondo 永续合约市场，瓜分最高 $15,500 USDC 奖励。"
 ],
 [
  "Trade Polymarket Perps markets through VOOI from Oct 29 to Nov 11. Share up to $15,000 in rewards.",
  "于 10 月 29 日至 11 月 11 日通过 VOOI 交易 Polymarket 永续合约市场，瓜分最高 $15,000 奖励。"
 ],
 [
  "Trade Robinhood Perps markets through VOOI from Oct 28 to Nov 10. Share up to $10,000 in USDC or LIT.",
  "于 10 月 28 日至 11 月 10 日通过 VOOI 交易 Robinhood 永续合约市场，瓜分最高 $10,000 的 USDC 或 LIT 奖励。"
 ],
 [
  "Financial Chart",
  "金融图表"
 ],
 [
  "0% retail trading fees; white-label Lighter deployment on Robinhood Chain, USDG-collateralized, up to 50x leverage.",
  "零售交易手续费为 0%；Lighter 在 Robinhood Chain 上的白标部署，以 USDG 为保证金，最高 50 倍杠杆。"
 ],
 [
  "0.035% taker / 0.01% maker, up to 1001x leverage, hidden-order support.",
  "吃单费率 0.035%、挂单费率 0.01%，最高 1001 倍杠杆，支持隐藏委托。"
 ],
 [
  "0.025% taker / 0.01% maker on most markets (promotional, half the 0.05% / 0.02% base; a few stocks pay 0.035% / 0.015%), tokenized US stocks and crypto perps, USD-settled.",
  "多数市场吃单费率 0.025%、挂单费率 0.01%，为基础费率 0.05% / 0.02% 的半价优惠；少数股票为 0.035% / 0.015%。支持代币化美股与加密资产永续合约，以美元结算。"
 ],
 [
  "first HIP-3 deployer on Hyperliquid; 24/7 RWA perps (oil, gold, S&P 500).",
  "Hyperliquid 首个 HIP-3 部署方，提供全天候现实世界资产永续合约，包括原油、黄金及标普 500。"
 ],
 [
  "Large size (>$500k)",
  "大规模交易（超过 $500k）"
 ],
 [
  "Do perp DEXs have hidden fees?",
  "永续去中心化交易所有隐性费用吗？"
 ],
 [
  "Overview",
  "概览"
 ],
 [
  "Why it’s safe",
  "安全性说明"
 ],
 [
  "QR Code",
  "二维码"
 ],
 [
  "Staking & Claim $VOOI",
  "质押与领取 $VOOI"
 ],
 [
  "Connect a Wallet",
  "连接钱包"
 ],
 [
  "Scan with your wallet",
  "使用钱包扫码"
 ],
 [
  "Copy link to clipboard",
  "复制链接到剪贴板"
 ],
 [
  "Routing",
  "交易路由"
 ],
 [
  "see",
  "查看"
 ],
 [
  "Methodology",
  "计算方法"
 ],
 [
  "Explore",
  "探索"
 ],
 [
  "Ultra · Trading API",
  "Ultra · 交易接口"
 ],
 [
  "Trading API",
  "交易接口"
 ],
 [
  "Connect your AI assistant or trading bot to VOOI. Trade perps across Hyperliquid, Lighter, Aster, Extended, and Binance from one API.",
  "将 AI 助手或交易机器人连接至 VOOI，通过统一接口交易 Hyperliquid、Lighter、Aster、Extended 和 Binance 的永续合约。"
 ],
 [
  "Generate a key for your bot or assistant.",
  "为机器人或助手生成访问密钥。"
 ],
 [
  "Create a Token",
  "创建访问令牌"
 ],
 [
  "Paste the snippet for Claude, Codex, Cursor, or any MCP client.",
  "粘贴适用于 Claude、Codex、Cursor 或其他 MCP 客户端的配置片段。"
 ],
 [
  "Set up your client",
  "配置客户端"
 ],
 [
  "Quotes, positions, and orders through one layer.",
  "通过统一接口访问报价、持仓与委托。"
 ],
 [
  "Trade with AI",
  "通过 AI 交易"
 ],
 [
  "MCP Setup instructions",
  "MCP 配置说明"
 ],
 [
  "Pick your client. Replace",
  "选择客户端，并替换"
 ],
 [
  "with a token from above.",
  "为上方创建的访问令牌。"
 ],
 [
  "Pick your client — your token is filled in below.",
  "选择客户端，下方已自动填入您的访问令牌。"
 ],
 [
  "Claude menu → Settings → Developer",
  "Claude 菜单 → 设置 → 开发者"
 ],
 [
  "and click",
  "并点击"
 ],
 [
  "Edit Config",
  "编辑配置"
 ],
 [
  ". Paste this into the file, then quit and reopen Claude.",
  "。将以下内容粘贴到配置文件中，然后退出并重新打开 Claude。"
 ],
 [
  "Config file location:",
  "配置文件位置："
 ],
 [
  "(Windows). Claude Desktop loads remote servers through",
  "（Windows）。Claude Desktop 通过以下工具加载远程服务器："
 ],
 [
  ", which requires Node.js.",
  "，其运行需要 Node.js。"
 ],
 [
  "Claude Desktop MCP docs",
  "Claude Desktop MCP 文档"
 ],
 [
  "Run this command in your terminal:",
  "在终端运行以下命令："
 ],
 [
  "TERMINAL",
  "终端"
 ],
 [
  "Add",
  "添加"
 ],
 [
  "to make the server available across every project.",
  "以使该服务器在所有项目中可用。"
 ],
 [
  "Claude Code MCP docs",
  "Claude Code MCP 文档"
 ],
 [
  "and append:",
  "并追加以下内容："
 ],
 [
  "Codex CLI supports streamable HTTP MCP servers natively via",
  "Codex CLI 原生支持可流式 HTTP MCP 服务器，使用字段"
 ],
 [
  ". Restart your Codex session after saving.",
  "。保存后重新启动 Codex 会话。"
 ],
 [
  "Codex config reference",
  "Codex 配置参考"
 ],
 [
  "Settings → Tools & Integrations → MCP",
  "设置 → 工具与集成 → MCP"
 ],
 [
  "Add new MCP Server",
  "添加 MCP 服务器"
 ],
 [
  ", or paste this into",
  "，或将以下内容粘贴至"
 ],
 [
  "Cursor picks up the change live.",
  "Cursor 会实时应用更改。"
 ],
 [
  "Cursor MCP docs",
  "Cursor MCP 文档"
 ],
 [
  "Don't see your client? Paste this prompt into any AI assistant — it'll generate the config for your tool:",
  "没有找到您的客户端？将以下提示词粘贴到 AI 助手，它将为您的工具生成配置："
 ],
 [
  "PROMPT",
  "提示词"
 ],
 [
  "The prompt tells the AI to leave",
  "提示词要求 AI 保留"
 ],
 [
  "as a placeholder, so your real token never reaches a third-party AI — paste it into the generated config yourself.",
  "作为占位符，真实令牌不会发送给第三方 AI。请自行将令牌填入生成的配置。"
 ],
 [
  "Session not found — please sign in again",
  "未找到会话，请重新登录"
 ],
 [
  "Failed to create token",
  "创建访问令牌失败"
 ],
 [
  "Signed out: key pair missing",
  "已退出登录：缺少密钥对"
 ],
 [
  "Custom date",
  "自定义日期"
 ],
 [
  "New Token",
  "新建访问令牌"
 ],
 [
  "Create new token",
  "创建访问令牌"
 ],
 [
  "Connect your AI assistant or trading bot to VOOI.",
  "将 AI 助手或交易机器人连接至 VOOI。"
 ],
 [
  "e.g. trading-bot",
  "例如：套利机器人"
 ],
 [
  "Generate",
  "生成"
 ],
 [
  "Expires in",
  "有效期"
 ],
 [
  "Create token",
  "创建访问令牌"
 ],
 [
  "Pick how long this token stays valid.",
  "选择访问令牌的有效期限。"
 ],
 [
  "Token copied to clipboard",
  "访问令牌已复制到剪贴板"
 ],
 [
  "Save your token",
  "保存访问令牌"
 ],
 [
  "This is the only time you'll see this token.",
  "此访问令牌仅显示一次。"
 ],
 [
  "Token",
  "访问令牌"
 ],
 [
  "Save it somewhere safe — we can't show it again.",
  "请妥善保存，之后将无法再次查看。"
 ],
 [
  "I've saved my token in a safe place",
  "我已安全保存访问令牌"
 ],
 [
  "Copy token",
  "复制访问令牌"
 ],
 [
  "Deleting token…",
  "正在删除访问令牌…"
 ],
 [
  "Failed to delete token",
  "删除访问令牌失败"
 ],
 [
  "Token deleted",
  "访问令牌已删除"
 ],
 [
  "Delete \"",
  "删除“"
 ],
 [
  "Are you sure you want to delete this token?",
  "确定删除此访问令牌吗？"
 ],
 [
  "Any tool using this token will stop working immediately.",
  "使用该令牌的所有工具将立即停止工作。"
 ],
 [
  "Expires",
  "到期时间"
 ],
 [
  "Unnamed",
  "未命名"
 ],
 [
  "Failed to load tokens.",
  "加载访问令牌失败。"
 ],
 [
  "No tokens yet.",
  "暂无访问令牌。"
 ],
 [
  "Create your first one to connect an AI assistant.",
  "创建第一个访问令牌以连接 AI 助手。"
 ],
 [
  "Expired",
  "已过期"
 ],
 [
  "Your tokens",
  "您的访问令牌"
 ],
 [
  "Connect your AI assistant or trading bot to VOOI. Trade perps across Hyperliquid, Lighter, and Aster from one API. Keep them safe.",
  "将 AI 助手或交易机器人连接至 VOOI，通过统一接口交易 Hyperliquid、Lighter 和 Aster 的永续合约。请妥善保管访问令牌。"
 ],
 [
  "to manage tokens",
  "以管理访问令牌"
 ],
 [
  "VOOI Ultra – Trading API",
  "VOOI Ultra — 交易接口"
 ],
 [
  "Trading API | VOOI Ultra",
  "交易接口 | VOOI Ultra"
 ],
 [
  "7D",
  "7 天"
 ],
 [
  "30D",
  "30 天"
 ],
 [
  "1D",
  "1 天"
 ],
 [
  "Volume on VOOI",
  "VOOI 成交量"
 ],
 [
  "Sign in to VOOI",
  "登录 VOOI"
 ],
 [
  "Sign in to see your volume and PnL across every exchange you trade on VOOI Ultra.",
  "登录以查看您通过 VOOI Ultra 在各交易所的成交量与盈亏。"
 ],
 [
  "Adding up your volume",
  "正在汇总成交量"
 ],
 [
  "Splitting your volume by exchange",
  "正在按交易所拆分成交量"
 ],
 [
  "Working out your net PnL",
  "正在计算净盈亏"
 ],
 [
  "Netting your funding payments",
  "正在汇总净资金费"
 ],
 [
  "Counting your fills",
  "正在统计成交笔数"
 ],
 [
  "Reading your open positions",
  "正在读取当前持仓"
 ],
 [
  "Checking every venue you trade",
  "正在检查各交易场所"
 ],
 [
  "Sorting your trades by day",
  "正在按日整理成交"
 ],
 [
  "Totalling your equity",
  "正在汇总账户权益"
 ],
 [
  "Going through your order history",
  "正在读取历史委托"
 ],
 [
  "Matching each trade to its venue",
  "正在匹配成交与交易场所"
 ],
 [
  "Adding up what you routed through VOOI",
  "正在汇总经由 VOOI 执行的交易"
 ],
 [
  "Tallying your realized PnL",
  "正在统计已实现盈亏"
 ],
 [
  "Portfolio summary",
  "资产组合概要"
 ],
 [
  "VOOI volume",
  "VOOI 成交量"
 ],
 [
  "Net PnL",
  "净盈亏"
 ],
 [
  "Equity",
  "账户权益"
 ],
 [
  "What your connected venues hold right now, unrealized PnL included — the period doesn't scope it",
  "已连接交易场所当前持有的资产，包含未实现盈亏，不受所选统计周期限制"
 ],
 [
  "Portfolio | VOOI Ultra",
  "资产组合 | VOOI Ultra"
 ],
 [
  "Your personal trading portfolio on VOOI Ultra — volume and net PnL over time, broken down by exchange, for any period.",
  "您的 VOOI Ultra 交易资产组合，按交易所和任意周期查看成交量与净盈亏变化。"
 ],
 [
  "Couldn't load your portfolio",
  "无法加载资产组合"
 ],
 [
  "Something went wrong fetching your trading activity. Try switching the period or refreshing the page.",
  "获取交易记录时发生错误，请切换周期或刷新页面。"
 ],
 [
  "Code",
  "邀请码"
 ],
 [
  "Referral link",
  "邀请链接"
 ],
 [
  "Uses",
  "使用次数"
 ],
 [
  "Created",
  "创建时间"
 ],
 [
  "Copy link",
  "复制链接"
 ],
 [
  "Create your first referral code to invite friends to VOOI Ultra",
  "创建首个邀请码，邀请朋友使用 VOOI Ultra"
 ],
 [
  "All your codes",
  "您的全部邀请码"
 ],
 [
  "Referral code applied",
  "邀请码已应用"
 ],
 [
  "Enter a friend’s referral code",
  "输入朋友的邀请码"
 ],
 [
  "They get credit for your trades — one code per account",
  "您的交易将计入对方的邀请返佣，每个账户仅可绑定一个邀请码"
 ],
 [
  "Referral code",
  "邀请码"
 ],
 [
  "Invalid or already used code — check it and try again",
  "邀请码无效或已使用，请检查后重试"
 ],
 [
  "Your rebate",
  "您的返佣比例"
 ],
 [
  "of the VOOI fees you pay",
  "按您支付的 VOOI 手续费计算"
 ],
 [
  "Code applied",
  "已应用邀请码"
 ],
 [
  "One code per account",
  "每个账户仅可绑定一个邀请码"
 ],
 [
  "Your trading rebates",
  "您的交易返佣"
 ],
 [
  "Earned",
  "已赚取"
 ],
 [
  "Your trading volume",
  "您的成交量"
 ],
 [
  "Only trades placed after the code is applied are counted",
  "仅统计绑定邀请码后的交易"
 ],
 [
  "Couldn’t load your referral link. Reload the page.",
  "无法加载邀请链接，请刷新页面。"
 ],
 [
  "No one has joined with your link yet — share it with friends",
  "尚无人通过您的链接加入，分享给朋友吧"
 ],
 [
  "trader has joined",
  "位交易者已加入"
 ],
 [
  "traders have joined",
  "位交易者已加入"
 ],
 [
  "with your link",
  "通过您的邀请链接"
 ],
 [
  "Get your code",
  "获取邀请码"
 ],
 [
  "Copy code",
  "复制邀请码"
 ],
 [
  "Referral rebates",
  "邀请返佣"
 ],
 [
  "You get",
  "您可获得"
 ],
 [
  "of the VOOI fees your referrals pay",
  "按受邀用户支付的 VOOI 手续费计算"
 ],
 [
  "Your referrals get",
  "受邀用户可获得"
 ],
 [
  "of the VOOI fees they pay",
  "按其支付的 VOOI 手续费计算"
 ],
 [
  "Venue referral codes",
  "交易场所邀请码"
 ],
 [
  "Traders who join with",
  "通过以下方式加入的交易者："
 ],
 [
  "register under your own",
  "将注册在您的"
 ],
 [
  "Referrer rebates",
  "邀请人返佣"
 ],
 [
  "Trading rebates",
  "交易返佣"
 ],
 [
  "Period",
  "统计周期"
 ],
 [
  "What you earned in the period, from your referrals’ trades and your own",
  "所选周期内，从受邀用户及您自身交易中获得的返佣"
 ],
 [
  "Transaction",
  "链上交易"
 ],
 [
  "Payments are unavailable right now — reload the page",
  "返佣支付数据暂不可用，请刷新页面"
 ],
 [
  "No rebates yet — invite friends to start earning",
  "暂无返佣，邀请朋友即可开始累积"
 ],
 [
  "Total earned",
  "累计收益"
 ],
 [
  "All-time rebates",
  "历史累计返佣"
 ],
 [
  "Pending",
  "待处理"
 ],
 [
  "Awaiting confirmations and payment",
  "等待确认与支付"
 ],
 [
  "Paid out",
  "已支付"
 ],
 [
  "Successfully paid",
  "支付成功"
 ],
 [
  "Rebates are paid out after each period closes",
  "返佣在每个统计周期结束后发放"
 ],
 [
  "Payment history",
  "支付记录"
 ],
 [
  "Referral statistics",
  "邀请统计"
 ],
 [
  "New referrals",
  "新增受邀用户"
 ],
 [
  "Active referrals",
  "活跃受邀用户"
 ],
 [
  "Referrals’ volume",
  "受邀用户成交量"
 ],
 [
  "Your rebates",
  "您的返佣"
 ],
 [
  "Referrals’ rebates",
  "受邀用户返佣"
 ],
 [
  "No referrals in this period yet",
  "所选周期暂无受邀用户"
 ],
 [
  "Referral",
  "受邀用户"
 ],
 [
  "What you earned from the VOOI fees on each referral’s trades. The column adds up to Your rebates above.",
  "您从各受邀用户交易所付 VOOI 手续费中获得的返佣。此列合计对应上方“您的返佣”。"
 ],
 [
  "Your referral stats",
  "您的邀请数据"
 ],
 [
  "Referrals | VOOI Ultra",
  "邀请返佣 | VOOI Ultra"
 ],
 [
  "Get your referral link and bring friends to VOOI Ultra. Every trader who joins with your code counts as your referral.",
  "获取邀请链接，邀请朋友使用 VOOI Ultra。每位通过您的邀请码加入的交易者均计为受邀用户。"
 ],
 [
  "Invite friends to VOOI Ultra",
  "邀请朋友使用 VOOI Ultra"
 ],
 [
  "Your referral code is reusable. Share one link and every trader who joins with it counts as your referral.",
  "您的邀请码可重复使用。分享同一个链接，通过该链接加入的交易者均计为受邀用户。"
 ],
 [
  "Invite friends",
  "邀请朋友"
 ],
 [
  "Payments",
  "返佣支付"
 ],
 [
  "Invite | VOOI Ultra",
  "邀请 | VOOI Ultra"
 ],
 [
  "Opening VOOI Ultra…",
  "正在打开 VOOI Ultra…"
 ],
 [
  "You've been invited. Your invite code will apply automatically once you sign in.",
  "您已收到邀请，登录后将自动应用邀请码。"
 ],
 [
  "No Entries",
  "暂无记录"
 ],
 [
  "All markets",
  "全部市场"
 ],
 [
  "Live market",
  "实时市场"
 ],
 [
  "on VOOI Ultra",
  "在 VOOI Ultra"
 ],
 [
  "Volume-weighted price",
  "成交量加权价格"
 ],
 [
  "Arbitrage Funding Rates",
  "资金费率套利"
 ],
 [
  "Max leverage ·",
  "最高杠杆 ·"
 ],
 [
  "Background",
  "背景资料"
 ],
 [
  "Perp Trading on VOOI Ultra",
  "在 VOOI Ultra 交易永续合约"
 ],
 [
  "All strategies",
  "全部策略"
 ],
 [
  "Keep exploring",
  "继续探索"
 ],
 [
  "Other markets traders watch",
  "其他热门关注市场"
 ],
 [
  "Trade on",
  "交易于"
 ],
 [
  "Metric",
  "指标"
 ],
 [
  "USD notional",
  "美元名义价值"
 ],
 [
  "Market not found",
  "未找到市场"
 ],
 [
  "Pick a market to see venue-by-venue data.",
  "选择市场以查看各交易场所的数据。"
 ],
 [
  "Browse all markets",
  "浏览全部市场"
 ],
 [
  "Top strategy",
  "最优策略"
 ],
 [
  "See all (+",
  "查看全部（+"
 ],
 [
  "Previous page",
  "上一页"
 ],
 [
  "Next page",
  "下一页"
 ],
 [
  "Platform statistics",
  "平台统计"
 ],
 [
  "24h trading volume",
  "24 小时成交量"
 ],
 [
  "Live markets",
  "实时市场"
 ],
 [
  "DEXs aggregated",
  "已聚合去中心化交易所"
 ],
 [
  "Top funding spread",
  "最高资金费率差"
 ],
 [
  "Perps Pulse · Live",
  "永续市场动态 · 实时"
 ],
 [
  "All RWA & Crypto",
  "全部现实世界资产与加密资产"
 ],
 [
  "Perp Markets,",
  "永续合约市场，"
 ],
 [
  "In One View",
  "一览无余"
 ],
 [
  "Compare 24h volume, funding rates, and open interest across Hyperliquid, Lighter, Robinhood, Aster, Extended, Binance, MEXC, Bybit, Gate, Polymarket, trade.xyz and Kinetiq markets — trade on the venue that fits your edge.",
  "比较 Hyperliquid、Lighter、Robinhood、Aster、Extended、Binance、MEXC、Bybit、Gate、Polymarket、trade.xyz 与 Kinetiq 市场的 24 小时成交量、资金费率及未平仓量，选择适合您策略的交易场所。"
 ],
 [
  "Start Trading",
  "开始交易"
 ],
 [
  "Farm Funding Rates",
  "赚取资金费"
 ],
 [
  "Today's headlines",
  "今日市场焦点"
 ],
 [
  "| Updates every 30s",
  "| 每 30 秒更新"
 ],
 [
  "Top gainer",
  "涨幅最高"
 ],
 [
  "Top loser",
  "跌幅最高"
 ],
 [
  "Top funding arb",
  "最佳资金费套利"
 ],
 [
  "No spreads available.",
  "暂无价差数据。"
 ],
 [
  "Today's top markets",
  "今日热门市场"
 ],
 [
  "Top gainers",
  "涨幅榜"
 ],
 [
  "Top losers",
  "跌幅榜"
 ],
 [
  "Top volume",
  "成交量榜"
 ],
 [
  "Today's leaders",
  "今日领先市场"
 ],
 [
  "Perp Markets Overview",
  "永续合约市场概览"
 ],
 [
  "Perpetual Market · VOOI Ultra",
  "永续合约市场 · VOOI Ultra"
 ],
 [
  "What is a perpetual future?",
  "什么是永续合约？"
 ],
 [
  "A perpetual future tracks the spot price of an asset without an expiry date. Traders post collateral to control a larger notional position and pay or receive a periodic funding fee that keeps the perpetual price aligned with spot.",
  "永续合约追踪资产现货价格，没有到期日。交易者提供抵押品以建立更大的名义仓位，并定期支付或收取资金费，使永续合约价格与现货价格保持接近。"
 ],
 [
  "How is the funding rate set?",
  "资金费率如何确定？"
 ],
 [
  "Use the Arbitrage Desk to spot delta-neutral spreads across two supported venues. Farm the difference per venue and execute low-risk trading strategy via VOOI with historical backtests and one-click funding rate arbitrage strategy setup.",
  "使用套利终端寻找两个支持的交易场所之间的 Delta 中性套利机会。通过 VOOI 查看历史回测、一键配置资金费率套利策略，并赚取不同场所间的费率差。原平台将其描述为较低风险交易策略。"
 ],
 [
  "Set a max wait between 1 minute and 24 hours",
  "最长等待时间须为 1 分钟至 24 小时"
 ],
 [
  "back to back",
  "连续执行"
 ],
 [
  "no slippage check",
  "不检查滑点"
 ],
 [
  "Stop loss filled",
  "止损已成交"
 ],
 [
  "Take profit filled",
  "止盈已成交"
 ],
 [
  "Order filled",
  "委托已成交"
 ],
 [
  "See order history for details.",
  "详情请查看历史委托。"
 ],
 [
  "Position liquidated",
  "仓位已被强平"
 ],
 [
  "Order failed",
  "委托失败"
 ],
 [
  "Order partially filled",
  "委托部分成交"
 ],
 [
  "Order canceled",
  "委托已撤销"
 ],
 [
  "Slippage timeout",
  "等待滑点满足要求超时"
 ],
 [
  "Arbitrage order accepted",
  "套利委托已接受"
 ],
 [
  "Nothing filled.",
  "未发生成交。"
 ],
 [
  "Arbitrage order canceled",
  "套利委托已撤销"
 ],
 [
  "One leg may be open on its own. Check Arbitrage Positions.",
  "其中一腿可能处于单侧持仓，请检查套利持仓。"
 ],
 [
  "Arbitrage order stopped",
  "套利委托已停止"
 ],
 [
  "First leg filled, hedging now",
  "第一腿已成交，正在对冲"
 ],
 [
  "Arbitrage pair is open",
  "套利组合已开仓"
 ],
 [
  "Maker leg is resting",
  "挂单腿正在等待成交"
 ],
 [
  "Sequential order in progress",
  "顺序委托执行中"
 ],
 [
  "Nothing closed.",
  "未关闭任何仓位。"
 ],
 [
  "One leg may still be open. Check Arbitrage Positions.",
  "可能仍有一腿未平仓，请检查套利持仓。"
 ],
 [
  "Arbitrage close order filled",
  "套利平仓委托已成交"
 ],
 [
  "No exchange fees · 0 / 0 bps",
  "交易所手续费为零 · 0 / 0 基点"
 ],
 [
  "Stake-based fees, lower latency · From 0.4 / 2.8 bps, up to 48k tx/min",
  "按质押等级计费，低延迟 · 挂单 / 吃单费率低至 0.4 / 2.8 基点，每分钟最高 48,000 笔"
 ],
 [
  "Flat fees, higher rate limits · 0.5 / 0.5 bps, 4k tx/min",
  "固定费率，更高请求额度 · 0.5 / 0.5 基点，每分钟 4,000 笔"
 ],
 [
  "Volume-based fees, lower latency · From 1.2 / 3.5 bps, up to 24k tx/min",
  "按成交量等级计费，低延迟 · 挂单 / 吃单费率低至 1.2 / 3.5 基点，每分钟最高 24,000 笔"
 ],
 [
  "Markets took too long to load.",
  "市场数据加载超时。"
 ],
 [
  "Invalid number format",
  "数值格式无效"
 ],
 [
  "Liquidate immediately if traded",
  "执行交易将立即触发强平"
 ],
 [
  "Mexc error:",
  "MEXC 错误："
 ],
 [
  "Bybit requires a one-time trading agreement",
  "Bybit 要求首次接受交易协议"
 ],
 [
  "Too many extra agents",
  "额外代理数量过多"
 ],
 [
  "Invalid or expired session",
  "会话无效或已过期"
 ],
 [
  "HTTP request failed.",
  "HTTP 请求失败。"
 ],
 [
  "RPC Request failed.",
  "RPC 请求失败。"
 ],
 [
  "The request took too long to respond.",
  "请求响应超时。"
 ],
 [
  "The request timed out.",
  "请求超时。"
 ],
 [
  "User rejected the request.",
  "用户已拒绝请求。"
 ],
 [
  "An unknown RPC error occurred.",
  "发生未知 RPC 错误。"
 ],
 [
  "execution reverted",
  "交易执行已回滚"
 ],
 [
  "Insufficient funds",
  "资金不足"
 ],
 [
  "Insufficient balance",
  "余额不足"
 ],
 [
  "Cross-exchange perpetual futures data on VOOI Ultra. Compare price, funding, and open interest across Hyperliquid, Lighter, Aster, Extended, Binance, trade.xyz, Kinetiq, and Entropy.",
  "VOOI Ultra 跨交易所永续合约数据，比较 Hyperliquid、Lighter、Aster、Extended、Binance、trade.xyz、Kinetiq 和 Entropy 的价格、资金费率与未平仓量。"
 ],
 [
  "It may not be listed on Hyperliquid, Lighter, Aster, Extended, trade.xyz, Kinetiq, or Entropy right now. Head back to the markets overview to find a tradeable symbol.",
  "该资产当前可能未在 Hyperliquid、Lighter、Aster、Extended、trade.xyz、Kinetiq 或 Entropy 上线，请返回市场概览选择可交易资产。"
 ],
 [
  "Categories:",
  "资产类别："
 ],
 [
  "Ostium combines open & close into one upfront fee. This is the per-trade half.",
  "Ostium 将开平仓费用合并预收，此处显示单次交易对应的一半。"
 ],
 [
  "+ Oracle fee",
  "+ 预言机费用"
 ],
 [
  "Est. funding",
  "预估资金费"
 ],
 [
  "Execute",
  "执行交易"
 ],
 [
  "Market is closed. Quotes available during trading hours.",
  "市场已休市，交易时段内提供报价。"
 ],
 [
  "Execute best",
  "按最优报价执行"
 ],
 [
  "Continue exploring VOOI Ultra",
  "继续探索 VOOI Ultra"
 ],
 [
  "Trade on VOOI Ultra",
  "在 VOOI Ultra 交易"
 ],
 [
  "How Perps Arena compares perp DEX execution costs",
  "永续交易成本比较如何对比各去中心化交易所"
 ],
 [
  "Perps Arena pulls top-of-book quotes, simulates impact for the chosen notional, adds the venue’s posted fee schedule, and overlays current funding.",
  "本工具获取订单簿最优报价，按指定名义价值模拟价格冲击，再加入交易场所公布的手续费和当前资金费率。"
 ],
 [
  "The cheapest headline fee isn’t always the cheapest total — funding and slippage can dominate at $500k+ size (per neuralarb.com 2026 analysis: “At $500K+ position size, Hyperliquid slippage (≈12 bps) begins to approach the funding spread itself”).",
  "最低名义手续费不一定对应最低总成本。规模超过 $500k 时，资金费和滑点可能成为主要成本。原平台引用 neuralarb.com 2026 年分析称：该规模下 Hyperliquid 约 12 个基点的滑点已开始接近资金费率差本身。"
 ],
 [
  "How Perps Arena estimates slippage",
  "本工具如何估算滑点"
 ],
 [
  "Simulates a market order against current order-book depth (CLOB venues) or the oracle/pool model (AMM venues), normalized to bps. Surfaces a single all-in cost in the same units across heterogeneous venue models.",
  "针对中央限价订单簿场所，按当前深度模拟市价成交；针对自动做市场所，使用预言机与资金池模型。将各类成本统一换算为基点，以同一单位比较不同场所的总成本。"
 ],
 [
  "Fee snapshot by venue (2026)",
  "各交易场所费用快照（2026 年）"
 ],
 [
  "0.045% taker / 0.015% maker (base tier), no gas, hourly funding. At $500M+ 14-day volume, top maker tier earns a −0.003% rebate (Hyperliquid Docs).",
  "基础档吃单费率 0.045%、挂单费率 0.015%，无 Gas 费，每小时结算资金费。14 天成交量达 $500M 以上时，最高挂单档可获 −0.003% 返佣（据 Hyperliquid 文档）。"
 ],
 [
  "0% retail trading fees, zk-rollup on Arbitrum, up to 50x leverage.",
  "零售交易手续费为 0%，基于 Arbitrum 的零知识汇总网络，最高 50 倍杠杆。"
 ],
 [
  "0.025% taker / 0% maker (maker rebates up to 0.013%), Starknet orderbook perp DEX, up to 100x leverage.",
  "吃单费率 0.025%、挂单费率 0%（挂单返佣最高 0.013%），基于 Starknet 的订单簿永续交易所，最高 100 倍杠杆。"
 ],
 [
  "0.04% taker / 0.0125% maker (base tier), hourly funding, USD-quoted perps on crypto, stocks, indices and commodities.",
  "基础档吃单费率 0.04%、挂单费率 0.0125%，每小时结算资金费，支持以美元计价的加密资产、股票、指数及大宗商品永续合约。"
 ],
 [
  "0.05% taker / 0.02% maker (VIP 0) on USDⓈ-M perps, extra 10% off with BNB, up to 125x leverage, 8-hour funding. Deepest perp liquidity of any venue.",
  "USDⓈ 本位永续合约 VIP 0 吃单费率 0.05%、挂单费率 0.02%，使用 BNB 可额外优惠 10%，最高 125 倍杠杆，8 小时结算资金费。原平台称其永续合约流动性最深。"
 ],
 [
  "HYPE-staking-anchored perp venue on Hyperliquid.",
  "基于 Hyperliquid、以 HYPE 质押为基础的永续交易场所。"
 ],
 [
  "0.04% taker / 0.02% maker, RWA-focused (oil, gold, FX) on Arbitrum.",
  "吃单费率 0.04%、挂单费率 0.02%，基于 Arbitrum，聚焦石油、黄金、外汇等现实世界资产。"
 ],
 [
  "0.04% open / 0.06% close (down from 5/7 bps as of @GMX_IO post, 6 Jan 2025), oracle-priced, Arbitrum. (Older 0.1% references describe GMX v1.)",
  "开仓费率 0.04%、平仓费率 0.06%，预言机定价，基于 Arbitrum。据 2025 年 1 月 6 日 @GMX_IO 公告，从 5 / 7 基点下调；早期 0.1% 费率资料指 GMX v1。"
 ],
 [
  "spread-based effective fees, up to 150x on forex, Arbitrum.",
  "实际费用以价差形式体现，外汇最高 150 倍杠杆，基于 Arbitrum。"
 ],
 [
  "When does each perp DEX win?",
  "各永续交易所在何种场景更有优势？"
 ],
 [
  "Scalping",
  "短线高频交易"
 ],
 [
  "Lighter (zero fees) or Hyperliquid (deepest BTC book).",
  "Lighter（零手续费）或 Hyperliquid（BTC 订单簿深度最高）。"
 ],
 [
  "High leverage",
  "高杠杆"
 ],
 [
  "Aster (1001x) or gTrade (150x forex).",
  "Aster（1001 倍）或 gTrade（外汇 150 倍）。"
 ],
 [
  "RWA / commodities",
  "现实世界资产 / 大宗商品"
 ],
 [
  "Ostium, trade.xyz.",
  "Ostium、trade.xyz。"
 ],
 [
  "Hyperliquid (slippage edge).",
  "Hyperliquid（滑点优势）。"
 ],
 [
  "Funding-rate sensitivity",
  "资金费率敏感策略"
 ],
 [
  "Which is the cheapest perp DEX in 2026?",
  "2026 年哪家永续去中心化交易所成本最低？"
 ],
 [
  "How is total execution cost calculated?",
  "总执行成本如何计算？"
 ],
 [
  "Most publish transparent maker/taker fees, but borrow fees (GMX), spread-as-fee (Ostium, gTrade), and oracle premiums can hide cost. Perps Arena normalizes all of these into a single bps figure.",
  "多数平台公开挂单与吃单费率，但借款费（GMX）、以价差体现的费用（Ostium、gTrade）及预言机溢价可能形成额外成本。本工具将其统一换算为基点。"
 ],
 [
  "What is slippage on a perp DEX?",
  "永续去中心化交易所的滑点是什么？"
 ],
 [
  "Often yes. Hyperliquid’s 0.045% base-tier taker (Hyperliquid Docs) undercuts Binance Futures (0.05% taker per Binance FAQ) and Bybit (“the taker a 0.055% trading fee, and the maker a 0.02% trading fee,” Bybit Help Center). Lighter goes to zero for retail. High-volume CEX traders may still get lower fees on top tiers.",
  "通常如此。原平台引用各方文档比较：Hyperliquid 基础档吃单费率为 0.045%，低于 Binance 合约的 0.05% 与 Bybit 的 0.055%（挂单 0.02%）；Lighter 零售费率为零。但中心化交易所高成交量用户仍可能享有更低的高等级费率。"
 ],
 [
  "Are perp DEX fees lower than CEX fees?",
  "永续去中心化交易所的费用低于中心化交易所吗？"
 ],
 [
  "A perp DEX is a single venue. An aggregator routes your order to the venue with the best blended price across multiple DEXs in one transaction, with one balance and one position view.",
  "永续去中心化交易所是单一交易场所。聚合器在多个交易所中选择综合价格最优的场所路由委托，提供统一交易、余额及持仓视图。"
 ],
 [
  "What’s the difference between a perp DEX and a perp DEX aggregator like VOOI Ultra?",
  "永续去中心化交易所与 VOOI Ultra 这类聚合器有何区别？"
 ],
 [
  "About Perps Arena",
  "关于永续交易成本比较"
 ],
 [
  "Frequently asked questions",
  "常见问题"
 ],
 [
  "Perps Arena — Perp Fee & Slippage Comparison | VOOI Ultra",
  "永续手续费与滑点比较 | VOOI Ultra"
 ],
 [
  "Perps Arena — Live Perp Execution Cost Comparison",
  "实时永续合约执行成本比较"
 ],
 [
  "The Perp Fee & Slippage Comparator",
  "永续合约手续费与滑点比较工具"
 ],
 [
  "Compare perpetual futures execution costs — maker/taker fees, slippage and funding — across leading perpetual exchanges by pair, position size and leverage.",
  "按交易对、仓位规模与杠杆，比较主流永续交易所的挂单与吃单手续费、滑点和资金费。"
 ],
 [
  "VOOI Ultra Perps Arena",
  "VOOI Ultra 永续交易成本比较"
 ],
 [
  "Side-by-side perpetual futures execution cost comparison",
  "并列比较永续合约执行成本"
 ],
 [
  "Maker/taker fees, slippage and funding combined per venue",
  "汇总各交易场所的挂单与吃单手续费、滑点和资金费"
 ],
 [
  "Configurable USD position size, leverage and direction",
  "可设置美元仓位规模、杠杆及方向"
 ],
 [
  "How Perps Arena compares perpetual futures execution costs across supported exchanges.",
  "本工具如何比较所支持交易所的永续合约执行成本。"
 ],
 [
  "How Perps Arena compares perp execution costs",
  "永续合约执行成本的比较方式"
 ],
 [
  "Pull top-of-book quotes",
  "获取订单簿最优报价"
 ],
 [
  "Perps Arena pulls top-of-book quotes from every supported perpetual exchange.",
  "从所有支持的永续交易所获取订单簿最优报价。"
 ],
 [
  "Simulate impact for the chosen notional",
  "按所选名义价值模拟价格冲击"
 ],
 [
  "It simulates price impact at the position size you choose, against current order-book depth or the venue’s oracle/pool model.",
  "按您选择的仓位规模，结合当前订单簿深度或场所的预言机与资金池模型模拟价格冲击。"
 ],
 [
  "Add the venue’s fee schedule",
  "计入交易场所费率"
 ],
 [
  "Each venue’s posted maker/taker fee schedule is layered onto the simulated execution.",
  "在模拟成交结果上，加入各交易场所公布的挂单与吃单费率。"
 ],
 [
  "Overlay current funding",
  "计入当前资金费率"
 ],
 [
  "The current funding rate is overlaid so the comparison reflects total entry cost, not just headline fees.",
  "加入当前资金费率，使比较反映总开仓成本，而非仅名义手续费。"
 ],
 [
  "Loading markets…",
  "正在加载市场…"
 ],
 [
  "The fair market price used to value your position — it drives your margin, unrealized PnL, and liquidation price. Updates in real time.",
  "用于仓位估值的公允市场价格，决定保证金、未实现盈亏与强平价格，实时更新。"
 ],
 [
  "The total USD value of open positions on one side of this market (long or short).",
  "该市场单侧（多头或空头）未平仓位的美元总价值。"
 ],
 [
  "Funding (1h) / Countdown",
  "1 小时资金费率 / 结算倒计时"
 ],
 [
  "A payment exchanged directly between traders to keep the perpetual price near spot. The rate shown is the hourly rate recalculated every minute — a live estimate, not a value fixed for the whole hour. You pay or receive it based on your side and the rate — the venue takes no fee. The countdown is the time until the next funding settlement.",
  "交易者之间直接支付的资金费，用于使永续合约价格接近现货。显示的小时费率每分钟重新计算，是实时估算，并非整小时固定值。根据持仓方向与费率支付或收取，交易场所不从中收费。倒计时表示距下次资金费结算的时间。"
 ],
 [
  "Quote",
  "报价"
 ],
 [
  "Quote:",
  "报价："
 ],
 [
  "Notional",
  "名义价值"
 ],
 [
  "Pick a market and choose an exchange to trade on",
  "选择市场与交易所开始交易"
 ],
 [
  "Available to trade:",
  "可用于交易："
 ],
 [
  "Open position:",
  "建立仓位："
 ],
 [
  "Max lev.",
  "最高杠杆"
 ],
 [
  "This exchange supports up to",
  "此交易所最高支持"
 ],
 [
  "x leverage for this pair. Reduce leverage to enable it.",
  "倍杠杆。请降低杠杆以启用此交易对。"
 ],
 [
  "Adjust leverage to",
  "调整杠杆至"
 ],
 [
  "Change leverage to",
  "更改杠杆至"
 ],
 [
  "Change leverage",
  "更改杠杆"
 ],
 [
  "Size too small",
  "规模过小"
 ],
 [
  "Size too large",
  "规模过大"
 ],
 [
  "Low margin",
  "保证金不足"
 ],
 [
  "No quotes yet",
  "暂无报价"
 ],
 [
  "this market",
  "此市场"
 ],
 [
  "Set Sizes",
  "设置双腿规模"
 ],
 [
  "Select a second market to hedge",
  "请选择第二个市场以对冲"
 ],
 [
  "Select two different markets",
  "请选择两个不同市场"
 ],
 [
  "Failed to prepare hedge orders",
  "准备对冲委托失败"
 ],
 [
  "Sending hedge orders…",
  "正在发送对冲委托…"
 ],
 [
  "Failed to send hedge orders",
  "发送对冲委托失败"
 ],
 [
  "Some hedge orders failed",
  "部分对冲委托失败"
 ],
 [
  "Hedge orders sent",
  "对冲委托已发送"
 ],
 [
  "Positions will update once the orders fill.",
  "委托成交后持仓将更新。"
 ],
 [
  "DEX",
  "去中心化交易所"
 ],
 [
  "Pos. size",
  "仓位规模"
 ],
 [
  "Set size",
  "设置规模"
 ],
 [
  "to get quotes",
  "以获取报价"
 ],
 [
  "first to see quotes",
  "后查看报价"
 ],
 [
  "is not available in your region. Choose another venue for this leg.",
  "在您所在地区不可用，请为该腿选择其他交易场所。"
 ],
 [
  "Open Hedge Order",
  "提交对冲开仓委托"
 ],
 [
  "Close hedge",
  "关闭对冲组合"
 ],
 [
  "Best",
  "最优"
 ],
 [
  "Low slippage",
  "低滑点"
 ],
 [
  "Couldn't load quotes",
  "无法加载报价"
 ],
 [
  "Something went wrong on our side — try again in a moment",
  "服务发生错误，请稍后重试"
 ],
 [
  "Compare venues",
  "比较交易场所"
 ],
 [
  "Pick the exchange to route your order through",
  "选择执行委托的交易所"
 ],
 [
  "Closes part of the position you already hold instead of opening a new one. It can only shrink that position, never flip it.",
  "仅减少已有仓位，不会建立新仓或反向开仓。"
 ],
 [
  "Position Details",
  "仓位详情"
 ],
 [
  "Selected quote",
  "所选报价"
 ],
 [
  "Failed to send order",
  "发送委托失败"
 ],
 [
  "Sending order…",
  "正在发送委托…"
 ],
 [
  "Order sent, but TP/SL could not be set.",
  "委托已发送，但止盈止损设置失败。"
 ],
 [
  "Order sent",
  "委托已发送"
 ],
 [
  "Your authentication has expired",
  "身份验证已过期"
 ],
 [
  "MEXC paused new positions on your account.",
  "MEXC 已暂停您账户的新开仓。"
 ],
 [
  "Bybit needs its trading terms accepted first.",
  "请先接受 Bybit 的交易条款。"
 ],
 [
  "Hyperliquid trading requires unified account mode.",
  "Hyperliquid 交易需要统一账户模式。"
 ],
 [
  "Size is larger than your open position — only the position will be closed.",
  "数量超过当前持仓，将仅关闭现有仓位。"
 ],
 [
  "At this price the order fills right away, at taker fees.",
  "该价格会立即成交，按吃单费率收费。"
 ],
 [
  "Define how long your order remains active before it is expired or executed.",
  "设置委托在到期或执行前的有效方式。"
 ],
 [
  "Your order remains active until it is filled or you manually cancel it.",
  "委托持续有效，直到成交或由您手动撤销。"
 ],
 [
  "Your order will be executed partially or fully immediately. If cannot be filled immediately - it is cancelled.",
  "立即全部或部分成交，无法立即成交的剩余部分将撤销。"
 ],
 [
  "Your order will be fully filled immediately only. If full size cannot be executed instantly - it is cancelled.",
  "仅允许立即全部成交，无法立即全额成交则整笔撤销。"
 ],
 [
  "It can only add liquidity or cancel your order. It never takes liquidity.",
  "仅允许提供流动性；若会立即吃单则撤销，绝不主动消耗流动性。"
 ],
 [
  "Finding the best price…",
  "正在寻找最优价格…"
 ],
 [
  "Compare best price & funding",
  "比较最优价格与资金费率"
 ],
 [
  "This amount includes the margin of your open position in the opposite direction, as the order closes that position first. For this reason, it changes when you switch between Long and Short and may differ from the available balance shown on Gate.",
  "此金额包含反向持仓的保证金，因为委托会先关闭该仓位。因此切换多头与空头时金额会变化，也可能与 Gate 显示的可用余额不同。"
 ],
 [
  "Place hedge",
  "提交对冲委托"
 ],
 [
  "Attach take-profit and stop-loss trigger orders that close the position automatically at your set prices.",
  "附加止盈和止损触发委托，在设定价格自动平仓。"
 ],
 [
  "Set Cross Margin",
  "设置全仓模式"
 ],
 [
  "Set Isolated Margin",
  "设置逐仓模式"
 ],
 [
  "maximum notional value",
  "最大名义价值"
 ],
 [
  "Could not set the margin mode.",
  "无法设置保证金模式。"
 ],
 [
  "Could not change leverage.",
  "无法更改杠杆。"
 ],
 [
  "This market has reached its maximum notional value at this leverage. Try a lower leverage.",
  "此杠杆下市场已达到最大名义持仓限额，请降低杠杆。"
 ],
 [
  "Close your isolated Gate position on this market to trade it on cross margin.",
  "请先关闭 Gate 此市场的逐仓持仓，再切换全仓交易。"
 ],
 [
  "Close your cross Polymarket position on this market to trade it on isolated margin.",
  "请先关闭 Polymarket 此市场的全仓持仓，再切换逐仓交易。"
 ],
 [
  "Cancel your open Polymarket orders on this market to trade it on isolated margin.",
  "请先撤销 Polymarket 此市场的未完成委托，再切换逐仓交易。"
 ],
 [
  "The maximum leverage for this pair differs across DEXs:",
  "此交易对在各去中心化交易所的最高杠杆不同："
 ],
 [
  "This may affect the display of available offers",
  "这可能影响可用报价的显示"
 ],
 [
  "Not available",
  "不可用"
 ],
 [
  "Unavailable",
  "不可用"
 ],
 [
  "caps how much can be open at each leverage across the whole venue, not per account. This tier is full, so nothing can open at it until other positions close.",
  "按整个交易场所限制各杠杆档位的未平仓规模，并非按账户限制。此档位额度已满，需等待其他仓位关闭后才可开仓。"
 ],
 [
  "Position size limits on",
  "仓位规模限额，场所为"
 ],
 [
  "Higher leverage lowers the maximum position size the venue accepts",
  "杠杆越高，交易场所允许的最大仓位规模越小"
 ],
 [
  "is not opening new positions at",
  "当前不接受新开仓，杠杆为"
 ],
 [
  "x on this market right now. Choose another leverage.",
  "倍。请为此市场选择其他杠杆。"
 ],
 [
  "Check details",
  "查看详情"
 ],
 [
  "Polymarket Perps is live",
  "Polymarket 永续合约已上线"
 ],
 [
  "Pick a direction per venue, up to 20 coins, and a margin range to tune farming, funding and points",
  "为各交易场所选择方向，设置最多 20 个币种及保证金区间，调整成交量、资金费与积分策略"
 ],
 [
  "New Arbitrage Bots controls",
  "套利机器人新增控制选项"
 ],
 [
  "NEW - Gate Perps",
  "新上线 — Gate 永续合约"
 ],
 [
  "VOOI Arbitrage Bots",
  "VOOI 套利机器人"
 ],
 [
  "to automate funding, OI, points and volume generating. Discover new RWA & Pre-IPO perp markets on VOOI - Entropy.io.",
  "自动执行资金费、未平仓量、积分及成交量策略。探索 VOOI 上 Entropy.io 新增的现实世界资产与上市前资产永续市场。"
 ],
 [
  "NEW: Arbitrage Bots + Entropy.io Perps",
  "新功能：套利机器人 + Entropy.io 永续合约"
 ],
 [
  "NEW - Ondo Perps on VOOI",
  "新上线 — VOOI 支持 Ondo 永续合约"
 ],
 [
  "NEW - Bybit Perps + More Updates",
  "新上线 — Bybit 永续合约及更多更新"
 ],
 [
  "MEXC Futures — LIVE",
  "MEXC 合约已上线"
 ],
 [
  "Historical and real-time price and funding spreads in one scanner — with both legs executable inside one terminal",
  "在同一扫描器查看历史与实时价差、资金费率差，并在同一终端执行双腿交易"
 ],
 [
  "Meet VOOI Arbitrage Desk",
  "了解 VOOI 套利终端"
 ],
 [
  "Hold the position on a DEX perp, offset it on Binance — and capture the funding spread between them",
  "在去中心化永续交易所持仓，并在 Binance 建立反向仓位，赚取二者资金费率差"
 ],
 [
  "Binance - Live on VOOI",
  "Binance 已接入 VOOI"
 ],
 [
  "Extended Perps on VOOI - LIVE",
  "VOOI 已上线 Extended 永续合约"
 ],
 [
  "NEW – VOOI Perps MCP",
  "新上线 — VOOI 永续合约 MCP"
 ],
 [
  "Kinetiq HIP-3 Markets - LIVE",
  "Kinetiq HIP-3 市场已上线"
 ],
 [
  "Hong Kong Exchange Stocks - LIVE",
  "港股市场已上线"
 ],
 [
  "trade[XYZ] HIP-3 Markets - LIVE",
  "trade[XYZ] HIP-3 市场已上线"
 ],
 [
  "Explore strategies, check historical rates and execute them in one single app",
  "在同一应用中探索策略、查看历史费率并执行交易"
 ],
 [
  "Funding Arbitrage",
  "资金费套利"
 ],
 [
  "Transfer liquidity across Hyperliquid, Lighter, and Arbitrum DEXs directly in VOOI.",
  "直接在 VOOI 划转 Hyperliquid、Lighter 与 Arbitrum 去中心化交易所之间的流动性。"
 ],
 [
  "Automatically finds optimal liquidity transfer paths between DEXs.",
  "自动寻找去中心化交易所之间的最优流动性划转路径。"
 ],
 [
  "Find the Best Route",
  "寻找最优路径"
 ],
 [
  "Complete trading tasks to earn streaks and $VOOI Rewards",
  "完成交易任务，累积连续任务记录并赚取 $VOOI 奖励"
 ],
 [
  "Use VOOI Ultra – Earn Rewards",
  "使用 VOOI Ultra，赚取奖励"
 ],
 [
  "Trade and arbitrage Polymarket Perps on VOOI — $15,000 campaign now on",
  "在 VOOI 交易及套利 Polymarket 永续合约，$15,000 奖励活动现已开启"
 ],
 [
  "Trade and arbitrage Gate perps in pre-built delta-neutral setups – in Arbitrage Desk or Arbitrage Bots",
  "通过套利终端或套利机器人，使用预设 Delta 中性组合交易及套利 Gate 永续合约"
 ],
 [
  "Trade and arbitrage Ondo Perps markets on VOOI - earn funding, exclusive VOOI x Ondo Rewards & share $175,000 weekly bonus.",
  "在 VOOI 交易及套利 Ondo 永续合约，赚取资金费、VOOI × Ondo 专属奖励，并瓜分每周 $175,000 奖励。"
 ],
 [
  "Trade and arbitrage Bybit perp markets in VOOI Arbitrage desk - explore new strategies, execute in Market/Limit orders, and earn cashback from your referred friends",
  "在 VOOI 套利终端交易及套利 Bybit 永续合约，探索新策略，使用市价或限价委托执行，并从受邀朋友交易中获得返佣"
 ],
 [
  "Trade & arbitrage MEXC futures’ funding rates - discover top funding and price spreads in scanner, arbitrage across MEXC, Binance, Hyperliquid, Aster and more",
  "交易及套利 MEXC 合约资金费率，在扫描器中寻找最高费率差和价差，跨 MEXC、Binance、Hyperliquid、Aster 等场所执行套利"
 ],
 [
  "Trade and arbitrage Extended funding rates, with 10% Extended points boost",
  "交易及套利 Extended 资金费率，享受 10% Extended 积分加成"
 ],
 [
  "Trade RWA & Crypto markets, execute trading strategies 24/7 Non-Stop with AI",
  "交易现实世界资产与加密市场，通过 AI 全天候执行交易策略"
 ],
 [
  "Trade & Arbitrage Stocks 24/7. Swap to/from USDH via VOOI.",
  "全天候交易及套利股票，通过 VOOI 兑换或兑出 USDH。"
 ],
 [
  "Trade XIAOMI, POPMART, TENCENT and MINIMAX on VOOI via Aster",
  "通过 VOOI 接入 Aster，交易 XIAOMI、POPMART、TENCENT 与 MINIMAX"
 ],
 [
  "Trade the most liquid RWA markets, farm funding rate across trade[XYZ], Lighter and Aster markets on VOOI Ultra",
  "在 VOOI Ultra 交易流动性充足的现实世界资产市场，跨 trade[XYZ]、Lighter 和 Aster 赚取资金费"
 ],
 [
  "Trading Desk",
  "交易终端"
 ],
 [
  "Trading Terminal",
  "交易终端"
 ],
 [
  "Arbitrage desk",
  "套利终端"
 ],
 [
  "Arbitrage Desk",
  "套利终端"
 ],
 [
  "Arbitrage Bots",
  "套利机器人"
 ],
 [
  "VOOI Delta-Neutral Arbitrage Bots",
  "VOOI Delta 中性套利机器人"
 ],
 [
  "Delta-Neutral",
  "Delta 中性"
 ],
 [
  "ULTRA Feature",
  "ULTRA 功能"
 ],
 [
  "Connect Wallet",
  "连接钱包"
 ],
 [
  "Connect wallet",
  "连接钱包"
 ],
 [
  "Connect a wallet",
  "连接钱包"
 ],
 [
  "Sign in",
  "登录"
 ],
 [
  "Sign In",
  "登录"
 ],
 [
  "Sign out",
  "退出登录"
 ],
 [
  "Log out",
  "退出登录"
 ],
 [
  "Wallet",
  "钱包"
 ],
 [
  "Portfolio",
  "资产组合"
 ],
 [
  "Markets",
  "市场"
 ],
 [
  "Campaigns",
  "奖励活动"
 ],
 [
  "🔥 Campaigns",
  "🔥 奖励活动"
 ],
 [
  "Referrals",
  "邀请返佣"
 ],
 [
  "Support",
  "客户支持"
 ],
 [
  "Docs",
  "文档"
 ],
 [
  "Read Docs",
  "阅读文档"
 ],
 [
  "Read the docs",
  "阅读文档"
 ],
 [
  "How It Works",
  "运作原理"
 ],
 [
  "How it works",
  "运作原理"
 ],
 [
  "Need help?",
  "需要帮助？"
 ],
 [
  "New",
  "新功能"
 ],
 [
  "Beta",
  "测试版"
 ],
 [
  "Dual",
  "双腿套利"
 ],
 [
  "Single",
  "单腿持仓"
 ],
 [
  "All",
  "全部"
 ],
 [
  "Other",
  "其他"
 ],
 [
  "None",
  "无"
 ],
 [
  "Any",
  "不限方向"
 ],
 [
  "Long",
  "多头"
 ],
 [
  "Short",
  "空头"
 ],
 [
  "Buy",
  "买入"
 ],
 [
  "Sell",
  "卖出"
 ],
 [
  "Trade",
  "交易"
 ],
 [
  "Open",
  "开仓"
 ],
 [
  "Close",
  "关闭"
 ],
 [
  "Cancel",
  "取消"
 ],
 [
  "Confirm",
  "确认"
 ],
 [
  "Apply",
  "应用"
 ],
 [
  "Apply Changes",
  "应用更改"
 ],
 [
  "Save",
  "保存"
 ],
 [
  "Save changes",
  "保存更改"
 ],
 [
  "Done",
  "完成"
 ],
 [
  "Delete",
  "删除"
 ],
 [
  "Edit",
  "编辑"
 ],
 [
  "Back",
  "返回"
 ],
 [
  "Next",
  "下一步"
 ],
 [
  "Previous",
  "上一步"
 ],
 [
  "Continue",
  "继续"
 ],
 [
  "Skip",
  "跳过"
 ],
 [
  "Got it",
  "知道了"
 ],
 [
  "Try again",
  "重试"
 ],
 [
  "Load more",
  "加载更多"
 ],
 [
  "Loading...",
  "加载中…"
 ],
 [
  "Loading…",
  "加载中…"
 ],
 [
  "Loading",
  "加载中"
 ],
 [
  "Error",
  "错误"
 ],
 [
  "Unknown error",
  "未知错误"
 ],
 [
  "Unknown error.",
  "未知错误。"
 ],
 [
  "Not authenticated",
  "尚未登录"
 ],
 [
  "Not signed in",
  "尚未登录"
 ],
 [
  "Not connected",
  "未连接"
 ],
 [
  "Connected",
  "已连接"
 ],
 [
  "Connect",
  "连接"
 ],
 [
  "Reconnect",
  "重新连接"
 ],
 [
  "Enable trading",
  "启用交易"
 ],
 [
  "Disable",
  "停用"
 ],
 [
  "Settings",
  "设置"
 ],
 [
  "Details",
  "详情"
 ],
 [
  "Actions",
  "操作"
 ],
 [
  "Action",
  "操作"
 ],
 [
  "Name",
  "名称"
 ],
 [
  "Status",
  "状态"
 ],
 [
  "Date",
  "日期"
 ],
 [
  "Time",
  "时间"
 ],
 [
  "Type",
  "类型"
 ],
 [
  "Total",
  "合计"
 ],
 [
  "Search",
  "搜索"
 ],
 [
  "Clear search",
  "清空搜索"
 ],
 [
  "Search by symbol or name...",
  "搜索资产代码或名称…"
 ],
 [
  "Search markets...",
  "搜索市场…"
 ],
 [
  "Search coins",
  "搜索币种"
 ],
 [
  "Search symbol",
  "搜索资产代码"
 ],
 [
  "Search or add token…",
  "搜索或添加代币…"
 ],
 [
  "Filters",
  "筛选"
 ],
 [
  "Active filters",
  "已启用的筛选"
 ],
 [
  "Clear all",
  "清空全部"
 ],
 [
  "Asset",
  "资产"
 ],
 [
  "Asset class",
  "资产类别"
 ],
 [
  "Asset classes",
  "资产类别"
 ],
 [
  "All asset classes",
  "全部资产类别"
 ],
 [
  "Coins",
  "币种"
 ],
 [
  "Crypto",
  "加密资产"
 ],
 [
  "US stocks",
  "美股"
 ],
 [
  "US Stocks",
  "美股"
 ],
 [
  "Asia stocks",
  "亚洲股票"
 ],
 [
  "Asia Stocks",
  "亚洲股票"
 ],
 [
  "ETFs & indices",
  "ETF 与指数"
 ],
 [
  "Indices",
  "指数"
 ],
 [
  "Commodities",
  "大宗商品"
 ],
 [
  "Forex",
  "外汇"
 ],
 [
  "Pre-IPO",
  "上市前资产"
 ],
 [
  "Stocks",
  "股票"
 ],
 [
  "Perpetual Futures",
  "永续合约"
 ],
 [
  "Futures",
  "合约"
 ],
 [
  "Market",
  "市场"
 ],
 [
  "Exchange",
  "交易所"
 ],
 [
  "Exchanges",
  "交易所"
 ],
 [
  "Venue",
  "交易场所"
 ],
 [
  "Venues",
  "交易场所"
 ],
 [
  "Platform",
  "平台"
 ],
 [
  "Direction",
  "方向"
 ],
 [
  "Side",
  "方向"
 ],
 [
  "Size",
  "规模"
 ],
 [
  "Position size",
  "仓位名义价值"
 ],
 [
  "Position size:",
  "仓位名义价值："
 ],
 [
  "Size:",
  "规模："
 ],
 [
  "Price",
  "价格"
 ],
 [
  "Mark Price",
  "标记价格"
 ],
 [
  "Mark price",
  "标记价格"
 ],
 [
  "Mark",
  "标记价格"
 ],
 [
  "Mid price",
  "中间价"
 ],
 [
  "Last",
  "最新价"
 ],
 [
  "Entry Price",
  "开仓价格"
 ],
 [
  "Entry price",
  "开仓价格"
 ],
 [
  "Entry price:",
  "开仓价格："
 ],
 [
  "Entry P.",
  "开仓价"
 ],
 [
  "Mark P.",
  "标记价"
 ],
 [
  "Exec. price",
  "成交价格"
 ],
 [
  "Volume",
  "成交量"
 ],
 [
  "Vol",
  "成交量"
 ],
 [
  "Volume:",
  "成交量："
 ],
 [
  "24h Volume",
  "24 小时成交量"
 ],
 [
  "Daily Volume (24h)",
  "24 小时成交量"
 ],
 [
  "OI",
  "未平仓量"
 ],
 [
  "Open Interest",
  "未平仓量"
 ],
 [
  "Open interest",
  "未平仓量"
 ],
 [
  "Open interest:",
  "未平仓量："
 ],
 [
  "APR",
  "年化收益率"
 ],
 [
  "APY",
  "年化复利收益率"
 ],
 [
  "Net APR",
  "净年化收益率"
 ],
 [
  "net APR",
  "净年化收益率"
 ],
 [
  "Annualized APR",
  "年化收益率"
 ],
 [
  "Funding APR",
  "资金费率年化"
 ],
 [
  "Funding Spread APR",
  "资金费率差年化"
 ],
 [
  "Funding spread APR",
  "资金费率差年化"
 ],
 [
  "Est. funding APR",
  "预估资金费率年化"
 ],
 [
  "Funding",
  "资金费"
 ],
 [
  "Funding rate",
  "资金费率"
 ],
 [
  "Fund. rate",
  "资金费率"
 ],
 [
  "Funding spread",
  "资金费率差"
 ],
 [
  "Funding Spread",
  "资金费率差"
 ],
 [
  "F Spread",
  "资金费率差"
 ],
 [
  "F Spread 8h",
  "8 小时资金费率差"
 ],
 [
  "Funding 8h",
  "8 小时资金费率"
 ],
 [
  "Funding (8h)",
  "资金费率（8 小时）"
 ],
 [
  "Funding (1h)",
  "资金费率（1 小时）"
 ],
 [
  "Funding (actual)",
  "实际结算资金费率"
 ],
 [
  "Funding (1h):",
  "资金费率（1 小时）："
 ],
 [
  "Fund 1h",
  "1 小时资金费率"
 ],
 [
  "Fund. rate (1h)",
  "资金费率（1 小时）"
 ],
 [
  "Funding Spread 1h",
  "1 小时资金费率差"
 ],
 [
  "Funding Spread (1h)",
  "资金费率差（1 小时）"
 ],
 [
  "Leg funding rates (1h)",
  "双腿资金费率（1 小时）"
 ],
 [
  "1h Spread",
  "1 小时资金费率差"
 ],
 [
  "Max F 1h",
  "近 1 小时最高资金费率差"
 ],
 [
  "Max F 24h",
  "近 24 小时最高资金费率差"
 ],
 [
  "Avg F 24h",
  "近 24 小时平均资金费率差"
 ],
 [
  "P Spread",
  "价差"
 ],
 [
  "Price Spread",
  "价差"
 ],
 [
  "Price spread",
  "价差"
 ],
 [
  "P Spread @ Size",
  "指定规模成交价差"
 ],
 [
  "Price Spread at Size",
  "指定规模成交价差"
 ],
 [
  "Price spread at size",
  "指定规模成交价差"
 ],
 [
  "Max P 1h",
  "近 1 小时最大价差"
 ],
 [
  "Max P 24h",
  "近 24 小时最大价差"
 ],
 [
  "Max Price Spread (1h)",
  "近 1 小时最大价差"
 ],
 [
  "Max Price Spread (24h)",
  "近 24 小时最大价差"
 ],
 [
  "P Change",
  "价格涨跌幅"
 ],
 [
  "Price Change (24h)",
  "24 小时涨跌幅"
 ],
 [
  "24h Change",
  "24 小时涨跌幅"
 ],
 [
  "Change 24h",
  "24 小时涨跌幅"
 ],
 [
  "Price Impact",
  "价格冲击"
 ],
 [
  "Slippage",
  "滑点"
 ],
 [
  "Est. slippage",
  "预估滑点"
 ],
 [
  "Est. slippage:",
  "预估滑点："
 ],
 [
  "Slippage tolerance",
  "滑点容忍度"
 ],
 [
  "Fee",
  "手续费"
 ],
 [
  "Fees",
  "手续费"
 ],
 [
  "Trading fee",
  "交易手续费"
 ],
 [
  "Fee details",
  "费用明细"
 ],
 [
  "Total cost",
  "总成本"
 ],
 [
  "Total cost:",
  "总成本："
 ],
 [
  "Fee (Open)",
  "开仓手续费"
 ],
 [
  "Leverage",
  "杠杆倍数"
 ],
 [
  "Leverage:",
  "杠杆倍数："
 ],
 [
  "Lev",
  "杠杆"
 ],
 [
  "Max leverage",
  "最高杠杆"
 ],
 [
  "Max Leverage",
  "最高杠杆"
 ],
 [
  "Max size",
  "最大规模"
 ],
 [
  "Left on venue",
  "交易场所剩余额度"
 ],
 [
  "Collateral",
  "抵押品"
 ],
 [
  "Margin",
  "保证金"
 ],
 [
  "Available margin",
  "可用保证金"
 ],
 [
  "Avail. margin",
  "可用保证金"
 ],
 [
  "Available margin:",
  "可用保证金："
 ],
 [
  "Required margin",
  "所需保证金"
 ],
 [
  "Required margin:",
  "所需保证金："
 ],
 [
  "Available balance",
  "可用余额"
 ],
 [
  "Balance",
  "余额"
 ],
 [
  "Total balance",
  "总余额"
 ],
 [
  "Total Equity",
  "总权益"
 ],
 [
  "Balance / Avail. margin",
  "余额 / 可用保证金"
 ],
 [
  "Deposit",
  "充值"
 ],
 [
  "Withdraw",
  "提现"
 ],
 [
  "Transfer margin",
  "划转保证金"
 ],
 [
  "Transfer Margin",
  "保证金划转"
 ],
 [
  "Position",
  "仓位"
 ],
 [
  "Positions",
  "持仓"
 ],
 [
  "Orders",
  "委托"
 ],
 [
  "Order",
  "委托"
 ],
 [
  "Order Type",
  "委托类型"
 ],
 [
  "Orders History",
  "历史委托"
 ],
 [
  "Order History",
  "历史委托"
 ],
 [
  "Trade History",
  "成交记录"
 ],
 [
  "History",
  "历史记录"
 ],
 [
  "Arbitrage Positions",
  "套利持仓"
 ],
 [
  "Arbitrage Orders",
  "套利委托"
 ],
 [
  "Arbitrage History",
  "套利历史"
 ],
 [
  "Entry",
  "开仓"
 ],
 [
  "Exit",
  "平仓"
 ],
 [
  "Legs",
  "双腿仓位"
 ],
 [
  "Long leg",
  "多头腿"
 ],
 [
  "Short leg",
  "空头腿"
 ],
 [
  "Both legs",
  "双腿"
 ],
 [
  "Long only",
  "仅做多"
 ],
 [
  "Short only",
  "仅做空"
 ],
 [
  "Long and short",
  "多头与空头"
 ],
 [
  "Liq. Price",
  "强平价格"
 ],
 [
  "Liq. price",
  "强平价格"
 ],
 [
  "Liq. price:",
  "强平价格："
 ],
 [
  "Liq Price",
  "强平价格"
 ],
 [
  "Liq price",
  "强平价格"
 ],
 [
  "Liquidation price:",
  "强平价格："
 ],
 [
  "Est. Liquidation price:",
  "预估强平价格："
 ],
 [
  "Est. Entry price:",
  "预估开仓价格："
 ],
 [
  "PnL",
  "盈亏"
 ],
 [
  "UPnL",
  "未实现盈亏"
 ],
 [
  "Realized PnL",
  "已实现盈亏"
 ],
 [
  "Unrealized PnL",
  "未实现盈亏"
 ],
 [
  "Closed PnL",
  "平仓盈亏"
 ],
 [
  "Total PnL",
  "总盈亏"
 ],
 [
  "Price PnL",
  "价格变动盈亏"
 ],
 [
  "Mark PnL",
  "按标记价计算的盈亏"
 ],
 [
  "Est. PnL to close",
  "预估平仓盈亏"
 ],
 [
  "Est. profit",
  "预估利润"
 ],
 [
  "Total Funding Fee",
  "累计资金费"
 ],
 [
  "Total funding fee",
  "累计资金费"
 ],
 [
  "Funding received",
  "已收资金费"
 ],
 [
  "Funding paid",
  "已付资金费"
 ],
 [
  "Limit",
  "限价"
 ],
 [
  "Limit price",
  "限价价格"
 ],
 [
  "Market order",
  "市价委托"
 ],
 [
  "Limit order",
  "限价委托"
 ],
 [
  "Stop",
  "停止"
 ],
 [
  "Stop loss",
  "止损"
 ],
 [
  "Take profit",
  "止盈"
 ],
 [
  "TP/SL",
  "止盈 / 止损"
 ],
 [
  "Take profit / Stop loss",
  "止盈 / 止损"
 ],
 [
  "Reduce only",
  "只减仓"
 ],
 [
  "Reduce Only",
  "只减仓"
 ],
 [
  "Reduce-only",
  "只减仓"
 ],
 [
  "Maker",
  "挂单方"
 ],
 [
  "Taker",
  "吃单方"
 ],
 [
  "Maker limit",
  "挂单限价"
 ],
 [
  "Taker market",
  "吃单市价"
 ],
 [
  "Maker–Taker",
  "挂单—吃单"
 ],
 [
  "Taker–Taker · instant",
  "吃单—吃单 · 即时执行"
 ],
 [
  "Taker / Taker",
  "吃单 / 吃单"
 ],
 [
  "TIF",
  "委托有效方式"
 ],
 [
  "TIF:",
  "委托有效方式："
 ],
 [
  "GTC",
  "撤销前有效"
 ],
 [
  "IOC",
  "立即成交否则撤销"
 ],
 [
  "FOK",
  "全部成交否则撤销"
 ],
 [
  "Post Only",
  "只挂单"
 ],
 [
  "Cross",
  "全仓"
 ],
 [
  "Isolated",
  "逐仓"
 ],
 [
  "Auto close",
  "自动平仓"
 ],
 [
  "Rebalance",
  "平衡双腿仓位"
 ],
 [
  "Split",
  "分步"
 ],
 [
  "Split into steps",
  "分步执行"
 ],
 [
  "Steps",
  "步数"
 ],
 [
  "Size per step",
  "每步规模"
 ],
 [
  "Pause between steps",
  "步骤间暂停时长"
 ],
 [
  "Max wait",
  "最长等待时间"
 ],
 [
  "Recommended",
  "推荐"
 ],
 [
  "Fixed",
  "固定"
 ],
 [
  "Range",
  "区间"
 ],
 [
  "Random",
  "随机"
 ],
 [
  "Strict",
  "严格"
 ],
 [
  "Balanced",
  "均衡"
 ],
 [
  "Flexible",
  "宽松"
 ],
 [
  "On",
  "开启"
 ],
 [
  "Off",
  "关闭"
 ],
 [
  "Now",
  "当前"
 ],
 [
  "Min",
  "最小值"
 ],
 [
  "Max",
  "最大值"
 ],
 [
  "Hours",
  "小时"
 ],
 [
  "Days",
  "天"
 ],
 [
  "hours",
  "小时"
 ],
 [
  "days",
  "天"
 ],
 [
  "minutes",
  "分钟"
 ],
 [
  "seconds",
  "秒"
 ],
 [
  "Hour",
  "小时"
 ],
 [
  "Day",
  "天"
 ],
 [
  "Daily",
  "每日"
 ],
 [
  "Per day",
  "每日"
 ],
 [
  "Per year (APR)",
  "每年（年化收益率）"
 ],
 [
  "Over 3 days",
  "3 天合计"
 ],
 [
  "Interval",
  "结算周期"
 ],
 [
  "Actual",
  "实际值"
 ],
 [
  "Normalized",
  "标准化值"
 ],
 [
  "Next payment",
  "下次结算"
 ],
 [
  "Next funding",
  "下次资金费结算"
 ],
 [
  "Spread",
  "价差"
 ],
 [
  "Positive for",
  "持续为正时长"
 ],
 [
  "Long buys at",
  "多头买入价"
 ],
 [
  "Short sells at",
  "空头卖出价"
 ],
 [
  "your size",
  "指定规模"
 ],
 [
  "vs best",
  "相对最优报价"
 ],
 [
  "vs mid",
  "相对中间价"
 ],
 [
  "Ignoring size",
  "未计入规模影响"
 ],
 [
  "Long leg impact",
  "多头腿价格冲击"
 ],
 [
  "Short leg impact",
  "空头腿价格冲击"
 ],
 [
  "Thin book",
  "订单簿深度不足"
 ],
 [
  "After fees",
  "扣除手续费后"
 ],
 [
  "No pick right now",
  "当前暂无推荐"
 ],
 [
  "Nothing passes the entry check at the moment",
  "当前没有策略通过开仓条件检查"
 ],
 [
  "Estimated funding",
  "预估资金费"
 ],
 [
  "Estimated round trip",
  "预估往返成本"
 ],
 [
  "Entry per leg",
  "每腿开仓规模"
 ],
 [
  "Spread per hour",
  "每小时资金费率差"
 ],
 [
  "Spread at that size",
  "该规模对应的价差"
 ],
 [
  "Taker fees, in and out",
  "开平仓吃单手续费"
 ],
 [
  "Points on both legs · hedged",
  "双腿赚取积分 · 已对冲"
 ],
 [
  "Farm points",
  "赚取积分"
 ],
 [
  "Top price spread",
  "最高价差"
 ],
 [
  "Top funding",
  "最高资金费率"
 ],
 [
  "Deep liquidity",
  "深度流动性"
 ],
 [
  "Funding per hour",
  "每小时资金费"
 ],
 [
  "Rate positive",
  "资金费率为正"
 ],
 [
  "Longs pay shorts",
  "多头向空头支付"
 ],
 [
  "Rate negative",
  "资金费率为负"
 ],
 [
  "Shorts pay longs",
  "空头向多头支付"
 ],
 [
  "Compare funding and price spreads between venues",
  "比较不同交易场所的资金费率差与价差"
 ],
 [
  "Earn funding on a single position, with no hedge against price moves",
  "通过单腿持仓赚取资金费，价格波动风险未对冲"
 ],
 [
  "Automate funding and points earning with pre-built strategies across 8+ DEXs and CEXs",
  "通过覆盖 8 家以上去中心化及中心化交易所的预设策略，自动赚取资金费与积分"
 ],
 [
  "Explore bots",
  "查看机器人"
 ],
 [
  "Hide opportunities",
  "隐藏机会推荐"
 ],
 [
  "Show opportunities",
  "显示机会推荐"
 ],
 [
  "Watch guide",
  "观看教程"
 ],
 [
  "No strategies found.",
  "未找到符合条件的策略。"
 ],
 [
  "No markets found",
  "未找到市场"
 ],
 [
  "No markets found.",
  "未找到市场。"
 ],
 [
  "No markets match these filters",
  "没有市场符合筛选条件"
 ],
 [
  "No results found",
  "未找到结果"
 ],
 [
  "No data yet.",
  "暂无数据。"
 ],
 [
  "Failed to update — retrying automatically.",
  "更新失败，正在自动重试。"
 ],
 [
  "Failed to update — retrying automatically",
  "更新失败，正在自动重试"
 ],
 [
  "Excluding",
  "已排除"
 ],
 [
  "Excluded tokens",
  "排除代币"
 ],
 [
  "Min Volume",
  "最低成交量"
 ],
 [
  "Min OI",
  "最低未平仓量"
 ],
 [
  "Min P Spread",
  "最低价差"
 ],
 [
  "Min F Positive",
  "最短正资金费率差时长"
 ],
 [
  "Min F Spread 8h",
  "最低 8 小时资金费率差"
 ],
 [
  "Volume ≥",
  "成交量 ≥"
 ],
 [
  "OI ≥",
  "未平仓量 ≥"
 ],
 [
  "P Spread ≥",
  "价差 ≥"
 ],
 [
  "F Positive ≥",
  "正资金费率差持续时长 ≥"
 ],
 [
  "Funding unit",
  "资金费率显示周期"
 ],
 [
  "Auto-update",
  "自动更新"
 ],
 [
  "Display settings",
  "显示设置"
 ],
 [
  "Desk view",
  "终端视图"
 ],
 [
  "Updated just now",
  "刚刚更新"
 ],
 [
  "Refresh now",
  "立即刷新"
 ],
 [
  "Not updated yet",
  "尚未更新"
 ],
 [
  "Scroll to your open arbitrage positions",
  "跳转至当前套利持仓"
 ],
 [
  "Arbitrage Positions (",
  "套利持仓（"
 ],
 [
  "Funding spread (",
  "资金费率差（"
 ],
 [
  "Back to bots",
  "返回机器人"
 ],
 [
  "Create bot",
  "创建机器人"
 ],
 [
  "Create a bot",
  "创建机器人"
 ],
 [
  "Create new",
  "新建"
 ],
 [
  "Custom bot",
  "自定义机器人"
 ],
 [
  "Funding Bot",
  "资金费套利机器人"
 ],
 [
  "Volume Maker Bot",
  "成交量机器人"
 ],
 [
  "Earn funding",
  "赚取资金费"
 ],
 [
  "Hold open interest",
  "维持未平仓量"
 ],
 [
  "Trade volume",
  "累积成交量"
 ],
 [
  "Custom",
  "自定义"
 ],
 [
  "Goal",
  "策略目标"
 ],
 [
  "Rules",
  "策略规则"
 ],
 [
  "Summary:",
  "概要："
 ],
 [
  "Margin in use:",
  "占用保证金："
 ],
 [
  "Profit floor:",
  "最低利润门槛："
 ],
 [
  "Margin per venue",
  "每个交易场所的保证金"
 ],
 [
  "Least margin per venue",
  "每个交易场所的最低保证金"
 ],
 [
  "Most margin per venue",
  "每个交易场所的最高保证金"
 ],
 [
  "Max hold",
  "最长持仓时间"
 ],
 [
  "Max hold unit",
  "最长持仓时间单位"
 ],
 [
  "Extend max hold",
  "延长最长持仓时间"
 ],
 [
  "Cost limit",
  "成本上限"
 ],
 [
  "Profit floor",
  "最低利润门槛"
 ],
 [
  "Expected profit",
  "预期利润"
 ],
 [
  "Not required",
  "不要求"
 ],
 [
  "Required",
  "要求"
 ],
 [
  "Entry rule",
  "开仓规则"
 ],
 [
  "Funding rule",
  "资金费率规则"
 ],
 [
  "Entering",
  "开仓规则"
 ],
 [
  "Holding",
  "持仓规则"
 ],
 [
  "Exiting",
  "平仓规则"
 ],
 [
  "Exit each pair at",
  "每组仓位的平仓条件"
 ],
 [
  "Exit at",
  "平仓条件"
 ],
 [
  "Profit to exit each pair at",
  "每组仓位的止盈目标"
 ],
 [
  "Profit per pair",
  "每组仓位利润"
 ],
 [
  "Profit",
  "盈利"
 ],
 [
  "Break even",
  "盈亏平衡"
 ],
 [
  "Exit before liquidation",
  "强平前退出"
 ],
 [
  "Exit before liquidation, percent",
  "强平前退出阈值（百分比）"
 ],
 [
  "Cooldown between pairs",
  "两组仓位之间的冷却时间"
 ],
 [
  "Shortest cooldown between pairs",
  "最短冷却时间"
 ],
 [
  "Longest cooldown between pairs",
  "最长冷却时间"
 ],
 [
  "Max leverage presets",
  "最高杠杆预设"
 ],
 [
  "Each pair",
  "每组仓位"
 ],
 [
  "Holds",
  "持仓时间"
 ],
 [
  "Enters",
  "开仓条件"
 ],
 [
  "Closes",
  "平仓条件"
 ],
 [
  "Checks",
  "检查频率"
 ],
 [
  "Every minute",
  "每分钟"
 ],
 [
  "Always include",
  "始终包含"
 ],
 [
  "Always includes",
  "始终包含"
 ],
 [
  " · Always included",
  " · 始终包含"
 ],
 [
  "Connect venue",
  "连接交易场所"
 ],
 [
  "Choose venues",
  "选择交易场所"
 ],
 [
  "2 venues required",
  "至少需要 2 个交易场所"
 ],
 [
  "Select markets",
  "选择市场"
 ],
 [
  "Select markets by",
  "市场选择方式"
 ],
 [
  "Size each pair",
  "设置每组仓位规模"
 ],
 [
  "Pick a goal",
  "选择策略目标"
 ],
 [
  "Reset to",
  "重置为"
 ],
 [
  "Edited",
  "已修改"
 ],
 [
  "You have 20 bots",
  "您已有 20 个机器人"
 ],
 [
  "That's the most one account can run. Delete one to create another.",
  "已达单个账户的机器人数量上限。请先删除一个再创建。"
 ],
 [
  "20 bots is the limit. Delete one to create another.",
  "最多可创建 20 个机器人。请先删除一个再创建。"
 ],
 [
  "Connect a wallet to view and create arbitrage bots",
  "连接钱包以查看和创建套利机器人"
 ],
 [
  "Sign in to access your account",
  "登录以访问账户"
 ],
 [
  "Connect a wallet to set up and start an arbitrage bot",
  "连接钱包以配置并启动套利机器人"
 ],
 [
  "Sign in to set up and start an arbitrage bot",
  "登录以配置并启动套利机器人"
 ],
 [
  "Total bots",
  "机器人总数"
 ],
 [
  "Active bots",
  "运行中的机器人"
 ],
 [
  "Running now, or closing their pair after a stop",
  "正在运行，或停止后正在平仓的机器人"
 ],
 [
  "Bot",
  "机器人"
 ],
 [
  "Running",
  "运行中"
 ],
 [
  "Stopped",
  "已停止"
 ],
 [
  "Starting",
  "正在启动"
 ],
 [
  "Stopping",
  "正在停止"
 ],
 [
  "Scanning",
  "扫描中"
 ],
 [
  "Searching",
  "搜索中"
 ],
 [
  "Paused",
  "已暂停"
 ],
 [
  "Idle",
  "空闲"
 ],
 [
  "Closing pair",
  "正在平仓"
 ],
 [
  "Needs attention",
  "需要处理"
 ],
 [
  "Needs attention:",
  "需要处理："
 ],
 [
  "Not managed",
  "未受管理"
 ],
 [
  "No pair",
  "暂无持仓组合"
 ],
 [
  "Settings out of date",
  "设置已过期"
 ],
 [
  "Review",
  "检查"
 ],
 [
  "Before you start",
  "开始前须知"
 ],
 [
  "How a bot picks, when it closes, and what can go wrong",
  "了解机器人的选仓方式、平仓条件与潜在风险"
 ],
 [
  "Choose what the bot works toward, then set the margin each venue puts up",
  "选择机器人的策略目标，并设置各交易场所投入的保证金"
 ],
 [
  "Best fit for",
  "适用场所"
 ],
 [
  "What does a bot trade?",
  "机器人交易什么？"
 ],
 [
  "A long and a short on the same asset, on two of your venues. Price moves on the two legs mostly cancel out, so what the pair earns is the difference between the two funding rates.",
  "机器人在两个交易场所对同一资产分别建立多头与空头仓位。双腿价格变动的影响大致抵消，组合主要赚取两者的资金费率差。"
 ],
 [
  "How does it pick a pair?",
  "机器人如何选择持仓组合？"
 ],
 [
  "When does it close the pair?",
  "机器人何时平仓？"
 ],
 [
  "When funding turns against the pair, when the max hold runs out, or when a leg nears liquidation, unless you turn that exit off. Then it looks for the next pair. Stopping the bot closes the pair too.",
  "资金费率转为不利、达到最长持仓时间，或某一腿接近强平时，机器人会平仓（除非您关闭了对应的退出规则），随后寻找下一组组合。停止机器人也会关闭组合。"
 ],
 [
  "What are the risks?",
  "有哪些风险？"
 ],
 [
  "Each leg keeps its own margin on its own venue, so a sharp price move can liquidate one leg even though the pair is hedged. Funding can also turn before the pair earns back its trading fees. Higher leverage makes both more likely.",
  "每一腿的保证金独立保留在各自的交易场所，因此即使组合已对冲，剧烈价格波动仍可能使其中一腿被强平。资金费率也可能在收入覆盖交易手续费前转为不利。更高的杠杆会增加这两类风险。"
 ],
 [
  "Can I still trade on the same venues?",
  "还可以在相同交易场所手动交易吗？"
 ],
 [
  "Yes. A bot skips markets you already hold. Closing one of the bot's positions by hand halts it until you check both venues and start it again.",
  "可以。机器人会跳过您已有持仓的市场。手动关闭机器人管理的某一腿会使机器人停止；请检查两个交易场所的持仓后再重新启动。"
 ],
 [
  "How many bots can I run?",
  "最多可以运行多少个机器人？"
 ],
 [
  "Up to 20 per account, each with its own goal, venues and margin.",
  "每个账户最多 20 个机器人，各自独立配置目标、交易场所和保证金。"
 ],
 [
  "Up to 20 per account, each with its own goal, venues and margin",
  "每个账户最多 20 个机器人，各自独立配置目标、交易场所和保证金"
 ],
 [
  "Do you",
  "您是否"
 ],
 [
  "want",
  "希望"
 ],
 [
  "to learn more?",
  "进一步了解？"
 ],
 [
  "Sign In and connect at least two venues. Each leg trades from that venue's balance.",
  "登录并连接至少两个交易场所。每一腿使用所在交易场所的余额进行交易。"
 ],
 [
  "Connect two exchanges",
  "连接两个交易所"
 ],
 [
  "Start a bot to generate OI, make volume or earn funding with desired margin size",
  "按设定保证金启动机器人，以维持未平仓量、累积成交量或赚取资金费"
 ],
 [
  "Pick a goal and margin",
  "选择目标与保证金"
 ],
 [
  "It runs and manages your hedge strategies autonomously, while you can stop it anytime",
  "机器人自主运行并管理对冲策略，您可随时停止"
 ],
 [
  "Start the bot",
  "启动机器人"
 ],
 [
  "Start bot",
  "启动机器人"
 ],
 [
  "Stop the bot?",
  "是否停止机器人？"
 ],
 [
  "Stop and close pair",
  "停止并平仓"
 ],
 [
  "Stop and leave pair open",
  "停止并保留持仓"
 ],
 [
  "Keep running",
  "继续运行"
 ],
 [
  "Stop requested",
  "已提交停止请求"
 ],
 [
  "Stop cancelled",
  "已取消停止"
 ],
 [
  "Bot stopped",
  "机器人已停止"
 ],
 [
  "Starting bot…",
  "正在启动机器人…"
 ],
 [
  "Stopping bot…",
  "正在停止机器人…"
 ],
 [
  "Bot started",
  "机器人已启动"
 ],
 [
  "Couldn't start the bot",
  "无法启动机器人"
 ],
 [
  "Couldn't stop the bot",
  "无法停止机器人"
 ],
 [
  "Bot created, but it couldn't start",
  "机器人已创建，但启动失败"
 ],
 [
  "Settings saved",
  "设置已保存"
 ],
 [
  "Edit bot",
  "编辑机器人"
 ],
 [
  "Delete bot",
  "删除机器人"
 ],
 [
  "Delete this bot?",
  "是否删除此机器人？"
 ],
 [
  "Deleting bot…",
  "正在删除机器人…"
 ],
 [
  "Couldn't delete the bot",
  "无法删除机器人"
 ],
 [
  "Bot deleted",
  "机器人已删除"
 ],
 [
  "Deleting permanently removes this bot's settings.",
  "删除将永久移除此机器人的设置。"
 ],
 [
  "Its history stays available.",
  "历史记录仍可查看。"
 ],
 [
  "stay open and unmanaged.",
  "将保持持仓，且不再由机器人管理。"
 ],
 [
  "Check and cancel any open entry orders.",
  "请检查并撤销所有未完成的开仓委托。"
 ],
 [
  "Close pair first",
  "请先平仓"
 ],
 [
  "Stop the bot first",
  "请先停止机器人"
 ],
 [
  "Stop the bot to change its settings",
  "请先停止机器人再修改设置"
 ],
 [
  "Wait for it to finish closing its pair",
  "请等待平仓完成"
 ],
 [
  "Wait for the bot to finish closing its pair",
  "请等待机器人完成平仓"
 ],
 [
  "Wait for the entry order to fill or cancel",
  "请等待开仓委托成交或撤销"
 ],
 [
  "The bot stops after both positions close",
  "双腿仓位均关闭后，机器人将停止"
 ],
 [
  "Your pair stays open and unmanaged",
  "组合持仓将保留，且不再由机器人管理"
 ],
 [
  "Your pair has open positions on the venues.",
  "该组合在交易场所仍有未平仓位。"
 ],
 [
  "Closing orders already underway finish first",
  "已开始执行的平仓委托会先完成"
 ],
 [
  "Closing uses market orders, with taker fees on both positions and possible slippage. Leaving the pair open stops all bot management: you manage the positions yourself, or start the bot again.",
  "平仓将使用市价委托，双腿均收取吃单手续费，并可能产生滑点。保留持仓会停止机器人的全部管理：请自行管理仓位，或重新启动机器人。"
 ],
 [
  "The bot treats every position on these venues as its own, so don't trade them by hand while it runs",
  "机器人会将这些交易场所的所有仓位视为由其管理，运行期间请勿手动交易这些仓位"
 ],
 [
  "Set each venue to Any, Long or Short for direction-sensitive strategies",
  "为各交易场所设置“不限方向”“多头”或“空头”，以配置有方向要求的策略"
 ],
 [
  "Trade every coin, or only the asset classes you pick",
  "交易全部币种，或仅交易您选择的资产类别"
 ],
 [
  "What each venue puts up for its leg. The goal's leverage sets the position size",
  "设置每个交易场所为其仓位投入的保证金。仓位规模由策略目标对应的杠杆决定"
 ],
 [
  "A goal sets every rule below. Change any of them to tune it",
  "目标会预设下方所有规则，您可以修改任意规则以调整策略"
 ],
 [
  "Each venue funds its own leg from its own balance",
  "每一腿均使用所在交易场所的余额提供保证金"
 ],
 [
  "Stays on each venue",
  "保证金保留在各自交易场所"
 ],
 [
  "Fewer pairs qualify. Funding must pay on these sides, or the bot waits",
  "符合条件的组合会减少。资金费必须有利于指定方向，否则机器人将等待"
 ],
 [
  "Pick up to 20 coins to spread farming, funding and points across markets",
  "最多选择 20 个币种，将成交量、资金费和积分策略分散至不同市场"
 ],
 [
  "Tick two venues to see the coins they trade",
  "勾选两个交易场所以查看可交易币种"
 ],
 [
  "No picked coin matches",
  "已选币种中无匹配项"
 ],
 [
  "No coin matches",
  "无匹配币种"
 ],
 [
  "Pick up to 20 coins. The list shows only those your venues and sides can pair",
  "最多选择 20 个币种。列表仅显示所选交易场所及方向能够组成交易对的币种"
 ],
 [
  "20 is the most a bot can trade. Remove one to pick another",
  "每个机器人最多交易 20 个币种，请先移除一个再添加"
 ],
 [
  "Connect at least two venues first. Every pair uses two",
  "请先连接至少两个交易场所。每组组合需要两个交易场所"
 ],
 [
  "Tick two venues to start. Every pair uses two",
  "请勾选两个交易场所。每组组合需要两个交易场所"
 ],
 [
  "Pick a coin, or switch to Asset classes",
  "请选择币种，或切换至资产类别"
 ],
 [
  "Min is above Max. Lower Min or raise Max",
  "最小值高于最大值，请降低最小值或提高最大值"
 ],
 [
  "Cooldown Min is above Max. Lower Min or raise Max",
  "最短冷却时间高于最长时间，请调整该区间"
 ],
 [
  "Exit before liquidation takes a whole percent from 50 to 95. Leave it empty for 60%",
  "强平前退出阈值须为 50% 至 95% 的整数，留空默认为 60%"
 ],
 [
  "Enter the Max each venue may put up",
  "请输入每个交易场所可投入的最高保证金"
 ],
 [
  "Enter the margin each venue puts up",
  "请输入每个交易场所投入的保证金"
 ],
 [
  "Set a leverage from 1x to 100x",
  "请设置 1 至 100 倍杠杆"
 ],
 [
  "Set how long a pair may be held",
  "请设置组合的最长持仓时间"
 ],
 [
  "Enter the profit to exit each pair at",
  "请输入每组组合的止盈目标"
 ],
 [
  "Enter the longest cooldown, or set it to Off",
  "请输入最长冷却时间，或关闭冷却"
 ],
 [
  "Enter a cooldown, or set it to Off",
  "请输入冷却时间，或关闭冷却"
 ],
 [
  "How long the bot holds a pair",
  "机器人持有组合的时长"
 ],
 [
  "Looks for the next pair as soon as one closes",
  "一组组合平仓后立即寻找下一组"
 ],
 [
  "Holds each pair until another rule closes it",
  "持续持有每组组合，直到其他规则触发平仓"
 ],
 [
  "Closes the pair once funding and price moves cover its costs, then finds the next one",
  "资金费收入和价格变动收益覆盖成本后平仓，随后寻找下一组组合"
 ],
 [
  "The bot won't exit early to avoid liquidation. If a venue liquidates a leg, the bot closes the other leg at market about 3 minutes later.",
  "机器人不会为避免强平而提前退出。若交易场所强平其中一腿，机器人将在约 3 分钟后以市价关闭另一腿。"
 ],
 [
  "Max defaults to your largest free balance among the selected venues. A venue with less than Min free is skipped until you top it up",
  "最高值默认为所选交易场所中最大的可用余额。可用余额低于最低值的交易场所将被跳过，直到您补充资金"
 ],
 [
  "Each pair takes as much as both venues have free, up to Max. A venue with less than Min free is skipped until you top it up",
  "每组组合按两个交易场所均可提供的最大可用金额投入，但不超过最高值。可用余额低于最低值的交易场所将被跳过，直到您补充资金"
 ],
 [
  "Opens one pair at a time on two of your venues",
  "每次在两个交易场所建立一组组合仓位"
 ],
 [
  "Shared Hyperliquid balance",
  "Hyperliquid 共享余额"
 ],
 [
  "Available on Hyperliquid",
  "Hyperliquid 可用余额"
 ],
 [
  "Reconnect to use",
  "重新连接后可使用"
 ],
 [
  "Points",
  "积分"
 ],
 [
  "Checks the market",
  "市场检查频率"
 ],
 [
  "Every pair also exits if",
  "所有组合也会在以下情况退出："
 ],
 [
  "funding turns against it",
  "资金费率转为不利"
 ],
 [
  "a leg nears liquidation",
  "某一腿接近强平"
 ],
 [
  "funding turns clearly against it",
  "资金费率明显转为不利"
 ],
 [
  "funding has paid nothing over the last day or flips hard against it",
  "过去一天没有资金费收入，或资金费率大幅转为不利"
 ],
 [
  "funding and price moves cover its costs",
  "资金费收入和价格变动收益覆盖成本"
 ],
 [
  "the max hold",
  "最长持仓时间"
 ],
 [
  ", the same pair included",
  "，包括相同组合"
 ],
 [
  "picks a pair",
  "选择组合的方式"
 ],
 [
  "Every minute, it checks each pair it can trade on your venues",
  "每分钟检查所选交易场所中所有可交易组合"
 ],
 [
  "It opens the one expected to earn the most funding over the hold, after those costs, counting a spread that just jumped at no more than its day's average, with one leg resting as a limit order",
  "扣除成本后，选择预期持仓期间资金费收益最高的组合开仓，其中一腿以限价挂单。若费率差刚刚突升，估算采用的数值不超过其当日平均值"
 ],
 [
  "It holds the pair up to",
  "持有该组合的最长时间为"
 ],
 [
  "(longer while the bot would still open it)",
  "（若仍符合机器人的开仓条件，则继续延长）"
 ],
 [
  "looking again",
  "后再次寻找组合"
 ],
 [
  "while the bot would still open it",
  "只要该组合仍符合机器人的开仓条件"
 ],
 [
  "Enters whatever funding pays and doesn't exit when it turns against the pair",
  "开仓不要求资金费收益为正，也不会因资金费率转为不利而退出"
 ],
 [
  "Enters on the current funding spread, with no history required",
  "按当前资金费率差开仓，不要求历史持续时间"
 ],
 [
  "Enters any pair within the cost limit, the way points farming pays for volume",
  "只要组合满足成本上限即可开仓，以交易成本换取成交量及积分"
 ],
 [
  "Whatever funding pays",
  "不限定资金费收益"
 ],
 [
  "As soon as funding pays",
  "资金费收益为正时立即开仓"
 ],
 [
  "Closed outside the bot",
  "由机器人以外的操作平仓"
 ],
 [
  "Liquidation risk",
  "强平风险"
 ],
 [
  "Max hold reached",
  "达到最长持仓时间"
 ],
 [
  "Exit target reached",
  "达到平仓目标"
 ],
 [
  "Funding turned against the pair",
  "资金费率转为不利"
 ],
 [
  "Closed on your stop",
  "按您的停止指令平仓"
 ],
 [
  "Entry unconfirmed",
  "开仓未确认"
 ],
 [
  "Unhedged leg closed",
  "未对冲仓位已关闭"
 ],
 [
  "Paid nothing over the last day",
  "过去一天无资金费收入"
 ],
 [
  "Cost above your limit",
  "成本超过设定上限"
 ],
 [
  "Not expected to pay for itself",
  "预期收益不足以覆盖成本"
 ],
 [
  "A venue has less than your Min free",
  "某交易场所可用余额低于设定最低值"
 ],
 [
  "A venue's balance couldn't be read",
  "无法读取某交易场所的余额"
 ],
 [
  "No price gap data",
  "暂无价差数据"
 ],
 [
  "No venue to hedge on",
  "无可用的对冲交易场所"
 ],
 [
  "No slippage data",
  "暂无滑点数据"
 ],
 [
  "Not on the side you set for a venue",
  "不符合该交易场所的方向设置"
 ],
 [
  "Not on your always-included venue",
  "未包含您指定的必选交易场所"
 ],
 [
  "Spread not positive long enough, or too new",
  "正资金费率差持续时间不足，或组合上线时间过短"
 ],
 [
  "Spread not held for 24h",
  "资金费率差未持续满 24 小时"
 ],
 [
  "Funding not paying",
  "资金费收益不为正"
 ],
 [
  "Another of your bots is entering on a venue",
  "您的另一机器人正在该交易场所开仓"
 ],
 [
  "You already hold this market",
  "您在此市场已有持仓"
 ],
 [
  "the account already trades this market",
  "此账户在该市场已有交易"
 ],
 [
  "Another bot on this account is opening a pair",
  "此账户的另一机器人正在建立组合"
 ],
 [
  "another bot of this account",
  "此账户的另一机器人"
 ],
 [
  "No live order book for the resting leg",
  "挂单腿暂无实时订单簿"
 ],
 [
  "no live book for the resting leg",
  "挂单腿暂无实时订单簿"
 ],
 [
  "Robinhood needs a Premium account",
  "Robinhood 需要高级账户"
 ],
 [
  "robinhood takes VOOI orders",
  "Robinhood 接受 VOOI 委托的账户要求"
 ],
 [
  "Couldn't read the Robinhood account type",
  "无法读取 Robinhood 账户类型"
 ],
 [
  "the robinhood account tier",
  "Robinhood 账户等级"
 ],
 [
  "the bot stopped itself",
  "机器人已自行停止"
 ],
 [
  "The bot is no longer managing your positions. Check both venues and close any that remain before starting it again.",
  "机器人已停止管理仓位。请检查两个交易场所并关闭剩余仓位，然后再重新启动。"
 ],
 [
  "View positions",
  "查看持仓"
 ],
 [
  "Recent fills, fees or funding are still syncing; the figures usually update within a minute",
  "近期成交、手续费或资金费仍在同步，数据通常在一分钟内更新"
 ],
 [
  "Some cycle data is unavailable, so these figures are partial. Actual PnL may be higher or lower",
  "部分交易周期数据不可用，因此这些数值并不完整。实际盈亏可能更高或更低"
 ],
 [
  "The pair closed outside the bot, so the closing fills and fees are missing from these figures",
  "组合由机器人以外的操作平仓，以上数据未包含对应的平仓成交和手续费"
 ],
 [
  "The bot closed what was left straight on the venue, so the fills and fees of that close are missing from these figures",
  "机器人直接在交易场所关闭了剩余仓位，以上数据未包含该次平仓的成交和手续费"
 ],
 [
  "Partial data",
  "数据不完整"
 ],
 [
  "Price movement on both legs, funding, and the fees to open and close",
  "双腿价格变动盈亏、资金费及开平仓手续费"
 ],
 [
  "Didn't fill",
  "未成交"
 ],
 [
  "No position opened, no fees charged",
  "未建立仓位，未收取手续费"
 ],
 [
  "Hedge didn't fill",
  "对冲腿未成交"
 ],
 [
  "Pair broke",
  "对冲组合失衡"
 ],
 [
  "Closed at market",
  "已市价平仓"
 ],
 [
  "Pair details unavailable",
  "组合详情不可用"
 ],
 [
  "Couldn't load the history",
  "无法加载历史记录"
 ],
 [
  "Something went wrong fetching it. Try again, or refresh the page.",
  "获取数据时发生错误，请重试或刷新页面。"
 ],
 [
  "Each pair appears here once the bot closes it",
  "机器人完成平仓后，组合会显示在此处"
 ],
 [
  "No closed pairs yet",
  "暂无已平仓组合"
 ],
 [
  "Closed at",
  "平仓时间"
 ],
 [
  "Closed At",
  "平仓时间"
 ],
 [
  "What the cycle made or lost once closed: price movement on both legs, plus funding, less the fees to open and close",
  "该周期平仓后的盈亏：双腿价格变动盈亏加资金费，减去开平仓手续费"
 ],
 [
  "Duration",
  "持续时间"
 ],
 [
  "Why it closed",
  "平仓原因"
 ],
 [
  "CANCELED",
  "已撤销"
 ],
 [
  "CANCELLED",
  "已撤销"
 ],
 [
  "CANCELING",
  "撤销中"
 ],
 [
  "FAILED",
  "失败"
 ],
 [
  "FILLED",
  "全部成交"
 ],
 [
  "HEDGING",
  "对冲中"
 ],
 [
  "RESTING",
  "挂单等待成交"
 ],
 [
  "IN PROGRESS",
  "执行中"
 ],
 [
  "PLACED",
  "已提交至交易所"
 ],
 [
  "PARTIALLY FILLED",
  "部分成交"
 ],
 [
  "COMPLETED",
  "已完成"
 ],
 [
  "CREATED",
  "已创建"
 ],
 [
  "WAITING FOR TRIGGER",
  "等待触发"
 ],
 [
  "WATCHING",
  "监控中"
 ],
 [
  "CLOSING",
  "平仓中"
 ],
 [
  "CONDITION MET",
  "条件已满足"
 ],
 [
  "The bot sends one when it opens a pair",
  "机器人建立组合时会发送开仓委托"
 ],
 [
  "No orders yet",
  "暂无委托"
 ],
 [
  "Filled / ordered",
  "已成交 / 委托数量"
 ],
 [
  "Sent",
  "发送时间"
 ],
 [
  "Most funding",
  "资金费收益最高"
 ],
 [
  "Cheapest to hold",
  "持仓成本最低"
 ],
 [
  "Cheapest per cycle",
  "单周期成本最低"
 ],
 [
  "of volume each cycle,",
  "的每周期成交量，"
 ],
 [
  "is expected to",
  "预计将"
 ],
 [
  "of the position,",
  "的仓位，"
 ],
 [
  "after costs if held the full",
  "持有完整周期并扣除成本后"
 ],
 [
  "How it was picked",
  "组合选择依据"
 ],
 [
  "Funding paying",
  "资金费收益"
 ],
 [
  "Day average",
  "当日平均"
 ],
 [
  "Sides",
  "双腿方向"
 ],
 [
  "Open and close",
  "开仓与平仓"
 ],
 [
  ", over your",
  "，高于您的"
 ],
 [
  "Sized at",
  "投入规模"
 ],
 [
  "a venue, as much as both had free",
  "每个交易场所，按双方可用余额确定"
 ],
 [
  "The pair above it",
  "排名更高的组合"
 ],
 [
  "couldn't open",
  "无法开仓"
 ],
 [
  "Next best:",
  "次优组合："
 ],
 [
  "after costs",
  "扣除成本后"
 ],
 [
  "Over up to",
  "最长持仓期间"
 ],
 [
  "its funding is expected to bring",
  "预计资金费收益为"
 ],
 [
  "to open and close. The bot opens the best pair it can rather than wait for one that covers its costs",
  "开平仓成本。机器人会选择可执行的最优组合，而不会等待收益覆盖成本"
 ],
 [
  "The estimate counts no funding past the first week of the hold",
  "估算仅计入持仓首周的资金费"
 ],
 [
  "pairs on",
  "组组合位于"
 ],
 [
  "No position on this venue yet",
  "该交易场所暂无持仓"
 ],
 [
  "Net funding on both legs, counted in Est. PnL to close",
  "双腿净资金费，已计入预估平仓盈亏"
 ],
 [
  "Stopping the bot closes both legs at market instead:",
  "停止机器人时将改为以市价关闭双腿："
 ],
 [
  "in fees already paid is not in this figure. It shows in the cycle's Realized PnL once the pair closes.",
  "已付手续费未计入此数值，组合平仓后将体现在该周期的已实现盈亏中。"
 ],
 [
  "Entry order working",
  "开仓委托执行中"
 ],
 [
  "Broken pair",
  "对冲失衡的组合"
 ],
 [
  "The pair broke",
  "该组合的对冲已失衡"
 ],
 [
  "Unhedged leg",
  "未对冲仓位"
 ],
 [
  "Waiting for the second leg",
  "等待第二腿成交"
 ],
 [
  "How long the current spread takes to earn back what the pair cost to open and close",
  "按当前资金费率差赚回组合开平仓成本所需的时间"
 ],
 [
  "After the entry fills",
  "开仓成交后"
 ],
 [
  "Closing now",
  "正在平仓"
 ],
 [
  "Not at this spread",
  "按当前费率差无法回本"
 ],
 [
  "Over a month at this spread",
  "按当前费率差需超过一个月"
 ],
 [
  "If the bot closed it now, fees paid in",
  "若机器人现在平仓，已支付的手续费为"
 ],
 [
  "Funding at the current spread",
  "按当前费率差计算的资金费"
 ],
 [
  "An estimate at today's spread. It moves with funding, and the bot can still close sooner if funding turns.",
  "按当前费率差估算，数值随资金费率变化。若资金费率转为不利，机器人仍可能提前平仓。"
 ],
 [
  "View on Arbitrage Desk",
  "在套利终端查看"
 ],
 [
  "View order",
  "查看委托"
 ],
 [
  "The gap between the short leg's bid and the long leg's ask, as the desk shows it. Information only: the bot doesn't act on it",
  "空头腿买一价与多头腿卖一价之差，与终端显示一致。仅供参考，机器人不会据此操作"
 ],
 [
  "Held",
  "已持有"
 ],
 [
  "How long the pair has been held, against its max hold. It closes sooner if funding turns",
  "当前持仓时长及最长持仓时间。若资金费率转为不利，会提前平仓"
 ],
 [
  "Est. break-even",
  "预估回本时间"
 ],
 [
  "No positions yet. They appear once the entry order fills",
  "暂无持仓，开仓委托成交后将显示"
 ],
 [
  "The bot keeps checking every minute.",
  "机器人每分钟持续检查。"
 ],
 [
  "To widen the search, stop the bot and change",
  "若需扩大搜索范围，请停止机器人并调整"
 ],
 [
  "asset classes",
  "资产类别"
 ],
 [
  "your floor",
  "最低利润门槛"
 ],
 [
  "the max hold to a longer one, or the profit floor",
  "延长最长持仓时间，或调整最低利润门槛"
 ],
 [
  "the profit floor",
  "最低利润门槛"
 ],
 [
  "your limit",
  "成本上限"
 ],
 [
  "Those pairs would also miss your profit floor, so a higher cost limit alone would not open them.",
  "这些组合也未达到最低利润门槛，仅提高成本上限仍无法开仓。"
 ],
 [
  "No cost limit in the settings covers it, so only a cheaper pair will do.",
  "当前设置允许的所有成本上限均不足以覆盖，需等待成本更低的组合。"
 ],
 [
  "That is already the highest cost limit, so only a cheaper pair will do.",
  "已达到最高成本上限，需等待成本更低的组合。"
 ],
 [
  "were paying",
  "资金费收益为正"
 ],
 [
  "long enough",
  "持续时间足够"
 ],
 [
  "Looking for a pair",
  "正在寻找组合"
 ],
 [
  "The first scan runs within a minute",
  "首次扫描将在一分钟内进行"
 ],
 [
  "Reason unavailable",
  "原因不可用"
 ],
 [
  "Why pairs were left out, each counted once",
  "组合被排除的原因，每组仅计入一次"
 ],
 [
  "none passed your rules",
  "无组合符合您的规则"
 ],
 [
  "Closest to your limits",
  "最接近设定条件的组合"
 ],
 [
  "Annualized from the funding spread when the bot scanned",
  "按机器人扫描时的资金费率差年化计算"
 ],
 [
  "The price gap between the venues' mid prices when the bot scanned, positive when the short leg is dearer",
  "机器人扫描时两个交易场所的中间价差；空头腿价格更高时为正"
 ],
 [
  "Fees, slippage and the price gap to open and close the pair, as the bot priced it",
  "机器人估算的组合开平仓手续费、滑点与价差成本"
 ],
 [
  "Est. round-trip cost",
  "预估往返成本"
 ],
 [
  "Margin per venue the pair would open with: as much as both venues have free, up to your Max",
  "组合开仓时各交易场所投入的保证金：按双方可用余额确定，但不超过设定最高值"
 ],
 [
  "What the pair is expected to earn over the hold after costs, at its margin. Among pairs that pay, the bot tries the highest first",
  "按该保证金规模估算持仓期间扣除成本后的收益。机器人优先尝试盈利组合中预期收益最高者"
 ],
 [
  "Why it didn't open",
  "未开仓原因"
 ],
 [
  "Holding a pair it can no longer describe. Check both venues and close any leg left open.",
  "当前持有组合的信息已不可用。请检查两个交易场所并关闭剩余仓位。"
 ],
 [
  "Cooling down",
  "冷却中"
 ],
 [
  "Looks for the next pair",
  "寻找下一组组合的时间"
 ],
 [
  "Not running",
  "未运行"
 ],
 [
  "Start the bot to look for a pair",
  "启动机器人以寻找组合"
 ],
 [
  "Current strategy",
  "当前策略"
 ],
 [
  "Its open positions",
  "机器人的当前持仓"
 ],
 [
  "per venue ·",
  "每个交易场所 ·"
 ],
 [
  "x · up to",
  "倍 · 最长"
 ],
 [
  "All settings",
  "全部设置"
 ],
 [
  "Bot totals",
  "机器人累计数据"
 ],
 [
  "All cycles",
  "全部交易周期"
 ],
 [
  "All cycles, the open pair at mark. Fees are already taken off",
  "覆盖全部交易周期，当前组合按标记价估值，已扣除手续费"
 ],
 [
  "Everything the bot has made or lost over all its cycles, the open pair at mark, fees included",
  "机器人所有交易周期的累计盈亏，当前组合按标记价估值，已计入手续费"
 ],
 [
  "Funding received less funding paid on both legs, over every cycle",
  "所有交易周期中，双腿收到的资金费减去支付的资金费"
 ],
 [
  "Entries and exits, both legs",
  "双腿开仓与平仓"
 ],
 [
  "What both legs traded to open and close each pair, over every cycle",
  "所有交易周期中，双腿开平仓的累计成交量"
 ],
 [
  "Notional hours",
  "名义持仓小时数"
 ],
 [
  "Position size × time held",
  "仓位名义价值 × 持仓小时数"
 ],
 [
  "Each pair's entry notional times the hours it was held, summed over cycles: how much open interest the bot carried, and for how long",
  "将各组合的开仓名义价值乘以持仓小时数，再对全部周期求和，用于衡量机器人维持的未平仓量及持续时间"
 ],
 [
  "Its settings are out of date. Edit the bot to give it new ones.",
  "设置已过期，请编辑机器人以更新设置。"
 ],
 [
  "Couldn't load the bot",
  "无法加载机器人"
 ],
 [
  "Couldn't load your bots",
  "无法加载您的机器人"
 ],
 [
  "Something went wrong fetching them. Try again, or refresh the page.",
  "获取机器人时发生错误，请重试或刷新页面。"
 ],
 [
  "Bot not found",
  "未找到机器人"
 ],
 [
  "It was deleted, or the link points somewhere it never was.",
  "机器人已被删除，或链接无效。"
 ],
 [
  "Never started",
  "尚未启动"
 ],
 [
  "The pair the bot holds now. The asset opens it on the Arbitrage Desk",
  "机器人当前持有的组合。点击资产可在套利终端打开"
 ],
 [
  "Annualized from the held pair's current funding spread, projected, not realized",
  "按当前组合的资金费率差年化估算，属于预期值，非已实现收益"
 ],
 [
  "Margin and leverage, then the hold and cost limit. Hover a row for every setting",
  "依次显示保证金、杠杆、持仓期限和成本上限。悬停行可查看全部设置"
 ]
];
  const TEMPLATE_ENTRIES = [
 [
  "Strict {0}",
  "严格 {0}"
 ],
 [
  "Balanced {0}",
  "均衡 {0}"
 ],
 [
  "Flexible {0}",
  "宽松 {0}"
 ],
 [
  "Keeps a pair past {0} while the bot would still open it, so you don't pay fees to close and reopen it",
  "持仓超过 {0} 后，若仍符合开仓条件则继续持有，避免重复平仓和开仓的手续费"
 ],
 [
  "{0}, then longer while the bot would still open it. Another rule may close the pair sooner",
  "最长 {0}；若仍符合开仓条件则继续持有。其他规则可能更早触发平仓"
 ],
 [
  "{0}, then longer while the bot would still open it",
  "最长 {0}；若仍符合开仓条件则继续持有"
 ],
 [
  "Step {0}: {1}",
  "步骤 {0}：{1}"
 ],
 [
  "Step {0}",
  "步骤 {0}"
 ],
 [
  "{0} enabled",
  "{0} 已启用"
 ],
 [
  "You can now trade on {0}",
  "现在可以在 {0} 交易"
 ],
 [
  "Failed to enable {0}",
  "启用 {0} 失败"
 ],
 [
  "{0} enabled, builder approval pending",
  "{0} 已启用，等待构建者授权"
 ],
 [
  "{0} enabled, broker approval pending",
  "{0} 已启用，等待经纪商授权"
 ],
 [
  "Approving builder fee on {0}",
  "正在授权 {0} 构建者手续费"
 ],
 [
  "Approving broker on {0}",
  "正在授权 {0} 经纪商"
 ],
 [
  "Registering agent with {0}",
  "正在 {0} 注册代理"
 ],
 [
  "Registering API key with {0}",
  "正在 {0} 注册 API 密钥"
 ],
 [
  "Signing in to {0}",
  "正在登录 {0}"
 ],
 [
  "Re-approve {0}",
  "重新授权 {0}"
 ],
 [
  "Changing {0} account type",
  "正在更改 {0} 账户类型"
 ],
 [
  "{0} account type changed",
  "{0} 账户类型已更改"
 ],
 [
  "{0} account type unchanged",
  "{0} 账户类型未更改"
 ],
 [
  "{0} allows one downgrade every 24 hours — try again later",
  "{0} 每 24 小时仅允许降级一次，请稍后重试"
 ],
 [
  "Sign up for {0}",
  "注册 {0}"
 ],
 [
  "Open {0} API Management",
  "打开 {0} API 管理"
 ],
 [
  "Bridge fee went up while quoting, and {0} balance no longer covers it. Try a smaller amount.",
  "报价期间跨链桥费用上涨，{0} 余额已不足以支付，请尝试较小金额。"
 ],
 [
  "Please sign the {0}...",
  "请签署{0}…"
 ],
 [
  "Minimum {0} {1}",
  "最低 {0} {1}"
 ],
 [
  "Maximum {0} {1}",
  "最高 {0} {1}"
 ],
 [
  "Robinhood settles in {0} on its own chain",
  "Robinhood 在其专用链上使用 {0} 结算"
 ],
 [
  "Swap USDC for {0} on LI.FI",
  "在 LI.FI 将 USDC 兑换为 {0}"
 ],
 [
  "Connect {0} and earn points",
  "连接 {0} 并赚取积分"
 ],
 [
  "Swapping {0} {1} to {2}...",
  "正在将 {0} {1} 兑换为 {2}…"
 ],
 [
  "Received {0} {1}. Price {2} USDC/USDH.",
  "已收到 {0} {1}，价格 {2} USDC/USDH。"
 ],
 [
  "Minimum swap size is {0} {1}",
  "最低兑换数量为 {0} {1}"
 ],
 [
  "{0} — Coming soon",
  "{0} — 即将上线"
 ],
 [
  "Updated {0} min ago",
  "{0} 分钟前更新"
 ],
 [
  "Couldn't connect to {0}",
  "无法连接 {0}"
 ],
 [
  "Copy {0}",
  "复制{0}"
 ],
 [
  "This token will expire on {0}.",
  "此令牌将于 {0} 到期。"
 ],
 [
  "At {0} an hour",
  "每小时 {0}"
 ],
 [
  "{0}, {1} over the day",
  "{0}，全天合计 {1}"
 ],
 [
  "After {0}",
  "经过 {0} 后"
 ],
 [
  "Expected to net {0}",
  "预期净收益 {0}"
 ],
 [
  "{0}, {1} of the way there",
  "{0}，已达到强平路径的 {1}"
 ],
 [
  "The {0} moved {1} of the way from its entry price to liquidation, so the bot closed the pair before it could be liquidated. Set a lower leverage or keep more free margin on {2} to give the leg more room.",
  "{0} 从开仓价向强平价移动的幅度已达到全程的 {1}，因此机器人提前平仓以避免强平。可降低杠杆，或在 {2} 保留更多可用保证金以增加缓冲。"
 ],
 [
  "Closed at market on {0}",
  "已在 {0} 市价平仓"
 ],
 [
  "{0} refused the hedge: {1}",
  "{0} 拒绝了对冲委托：{1}"
 ],
 [
  "Exit attempt {0}",
  "第 {0} 次平仓尝试"
 ],
 [
  "Limit {0}",
  "限价 {0}"
 ],
 [
  "the best of {0} pairs that passed your rules",
  "符合规则的 {0} 组组合中的最优组合"
 ],
 [
  "ranked {0} of {1} that passed your rules",
  "在符合规则的 {1} 组组合中排名第 {0}"
 ],
 [
  "Each cycle of up to {0}",
  "每个周期最长 {0}"
 ],
 [
  "Holding it up to {0}",
  "最长持有 {0}"
 ],
 [
  "{0} of your {1} limit",
  "{0}，您设定的上限为 {1}"
 ],
 [
  "The {0} pairs above it",
  "排名更高的 {0} 组组合"
 ],
 [
  "The {0} price gap at entry was in its favour, and the estimate doesn't rely on it",
  "开仓时 {0} 的价差有利于该组合，估算未依赖这部分收益"
 ],
 [
  "The {0} price gap at entry was against it, so it's counted in the cost",
  "开仓时 {0} 的价差不利于该组合，已计入成本"
 ],
 [
  "{0} filled, hedging on {1}",
  "{0} 已成交，正在 {1} 对冲"
 ],
 [
  "{0} limit resting on {1}",
  "{0} 限价单正在 {1} 挂单"
 ],
 [
  "what is left of {0}",
  "{0} 的剩余仓位"
 ],
 [
  "the unhedged {0} leg",
  "未对冲的{0}腿"
 ],
 [
  "{0} didn't fill the hedge",
  "{0} 的对冲委托未成交"
 ],
 [
  "Last action: {0} {1}",
  "最近操作：{0} {1}"
 ],
 [
  "{0} open · Not managed while the bot is stopped",
  "{0} 持仓中 · 机器人停止期间不管理仓位"
 ],
 [
  "Closing {0}, then stopping",
  "正在关闭 {0}，完成后停止"
 ],
 [
  "Opening {0}",
  "正在建立 {0}"
 ],
 [
  "Closing {0} · attempt {1}",
  "正在关闭 {0} · 第 {1} 次尝试"
 ],
 [
  "Closing {0}",
  "正在关闭 {0}"
 ],
 [
  "Holding {0}",
  "持有 {0}"
 ],
 [
  " · extended {0}",
  " · 已延长 {0}"
 ],
 [
  ", {0} an hour",
  "，每小时 {0}"
 ],
 [
  "In about {0} days",
  "约 {0} 天后"
 ],
 [
  "In about {0}",
  "约 {0} 后"
 ],
 [
  "The pair's current funding spread{0}, annualized. Projected, not realized",
  "组合当前资金费率差 {0} 的年化值，属于预期值，非已实现收益"
 ],
 [
  "No open position found on {0} or {1} for this pair",
  "未在 {0} 或 {1} 找到该组合的持仓"
 ],
 [
  "{0} (long {1}, short {2})",
  "{0}（做多 {1}，做空 {2}）"
 ],
 [
  "{0} passed your rules but none could open. The table says what stopped each one. {1}",
  "{0} 符合规则，但均无法开仓。表格列出了各组合的阻碍原因。{1}"
 ],
 [
  "The scanner returned no pairs for these venues and {0}. {1} the settings to add venues or {2}.",
  "扫描器未找到符合这些交易场所及 {0} 的组合。请{1}设置以添加交易场所或{2}。"
 ],
 [
  "your {0} Min",
  "您设定的最低值 {0}"
 ],
 [
  "{0} passed your rules, but a venue had less than {1} free. Top up the venue the warning names. {2} {3} Min to a lower amount.",
  "{0} 符合规则，但某交易场所的可用余额低于 {1}。请为警告中指出的场所补充资金，或{2}{3}最低值。"
 ],
 [
  "{0} passed your rules, but a venue's balance couldn't be read. That usually clears on its own. {1}",
  "{0} 符合规则，但无法读取某交易场所的余额。通常会自行恢复。{1}"
 ],
 [
  "{0} passed your rules, but another of your bots is entering on one of their venues. {1}",
  "{0} 符合规则，但您的另一机器人正在相关交易场所开仓。{1}"
 ],
 [
  "{0} {1} {2} {3} to {4} if you are farming points.",
  "{0} {1}。若以赚取积分为目标，可{2}{3}至 {4}。"
 ],
 [
  "{0} passed every other check but are not expected to earn {1} more than they cost over the hold.",
  "{0} 通过其他全部检查，但预计持仓收益无法超出成本 {1}。"
 ],
 [
  "your {0} limit",
  "您设定的 {0} 上限"
 ],
 [
  "The cheapest pair over {0}, {1}, costs {2} to open and close.",
  "在 {0} 期间成本最低的组合为 {1}，开平仓成本为 {2}。"
 ],
 [
  "{0} passed every other check but cost more than {1} to open and close.",
  "{0} 通过其他全部检查，但开平仓成本超过 {1}。"
 ],
 [
  "A pair that always includes {0} pays at least {1} in fees alone, before slippage.",
  "始终包含 {0} 的组合仅手续费就至少为 {1}，尚未计入滑点。"
 ],
 [
  "{0} the cost limit to {1}, {2}, to open it.",
  "请{0}成本上限至 {1}，{2}，以允许开仓。"
 ],
 [
  "{0} the cost limit to {1}, {2}.",
  "请{0}成本上限至 {1}，{2}。"
 ],
 [
  "{0} {1} but a venue was not quoting both sides, so their cost could not be priced. That usually clears on its own. {2}",
  "{0} {1}，但某交易场所未提供双向报价，无法估算成本。通常会自行恢复。{2}"
 ],
 [
  "{0} {1} but would go {2} on {3}. {4} {5} {6}'s side to Any.",
  "{0} {1}，但需要在 {3} 建立{2}仓位。可{4}{5}，将 {6} 的方向改为不限。"
 ],
 [
  "{0} {1} but would go against a side you set. {2} {3} a venue's side to Any.",
  "{0} {1}，但不符合指定方向。可{2}{3}，将相关交易场所的方向改为不限。"
 ],
 [
  "{0} {1} but had no leg on {2}. {3} {4} the venues or stop always including it.",
  "{0} {1}，但不包含 {2}。可{3}{4}交易场所，或取消该场所的必选设置。"
 ],
 [
  "{0} are paying now but paid nothing over the last day. {1}",
  "{0} 当前资金费收益为正，但过去一天无资金费收入。{1}"
 ],
 [
  "{0} {1} the funding rule to {2} to enter on the spread alone.",
  "{0}。可{1}资金费率规则为 {2}，以仅按当前费率差开仓。"
 ],
 [
  "{0} are paying now but their spread has not stayed positive for {1}, or they are too new to have a day of funding history. {2}",
  "{0} 当前资金费收益为正，但正费率差未持续满 {1}，或上线过短、不足一天历史。{2}"
 ],
 [
  "{0} {1} the funding rule to {2}.",
  "{0}。可{1}资金费率规则为 {2}。"
 ],
 [
  "No pair passed your rules in the last scan. {0}",
  "上次扫描没有组合符合您的规则。{0}"
 ],
 [
  "No pair is paying funding in this direction right now, so there is nothing to change. {0}",
  "当前没有组合在此方向获得资金费，因此无需调整设置。{0}"
 ],
 [
  "Costs {0}, over your {1} limit",
  "成本 {0}，超过设定上限 {1}"
 ],
 [
  "Costs {0}, over your limit",
  "成本 {0}，超过设定上限"
 ],
 [
  "Expected {0}, under your profit floor",
  "预期收益 {0}，低于最低利润门槛"
 ],
 [
  "Expected {0}, under your {1} floor",
  "预期收益 {0}，低于最低门槛 {1}"
 ],
 [
  "{0} passed your rules",
  "{0} 符合您的规则"
 ],
 [
  "between {0} and {1}",
  "介于 {0} 至 {1}"
 ],
 [
  "at {0}",
  "于 {0}"
 ],
 [
  "by {0}",
  "不迟于 {0}"
 ],
 [
  "Your {0} positions on {1} and {2}",
  "您在 {1} 和 {2} 的 {0} 持仓"
 ],
 [
  "Includes partial data from {0} {1}",
  "包含 {0} 个{1}的不完整数据"
 ],
 [
  "All {0} {1}, the open pair at mark. Fees are already taken off",
  "全部 {0} 个{1}，当前组合按标记价估值，已扣除手续费"
 ],
 [
  "Back to {0}",
  "返回{0}"
 ],
 [
  "Closes the pair once funding and price moves beat its costs by {0}, then finds the next one",
  "资金费收入与价格变动收益超出成本 {0} 时平仓，然后寻找下一组组合"
 ],
 [
  "Remove {0}",
  "移除 {0}"
 ],
 [
  "It keeps the pairs that cost up to {0} to open and close, whatever funding pays",
  "保留开平仓成本不超过 {0} 的组合，不限定资金费收益"
 ],
 [
  "It keeps the pairs paying funding right now that cost up to {0} to open and close",
  "保留当前资金费收益为正且开平仓成本不超过 {0} 的组合"
 ],
 [
  "It keeps the pairs whose funding spread has stayed positive for {0} hours and paid over the last day, and that cost up to {1} to open and close",
  "保留资金费率差连续 {0} 小时为正、过去一天产生资金费收入且开平仓成本不超过 {1} 的组合"
 ],
 [
  "a leg is {0}% of the way to liquidation",
  "某一腿达到从开仓价向强平价路径的 {0}%"
 ],
 [
  "funding and price moves beat its costs by {0}",
  "资金费收入与价格变动收益超出成本 {0}"
 ],
 [
  "waits {0} and starts",
  "等待 {0} 后开始"
 ],
 [
  ", and of those only the ones whose funding over the hold should beat that cost by {0}",
  "，且仅选择预期持仓资金费收益超出成本 {0} 的组合"
 ],
 [
  " and closes it sooner when {0}",
  "，并在 {0} 时提前平仓"
 ],
 [
  "Waits for sustained positive funding, then holds up to {0} at {1}x",
  "等待资金费收益持续为正，再以 {1} 倍杠杆持仓，最长 {0}"
 ],
 [
  "Stays in a pair up to {0} at {1}x, leaving once funding stops paying over the day",
  "以 {1} 倍杠杆持仓，最长 {0}；过去一天资金费不再产生收益时退出"
 ],
 [
  "Closes at break even or after {0} at most, whatever funding pays, then searches again. Pays fees every cycle.",
  "达到盈亏平衡或最长持仓 {0} 后平仓，不限定资金费收益，随后再次寻找组合。每个周期均支付手续费。"
 ],
 [
  "At {0}x, a move of under {1}% against one leg can liquidate it, hedged or not",
  "使用 {0} 倍杠杆时，即使已对冲，某一腿遭遇不足 {1}% 的不利价格变动也可能被强平"
 ],
 [
  "Exits the pair at market once a leg is {0}% of the way to liquidation{1}. A higher setting holds through bigger swings but leaves less room if the price gaps.",
  "当某一腿达到开仓价至强平价路径的 {0}% 时，以市价退出组合{1}。更高阈值允许更大波动，但价格跳空时的缓冲空间更小。"
 ],
 [
  ", a move of under {0}% at {1}x",
  "，对应 {1} 倍杠杆下不足 {0}% 的价格变动"
 ],
 [
  "Needs {0} · Skipped",
  "需要 {0} · 已跳过"
 ],
 [
  "Needs {0} available to be in every pair",
  "要包含在每组组合中，可用余额需达到 {0}"
 ],
 [
  "Side on {0}",
  "{0} 的持仓方向"
 ],
 [
  "{0} (a week)",
  "{0}（一周）"
 ],
 [
  "Enter whole minutes from 1 to {0}",
  "请输入 1 至 {0} 的整数分钟数"
 ],
 [
  "Enter whole minutes for Min, up to {0}",
  "请输入最短时间的整数分钟数，最大为 {0}"
 ],
 [
  "Waits a random {0} after a pair closes before looking for the next",
  "组合平仓后随机等待 {0} 再寻找下一组"
 ],
 [
  "Waits {0} after a pair closes before looking for the next",
  "组合平仓后等待 {0} 再寻找下一组"
 ],
 [
  "Each venue funds its own leg from its own balance. The smallest selected balance is {0} on {1}",
  "每一腿均使用所在交易场所的余额。所选场所中最小余额为 {1} 的 {0}"
 ],
 [
  "Set a venue to {0} or Any. Every pair needs a {1} leg",
  "请将某交易场所设为{0}或不限方向。每组组合均需要{1}腿"
 ],
 [
  "Example: after {0}, the pair still passes your funding rule and cost limit. On, the bot keeps it and checks it again every minute. Off, it closes the pair and may open the same one again.",
  "例如：经过 {0} 后，组合仍符合资金费率规则与成本上限。开启时，机器人继续持有并每分钟复查；关闭时，将平仓，并可能再次建立相同组合。"
 ],
 [
  "Keeps a pair past {0} {1}, so you don't pay fees to close and reopen it",
  "持仓超过 {0} 后，{1}仍继续持有，避免重复平仓和开仓的手续费"
 ],
 [
  "Closes each pair at {0}, even one the bot would open again right away. Each close and reopen pays fees and adds volume",
  "每组组合在 {0} 后平仓，即使机器人随后会立即重新开仓。每次平仓和重开都会支付手续费并增加成交量"
 ],
 [
  ", then longer {0}",
  "，之后{0}可继续延长"
 ],
 [
  "{0} {1} no pair on the selected venues and sides. Remove {2} to save",
  "{0} {1} 无法在所选交易场所与方向中组成组合。请移除 {2} 后保存"
 ],
 [
  "Tick one more venue to start. {0} is the only one selected",
  "请再勾选一个交易场所，目前仅选择了 {0}"
 ],
 [
  "Enter a Min above $0, or leave it empty for {0}",
  "请输入大于 $0 的最低值，留空使用 {0}"
 ],
 [
  "{0} can't fund a {1} leg, so no pair can open until it can",
  "{0} 的余额不足以建立{1}腿，补足前无法开仓"
 ],
 [
  "Can't open a pair with these balances yet. None of these venues can fund a {0} leg.",
  "当前余额无法建立组合，所选交易场所均无法为{0}腿提供保证金。"
 ],
 [
  "Can't open a pair with these balances yet. Only {0} can fund a {1} leg.",
  "当前余额无法建立组合，仅 {0} 能为{1}腿提供保证金。"
 ],
 [
  "Can't open a pair with these balances yet. Two Hyperliquid legs need {0} from the one balance they share.",
  "当前余额无法建立组合。两条 Hyperliquid 腿共享同一余额，需要合计 {0}。"
 ],
 [
  "Up to {0} per leg",
  "每腿最高 {0}"
 ],
 [
  "{0}–{1} per leg",
  "每腿 {0}–{1}"
 ],
 [
  "At least {0}–{1} over costs",
  "超出成本至少 {0}–{1}"
 ],
 [
  "At least {0} over costs",
  "超出成本至少 {0}"
 ],
 [
  "Up to {0}: {1}–{2} on each venue",
  "合计最高 {0}：每个交易场所 {1}–{2}"
 ],
 [
  "{0}: {1} on each venue",
  "合计 {0}：每个交易场所 {1}"
 ],
 [
  "Up to {0} to open and close{1}",
  "开平仓成本最高 {0}{1}"
 ],
 [
  ", {0} a pair",
  "，每组组合 {0}"
 ],
 [
  "Opens one pair at a time, using {0}",
  "每次建立一组组合，使用 {0}"
 ],
 [
  "trading {0} only",
  "仅交易 {0}"
 ],
 [
  "in {0} only",
  "仅限 {0}"
 ],
 [
  "with one leg always resting on {0}",
  "其中一腿始终在 {0} 挂单"
 ],
 [
  "going {0}",
  "方向为 {0}"
 ],
 [
  " · last action: {0} {1}",
  " · 最近操作：{0} {1}"
 ],
 [
  "{0} per venue · {1}x",
  "每个交易场所 {0} · {1} 倍"
 ],
 [
  "Every minute it checks the pairs on your venues against your goal's funding rule and cost limit. Of those that pass, it opens the one expected to earn the most funding over the hold, after the cost to open and close. Earn funding also waits for a pair expected to clear its costs by {0}.",
  "机器人每分钟按目标的资金费率规则与成本上限筛选组合，并在符合条件者中，选择扣除开平仓成本后、预期持仓资金费收益最高的组合。“赚取资金费”目标还要求预期收益超出成本 {0}。"
 ],
 [
  "This bot executes hedge orders with sustained long-term funding, and holds them up to {0}",
  "机器人在资金费收益持续为正时执行对冲交易，最长持仓 {0}"
 ],
 [
  "This bot hedges orders for up to {0} until funding stops accumulating over 24 hours, generating Open Interest",
  "机器人通过对冲维持未平仓量，最长持仓 {0}；过去 24 小时不再累积资金费收益时退出"
 ],
 [
  "This bot hedges assets for up to {0} at a time, whatever funding pays, generating volume on every cycle",
  "机器人每次对冲持仓最长 {0}，不限定资金费收益，通过每个周期的开平仓累积成交量"
 ],
 [
  "Best fit for {0}",
  "适用场所：{0}"
 ],
 [
  "Up to {0}",
  "最高 {0}"
 ],
 [
  "Enters once the funding spread has stayed positive for {0} hours",
  "资金费率差连续 {0} 小时为正后开仓"
 ],
 [
  "Enters only when funding over the hold should beat the costs by {0}",
  "仅在预期持仓资金费收益超出成本 {0} 时开仓"
 ],
 [
  "After {0}h of positive funding",
  "正资金费率差持续 {0} 小时后"
 ],
 [
  "{0} and {1} more",
  "{0} 及其他 {1} 项"
 ],
 [
  "{0} only on {1}",
  "{0}仅限 {1}"
 ],
 [
  "{0}% of the way",
  "达到强平路径的 {0}%"
 ],
 [
  "{0} to open and close",
  "开平仓成本 {0}"
 ],
 [
  "On, {0}",
  "开启，{0}"
 ],
 [
  "Your {0} pair has open positions on {1} and {2}.",
  "您的 {0} 组合在 {1} 和 {2} 仍有未平仓位。"
 ],
 [
  "Long on {0}",
  "在 {0} 做多"
 ],
 [
  "Short on {0}",
  "在 {0} 做空"
 ],
 [
  "Clear {0} filter",
  "清除{0}筛选"
 ],
 [
  "F Spread {0} ≥",
  "{0}资金费率差 ≥"
 ],
 [
  "Min F Spread {0}",
  "最低{0}资金费率差"
 ],
 [
  "Filling {0} here moves the price by {1}% or more on one leg (under {2}%). Check the order book before sizing up.",
  "按 {0} 成交时，某一腿的价格冲击达到 {1}% 或以上（低于 {2}%）。加大规模前请检查订单簿。"
 ],
 [
  "Trade {0}",
  "交易 {0}"
 ],
 [
  "{0} · 3 days · est.",
  "{0} · 3 天 · 估算"
 ],
 [
  "{0} · one-shot · est.",
  "{0} · 单次交易 · 估算"
 ],
 [
  "{0} APR",
  "{0} 年化收益率"
 ],
 [
  "{0} spread",
  "{0} 费率差"
 ],
 [
  "On margin at {0}x",
  "按 {0} 倍杠杆的保证金计算"
 ],
 [
  "On {0} per leg",
  "按每腿 {0} 计算"
 ],
 [
  "Longs pay shorts while funding is positive — this leg {0} if it's still open at settlement.",
  "资金费率为正时，多头向空头支付；若结算时此腿仍持仓，将{0}。"
 ],
 [
  "Price impact at {0}",
  "规模 {0} 对应的价格冲击"
 ],
 [
  "Best is the first price you would get. Mid sits halfway between buy and sell, so that column also counts half of that gap.{0}",
  "最优价是最先可成交的价格。中间价位于买卖报价正中，因此该列也计入半个买卖价差。{0}"
 ],
 [
  "At {0}",
  "规模 {0}"
 ],
 [
  "{0} {1}. Try a smaller Size under Settings.",
  "{0} {1}。请在设置中降低规模。"
 ],
 [
  "Value at {0}",
  "规模 {0} 对应金额"
 ],
 [
  "Open {0} strategy: long {1}, short {2}",
  "打开 {0} 策略：做多 {1}，做空 {2}"
 ],
 [
  "Collapse {0} pairs",
  "收起 {0} 的组合"
 ],
 [
  "Expand {0} pairs",
  "展开 {0} 的组合"
 ],
 [
  "Open the best {0} strategy in a new tab",
  "在新标签页打开 {0} 的最优策略"
 ],
 [
  "F Spread {0}",
  "{0}资金费率差"
 ],
 [
  "The same funding-rate difference the APR annualizes, over {0} — what the pair earns for every {1} it stays open. Underneath, how long the spread has stayed positive.",
  "将年化收益率对应的费率差按 {0} 展示，即组合每持有 {1} 的资金费收益。下方显示费率差持续为正的时间。"
 ],
 [
  "Funding Spread ({0})",
  "资金费率差（{0}）"
 ],
 [
  "Funding {0}",
  "{0}资金费率"
 ],
 [
  "Each leg's funding rate over {0} and the time until its next funding payment.",
  "各腿的{0}资金费率及下次结算倒计时。"
 ],
 [
  "Funding Rate ({0})",
  "资金费率（{0}）"
 ],
 [
  "The widest {0} funding spread this pair reached in the last hour.",
  "该组合过去 1 小时内最大的{0}资金费率差。"
 ],
 [
  "Max Funding Spread ({0}, last hour)",
  "最大资金费率差（{0}，近 1 小时）"
 ],
 [
  "The widest {0} funding spread this pair reached in the last 24 hours — how rich the funding edge has been recently.",
  "该组合过去 24 小时内最大的{0}资金费率差，用于衡量近期资金费收益优势。"
 ],
 [
  "Max Funding Spread ({0}, last 24h)",
  "最大资金费率差（{0}，近 24 小时）"
 ],
 [
  "The {0} funding spread averaged over the last 24 hours. Far under Max F 24h means the edge spiked rather than held. No value when the pair has less than 12 hours of history.",
  "过去 24 小时的{0}资金费率差均值。若远低于近 24 小时最高值，说明收益优势主要来自短时突升。历史不足 12 小时时不显示。"
 ],
 [
  "Average Funding Spread ({0}, last 24h)",
  "平均资金费率差（{0}，近 24 小时）"
 ],
 [
  "{0} rejected the order: {1}",
  "{0} 拒绝委托：{1}"
 ],
 [
  "{0} Your {1} leg went through — check the Arbitrage Desk and close it if the pair is left one-sided.",
  "{0} 您的{1}腿已提交，请检查套利终端；若仅单侧持仓，请关闭该腿。"
 ],
 [
  "{0} leg: {1}",
  "{0}腿：{1}"
 ],
 [
  "Each step must be at least ${0}",
  "每步规模至少为 ${0}"
 ],
 [
  "Each step is below the minimum order on {0}",
  "每步规模低于 {0} 的最小委托要求"
 ],
 [
  "Each step is above the maximum order on {0}",
  "每步规模超过 {0} 的最大委托限制"
 ],
 [
  "Use {0} steps",
  "使用 {0} 步"
 ],
 [
  "{0} — change the size",
  "{0}，请调整规模"
 ],
 [
  "{0} is not available in your region. Choose a strategy on other venues.",
  "{0} 在您所在地区不可用，请选择其他交易场所的策略。"
 ],
 [
  "You already have an open {0} position. Close it in Positions first, otherwise this new pair would take it over.",
  "您已有 {0} 持仓。请先在持仓页平仓，否则新组合会接管该仓位。"
 ],
 [
  "{0} API key is invalid or expired. Reconnect to continue.",
  "{0} API 密钥无效或已过期，请重新连接。"
 ],
 [
  "{0} agent fee approval is missing or outdated. Re-approve it to continue trading.",
  "{0} 的代理手续费授权缺失或已过期，请重新授权后交易。"
 ],
 [
  "No {0} price for this pair right now.",
  "该组合暂无{0}价格。"
 ],
 [
  "No {0} quote for this order right now — try a different size",
  "此委托暂无{0}报价，请尝试调整规模"
 ],
 [
  "Not enough margin on {0}.",
  "{0} 保证金不足。"
 ],
 [
  "Open in {0} Steps",
  "分 {0} 步开仓"
 ],
 [
  "{0} in {1} steps",
  "分 {1} 步{0}"
 ],
 [
  "Long and short sizes differ by {0}% in {1} terms — the position won't be fully hedged.",
  "按 {1} 计算，多空规模相差 {0}%，仓位无法完全对冲。"
 ],
 [
  "{0} APR · {1} 1h",
  "{0} 年化 · {1} / 小时"
 ],
 [
  "Long · {0}",
  "多头 · {0}"
 ],
 [
  "Short · {0}",
  "空头 · {0}"
 ],
 [
  "One leg of this strategy is on {0}, so it can’t be opened",
  "策略中的一腿位于 {0}，因此无法开仓"
 ],
 [
  "{0} isn’t available to trade yet",
  "{0} 暂未开放交易"
 ],
 [
  "{0} not available yet · VOOI Ultra",
  "{0} 暂不可用 · VOOI Ultra"
 ],
 [
  "Trade {0} on VOOI",
  "在 VOOI 交易 {0}"
 ],
 [
  "Open {0} on {1}",
  "在 {1} 建立 {0} 仓位"
 ],
 [
  "VOOI Ultra – {0} Arbitrage",
  "VOOI Ultra – {0} 套利"
 ],
 [
  "Analyze the historic funding spread for {0} on VOOI Ultra.",
  "在 VOOI Ultra 分析 {0} 的历史资金费率差。"
 ],
 [
  "Min Funding {0}",
  "最低{0}资金费率"
 ],
 [
  "Trade {0} {1} on {2}",
  "在 {2} 交易 {0} {1}"
 ],
 [
  "{0} · 3 days · funding only",
  "{0} · 3 天 · 仅资金费"
 ],
 [
  "at least {0} daily volume and {1} open interest",
  "日成交量至少 {0}、未平仓量至少 {1}"
 ],
 [
  "Highest funding one side receives right now, among markets with {0}",
  "在符合 {0} 的市场中，当前单侧收到的最高资金费率"
 ],
 [
  "Highest funding among markets trading at least {0} a day, where a position fills without moving the price",
  "在日成交量至少 {0} 且成交不产生价格冲击的市场中，最高的资金费率"
 ],
 [
  "Highest funding on {0}, which also pay points. Points are paid on each venue's own terms and are not guaranteed.",
  "{0} 中最高的资金费率，同时可获得积分。积分按各场所规则发放，不作保证。"
 ],
 [
  "The market's funding rate over {0} and the time until its next funding payment. Positive means longs pay shorts.",
  "该市场的{0}资金费率及下次结算倒计时。正值表示多头向空头支付。"
 ],
 [
  "The highest {0} funding rate in favor of this side over the last hour",
  "过去 1 小时内最有利于当前方向的{0}资金费率"
 ],
 [
  "Max Funding ({0}, last hour)",
  "最高资金费率（{0}，近 1 小时）"
 ],
 [
  "The highest {0} funding rate in favor of this side over the last 24 hours",
  "过去 24 小时内最有利于当前方向的{0}资金费率"
 ],
 [
  "Max Funding ({0}, last 24h)",
  "最高资金费率（{0}，近 24 小时）"
 ],
 [
  "{0}Please sign your transaction in the wallet...",
  "{0}请在钱包中签署交易…"
 ],
 [
  "{0} (Fee: {1})",
  "{0}（手续费：{1}）"
 ],
 [
  "{0} margin in use",
  "占用保证金 {0}"
 ],
 [
  "{0}. Another rule may close the pair sooner",
  "{0}。其他规则可能更早触发平仓"
 ],
 [
  "Waiting for a pair expected to clear its costs by {0}. The closest, {1}, is at {2}.",
  "正在等待预期收益超出成本 {0} 的组合。最接近条件的是 {1}，当前为 {2}。"
 ],
 [
  "Highest net funding spread {0} can enter with low price impact and enough liquidity to fill",
  "{0} 可在价格冲击较低且流动性充足时开仓的最高净资金费率差"
 ],
 [
  "Widest executable price spread {0} can fill without moving the book",
  "{0} 可在不产生订单簿价格冲击时成交的最大价差"
 ],
 [
  "Ends in {0}",
  "距结束还有 {0}"
 ],
 [
  "Starts in {0}",
  "距开始还有 {0}"
 ],
 [
  "Ended {0}",
  "结束于 {0}"
 ],
 [
  "{0} points",
  "{0} 积分"
 ],
 [
  "{0} Xpoints",
  "{0} X 积分"
 ],
 [
  "{0} bps",
  "{0} 基点"
 ],
 [
  "{0} venues",
  "{0} 个交易场所"
 ],
 [
  "{0} venue",
  "{0} 个交易场所"
 ],
 [
  "Vol. {0}",
  "成交量 {0}"
 ],
 [
  "Connect your wallet and {0} Perps account on VOOI.",
  "在 VOOI 连接钱包与 {0} 永续合约账户。"
 ],
 [
  "Trade {0} markets",
  "交易 {0} 市场"
 ],
 [
  "Single-trade or delta-neutral. Only {0} Perps volume routed through VOOI counts.",
  "可进行单腿或 Delta 中性交易。仅统计经由 VOOI 执行的 {0} 永续合约成交量。"
 ],
 [
  "Qualified from {0} volume on {1} Perps markets.",
  "在 {1} 永续合约市场达到 {0} 成交量即可获得资格。"
 ],
 [
  "{0} of {1}",
  "{0} / {1}"
 ],
 [
  "{0} of {1}.",
  "{0} / {1}。"
 ],
 [
  "{0} of {1} total",
  "{0} / 共 {1}"
 ],
 [
  "Maximum order size on {0} is {1} {2}.",
  "{0} 的最大委托规模为 {1} {2}。"
 ],
 [
  "Minimum order size on {0} is {1} {2}.",
  "{0} 的最小委托规模为 {1} {2}。"
 ],
 [
  "{0} needs at least {1} {2} — close a bigger share",
  "{0} 至少要求 {1} {2}，请提高平仓比例"
 ],
 [
  "Open pos. {0}x",
  "当前持仓 {0} 倍杠杆"
 ],
 [
  "{0} supports up to {1}x for {2}. Lower the leverage to continue.",
  "{0} 对 {2} 最高支持 {1} 倍杠杆，请降低杠杆后继续。"
 ],
 [
  "{0} is not opening new positions above {1}x for {2} right now. Lower the leverage to continue.",
  "{0} 当前不接受 {2} 超过 {1} 倍杠杆的新开仓，请降低杠杆。"
 ],
 [
  "{0} is not opening new positions for {1} right now.",
  "{0} 当前不接受 {1} 的新开仓。"
 ],
 [
  "{0} has {1}x leverage set for {2}. Update it to {3}x to open this position.",
  "{0} 的 {2} 杠杆当前为 {1} 倍，请改为 {3} 倍后开仓。"
 ],
 [
  "You already have an open {0}x position on {1}.",
  "您在 {1} 已有 {0} 倍杠杆的持仓。"
 ],
 [
  "Not enough margin on {0} for both hedge positions. Need {1} more.",
  "{0} 的保证金不足以建立双腿对冲仓位，还需要 {1}。"
 ],
 [
  "Not enough margin on {0}. Need {1} more.",
  "{0} 保证金不足，还需要 {1}。"
 ],
 [
  "Minimum position size is ${0} {1}",
  "最低仓位规模为 ${0} {1}"
 ],
 [
  "Minimum position size is ${0} {1}.",
  "最低仓位规模为 ${0} {1}。"
 ],
 [
  "Failed to get execution price for {0} order.",
  "无法获取{0}委托的成交价格。"
 ],
 [
  "Reduce {0}",
  "减仓 {0}"
 ],
 [
  "Re-enable trading on {0} to continue.",
  "请重新启用 {0} 的交易后继续。"
 ],
 [
  "{0} is not available in your region. Choose another venue for this market.",
  "{0} 在您所在地区不可用，请为此市场选择其他交易场所。"
 ],
 [
  "No {0} quote available for this order right now.",
  "此委托当前没有可用的{0}报价。"
 ],
 [
  "No open {0} {1} position to reduce{2}.",
  "没有可减仓的 {0} {1} 持仓{2}。"
 ],
 [
  "{0} does not support {1} orders.",
  "{0} 不支持{1}委托。"
 ],
 [
  "An ALO order at this price would be cancelled. Set a price {0} the market price.",
  "此价格的只挂单委托会被撤销，请设置为{0}市场价格。"
 ],
 [
  "At this price the order fills right away, at taker fees, unless {0} rejects it as too far from the mark price.",
  "该价格将立即成交并收取吃单手续费，除非 {0} 因其偏离标记价过远而拒绝。"
 ],
 [
  "{0} has this market on isolated margin. Switch it to cross to start trading.",
  "{0} 此市场当前为逐仓模式，请切换全仓后交易。"
 ],
 [
  "{0} has this market on cross margin. Switch it to isolated to start trading.",
  "{0} 此市场当前为全仓模式，请切换逐仓后交易。"
 ],
 [
  "{0} supports isolated margin only for this market. Set it once to start trading.",
  "{0} 此市场仅支持逐仓模式，设置后即可交易。"
 ],
 [
  "{0} is set to {1}x, above this market's {2}x maximum. Lower it to place orders.",
  "{0} 当前为 {1} 倍杠杆，超过市场上限 {2} 倍，请降低后下单。"
 ],
 [
  "Update Leverage to {0}x",
  "将杠杆改为 {0} 倍"
 ],
 [
  "Setting {0} margin…",
  "正在设置{0}保证金模式…"
 ],
 [
  "Setting leverage to {0}x…",
  "正在设置 {0} 倍杠杆…"
 ],
 [
  "Margin mode set to {0}.",
  "保证金模式已设为{0}。"
 ],
 [
  "Leverage set to {0}x.",
  "杠杆已设为 {0} 倍。"
 ],
 [
  "Your account allows up to {0}x on this market.",
  "您的账户在此市场最高支持 {0} 倍杠杆。"
 ],
 [
  "Minimum order value on {0} is {1} for this market.",
  "{0} 此市场的最低委托名义价值为 {1}。"
 ],
 [
  "Exchange · {0}",
  "交易所 · {0}"
 ],
 [
  "Mark price ≥ {0}",
  "标记价 ≥ {0}"
 ],
 [
  "Mark price ≤ {0}",
  "标记价 ≤ {0}"
 ],
 [
  "{0} order(s) failed: {1}",
  "{0} 笔委托失败：{1}"
 ],
 [
  "Closing {0} {1}",
  "正在平仓 {0} {1}"
 ],
 [
  "{0} of {1} orders sent",
  "已发送 {0} / {1} 笔委托"
 ],
 [
  "{0} of {1} orders sent.",
  "已发送 {0} / {1} 笔委托。"
 ],
 [
  "Stop Loss price must be lower than {0} price for LONG positions",
  "多头持仓的止损价须低于{0}价格"
 ],
 [
  "Stop Loss price must be higher than {0} price for SHORT positions",
  "空头持仓的止损价须高于{0}价格"
 ],
 [
  "Take Profit price must be higher than {0} price for LONG positions",
  "多头持仓的止盈价须高于{0}价格"
 ],
 [
  "Take Profit price must be lower than {0} price for SHORT positions",
  "空头持仓的止盈价须低于{0}价格"
 ],
 [
  "TP: ${0}",
  "止盈：${0}"
 ],
 [
  "SL: ${0}",
  "止损：${0}"
 ],
 [
  "Set a hold of up to {0} hours",
  "持续时间最长可设为 {0} 小时"
 ],
 [
  "Open {0} strategy chart",
  "打开 {0} 策略图表"
 ],
 [
  "Steps {0}–{1}",
  "步骤 {0}–{1}"
 ],
 [
  "{0} of {1} steps",
  "已完成 {0} / {1} 步"
 ],
 [
  "out its {0} pause",
  "等待 {0} 的暂停时长结束"
 ],
 [
  "for its turn in the {0} duration",
  "等待 {0} 总时长中的计划执行时间"
 ],
 [
  "for both order books to fit within {0}%",
  "等待双腿订单簿满足 {0}% 的滑点要求"
 ],
 [
  "Step {0} of {1} {2}. {3} are {4} so far.",
  "第 {0} / {1} 步{2}。截至目前，{3}已{4}。"
 ],
 [
  "is waiting {0}",
  "正在{0}"
 ],
 [
  "STEP {0}/{1}",
  "步骤 {0}/{1}"
 ],
 [
  "The {0} duration ran out",
  "{0} 的总执行时长已结束"
 ],
 [
  "{0} after {1}. Those steps are {2}.",
  "在 {1} 后{0}，这些步骤已{2}。"
 ],
 [
  "Stopped after {0}. Part of the next step is open on one side only — check Positions.",
  "在 {0} 后停止。下一步的部分仓位仅单侧开仓，请检查持仓。"
 ],
 [
  "at least {0}",
  "至少 {0}"
 ],
 [
  "about {0}",
  "约 {0}"
 ],
 [
  "Both {0} legs stay open",
  "{0} 的双腿仓位均保留"
 ],
 [
  "{0} unit",
  "{0}单位"
 ],
 [
  "Met now — the pair closes if this holds for {0}",
  "当前已满足，若持续 {0} 则平仓"
 ],
 [
  "Met now — the pair closes if this is met again in {0}",
  "当前已满足，若 {0} 后再次满足则平仓"
 ],
 [
  "{0} closes on: {1}",
  "{0} 的平仓条件：{1}"
 ],
 [
  "{0} closes when any of {1} conditions is met",
  "{1} 个条件任一满足时，关闭 {0}"
 ],
 [
  "Could not {0} auto close",
  "无法{0}自动平仓"
 ],
 [
  "The pair closes in {0} unless it stops being met first.",
  "若条件持续满足，组合将在 {0} 后平仓。"
 ],
 [
  "Checked again in {0}: the pair closes if it is still met then.",
  "{0} 后复查，若条件仍满足则平仓。"
 ],
 [
  "Closed on: {0}.",
  "平仓触发条件：{0}。"
 ],
 [
  "Closing {0} {1}.",
  "正在平仓 {0} {1}。"
 ],
 [
  "{0} closed {1} auto close watching. Cancel {2} in Arbitrage Orders.",
  "{0} 已平仓，{1}自动平仓仍在监控。请在套利委托中取消{2}。"
 ],
 [
  "Set a price {0} {1}. At this price the order fills right away, at taker fees.",
  "请设置{0} {1} 的价格。当前价格会立即成交并收取吃单手续费。"
 ],
 [
  "Too close to {0}. Move it at least {1}% away, or it may fill right away.",
  "价格过于接近 {0}，请至少偏离 {1}%，否则可能立即成交。"
 ],
 [
  "{0} sig figs",
  "{0} 位有效数字"
 ],
 [
  "Spread ~{0}%",
  "价差约 {0}%"
 ],
 [
  "Rest {0} {1}",
  "挂单 {0} {1}"
 ],
 [
  "{0}, percent",
  "{0}（百分比）"
 ],
 [
  "{0} — close a bigger share",
  "{0}，请提高平仓比例"
 ],
 [
  "Place close order for {0}",
  "提交 {0} 的平仓委托"
 ],
 [
  "Close {0}",
  "平仓 {0}"
 ],
 [
  "Close in {0} steps",
  "分 {0} 步平仓"
 ],
 [
  "Close {0} in {1} steps",
  "分 {1} 步关闭 {0}"
 ],
 [
  "Too small for a partial close on {0} — close the whole leg",
  "规模过小，无法在 {0} 部分平仓，请关闭整条腿"
 ],
 [
  "Market not found for {0}",
  "未找到 {0} 的市场"
 ],
 [
  "{0} is closing, but its auto close still watches those markets. Cancel it in Arbitrage Orders.",
  "{0} 正在平仓，但自动平仓仍在监控相关市场，请在套利委托中取消。"
 ],
 [
  "Sending {0}…",
  "正在发送{0}…"
 ],
 [
  "Failed to send {0}",
  "发送{0}失败"
 ],
 [
  "Close {0} sent",
  "{0} 平仓委托已发送"
 ],
 [
  "{0} to match the other leg. Check the size, then confirm.",
  "{0} 以匹配另一腿，请核对规模后确认。"
 ],
 [
  ", with the {0} leg resting at maker fees",
  "，其中{0}腿以挂单费率挂单"
 ]
];
  const normalize = s => s.replace(/\u00a0|\u202f/g, ' ').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/…/g, '...').replace(/\s+/g, ' ').trim();
  const exact = new Map(ENTRIES.map(([a, b]) => [normalize(a), b]));
  const insensitive = new Map(ENTRIES.filter(([a]) => /[a-z]\s+[a-z]/i.test(a)).map(([a,b])=>[normalize(a).toLowerCase(),b]));
  const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const templates = TEMPLATE_ENTRIES.map(([a,b]) => {
    const order = [];
    const parts = normalize(a).split(/(\{\d+\})/g);
    const pattern = parts.map(p => /^\{\d+\}$/.test(p) ? (order.push(Number(p.slice(1,-1))), '(.+?)') : escape(p)).join('');
    return {re:new RegExp('^'+pattern+'$', 'i'), text:b, order, weight:a.replace(/\{\d+\}/g,'').length};
  }).sort((a,b)=>b.weight-a.weight);
  const cache = new Map();
  const protectedName = /^(?:VOOI(?: Ultra)?|Hyperliquid|Aster|Lighter|Extended|Binance|MEXC|Bybit|Gate|Polymarket|Robinhood|Kinetiq|Entropy(?:\.io)?|Ondo|trade\[?XYZ\]?|trade\.xyz|MetaMask|WalletConnect|Rabby|Trust Wallet|Coinbase Wallet|OKX Wallet|Rainbow|Phantom|Ledger|Trezor|Safe|Bitget Wallet|Backpack|USDC(?:\.e)?|USDT|USDH|USDG|pUSD|BTC|ETH|SOL|HYPE|LIT|BNB|POL|ARB|OP|DAI|LINK|UNI|AAVE|DOGE|XRP|AVAX|SUI|APT|TON|USD|EUR|JPY|CNY|HKD|AUD|GBP|CHF|CAD|API|MCP|EIP-\d+|HIP-\d+|JSON|RPC|Node\.js|Codex|Cursor|Claude(?: Desktop| Code)?|TradingView|AWS KMS|Arbitrum(?: One)?|Polygon|BNB Smart Chain|Ethereum|Starknet)$/i;
  const compactUnit = /^([<>≤≥]?\d+(?:\.\d+)?)(s|m|h|d|w|mo)$/;
  function translate(value, depth=0) {
    if (!value || !/[A-Za-z]/.test(value) || depth>3 || value.length>6000) return value;
    const raw=normalize(value);
    if (!raw || protectedName.test(raw) || /^(?:0x[0-9a-f]+|https?:\/\/\S+|[\w.+-]+@[\w.-]+\.[a-z]+)$/i.test(raw)) return value;
    if (!exact.has(raw)&&/^[-+−$€£¥\d.,%~≈<>≤≥/\s]+\s*(?:[A-Z][A-Z0-9.]*|x)?$/.test(raw)) return value;
    if (!depth && cache.has(raw)) return preserve(value,cache.get(raw));
    let result = exact.get(raw) ?? insensitive.get(raw.toLowerCase());
    if (!result) {
      // A colon appended by a component should not leave a translated label behind.
      const colon=raw.match(/^(.+?)\s*[:：]$/);
      if(colon){ const label=exact.get(colon[1]) ?? insensitive.get(colon[1].toLowerCase()); if(label)result=label.replace(/[:：]$/,'')+'：'; }
    }
    if (!result) for(const rule of templates) {
      const match=rule.re.exec(raw);
      if(!match)continue;
      const args=[]; rule.order.forEach((n,i)=>args[n]=translate(match[i+1],depth+1));
      result=rule.text.replace(/\{(\d+)\}/g,(_,n)=>args[Number(n)]??'');
      break;
    }
    if (!result) {
      const months={Jan:1,January:1,Feb:2,February:2,Mar:3,March:3,Apr:4,April:4,May:5,Jun:6,June:6,Jul:7,July:7,Aug:8,August:8,Sep:9,Sept:9,September:9,Oct:10,October:10,Nov:11,November:11,Dec:12,December:12};
      const date=raw.match(/^([A-Z][a-z]+) (\d{1,2})(?:, (\d{4}))?(.*)$/);
      if(date&&months[date[1]]&&/^(?:\s+\d{1,2}:\d{2}(?::\d{2})?(?:\s+(?:UTC|GMT))?)?$/.test(date[4]))result=(date[3]?date[3]+'年':'')+months[date[1]]+'月'+date[2]+'日'+date[4];
      const span=raw.match(/^(\d+(?:\.\d+)?(?:[–-]\d+(?:\.\d+)?)?)\s*(sec|min|hr|hrs|seconds?|minutes?|hours?|days?|weeks?|months?|years?)$/i);
      if(!result&&span){const u=span[2].toLowerCase().replace(/s$/,'');result=span[1]+' '+({sec:'秒',min:'分钟',hr:'小时',second:'秒',minute:'分钟',hour:'小时',day:'天',week:'周',month:'个月',year:'年'}[u]);}
      if(!result&&/^(?:\d+(?:\.\d+)?[smhdw]\s*){2,}$/.test(raw))result=raw.replace(/(\d+(?:\.\d+)?)([smhdw])/g,(_,n,u)=>n+({s:'秒',m:'分钟',h:'小时',d:'天',w:'周'}[u]));
      const unit=compactUnit.exec(raw);
      if(!result&&unit) result=unit[1]+({s:' 秒',m:' 分钟',h:' 小时',d:' 天',w:' 周',mo:' 个月'}[unit[2]]);
      else if(!result) {
        const duration=raw.match(/^(\d+(?:\.\d+)?)\s+(seconds?|minutes?|hours?|days?|weeks?|months?|years?)(?:\s+ago)?$/i);
        if(duration)result=duration[1]+' '+({second:'秒',minute:'分钟',hour:'小时',day:'天',week:'周',month:'个月',year:'年'}[duration[2].toLowerCase().replace(/s$/,'')])+(/ ago$/i.test(raw)?'前':'');
      }
    }
    result ??= raw;
    if(!depth){if(cache.size>=4000)cache.clear();cache.set(raw,result);}
    return preserve(value,result);
  }
  function preserve(original, translated){return (original.match(/^\s*/)?.[0]??'')+translated+(original.match(/\s*$/)?.[0]??'');}
  const blocked='script,style,noscript,template,select option[data-raw],pre,code,kbd,samp,[contenteditable]:not([contenteditable="false"]),[translate="no"],.notranslate,[data-vooi-zh-ignore]';
  const attrs=['placeholder','title','aria-label','aria-description','aria-valuetext','alt','data-tooltip','data-tooltip-content','data-placeholder'];
  const processed = new WeakMap();
  const attributeState = new WeakMap();
  const roots = new WeakSet();
  const observers=[];
  const pending=new Set();
  let scheduled=false, scanning=false;
  let enabled=true;
  try{enabled=typeof GM_getValue==='function'?GM_getValue('enabled',true):true;}catch{}
  // TradingView paints part of its UI on canvas. Select its bundled Chinese locale
  // at construction time; all order/datafeed callbacks and options stay intact.
  function installChartLocale(page){
    const wrapped=new WeakMap(),seen=new WeakSet();
    function wrap(Ctor){
      if(typeof Ctor!=='function')return Ctor;
      if(wrapped.has(Ctor))return wrapped.get(Ctor);
      const options=args=>args.length&&args[0]&&typeof args[0]==='object'?[{...args[0],locale:'zh'},...args.slice(1)]:args;
      const proxy=new Proxy(Ctor,{construct(target,args,newTarget){return Reflect.construct(target,options(args),newTarget);},apply(target,self,args){return Reflect.apply(target,self,options(args));}});
      wrapped.set(Ctor,proxy);wrapped.set(proxy,proxy);return proxy;
    }
    function attach(tv){
      if(!tv||typeof tv!=='object'||seen.has(tv))return tv;
      seen.add(tv);
      const descriptor=Object.getOwnPropertyDescriptor(tv,'widget');
      if(descriptor&&!descriptor.configurable){if(descriptor.writable)tv.widget=wrap(tv.widget);return tv;}
      if(descriptor&&(descriptor.get||descriptor.set)){return tv;}
      let value=wrap(tv.widget);
      Object.defineProperty(tv,'widget',{configurable:true,enumerable:descriptor?.enumerable??true,get:()=>value,set:next=>{value=wrap(next);}});
      return tv;
    }
    const descriptor=Object.getOwnPropertyDescriptor(page,'TradingView');
    if(descriptor&&!descriptor.configurable){attach(page.TradingView);return;}
    if(descriptor&&(descriptor.get||descriptor.set)){attach(page.TradingView);return;}
    let value=attach(page.TradingView);
    Object.defineProperty(page,'TradingView',{configurable:true,enumerable:descriptor?.enumerable??true,get:()=>value,set:next=>{value=attach(next);}});
  }
  if(enabled){try{installChartLocale(typeof unsafeWindow!=='undefined'?unsafeWindow:window);}catch{/* DOM localization still works if page-world access is restricted. */}}
  function blockedElement(el){return !el||!!el.closest?.(blocked);}
  function textNode(node) {
    const el=node.parentElement;
    if(blockedElement(el)||el.closest('input,textarea')||processed.get(node)===node.nodeValue)return;
    let next=translate(node.nodeValue);
    // The duration selector uses “Min” for minutes; margin ranges use it for minimum.
    if(normalize(node.nodeValue)==='Min'&&/\bHours\b|\bDays\b|小时|天/.test(el.parentElement?.textContent??''))next='分钟';
    if(next!==node.nodeValue) node.nodeValue=next;
    processed.set(node,node.nodeValue);
  }
  function element(el) {
    if(blockedElement(el))return;
    let state=attributeState.get(el);
    if(!state){state=new Map();attributeState.set(el,state);}
    for(const attr of attrs){
      const value=el.getAttribute(attr);
      if(!value||state.get(attr)===value)continue;
      const next=translate(value);if(next!==value)el.setAttribute(attr,next);state.set(attr,next);
    }
    // Only command buttons have their value translated. Editable values are untouched.
    if(el.tagName==='INPUT'&&/^(?:button|submit|reset)$/i.test(el.type)){
      const value=el.getAttribute('value');if(value){const next=translate(value);if(next!==value)el.setAttribute('value',next);}
    }
    if(el.shadowRoot)watch(el.shadowRoot);
    if(el.tagName==='IFRAME'){
      if(!el.dataset.vooiZhFrame){el.dataset.vooiZhFrame='1';el.addEventListener('load',()=>frame(el));}
      frame(el);
    }
  }
  function frame(el){try{if(el.contentWindow.location.origin===location.origin&&el.contentDocument?.documentElement)watch(el.contentDocument);}catch{/* Cross-origin wallet and chart frames stay isolated. */}}
  function scan(root) {
    if(root.nodeType===3){textNode(root);return;}
    if(root.nodeType===1){if(blockedElement(root))return;element(root);}
    const doc=root.ownerDocument||document;
    const walker=doc.createTreeWalker(root,5,{acceptNode(n){if(n.nodeType===1&&blockedElement(n))return 2;return 1;}});
    let n;while((n=walker.nextNode())){if(n.nodeType===3)textNode(n);else element(n);}
  }
  function enqueue(root){
    if(!root||!enabled)return;
    pending.add(root);
    if(scheduled)return;
    scheduled=true;setTimeout(flush,40);
  }
  function flush(){
    scheduled=false;if(scanning)return;
    scanning=true;
    const batch=[...pending];pending.clear();
    for(const root of batch){if(root.isConnected===false)continue;if(batch.some(p=>p!==root&&p.contains?.(root)))continue;scan(root);}
    scanning=false;
  }
  function watch(root){
    if(!root||roots.has(root))return;
    if(root.host&&blockedElement(root.host))return;
    roots.add(root);
    const observer=new MutationObserver(records=>{
      for(const record of records){
        if(record.type==='childList')for(const node of record.addedNodes)enqueue(node);
        else if(record.type==='characterData'){if(processed.get(record.target)!==record.target.nodeValue)enqueue(record.target);}
        else {const el=record.target;if(attributeState.get(el)?.get(record.attributeName)!==el.getAttribute(record.attributeName))enqueue(el);}
      }
    });
    observer.observe(root,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:[...attrs,'value']});
    observers.push(observer);scan(root);
  }
  function showAudit(){
    const old=document.getElementById('vooi-zh-audit');if(old){old.remove();return;}
    const found=new Set();
    const collect=root=>{
      const w=(root.ownerDocument||document).createTreeWalker(root,5,{acceptNode(n){return n.nodeType===1&&blockedElement(n)?2:1;}});
      let n;while((n=w.nextNode())){
        if(n.nodeType===1){if(n.shadowRoot)collect(n.shadowRoot);continue;}
        const el=n.parentElement,s=normalize(n.nodeValue);
        if(!el||!el.getClientRects().length||s.length<3||s.length>1800||!/[a-z]{3}/i.test(s)||/^[A-Z][A-Z0-9._/-]*$/.test(s)||protectedName.test(s)||translate(s)!==s)continue;
        if(/https?:|0x[0-9a-f]{6}|\b[A-Z0-9]{20,}\b|[\w.+-]+@[\w.-]+\.[a-z]+/i.test(s))continue;
        found.add(s.replace(/\b\d[\d,.]*(?:%|x)?\b/g,'[数值]'));
      }
    };collect(document.body);
    const host=document.createElement('div');host.id='vooi-zh-audit';host.setAttribute('data-vooi-zh-ignore','');
    const shadow=host.attachShadow({mode:'open'});
    const style=document.createElement('style');style.textContent=':host{position:fixed;inset:0;z-index:2147483647;font:14px/1.6 system-ui,"Microsoft YaHei",sans-serif;color:#eee;background:#0009;display:grid;place-items:center}section{box-sizing:border-box;width:min(700px,94vw);max-height:90vh;overflow:auto;border:1px solid #555;border-radius:14px;background:#18181c;padding:24px}h2{margin:0 0 12px}textarea{box-sizing:border-box;width:100%;height:300px;background:#111;color:#eee;border:1px solid #555;border-radius:6px;padding:12px}button{padding:8px 18px;margin-top:12px;background:#d1a264;color:#111;border:0;border-radius:6px;cursor:pointer}p{color:#bbb}';
    const box=document.createElement('section'),title=document.createElement('h2'),note=document.createElement('p'),area=document.createElement('textarea'),close=document.createElement('button');
    title.textContent='VOOI 汉化覆盖检查 · '+VERSION;
    note.textContent='当前可见区域的疑似未翻译句子（本地检查，无上传）。品牌名称和技术缩写可能属于正常保留。切换页面、展开提示后可再次检查。';
    area.readOnly=true;area.value=found.size?[...found].sort().join('\n\n'):'当前可见区域未发现疑似英文句子。';
    close.textContent='关闭';close.onclick=()=>host.remove();box.append(title,note,area,close);shadow.append(style,box);document.body.append(host);
  }
  if(typeof GM_registerMenuCommand==='function'){
    GM_registerMenuCommand(enabled?'切换为英文原文（刷新）':'启用专业汉化（刷新）',()=>{GM_setValue('enabled',!enabled);location.reload();});
    GM_registerMenuCommand('检查当前页面的英文残留',showAudit);
  }
  function start(){
    if(!enabled||!document.body)return;
    document.documentElement.lang='zh-CN';watch(document);
    // Open shadow roots attached after their host entered the page need discovery.
    setInterval(()=>{
      if(document.visibilityState==='hidden')return;
      for(const el of document.querySelectorAll('*'))if(el.shadowRoot&&!roots.has(el.shadowRoot))watch(el.shadowRoot);
    },3000);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(start,800),{once:true});
  else setTimeout(start,800);
})();
