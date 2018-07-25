module.exports = {
  desc: '更新中继管理',
  req: {
    method: 'put',
    path: '/api/operation/tenant/resources/trunks',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "id": "923ed848-5742-4a10-a809-8ee2b25936ab",
      "agents": [{
        "id": "3af457f7-5e43-4dd5-b5c8-955f03a806e8"
      }],
      "_type": "TTrunk"
    }
  }
}