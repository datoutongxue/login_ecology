const BASE_WIDTH = 375 // design width in px

function setRemBase() {
  const docEl = document.documentElement
  const width = docEl.clientWidth || window.innerWidth
  // 10rem equals viewport width
  const fontSize = (width / BASE_WIDTH) * 37.5 // keep compatibility with common 37.5 base
  docEl.style.fontSize = `${fontSize}px`
}

setRemBase()
window.addEventListener('resize', setRemBase)