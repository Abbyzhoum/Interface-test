module.exports = {
  desc:'查询当前租户联络中心的呼叫记录',
  req:{
    method:'get',
    path:'/api/operation/tenant/calls',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}