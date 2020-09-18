const TAB = '\t'
const SKIPS = ['#']
const MEANINGS = ['[/m]', '[m1]', '[m2]', '[m3]', '[m4]', '[m5]', '[m6]', '[m7]', '[m8]', '[m9]', '[m10]' ]
const REMOVES = [ ...MEANINGS, TAB]

module.exports = {
  TAB,
  SKIPS,
  REMOVES
}