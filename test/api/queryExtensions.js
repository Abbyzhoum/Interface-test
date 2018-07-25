module.exports = {
  desc:'查询当前联络中心的分机',
  req:{
    method:'get',
    path:'/api/operation/tenant/extensions',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}