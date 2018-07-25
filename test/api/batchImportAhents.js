module.exports = {
  desc:'批量导入坐席',//导入的是文件
  req:{
    method:'post',
    path:'/api/operation/tenant/importAgents',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    failCode:'array',
    failMsg:'string',
    successMsg:'string'
  }
}