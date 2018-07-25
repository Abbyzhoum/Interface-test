module.exports = {
  desc:'获取中继管理',
  req:{
    method:'get',
    path:'/api/operation/tenant/resources/trunks',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}