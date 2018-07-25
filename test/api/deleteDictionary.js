module.exports = {
  desc:'删除数据字典',
  req:{
    method:'delete',
    path:'/api/operation/tenant/dictionary/{{id}}',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  }
}