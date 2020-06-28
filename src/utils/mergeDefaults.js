export default config => {
  const defaultConfig = {
    adapt: true,
    router: {
      keyboard: true,
      arrows: true,
      black: true
    },
    modules: {
      pagenumber: true
    },
    theme: 'original',
    transition: 'horizontalSlide'
  }

  for (const k in defaultConfig) {
    if (!config.hasOwnProperty(k)) {
      config[k] = defaultConfig[k]
    } else {
      if (typeof defaultConfig[k] === 'object') {
        for (const h in defaultConfig[k]) {
          if (!config[k].hasOwnProperty(h)) {
            config[k][h] = defaultConfig[k][h]
          }
        }
      }
    }
  }
  return config
}