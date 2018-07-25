module.exports = {
  desc: '重置坐席密码',
  req: {
    method: 'put',
    path: '/api/operation/tenant/agents/{{id}}/resetAgentPassword',
    headers: {
      'sessionId': '{{sessionId}}'
    }
  }
}