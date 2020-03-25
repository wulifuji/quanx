// by choler  
//油管广告.js
//[MITM]  hostname = *.googlevideo.com
//[rewrite_local]  http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) url script-response-body YouTube.js
var data = {
  body: "{}",
  headers: {
    "Content-Type": "multipart/byteranges"
  }
};
$done({response: data});
