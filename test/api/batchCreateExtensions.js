var number = parseInt(Math.random()*10000)

module.exports = {
  desc:'批量创建分机',
  req:{
    method:'post',
    path:'/api/operation/tenant/resources/extensions/batchCreate',
    headers:{
      'content-type':'application/x-www-form-urlencoded',
      'sessionId': '{{sessionId}}'
    },
    // data:`format=%05d&start=8${number}&end=8${number+1}&orgId=bb51d093-54d4-4f72-a582-98ce2376ead0`
   data: `format=%2504d&start=8${number}&end=8${number+1}&orgId=c9d49675-3b2d-4d01-996f-ef37ffbc1116`
  }
}