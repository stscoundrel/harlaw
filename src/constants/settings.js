const { TAB, MEANINGS } = require('./characters.js')

const REMOVES = [...MEANINGS, TAB, '[c gray]', '[/c]', '\\', '[trn]', '[/trn]']
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
]

const DEFAULT_SETTINGS = {
  replaces: REPLACES,
  removes: REMOVES,
}

const NO_MARKUP_SETTINGS = {
  replaces: [],
  removes: [
    ...MEANINGS, '\\', '[b]', '[/b]', '[i]', '[/i]', '[p]', '[/p]', '[ref]', '[/ref]', '[/m]',
  ],
}

module.exports = {
  DEFAULT_SETTINGS,
  NO_MARKUP_SETTINGS,
}
