module.exports = {
  desc: '更新进线规则',
  req: {
    method: 'put',
    path: '/api/operation/tenant/resources/routingPoints',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
      "id": "67bd0251-3ec3-4a9e-a6b3-f3f1670881cb",
      "code": "4000",
      "desc": "Default",
      "state": "Ok",
      "externalId": "4",
      "tenantId": "822dfe59-862f-4e4f-b7c5-186ff96c48c8",
      "namespace": "bzkun.cc",
      "updateTime": "2017.08.09 19:50:37",
      "routeActions": [{
        "actionType": "RouteToIvr",
        "order": "0",
        "actionName": "6000"
      }],
      "type": "Normal",
      "managed": "true",
      "_type": "TRoutingPoint"
    }
  }
}