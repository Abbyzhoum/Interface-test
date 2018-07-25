module.exports = {
  desc: '通过邮件地址登录',
  req: {
    method: 'post',
    path: '/api/security/loginByEmail',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    data: 'email=bzkun@abby.com&password=Aa123456'
  },
  resBodyStruct: {
    sessionId: 'string'
  }
}