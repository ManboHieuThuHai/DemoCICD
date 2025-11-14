const config = require('../config')

describe('Config Module', () => {
  it('exports a valid configuration object', () => {
    expect(config).toBeDefined()
    expect(typeof config).toBe('object')
  })

  it('has required properties', () => {
    expect(config).toHaveProperty('appName')
    expect(config).toHaveProperty('version')
    expect(config).toHaveProperty('environment')
    expect(config).toHaveProperty('api')
    expect(config).toHaveProperty('features')
  })

  it('has valid API configuration', () => {
    expect(config.api).toHaveProperty('baseURL')
    expect(config.api).toHaveProperty('timeout')
    expect(typeof config.api.timeout).toBe('number')
  })

  it('has valid features configuration', () => {
    expect(config.features).toHaveProperty('authentication')
    expect(config.features).toHaveProperty('logging')
    expect(typeof config.features.authentication).toBe('boolean')
    expect(typeof config.features.logging).toBe('boolean')
  })

  it('version follows semantic versioning', () => {
    const semverRegex = /^\d+\.\d+\.\d+$/
    expect(config.version).toMatch(semverRegex)
  })
})
