module.exports = {
  desc:'获取网关管理',
  req:{
    method:'get',
    path:'/api/operation/tenant/resources/gateWays',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}