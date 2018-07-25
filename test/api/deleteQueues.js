module.exports = {
  desc:'删除技能组',
  req:{
    method:'delete',
    path:'/api/operation/tenant/resources/queues/{{id}}',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  }
}