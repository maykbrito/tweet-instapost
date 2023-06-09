import './style.css'
import './controls.js'
import domtoimage from 'dom-to-image';

const app = document.getElementById('app')

async function prepareStyle() {
  return new Promise((resolve, reject) => {
      const fontSize = '151%'

      app.style.margin = 0
      app.style.overflow = 'hidden'
      app.style.fontSize = fontSize
  
      if(app.style.fontSize === fontSize) {
        return resolve()
      } 

      return reject()
  })
}

function rollbackStyle() {
  app.style.margin = 'auto'
  app.style.overflow = 'auto'
  app.style.fontSize = '70%'
}

const execute = {
  toJpeg(img) {
    modal.innerHTML = ""
    modal.appendChild(img)
  },
  toSvg(img) {
    const canvas = document.createElement('canvas')
    canvas.width = 1080
    canvas.height = 1350
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width,canvas.height);
  
    img.addEventListener('load', () => {
      ctx.drawImage(img, 0, 0)
    })
  
    modal.innerHTML = ""
    modal.appendChild(canvas)
  }
}

async function domToImage(type = 'toJpeg'){
  const options = { width: '1080', height: '1350', style: {}}

  const dataUrl = await domtoimage[type](app, options)
  const img = new Image();
  img.src = dataUrl;

  execute[type](img)
}

download.onclick = async () => {
  try {
    await prepareStyle()
    await domToImage()
    modal.showModal()
  } catch(e) {
    console.error('something wrong here', e)
  } finally {
    rollbackStyle()
  }
}
