const fs = require('fs')
const { toArray, noMarkupSettings } = require('../index.js')

const inputFile = `${__dirname}/fixtures/dsl/testDictionary.dsl`

const defaultOutputFile = `${__dirname}/fixtures/json/defaultTestDictionary.json`
const noMarkupOutputFile = `${__dirname}/fixtures/json/noMarkupTestDictionary.json`
const customSettingsOutputFile = `${__dirname}/fixtures/json/customTestDictionary.json`

const expectedDefaultOutput = JSON.parse(fs.readFileSync(defaultOutputFile))
const expectedNoMarkupOutput = JSON.parse(fs.readFileSync(noMarkupOutputFile))
const expectedCustomSettingsOutput = JSON.parse(fs.readFileSync(customSettingsOutputFile))

describe('DSL to array', () => {
  test('Default settings: matches expected json output', async () => {
    const result = await toArray(inputFile)

    expect(result).toMatchObject(expectedDefaultOutput)
  })

  test('noMarkupSettings: matches expected json output', async () => {
    const result = await toArray(inputFile, noMarkupSettings)

    expect(result).toMatchObject(expectedNoMarkupOutput)
  })

  test('Custom settings: matches expected json output', async () => {
    const customSettings = {
      replaces: [
        { search: '[b]', replace: '<bold>' },
        { search: '[/b]', replace: '</bold>' },
        { search: '[i]', replace: '<italics>' },
        { search: '[/i]', replace: '</italics>' },
      ],
      removes: ['[m1]', '[m2]', '[/m]', '\t'],
    }

    const result = await toArray(inputFile, customSettings)

    expect(result).toMatchObject(expectedCustomSettingsOutput)
  })
})
