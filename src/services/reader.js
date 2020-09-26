const readline = require('readline')
const fs = require('fs')

async function read(file) {
  const result = []
  const fileStream = fs.createReadStream(file)

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
