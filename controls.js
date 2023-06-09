let imageCover = false
let imageShadow = false
let breakWord = false

// build
const controls = {
  toggleDarkMode() {
    document.body.classList.toggle('dark')
  },
  toggleImageCover() {
    imageCover = !imageCover
    document.querySelector('main img')
    .style
    .objectFit = imageCover ? 'cover' : 'contain'
  },
  toggleImageShadow() {
    imageShadow = !imageShadow
    document.querySelector('main img')
    .style
    .boxShadow = imageShadow ? '0 0 1rem -.3rem #0003' : '0 0 0 0'
  },
  toggleBreakWord() {
    breakWord = !breakWord
    document.querySelector('main')
      .style.wordBreak = breakWord ? 'break-all' : 'normal'
  }
}

// execute
Object.keys(controls).forEach(key => {
  document.getElementById(key).addEventListener('change', () => {
    controls[key]()
  })
})