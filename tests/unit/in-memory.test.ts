import fs from 'fs';
import { toArray, noMarkupSettings } from '../../src';

const inputFile = `${__dirname}/../fixtures/dsl/testDictionary.dsl`;
const inputFileGrouped = `${__dirname}/../fixtures/dsl/testDictionaryGrouped.dsl`;
const inputFileWithEmptyLines = `${__dirname}/../fixtures/dsl/testDictionaryEmptyLines.dsl`;
const inputFileWithSpaces = `${__dirname}/../fixtures/dsl/testDictionarySpaces.dsl`;

describe('DSL to array', () => {
  const defaultOutputFile = `${__dirname}/../fixtures/json/defaultTestDictionary.json`;
  const noMarkupOutputFile = `${__dirname}/../fixtures/json/noMarkupTestDictionary.json`;
  const customSettingsOutputFile = `${__dirname}/../fixtures/json/customTestDictionary.json`;
  const groupedOutputFile = `${__dirname}/../fixtures/json/groupedTestDictionary.json`;

  const expectedDefaultOutput = JSON.parse(fs.readFileSync(defaultOutputFile));
  const expectedNoMarkupOutput = JSON.parse(fs.readFileSync(noMarkupOutputFile));
  const expectedCustomSettingsOutput = JSON.parse(fs.readFileSync(customSettingsOutputFile));
  const expectedGroupedOutputFile = JSON.parse(fs.readFileSync(groupedOutputFile));

  test('Default settings: matches expected json output', async () => {
    const result = await toArray(inputFile);

    expect(result).toMatchObject(expectedDefaultOutput);
  });

  test('noMarkupSettings: matches expected json output', async () => {
    const result = await toArray(inputFile, noMarkupSettings);

    expect(result).toMatchObject(expectedNoMarkupOutput);
  });

  test('Shared definitions: uses same definition, if DSL is grouped.', async () => {
    const result = await toArray(inputFileGrouped);
    expect(result).toMatchObject(expectedGroupedOutputFile);
  });

  test('Custom settings: matches expected json output', async () => {
    const customSettings = {
      replaces: [
        { search: '[b]', replace: '<bold>' },
        { search: '[/b]', replace: '</bold>' },
        { search: '[i]', replace: '<italics>' },
        { search: '[/i]', replace: '</italics>' },
      ],
      removes: ['[m1]', '[m2]', '[/m]', '\t'],
    };

    const result = await toArray(inputFile, customSettings);

    expect(result).toMatchObject(expectedCustomSettingsOutput);
  });

  test('Allows empty lines in source files, output should not change (issue #60)', async () => {
    const result = await toArray(inputFileWithEmptyLines);
    expect(result).toMatchObject(expectedDefaultOutput);
  });

  test('Definitions: allows spaces instead of tabs, output should not change (issue #60)', async () => {
    const result = await toArray(inputFileWithSpaces);
    expect(result).toMatchObject(expectedDefaultOutput);
  });
});
