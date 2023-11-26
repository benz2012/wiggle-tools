const getContent = (data, contentName) => {
  return data.allFile.nodes.find(n => n.name === contentName).childrenPlainText[0].content;
}

export { getContent }
