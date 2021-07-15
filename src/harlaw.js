const { read } = require('./services/reader')
const { write } = require('./services/writer')
const { format } = require('./services/formatter')

const { NO_MARKUP_SETTINGS } = require('./constants/settings')

const toJson = async (file, output, settings = null) => {
  const dictionary = await toArray(file, settings)

  write(dictionary, output)
}

const toArray = async (file, settings = null) => {
  const result = await read(file, settings)
  const dictionary = format(result, settings)

  return dictionary
}

module.exports = {
  toJson,
  toArray,
  noMarkupSettings: NO_MARKUP_SETTINGS,
}
