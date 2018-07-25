var number = parseInt(Math.random()*1000)

module.exports = {
  desc: '创建技能组',
  req: {
    method: 'post',
    path: '/api/operation/tenant/resources/queues',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "code": `7${number}`,
      "desc": "接口测试",
      "_type": "TQueue"
    }
  },
  resBodyStruct: {
    id: "string",
    code: "string",
    desc: "string",
    state: "string",
    tenantId: "string",
    namespace: "string",
    updateTime: "string",
    queueType: "string",
    isManaged: 'boolean',
    queueStrategy: "string"
  }
}