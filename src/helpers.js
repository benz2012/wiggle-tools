const getContent = (data, contentName) => {
  const plainTextContent = data
    .allFile
    .nodes
    .find(n => n.name === contentName)
    .childrenPlainText[0]
    .content

  return plainTextContent;
}

export { getContent }
