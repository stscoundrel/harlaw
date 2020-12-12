const fs = require('fs')
const { toJson, toArray, noMarkupSettings } = require('../index.js')

const inputFile = `${__dirname}/fixtures/dsl/testDictionary.dsl`
const inputFileGrouped = `${__dirname}/fixtures/dsl/testDictionaryGrouped.dsl`
const outputFile = `${__dirname}/fixtures/json/TEST_OUTPUT.json`

describe('DSL to array', () => {
  const defaultOutputFile = `${__dirname}/fixtures/json/defaultTestDictionary.json`
  const noMarkupOutputFile = `${__dirname}/fixtures/json/noMarkupTestDictionary.json`
  const customSettingsOutputFile = `${__dirname}/fixtures/json/customTestDictionary.json`
  const groupedOutputFile = `${__dirname}/fixtures/json/groupedTestDictionary.json`

  const expectedDefaultOutput = JSON.parse(fs.readFileSync(defaultOutputFile))
  const expectedNoMarkupOutput = JSON.parse(fs.readFileSync(noMarkupOutputFile))
  const expectedCustomSettingsOutput = JSON.parse(fs.readFileSync(customSettingsOutputFile))
  const expectedGroupedOutputFile = JSON.parse(fs.readFileSync(groupedOutputFile))

  test('Default settings: matches expected json output', async () => {
    const result = await toArray(inputFile)

    expect(result).toMatchObject(expectedDefaultOutput)
  })

  test('noMarkupSettings: matches expected json output', async () => {
    const result = await toArray(inputFile, noMarkupSettings)

    expect(result).toMatchObject(expectedNoMarkupOutput)
  })

  test('Shared definitions: uses same definition, if DSL is grouped.', async () => {
    const result = await toArray(inputFileGrouped)
    expect(result).toMatchObject(expectedGroupedOutputFile)
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

describe('DSL to JSON file', () => {
  afterEach(() => fs.unlinkSync(outputFile));

  test('Creates a JSON file from DSL', async () => {
    await toJson(inputFile, outputFile)

    const result = fs.existsSync(outputFile)

    expect(result).toBeTruthy()
  })
})
