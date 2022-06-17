/*
Loon
[Script]
http-response ^https?:\/\/(pharmsnap|micro|synapse)\.(zhihuiya|patsnap)\.com requires-body=1,script-path=https://github.com/bigguyong/scripts/raw/main/remove_debugger.loon.js, tag=Remove Debugger
[MITM]
hostname = pharmsnap.zhihuiya.com, micro.zhihuiya.com, synapse.patsnap.com, micro.patsnap.com

Boxjs订阅：https://raw.githubusercontent.com/githubdulong/Script/master/boxjs.json
*/

const url = $request.url;
const body = $response.body;

// console.log("[Patrick]:\n" + url);
$done({ body: body.replace('debugger','') });
