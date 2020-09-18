const { TAB, SKIPS, DEFAULT_SETTINGS } = require('../constants/characters.js')

const formatLine = (line, settings) => {
  const { replaces, removes } = settings
  let formatted = line

  // Remove defined content.
  removes.forEach((remove) => {
    formatted = formatted.split(remove).join('')
  })

  // Replace defined content.
  replaces.forEach((pattern) => {
    const { search, replace } = pattern
    formatted = formatted.split(search).join(replace)
  })

  return formatted
}

const format = (data, userSettings = null) => {
  const settings = userSettings || DEFAULT_SETTINGS

  const words = []
  let index = 0

  data.forEach((line) => {
    const startsWith = line.charAt(0)

    // Skip metadata lines.
    if (SKIPS.includes(startsWith)) {
      return
    }

    // Tab means it is definition of previous word.
    if (startsWith === TAB) {
      const definition = formatLine(line, settings)
      words[index - 1].definitions.push(definition)

      return
    }

    // The line is a headword, start new entry.
    words.push({ word: formatLine(line, settings), definitions: [] })
    index += 1
  })

  return words
}

module.exports = {
  format,
}
