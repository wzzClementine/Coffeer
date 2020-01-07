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
      host: "-----------------------",
      port: 10234,
      database: "coffee",
      user: "root",
      password: "------------------",
      charset:'utf8',
    });
    const sql = "select p.pid, p.title, p.content, p.cover, u.avatar, u.name, lk.amount from passages as p, " +
      "user as u, (select count(fid) as amount, target_id from favour where type=1 and status=1 group by target_id) as lk " +
      "where u.uid = p.user_id and lk.target_id=p.pid;";
    console.log(sql);
    const [rows, fields] = await connection.execute(sql);
    console.log("rows", rows);
    return rows;
  } catch (err) {
    console.log("链接错误", err);
    return err
  }

};
