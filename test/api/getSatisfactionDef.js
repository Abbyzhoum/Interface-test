module.exports = {
  desc:'获取满意度流程',
  req:{
    method:'get',
    path:'/api/operation/tenant/satisfaction/def',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    announcement:'object',
    items:'array'
  }
}