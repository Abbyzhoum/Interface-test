module.exports = {
  desc:'更新坐席',
  req:{
    method:'put',
    path:'/api/operation/tenant/agents',
    headers:{
      'sessionId': '{{sessionId}}'
    },
    data:{
      "id":'{{id}}',
      "userName":'{{userName}}'
    }
  }
}