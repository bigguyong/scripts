/*
Loon
[Script]
http-response ^https?:\/\/(pharmsnap|micro)\.zhihuiya\.com requires-body=1,script-path=https://raw.githubusercontent.com/bigguyong/scripts/main/remove_debugger.loon.js?token=GHSAT0AAAAAABTBKXBWRFCJ5BRTKJX2IPJAYVJYE4Q, tag=京东比价
[MITM]
hostname = pharmsnap.zhihuiya.com, micro.zhihuiya.com, synapse.patsnap.com, micro.patsnap.com

Boxjs订阅：https://raw.githubusercontent.com/githubdulong/Script/master/boxjs.json
*/

const url = $request.url;
const body = $response.body;

// console.log("[Patrick]:\n" + url);
$done({ body: body.replace('debugger','') });
