// src/utils/svgLoader.js
const svgModules = import.meta.glob('/src/assets/images/icons/*.svg', {
  eager: true,
  as: 'react'  // Импортируем как React-компоненты
})

export const svgIcons = Object.entries(svgModules).reduce((acc, [path, module]) => {
  const name = path.split('/').pop().replace('.svg', '')
  acc[name] = module.default
  return acc
}, {})

console.log('Loaded SVG icons:', svgIcons)