const isTextFile = node => (
  node.internal.type === "File" && node.internal.mediaType === "text/plain"
)

exports.onCreateNode = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
  if (!isTextFile(node)) return

  const { createNode, createParentChildLink } = actions
  const content = await loadNodeContent(node)
  const id = createNodeId(`${node.id} PlainText`)
  const plainTextNode = {
    id,
    content,
    parent: node.id,
    children: [],
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
