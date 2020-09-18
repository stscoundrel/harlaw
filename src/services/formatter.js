const { TAB, REMOVES, SKIPS } = require('../constants/characters.js')

const formatDefinition = (line) => {
  let formatted = line

  // Remove replaceable content.
  REMOVES.forEach(remove => {
    formatted = formatted.replace(remove, '')
  })

  return formatted
}

const format = (data) => {
  const words = []
  let index = 0

  data.forEach(line => {
    let startsWith = line.charAt(0)

    // Skip metadata lines.
    if( SKIPS.includes(startsWith) ) {
      return
    }

    // Tab means it is definition of previous word.
    if( startsWith === TAB ) {
      const definition = formatDefinition(line)
      words[index - 1].definitions.push(definition)

      return
    }

    // The line is a headword, start new entry.
    words.push( { word: line, definitions: [] } )
    index = index + 1
  })

  return words
}

module.exports = {
  format,
}