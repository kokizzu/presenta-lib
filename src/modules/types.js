import steps from './steps/index'
import jump from './jump/index'

const modules = {
  steps,
  jump
}

const add = (type, module, override) => {
  if (!override && modules[type]) {
    return console.warn(`module type ${type} already defined`)
  }
  if (override && modules[type]) {
    console.warn(`module type ${type} was overriden`)
  }
  modules[type] = module
}

export { modules, add }
