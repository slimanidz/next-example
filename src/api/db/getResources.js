const { readdir, readFile } = require("node:fs/promises")
const getResourcePath = require("./getResourcePath")

const getResources = async (resourceName) => {
  const resources = (
    await Promise.all(
      (
        await readdir(getResourcePath(resourceName))
      ).map((entry) =>
        readFile(getResourcePath(resourceName, Number.parseInt(entry)))
      )
    )
  ).map((data) => JSON.parse(data))

  return resources
}

module.exports = getResources
