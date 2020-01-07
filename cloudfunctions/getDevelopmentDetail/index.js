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
      multipleStatements: true,
      host: "------------------------------",
      port: 10234,
      database: "coffee",
      user: "root",
      password: "------------------",
      charset:'utf8',
    });
    // const sql0 = "(select DISTINCT c.target_id, IFNULL(ct1.ctAmount, 0) as ctAmount from collection as c left join (select count(cltid) as ctAmount, target_id from collection where type=2 and status=1 group by target_id) as ct1 " +
    //   "on c.target_id=ct1.target_id) as ct,";
    // const sql2 = "select ct.target_id from collection as ct where type=2 and status=1 " +
    //   "where exists ";

    // const sql = "select d.did, d.content, d.imgUrl, u.uid, u.avatar, u.name, lk.amount, lk.type, ct.ctAmount from development as d, " +
    //   "user as u, (select count(fid) as amount, type, target_id from favour where type=2 and status=1 group by target_id) as lk," +
    //   "(select DISTINCT c.target_id, IFNULL(ct1.ctAmount, 0) as ctAmount from collection as c left join (select count(cltid) as ctAmount, target_id from collection where type=2 and status=1 group by target_id) as ct1 " +
    //   "on c.target_id=ct1.target_id) as ct " +
    //   "where d.type="+ event.type + " and d.did = " + event.did + " and u.uid = d.user_id and lk.target_id=d.did and d.did=ct.target_id;";
    const sql = "select d.did, d.content, d.imgUrl, d.type, u.uid, u.avatar, u.name from development as d, " +
    "user as u" +
    " where d.type="+ event.type + " and d.did = " + event.did +  " and u.uid = d.user_id;";
    const sql2 = "select count(cltid) as cltAmount from collection as ct where type=2 and status=1 and target_id=" +
      event.did + " group by target_id;";
    const sql3 = "select count(fid) as amount from favour where type=2 and status=1 and target_id=" +
      event.did +" group by target_id";

    // connection.query(sql+sql2+sql3, function(err, result){
    //   let resu = {};
    //   if(err){
    //     throw err;
    //   }else{
    //     if (result[1].length === 0){
    //       result[1][0] = { cltAmount: 0 }
    //     } else if (result[2].length === 0){
    //       result[2][0] = { amount: 0 }
    //     }
    //     resu = Object.assign(result[0][0],result[1][0],result[2][0]);
    //     console.log(resu);
    //   }
    //   return resu;
    // });

    const [rows, fields] = await connection.query(sql+sql2+sql3);
    console.log(rows);
    if (rows[1].length === 0){
      rows[1][0] = { cltAmount: 0 }
    }
    if (rows[2].length === 0){
      rows[2][0] = { amount: 0 }
    }
    let res = Object.assign(rows[0][0], rows[1][0], rows[2][0]);
    console.log(res);
    return res;

  } catch (err) {
    console.log("链接错误", err);
    return err
  }

};
