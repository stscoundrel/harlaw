const { readFile } = require('./services/reader')
const { format } = require('./services/formatter')

const harlaw = async (file, output) => {
  const result = await readFile( file )
  const json = format(result)

  console.log(json)
}

module.exports = harlaw