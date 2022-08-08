const {resolve} = require("path")
const config = require("../config")

const getResourcePath = (resourceName, resourceId = "") => resolve(config.db.path, resourceName, resourceId)

module.exports = getResourcePath