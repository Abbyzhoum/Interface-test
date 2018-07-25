module.exports = {
  desc: '增加数据字典',
  req: {
    method: 'post',
    path: '/api/operation/tenant/dictionary',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "dictType": "AuxReasonCode",
      "dictValue": "6",
      "dictDesc": "不知道"
    }
  },
  resBodyStruct:{
    dictDesc:'string',
    dictType:'string',
    dictValue:'string',
    id:'string',
    tenantId:'string'
  }
}