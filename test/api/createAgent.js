const faker = require('faker')
var email = faker.internet.email()
var number = parseInt(Math.random()*10000)


module.exports = {
  desc:'创建坐席',
  req:{
    method:'post',
    path:'/api/operation/tenant/agents',
    headers:{
      'sessionId': '{{sessionId}}'
    },
    data:{
      "roles":[{"id":"1098e6d4-556f-433b-96e4-54a757c1f220"}],
      "status":'Ok',
      "useOnlineService":"false",
      "userName":"靳东",
      "password":"Aa123456",
      "loginName":`5${number}`,//工号不可重复
      "code":`5${number}`,
      "email":`${email}`,
      "agentQueues":[{"id": "2311b4b1-08e4-4ca5-a767-6a0ae658a4b9"}]
    }
  },
  resBodyStruct:{
    acdUnit:'object',
    agentQueues:'array',
    roles:'array',
    tenantId:'string',
    updateTime:'string',
    useOnlineService:'boolean',
    userName:'string',
    status:'string',
    code:'string',
    email:'string',
    id:'string',
    loginName:'string',
    namespace:'string',
    org:'object'
  }
}