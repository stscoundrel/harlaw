import { read } from './services/reader';
import { write } from './services/writer';
import { format } from './services/formatter';
import { DictionaryEntry } from './types/dictionary-entry';

import { NO_MARKUP_SETTINGS } from './constants/settings';

const toArray = async (file, settings = null): Promise<DictionaryEntry[]> => {
  const result = await read(file, settings);
  const dictionary = format(result, settings);

  return dictionary;
};

const toJson = async (file, output, settings = null): Promise<void> => {
  const dictionary = await toArray(file, settings);

  write(dictionary, output);
};

module.exports = {
  toJson,
  toArray,
  noMarkupSettings: NO_MARKUP_SETTINGS,
};
