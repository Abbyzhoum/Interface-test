module.exports = {
  desc: '编辑数据字典',
  req: {
    method: 'put',
    path: '/api/operation/tenant/dictionary',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "id": "4a0e0109-d9a9-47b9-9a67-7484f41e10ad",
      "dictValue": "1",
      "dictDesc": "sdf",
      "dictType": "AuxReasonCode"
    }
  }
}