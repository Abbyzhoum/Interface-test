module.exports ={
  desc:'获取队列',
  req:{
    method:'get',
    path:'/api/operation/tenant/resources/queues/%22%22',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  }
}