import {
  TAB, MEANINGS, COLORS, COMMON, REPLACEABLES,
} from './lingvo';

const REMOVES = [...MEANINGS, ...COLORS, TAB, ...COMMON, '\\'];
const REPLACES = [
  { search: '[b]', replace: '<strong>' },
  { search: '[/b]', replace: '</strong>' },
  { search: '[i]', replace: '<i>' },
  { search: '[/i]', replace: '</i>' },
  { search: '[p]', replace: '<span>' },
  { search: '[/p]', replace: '</span>' },
  { search: '{-}', replace: '-' },
  { search: '[ref]', replace: '<span class="reference">' },
  { search: '[/ref]', replace: '</span>' },
  { search: '[sub]', replace: '<sub>' },
  { search: '[/sub]', replace: '</sub>' },
  { search: '[sup]', replace: '<sup>' },
  { search: '[/sup]', replace: '</sup>' },
];

export const DEFAULT_SETTINGS = {
  replaces: REPLACES,
  removes: REMOVES,
};

export const NO_MARKUP_SETTINGS = {
  replaces: [],
  removes: [
    ...REMOVES, ...REPLACEABLES,
  ],
};

export default {
  DEFAULT_SETTINGS,
  NO_MARKUP_SETTINGS,
};
