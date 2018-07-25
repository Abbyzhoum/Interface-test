module.exports = {
  desc: '删除坐席',
  req:{
    method:'delete',
    path:'/api/operation/tenant/agents/{{id}}',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  }
}