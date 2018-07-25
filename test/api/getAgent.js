module.exports = {
  desc:'获取坐席',
  req:{
    method:'get',
    path:'/api/operation/tenant/agents/{{id}}',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    id:'string',
    loginName:'string',
    userName:'string',
    status:'string',
    email:'string',
    roles:'array',
    org:'object',
    tenantId:'string',
    namespace:'string',
    updateTime:'string',
    code:'string',
    agentTrunks:'array',
    agentQueues:'array',
    useOnlineService:'boolean',
    acdUnit:'object'
  }
}