module.exports= {
  desc:'获取活动管理',
  req:{
    method:'get',
    path:'/api/operation/tenant/resources/vectors',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}