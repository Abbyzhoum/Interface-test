module.exports = {
  desc:'根据scope查询当前租户下的技能组',
  req:{
   method:'get',
   path:'/api/operation/tenant/queues',
   headers:{
    'sessionId': '{{sessionId}}'
   }  
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}