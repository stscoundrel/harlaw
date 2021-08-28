import readline from 'readline';
import fs from 'fs';

export async function read(
  file: string,
  settings: { readSettings: Record<string, unknown>; } | null,
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
