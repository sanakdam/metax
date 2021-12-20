const items = [
  {
    name: 'Home',
    to: '/',
    actives: ['/', '/search'],
    icons: ['rulerDefault', 'rulerActive'],
  },
  {
    name: 'Tags',
    to: '/tags',
    actives: ['/tags'],
    icons: ['rulerDefault', 'rulerActive'],
  },
]

export default {
  items,
  get: (path, icons, actives) => {
    const routes = actives.filter((route) => route === path)
    if (routes.length > 0) {
      return {
        active: true,
        icon: icons[1] || '',
      }
    }

    return {
      active: false,
      icon: icons[0] || '',
    }
  },
}
