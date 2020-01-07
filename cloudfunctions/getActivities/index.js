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
      host: "------------------",
      port: 10234,
      database: "coffee",
      user: "root",
      password: "-----------------",
      charset:'utf8',
    });
    console.log("event", event.topic);
    const sql = "select a.aid, a.title, a.name, a.description, a.cover, a.time, pt.amount from activity as a, " +
      "(select count(ptid) as amount, activity_id from participant where type=1 and status=1 group by activity_id) as pt " +
      "where a.aid=pt.activity_id;";
    console.log(sql);
    const [rows, fields] = await connection.execute(sql);
    console.log("rows", rows);
    return rows;
  } catch (err) {
    console.log("链接错误", err);
    return err
  }

};
