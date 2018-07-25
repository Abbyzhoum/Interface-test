module.exports = {
  desc:'获取进线规则',
  req:{
    method:'get',
    path:'/api/operation/tenant/resources/routingPoints',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}