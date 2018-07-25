module.exports = {
  desc:'获取行政组下的坐席信息',
  req:{
    method:'get',
    path:'/api/operation/tenant/agents/snapshot',
    headers:{
      'sessionId': '{{sessionId}}'
    },
    params:{
      orgId:'caa28c11-0734-44ac-baa9-ece911f3730e'
    }
  }
}