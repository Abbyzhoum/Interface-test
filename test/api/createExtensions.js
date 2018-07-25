var number = parseInt(Math.random()*1000)

module.exports = {
  desc:'创建分机',
  req:{
    method:'post',
    path:'/api/operation/tenant/resources/extensions',
    headers:{
      'sessionId': '{{sessionId}}'
    },
    data:{
      "code":`80${number}`,
      "password":"Aa123456",
      "_type":"TExtension"
    }
  },
  resBodyStruct:{
    id:'string',
    state:'string',
    tenantId:'string',
    namespace:'string',
    updateTime:'string',
    featureRecord:'string',
    code:'string',
    password:'string'
  }
}