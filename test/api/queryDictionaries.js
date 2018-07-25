module.exports = {
  desc:'获取数据字典',
  req:{
    method:'get',
    path:'/api/operation/tenant/dictionary/AuxReasonCode',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  }
}