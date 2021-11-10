import fs from 'fs';
import { toJson } from '../src';

const inputFile = `${__dirname}/fixtures/dsl/testDictionary.dsl`;
const outputFile = `${__dirname}/fixtures/json/TEST_OUTPUT.json`;

describe('DSL to JSON file', () => {
  afterEach(() => fs.unlinkSync(outputFile));

  test('Creates a JSON file from DSL', async () => {
    await toJson(inputFile, outputFile);

    const result = fs.existsSync(outputFile);

    expect(result).toBeTruthy();
  });
});
