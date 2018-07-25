module.exports = {
  desc:'批量删除用户',
  req:{
    method:'delete',
    path:'/api/operation/tenant/users/batchDelete',
    headers:{
      'sessionId': '{{sessionId}}'
    },
    data:['{{id}}']
  }
}