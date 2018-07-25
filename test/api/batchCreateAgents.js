var number = parseInt(Math.random()*10000)

module.exports = {
  desc: '批量创建坐席',
  req: {
    method: 'post',
    path: '/api/operation/tenant/agents/batchCreate',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "format": "%04d",
      "start": `5${number}`,
      "end": `5${number+1}`,
      "queueId": "2311b4b1-08e4-4ca5-a767-6a0ae658a4b9",
      "useOnlineService": "false",
      "password": "Aa123456",
      "orgId": "bb51d093-54d4-4f72-a582-98ce2376ead0"
    }
  }
}