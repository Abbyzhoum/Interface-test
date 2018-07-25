module.exports = {
  desc:'查询当前联络中心的坐席',
  req:{
    method:'get',
    path:'/api/operation/tenant/agents',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}