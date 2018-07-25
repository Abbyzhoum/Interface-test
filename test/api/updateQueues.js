module.exports = {
  desc: '更新技能组',
  req: {
    method: 'put',
    path: '/api/operation/tenant/resources/queues',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "id": '{{id}}',
      "desc": '{{desc}}',
      "code": '{{code}}',
      "_type": "TQueue"
    }
  }
}