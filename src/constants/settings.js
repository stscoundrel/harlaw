const {
  TAB, MEANINGS, COLORS, COMMON, REPLACEABLES,
} = require('./lingvo.js')

const REMOVES = [...MEANINGS, ...COLORS, TAB, ...COMMON, '\\']
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
]

const DEFAULT_SETTINGS = {
  replaces: REPLACES,
  removes: REMOVES,
}

const NO_MARKUP_SETTINGS = {
  replaces: [],
  removes: [
    ...REMOVES, ...REPLACEABLES,
  ],
}

module.exports = {
  DEFAULT_SETTINGS,
  NO_MARKUP_SETTINGS,
}
