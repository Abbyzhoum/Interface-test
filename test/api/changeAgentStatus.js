module.exports = {
  desc: '修改坐席状态',
  req: {
    method: 'put',
    path: '/api/operation/tenant/agents/{{id}}/changeAgentStatus',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    params: {
      status: "Disabled"
    }
  }
}