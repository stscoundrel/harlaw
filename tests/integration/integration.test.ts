import fs from 'fs';
import { toArray, noMarkupSettings } from '../../src';

const inputFile = `${__dirname}/../fixtures/dsl/chineseRussianIssue60.dsl`;
const expectedOutput = JSON.parse(fs.readFileSync(`${__dirname}/../fixtures/json/chineseRussian.json`));
const expectedOutputNoMarkup = JSON.parse(fs.readFileSync(`${__dirname}/../fixtures/json/chineseRussianNoMarkup.json`));

describe('Russian - Chinese dictionary with empty lines & spaces', () => {
  test('Default settings: matches expected json output', async () => {
    const result = await toArray(inputFile);

    expect(result).toMatchObject(expectedOutput);
  });

  test('No markup settings: matches expected json output', async () => {
    const result = await toArray(inputFile, noMarkupSettings);

    expect(result).toMatchObject(expectedOutputNoMarkup);
  });
});
