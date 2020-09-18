const TAB = '\t'
const SKIPS = ['#']
const MEANINGS = ['[/m]', '[m1]', '[m2]', '[m3]', '[m4]', '[m5]', '[m6]', '[m7]', '[m8]', '[m9]', '[m10]']
const REMOVES = [...MEANINGS, TAB, '[c gray]', '[/c]', '\\']
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

module.exports = {
  DEFAULT_SETTINGS,
  TAB,
  SKIPS,
  REPLACES,
  REMOVES,
}
