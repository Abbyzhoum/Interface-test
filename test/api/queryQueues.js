module.exports = {
  desc:'查询当前联络中心的资源',
  req:{
   method:'get',
   path:'/api/operation/tenant/resources/queues',
   headers:{
    'sessionId': '{{sessionId}}'
   }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}