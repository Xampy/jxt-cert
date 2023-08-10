const { atx } = require('../lib/index')
const path = require('path')
const { loadJsonKey } = require('../lib/keys')
const { beforeEach } = require('mocha')
const { PRIVATE_KEY_URI_JSON_PATH_CHECKER_VACCINATION } = require('./data/constants')

const expect = require('chai').expect

beforeEach(async function () {
  //TODO: check path exists
})

describe('Load Json Key From path', function () {
  it('should read and parse', async function () {
    this.timeout(15000)
    let result = await loadJsonKey(PRIVATE_KEY_URI_JSON_PATH_CHECKER_VACCINATION)

    //TODO check content in another it
    expect(result).to.be.an('object')
    expect(Object.keys(result).length).to.not.eql(0)
  })
})
