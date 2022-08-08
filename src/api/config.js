const { resolve } = require("path")

const config = {
  db: {
      path: resolve(__dirname, "../../db")
  }
}

module.exports = config