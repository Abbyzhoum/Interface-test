module.exports = {
  desc:'获取租户列表',
  req:{
    method:'get',
    path:'/api/operation/operation/tenants',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
      root:'array',
      total:'number'
  }
}