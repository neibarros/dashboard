const FindObjectProperty = (data: unknown, key: string) => {
  if (!data) {
    return undefined
  }
  let obj = data as { [key: string]: unknown }
  let s = key.replace(/\[(\w+)\]/g, '.$1')
  s = s.replace(/^\./, '')
  const a = s.split('.')
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i]
    if ((typeof obj === 'object' || Array.isArray(obj)) && k in obj) {
      // eslint-disable-next-line @typescript-eslint/ban-types
      obj = obj[k] as {}
    } else {
      return undefined
    }
  }
  return obj
}

export default FindObjectProperty
