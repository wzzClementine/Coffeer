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
      host: "---------------------------",
      port: 10234,
      database: "coffee",
      user: "root",
      password: "-----------------------",
      charset:'utf8',
    });
    console.log("event", event.topic);
    const sql = "SELECT tp.incid, tp.topic_id, tp.title, tp.icon, tp.cover, tp.description, tp.date, u.uid, u.name " +
      "from topicPassage as tp ,user as u where tp.user_id=u.uid and tp.topic_id=" + event.topic + " limit 5;";
    console.log(sql);
    const [rows, fields] = await connection.execute(sql);
    console.log("rows", rows);
    return rows;
  } catch (err) {
    console.log("链接错误", err);
    return err
  }

};
