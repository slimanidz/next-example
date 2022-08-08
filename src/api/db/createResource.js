const { writeFile, readdir } = require("node:fs/promises")
const getResourcePath = require("./getResourcePath")

const getNextId = async (resourceName) =>
  (await readdir(getResourcePath(resourceName))).reduce(
    (xs, x) => Math.max(xs, Number.parseInt(x, 10)),
    0
  ) + 1

const createResource = async (resourceName, resource) => {
  const newResource = {
    id: await getNextId(resourceName),
    ...resource,
  }

  await writeFile(
    getResourcePath(resourceName, newResource.id),
    JSON.stringify(newResource),
    { encoding: "utf-8", flag: "w" }
  )
}

module.exports = createResource
