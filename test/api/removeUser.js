module.exports ={
  desc:'删除用户',
  req:{
    method:'delete',
    path:'/api/operation/tenant/users/{{id}}',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  }
}