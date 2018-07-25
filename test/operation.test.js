/* global describe, test, expect */
const Ae = require('aester')
const Alphabet = require('alphabetjs')
const _ = require('lodash')
//${process.env.testConfigEnv}
let apiConf = require(`./dev.config.js`)

apiConf = Ae.init(apiConf)

beforeAll(() => {
  const str = Alphabet(`${process.env.testConfigEnv} ing`, 'planar')
  console.log(str)
})

afterAll(() => {
  const str = Alphabet(`${process.env.testConfigEnv}`, 'planar')
  console.log(str)
})

describe(`${apiConf.loginByEmail.desc}`, () => {
  test(`${apiConf.loginByEmail.req.method.toUpperCase()} ${apiConf.loginByEmail.req.url}`, async () => {
    var data = await Ae.send(apiConf.loginByEmail)
    Ae.share('sessionId', data.sessionId)
  })

  test('/loginByEmail Error Test', async () => {
    let data = _.cloneDeep(apiConf.loginByEmail)
    data.req.data = 'email=zhen01@126.com&password=wwwww'
    await expect(Ae.send(data)).rejects.toHaveProperty('status', 401)
  })
})

describe(`${apiConf.session.desc}`, () => {
  test(`${apiConf.session.req.method.toUpperCase()} ${apiConf.session.req.url}`, async () => {
    await Ae.send(apiConf.session)
  })
})

describe(`${apiConf.getQueueId.desc}`, () => {
  test(`${apiConf.getQueueId.req.method.toUpperCase()} ${apiConf.getQueueId.req.url}`, async () => {
    await Ae.send(apiConf.getQueueId)
  })
})

describe(`${apiConf.queryTenant.desc}`, () => {
  test(`${apiConf.queryTenant.req.method.toUpperCase()} ${apiConf.queryTenant.req.url}`, async () => {
    await Ae.send(apiConf.queryTenant)
  })
})

describe(`${apiConf.getUsersByOrg.desc}`, () => {
  test(`${apiConf.getUsersByOrg.req.method.toUpperCase()} ${apiConf.getUsersByOrg.req.url}`, async () => {
    await Ae.send(apiConf.getUsersByOrg)
  })
})

describe(`${apiConf.securityCreateUser.desc}`, () => {
  test(`${apiConf.securityCreateUser.req.method.toUpperCase()} ${apiConf.securityCreateUser.req.url}`, async () => {
    var data =  await Ae.send(apiConf.securityCreateUser)
    Ae.share('id',data.id)
  })
})

describe(`${apiConf.removeUser.desc}`, () => {
  test(`${apiConf.removeUser.req.method.toUpperCase()} ${apiConf.removeUser.req.url}`, async () => {
    await Ae.send(apiConf.removeUser)
  })
})

describe(`${apiConf.securityCreateUser.desc}`, () => {
  test(`${apiConf.securityCreateUser.req.method.toUpperCase()} ${apiConf.securityCreateUser.req.url}`, async () => {
    var data =  await Ae.send(apiConf.securityCreateUser)
    Ae.share('id',data.id)
  })
})

describe(`${apiConf.batchRemoveUser.desc}`, () => {
  test(`${apiConf.batchRemoveUser.req.method.toUpperCase()} ${apiConf.batchRemoveUser.req.url}`, async () => {
    await Ae.send(apiConf.batchRemoveUser)
  })
})

describe(`${apiConf.queryExtensions.desc}`, () => {
  test(`${apiConf.queryExtensions.req.method.toUpperCase()} ${apiConf.queryExtensions.req.url}`, async () => {
    await Ae.send(apiConf.queryExtensions)
  })
})

describe(`${apiConf.createExtensions.desc}`, () => {
  test(`${apiConf.createExtensions.req.method.toUpperCase()} ${apiConf.createExtensions.req.url}`, async () => {
    var data =  await Ae.send(apiConf.createExtensions)
    Ae.share('id',data.id)
  })
})

describe(`${apiConf.batchCreateExtensions.desc}`, () => {
  test(`${apiConf.batchCreateExtensions.req.method.toUpperCase()} ${apiConf.batchCreateExtensions.req.url}`, async () => {
    // console.log(apiConf.batchCreateExtensions)
    await Ae.send(apiConf.batchCreateExtensions)
  })
})

describe(`${apiConf.deleteExtension.desc}`, () => {
  test(`${apiConf.deleteExtension.req.method.toUpperCase()} ${apiConf.deleteExtension.req.url}`, async () => {
    await Ae.send(apiConf.deleteExtension)
  })
})

describe(`${apiConf.createExtensions.desc}`, () => {
  test(`${apiConf.createExtensions.req.method.toUpperCase()} ${apiConf.createExtensions.req.url}`, async () => {
    var data =  await Ae.send(apiConf.createExtensions)
    Ae.share('id',data.id)
  })
})

describe(`${apiConf.batchDeleteExtensions.desc}`, () => {
  test(`${apiConf.batchDeleteExtensions.req.method.toUpperCase()} ${apiConf.batchDeleteExtensions.req.url}`, async () => {
    await Ae.send(apiConf.batchDeleteExtensions)
  })
})

describe(`${apiConf.queryAgents.desc}`, () => {
  test(`${apiConf.queryAgents.req.method.toUpperCase()} ${apiConf.queryAgents.req.url}`, async () => {
    await Ae.send(apiConf.queryAgents)
  })
})

describe(`${apiConf.queryTenant.desc}`, () => {
  test(`${apiConf.queryTenant.req.method.toUpperCase()} ${apiConf.queryTenant.req.url}`, async () => {
    await Ae.send(apiConf.queryTenant)
  })
})

describe(`${apiConf.createAgent.desc}`, () => {
  test(`${apiConf.createAgent.req.method.toUpperCase()} ${apiConf.createAgent.req.url}`, async () => {
    var data =  await Ae.send(apiConf.createAgent)
    Ae.share('id',data.id)
    Ae.share('agentQueues',data.agentQueues)
    Ae.share('email',data.email)
    Ae.share('roles',data.roles)
    Ae.share('org',data.org)
    Ae.share('userName',data.userName)
  })
})

describe(`${apiConf.getAgent.desc}`, () => {
  test(`${apiConf.getAgent.req.method.toUpperCase()} ${apiConf.getAgent.req.url}`, async () => {
    await Ae.send(apiConf.getAgent)
  })
})

describe(`${apiConf.updateAgent.desc}`, () => {
  test(`${apiConf.updateAgent.req.method.toUpperCase()} ${apiConf.updateAgent.req.url}`, async () => {
    await Ae.send(apiConf.updateAgent)
  })
})

describe(`${apiConf.changeAgentStatus.desc}`, () => {
  test(`${apiConf.changeAgentStatus.req.method.toUpperCase()} ${apiConf.changeAgentStatus.req.url}`, async () => {
    await Ae.send(apiConf.changeAgentStatus)
  })
})

describe(`${apiConf.resetAgentPassword.desc}`, () => {
  test(`${apiConf.resetAgentPassword.req.method.toUpperCase()} ${apiConf.resetAgentPassword.req.url}`, async () => {
    await Ae.send(apiConf.resetAgentPassword)
  })
})

describe(`${apiConf.deleteAgent.desc}`, () => {
  test(`${apiConf.deleteAgent.req.method.toUpperCase()} ${apiConf.deleteAgent.req.url}`, async () => {
    await Ae.send(apiConf.deleteAgent)
  })
})

describe(`${apiConf.batchCreateAgents.desc}`, () => {
  test(`${apiConf.batchCreateAgents.req.method.toUpperCase()} ${apiConf.batchCreateAgents.req.url}`, async () => {
    await Ae.send(apiConf.batchCreateAgents)
  })
})

describe(`${apiConf.createQueues.desc}`, () => {
  test(`${apiConf.createQueues.req.method.toUpperCase()} ${apiConf.createQueues.req.url}`, async () => {
    var data =  await Ae.send(apiConf.createQueues)
    Ae.share('id',data.id)
    Ae.share('desc',data.desc)
    Ae.share('code',data.code)
  })
})

describe(`${apiConf.updateQueues.desc}`, () => {
  test(`${apiConf.updateQueues.req.method.toUpperCase()} ${apiConf.updateQueues.req.url}`, async () => {
    await Ae.send(apiConf.updateQueues)
  })
})

describe(`${apiConf.deleteQueues.desc}`, () => {
  test(`${apiConf.deleteQueues.req.method.toUpperCase()} ${apiConf.deleteQueues.req.url}`, async () => {
    await Ae.send(apiConf.deleteQueues)
  })
})

describe(`${apiConf.queryDictionaries.desc}`, () => {
  test(`${apiConf.queryDictionaries.req.method.toUpperCase()} ${apiConf.queryDictionaries.req.url}`, async () => {
    await Ae.send(apiConf.queryDictionaries)
  })
})

describe(`${apiConf.addDictionary.desc}`, () => {
  test(`${apiConf.addDictionary.req.method.toUpperCase()} ${apiConf.addDictionary.req.url}`, async () => {
    var data =  await Ae.send(apiConf.addDictionary)
    Ae.share('id',data.id)
  })
})

describe(`${apiConf.updateDictionary.desc}`, () => {
  test(`${apiConf.updateDictionary.req.method.toUpperCase()} ${apiConf.updateDictionary.req.url}`, async () => {
    await Ae.send(apiConf.updateDictionary)
  })
})

describe(`${apiConf.updateQueuesAgents.desc}`, () => {
  test(`${apiConf.updateQueuesAgents.req.method.toUpperCase()} ${apiConf.updateQueuesAgents.req.url}`, async () => {
    await Ae.send(apiConf.updateQueuesAgents)
  })
})

describe(`${apiConf.deleteDictionary.desc}`, () => {
  test(`${apiConf.deleteDictionary.req.method.toUpperCase()} ${apiConf.deleteDictionary.req.url}`, async () => {
    await Ae.send(apiConf.deleteDictionary)
  })
})

describe(`${apiConf.queryGateWays.desc}`, () => {
  test(`${apiConf.queryGateWays.req.method.toUpperCase()} ${apiConf.queryGateWays.req.url}`, async () => {
    await Ae.send(apiConf.queryGateWays)
  })
})

describe(`${apiConf.queryTrunks.desc}`, () => {
  test(`${apiConf.queryTrunks.req.method.toUpperCase()} ${apiConf.queryTrunks.req.url}`, async () => {
    await Ae.send(apiConf.queryTrunks)
  })
})

describe(`${apiConf.updateTrunks.desc}`, () => {
  test(`${apiConf.updateTrunks.req.method.toUpperCase()} ${apiConf.updateTrunks.req.url}`, async () => {
    await Ae.send(apiConf.updateTrunks)
  })
})

describe(`${apiConf.queryVector.desc}`, () => {
  test(`${apiConf.queryVector.req.method.toUpperCase()} ${apiConf.queryVector.req.url}`, async () => {
    await Ae.send(apiConf.queryVector)
  })
})

describe(`${apiConf.queryIVRCalls.desc}`, () => {
  test(`${apiConf.queryIVRCalls.req.method.toUpperCase()} ${apiConf.queryIVRCalls.req.url}`, async () => {
    await Ae.send(apiConf.queryIVRCalls)
  })
})

describe(`${apiConf.queryPhrases.desc}`, () => {
  test(`${apiConf.queryPhrases.req.method.toUpperCase()} ${apiConf.queryPhrases.req.url}`, async () => {
    await Ae.send(apiConf.queryPhrases)
  })
})

describe(`${apiConf.updatePhrases.desc}`, () => {
  test(`${apiConf.updatePhrases.req.method.toUpperCase()} ${apiConf.updatePhrases.req.url}`, async () => {
    await Ae.send(apiConf.updatePhrases)
  })
})

describe(`${apiConf.queryRoutingPoints.desc}`, () => {
  test(`${apiConf.queryRoutingPoints.req.method.toUpperCase()} ${apiConf.queryRoutingPoints.req.url}`, async () => {
    await Ae.send(apiConf.queryRoutingPoints)
  })
})

describe(`${apiConf.updateRoutingPoints.desc}`, () => {
  test(`${apiConf.updateRoutingPoints.req.method.toUpperCase()} ${apiConf.updateRoutingPoints.req.url}`, async () => {
    await Ae.send(apiConf.updateRoutingPoints)
  })
})

describe(`${apiConf.getSatisfactionDef.desc}`, () => {
  test(`${apiConf.getSatisfactionDef.req.method.toUpperCase()} ${apiConf.getSatisfactionDef.req.url}`, async () => {
    await Ae.send(apiConf.getSatisfactionDef)
  })
})

describe(`${apiConf.addSatisfactionDef.desc}`, () => {
  test(`${apiConf.addSatisfactionDef.req.method.toUpperCase()} ${apiConf.addSatisfactionDef.req.url}`, async () => {
    await Ae.send(apiConf.addSatisfactionDef)
  })
})

describe(`${apiConf.getSnapshotAgents.desc}`, () => {
  test(`${apiConf.getSnapshotAgents.req.method.toUpperCase()} ${apiConf.getSnapshotAgents.req.url}`, async () => {
    await Ae.send(apiConf.getSnapshotAgents)
  })
})

describe(`${apiConf.queryAgentsByPermission.desc}`, () => {
  test(`${apiConf.queryAgentsByPermission.req.method.toUpperCase()} ${apiConf.queryAgentsByPermission.req.url}`, async () => {
    await Ae.send(apiConf.queryAgentsByPermission)
  })
})

describe(`${apiConf.queryCall.desc}`, () => {
  test(`${apiConf.queryCall.req.method.toUpperCase()} ${apiConf.queryCall.req.url}`, async () => {
    await Ae.send(apiConf.queryCall)
  })
})