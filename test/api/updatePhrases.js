module.exports = {
  desc: '更新语音文件',
  req: {
    method: 'put',
    path: '/api/operation/tenant/resources/phrases',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "id": "90247cf3-eb3b-455e-97dd-714e2df5b47a",
      "_type": "TPhrase",
      "desc": "1111"
    }
  }
}