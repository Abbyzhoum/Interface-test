const faker = require('faker')
var email = faker.internet.email()
var name =faker.commerce.productName()

module.exports = {
  desc: '创建用户',
  req: {
    method: 'post',
    path: '/api/security/security/users',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "userName": `${name}`,
      "loginName": `${name}`,
      "password": "Aa123456",
      "email": `${email}`,
      "status": "Ok",
      "roles": [{
        "id": "6cd5034b-adc2-4568-9926-cbf6e4994aaf",
        "roleDesc": "测试",
        "roleName": "测试",
        "tenantId": "822dfe59-862f-4e4f-b7c5-186ff96c48c8"
      }],
      "org": {
        "id": "bb51d093-54d4-4f72-a582-98ce2376ead0"
      }
    }
  },
  resBodyStruct:{
    id:'string',
    status:'string',
    roles:'array',
    tenantId:'string',
    email:'string',
    loginName:'string',
    org:'object',
    updateTime:'string',
    userName:'string'
  }
}