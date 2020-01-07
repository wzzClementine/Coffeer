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
      host: "---------------------m",
      port: 10234,
      database: "coffee",
      user: "root",
      password: "---------------------------",
      charset:'utf8',
    });
    const sql = "SELECT d.content FROM `development` as d WHERE content LIKE '%" + event.result + "%';";
    // const sql = "select d.did, d.content, d.imgUrl, u.uid, u.avatar, u.name, lk.amount, lk.type from development as d, " +
    //   "user as u, (select count(fid) as amount, type, target_id from favour where type=2 and status=1 group by target_id) as lk " +
    //   "where d.type=1 and d.content like %玉兰花% and u.uid = d.user_id and lk.target_id=d.did;";
    // const sql = "select d.did, d.content, d.imgUrl, u.uid, u.avatar, u.name, lk.amount, lk.type from " +
    //   "(select dt.did, dt.content, dt.imgUrl from development as dt where dt.content like %"+ event.result +"%） as d, " +
    //   "user as u, (select count(fid) as amount, type, target_id from favour where type=2 and status=1 group by target_id) as lk " +
    //   "where u.uid = d.user_id and lk.target_id=d.did;";
    const [rows, fields] = await connection.execute(sql);
    console.log("rows", rows);
    return rows;
  } catch (err) {
    console.log("链接错误", err);
    return err
  }

};
