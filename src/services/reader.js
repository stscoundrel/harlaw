const readline = require('readline')
const fs = require('fs')

async function read(file, settings) {
  const result = []

  // Allow custom readSettings.
  const readSettings = settings && settings.readSettings ? settings.readSettings : {}

  const fileStream = fs.createReadStream(file, readSettings)

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    result.push(line)
  }

  return result
}

module.exports = {
  read,
}
