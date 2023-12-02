import '@fontsource/roboto'
import '@fontsource/roboto-slab/700.css'

export const onInitialClientRender = () => {
  const { hash } = window.location
  if (hash.length > 1) {
    const id = hash.substring(1)
    const elm = document.getElementById(id)
    if (elm) {
      elm.scrollIntoView()
    }
  }
}
