import { STARTING_CHARACTERS, SKIPS } from '../constants/lingvo';
import { DEFAULT_SETTINGS } from '../constants/settings';
import { HarlawOptions } from '../types/options';
import { DictionaryEntry } from '../types/dictionary-entry';

const formatLine = (line: string, settings: HarlawOptions) => {
  const { replaces = [], removes = [] } = settings;
  let formatted = line;

  // Remove defined content.
  removes.forEach((remove) => {
    formatted = formatted.split(remove).join('');
  });

  // Replace defined content.
  replaces.forEach((pattern) => {
    const { search, replace } = pattern;
    formatted = formatted.split(search).join(replace);
  });

  // Trim additional formatting spaces.
  formatted = formatted.trim();

  return formatted;
};

export const format = (
  data: string[],
  userSettings: HarlawOptions | null = null,
): DictionaryEntry[] => {
  const settings = userSettings || DEFAULT_SETTINGS;

  const words: DictionaryEntry[] = [];
  let index = 0;

  data.forEach((line, lineIndex) => {
    const startsWith = line.charAt(0);

    // Skip metadata & empty lines.
    if (SKIPS.includes(startsWith) || line === '') {
      return;
    }

    // Tab/Space means it is definition of previous word.
    if (STARTING_CHARACTERS.includes(startsWith)) {
      const definition = formatLine(line, settings);
      words[index - 1].definitions.push(definition);

      return;
    }
    /**
     * Check if previous entry is empty -> DSL files group definitions together oddly.
     * The real definition may be in following entries.
     */
    if (words.length > 0) {
      if (words[index - 1].definitions.length === 0) {
        let notFound = true;
        let newIndex = lineIndex;

        while (notFound) {
          newIndex += 1;

          if (STARTING_CHARACTERS.includes(data[newIndex].charAt(0))) {
            const foundDefinition = formatLine(data[newIndex], settings);
            words[index - 1].definitions.push(foundDefinition);
            notFound = false;
          }
        }
      }
    }

    // The line is a headword, start new entry.
    words.push({ word: formatLine(line, settings), definitions: [] });
    index += 1;
  });

  return words;
};

export default {
  format,
};
