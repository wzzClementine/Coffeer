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
      host: "------------------------------",
      port: 10234,
      database: "coffee",
      user: "root",
      password: "--------------------",
      charset:'utf8',
    });
    const qq= "(select f.target_id, IFNULL(lk1.amount, 0) as amount, lk1.type from favour as f right join (select count(fid) as amount, type, target_id from favour where type=2 and status=1 group by target_id) as lk1 " +
      "on f.target_id=lk1.target_id) as lk,";
    const tt="(select c.target_id, IFNULL(ct1.ctAmount, 0) as ctAmount from comment as c left join (select count(ctid) as ctAmount, target_id from comment where type=2 group by target_id) as ct1 " +
      "on c.target_id=ct1.target_id) as ct";

    const sql = "select d.did, d.content, d.imgUrl, d.type as Dtype, u.uid, u.avatar, u.name, lk.amount, lk.type as Ttype, ct.ctAmount, tp.title, tp.cover from development as d, " +
      "user as u, " + "(select DISTINCT f.target_id, IFNULL(lk1.amount, 0) as amount, lk1.type from favour as f left join (select count(fid) as amount, type, target_id from favour where type=2 and status=1 group by target_id) as lk1 " +
      "on f.target_id=lk1.target_id) as lk," +
      "(select DISTINCT c.target_id, IFNULL(ct1.ctAmount, 0) as ctAmount from comment as c left join (select count(ctid) as ctAmount, target_id from comment where type=2 group by target_id) as ct1 " +
      "on c.target_id=ct1.target_id) as ct," + "topicPassage as tp" +
      " where d.type=2 and d.tpcpsg_id=" + event.topic + " and u.uid = d.user_id and lk.target_id=d.did and ct.target_id=d.did and tp.incid=" + event.topic + ";";

    console.log(sql);
    const [rows, fields] = await connection.execute(sql);
    console.log("rows", rows);
    return rows;
  } catch (err) {
    console.log("链接错误", err);
    return err
  }

};
