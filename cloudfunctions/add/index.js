const cloud = require('wx-server-sdk');
const tencentcloud = require("tencentcloud-sdk-nodejs");

const Credential = tencentcloud.common.Credential;
const cdbClient = tencentcloud.cdb.v20170320.Client;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;
const models = tencentcloud.cdb.v20170320.Models;

//实例化一个认证对象
// let cred = new Credential("---", "----");

let httpProfile = new HttpProfile();
httpProfile.reqMethod = "POST";
httpProfile.reqTimeout = 30;
httpProfile.endpoint = "cdb.ap-beijing.tencentcloudapi.com";

// 实例化一个client选项，可选的，没有特殊需求可以跳过。
let clientProfile = new ClientProfile();
clientProfile.signMethod = "HmacSHA256";
clientProfile.httpProfile = httpProfile;

//实例化要请求产品(以cdb为例)的client对象。region：ap-shanghai
let client = new cdbClient(cred, "ap-beijing", clientProfile);

// 实例化一个请求对象,并填充参数
req = new models.DescribeTablesRequest();
req.InstanceId = "cdb-31719yec";
req.Database = "test";

// 初始化 cloud
cloud.init({
  env: 'coffee',
  traceUser: true
});

exports.main = async (event, context) => {

  // 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
  client.DescribeTables(req, function (err, response) {
    if (err) {
      console.log(err);
      return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());

  });


};
