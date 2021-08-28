import fs from 'fs';
import { DictionaryEntry } from '../types/dictionary-entry';

export const write = (content: DictionaryEntry[], location: string): void => {
  fs.writeFileSync(location, JSON.stringify(content));
};

export default {
  write,
};
