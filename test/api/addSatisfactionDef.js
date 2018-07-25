module.exports = {
  desc: '保存满意度流程',
  req: {
    method: 'post',
    path: '/api/operation/tenant/satisfaction/def',
    headers: {
      'sessionId': '{{sessionId}}'
    },
    data: {
        "announcement": {
          "type": "TTS",
          "url": "adadadad"
        },
        "items": [{
          "name": "1",
          "description": "adad",
          "type": "VOX",
          "url": "api/file/download/nosession/90247cf3-eb3b-455e-97dd-714e2df5b47a.mp3"
        }, {
          "name": "2",
          "description": "ad",
          "type": "TTS",
          "url": "adaddad"
        }, {
          "name": 4,
          "description": "ergr4",
          "type": "VOX",
          "url": "api/file/download/nosession/3b70f867-a98f-4401-ac70-888608957173.mp3"
        }, {
          "name": 7,
          "description": "rteh",
          "type": "VOX",
          "url": "api/file/download/nosession/976820c3-52b5-45d9-a095-3d0568a198c5.mp3"
        }]
    }
  }
}