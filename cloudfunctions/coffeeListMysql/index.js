// 云函数入口文件
const cloud = require('wx-server-sdk');
//引入mysql操作模块
const mysql = require('mysql2/promise');

// 初始化 cloud
cloud.init({
  env: 'coffee',
  traceUser: true
});

// 云函数入口函数
exports.main = async(event, context) => {

  //链接mysql数据库的test库，这里你可以链接你mysql中的任意库
  try {
    const connection = await mysql.createConnection({
      host: "---------",
      port: 10234,
      database: "test",
      user: "root",
      password: "--------",
      charset:'utf8',
    });
    const [rows, fields] = await connection.execute('SELECT cid, name, imgUrl FROM `coffee`;');
    const [rows1, fields1] = await connection.execute('SELECT cid, name, imgUrl FROM `coffee` WHERE type=1;');
    const [rows2, fields2] = await connection.execute('SELECT cid, name, imgUrl FROM `coffee` WHERE type=2;');
    const [rows3, fields3] = await connection.execute('SELECT cid, name, imgUrl FROM `coffee` WHERE type=3;');
    const [rows4, fields4] = await connection.execute('SELECT cid, name, imgUrl FROM `coffee` WHERE type=4;');
    let result = [
      {
        id: 0,
        name: "所有咖啡",
        value: rows
      },
      {
        id: 1,
        name: "最近制作",
        value: rows1
      },{
        id: 2,
        name: "常见咖啡",
        value: rows2
      },
      {
        id: 3,
        name: "人气推荐",
        value: rows3
      },
      {
        id: 4,
        name: "大师甄选",
        value: rows4
      }
    ];
    return result;
  } catch (err) {
    console.log("链接错误", err);
    return err;
  }

};
