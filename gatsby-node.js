const isTextFile = node => {
  return (
    node.internal.type === "File" && node.internal.mediaType === "text/plain"
  )
}

const isFileWithoutExtension = node => {
  return (
    node.internal.type === "File" &&
    node.internal.mediaType === "application/octet-stream" &&
    !node.internal.extension
  )
}

const isNodeSupported = node => {
  return isTextFile(node) || isFileWithoutExtension(node)
}

exports.onCreateNode = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  if (!isNodeSupported(node)) {
    return
  }
  const { createNode, createParentChildLink } = actions
  const content = await loadNodeContent(node)
  const id = createNodeId(`${node.id} >>> PlainText`)
  const plainTextNode = {
    id,
    children: [],
    content,
    parent: node.id,
    internal: {
      contentDigest: createContentDigest(content),
      type: "PlainText",
    },
  }
  createNode(plainTextNode)
  createParentChildLink({
    parent: node,
    child: plainTextNode,
  })
}
