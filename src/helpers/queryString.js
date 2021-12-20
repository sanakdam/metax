import queryString from 'query-string'

const clean = (object) => {
  const result = object
  for (const name in result) {
    if (result[name] === null || result[name] === undefined || result[name] === '') {
      delete result[name]
    }
  }

  return result
}

export default {
  stringify: (object) => {
    const formated = clean(object)
    return queryString.stringify(formated)
  },
  parse: string => queryString.parse(string),
}
