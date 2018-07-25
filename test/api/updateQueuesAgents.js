module.exports = {
  desc:'为队列设置坐席',
  req:{
    method:'post',
    path:'/api/operation/tenant/resources/queues/806d6d4f-11e9-44d0-94a9-72a518c23902/agents',
    headers:{
      'sessionId': '{{sessionId}}'
    },
    data:["58892","50000","59013"]
  }
}