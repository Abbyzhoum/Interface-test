module.exports = {
  desc:'删除分机',
  req:{
   method:'delete',
   path:'/api/operation/tenant/resources/extensions/{{id}}',
   headers:{
    'sessionId': '{{sessionId}}'
   }  
  }
}