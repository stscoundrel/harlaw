const { read } = require('./services/reader')
const { write } = require('./services/writer')
const { format } = require('./services/formatter')

const { NO_MARKUP_SETTINGS } = require('./constants/settings.js')

const harlaw = async (file, output, settings = null) => {
  const result = await read(file)
  const dictionary = format(result, settings)

  write(dictionary, output)

  return dictionary
}

module.exports = {
  harlaw,
  noMarkupSettings: NO_MARKUP_SETTINGS,
}
