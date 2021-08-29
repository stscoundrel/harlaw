import readline from 'readline';
import fs, { PathLike } from 'fs';
import { HarlawOptions } from '../types/options';

export async function read(
  file: PathLike,
  settings: HarlawOptions | null,
): Promise<string[]> {
  const result: string[] = [];

  // Allow custom readSettings.
  const readSettings = settings && settings.readSettings ? settings.readSettings : {};

  const fileStream = fs.createReadStream(file, readSettings);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  // eslint-disable-next-line no-restricted-syntax
  for await (const line of rl) {
    result.push(line);
  }

  return result;
}

export default {
  read,
};
