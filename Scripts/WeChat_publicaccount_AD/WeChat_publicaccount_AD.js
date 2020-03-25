/*
//by Choler

[rerite local]
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body WeChat_publicaccount_AD.js

[MITM]
hostname = mp.weixin.qq.com
*/

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({body: JSON.stringify(obj)}); 
