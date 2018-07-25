module.exports ={
  desc:'查询某一部门及其所有下级部门下用户列表',
  req:{
    method:'get',
    path:'/api/operation/tenant/org/16e6b48e-d3a3-452c-aa67-734247950799/users',
    headers:{
      'sessionId': '{{sessionId}}'
    }
  },
  resBodyStruct:{
    root:'array',
    total:'number'
  }
}