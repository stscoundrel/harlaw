const { readFile } = require('./services/reader')
const { format } = require('./services/formatter')

const harlaw = async (file, output, settings = null) => {
  const result = await readFile(file)
  const json = format(result, settings)

  console.log(json)
}

module.exports = harlaw
