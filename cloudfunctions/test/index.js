// 云函数入口文件
const cloud = require('wx-server-sdk');

// 初始化 cloud
cloud.init({
  env: 'coffee',
  traceUser: true
});

exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    // 在 3 秒后返回结果给调用方（小程序 / 其他云函数）
    setTimeout(() => {
      resolve(event.a + event.b)
    }, 3000)
  })
};
