const { resolve } = require("path")
const config = require("../config")

const getResourcePath = (resourceName, resourceId = "") =>
  resourceId
    ? resolve(config.db.path, resourceName, `${resourceId}.json`)
    : resolve(config.db.path, resourceName)

module.exports = getResourcePath
