module.exports = {
  desc: '更新分机',
  req: {
    method: 'put',
    path: '/api/operation/tenant/resources/extensions',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "id": "34f27e6d-22bb-45e2-a0d9-f1a59f99ee92",
      "networkAddress": "ces",
      "password": "Aa123456",
      "org": {
        "id": "0a63f6d3-b1f9-48ec-8f1b-f57f2497bad4"
      },
      "_type": "TExtension"
    }
  }
}