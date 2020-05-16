//Customize blacklist
/*

^https://app.bilibili.com/x/v2/feed/index\?access_key url script-response-body bilibiliFeed.js

B那啥的推荐黑名单
利用远程挂载，便于编辑

mitm = ap*.bilibili.com
*/
let blacklist=['共青团中央','广东共青团','浙江共青团','山东共青团','安徽共青团','河南共青团','央视频','重庆共青团','央视网快看','观察者网']

let body = $response.body
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!='small_cover_v2'||blacklist.includes(element['args']['up_name'])){ 
         body['data']['items'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
