module.exports = {
  desc:'批量删除分机',
  req:{
    method:'delete',
    path:'/api/operation/tenant/resources/extensions/batchDelete',
    headers:{
      'sessionId': '{{sessionId}}'
    },
    data:['{{id}}']
  }
}