import { autoplay } from './io/autoplay/index.js'
import { keyboard } from './io/keyboard/index.js'
import { arrows } from './io/arrows/index.js'
import { black } from './io/black/index.js'

const io = {
  autoplay,
  keyboard,
  arrows,
  black
}

const add = (type, module) => {
  if (io[type]) {
    return console.warn(`router io ${type} already defined`)
  }
  io[type] = module
}

export { io, add }