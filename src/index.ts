import { PathLike } from 'fs';
import { read } from './services/reader';
import { write } from './services/writer';
import { format } from './services/formatter';
import { DictionaryEntry } from './types/dictionary-entry';
import { HarlawOptions } from './types/options';

import { NO_MARKUP_SETTINGS } from './constants/settings';

export const toArray = async (
  file: PathLike,
  settings: HarlawOptions | null = null,
): Promise<DictionaryEntry[]> => {
  const result = await read(file, settings);
  const dictionary = format(result, settings);

  return dictionary;
};

export const toJson = async (
  file: PathLike,
  output: PathLike,
  settings: HarlawOptions | null = null,
): Promise<void> => {
  const dictionary = await toArray(file, settings);

  write(dictionary, output);
};

export default {
  toJson,
  toArray,
  noMarkupSettings: NO_MARKUP_SETTINGS,
};
