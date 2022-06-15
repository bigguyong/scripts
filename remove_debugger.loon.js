/*
Loon/Surge
[Script]
http-response ^https?://pharmsnap\.zhihuiya\.com/* requires-body=1,script-path=https://raw.githubusercontent.com/Tartarus2014/Script/master/jd_price_lite.js, tag=京东比价
[MITM]
hostname = pharmsnap.zhihuiya.com

Boxjs订阅：https://raw.githubusercontent.com/githubdulong/Script/master/boxjs.json
*/



$done({ body: body.replace('debugger','') });
