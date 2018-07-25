module.exports = {
  desc: '根据permission中的scope查询当前联络中心的坐席',
  req: {
    path: '/api/operation/tenant/agents/permission/report%3Aseat',
    headers: {
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}