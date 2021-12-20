const items = [
  {
    name: 'Followers',
    value: 'followers',
  },
  {
    name: 'Following',
    value: 'following',
  },
]

export default {
  items,
  get: (value) => {
    const selected = items.filter(item => item.value === value)
    if (selected.length > 0) return selected[0].value

    return items[0].value
  },
}
