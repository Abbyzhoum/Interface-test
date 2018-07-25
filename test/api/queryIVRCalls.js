module.exports= {
  desc:'查询当前租户的IVR呼叫记录',
  req:{
    method:'get',
    path:'/api/operation/tenant/calls/IVR',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}