const fs = require('fs')

const write = (content, location) => {
  fs.writeFileSync(location, JSON.stringify(content))
}

module.exports = {
  write,
}
