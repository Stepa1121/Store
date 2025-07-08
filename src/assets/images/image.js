// src/utils/svgLoader.js
const svgModules = import.meta.glob('/src/assets/images/icons/*.svg', {
  eager: true,
  as: 'url' // Ключевое изменение!
});

export const svgIcons = Object.entries(svgModules).reduce((acc, [path, module]) => {
  const name = path.split('/').pop().replace('.svg', '');
  acc[name] = module;
  return acc;
}, {});

// Для отладки
console.log('Loaded SVG icons:', svgIcons);