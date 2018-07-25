module.exports={
  desc:'获取语音文件',
  req:{
    method:'get',
    path:'/api/operation/tenant/resources/phrases',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}