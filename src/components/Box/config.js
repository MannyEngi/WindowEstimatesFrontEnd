import { system } from 'styled-system'

const CONFIG = {
  cursor: true,
  textDecoration: {
    property: 'textDecoration',
  },
  objectFit: true,
  transform: true,
  animation: true,
  visibility: true,
  transition: true,
  pointerEvents: true,
  textTransform: true,
  transformOrigin: true,
  objectPosition: true,
  backgroundAttachment: true,
  marginVertical: {
    properties: ['marginTop', 'marginBottom'],
  },
  marginHorizontal: {
    properties: ['marginLeft', 'marginRight'],
  },
  paddingVertical: {
    properties: ['paddingTop', 'paddingBottom'],
  },
  paddingHorizontal: {
    properties: ['paddingLeft', 'paddingRight'],
  },
}

const extraConfig = system(CONFIG)

export default extraConfig

const transformAlias = (prop, propValue) => {
  const configKeys = Object.keys(CONFIG)
  let result = {}

  if (configKeys.includes(prop)) {
    const { properties, property } = CONFIG[prop]
    if (properties) {
      properties.forEach((_cssProp) => (result[_cssProp] = propValue))
    }
    if (property) {
      result[property] = propValue
    }
    if (CONFIG[prop] === true) {
      result[prop] = propValue
    }
  } else {
    result[prop] = propValue
  }
  return result
}

export const transformAliasProps = (props) => {
  let result = {}
  for (let prop in props) {
    if (typeof props[prop] === 'object') {
      result = { ...result, [prop]: transformAliasProps(props[prop]) }
    } else {
      result = { ...result, ...transformAlias(prop, props[prop]) }
    }
  }
  return result
}
