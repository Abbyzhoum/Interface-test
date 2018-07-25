module.exports ={
  desc: '获取用户当前登录信息',
    req: {
      method: 'get',
      path: '/api/security/session',
      headers: {
        'sessionId': '{{sessionId}}'
      }
    },
    resBodyStruct: {
      email: 'string',
      isAdmin: 'boolean',
      isTrustedLogin: 'boolean',
      loginName: 'string',
      org: 'object',
      permissions: 'object',
      roles: 'array',
      tenantId: 'string',
      trustedLogin: 'boolean',
      userId: 'string',
      userName: 'string'
    }
}